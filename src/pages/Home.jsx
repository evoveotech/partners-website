import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Mesh, SphereGeometry, MeshStandardMaterial, Points, BufferGeometry, BufferAttribute } from 'three';
import { Link } from 'react-router-dom';
import { STATS } from '../content/config';

// 3D floating element (react-three-fiber)
function FloatingMesh({ color, size, speed, waveOffset }) {
  const mesh = useRef();

  useFrame((state, delta) => {
    if (mesh.current) {
      const time = state.clock.elapsedTime;
      const floatY = Math.sin(time * speed + waveOffset) * size * 0.3;
      mesh.current.position.y = floatY + state.scroll * 0.3;
      mesh.current.rotation.x += delta * speed * 0.3;
      mesh.current.rotation.y += delta * speed * 0.5;
      const hue = (time * 0.05 + waveOffset) % 360;
      mesh.current.material.color.setHSL(hue / 360, 0.8, 0.6 + 0.4 * Math.sin(time * speed));
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} />
    </mesh>
  );
}

// Particle field background
function ParticleField({ count }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      positions.push({
        id: i,
        x: (Math.random() - 0.5) * 30,
        y: (Math.random() - 0.5) * 30,
        z: (Math.random() - 0.5) * 30,
        size: Math.random() * 0.2 + 0.05,
        speed: Math.random() * 0.5 + 0.1,
      });
    }
    setParticles(positions);
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length}
          array={new Float32Array(particles.flatMap((p) => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#0b0b0b" size={0.05} transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

// Animated number counter (for stats)
function Counter({ value, suffix, duration = 2000 }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const startTimestamp = performance.now();

    const animate = (timestamp) => {
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  return <span>{display.toLocaleString()}{suffix}</span>;
}

// Hero section with 3D scene
function Hero() {
  return (
    <section className="hero" style={{ position: 'relative', overflow: 'hidden', background: '#0b0b0b', color: '#fff', paddingBottom: '0' }}>
      {/* 3D Scene */}
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 2]}
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
      >
        <color attach="background" args={['#0b0b0b']} />
        <fog attach="fog" args={['#0b0b0b', 5, 20]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 10]} intensity={0.8} />
        <PointLight position={[-10, -10, -10]} intensity={0.3} />
        <OrbitControls
          enableZoom={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2.5}
        />
        <FloatingMesh color="#4f46e5" size={0.8} speed={0.6} waveOffset={0} />
        <FloatingMesh color="#10b981" size={0.5} speed={0.8} waveOffset={1} />
        <FloatingMesh color="#f59e0b" size={0.6} speed={0.7} waveOffset={2} />
        <FloatingMesh color="#ef4444" size={0.4} speed={0.9} waveOffset={3} />
        <FloatingMesh color="#8b5cf6" size={0.5} speed={0.75} waveOffset={4} />
        <Points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={300}
              array={new Float32Array(300 * 3)}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial color="#0b0b0b" size={0.05} transparent opacity={0.6} sizeAttenuation />
        </Points>
      </Canvas>

      {/* Overlay content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: '64px',
        alignItems: 'center',
        height: '100vh',
        padding: '120px 0',
      }}>
        <div style={{ maxWidth: '620px' }}>
          <h1 style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.6rem)', marginBottom: '24px' }}>
            Production software,{' '}
            <span style={{ background: 'linear-gradient(135deg, #0b0b0b 0%, #3a3a3a 60%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              engineered for scale.
            </span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#6b6b6b' }}>
            A boutique development practice building high-performance web products for startups and established brands.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
            <Link to="/services" className="btn btn--accent">View our work</Link>
            <Link to="/contact" className="btn">Get in touch</Link>
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <div className="hero__stat" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontWeight: 700 }}>10+</h3>
              <p style={{ color: '#6b6b6b', fontSize: '0.92rem' }}>Years of Experience</p>
            </div>
            <div className="hero__stat" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontWeight: 700 }}>800+</h3>
              <p style={{ color: '#6b6b6b', fontSize: '0.92rem' }}>Projects Completed</p>
            </div>
            <div className="hero__stat" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontWeight: 700 }}>300+</h3>
              <p style={{ color: '#6b6b6b', fontSize: '0.92rem' }}>Clients Worldwide</p>
            </div>
          </div>
        </div>
        {/* 3D floating elements overlay */}
        <div style={{
          position: 'relative',
          height: '100%',
          display: 'grid',
          placeItems: 'center',
          opacity: 0.6,
        }}>
          <div style={{ position: 'absolute', width: '400px', height: '400px' }}>
            <FloatingMesh color="#4f46e5" size={0.8} speed={0.6} waveOffset={0} />
            <FloatingMesh color="#10b981" size={0.5} speed={0.8} waveOffset={1} />
            <FloatingMesh color="#f59e0b" size={0.6} speed={0.7} waveOffset={2} />
          </div>
        </div>
      </div>
    </section>
  );
}

// Stats section
function StatsBar() {
  return (
    <section className="section section--surface" style={{ background: '#0b0b0b', color: '#fff' }}>
      <div className="container">
        <div className="grid grid--5" style={{ gap: '48px' }}>
          {STATS.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <h3 style={{ fontWeight: 700, color: '#fff', fontSize: 'clamp(2rem, 3vw, 2.8rem)' }}>
                <Counter value={parseInt(s.value)} suffix={s.value.includes('%') ? '%' : '+'} />
              </h3>
              <p style={{ color: '#6b6b6b', fontSize: '0.92rem' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Services section
function Services() {
  return (
    <section className="section" style={{ background: '#0b0b0b', color: '#fff' }}>
      <div className="container">
        <div className="section-heading" style={{ color: '#fff' }}>
          <h2 style={{ color: '#fff' }}>Services</h2>
          <p style={{ color: '#6b6b6b' }}>Full-stack development, AI engineering, and everything in between.</p>
        </div>
        <div className="grid grid--4" style={{ gap: '24px' }}>
          {SERVICES.map((s) => (
            <div key={s.name} className="project-card" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', color: '#fff' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#fff' }}>{s.name}</h3>
              <p style={{ color: '#6b6b6b', fontSize: '0.95rem' }}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Industries section
function Industries() {
  return (
    <section className="section" style={{ background: '#0f0f0f', color: '#fff' }}>
      <div className="container">
        <div className="section-heading" style={{ color: '#fff' }}>
          <h2 style={{ color: '#fff' }}>Industries We Serve</h2>
          <p style={{ color: '#6b6b6b' }}>Custom solutions for your industry. From healthcare to gaming, we build what you need.</p>
        </div>
        <div className="grid grid--3" style={{ gap: '24px' }}>
          {INDUSTRIES.map((ind) => (
            <div key={ind.label} className="case-study-card" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#fff' }}>{ind.label}</h3>
                <p style={{ color: '#6b6b6b', fontSize: '0.9rem' }}>Over {ind.count} projects delivered</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Portfolio section
function Portfolio() {
  return (
    <section className="section" style={{ background: '#0b0b0b', color: '#fff' }}>
      <div className="container">
        <div className="section-heading" style={{ color: '#fff' }}>
          <h2 style={{ color: '#fff' }}>Our Digital Masterpieces</h2>
          <p style={{ color: '#6b6b6b' }}>Explore our portfolio of successful digital solutions delivered to clients worldwide.</p>
        </div>
        <div className="grid grid--2" style={{ gap: '24px' }}>
          {CASE_STUDIES.map((cs) => (
            <div key={cs.title} className="project-card" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
              <div className="project-card__image" style={{ height: '200px', backgroundColor: '#2a2a2a' }}>
                <span className="project-card__image-label" style={{ fontSize: '1.4rem' }}>{cs.title}</span>
              </div>
              <div className="project-card__body">
                <div className="project-card__meta">
                  <span className="project-card__client" style={{ color: '#fff' }}>{cs.category}</span>
                  <span className="tag" style={{ background: '#2a2a2a', color: '#fff' }}>{cs.type}</span>
                </div>
                <h3 className="project-card__name" style={{ color: '#fff' }}>{cs.title}</h3>
                <p className="project-card__tagline" style={{ color: '#6b6b6b' }}>{cs.description}</p>
                <div style={{ display: 'flex', gap: '16px', marginTop: '12px' }}>
                  <span style={{ fontWeight: 700, color: '#fff' }}>{cs.metric}%</span>
                  <span style={{ color: '#6b6b6b' }}>{cs.downloads} downloads</span>
                  <span style={{ color: '#6b6b6b' }}>{cs.reviews} reviews</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Trust section
function Trust() {
  return (
    <section className="section section--surface" style={{ background: '#0f0f0f', color: '#fff' }}>
      <div className="container">
        <div className="section-heading" style={{ color: '#fff' }}>
          <h2 style={{ color: '#fff' }}>Trusted by leading companies</h2>
          <p style={{ color: '#6b6b6b' }}>Watch our clients speak about working with us.</p>
        </div>
        <div className="grid grid--3" style={{ gap: '24px' }}>
          <div className="project-card" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
            <div className="project-card__image" style={{ height: '200px', backgroundColor: '#2a2a2a' }}>
              <span className="project-card__image-label" style={{ fontSize: '1.4rem' }}>Client 1</span>
            </div>
            <div className="project-card__body">
              <h3 style={{ color: '#fff' }}>Client 1</h3>
              <p style={{ color: '#6b6b6b', fontSize: '0.9rem' }}>Trusted partner for our digital transformation.</p>
            </div>
          </div>
          <div className="project-card" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
            <div className="project-card__image" style={{ height: '200px', backgroundColor: '#2a2a2a' }}>
              <span className="project-card__image-label" style={{ fontSize: '1.4rem' }}>Client 2</span>
            </div>
            <div className="project-card__body">
              <h3 style={{ color: '#fff' }}>Client 2</h3>
              <p style={{ color: '#6b6b6b', fontSize: '0.9rem' }}>Exceptional technical expertise and delivery.</p>
            </div>
          </div>
          <div className="project-card" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
            <div className="project-card__image" style={{ height: '200px', backgroundColor: '#2a2a2a' }}>
              <span className="project-card__image-label" style={{ fontSize: '1.4rem' }}>Client 3</span>
            </div>
            <div className="project-card__body">
              <h3 style={{ color: '#fff' }}>Client 3</h3>
              <p style={{ color: '#6b6b6b', fontSize: '0.9rem' }}>Delivered ahead of schedule and on budget.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact section
function Contact() {
  return (
    <section className="section" style={{ background: '#0b0b0b', color: '#fff' }}>
      <div className="container">
        <div className="grid grid--2" style={{ gap: '48px' }}>
          <div>
            <h2 style={{ color: '#fff' }}>Let&apos;s build something together</h2>
            <p style={{ color: '#6b6b6b' }}>Tell us about what you&apos;re building. A short note is enough — we&apos;ll reply within one business day.</p>
            <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ color: '#6b6b6b', fontSize: '0.82rem' }}>Name</label>
                  <input style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', color: '#fff', padding: '12px', borderRadius: '8px', fontFamily: 'inherit' }} placeholder="Your name" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ color: '#6b6b6b', fontSize: '0.82rem' }}>Email</label>
                  <input style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', color: '#fff', padding: '12px', borderRadius: '8px', fontFamily: 'inherit' }} placeholder="you@company.com" />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label style={{ color: '#6b6b6b', fontSize: '0.82rem' }}>Message</label>
                <textarea style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', color: '#fff', padding: '12px', borderRadius: '8px', fontFamily: 'inherit', minHeight: '120px' }} placeholder="Tell us about your project..." />
              </div>
              <button type="button" className="btn btn--accent" style={{ border: '1px solid #0b0b0b' }}>Send message</button>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', padding: '24px', borderRadius: '12px' }}>
              <h3 style={{ color: '#fff', marginBottom: '12px' }}>Contact Information</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="tel:+918460277501" style={{ color: '#6b6b6b', fontSize: '0.92rem' }}>
                  <span style={{ color: '#fff', fontWeight: 600, width: '100px', display: 'inline-block' }}>HR</span>
                  +91 84602 77501
                </a>
                <a href="tel:+917359349940" style={{ color: '#6b6b6b', fontSize: '0.92rem' }}>
                  <span style={{ color: '#fff', fontWeight: 600, width: '100px', display: 'inline-block' }}>Sales</span>
                  +91 73593 49940
                </a>
                <a href="mailto:info@partners.dev" style={{ color: '#6b6b6b', fontSize: '0.92rem' }}>
                  <span style={{ color: '#fff', fontWeight: 600, width: '100px', display: 'inline-block' }}>Company</span>
                  info@partners.dev
                </a>
                <a href="mailto:hr@partners.dev" style={{ color: '#6b6b6b', fontSize: '0.92rem' }}>
                  <span style={{ color: '#fff', fontWeight: 600, width: '100px', display: 'inline-block' }}>HR</span>
                  hr@partners.dev
                </a>
              </div>
            </div>
            <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', padding: '24px', borderRadius: '12px' }}>
              <h3 style={{ color: '#fff', marginBottom: '12px' }}>Book a free 30-min call</h3>
              <a href="https://calendly.com/business-vasundhara/30min" target="_blank" rel="noreferrer">
                <button className="btn btn--accent" style={{ border: '1px solid #fff' }}>Book a call</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Blog preview
function BlogPreview() {
  const posts = [
    { title: 'React Performance Patterns That Actually Move the Metric', slug: 'react-performance-patterns' },
    { title: 'How to Structure a Large-Scale React Monorepo', slug: 'large-scale-react-monorepo' },
    { title: 'Core Web Vitals Playbook for Single-Page Apps', slug: 'core-web-vitals-spa' },
  ];
  return (
    <section className="section" style={{ background: '#0f0f0f', color: '#fff' }}>
      <div className="container">
        <div className="section-heading" style={{ color: '#fff' }}>
          <h2 style={{ color: '#fff' }}>From the blog</h2>
          <p style={{ color: '#6b6b6b' }}>Engineering notes on performance, architecture, and building things that last.</p>
        </div>
        <div className="grid grid--3" style={{ gap: '24px' }}>
          {posts.map((p) => (
            <Link to={`/blog/${p.slug}`} key={p.slug} className="blog-card" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
              <div className="blog-card__image" style={{ height: '160px', backgroundColor: '#2a2a2a' }}>
                <span className="blog-card__image-label" style={{ fontSize: '1.2rem' }}>{p.title.charAt(0)}</span>
              </div>
              <div className="blog-card__body">
                <h3 style={{ color: '#fff' }}>{p.title}</h3>
                <p style={{ color: '#6b6b6b', fontSize: '0.9rem' }}>Engineering · Performance</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <Hero />
      <StatsBar />
      <Services />
      <Industries />
      <Portfolio />
      <Trust />
      <Contact />
      <BlogPreview />
    </div>
  );
}
