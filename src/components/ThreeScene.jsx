import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Vector3, Color, MathUtils } from 'three';

// A floating 3D element — responds to scroll and mouse
function FloatingMesh({ meshRef, color, size, speed, waveOffset }) {
  const mesh = useRef();

  useFrame((state, delta) => {
    if (mesh.current) {
      // Base float animation
      const time = state.clock.elapsedTime;
      const floatY = Math.sin(time * speed + waveOffset) * size * 0.3;

      // Scroll-driven vertical movement
      const scrollY = state.scroll;
      const floatAmount = MathUtils.clamp(scrollY * 0.3, -10, 10);
      mesh.current.position.y = floatY + floatAmount;

      // Subtle rotation (X and Y)
      mesh.current.rotation.x += delta * speed * 0.3;
      mesh.current.rotation.y += delta * speed * 0.5;

      // Color pulsing
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
  const positions = useRef([]);
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
      <pointsMaterial
        color="#0b0b0b"
        size={0.05}
        transparent
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  );
}

// Main 3D scene
export default function ThreeScene({ onScroll }) {
  const containerRef = useRef(null);

  // Scroll-driven camera zoom
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = (e) => {
      if (onScroll) onScroll(e);
    };

    container.addEventListener('scroll', onScroll);
    return () => container.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color="#0b0b0b" roughness={1} metalness={0} />
      <FloatingMesh color="#4f46e5" size={0.8} speed={0.6} waveOffset={0} />
      <FloatingMesh color="#10b981" size={0.5} speed={0.8} waveOffset={1} />
      <FloatingMesh color="#f59e0b" size={0.6} speed={0.7} waveOffset={2} />
      <FloatingMesh color="#ef4444" size={0.4} speed={0.9} waveOffset={3} />
      <FloatingMesh color="#8b5cf6" size={0.5} speed={0.75} waveOffset={4} />
      <ParticleField count={300} />
    </mesh>
  );
}

// Canvas wrapper for the 3D scene
export function SceneCanvas({ scrollY, onMouseMove }) {
  return (
    <>
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
      <ParticleField count={300} />
    </>
  );
}

// Wrap the canvas with a scrolling container
export function ScrollableCanvas({ children }) {
  return (
    <div
      className="three-scene"
      style={{
        width: '100%',
        height: '400vh',
        background: '#0b0b0b',
        overflow: 'auto',
        position: 'relative',
      }}
    >
      <div style={{ height: '100%', position: 'absolute', overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  );
}
