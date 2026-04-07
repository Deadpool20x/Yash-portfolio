export type SkillLevel = "ADVANCED" | "INTERMEDIATE";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  num: string;
  status: "PRODUCTION" | "RESEARCH" | "COMING_SOON";
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  repoUrl: string | null;
  demoUrl: string | null;
}

export interface Hackathon {
  year: string;
  status: "COMPLETED" | "UPCOMING";
  title: string;
  org: string;
  description: string;
}

export interface StatCard {
  num: string;
  label: string;
}

export interface ContactLink {
  icon: string;
  label: string;
  value: string;
  href: string | null;
}

export const SKILLS: SkillCategory[] = [
  {
    title: "LANGUAGES // CORE",
    skills: [
      { name: "Python", level: "ADVANCED" },
      { name: "JavaScript", level: "ADVANCED" },
      { name: "TypeScript", level: "INTERMEDIATE" },
      { name: "Java", level: "INTERMEDIATE" },
      { name: "HTML5 / CSS3", level: "ADVANCED" },
    ],
  },
  {
    title: "FRAMEWORKS // RUNTIME",
    skills: [
      { name: "React.js", level: "ADVANCED" },
      { name: "Next.js 15", level: "ADVANCED" },
      { name: "Node.js", level: "ADVANCED" },
      { name: "Tailwind CSS", level: "ADVANCED" },
      { name: "TensorFlow / Keras", level: "INTERMEDIATE" },
    ],
  },
  {
    title: "AI / ML // INTELLIGENCE",
    skills: [
      { name: "Google Gemini API", level: "ADVANCED" },
      { name: "OpenAI GPT-4o", level: "ADVANCED" },
      { name: "EfficientNet-B0/B2", level: "INTERMEDIATE" },
      { name: "Bidirectional LSTM", level: "INTERMEDIATE" },
      { name: "Roboflow (CV)", level: "INTERMEDIATE" },
    ],
  },
  {
    title: "DATABASES // DATA_LAYER",
    skills: [
      { name: "MongoDB Atlas", level: "ADVANCED" },
      { name: "Mongoose ODM", level: "ADVANCED" },
      { name: "Supabase", level: "INTERMEDIATE" },
      { name: "SQL", level: "INTERMEDIATE" },
    ],
  },
  {
    title: "CLOUD & TOOLS // INFRA",
    skills: [
      { name: "Vercel", level: "ADVANCED" },
      { name: "Cloudinary", level: "ADVANCED" },
      { name: "Git & GitHub", level: "ADVANCED" },
      { name: "Resend API", level: "INTERMEDIATE" },
    ],
  },
  {
    title: "CONCEPTS // ARCHITECTURE",
    skills: [
      { name: "REST API Design", level: "ADVANCED" },
      { name: "RBAC Systems", level: "ADVANCED" },
      { name: "System Design", level: "INTERMEDIATE" },
      { name: "Deep Learning", level: "INTERMEDIATE" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "civicpulse",
    num: "PROJECT_001",
    status: "PRODUCTION",
    title: "Civic Reporting & Resolution System",
    subtitle: "AI-Powered Municipal Issue Management Platform",
    description:
      "Full-stack production platform bridging citizens and municipal government for Anand District, Gujarat. Features a 3-layer AI pipeline (Roboflow → Gemini → GPT-4o), 5-role RBAC system (Citizen, Field Officer, Dept. Manager, Commissioner, Admin), automated SLA enforcement with 4 priority tiers, geospatial duplicate detection, and a full transactional email pipeline. Built like a real government SaaS product.",
    tags: [
      "Next.js 15",
      "MongoDB",
      "Gemini AI",
      "GPT-4o",
      "Roboflow",
      "Cloudinary",
      "Tailwind",
      "Resend",
    ],
    repoUrl: "https://github.com/Deadpool20x/civic-issue-system",
    demoUrl: null,
  },
  {
    id: "cogniscan",
    num: "PROJECT_002",
    status: "RESEARCH",
    title: "CogniScan Pro",
    subtitle: "Real-Time Cognitive Load Estimation via Deep Learning",
    description:
      "Novel dual-branch deep learning architecture fusing EfficientNet-B0 (spatial frame-level features) with Bidirectional LSTM (temporal sequence modeling) for real-time 4-class cognitive load classification. Trained on DAiSEE dataset. End-to-end pipeline with live webcam inference using MediaPipe + OpenCV. Accompanied by a full IEEE-format research paper.",
    tags: [
      "Python",
      "TensorFlow",
      "EfficientNet-B0",
      "BiLSTM",
      "OpenCV",
      "MediaPipe",
      "Keras",
    ],
    repoUrl: "https://github.com/Deadpool20x/CogniScan-Pro",
    demoUrl: null,
  },
  {
    id: "bharathire",
    num: "PROJECT_003",
    status: "COMING_SOON",
    title: "BharatHire AI",
    subtitle: "Career Intelligence Platform for Indian Students",
    description:
      "Upcoming: An AI career co-pilot targeting the employability gap for Tier 2/3 Indian college students. Planned features include ATS + human readability dual scoring, Skill Proof Builder with weekend project briefs, and a Hinglish voice career coach. Addressing India's 57.4% graduate employability crisis.",
    tags: ["Next.js", "Supabase", "Claude API", "Tailwind", "Vercel"],
    repoUrl: null,
    demoUrl: null,
  },
];

export const HACKATHONS: Hackathon[] = [
  {
    year: "2024",
    status: "COMPLETED",
    title: "SIH 2024 — Internal Selection Round",
    org: "MBIT, CVM University · Smart India Hackathon",
    description:
      "My first hackathon. Built a basic civic issue reporting and resolution system — the same problem domain I would refine over the next year. Passed the internal selection round. This was my first full-stack project built under pressure, and the one that made me realize I could build real systems, not just homework assignments.",
  },
  {
    year: "2024",
    status: "COMPLETED",
    title: "CVMU Hackathon 4.0",
    org: "Charotar Vidya Mandal University · 24-Hour Hackathon",
    description:
      "Returned to the same civic problem with a significantly more mature implementation — better architecture, cleaner data flow, and a more polished product. Built and demonstrated a working technical prototype under strict time constraints. The iteration from SIH to CVMU is visible in the repo history.",
  },
];

export const STATS: StatCard[] = [
  { num: "2", label: "Production Projects" },
  { num: "3", label: "AI Projects Built" },
  { num: "7.69", label: "CGPA / 10.0" },
  { num: "2", label: "Hackathons" },
];

export const CONTACT_LINKS: ContactLink[] = [
  {
    icon: "email",
    label: "EMAIL",
    value: "yashpatelkiran4@gmail.com",
    href: "mailto:yashpatelkiran4@gmail.com",
  },
  {
    icon: "github",
    label: "GITHUB",
    value: "github.com/Deadpool20x",
    href: "https://github.com/Deadpool20x",
  },
  {
    icon: "linkedin",
    label: "LINKEDIN",
    value: "yash-patel-3288773b6",
    href: "https://www.linkedin.com/in/yash-patel-3288773b6",
  },
  {
    icon: "location",
    label: "LOCATION",
    value: "Gujarat, India // Remote Ready",
    href: null,
  },
];
