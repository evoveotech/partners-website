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
    github: 'https://github.com/evolveotech/Partners',
    twitter: 'https://x.com/PartnersStudio',
    linkedin: 'https://linkedin.com/company/partners',
    email: 'hello@partners.dev',
    dribbble: '#',
  },
  location: 'Bangalore, India',
  year: new Date().getFullYear(),
};

// Navigation items (shared across pages)
export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

// Industry tags for the industries section
export const INDUSTRIES = [
  { label: 'Healthcare', icon: 'health', count: '150+' },
  { label: 'E-commerce', icon: 'shop', count: '120+' },
  { label: 'Gaming', icon: 'gamepad', count: '80+' },
  { label: 'Fintech', icon: 'finance', count: '60+' },
  { label: 'Education', icon: 'book', count: '90+' },
  { label: 'Enterprise', icon: 'building', count: '40+' },
];

// Portfolio projects
export const PROJECTS = [
  {
    id: 'meridian',
    slug: 'meridian',
    name: 'Meridian',
    category: 'SaaS',
    client: 'Private',
    year: 2026,
    tagline: 'Deal-pipeline analytics for an enterprise sales team.',
    description: 'A real-time pipeline and forecast analytics platform that replaced a manually updated spreadsheet process with a live, self-serve dashboard.',
    challenge: 'Sales leaders were making multi-hour weekly forecasts from exported spreadsheets. Reporting was slow, error-prone, and could not keep pace with deal velocity.',
    solution: 'A dashboard-backed product that ingests CRM and product telemetry into a normalised star schema, then serves pre-rendered summaries via a low-latency API layer.',
    results: [
      { label: 'Forecast preparation', value: '−80%', note: 'from hours to minutes' },
      { label: 'Query load time', value: '−95%', note: 'p95 under 200 ms' },
      { label: 'Reporting errors', value: '−100%', note: 'manual builds retired' },
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'tRPC', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 'cascade',
    slug: 'cascade',
    name: 'Cascade',
    category: 'E-commerce',
    client: 'Private',
    year: 2026,
    tagline: 'Headless storefront for a DTC home-goods label.',
    description: 'A composable, headless e-commerce storefront built on Shopify Storefront API with a custom cart and checkout shell.',
    challenge: 'The legacy theme was slow to iterate and could not support a loyalty-program experience the founder wanted to launch.',
    solution: 'A headless storefront separating presentation from commerce, with a persistent cart layer, saved addresses, and a branded checkout.',
    results: [
      { label: 'Checkout conversion', value: '+27%', note: 'baseline 12 months prior' },
      { label: 'Pagespeed', value: 'LCP 3.8 s → 1.9 s', note: 'Core Web Vitals green' },
      { label: 'Theme deploys', value: '−70%', note: 'no more client-content handoffs' },
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Shopify Storefront API', 'Tailwind CSS', 'Stripe'],
  },
  {
    id: 'ledger',
    slug: 'ledger',
    name: 'Ledger',
    category: 'Fintech',
    client: 'Private',
    year: 2025,
    tagline: 'Real-time compliance telemetry for a payments platform.',
    description: 'A live monitoring dashboard that lets compliance officers inspect transactions, alerts, and policy hits as they occur.',
    challenge: 'Regulatory reporting was batch-only and lagged by up to 24 hours, leaving the team unable to investigate incidents in near-real time.',
    solution: 'A WebSocket-driven event pipeline that previews every transaction against configurable policy rules, with drill-down, replay, and export.',
    results: [
      { label: 'Incident response time', value: '−85%', note: 'from hours to minutes' },
      { label: 'Reconciliation coverage', value: '99.9%', note: 'daily, automated' },
      { label: 'Alert noise', value: '−60%', note: 'rule tuning reduced false positives' },
    ],
    tech: ['React', 'TypeScript', 'WebSocket', 'Redis', 'Python', 'Kafka', 'Cypress'],
  },
  {
    id: 'orchard',
    slug: 'orchard',
    name: 'Orchard',
    category: 'AI / ML',
    client: 'Private',
    year: 2026,
    tagline: 'An AI content-operations platform for editorial teams.',
    description: 'A workflow that scores, drafts, and re-runs SEO copy with human approval gates, using LLM orchestration around a vector store.',
    challenge: 'An editorial team was producing hundreds of pages a month but could not maintain consistency or measure which drafts actually performed.',
    solution: 'A pipeline that drafts, scores against a live SEO scorecard, and routes revisions through human approval before publishing.',
    results: [
      { label: 'SEO score uplift', value: '+34', note: 'avg score after 90 days' },
      { label: 'Drafting time', value: '−40%', note: 'per page' },
      { label: 'Publish cadence', value: '2.5×', note: 'pages per week' },
    ],
    tech: ['React', 'TypeScript', 'Python', 'FastAPI', 'LangChain', 'OpenAI API', 'Qdrant', 'PostgreSQL'],
  },
  {
    id: 'vertex',
    slug: 'vertex',
    name: 'Vertex',
    category: 'Enterprise',
    client: 'Private',
    year: 2025,
    tagline: 'A geospatial analytics suite for field operations.',
    description: 'A dashboard that overlays operational telemetry onto maps, letting field managers re-route crews from a single pane of glass.',
    challenge: 'Operations teams were working from scatterplots and emails; there was no single source of truth for asset locations or job status.',
    solution: 'A geospatial layer that fuses asset telemetry, job state, and historical route data into an interactive map with drill-down panels.',
    results: [
      { label: 'Route re-optimisation', value: '−22%', note: 'per week' },
      { label: 'Field agent time', value: '−15%', note: 'on administrative reporting' },
      { label: 'Uptime', value: '99.95%', note: 'two-region failover' },
    ],
    tech: ['React', 'TypeScript', 'D3.js', 'WebGL', 'AWS', 'Kubernetes', 'Terraform'],
  },
  {
    id: 'flux',
    slug: 'flux',
    name: 'Flux',
    category: 'Data',
    client: 'Private',
    year: 2025,
    tagline: 'Real-time event-streaming UI for infrastructure teams.',
    description: 'An observability surface for stream-processing pipelines, visualising lag, backpressure, and consumer offsets live.',
    challenge: 'Platform engineers could not see pipeline health without digging into logs; alerts were lagging and noisy.',
    solution: 'A live stream visualisation that pushes events to a connected client via WebSockets, with lag graphs and replay controls.',
    results: [
      { label: 'Time-to-ack', value: '< 2 s', note: 'p95 for pipeline alerts' },
      { label: 'Lag visibility', value: 'live', note: 'per-partition breakdown' },
      { label: 'Alert noise', value: '−70%', note: 'thresholds tuned' },
    ],
    tech: ['React', 'TypeScript', 'WebSocket', 'Redis', 'Node.js', 'Prometheus'],
  },
];

// Ordered by prominence on the home page.
export const FEATURED_PROJECT_IDS = ['meridian', 'cascade', 'ledger'];

// Services for the services section
export const SERVICES = [
  { name: 'Strategy', description: 'Architecture review, tech selection, and roadmap.' },
  { name: 'Build', description: 'Product engineering from spec to deployment.' },
  { name: 'Ship', description: 'CI/CD, monitoring, and handoff.' },
  { name: 'Scale', description: 'Performance tuning, security hardening, and support.' },
];

// Case studies for the portfolio section
export const CASE_STUDIES = [
  {
    title: 'AI Homework Helper',
    category: 'EdTech',
    type: 'AI-Powered App',
    platform: 'Mobile Application',
    metric: '43%',
    downloads: '50K+',
    reviews: '2K+',
    description: 'AI homework app helps students in math and problem-solving. It offers clear, step-by-step explanations and instant answers via an intuitive mobile interface. Built with advanced AI, it prioritizes accuracy and conceptual understanding for scalable, continuous learning.',
    icon: 'appstore',
  },
  {
    title: 'RTO Information',
    category: 'Vehicle Details',
    type: 'Vehicle Details App',
    platform: 'Mobile Application',
    metric: '96%',
    downloads: '100M+',
    reviews: '487K+',
    description: 'Simple vehicle app for quick RTO and details. Easy access to registration, status, and ownership info for informed decisions. Reliable, fast data, clear display, and user-friendly. Scalable, accurate, and always updated.',
    icon: 'appstore',
  },
  {
    title: 'AccuBow',
    category: 'Sports Training',
    type: 'Archery Practice',
    platform: 'Mobile Game Application',
    metric: '90%',
    downloads: '100K+',
    reviews: '1.2K+',
    description: 'Archery app tracks performance, analyzes shots, and improves accuracy. Simple interface records scores, monitors progress, and reviews data for all archers. Reliable tracking and clear visuals support consistent training and skill development.',
    icon: 'googleplay',
  },
  {
    title: 'HRMS',
    category: 'Enterprise Software',
    type: 'HRMS Platform',
    platform: 'Enterprise Software',
    metric: '85%',
    downloads: '800+',
    reviews: '4.9★',
    description: 'Build an intelligent HRMS platform simplifying HR operations by automating employee management, performance tracking, and HR administration. Unify HR functions to eliminate inefficiencies, reduce manual effort, and enable data-driven decisions.',
    icon: 'appstore',
  },
];

// Industries section
;

// Stats for the hero section
export const STATS = [
  { value: '10+', label: 'Years of Experience' },
  { value: '800+', label: 'Projects Completed' },
  { value: '300+', label: 'Clients Worldwide' },
  { value: '20+', label: 'Ongoing Projects' },
  { value: '92%', label: 'Client Retention Rate' },
];

// FAQ data
export const FAQS = [
  {
    question: 'What services does Partners provide as a leading software development company?',
    answer: 'We specialize in custom software development, mobile app development, game development, web development, SaaS solutions, DevOps, and cloud hosting services.',
  },
  {
    question: 'Why should I choose Partners as my game development company?',
    answer: 'With extensive experience in Unity, AR/VR, and 2D/3D animation, we create immersive gaming experiences that captivate users and boost engagement.',
  },
  {
    question: 'How does your app development company ensure project success?',
    answer: 'Our app development process includes comprehensive planning, UI/UX design, development, rigorous testing, and post-launch support to ensure top-tier product quality.',
  },
  {
    question: 'What industries do you serve with your software development solutions?',
    answer: 'We work across various sectors, including healthcare, e-commerce, gaming, fintech, and education, delivering tailored digital solutions that drive business growth.',
  },
  {
    question: 'Can you rescue a project that is behind schedule or over budget?',
    answer: 'Yes, our project rescue services include detailed assessments, root cause analysis, and strategic restructuring to realign the project and meet deadlines effectively.',
  },
  {
    question: 'Do you provide maintenance and support after app or game development?',
    answer: 'Absolutely. We offer ongoing maintenance, updates, and support to keep your software, app, or game optimized and up-to-date.',
  },
  {
    question: 'How does your game development company handle 2D and 3D game projects?',
    answer: 'Our team leverages Unity and advanced animation techniques to create visually engaging 2D/3D games for single and multiplayer experiences.',
  },
  {
    question: 'What sets Partners apart from others?',
    answer: 'Our focus on innovation, quality assurance, and customer-centric solutions, backed by over 10 years of experience and 800+ successful projects, distinguishes us in the market.',
  },
  {
    question: 'Can you assist with cloud hosting and DevOps for my software project?',
    answer: 'Yes, we provide end-to-end cloud hosting and DevOps consulting, ensuring secure, scalable, and high-performance infrastructure for your digital assets.',
  },
  {
    question: 'How do you ensure data security in your app development and software solutions?',
    answer: 'We implement robust security protocols, data encryption, and regular testing to safeguard sensitive data throughout the development lifecycle.',
  },
];
