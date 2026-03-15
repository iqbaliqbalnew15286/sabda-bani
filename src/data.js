// src/data.js - Expanded for modern portfolio
export const portfolioData = {
  hero: {
    name: "Renja",
    title: "Software & Game Developer",
    subtitles: [
      "Crafting clean, monochrome digital experiences.",
      "Building interactive web applications.",
      "Full-stack developer & UI/UX enthusiast.",
      "Creating scalable software solutions.",
    ],
    cta: "View My Work",
  },
  about: {
    bio: "Grade 11 PPLG student passionate about modern web development, interactive UI/UX, and scalable software solutions. Currently exploring React ecosystems, TailwindCSS, and backend technologies.",
    resume: "Download CV",
    timeline: [
      {
        year: "2024",
        title: "Current",
        desc: "Building advanced portfolio with React, Framer Motion, glassmorphism design",
      },
      {
        year: "2023",
        title: "PPLG Grade 11",
        desc: "Specializing in web & software development",
      },
      {
        year: "2022",
        title: "Started Coding",
        desc: "Self-taught HTML/CSS/JS journey begins",
      },
    ],
  },
  stats: {
    projects: 12,
    clients: 5,
    hours: 1500,
    stars: 250,
  },
  skills: [
    {
      name: "React",
      level: 90,
      description: "Advanced hooks, state management, performance optimization",
    },
    {
      name: "Tailwind CSS",
      level: 95,
      description: "Rapid prototyping, custom designs, responsive layouts",
    },
    {
      name: "JavaScript",
      level: 88,
      description: "ES6+, async patterns, DOM manipulation",
    },
    {
      name: "Laravel",
      level: 82,
      description: "API development, authentication, Eloquent ORM",
    },
    {
      name: "Python",
      level: 78,
      description: "Django, Flask, data processing, automation",
    },
    {
      name: "Node.js",
      level: 75,
      description: "Express.js, REST APIs, real-time apps",
    },
    {
      name: "Git",
      level: 85,
      description: "Version control, branching, collaboration",
    },
    {
      name: "Figma",
      level: 80,
      description: "UI/UX design, prototyping, design systems",
    },
  ],
  tools: [
    "VS Code",
    "Figma",
    "GitHub",
    "Vercel",
    "Netlify",
    "Postman",
    "Laravel Forge",
    "Docker",
    "MySQL",
    "Redis",
    "Tailwind UI",
  ],
  projects: [
    {
      id: 1,
      title: "Bidan Fina",
      description:
        "Complete healthcare management system with patient records, appointments, and billing.",
      longDesc:
        "Full-stack healthcare platform with real-time notifications, role-based access, and advanced reporting. Built for scalability and medical compliance.",
      tech: ["Laravel", "Tailwind", "Alpine.js", "MySQL"],
      live: "https://bidanfina.com",
      github: "https://github.com/renja/bidanfina",
      image: "projects/bidanfina.jpg",
      screenshots: ["screenshot1.jpg", "screenshot2.jpg"],
      features: [
        "Real-time dashboard",
        "Patient management",
        "Appointment scheduling",
        "Billing system",
      ],
    },
    {
      id: 2,
      title: "PT RBM Tower",
      description:
        "Modern company profile with interactive services showcase and contact management.",
      longDesc:
        "Responsive corporate website featuring glassmorphism design, smooth animations, and integrated contact forms.",
      tech: ["React", "TailwindCSS", "Framer Motion"],
      live: "https://rbmtower.com",
      github: "https://github.com/renja/rbmtower",
      image: "projects/rbmtower.jpg",
      screenshots: ["screenshot1.jpg", "screenshot2.jpg"],
      features: [
        "Service showcase",
        "Team profiles",
        "Contact integration",
        "SEO optimized",
      ],
    },
    {
      id: 3,
      title: "TaskFlow Pro",
      description:
        "Advanced task management app with drag & drop, real-time collaboration.",
      longDesc:
        "React-based productivity app with Kanban boards, team collaboration, and progress tracking.",
      tech: ["React", "TypeScript", "Socket.io", "Prisma"],
      live: "#",
      github: "https://github.com/renja/taskflow",
      image: "projects/taskflow.jpg",
      screenshots: ["screenshot1.jpg"],
      features: [
        "Drag & drop Kanban",
        "Real-time sync",
        "Team collaboration",
        "Progress analytics",
      ],
    },
  ],
  testimonials: [
    {
      name: "Dr. Fina",
      role: "Bidan Fina Owner",
      quote:
        "Renja delivered an exceptional healthcare platform that transformed our operations. Highly recommended!",
      avatar: "testimonials/dr-fina.jpg",
    },
    {
      name: "RBM Management",
      role: "PT RBM Tower",
      quote:
        "Professional, modern, and delivered ahead of schedule. Perfect execution.",
      avatar: "testimonials/rbm.jpg",
    },
  ],
  contact: {
    email: "hello@renja.dev",
    phone: "+62 800 0000 0000",
    emailjs: {
      serviceId: "YOUR_SERVICE_ID",
      templateId: "YOUR_TEMPLATE_ID",
      publicKey: "YOUR_PUBLIC_KEY",
    },
    social: {
      github: "https://github.com/renja",
      linkedin: "https://linkedin.com/in/renja",
      twitter: "https://twitter.com/renja",
    },
  },
};
