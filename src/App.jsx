import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SITE, NAV_ITEMS } from './content/config';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import WorkPage from './pages/WorkPage';
import CaseStudyPage from './pages/CaseStudyPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BlogIndexPage from './pages/BlogIndexPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Partners — Production software, engineered for scale.</title>
        <meta name="description" content="Partners is a development practice building high-performance, high-availability web products for startups and established brands." />
        <link rel="canonical" href="https://partners.dev/" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: SITE.name,
            url: SITE.url,
            logo: SITE.url + '/favicon.svg',
            sameAs: [SITE.social.twitter, SITE.social.github, SITE.social.linkedin],
            address: { '@type': 'City', name: SITE.location },
            contactPoint: {
              '@type': 'ContactPoint',
              email: SITE.social.email,
              contactType: 'customer support',
            },
          })}
        </script>
      </Helmet>
      <div className="app">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/:slug" element={<CaseStudyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
