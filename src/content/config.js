// Brand / site configuration
// Used across pages for consistent copy, metadata, and links.

export const SITE = {
  name: 'Partners',
  tagline: 'Production software, engineered for scale.',
  shortName: 'Partners',
  description:
    'Partners is a development practice building high-performance, high-availability web products for startups and established brands. Browse selected work, read engineering notes, and see what we can build for you.',
  url: 'https://partners.dev',
  OG: {
    image: 'https://partners.dev/og-cover.png',
    twitter: '@PartnersStudio',
  },
  social: {
    github: 'https://github.com/evoveotech/Partners',
    twitter: 'https://x.com/PartnersStudio',
    linkedin: 'https://linkedin.com/company/partners',
    email: 'hello@partners.dev',
    dribbble: '#',
  },
  location: 'Bangalore, India',
  year: new Date().getFullYear(),
};

export const NAV_ITEMS = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const CATEGORIES = [
  { label: 'SaaS', count: 2 },
  { label: 'E-commerce', count: 1 },
  { label: 'Fintech', count: 1 },
  { label: 'AI / ML', count: 1 },
  { label: 'Enterprise', count: 1 },
  { label: 'Data', count: 1 },
];

// Ordered by prominence on the home page.
export const FEATURED_PROJECT_IDS = ['meridian', 'cascade', 'ledger'];
