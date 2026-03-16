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
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Tailwind CSS",
      level: 95,
      description: "Rapid prototyping, custom designs, responsive layouts",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "JavaScript",
      level: 88,
      description: "ES6+, async patterns, DOM manipulation",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Laravel",
      level: 82,
      description: "API development, authentication, Eloquent ORM",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
    {
      name: "Python",
      level: 78,
      description: "Django, Flask, data processing, automation",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Figma",
      level: 80,
      description: "UI/UX design, prototyping, design systems",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
  ],
  tools: [
    {
      name: "VS Code",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "GitHub",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "MySQL",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Docker",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Postman",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    },
  ],
  projects: [
    {
      id: 1,
      title: "Fintech Dashboard UI",
      description: "Modern analytics dashboard with sleek charts and dark mode.",
      longDesc: "A highly interactive financial dashboard built using React and Tailwind CSS. Features smooth transitions, interactive Recharts data visualization, and a fully responsive glassmorphism layout.",
      tech: ["React", "TailwindCSS", "Recharts", "Framer Motion"],
      live: "https://demo.example.com",
      github: "https://github.com/renja/fintech-dash",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      screenshots: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      ],
      features: [
        "Interactive analytics charts",
        "Seamless dark/light mode toggle",
        "Bento grid layout system",
        "Optimized rendering",
      ],
    },
    {
      id: 2,
      title: "Aesthetic Agency Landing",
      description: "Minimalist landing page with smooth scroll and typography focus.",
      longDesc: "Creative agency portfolio focusing on high-end typography, negative space, and butter-smooth reveal animations using Lenis scroll and Framer Motion.",
      tech: ["React", "Framer Motion", "TailwindCSS", "Lenis"],
      live: "https://agency.example.com",
      github: "https://github.com/renja/agency-landing",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
      screenshots: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
      ],
      features: [
        "Smooth page scrolling",
        "Advanced scroll-linked animations",
        "Typography-driven design",
        "Mobile-first responsive",
      ],
    },
    {
      id: 3,
      title: "TaskFlow Pro",
      description: "Advanced task management app with drag & drop features.",
      longDesc: "React-based productivity application featuring interactive Kanban boards, seamless drag-and-drop state management, and real-time task updates.",
      tech: ["React", "Zustand", "TailwindCSS", "TypeScript"],
      live: "https://taskflow.example.com",
      github: "https://github.com/renja/taskflow",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1000&auto=format&fit=crop",
      screenshots: [
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1000&auto=format&fit=crop",
      ],
      features: [
        "Drag & drop Kanban board",
        "Global state management",
        "Fluid list animations",
        "Task filtering & search",
      ],
    },
  ],
  testimonials: [
    {
      name: "Dr. Fina",
      role: "Bidan Fina Owner",
      quote: "Renja delivered an exceptional healthcare platform that transformed our operations. Highly recommended!",
      avatar: "https://ui-avatars.com/api/?name=Dr+Fina&background=0D8ABC&color=fff&rounded=true",
    },
    {
      name: "RBM Management",
      role: "PT RBM Tower",
      quote: "Professional, modern, and delivered ahead of schedule. Perfect execution.",
      avatar: "https://ui-avatars.com/api/?name=RBM+Management&background=1E293B&color=fff&rounded=true",
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