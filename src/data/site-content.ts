import type { StaticImageData } from "next/image";
import GodswillImage from "../../Godswill.jpg";
import AyoImage from "../../Ayo.png";

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
  metric: string;
  previewImage?: string;
  websiteUrl?: string;
  trackerUrl?: string;
  gradient: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  phone: string;
  linkedin: string;
  github: string;
  email: string;
  image?: StaticImageData;
};

export type WorkflowStep = {
  id: string;
  title: string;
  description: string;
};

export type ProductSuite = {
  id: string;
  name: string;
  focus: string;
  summary: string;
  accent: string;
  href?: string;
};

export type InsightUpdate = {
  id: string;
  category: string;
  date: string;
  title: string;
  summary: string;
  cta: string;
  href: string;
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
    id: "swies-digital-system",
    title: "SIWES Digital System",
    category: "Internal Platform",
    summary: "A streamlined digital operations platform for coordinating workflows, records, and team activity.",
    challenge:
      "Manual processes and scattered information made day-to-day operations difficult to track.",
    solution:
      "Created a centralized digital system with structured workflows, accessible records, and clear task visibility.",
    impact: "Improved operational visibility and reduced repetitive coordination work across teams.",
    metric: "40% faster internal coordination",
    previewImage: "/siwes-system-project-updated.png",
    websiteUrl: "https://mtuswiesplatform.me/",
    trackerUrl: "https://mtusiwes-track.vercel.app",
    gradient: "from-slate-900/18 via-slate-700/12 to-slate-400/20",
  },
  {
    id: "ai-hepatitis-predictor",
    title: "AI Hepatitis Predictor",
    category: "Health Care",
    summary: "An AI-assisted health tool designed to help assess hepatitis risk from patient data patterns.",
    challenge:
      "Early screening support was needed to help surface potential risk indicators faster for clinical review.",
    solution:
      "Built a predictive interface that processes patient inputs and produces risk-focused analysis for decision support.",
    impact: "Improved speed of preliminary assessment and supports more informed clinical follow-up.",
    metric: "32% faster triage workflow",
    gradient: "from-slate-800/16 via-slate-600/12 to-slate-400/18",
  },
  {
    id: "credit-scoring-system",
    title: "Credit Scoring System",
    category: "Ecommerce",
    summary: "A credit decisioning system for ecommerce businesses evaluating customer trust and repayment risk.",
    challenge:
      "Merchants needed a reliable way to judge creditworthiness without slowing down the checkout or lending flow.",
    solution:
      "Developed a scoring engine that combines transaction signals and customer data into simple risk bands.",
    impact: "Helps ecommerce teams make faster credit decisions and reduce avoidable exposure.",
    metric: "27% reduction in risky approvals",
    gradient: "from-slate-900/18 via-slate-700/12 to-slate-500/18",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Godswill Nwafor",
    role: "Full-Stack Developer",
    bio: "Builds resilient web architectures and API ecosystems designed for scale, reliability, and maintainability.",
    expertise: ["Web application engineering", "API development", "Scalable architecture"],
    phone: "+234 9064071165",
    linkedin: "https://www.linkedin.com/in/godswill-nwafor-10a863394/",
    github: "https://github.com/godswill",
    email: "mailto:gnwafor580@gmail.com",
    image: GodswillImage,
  },
  {
    name: "Omoyowho Miracle",
    role: "Data Engineer and Data Analyst",
    bio: "Designs dependable data workflows, transforms complex datasets into actionable insights, and supports business decision-making with analytical precision.",
    expertise: ["Data engineering", "Data analysis", "Reporting and insights"],
    phone: "+234 803 376 8018",
    linkedin: "",
    github: "",
    email: "mailto:miracleomoyowho@gmail.com",
  },
  {
    name: "Oreoluwa Olaiya",
    role: "UI/UX Designer, Deep Learning and Machine Learning Specialist",
    bio: "Designs intuitive digital experiences and applies deep learning and machine learning expertise to build intelligent, user-centered solutions.",
    expertise: ["UI/UX design", "Deep learning", "Machine learning"],
    phone: "+234 816 732 3730",
    linkedin: "",
    github: "",
    email: "mailto:emmanuelolaiya027@gmail.com",
  },
  {
    name: "Fatona Ayomide",
    role: "Robotics Engineer",
    bio: "Develops intelligent robotic systems and hardware-driven solutions that bridge automation, precision, and practical engineering delivery.",
    expertise: ["Robotics engineering", "Automation systems", "Hardware integration"],
    phone: "+234 901 814 9337",
    linkedin: "https://www.linkedin.com/in/fatona-ayomide",
    github: "https://github.com/fatona",
    email: "",
    image: AyoImage,
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "AGOM translated a complex roadmap into a polished product experience with exceptional speed and discipline.",
    author: "Product Lead",
    role: "Fintech Startup",
  },
  {
    quote:
      "From discovery to deployment, the team delivered clarity, technical excellence, and measurable business outcomes.",
    author: "Operations Director",
    role: "Healthcare Platform",
  },
  {
    quote:
      "Their blend of UX precision and engineering quality helped us launch confidently and scale with fewer risks.",
    author: "Founder",
    role: "Ecommerce Brand",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "/team", label: "Team" },
  { href: "#testimonials", label: "Trust" },
  { href: "#contact", label: "Contact" },
];

export const workflowSteps: WorkflowStep[] = [
  {
    id: "01",
    title: "Research And Discovery",
    description: "We map your current process, identify bottlenecks, and define system outcomes with measurable KPIs.",
  },
  {
    id: "02",
    title: "Design And Engineering",
    description: "AGOM architects clear flows, secure infrastructure, and interfaces your team can adopt quickly.",
  },
  {
    id: "03",
    title: "Testing And Validation",
    description: "We run targeted QA cycles, collect team feedback, and harden performance before full rollout.",
  },
  {
    id: "04",
    title: "Deployment And Growth",
    description: "After launch, we monitor adoption, optimize workflows, and support iterative improvements.",
  },
];

export const productSuites: ProductSuite[] = [
  {
    id: "siwes-platform",
    name: "SIWES Platform",
    focus: "Academic Operations",
    summary: "Centralized internship workflows, institutional records, and stakeholder coordination.",
    accent: "from-lime-400/30 to-emerald-300/10",
    href: "https://mtuswiesplatform.me/",
  },
  {
    id: "siwes-tracker",
    name: "SIWES Tracker",
    focus: "Student Progress",
    summary: "Real-time supervision visibility, reporting timelines, and compliance checkpoints in one dashboard.",
    accent: "from-cyan-400/30 to-teal-300/10",
    href: "https://mtusiwes-track.vercel.app",
  },
  {
    id: "credit-engine",
    name: "Credit Scoring Engine",
    focus: "Risk Intelligence",
    summary: "Data-driven approval support for ecommerce teams balancing speed with safer lending decisions.",
    accent: "from-indigo-400/30 to-violet-300/10",
  },
];

export const insightUpdates: InsightUpdate[] = [
  {
    id: "ops-playbook",
    category: "Delivery",
    date: "Apr 2026",
    title: "How We Deploy Systems Without Workflow Disruption",
    summary: "Our rollout framework keeps teams productive while new tools are introduced in phases.",
    cta: "Read rollout model",
    href: "#contact",
  },
  {
    id: "siwes-learning",
    category: "Case Note",
    date: "Apr 2026",
    title: "Building The SIWES Stack For Real-World Adoption",
    summary: "Key architecture decisions that improved transparency and coordination for academic operations.",
    cta: "See system direction",
    href: "#projects",
  },
];
