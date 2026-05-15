import {
  Project,
  Skill,
  Experience,
  Achievement,
  Certification,
} from "./components/types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Enterprise Book Store System",
    category: "Backend Architecture",
    description:
      "A robust backend-driven bookstore management platform with layered architecture, optimized database handling, and secure REST API integrations.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000",
    tags: ["Java", "Spring Boot", "Hibernate", "JPA", "MySQL"],
    link: "#",
    github: "https://github.com/Saksham-76/Capgemini_Sprint_BookStore",
    featured: true,
    metrics: ["Layered Architecture", "DTO Optimization", "MySQL Efficiency"],
  },
  {
    id: "2",
    title: "Grocera – Smart Grocery Platform",
    category: "SaaS / Full-stack",
    description:
      "A scalable MERN-stack grocery management platform supporting customers, shopkeepers, and delivery partners with secure authentication, AI-powered automation, and real-time communication.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2000",
    tags: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Firebase",
      "Gemini API",
    ],
    link: "https://grocery-connect.vercel.app/",
    github: "https://github.com/premitgithub/Grocery_Connect",
    featured: true,
    metrics: [
      "Multi-Role Architecture",
      "AI-Powered Automation",
      "Real-Time WebSockets",
      "Scalable Backend",
    ],
  },
  {
    id: "3",
    title: "Premium Airbnb Concept",
    category: "Product Engineering",
    description:
      "A high-performance booking platform focused on scalable backend integration, secure authentication workflows, and cross-platform responsive excellence.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2000",
    tags: ["Java", "Spring Boot", "Hibernate", "MySQL", "Full Stack"],
    link: "#",
    github: "https://github.com/Saksham-76/AirBnB-Clone",
  },
];

export const SKILLS: Skill[] = [
  // Programming Languages
  { name: "Java", category: "Programming Languages" },
  { name: "JavaScript", category: "Programming Languages" },
  { name: "SQL", category: "Programming Languages" },
  // Backend
  { name: "Spring Boot", category: "Backend Development" },
  { name: "Node.js", category: "Backend Development" },
  { name: "REST APIs", category: "Backend Development" },
  { name: "Express.js", category: "Backend Development" },
  // Frontend
  { name: "React.js", category: "Frontend Development" },
  { name: "Context API", category: "Frontend Development" },
  { name: "Tailwind CSS", category: "Frontend Development" },
  // Databases
  { name: "MySQL", category: "Databases" },
  { name: "MongoDB", category: "Databases" },
  // Software Testing
  { name: "Functional Testing", category: "Software Testing" },
  { name: "Regression Testing", category: "Software Testing" },
  { name: "API Testing", category: "Software Testing" },
  { name: "Postman", category: "Software Testing" },
  { name: "Selenium", category: "Software Testing" },
  // Auth
  { name: "JWT", category: "Authentication & Security" },
  { name: "Firebase OTP", category: "Authentication & Security" },
  // Tools
  { name: "Git/GitHub", category: "Tools & Platforms" },
  { name: "Maven", category: "Tools & Platforms" },
  { name: "MySQL Workbench", category: "Tools & Platforms" },
  // Concepts
  { name: "OOPs", category: "Concepts" },
  { name: "DSA", category: "Concepts" },
  { name: "Backend Architecture", category: "Concepts" },
  { name: "Agile/Scrum", category: "Concepts" },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Capgemini",
    role: "Java Backend Developer Training",
    period: "Jan 2026 - Apr 2026",
    points: [
      "Developed 20+ RESTful APIs using Spring Boot",
      "Implemented layered Controller-Service-Repository architecture",
      "Worked with JPA/Hibernate entity relationships",
      "Used Maven for dependency management and Git for version control",
    ],
  },
  {
    company: "IEM Research Foundation",
    role: "Academic ERP Internship",
    period: "May 2025 - Jul 2025",
    points: [
      "Developed and validated APIs for ERP modules",
      "Performed functional testing and fixed 10+ bugs",
      "Contributed to both backend and frontend ERP workflows",
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: "REST APIs", value: "25+", label: "Developed" },
  { title: "DSA Problems", value: "170+", label: "Solved" },
  { title: "Bugs Fixed", value: "10+", label: "Identified" },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Developing Back-End Apps with Node.js and Express",
    issuer: "IBM",
    link: "https://drive.google.com/file/d/1aSzLSnUaQoOyk6_vV-dAddkug6o9FVsQ/view",
  },
  {
    title: "Getting Started with Git and GitHub",
    issuer: "IBM",
    link: "https://drive.google.com/file/d/1V8_Mdf7S-_dm0VgvNKdZkh7QGV3QF0z1/view",
  },
  {
    title: "Data Structures and Algorithms with Java",
    issuer: "NPTEL",
    link: "https://drive.google.com/file/d/1X_IZ-uUP5wCZ7_vwfUTJ16gucI3vk-0p/view",
  },
  {
    title: "Object Oriented Programming in Java",
    issuer: "Coursera",
    link: "https://drive.google.com/file/d/1u8f4kuSF4jrwmzgd29q6WC7IcSx_o1hc/view",
  },
];
