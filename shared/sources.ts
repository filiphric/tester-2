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
    id: 'qa-other-professions',
    title: 'QA in other professions',
    slides: 'SLIDE 26',
    summary: 'Quality engineering in physical products requires specialist technical knowledge',
    period: 'Research notes · Aerospace, automotive manufacturing, and hardware QA',
    note: 'The research notes cite the IMI listing for aerospace qualifications, JobDescription.org for manufacturing and measurement systems, and Kevin Thompson’s hardware case study for the need for domain expertise. The Formula 1, amusement-park, and rocket-testing examples have no direct citations in the supplied material. The IMI listing could not be independently retrieved when these sources were added.',
    links: [
      {
        title: 'Quality Engineer — aerospace role cited in the research notes',
        publisher: 'Institute of the Motor Industry · Jobs listing · Retrieval unavailable',
        url: 'https://jobs.theimi.org.uk/mim-jobs/quality-engineer-25',
      },
      {
        title: 'Quality Engineer Job Description',
        publisher: 'JobDescription.org · Manufacturing, automotive quality tools, and measurement systems',
        url: 'https://jobdescription.org/jobs/manufacturing/quality-engineer',
      },
      {
        title: 'Hardware Quality Assurance Differs from Software',
        publisher: 'Kevin Thompson · LinkedIn · Thermo Fisher Scientific case study',
        url: 'https://www.linkedin.com/posts/kevinthompsonphd_lessonslearned-agilehardware-v6pdf-activity-7486111085314482176-zBRE',
      },
    ],
  },
  {
    id: 'llms-reward-expertise',
    title: 'LLMs reward expertise',
    slides: 'SLIDE 27',
    summary: 'Domain expertise helps users ask better questions, evaluate answers, and get more value from LLMs',
    period: '24 July 2026 · Essay on domain expertise and LLM use',
    note: 'Using Terence Tao’s conversation with ChatGPT and his own programming experience, Goedecke argues that experts can identify relevant ideas, challenge weak answers, and suggest better approaches. The article supports the slide’s point that domain knowledge improves how people use LLMs; it is an essay based on examples and experience, not a controlled study.',
    links: [
      {
        title: 'LLMs reward expertise',
        publisher: 'Sean Goedecke · 24 July 2026',
        url: 'https://www.seangoedecke.com/llms-reward-expertise/',
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
