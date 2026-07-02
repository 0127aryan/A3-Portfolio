export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export type ProjectStatus = "Live" | "In Development";

export interface Project {
  title: string;
  description: string;
  status: ProjectStatus;
  cta: string;
  image: string;
  alt: string;
}

export const projects: Project[] = [
  {
    title: "Vanguard Analytics",
    description:
      "Real-time data monitoring platform for high-frequency crypto trading bots.",
    status: "Live",
    cta: "Visit Site",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7URh28uOkroAhXVYXBkjDN7uOQbu2WFd2vFaPRHo3DMtCYPdsjTrPS-M4CgBXvV086NWbwTqPBagyd73leoN81z52rdjqCsHqk9HyM_4_d6GynTgrWBAAkAppk_IfQRpWKToaYyRzTdRzHTb1SeVs5R5uQaLs2LqkZcFQhhKwvIdEz66LuffqFqQT8u9YRymn69Re6OrmCERFWC4F9Du-anHK0AC1hHL2hQ7A48LyqvtLXH3-HW8",
    alt: "A sleek, modern dashboard UI for a SaaS application with vibrant dark mode aesthetics.",
  },
  {
    title: "Flux Logistics",
    description:
      "Next-gen supply chain management tool with AI-driven route optimization.",
    status: "In Development",
    cta: "View Case Study",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA43tW10OWnCCqAKO_bvymtKzyP1SIfYQoSdgqsoofhtOA0M_fomW5Wr4GoaodO_FnctQVWfewbJSWgjAN02o5r74cqD1pKdby-OQb-AfjHmQfGdtQwHmg_AhyiY7aseWfzEHxcbsmdUhUv9rA6CTLxRXJNe1WFzZ17K9BFlKW3u579MbSpQ_4-NG2XtFdfTxp6hNLYXCDKuAOraQm1LHMbrJIX0kVkkuynAzmu1TtuODth-Sooz1c",
    alt: "A professional landing page for an AI-powered logistics platform.",
  },
  {
    title: "Nexus Social",
    description:
      "Decentralized community engine built on top of Ethereum L2 protocols.",
    status: "Live",
    cta: "Visit Site",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBcDztsJP6evgXLT0vghz8YvdV7t-25Zu-QAqEQk_nbPEUU3wSyrB5F6j5R_Sq8H9FleRe3fA3qYwPxwpKz-Y1mWvFqBPZlosU3CpVYgAPOsU-kS8mVbkffx2soWv5Ko2bLrcM_SdyOywBW71Lb37zrsgYWfiJsaKp8oJ735xaU8FyC9vCZrE7UDaEBm6_iaD-kOG22vO-3qKppbH67VWvOLoZVxP1DQXl50nj28mDLdr_HRvYUH4w",
    alt: "An innovative mobile app interface for a decentralized social network.",
  },
];

export interface SkillCategory {
  title: string;
  icon: string;
  accentClass: string;
  wrapperClass: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "javascript",
    accentClass: "text-primary",
    wrapperClass: "border-primary/20 bg-primary-container/5",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "database",
    accentClass: "text-secondary",
    wrapperClass: "border-secondary/20 bg-secondary-container/5",
    skills: ["Node.js", "NestJS", "GraphQL", "Redis"],
  },
  {
    title: "Database",
    icon: "storage",
    accentClass: "text-tertiary",
    wrapperClass: "border-tertiary/20 bg-tertiary-container/5",
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Drizzle"],
  },
  {
    title: "Design",
    icon: "draw",
    accentClass: "text-primary-fixed-dim",
    wrapperClass: "border-on-primary-fixed-variant/20 bg-primary-fixed/5",
    skills: ["UI/UX", "Figma", "Prototyping", "Brand Identity"],
  },
];

export interface Advantage {
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  iconColor: string;
}

export const advantages: Advantage[] = [
  {
    title: "High-Performance Engineering",
    description:
      "We don't just write code; we engineer systems. Our products are optimized for lighthouse scores, load speeds, and enterprise-grade scalability.",
    icon: "speed",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "Design-First Approach",
    description:
      "Great software should be beautiful. We bridge the gap between Figma and Production with pixel-perfect implementation and fluid interactions.",
    icon: "design_services",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    title: "Rapid Development",
    description:
      "As a boutique studio, we move fast. We strip away corporate red tape to ship production-ready MVPs in weeks, not months.",
    icon: "bolt",
    iconBg: "bg-tertiary/10",
    iconColor: "text-tertiary",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "A3 Technologies delivered our marketplace platform two weeks ahead of schedule. The code quality was exceptional, and the UI was exactly as designed.",
    name: "Sarah Miller",
    role: "CEO, RetailSync",
    initials: "SM",
  },
  {
    quote:
      "The most professional development team we've worked with. They truly understand modern React patterns and technical SEO.",
    name: "James Dorsey",
    role: "Product Manager, MetaLogistics",
    initials: "JD",
  },
  {
    quote:
      "They took our napkin sketch and turned it into a fully functional SaaS MVP in record time. Highly recommended for startups.",
    name: "Alex Liao",
    role: "Founder, StealthAI",
    initials: "AL",
  },
];

export interface Service {
  title: string;
  description: string;
  price: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "Landing Pages",
    description:
      "Conversion-optimized landing pages that load in milliseconds and look stunning on any device.",
    price: "Starting at $2.5k",
    icon: "web",
  },
  {
    title: "Full-Stack Web Apps",
    description:
      "Complex web applications with secure authentication, real-time updates, and robust databases.",
    price: "Get a Quote",
    icon: "layers",
  },
  {
    title: "UI/UX & Web Design",
    description:
      "Human-centered design focused on intuitive navigation, accessibility, and brand aesthetic.",
    price: "Starting at $1.5k",
    icon: "palette",
  },
  {
    title: "API Development",
    description:
      "Scalable RESTful or GraphQL APIs designed for performance, documentation, and ease of integration.",
    price: "Get a Quote",
    icon: "api",
  },
  {
    title: "Website Maintenance",
    description:
      "Ongoing support, security patches, performance optimization, and feature updates.",
    price: "$499 / Month",
    icon: "settings",
  },
  {
    title: "MVP Development",
    description:
      "The fastest way to validate your idea. We build core features to get you to market in 4-6 weeks.",
    price: "Starting at $8k",
    icon: "rocket_launch",
  },
];
