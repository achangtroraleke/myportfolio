export const profile = {
  name: "Atachart Changtroraleke",
  role: "Full-Stack Software Engineer",
  email: "atachart.changtroraleke@gmail.com",
  linkedin: "linkedin.com/in/atachart-changtroraleke",
  linkedinUrl: "https://linkedin.com/in/atachart-changtroraleke",
  github: "github.com/achangtroraleke",
  githubUrl: "https://github.com/achangtroraleke",
  summary:
    "I build and ship production Django and React applications: RESTful APIs, relational schemas, and the dashboards that sit on top of them. Lately that means JWT-based access control, query optimization on Postgres and MySQL, and side projects that put RAG pipelines to work on real documents.",
  stats: [
    { value: "5+", label: "years shipping production Django/React apps" },
    { value: "99.9%", label: "uptime sustained through iterative refactors" },
    { value: "40%", label: "fewer admin errors after a DMS rebuild" },
  ],
};

export const experience = [
  {
    role: "Full-Stack Software Engineer",
    org: "What's Next Agency",
    start: "2020",
    end: "Present",
    points: [
      "Built and maintained end-to-end data processing pipelines in Python (Django/Flask), automating client-specific workflows and improving data ingestion reliability across production systems.",
      "Optimized PostgreSQL queries and indexing strategies, cutting API response times and improving throughput for internal applications under growing data loads.",
      "Led architecture and development of a custom Digital Management System with a responsive React frontend, reducing administrative errors by 40% for non-technical users.",
      "Designed RESTful APIs that turned complex, multi-layered data models into dynamic dashboards, speeding up decisions for business stakeholders.",
      "Worked directly with cross-functional stakeholders on requirements, driving refactors and unit testing that sustained 99.9% application uptime.",
    ],
  },
];

export const projects = [
  {
    name: "FitGauge",
    tagline: "Social fitness & nutrition tracking platform",
    stack: ["Django REST Framework", "React (Vite)", "PostgreSQL"],
    codeUrl: "https://github.com/achangtroraleke/fitfeed",
    liveUrl: "https://www.fitgauge.app/",
    points: [
      "Full-stack fitness tracker with JWT authentication and automatic token refresh, on a normalized schema spanning workout, nutrition, and social data.",
      "Per-set workout logging with derived analytics (total volume, estimated 1RM, personal-best detection) via optimized aggregate queries and an idempotent migration that preserves history.",
      "A social layer with friend and group leaderboards, an activity feed with peer reactions, and a streak-shield retention mechanic, covered by 35+ automated backend tests.",
    ],
  },
  {
    name: "InsightDocs",
    tagline: "AI-driven document intelligence dashboard",
    stack: ["Django REST Framework", "React (Vite)", "LlamaIndex", "pgvector"],
    codeUrl: "https://github.com/achangtroraleke/simple-rag-demo",
    liveUrl: "",
    points: [
      "A document analysis app that parses and processes complex, multi-page PDFs at scale.",
      "A backend parsing pipeline using LlamaIndex and retrieval-augmented generation for conversational, chat-based discovery over uploaded files.",
      "A localized knowledge base on PostgreSQL with the pgvector extension for vector-embedding search.",
    ],
  },
  {
    name: "SaaS Revenue & Expense Tracker",
    tagline: "Multi-stream finance application",
    stack: ["Django", "React", "PostgreSQL"],
    codeUrl: "https://github.com/achangtroraleke/revenue-tracker",
    liveUrl: "",
    points: [
      "A scalable finance app that tracks multiple revenue streams through a dynamic, customizable category-management engine.",
      "Asynchronous reporting routines that generate daily localized balance sheets and historical ledger snapshots.",
      "Multi-tier dropdown form components that streamline manual data entry.",
    ],
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["Django", "Django REST Framework", "Flask", "React.js (Vite)", "Node.js", "Tailwind CSS"],
  },
  {
    category: "Data & Analytics",
    items: ["PostgreSQL", "MySQL", "pgvector", "Pandas", "NumPy", "Jupyter"],
  },
  {
    category: "Cloud, DevOps & Tools",
    items: ["Docker", "Git / GitHub", "CI/CD", "Render", "Netlify", "Linux", "JWT"],
  },
  {
    category: "Practices",
    items: ["RESTful API Design", "RBAC", "MFA", "Agile / Scrum", "Unit Testing"],
  },
];

export const education = [
  {
    school: "University at Buffalo",
    credential: "B.A. in Communication, Concentration in Marketing",
  },
  {
    school: "Springboard",
    credential: "Software Engineering Career Certificate, Advanced Full-Stack Program",
  },
];
