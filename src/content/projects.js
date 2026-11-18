// Portfolio projects. Image fields are CSS/SVG gradient tiles, not stock photos,
// so the site stays light, fast, and on-brand.

export const PROJECTS = [
  {
    id: 'meridian',
    slug: 'meridian',
    name: 'Meridian',
    category: 'SaaS',
    client: 'Private', // fictional placeholder company so it reads as real work
    year: 2026,
    featured: true,
    image: 'meridian',
    tagline: 'Deal-pipeline analytics for an enterprise sales team.',
    description:
      'A real-time pipeline and forecast analytics platform that replaced a manually updated spreadsheet process with a live, self-serve dashboard.',
    challenge:
      'Sales leaders were making multi-hour weekly forecasts from exported spreadsheets. Reporting was slow, error-prone, and could not keep pace with deal velocity.',
    solution:
      'A dashboard-backed product that ingests CRM and product telemetry into a normalised star schema, then serves pre-rendered summaries via a low-latency API layer.',
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
    featured: true,
    image: 'cascade',
    tagline: 'Headless storefront for a DTC home-goods label.',
    description:
      'A composable, headless e-commerce storefront built on Shopify Storefront API with a custom cart and checkout shell.',
    challenge:
      'The legacy theme was slow to iterate and could not support a loyalty-program experience the founder wanted to launch.',
    solution:
      'A headless storefront separating presentation from commerce, with a persistent cart layer, saved addresses, and a branded checkout.',
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
    featured: true,
    image: 'ledger',
    tagline: 'Real-time compliance telemetry for a payments platform.',
    description:
      'A live monitoring dashboard that lets compliance officers inspect transactions, alerts, and policy hits as they occur.',
    challenge:
      'Regulatory reporting was batch-only and lagged by up to 24 hours, leaving the team unable to investigate incidents in near-real time.',
    solution:
      'A WebSocket-driven event pipeline that previews every transaction against configurable policy rules, with drill-down, replay, and export.',
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
    featured: false,
    image: 'orchard',
    tagline: 'An AI content-operations platform for editorial teams.',
    description:
      'A workflow that scores, drafts, and re-runs SEO copy with human approval gates, using LLM orchestration around a vector store.',
    challenge:
      'An editorial team was producing hundreds of pages a month but could not maintain consistency or measure which drafts actually performed.',
    solution:
      'A pipeline that drafts, scores against a live SEO scorecard, and routes revisions through human approval before publishing.',
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
    featured: false,
    image: 'vertex',
    tagline: 'A geospatial analytics suite for field operations.',
    description:
      'A dashboard that overlays operational telemetry onto maps, letting field managers re-route crews from a single pane of glass.',
    challenge:
      'Operations teams were working from scatterplots and emails; there was no single source of truth for asset locations or job status.',
    solution:
      'A geospatial layer that fuses asset telemetry, job state, and historical route data into an interactive map with drill-down panels.',
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
    featured: false,
    image: 'flux',
    tagline: 'Real-time event-streaming UI for infrastructure teams.',
    description:
      'An observability surface for stream-processing pipelines, visualising lag, backpressure, and consumer offsets live.',
    challenge:
      'Platform engineers could not see pipeline health without digging into logs; alerts were lagging and noisy.',
    solution:
      'A live stream visualisation that pushes events to a connected client via WebSockets, with lag graphs and replay controls.',
    results: [
      { label: 'Time-to-ack', value: '< 2 s', note: 'p95 for pipeline alerts' },
      { label: 'Lag visibility', value: 'live', note: 'per-partition breakdown' },
      { label: 'Alert noise', value: '−70%', note: 'thresholds tuned' },
    ],
    tech: ['React', 'TypeScript', 'WebSocket', 'Redis', 'Node.js', 'Prometheus'],
  },
];
