export const sourceGroups = [
  {
    id: 'github-activity',
    title: 'GitHub activity',
    slides: 'SLIDE 11',
    summary: '1.4 billion → 2.9 billion commits per month',
    period: 'April–August 2026 · approximately +107%',
    note: 'GitHub’s published chart covers 2023–August 2026. Operational commit counts measure activity, not lines of code or website visits. They are a different series from Innovation Graph public pushes.',
    links: [
      {
        title: 'Monthly commits doubled between April and August',
        publisher: 'GitHub · CTO update · 20 August 2026',
        url: 'https://github.blog/news-insights/company-news/the-august-17-outage-and-the-work-ahead/',
      },
      {
        title: 'Original GitHub activity charts',
        publisher: 'GitHub · Monthly pull requests, commits, and repositories',
        url: 'https://github.blog/wp-content/uploads/2026/08/blog-post-aug-17-outage-1.png',
      },
    ],
  },
  {
    id: 'manual-qa-demand',
    title: 'Manual-only demand is shrinking',
    slides: 'SLIDE 12',
    summary: '~32,000 estimated listings → ~24,000 forecast listings',
    period: '2025 estimate → End-2026 forecast · Published October 2025',
    note: 'The chart uses AccleroTech’s approximate global manual tester listing counts: 32,000 estimated in 2025 and 24,000 forecast for end-2026. Both bars start at zero; the dashed bar denotes the forecast. Additional context in the speaker notes: AccleroTech reports an 18% annual decline in 2025, and SQAExperts estimates mature SaaS markets are 25–40% below their 2021 peak. Stealth Agents separately reports a 22% annual decline, attributed to LinkedIn. The articles do not provide a reproducible underlying dataset for these figures; treat them as published estimates, not a verified global time series.',
    links: [
      {
        title: 'AI-First Career for Manual Testers',
        publisher: 'AccleroTech · 5 October 2025 · Estimates and forecast',
        url: 'https://www.acclerotech.com/post/ai-first-career-for-manual-testers',
      },
      {
        title: 'Is QA a Dying Career? What 2026 Job Market Data Actually Shows',
        publisher: 'SQAExperts · 20 July 2026 · Mature SaaS market estimate',
        url: 'https://www.sqaexperts.com/is-qa-a-dying-career-what-2026-job-market-data-actually-shows',
      },
      {
        title: 'AI Quality Assurance Statistics 2026: workforce impact',
        publisher: 'Stealth Agents · 15 June 2026 · Supporting industry summary',
        url: 'https://stealthagents.com/research/ai-quality-assurance-testing-statistics-2026',
      },
    ],
  },
  {
    id: 'manual-qa-hybrid',
    title: 'Manual skills. Hybrid expectations.',
    slides: 'SLIDE 13',
    summary: '~38% still hire manual testers · API, SQL, and automation literacy',
    period: '2026 report · QA listing share and skill expectations',
    note: 'SoftwareTestPilot reports that roughly 38% of QA listings still hire manual testers and describes growing expectations for API testing, SQL, and Playwright or Selenium. Its report describes 10,000+ posts across India, the US, and remote roles, while its overview lists 2,900+ jobs; coverage is not fully reconciled. The reported share may include hybrid roles and is not a census of manual-only jobs.',
    links: [
      {
        title: 'QA Job Market Report 2026',
        publisher: 'SoftwareTestPilot · Reported listing share and skill expectations',
        url: 'https://softwaretestpilot.com/qa-job-market-report',
      },
    ],
  },
  {
    id: 'company-quality-transformations',
    title: 'Yahoo, Microsoft, Uber, Google, Spotify, NASA',
    slides: 'SLIDE 16',
    summary: 'Company examples of changing how quality is owned and delivered',
    period: 'Research notes · QA organisation changes and engineering practices',
    note: 'The research notes distinguish changes to dedicated QA teams at Yahoo and Microsoft from broader quality engineering practices at Uber, Google, Spotify, and NASA. Uber’s engineering article documents earlier developer-owned testing; it does not establish that Uber eliminated software QA. The LinkedIn articles are secondary summaries. The restructuring report and Reddit discussion are background context, not evidence of a company-wide software QA removal or its quality outcomes. The Yahoo/Microsoft LinkedIn link and Business Insider link could not be independently retrieved when these sources were added.',
    links: [
      {
        title: 'QA organisation changes at Yahoo, Microsoft, Canva, and Indeed',
        publisher: 'Katerina Driutskai · LinkedIn',
        url: 'https://www.linkedin.com/pulse/qa-how-yahoo-microsoft-canva-indeed-changed-quality-driutskaia-wyuyf',
      },
      {
        title: 'Zero Defect Leakage Is Possible but only with the Right Discipline Model',
        publisher: 'Andre Ripla · LinkedIn · Enterprise quality examples and commentary',
        url: 'https://www.linkedin.com/pulse/zero-defect-leakage-possible-only-right-discipline-andre-bwmye',
      },
      {
        title: 'Shifting E2E Testing Left at Uber',
        publisher: 'Uber Engineering · Primary source · BITS and developer-owned testing',
        url: 'https://www.uber.com/in/en/blog/shifting-e2e-testing-left/',
      },
      {
        title: 'Uber restructuring report cited in the research notes',
        publisher: 'Business Insider · Layoff background · Retrieval unavailable',
        url: 'https://www.businessinsider.com/uber-layoffs-corporate-workforce-restructuring-memo-2026-9',
      },
    ],
  },
  {
    id: 'keith-klain-test-automation',
    title: 'Keith Klain on test automation',
    slides: 'SLIDE 30',
    summary: 'Automation’s promised cost savings and the changing value of test-script production',
    period: 'Keith Klain · Video',
    note: 'Source for the slide’s quote about automation costs and AI driving the price of test-script production to zero.',
    links: [
      {
        title: 'To Infinity and Beyond - The Death of Test Engineering - Keith Klain',
        publisher: 'Quality Remarks · YouTube',
        url: 'https://www.youtube.com/watch?v=syyHF0idL64',
      },
    ],
  },
] as const
