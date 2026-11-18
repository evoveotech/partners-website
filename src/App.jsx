import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SITE } from './content/config';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import IndustriesPage from './pages/IndustriesPage';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Partners — Production software, engineered for scale.</title>
        <meta name="description" content="Partners is a development practice building high-performance, high-availability web products for startups and established brands. Browse selected work, read engineering notes, and see what we can build for you." />
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
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
