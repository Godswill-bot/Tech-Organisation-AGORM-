export type Service = {
  title: string;
  description: string;
  icon: "Globe" | "Smartphone" | "Palette" | "Lightbulb" | "Rocket";
};

export type Project = {
  id: string;
  title: string;
  category: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: string;
  gradient: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  github: string;
  email: string;
};

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Scalable, secure, and lightning-fast web platforms built for growth and reliability.",
    icon: "Globe",
  },
  {
    title: "Mobile App Development",
    description:
      "Native-feel cross-platform mobile products focused on performance and user retention.",
    icon: "Smartphone",
  },
  {
    title: "UI/UX Design",
    description:
      "Data-informed interfaces crafted to feel premium, intuitive, and conversion-friendly.",
    icon: "Palette",
  },
  {
    title: "Tech Consulting",
    description:
      "Architecture, delivery strategy, and technical audits that de-risk execution.",
    icon: "Lightbulb",
  },
  {
    title: "Brand Digital Transformation",
    description:
      "End-to-end digital modernization for brands ready to lead in their industry.",
    icon: "Rocket",
  },
];

export const projects: Project[] = [
  {
    id: "edu-flow",
    title: "EduFlow LMS",
    category: "Education",
    summary: "A learning platform designed for institutions delivering hybrid education at scale.",
    challenge:
      "Fragmented class workflows and low learner engagement across distributed campuses.",
    solution:
      "Built a modular LMS with role-based dashboards, realtime sessions, and automated reporting.",
    impact: "Reduced admin workload by 42% and improved completion rates by 31%.",
    gradient: "from-cyan-500/30 via-blue-500/20 to-violet-600/40",
  },
  {
    id: "threadline",
    title: "Threadline Commerce",
    category: "Fashion",
    summary: "An omnichannel commerce experience for a fast-moving fashion brand.",
    challenge: "High cart abandonment and disconnected in-store and online inventory visibility.",
    solution:
      "Delivered a headless storefront with inventory sync, personalized campaigns, and smart checkout.",
    impact: "Increased conversion by 24% and repeat purchases by 19% in 3 months.",
    gradient: "from-fuchsia-500/25 via-indigo-500/20 to-sky-500/35",
  },
  {
    id: "opscore",
    title: "OpsCore Suite",
    category: "Business",
    summary: "Internal operations platform streamlining workflows for growing enterprises.",
    challenge: "Multiple manual tools slowed down teams and introduced process errors.",
    solution:
      "Engineered a unified dashboard with workflow automation and actionable analytics.",
    impact: "Cut cycle time by 37% and improved operational visibility across departments.",
    gradient: "from-blue-500/30 via-indigo-500/20 to-purple-600/35",
  },
  {
    id: "pulseai",
    title: "PulseAI Assist",
    category: "Startup Product",
    summary: "AGORM internal AI assistant for product teams and customer operations.",
    challenge: "Decision-making speed suffered due to scattered data and repetitive support tasks.",
    solution:
      "Created an AI workspace with semantic search, summaries, and workflow-triggered actions.",
    impact: "Saved 16+ team hours weekly and shortened response times by 53%.",
    gradient: "from-violet-500/30 via-purple-500/20 to-blue-600/35",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Godswill Nwafor",
    role: "Full-stack Developer",
    bio: "Builds resilient web architectures and API ecosystems optimized for scale.",
    linkedin: "https://www.linkedin.com/in/godswill-nwafor",
    github: "https://github.com/godswill",
    email: "mailto:godswill@agorm.io",
  },
  {
    name: "Omoyowho Miracle",
    role: "Mobile Engineer",
    bio: "Designs and ships polished mobile products with excellent runtime performance.",
    linkedin: "https://www.linkedin.com/in/omoyowho-miracle",
    github: "https://github.com/omoyowho",
    email: "mailto:miracle@agorm.io",
  },
  {
    name: "Oreoluwa Olaiya",
    role: "UI/UX Designer",
    bio: "Creates expressive interfaces that balance visual identity, clarity, and usability.",
    linkedin: "https://www.linkedin.com/in/oreoluwa-olaiya",
    github: "https://github.com/oreoluwa",
    email: "mailto:oreoluwa@agorm.io",
  },
  {
    name: "Fatona Ayomide",
    role: "Product Engineer",
    bio: "Bridges strategy and engineering to deliver high-impact digital experiences.",
    linkedin: "https://www.linkedin.com/in/fatona-ayomide",
    github: "https://github.com/fatona",
    email: "mailto:ayomide@agorm.io",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];
