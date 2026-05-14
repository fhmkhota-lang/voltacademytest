/* ============================================================
   IndyTrain — data.js
   Edit this file to add/update courses, resources, chat rooms.
   ============================================================ */

// ── GOOGLE DRIVE VIDEO EMBED HELPER ──
const GD = id => `https://drive.google.com/file/d/${id}/preview`;

// ── DEFAULT VIDEOS (pre-mapped from Google Drive) ──
// Editorial = Devereaux Morkel's videos
// Sales = Training Workflow document videos
const DEFAULT_VIDS = {
  // Editorial
  1:   GD('1ZMO4x50XtQNbY-25_KIl6YCdp3wfrQXF'),
  2:   GD('1zy6uKZyUXl6izuKB090okPqmWWfO8OD8'),
  3:   GD('1uOG4iC1n9uBPbmCx5H7f76sh5CPEV293'),
  4:   GD('12dMdFE0TDH3yu6_qtk-v8zvPfP_6VWod'),
  5:   GD('15iIFEmzIwiP6XRTebzPspthJItHv0h7W'),
  6:   GD('1YNsK43hUZp72hACEECt-nP-sv1oYqpFd'),
  7:   GD('17Xl9OASABt0qd5uRShO_ohs0jc5_L0z7'),
  8:   GD('1uChWCXH-yA8GC2_AMSuAL7S6t5VK1RUS'),
  9:   GD('1uA5XlGs7okac69O8cDpR8faFWj3jxc40'),
  10:  GD('1YH6JvAcjf2KvRRCPppMr07ZadO4P-rZR'),
  11:  GD('1DbkOmDWE7aGfjYGAnNb6UwqWpsdMuY8K'),
  // Sales (Training Workflow)
  101: GD('1Rmq6UBwhomVK2mn-E6Ge_1dcEwylUf0L'),
  102: GD('1068bUmMpjlJGmaj6NJJyod-eK926dTJN'),
  103: GD('1_RIyVqRubNHrd4gVyK90DCQTm-BDLI_a'),
  104: GD('1muurwW5pwq5uWpC-Ay0um42zLeIclw5a'),
  105: GD('16B9mnjwPuYF4Lc_FnOQ-QQXRQiFm2ZBy'),
  106: GD('1ClnQmpRZu-pAhTZRlrXHVP5-kKXsoT6T'),
  107: GD('1mKvXiYEOIPJpoF4O0RftxyNtxu6lyF6k'),
  108: GD('1cq36weEuPdAe3u6vSyvxNhspizjbsG68'),
  109: GD('1ldbbC8foH3ZbOtiHKUmpKZFFaT1OX21Z'),
};

// ── EXTRA VIDEO LIBRARY (available for admin to assign) ──
const EXTRA_VIDS = [
  { n: 'Subbing.mp4',                                     id: '1qxi0YNYsp8Yj4NpJ6piEoLD7Y_h_neaY' },
  { n: 'Before You Go On-Air.mp4',                        id: '1se5ihOYdGOmsQH-zB14Q5ZBk_8vXQHx-' },
  { n: 'Podcasting Basics.mp4',                           id: '1LuRP-6fdHMsQnV-jbd4khGcRkPXfQe1T' },
  { n: 'Filing from the Field.mp4',                       id: '1oIxRH_WfkFF0LdN338z8U23HNeGcUoqk' },
  { n: 'Piece-to-Camera (PTC) Scriptwriting.mp4',         id: '1so_ETINsvxLmd1Z2RSlgArcnXy7KA1Fb' },
  { n: 'Writing Engaging Captions.mp4',                   id: '1kxcnr6jIn62Va5a6q2A3e2o4BsF4RET2' },
  { n: 'Repurposing Content for Different Platforms.mp4', id: '1sOqkn4Gi-U5mmjAjisVfL_j9j4RMdBda' },
  { n: 'Basic Analytics for Tracking.mp4',                id: '1tXr72clUjVipD8d1K1O9ArflxUm8US33' },
  { n: 'Tone and Voice.mp4',                              id: '1_VLiROfKLUNv_a-M-XmmnFG_Jf3GMGvt' },
  { n: 'Mobile-First Design & Social Distribution.mp4',   id: '1rYhGihQl9RQ48YG0cZGmsWFGR5i8xHuM' },
  { n: 'Accessibility — Contrast and Legibility.mp4',     id: '1u2pVlIq3-C_UoAIxpx86tjdK0KfxQTC7' },
  { n: 'Ethical Image Sourcing.mp4',                      id: '18AEXJ-K84Q-iS8SpiAE4hcAavFkpisXD' },
  { n: 'Creating for Formats (Reels, Stories).mp4',       id: '1MLecgD0KAGMpk02s0tuPLhUG0Bwlgd_H' },
  { n: 'From Press Release to Story.mp4',                 id: '14-wCMfTE3eL4qVeEuCYnqbBox8Ruq8Ub' },
];

// ── COURSE IMAGES ──
// Uses Unsplash source for royalty-free relevant thumbnails.
// To use your own image: set img to a full URL or relative path.
const COURSE_IMAGES = {
  1:   'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80',  // writing/journalism
  2:   'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',  // pitch meeting
  3:   'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80',  // newspaper headline
  4:   'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&q=80',  // google/search
  5:   'https://images.unsplash.com/photo-1616587896595-51d3b6b6e0c7?w=600&q=80',  // multimedia/camera
  6:   'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80',  // social media
  7:   'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',  // design
  8:   'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',  // AI/Gemini
  9:   'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=600&q=80',  // notebook/research
  10:  'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&q=80',  // investigative/docs
  11:  'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=600&q=80',  // journalism 101
  101: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80',  // welcome/office
  102: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',  // volt africa/team
  103: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',  // digital landscape
  104: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=600&q=80',  // social media landscape
  105: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',  // digital ecosystem
  106: 'https://images.unsplash.com/photo-1565372745085-5ba16a69f1e0?w=600&q=80',  // paid media
  107: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',  // opportunities
  108: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',  // workflow
  109: 'https://images.unsplash.com/photo-1573166364524-d9dbfd8bbf83?w=600&q=80',  // strategy
};

// ── COURSES ──
// To add a course: append a new object to this array.
// To update: find the course by id and edit its fields.
const COURSES = [
  // ════════════════════════════════
  // EDITORIAL
  // ════════════════════════════════
  {
    id: 1, title: "Writing and Content Creation", cat: "Editorial",
    emoji: "✍️", color: "#2c3e50", rating: "4.9", badge: "✍️",
    steps: 10, dur: "~3 hrs",
    about: "Master the fundamentals of journalism writing. Develop essential skills in news writing, feature writing, and digital storytelling. Covers the inverted pyramid, subbing, copy editing, interview techniques, and editorial ethics.",
    modules: [
      { name: "Basics of Writing", steps: [
        { t: "The Inverted Pyramid", d: "Most important information first, then supporting details, then background." },
        { t: "News Values", d: "The six core news values: timeliness, proximity, prominence, consequence, human interest, and conflict." }
      ]},
      { name: "Subbing", steps: [
        { t: "Introduction to Copy Editing", d: "Checking facts, correcting grammar and spelling, ensuring house style, and improving readability." },
        { t: "Headline Craft", d: "Write accurate, active, and engaging headlines. Avoid clickbait while still drawing readers in." },
        { t: "Story Flow and Transitions", d: "Linking paragraphs logically and keeping readers engaged." }
      ]},
      { name: "Feature Writing", steps: [
        { t: "Long-form Storytelling", d: "Structure a feature with a compelling lede, nut graf, body, and kicker." },
        { t: "Interviewing Techniques", d: "Plan effective interviews, ask open-ended questions, actively listen, and extract usable quotes." },
        { t: "Source Verification", d: "Multi-source confirmation, document checking, and digital verification tools." }
      ]},
      { name: "Ethics & Standards", steps: [
        { t: "Editorial Ethics", d: "Truth, fairness, independence, and accountability in journalism." },
        { t: "Plagiarism and Attribution", d: "Understand plagiarism, correct attribution, and why it builds credibility." },
        { t: "Fact-Checking", d: "Systematic fact-checking — names, dates, titles, statistics, and claims before publication." }
      ]}
    ],
    quiz: [
      { q: "What does the 'inverted pyramid' structure mean in news writing?", opts: ["A visual layout technique", "The most important information comes first, followed by supporting details", "Stories start with background and build to the main point", "Headlines at the bottom"], ans: 1 },
      { q: "Which of the following is NOT one of the six core news values?", opts: ["Timeliness", "Proximity", "Profitability", "Human interest"], ans: 2 },
      { q: "In journalism, 'subbing' refers to:", opts: ["Submitting articles", "Substituting sources", "Copy editing and subediting a story", "Writing sub-headings only"], ans: 2 },
      { q: "Why is source verification critical before publishing?", opts: ["It makes articles longer", "To ensure accuracy and maintain journalistic credibility", "Sources prefer it", "It improves SEO"], ans: 1 },
      { q: "Plagiarism in journalism is best defined as:", opts: ["Writing too quickly", "Using another person's work or ideas without proper attribution", "Quoting sources directly", "Writing in a similar style to other journalists"], ans: 1 }
    ]
  },
  {
    id: 2, title: "Pitch Perfect", cat: "Editorial",
    emoji: "🎯", color: "#8B4513", rating: "4.7", badge: "🎯",
    steps: 6, dur: "~2 hrs",
    about: "A practical, self-paced program for journalists focused on pitching ideas and turning ideas into a story. Learn how to identify strong story ideas, craft compelling pitches that grab an editor's attention, and understand what publications are really looking for.",
    modules: [{ name: "Pitching Ideas", steps: [
      { t: "What Makes a Great Pitch", d: "The hook, the angle, the why-now factor, your credentials, and the proposed approach." },
      { t: "Knowing Your Audience", d: "Research the publication and tailor your pitch to the right editor." },
      { t: "Crafting the Perfect Subject Line", d: "Your subject line is your headline — make it specific, urgent, and interesting." },
      { t: "From Idea to Story", d: "Sharpen a vague idea into a clear, focused pitch." },
      { t: "Following Up Professionally", d: "The etiquette of following up on unanswered pitches." },
      { t: "Common Pitch Mistakes", d: "Being too vague, pitching the wrong publication, over-explaining." }
    ]}],
    quiz: [
      { q: "What is the most important element of a compelling pitch?", opts: ["Length", "A clear, specific news angle that serves the publication's readers", "The journalist's personal background", "A list of all possible sources"], ans: 1 },
      { q: "The 'why now' element of a pitch refers to:", opts: ["The time of day you send the email", "The reason this story is relevant and timely right now", "How quickly you can write the piece", "Your deadline availability"], ans: 1 },
      { q: "When following up on an unanswered pitch, you should:", opts: ["Send a follow-up daily", "Wait at least 5–7 business days before a single polite follow-up", "Never follow up", "Call the editor directly on the same day"], ans: 1 },
      { q: "Which of these makes a pitch WEAKER?", opts: ["Including your credentials", "Explaining the reader benefit", "Being vague about the story angle", "Proposing a specific format"], ans: 2 }
    ]
  },
  {
    id: 3, title: "Headline Writing and SEO", cat: "Editorial",
    emoji: "📰", color: "#1a3a5c", rating: "4.8", badge: "📰",
    steps: 9, dur: "~2.5 hrs",
    about: "Craft click-worthy, accurate headlines that serve both readers and search engines. Learn practical techniques to sharpen clarity, boost curiosity without clickbait, and apply simple SEO principles so your stories are easier to find online.",
    modules: [
      { name: "The Basics", steps: [
        { t: "Psychology of Headlines", d: "Curiosity gaps, specificity, and emotional triggers in headlines." },
        { t: "Active Voice and Strong Verbs", d: "Practise converting passive constructions into punchy, active headline forms." },
        { t: "Accuracy First", d: "The line between engaging and misleading — accuracy in headlines is non-negotiable." },
        { t: "Numbers and Power Words", d: "When and how to use numbers, questions, and power words without tipping into clickbait." }
      ]},
      { name: "SEO for Headlines", steps: [
        { t: "Keyword Research Basics", d: "Use Google Trends and Search Console to find what readers are searching for." },
        { t: "Where to Place Keywords", d: "Front-loading your primary keyword improves both SEO and reader comprehension." },
        { t: "Metadata and Slugs", d: "Write slug-friendly URLs that are clean and keyword-rich." },
        { t: "Balancing SEO and Creativity", d: "Write the creative headline first, then optimise for SEO." },
        { t: "Analytics and Testing", d: "Use CMS analytics and Search Console to understand which headlines perform best." }
      ]}
    ],
    quiz: [
      { q: "Which headline principle states that important keywords should appear early?", opts: ["Backloading", "Front-loading", "Passive placement", "Metadata stuffing"], ans: 1 },
      { q: "What is a 'URL slug' in web publishing?", opts: ["A type of clickbait headline", "The URL-friendly version of your article title", "A description tag only search engines see", "The author byline in a URL"], ans: 1 },
      { q: "'Man arrested' is weaker than 'Police arrest Cape Town man for fraud' because:", opts: ["The second is longer", "The second is more specific, active, and informative", "The first is more accurate", "Length determines quality"], ans: 1 },
      { q: "Which tool would you use to find keywords readers are searching for?", opts: ["Microsoft Word", "Google Trends and Google Search Console", "Instagram Insights", "Your editor's opinion"], ans: 1 }
    ]
  },
  {
    id: 4, title: "Good for Google", cat: "Editorial",
    emoji: "🔍", color: "#1a5c3a", rating: "4.6", badge: "🔍",
    steps: 9, dur: "~2 hrs",
    about: "Master Google's content guidelines, search optimisation principles, and how to make your journalism discoverable online. Covers E-E-A-T, Google News Publisher Centre, structured data, and how modern journalists can work with — rather than against — Google's algorithms.",
    modules: [
      { name: "Google & News", steps: [
        { t: "How Google Indexes News", d: "How stories are discovered, ranked, and displayed. What signals Google uses to determine news quality." },
        { t: "Google News Publisher Centre", d: "Setup and management of your publication in Google News Publisher Centre." },
        { t: "E-E-A-T Principles", d: "Experience, Expertise, Authoritativeness, and Trustworthiness — and what they mean for journalism and bylines." },
        { t: "Author Pages and Bylines", d: "Build author profiles and structured data that signals expertise to search engines." }
      ]},
      { name: "Optimisation", steps: [
        { t: "Structured Data for News", d: "How implementing Article schema helps Google understand and surface your content." },
        { t: "Page Speed and Core Web Vitals", d: "Why page speed matters for both readers and Google rankings." },
        { t: "Mobile-First Writing", d: "Formatting and structural choices that make articles readable on small screens." },
        { t: "Google Analytics for Journalists", d: "Navigate Google Analytics to understand your audience, traffic sources, and most-read stories." },
        { t: "Search Console Deep Dive", d: "Use Search Console to see which queries drive traffic to your stories." }
      ]}
    ],
    quiz: [
      { q: "What does E-E-A-T stand for in Google's quality guidelines?", opts: ["Engage, Evaluate, Analyse, Track", "Experience, Expertise, Authoritativeness, Trustworthiness", "Edit, Enhance, Approve, Test", "Explore, Explain, Apply, Transform"], ans: 1 },
      { q: "What is the Google News Publisher Centre used for?", opts: ["Paying for Google advertising", "Claiming and managing your publication's presence in Google News", "Submitting press releases to Google", "Monitoring competitors"], ans: 1 },
      { q: "Why is mobile-first formatting important for digital journalism?", opts: ["Google penalises desktop websites", "The majority of news readers access content on mobile devices", "Mobile articles rank higher regardless of content", "Advertisers prefer mobile content"], ans: 1 }
    ]
  },
  {
    id: 5, title: "Multimedia Content Creation", cat: "Editorial",
    emoji: "🎬", color: "#4a1a5c", rating: "4.9", badge: "🎬",
    steps: 12, dur: "~4 hrs",
    about: "Produce compelling videos, podcasts, and multimedia content that engage modern audiences across platforms. Covers writing for radio and broadcast, podcasting fundamentals, video journalism, photography for news, and how to package multimedia stories effectively.",
    modules: [
      { name: "Writing For Radio", steps: [
        { t: "Radio Writing Fundamentals", d: "Radio is written for the ear. Conversational writing, short sentences, active voice." },
        { t: "Script Structure", d: "How a radio news bulletin, package, and voicer are structured." },
        { t: "The Sound of Words", d: "Read copy aloud and edit for rhythm, clarity, and natural cadence." }
      ]},
      { name: "Podcasting", steps: [
        { t: "Podcast Formats and Planning", d: "Interview, narrative, panel, solo formats. Plan a podcast from concept to rundown." },
        { t: "Recording Quality", d: "Microphone placement, room acoustics, recording environment." }
      ]},
      { name: "Video Journalism", steps: [
        { t: "Shooting on a Smartphone", d: "Framing, the rule of thirds, stable handheld techniques, and capturing usable footage in the field." },
        { t: "Video Story Structure", d: "Establishing shot, interview setup, B-roll, and piece-to-camera." },
        { t: "Basic Video Editing", d: "Cuts, transitions, text overlays, and exporting for social media." },
        { t: "B-Roll and Visual Storytelling", d: "What makes good B-roll and how to use visuals to show — not just tell — your story." }
      ]},
      { name: "Photography for News", steps: [
        { t: "News Photography Basics", d: "Composition fundamentals: the decisive moment, framing, light." },
        { t: "Caption Writing", d: "Write informative, accurate captions that answer who, what, where, when." },
        { t: "Photo Ethics", d: "Manipulation, consent, contextualisation, and the power that images carry." }
      ]}
    ],
    quiz: [
      { q: "What is the primary difference between writing for radio versus writing for print?", opts: ["Radio copy is always shorter", "Radio is written to be heard once — it must be conversational and immediately clear", "Print articles are less factual", "Radio requires more sources"], ans: 1 },
      { q: "The 'rule of thirds' in photography and video composition means:", opts: ["Always use three cameras", "Dividing the frame into a 3x3 grid and placing subjects along the lines or at intersections", "Filming three versions of every shot", "Using thirds of the day"], ans: 1 },
      { q: "What is B-roll footage?", opts: ["Backup footage stored on a second drive", "Supplementary visuals that support and illustrate the main interview or narration", "Black-and-white archival footage", "The first roll of footage shot on location"], ans: 1 },
      { q: "For podcast recording, the best environment is:", opts: ["A large echo-filled hall", "Outdoors to capture ambient sound", "A small, soft-furnished room that absorbs sound reflections", "Near air conditioning"], ans: 2 }
    ]
  },
  {
    id: 6, title: "Social Media and Distribution", cat: "Editorial",
    emoji: "📱", color: "#5c1a1a", rating: "4.7", badge: "📱",
    steps: 9, dur: "~2.5 hrs",
    about: "Build a social media strategy that amplifies your journalism and grows your audience. Platform-specific strategies for X, Instagram, LinkedIn, and TikTok, as well as newsletter fundamentals, community building, algorithm insights, and analytics.",
    modules: [
      { name: "Platform Strategy", steps: [
        { t: "X (Twitter) for Journalists", d: "Breaking news, live-tweeting, building threads, and engaging with peers and sources ethically." },
        { t: "Instagram for News", d: "Stories, Reels, carousels, and captions to tell news stories visually." },
        { t: "LinkedIn for Journalists", d: "Build a professional profile, share long-form journalism, and network with industry professionals." },
        { t: "TikTok and Short-Form Video", d: "Reach younger audiences with short-form video journalism." }
      ]},
      { name: "Distribution", steps: [
        { t: "Newsletter Fundamentals", d: "Build a subscriber list, design an effective newsletter, and write subject lines that get opened." },
        { t: "Community Building", d: "Engaging readers meaningfully, managing comments, and building membership." },
        { t: "Understanding Algorithms", d: "Key ranking signals for major platforms and how to work with algorithms." },
        { t: "Analytics and Growth", d: "Use platform analytics to understand what content performs and when." },
        { t: "Audience Engagement Ethics", d: "Ethical boundaries of social media engagement." }
      ]}
    ],
    quiz: [
      { q: "What is 'earned media' in the context of content distribution?", opts: ["Paid social media advertising", "Organic coverage, shares, or mentions your content receives from others without payment", "Your publication's own website and channels", "Licensing fees"], ans: 1 },
      { q: "Which statement about social media algorithms is most accurate?", opts: ["Algorithms show content to all followers equally", "Algorithms prioritise content that generates engagement — reactions, comments, and shares", "Algorithms only favour paid content", "Algorithms are irrelevant to organic reach"], ans: 1 },
      { q: "What is the most important metric for measuring a newsletter's effectiveness?", opts: ["Number of subscribers", "Open rate and click-through rate", "Social media followers", "Length of each newsletter"], ans: 1 }
    ]
  },
  {
    id: 7, title: "Basic Design", cat: "Editorial",
    emoji: "🎨", color: "#2d5a1a", rating: "4.8", badge: "🎨",
    steps: 8, dur: "~2 hrs",
    about: "Master the design fundamentals every digital journalist needs. Typography, colour theory, layout basics, and how to use tools like Canva to produce graphics, social cards, and basic page layouts that elevate your journalism without requiring a professional designer.",
    modules: [
      { name: "Design Principles", steps: [
        { t: "Typography for Journalists", d: "Serif vs. sans-serif, font pairing, hierarchy, line length, and spacing." },
        { t: "Colour Theory", d: "The colour wheel, complementary and analogous colours, contrast ratios for accessibility." },
        { t: "Layout and White Space", d: "White space, visual hierarchy, alignment, and how to direct a reader's eye." },
        { t: "Visual Hierarchy", d: "How size, weight, colour, and placement create an order of importance." }
      ]},
      { name: "Digital Design Tools", steps: [
        { t: "Canva for Journalists", d: "Building social media graphics, quote cards, story templates, infographics, and article thumbnails." },
        { t: "Image Selection and Editing", d: "Selecting powerful news images and basic editing." },
        { t: "Accessible Design", d: "Minimum contrast ratios, alt text for images, and readable font sizes." },
        { t: "Branding Consistency", d: "Apply brand guidelines consistently across all visual content." }
      ]}
    ],
    quiz: [
      { q: "In typography, a 'serif' font is best described as:", opts: ["A font without any decorative strokes", "A font with small decorative strokes at the ends of letterforms", "A font used only for headlines", "A monospace coding font"], ans: 1 },
      { q: "What does 'white space' accomplish in graphic design?", opts: ["It is wasted space that should always be filled", "It improves readability, reduces cognitive load, and directs focus", "It makes designs look unfinished", "It is only relevant for print"], ans: 1 },
      { q: "Visual hierarchy in design refers to:", opts: ["Ordering designers by seniority", "Arranging design elements so viewers naturally look at the most important elements first", "Using only two font sizes", "Stacking images vertically"], ans: 1 }
    ]
  },
  {
    id: 8, title: "Gemini for Newsrooms", cat: "Editorial",
    emoji: "🤖", color: "#1a2a5c", rating: "4.9", badge: "🤖",
    steps: 7, dur: "~1.5 hrs",
    about: "Unlock the power of generative AI in journalism. This practical training equips journalists, editors, and content teams with the skills to effectively use Gemini AI in their daily workflows — from headlines and summaries to research, fact-checking, and ethical AI use.",
    modules: [{ name: "Chapter 1", steps: [
      { t: "Introduction to Gemini AI", d: "What Gemini is and why AI tools are becoming essential in modern newsrooms." },
      { t: "What is a Prompt? — Prompt Engineering", d: "The key ingredients of a high-quality prompt and why they matter for getting accurate, useful outputs." },
      { t: "Generating Headlines and Summaries", d: "Rapidly generate headline options, article summaries, social media captions, and newsletter blurbs." },
      { t: "Research and Fact-Checking Assistance", d: "Use AI to identify research directions and flag claims that need verification." },
      { t: "Gems — Custom AI Assistants", d: "Create custom AI assistants for specific journalism tasks." },
      { t: "Deep Research Function", d: "Gemini's Deep Research function for investigative journalism and in-depth reporting." },
      { t: "Ethics and Responsible AI Use", d: "AI hallucinations, copyright concerns, and maintaining editorial independence." }
    ]}],
    quiz: [
      { q: "Which of the following is NOT a goal of Google's Gemini for News initiative?", opts: ["Advancing quality journalism", "Strengthening business models", "Replacing human editors", "Cultivating a global news community"], ans: 2 },
      { q: "What is a 'prompt' in the context of using Gemini?", opts: ["A reminder notification", "The instruction or question you give to Gemini to guide its response", "A type of headline format", "A Google advertising format"], ans: 1 },
      { q: "What is the purpose of 'Gems' in Gemini?", opts: ["To store images", "To train custom AI assistants for specific tasks", "To translate documents", "To generate headlines randomly"], ans: 1 },
      { q: "Gemini-generated images are digitally watermarked to show they are AI-generated.", opts: ["True", "False"], ans: 0 },
      { q: "Which of the following is an example of a high-quality prompt?", opts: ["Give me ideas", "Write something good", "Act as an expert on healthy ageing and list activities for seniors with limited mobility", "Make something cool"], ans: 2 },
      { q: "An 'AI hallucination' refers to:", opts: ["A journalist using AI for creative inspiration", "When an AI model generates false or fabricated information presented as fact", "AI generating overly creative headlines", "Using AI tools while fatigued"], ans: 1 }
    ]
  },
  {
    id: 9, title: "NotebookLM Training", cat: "Editorial",
    emoji: "📓", color: "#2a1a5c", rating: "4.8", badge: "📓",
    steps: 6, dur: "~1.5 hrs",
    about: "Use Google's NotebookLM to organise research, synthesise sources, and produce smarter journalism faster. Covers creating notebooks, uploading and querying source documents, the Audio Overview feature, and using NotebookLM for investigative journalism workflows.",
    modules: [{ name: "Chapter 1", steps: [
      { t: "Introduction to NotebookLM", d: "What NotebookLM is and how it differs from general AI chatbots. NotebookLM is grounded in your uploaded sources." },
      { t: "Creating Notebooks and Uploading Sources", d: "Create a notebook, upload documents (PDFs, Google Docs, pasted text, web links), and organise source material." },
      { t: "Asking Questions of Your Documents", d: "Ask for summaries, specific facts, comparisons between sources, and identifying contradictions." },
      { t: "Cross-Source Synthesis", d: "Identify themes, contradictions, and information gaps across multiple sources." },
      { t: "Audio Overview Feature", d: "Generate a spoken-word podcast-style briefing of your source documents — ideal for pre-interview prep." },
      { t: "Investigative Journalism Workflows", d: "Analysing leaked documents, cross-referencing financial records, and building a research base for long-form journalism." }
    ]}],
    quiz: [
      { q: "What is the main function of NotebookLM for journalists?", opts: ["Designing infographics", "AI-powered research grounded in your uploaded sources", "Social media automation", "Podcast editing"], ans: 1 },
      { q: "NotebookLM uses your uploaded data to train its models.", opts: ["True", "False"], ans: 1 },
      { q: "NotebookLM allows users to collaborate with a virtual research assistant that can cite sources.", opts: ["True", "False"], ans: 0 },
      { q: "How does NotebookLM help users ensure the accuracy of the information it provides?", opts: ["It searches the internet in real time", "It cites the specific sources from your uploaded documents for every response", "It uses a fact-checking algorithm", "It randomly samples internet data"], ans: 1 }
    ]
  },
  {
    id: 10, title: "Google Pinpoint Training", cat: "Editorial",
    emoji: "📌", color: "#5c3a1a", rating: "4.7", badge: "📌",
    steps: 7, dur: "~2 hrs",
    about: "Master Google Pinpoint for investigative journalism — search thousands of documents, audio, and images at scale. Pinpoint uses machine learning to automatically identify and label people, organisations, and locations across large document collections.",
    modules: [{ name: "Chapter 1", steps: [
      { t: "What is Google Pinpoint?", d: "Search and analyse large collections of documents, images, and audio files using AI-powered entity recognition." },
      { t: "Uploading Document Collections", d: "Create a collection, upload bulk documents (PDFs, images, audio), and organise collections by investigation." },
      { t: "Effective Search Strategies", d: "Search for people, organisations, and locations across thousands of documents simultaneously." },
      { t: "Entity Recognition", d: "Pinpoint automatically identifies and labels named entities — people, organisations, and places — across your documents." },
      { t: "Pattern Spotting Across Documents", d: "Identify which entities appear together most often and build a picture of relationships." },
      { t: "Cross-Referencing Documents", d: "Finding contradictions, confirming details, and building a timeline of events." },
      { t: "Exporting and Documenting Findings", d: "Export findings for use in your reporting and document your methodology for editors." }
    ]}],
    quiz: [
      { q: "Google Pinpoint is primarily designed for journalists who need to:", opts: ["Write articles faster", "Search and analyse large collections of documents using AI-powered entity recognition", "Schedule social media posts", "Build news websites"], ans: 1 },
      { q: "'Entity recognition' in Pinpoint refers to:", opts: ["User account login processes", "The automatic identification and labelling of people, organisations, and locations across documents", "Photo recognition technology", "Pinpoint's pricing model"], ans: 1 },
      { q: "When using Pinpoint for investigative journalism, which approach is MOST effective?", opts: ["Read every document manually before uploading", "Upload the complete document collection first, then use entity search to identify key patterns", "Only upload documents you have already read", "Use Pinpoint to write the final story automatically"], ans: 1 }
    ]
  },
  {
    id: 11, title: "Journalism 101: Essential Skills", cat: "Editorial",
    emoji: "📡", color: "#1a4a4a", rating: "5.0", badge: "📡",
    steps: 10, dur: "~5 hrs",
    about: "A comprehensive refresher on the core principles and practices of quality journalism. Covers clear and accurate writing, ethical decision-making, effective sourcing, and fact verification. Participants will enhance their storytelling techniques for diverse platforms while adapting to the rapidly changing media landscape.",
    modules: [{ name: "Chapter 1", steps: [
      { t: "What is News?", d: "The six pillars of news value: timeliness, significance, proximity, prominence, human interest, and unusualness." },
      { t: "The Journalist's Role", d: "Holding power to account, informing the public, and giving voice to the voiceless." },
      { t: "Newsgathering Techniques", d: "Tip-offs, document searches, developing and cultivating sources, and finding stories others miss." },
      { t: "Effective Interviewing", d: "Plan interviews, establish rapport, ask open and follow-up questions, and manage difficult interviewees." },
      { t: "Accuracy and Verification", d: "Multi-source confirmation, document checking, and reverse image search." },
      { t: "Ethics and Decision-Making", d: "When to name a victim, when to publish sensitive information, how to handle anonymous sources." },
      { t: "Press Freedom and Media Law", d: "Defamation, privacy, contempt of court, and protections offered by the Constitution and Press Code." },
      { t: "Storytelling for Multiple Platforms", d: "Adapt your storytelling approach for print, web, audio, and video." },
      { t: "The Modern Newsroom", d: "How modern newsrooms are structured and how to navigate a newsroom hierarchy." },
      { t: "Your First Byline", d: "Building a portfolio, writing to editors, using freelancing to gain experience." }
    ]}],
    quiz: [
      { q: "The six pillars of news value include all of the following EXCEPT:", opts: ["Timeliness", "Profitability", "Proximity", "Human interest"], ans: 1 },
      { q: "What is the primary democratic function of journalism?", opts: ["Generating advertising revenue", "Holding power to account, informing the public, and giving voice to the voiceless", "Entertaining audiences", "Promoting government policies"], ans: 1 },
      { q: "In journalism, 'multi-source confirmation' means:", opts: ["Getting the same story confirmed by at least two independent sources before publishing", "Having multiple editors review a story", "Interviewing multiple people for one quote", "Using multiple social media platforms"], ans: 0 },
      { q: "In South African media law, defamation refers to:", opts: ["Criticising government policy", "Publishing a false statement that damages a person's reputation", "Interviewing a source anonymously", "Breaking a story before competitors"], ans: 1 }
    ]
  },

  // ════════════════════════════════
  // SALES (Training Workflow)
  // ════════════════════════════════
  {
    id: 101, title: "Welcome to Independent Media Group", cat: "Sales",
    emoji: "🏢", color: "#1a3a1a", rating: "5.0", badge: "🏢",
    steps: 1, dur: "~30 min",
    about: "An introduction to the Independent Media Group — our history, values, mission, and the role we play in South Africa's media landscape. Essential onboarding for all new team members.",
    modules: [{ name: "Welcome", steps: [{ t: "Welcome to Independent Media Group", d: "Our history, values, mission, and our role in South Africa's media landscape." }] }],
    quiz: [
      { q: "Independent Media is primarily based in:", opts: ["Johannesburg", "Cape Town", "Durban", "Pretoria"], ans: 0 },
      { q: "What is the primary mission of Independent Media Group?", opts: ["Entertainment only", "Quality journalism that serves communities across South Africa", "International news only", "Digital advertising only"], ans: 1 }
    ]
  },
  {
    id: 102, title: "Introduction to Volt Africa", cat: "Sales",
    emoji: "⚡", color: "#1a1a5c", rating: "5.0", badge: "⚡",
    steps: 1, dur: "~30 min",
    about: "Learn about Volt Africa — our digital media brand, its audiences, offerings, and how it fits into the broader Independent Media ecosystem. Essential for all client-facing and commercial teams.",
    modules: [{ name: "Volt Africa", steps: [{ t: "Introduction to Volt Africa", d: "Volt Africa's audiences, digital offerings, and its position in the Independent Media ecosystem." }] }],
    quiz: [
      { q: "Volt Africa is primarily a:", opts: ["Print newspaper", "Digital media brand targeting South African audiences", "Radio station", "Television network"], ans: 1 },
      { q: "Volt Africa is part of which larger media group?", opts: ["Media24", "Naspers", "Independent Media Group", "Times Media"], ans: 2 }
    ]
  },
  {
    id: 103, title: "Module 1: The Digital Landscape", cat: "Sales",
    emoji: "🌐", color: "#0f3460", rating: "4.9", badge: "🌐",
    steps: 1, dur: "~45 min",
    about: "Understand the evolving digital media landscape in South Africa and globally. How audiences consume digital content, where advertising spend is shifting, and what it means for Independent Media's commercial strategy.",
    modules: [{ name: "The Digital Landscape", steps: [{ t: "The Digital Landscape", d: "How audiences consume digital content, where advertising spend is shifting, and what it means for our commercial strategy." }] }],
    quiz: [
      { q: "Digital advertising spend in South Africa has been:", opts: ["Declining steadily", "Growing year on year as audiences shift online", "Remaining flat", "Replaced entirely by print advertising"], ans: 1 },
      { q: "What is 'programmatic advertising'?", opts: ["Advertising on TV programmes", "Automated buying and selling of digital advertising inventory", "Print advertising with a programme", "Social media advertising only"], ans: 1 },
      { q: "Which platform type has seen the biggest growth in news consumption?", opts: ["Print newspapers", "Mobile and social media platforms", "Radio", "Billboards"], ans: 1 }
    ]
  },
  {
    id: 104, title: "Module 2: Social Media Landscape", cat: "Sales",
    emoji: "📲", color: "#16213e", rating: "4.8", badge: "📲",
    steps: 1, dur: "~45 min",
    about: "A deep dive into the social media landscape as it relates to Independent Media's commercial offerings. Covers key platforms, audience behaviour, content formats, and how to position social media as part of a client's media mix.",
    modules: [{ name: "Social Media Landscape", steps: [{ t: "Social Media Landscape", d: "Key platforms, audience behaviour, content formats, and how to position social media as part of a client's media mix." }] }],
    quiz: [
      { q: "When pitching social media to a client, the most important factor to lead with is:", opts: ["The number of followers", "Audience alignment — reaching the right people at the right time", "The lowest cost per post", "The platform's global popularity"], ans: 1 },
      { q: "Which social media metric is most useful for measuring brand awareness campaigns?", opts: ["Conversions", "Reach and impressions", "Cost per click", "Revenue generated"], ans: 1 },
      { q: "Short-form video content (e.g. Reels, TikTok) is effective because:", opts: ["It is cheaper to produce", "It captures attention quickly and has high organic reach on most platforms", "It replaces all other content formats", "Only young people watch it"], ans: 1 }
    ]
  },
  {
    id: 105, title: "Module 4: Our Ecosystem — Digital", cat: "Sales",
    emoji: "💻", color: "#533483", rating: "4.8", badge: "💻",
    steps: 1, dur: "~45 min",
    about: "Explore the full suite of Independent Media's digital platforms and products. Learn how to package digital offerings for clients, understand audience data, and build compelling digital proposals that drive results.",
    modules: [{ name: "Our Ecosystem — Digital", steps: [{ t: "Our Ecosystem — Digital", d: "The full suite of Independent Media's digital platforms and products. How to package digital offerings for clients and build compelling digital proposals." }] }],
    quiz: [
      { q: "When selling digital advertising, which is the strongest value proposition for a client?", opts: ["The lowest CPM in the market", "Reaching a qualified, engaged audience that aligns with their target market", "The most ad formats available", "The largest total audience regardless of relevance"], ans: 1 },
      { q: "What does 'CPM' stand for in digital advertising?", opts: ["Cost Per Month", "Cost Per Mille (cost per thousand impressions)", "Clicks Per Minute", "Content Per Medium"], ans: 1 },
      { q: "An 'integrated digital campaign' typically includes:", opts: ["One ad format only", "A combination of display, social, video, and content marketing across multiple touchpoints", "Only social media advertising", "Only Google advertising"], ans: 1 }
    ]
  },
  {
    id: 106, title: "Module 5: Our Ecosystem — Paid Media", cat: "Sales",
    emoji: "💰", color: "#e94560", rating: "4.8", badge: "💰",
    steps: 1, dur: "~45 min",
    about: "Understand Independent Media's paid media offerings including display advertising, native content, sponsored features, and programmatic solutions. Learn how to match client objectives with the right paid media products.",
    modules: [{ name: "Our Ecosystem — Paid Media", steps: [{ t: "Our Ecosystem — Paid Media", d: "Display advertising, native content, sponsored features, and programmatic solutions. Match client objectives with the right paid media products." }] }],
    quiz: [
      { q: "'Native advertising' refers to:", opts: ["Advertising that appears on local community websites only", "Paid content that matches the look and feel of the editorial environment it appears in", "Outdoor advertising using local landmarks", "Only print advertising"], ans: 1 },
      { q: "Which paid media format is generally most effective for brand storytelling?", opts: ["Standard display banner ads", "Sponsored content/native articles", "Pop-up ads", "Pre-roll video only"], ans: 1 },
      { q: "When a client asks for 'performance-based' advertising, they typically want:", opts: ["Brand awareness with no measurement", "To pay based on measurable outcomes like clicks, leads, or conversions", "The cheapest available option", "Only social media advertising"], ans: 1 }
    ]
  },
  {
    id: 107, title: "Module 8: Our Ecosystem — Opportunities", cat: "Sales",
    emoji: "🚀", color: "#f5a623", rating: "4.9", badge: "🚀",
    steps: 1, dur: "~45 min",
    about: "Explore the full range of commercial opportunities within the Independent Media ecosystem. Identify the right opportunities for each client, build integrated proposals, and close deals with confidence.",
    modules: [{ name: "Our Ecosystem — Opportunities", steps: [{ t: "Our Ecosystem — Opportunities", d: "The full range of commercial opportunities within the Independent Media ecosystem. Identify the right opportunities for each client and build integrated proposals." }] }],
    quiz: [
      { q: "An 'integrated media proposal' combines:", opts: ["Only print advertising", "Multiple platforms and formats tailored to the client's objectives and target audience", "Only digital advertising", "Only sponsored content"], ans: 1 },
      { q: "When identifying opportunities for a client, the best starting point is:", opts: ["The cheapest available packages", "Understanding the client's business objectives and target audience", "The most expensive premium packages", "Whatever was sold to the last client"], ans: 1 }
    ]
  },
  {
    id: 108, title: "Back End: Workflow", cat: "Sales",
    emoji: "⚙️", color: "#2c3e50", rating: "4.7", badge: "⚙️",
    steps: 1, dur: "~45 min",
    about: "Understand the internal workflow processes at Independent Media — from campaign booking and trafficking to delivery and reporting. Essential knowledge for all sales and operations team members to ensure seamless campaign execution.",
    modules: [{ name: "Workflow", steps: [{ t: "Workflow 2026", d: "Campaign booking and trafficking to delivery and reporting. Essential knowledge for all sales and operations team members." }] }],
    quiz: [
      { q: "In campaign management, 'trafficking' refers to:", opts: ["Road-based advertising", "The process of setting up and managing digital ad creative in the ad server", "Illegal ad activities", "Print distribution logistics"], ans: 1 },
      { q: "Why is accurate campaign briefing important?", opts: ["It fills in time before a campaign starts", "It ensures the creative and technical teams can execute the campaign correctly, on time, and on spec", "It is only required for large campaigns", "It is only required for digital campaigns"], ans: 1 },
      { q: "When a campaign goes live, the next key step is:", opts: ["Immediately booking the next campaign", "Monitoring delivery and performance to ensure it is running correctly", "Waiting until the end of the campaign to review", "Sending an invoice immediately"], ans: 1 }
    ]
  },
  {
    id: 109, title: "Back End: Strategy", cat: "Sales",
    emoji: "🎯", color: "#8e44ad", rating: "4.9", badge: "🎯",
    steps: 1, dur: "~45 min",
    about: "Learn how to think and operate strategically as part of the Independent Media commercial team. Covers understanding client business objectives, building strategic media proposals, and positioning Independent Media's offerings as a strategic partner — not just a vendor.",
    modules: [{ name: "Strategy", steps: [{ t: "Back End — Strategy", d: "Understanding client business objectives, building strategic media proposals, and positioning Independent Media as a strategic partner." }] }],
    quiz: [
      { q: "The difference between a vendor and a strategic partner is:", opts: ["Price", "A strategic partner understands the client's business goals and proposes media solutions that help achieve them", "A strategic partner only sells premium products", "There is no difference"], ans: 1 },
      { q: "A strong media strategy proposal should always include:", opts: ["Only rate cards", "Client objectives, target audience insights, recommended media mix, and expected outcomes", "Only digital advertising options", "Whatever the client has used before"], ans: 1 },
      { q: "When a client says 'we have no budget', a strategic response is:", opts: ["End the conversation immediately", "Understand their objectives and show how a focused campaign can deliver ROI even with limited budget", "Offer only the cheapest option", "Promise results without any data"], ans: 1 }
    ]
  }
];

// ── RESOURCES ──
// To update: edit URL, title, desc, or type here.
const RESOURCES = [
  {
    title: "How to Create & Publish a New Article",
    type: "Guide", emoji: "📝",
    desc: "Step-by-step walkthrough of publishing content on the IMCS platform using Scribehow.",
    url: "https://scribehow.com/shared/How_to_Create__Publish_a_New_Article__IMCS"
  },
  {
    title: "IMCS Writer's Style Guide",
    type: "Document", emoji: "📄",
    desc: "Official editorial style guide: grammar, spelling, AP style, and formatting rules for all IMCS writers.",
    url: "https://docs.google.com/document/d/1HnLVTNnkXILXnKvOa73Zljkw1Y_pCepiuVNktAmO_7o/view"
  },
  {
    title: "Journalism Ethics Video",
    type: "Video", emoji: "🎥",
    desc: "A comprehensive look at journalistic ethics, standards, and real-world ethical dilemmas.",
    url: "https://www.youtube.com/watch?v=AlrC-XaKwew"
  },
  {
    title: "AP Style Quick Reference",
    type: "Document", emoji: "📚",
    desc: "Quick-reference guide to AP style: numbers, titles, abbreviations, and more.",
    url: "https://www.apstylebook.com/"
  },
  {
    title: "Interview Preparation Checklist",
    type: "Guide", emoji: "✅",
    desc: "Everything you need before, during, and after a journalist interview.",
    url: "https://www.poynter.org/reporting-editing/2016/how-to-prepare-for-an-interview/"
  },
  {
    title: "Google News Publisher Guide",
    type: "Guide", emoji: "📰",
    desc: "How to set up and manage your publication in Google News Publisher Centre.",
    url: "https://support.google.com/news/publisher-center/answer/9607025"
  },
  {
    title: "Training Workflow Document",
    type: "Document", emoji: "📋",
    desc: "The full IndyTrain course and module workflow document including all video links.",
    url: "https://docs.google.com/document/d/1HnLVTNnkXILXnKvOa73Zljkw1Y_pCepiuVNktAmO_7o/view"
  },
  {
    title: "Gemini for Newsrooms Quiz",
    type: "Quiz", emoji: "🤖",
    desc: "Official Gemini for Newsrooms assessment via Google Forms.",
    url: "https://forms.gle/rjfZSEQNACh4VkQ4A"
  },
  {
    title: "Digital Landscape Quiz",
    type: "Quiz", emoji: "🌐",
    desc: "Module 1 assessment: The Digital Landscape.",
    url: "https://forms.gle/xu6M5eiunqGWv4k9A"
  },
  {
    title: "Social Media Landscape Quiz",
    type: "Quiz", emoji: "📲",
    desc: "Module 2 assessment: Social Media Landscape.",
    url: "https://forms.gle/mJ2xL22eNStTeQFn6"
  }
];

// ── CHAT ROOMS ──
const CHAT_ROOMS = [
  { id: "general",   name: "General",   icon: "💬", desc: "All cadets",              prev: "Welcome to IndyTrain!" },
  { id: "editorial", name: "Editorial", icon: "✍️", desc: "Writing & editing",       prev: "Tips on headline writing" },
  { id: "sales",     name: "Sales",     icon: "💼", desc: "Sales & commercial",      prev: "Module 8 is really useful!" },
  { id: "digital",   name: "Digital",   icon: "📱", desc: "Social, SEO & multimedia", prev: "Anyone tried Gemini for research?" },
  { id: "ai-tools",  name: "AI Tools",  icon: "🤖", desc: "AI in journalism",        prev: "NotebookLM is a game changer!" },
];
