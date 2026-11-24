// Single source of truth. Every fact below comes from the resume.
// To add a link to a project, add { label: "GitHub", href: "https://..." } to its `links` array.

const LEETCODE_URL = "https://leetcode.com/u/Noufal-Rizwan";

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const profile = {
  name: "Mohammed Noufal Rizwan",
  shortName: "Noufal Rizwan",
  role: "Computer Science Student & Aspiring Software Developer",
  location: "Coimbatore, Tamil Nadu",
  email: "mmnoufalrizwan@gmail.com",
  phone: "+91 82486 51004",
  intro:
    "I build full stack applications with Java, Spring Boot, React and MySQL, and AI agents that remember what worked. Looking for a Software Engineering or Full Stack internship.",
  resume: "https://drive.google.com/file/d/1gCC7W4VStVHd7e7nyIxqluZxkQf2rqmj/view?usp=sharing",
  social: [
    { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/noufal-rizwan-57949934" },
    { label: "GitHub", icon: "github", href: "https://github.com/Mohammed-Noufal" },
    { label: "LeetCode", icon: "code", href: LEETCODE_URL },
  ],
};

export const highlights = [
  "Finalist at Hack With Bangalore 4.0, top 1.3% of 15,639+ participants",
  "Built an AI incident response agent with long-term memory",
  "150+ LeetCode problems solved, primarily in C++",
];

export const about = [
  "I'm a Computer Science undergraduate with hands-on full stack experience in Java, Spring Boot, React and MySQL.",
  "I have applied experience building AI agents with long-term memory and LLM integration, backed by a strong DSA foundation of 150+ solved problems.",
  "I've completed two internships in full stack development and reached the finals of national hackathons.",
];

export const skills = [
  { group: "Languages", items: ["Java", "C++", "Python", "JavaScript"] },
  { group: "Frameworks & Libraries", items: ["React", "Spring Boot"] },
  { group: "Database", items: ["MySQL"] },
  { group: "Core CS, AI & Cloud", items: ["DSA", "REST APIs", "AI Agents", "AI/ML Fundamentals", "AWS Cloud (Basic)"] },
  { group: "Soft Skills", items: ["Problem-solving", "Time Management", "Communication", "Team Collaboration"] },
];

export const dsa = {
  title: "Data structures and algorithms",
  summary:
    "Solved 150+ DSA problems on LeetCode, GeeksforGeeks, and other platforms, with solid command of Arrays, Linked Lists, Stacks, Queues, and Trees. Comfortable applying Two Pointers, Sliding Window, and other optimization techniques to reduce time and space complexity, and driven by a habit of breaking down hard problems methodically.",
  linkLabel: "View LeetCode profile",
  href: LEETCODE_URL,
};

export const experience = [
  {
    id: "manotech-intern",
    role: "Software Development Intern",
    org: "ManoTech",
    mode: "On-site",
    period: "Sep 30 – Oct 30, 2026",
    points: [
      "Developing a freelance e-commerce application for a water purifier company using React and Java.",
      "Using AI-assisted development for coding, debugging and implementation.",
    ],
  },
  {
    id: "thiranx-intern",
    role: "Full Stack Development Intern",
    org: "ThiranX",
    mode: "Virtual",
    period: "1 Month",
    points: [
      "Completed a virtual internship in full stack development with ThiranX, an MSME-certified virtual internship provider.",
      "Developed and deployed a personal portfolio website to showcase projects and skills.",
      "Built a task manager application to create, organize and track tasks.",
    ],
  },
];

export const projects = [
  {
    id: "incident-iq",
    title: "IncidentIQ",
    subtitle: "AI Incident Response Agent",
    description:
      "An AI agent with long-term context memory that recognizes previously proven solutions and recalls them when a similar incident recurs.",
    features: [
      "Builds a context-rich prompt from retrieved memory for new incidents and sends it to a Groq-hosted LLM to generate mitigation steps.",
      "Records outcomes of past actions, including ones that worsened an incident, so briefings warn against failed fixes.",
    ],
    tech: ["Java", "Spring Boot", "Groq LLM", "Hindsight API", "AI Agents"],
    githubUrl: "https://github.com/Mohammed-Noufal/incidentIQ",
    links: [],
  },
  {
    id: "customer-grievance-system",
    title: "Customer Grievance Management System",
    subtitle: "Spring Boot REST application",
    description:
      "A REST application to register and track customer grievances in real time, with centralized data management that improves handling efficiency.",
    features: [
      "Layered architecture with Spring MVC and Spring Data JPA for maintainability.",
      "MySQL persistence with robust validation and exception handling.",
    ],
    tech: ["Java", "Spring Boot", "Spring MVC", "Spring Data JPA", "MySQL"],
    githubUrl: "https://github.com/Mohammed-Noufal/Customer-Grievance-Redressal-System",
    links: [],
  },
];

export const achievements = [
  "Finalist, Hack With Bangalore 4.0 (Microsoft Bangalore), top 1.3% of 15,639+ participants nationwide.",
  "Finalist, Hackspora, Karpagam.",
  "Shortlisted, Iontix Hackathon, Yenepoya University, Mangalore.",
  "Participated in Impact Forge and cleared rounds in several other online hackathons on Unstop and Devpost.",
];

export const education = [
  {
    id: "skcet",
    school: "Sri Krishna College of Engineering and Technology",
    degree: "Bachelor of Engineering in Computer Science",
    period: "2024–2028",
    detail: "CGPA: 7.8/10",
  },
  {
    id: "aarumugam-academy",
    school: "Aarumugam Academy Matric Higher Secondary School",
    degree: "HSC",
    period: "2022–2024",
    detail: "Scored 93.33%",
  },
];

export const contact = {
  intro: "I'm open to Software Engineering and Full Stack internships. The quickest way to reach me is email.",
};
