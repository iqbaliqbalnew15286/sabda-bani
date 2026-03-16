import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useSpring, useTransform, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import InteractiveRobot from "./components/InteractiveRobot";
import Navbar from "./components/Navbar";
import devPhoto from "./assets/dev.png";
import badmintonPhoto from "./assets/badminton.png";
import {
  ArrowRight, Github, ExternalLink, MapPin, Code2, Terminal,
  Send, Copy, CheckCircle2, Instagram, Linkedin, ArrowUpRight,
  Coffee, ShieldAlert, Mail, Layers, ChevronRight, Sparkles
} from "lucide-react";

const data = {
  hero: {
    name: "Sabda.",
    roles: ["Software Dev", "UI/UX Designer", "Cybersec Enthusiast"],
  },
  about: {
    bio: "A Grade 11 PPLG student who loves crafting scalable web applications and exploring cybersecurity. Obsessed with clean code, sleek UIs, and modern digital experiences.",
  },
  tools: [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
  ],
  projects: [
    {
      id: 1,
      title: "Bidan Fina System",
      desc: "Healthcare management platform with an efficient interface.",
      longDesc: "Built to streamline clinic operations, managing patient data securely and providing quick access to medical records. Focused on a clean, responsive UI.",
      tech: ["Laravel", "Tailwind CSS", "Alpine.js"],
      features: ["Patient Management", "Secure Data Handling", "Responsive Dashboard"],
      live: "#", 
      github: "#",
      accent: "emerald"
    },
    {
      id: 2,
      title: "PT RBM Tower",
      desc: "Modern corporate profile for telecommunications infrastructure.",
      longDesc: "Developed a sleek, fast-loading, and SEO-friendly corporate website to highlight the company's portfolio and infrastructure capabilities.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      features: ["Dynamic Animations", "SEO Optimized", "CMS Integration"],
      live: "#", 
      github: "#",
      accent: "blue"
    },
    {
      id: 3,
      title: "The Most Difficult Thing",
      desc: "Interactive novel & UI/UX exploration.",
      longDesc: "A personal project adapting 'The Most Difficult Thing to Understand is a Woman' into a digital interactive format focusing on typography and user experience.",
      tech: ["React", "UI/UX", "Figma"],
      features: ["Immersive Reading Mode", "Custom Typography", "Dark/Light Modes"],
      live: "#", 
      github: "#",
      accent: "violet"
    }
  ],
  contact: {
    email: "hello@sabda.dev",
    social: {
      github: "#",
      linkedin: "#",
      instagram: "#"
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'button' || e.target.closest('.cursor-pointer')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-emerald-500 rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 hidden md:block transition-transform duration-300"
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px`, transform: `translate(-50%, -50%) scale(${isHovered ? 0 : 1})` }}
      />
      <motion.div 
        className="fixed top-0 left-0 border border-emerald-500 rounded-full pointer-events-none z-[9998] hidden md:flex items-center justify-center backdrop-blur-[2px]"
        style={{ 
          x: cursorX, 
          y: cursorY,
          width: isHovered ? 60 : 32,
          height: isHovered ? 60 : 32,
          marginLeft: isHovered ? -14 : 0,
          marginTop: isHovered ? -14 : 0,
          backgroundColor: isHovered ? 'rgba(16, 185, 129, 0.1)' : 'transparent',
          transition: 'width 0.3s, height 0.3s, background-color 0.3s, margin 0.3s'
        }}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} className="text-emerald-500">
              <ArrowUpRight size={20} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

const MagneticButton = ({ children, className, onClick, href }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </Component>
  );
};

const TerminalWidget = () => {
  const [text, setText] = useState("");
  const codeLines = [
    "> Initialize Sabda.OS v2.0...",
    "> Loading frameworks: React, Tailwind...",
    "> Establishing secure connection...",
    "> Injecting aesthetic payloads...",
    "> System Online. Welcome, Admin."
  ];

  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    let timeout;

    const typeCode = () => {
      if (currentLine < codeLines.length) {
        if (currentChar < codeLines[currentLine].length) {
          setText(prev => prev + codeLines[currentLine][currentChar]);
          currentChar++;
          timeout = setTimeout(typeCode, 30);
        } else {
          setText(prev => prev + "\n");
          currentLine++;
          currentChar = 0;
          timeout = setTimeout(typeCode, 400);
        }
      } else {
        setTimeout(() => {
          setText("");
          currentLine = 0;
          currentChar = 0;
          typeCode();
        }, 6000);
      }
    };
    
    timeout = setTimeout(typeCode, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="p-8 bg-zinc-950 text-emerald-500 font-mono text-xs sm:text-sm border border-zinc-800 flex flex-col h-full overflow-hidden relative shadow-inner group cursor-default">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex items-center justify-between mb-4 border-b border-zinc-800 pb-4">
        <div className="flex items-center gap-2">
          <ShieldAlert size={16} className="text-emerald-500" />
          <span className="opacity-70">sabda@dev-env:~</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
        </div>
      </div>
      <pre className="whitespace-pre-wrap leading-relaxed">{text}<motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}>_</motion.span></pre>
    </div>
  );
};

const InfiniteMarquee = () => {
  return (
    <div className="w-full bg-emerald-500 text-zinc-950 py-4 overflow-hidden flex whitespace-nowrap border-y border-emerald-600/30 transform -rotate-1 relative z-20 my-20">
      <motion.div 
        animate={{ x: [0, -1000] }} 
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex items-center font-black text-xl uppercase tracking-widest"
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="mx-8">AVAILABLE FOR WORK</span>
            <Sparkles size={20} className="mx-4" />
            <span className="mx-8">OPEN TO COLLABORATION</span>
            <Sparkles size={20} className="mx-4" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [copied, setCopied] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % data.hero.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDark]);

  useEffect(() => {
    if (selectedProject) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedProject]);

  const toggleTheme = () => setIsDark(!isDark);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-950 dark:bg-[#050505] dark:text-zinc-50 transition-colors duration-500 font-sans selection:bg-emerald-500 selection:text-white cursor-default">
      
      <CustomCursor />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main className="overflow-hidden">
        
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>

          <div className="max-w-7xl w-full mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="order-2 lg:order-1 relative">
              
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-sm mb-8 text-sm font-semibold backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                Crafting Digital Experiences
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[1.1] mb-6">
                Hi, I'm <br />
                <span className="relative inline-block">
                  <span className="absolute -inset-2 bg-emerald-500/20 blur-2xl rounded-full opacity-50"></span>
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                    {data.hero.name}
                  </span>
                </span>
              </motion.h1>

              <motion.div variants={fadeInUp} className="h-12 flex items-center text-xl md:text-3xl font-bold text-zinc-500 dark:text-zinc-400 mb-10">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRole}
                    initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {data.hero.roles[currentRole]}
                  </motion.span>
                </AnimatePresence>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <MagneticButton href="#projects" className="px-8 py-4 bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-black rounded-full flex items-center gap-3 hover:scale-105 transition-transform shadow-[0_0_40px_rgba(16,185,129,0.2)]">
                  Explore Works <ArrowRight size={18} />
                </MagneticButton>
                <MagneticButton href="#contact" className="px-8 py-4 bg-transparent text-zinc-900 dark:text-white border border-zinc-300 dark:border-zinc-700 font-bold rounded-full flex items-center gap-3 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
                  Contact Me
                </MagneticButton>
              </motion.div>

            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }} 
              animate={{ opacity: 1, scale: 1, rotate: 0 }} 
              transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
              className="w-full h-[450px] lg:h-[600px] order-1 lg:order-2 relative z-0"
            >
              <InteractiveRobot />
            </motion.div>
          </div>
        </section>

        <InfiniteMarquee />

        <section id="about" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }} 
              variants={fadeInUp} 
              className="flex items-center gap-6 mb-16"
            >
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 dark:text-white">BENTO.</h2>
              <div className="h-2 w-32 bg-gradient-to-r from-emerald-500 to-transparent rounded-l-full hidden md:block"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[220px]">
              
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} 
                whileHover={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="md:col-span-2 md:row-span-1 p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-[#111] border border-zinc-200 dark:border-zinc-800/80 flex flex-col justify-center relative overflow-hidden group hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] group-hover:bg-emerald-500/10 transition-colors duration-700"></div>
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-zinc-900 dark:text-white flex items-center gap-3">
                  About Me
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse"></span>
                </h3>
                <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed relative z-10 font-medium">
                  {data.about.bio}
                </p>
              </motion.div>

              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} 
                className="md:col-span-1 md:row-span-2 rounded-[2.5rem] overflow-hidden border border-zinc-200 dark:border-zinc-800/80 relative group cursor-pointer shadow-sm"
              >
                <img 
                  src={devPhoto} 
                  alt="Developer Profile" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-6 relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <div className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black tracking-widest uppercase rounded-full w-max mb-3 shadow-lg">
                    Developer
                  </div>
                  <p className="text-zinc-200 font-medium text-sm leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Building scalable logic & systems.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} 
                className="md:col-span-1 md:row-span-2 rounded-[2.5rem] overflow-hidden border border-zinc-200 dark:border-zinc-800/80 relative group cursor-pointer shadow-sm"
              >
                <img 
                  src={badmintonPhoto} 
                  alt="Badminton Hobby" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-6 relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <div className="px-4 py-1.5 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-[10px] font-black tracking-widest uppercase rounded-full w-max mb-3 shadow-lg">
                    Hobby
                  </div>
                  <p className="text-zinc-200 font-medium text-sm leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Smashing on the court.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} 
                whileHover={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="md:col-span-2 md:row-span-1 p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-[#111] border border-zinc-200 dark:border-zinc-800/80 flex flex-col justify-center hover:border-zinc-300 dark:hover:border-zinc-700 cursor-default shadow-sm"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-zinc-100 dark:bg-zinc-900 rounded-xl">
                      <Layers size={20} className="text-zinc-900 dark:text-white" />
                    </div>
                    <p className="text-sm font-bold uppercase tracking-widest text-zinc-500">Tech Arsenal</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {data.tools.map(tool => (
                    <motion.div 
                      key={tool.name} 
                      whileHover={{ y: -5 }}
                      className="flex items-center gap-3 px-5 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-emerald-500/50 hover:bg-emerald-500/5 dark:hover:bg-emerald-500/10 shadow-sm transition-colors cursor-pointer group/tool"
                    >
                      <img src={tool.icon} alt={tool.name} className="w-5 h-5 group-hover/tool:scale-110 transition-transform" />
                      <span className="text-sm font-bold text-zinc-600 dark:text-zinc-300 group-hover/tool:text-emerald-500 transition-colors">{tool.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} 
                whileHover={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="md:col-span-2 md:row-span-1 shadow-sm rounded-[2.5rem] overflow-hidden"
              >
                <TerminalWidget />
              </motion.div>

              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} 
                whileHover={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="md:col-span-1 md:row-span-1 p-8 rounded-[2.5rem] bg-emerald-950 text-white border border-emerald-900 relative overflow-hidden group cursor-pointer shadow-lg shadow-emerald-900/20"
              >
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-400 to-transparent group-hover:scale-110 transition-transform duration-700"></div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-emerald-500/30 group-hover:bg-emerald-500/40 transition-colors">
                    <MapPin size={26} className="text-emerald-400 group-hover:-translate-y-1 transition-transform" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold opacity-70 mb-1 text-emerald-300 uppercase tracking-widest flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Base
                    </p>
                    <h3 className="text-3xl font-black tracking-tight">Indonesia</h3>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                whileHover={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 30 }} 
                className="md:col-span-1 md:row-span-1 p-8 rounded-[2.5rem] bg-zinc-950 border border-zinc-800 flex flex-col justify-between group relative overflow-hidden cursor-pointer shadow-sm"
              >
                <div className="absolute -right-8 -bottom-8 text-[#8B5A2B]/10 group-hover:text-[#8B5A2B]/20 transition-colors rotate-12 group-hover:-rotate-6 duration-500">
                  <Coffee size={120} />
                </div>
                <div className="relative z-10 flex justify-between items-start">
                  <div className="p-3.5 bg-zinc-900 rounded-2xl group-hover:bg-[#8B5A2B]/20 border border-zinc-800 group-hover:border-[#8B5A2B]/30 transition-colors">
                    <Coffee size={26} className="text-zinc-500 group-hover:text-[#8B5A2B] group-hover:-rotate-12 transition-all" />
                  </div>
                </div>
                <div className="relative z-10">
                  <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-1 flex items-center gap-2 group-hover:text-[#8B5A2B]/80 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-[#8B5A2B] transition-colors"></span>
                    Fuel
                  </p>
                  <h4 className="font-black text-3xl tracking-tight text-white">Coffee</h4>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        <section id="projects" className="py-24 relative bg-zinc-50 dark:bg-black/20 border-y border-zinc-200 dark:border-zinc-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} 
              className="flex items-center gap-6 mb-16"
            >
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 dark:text-white">WORKS.</h2>
              <div className="h-2 w-32 bg-gradient-to-r from-emerald-500 to-transparent rounded-l-full hidden md:block"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {data.projects.map((project, idx) => {
                const accentStyles = {
                  emerald: "from-emerald-500/20 to-emerald-500/0 text-emerald-500 border-emerald-500/30",
                  blue: "from-blue-500/20 to-blue-500/0 text-blue-500 border-blue-500/30",
                  violet: "from-violet-500/20 to-violet-500/0 text-violet-500 border-violet-500/30",
                };
                
                return (
                  <motion.div 
                    key={project.id}
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} 
                    variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: idx * 0.1 } } }}
                    onClick={() => setSelectedProject(project.id)}
                    className="group relative h-[450px] rounded-[3rem] p-10 md:p-12 bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 overflow-hidden cursor-pointer flex flex-col justify-between hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${accentStyles[project.accent].split(' ')[0]} ${accentStyles[project.accent].split(' ')[1]}`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                          <Code2 size={28} className={`relative z-10 ${accentStyles[project.accent].split(' ')[2]}`} />
                        </div>
                        <div className={`w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 border ${accentStyles[project.accent].split(' ')[3]}`}>
                          <ArrowUpRight size={20} className={accentStyles[project.accent].split(' ')[2]} />
                        </div>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-zinc-900 dark:text-white group-hover:text-emerald-500 transition-colors">{project.title}</h3>
                      <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed max-w-sm">{project.desc}</p>
                    </div>

                    <div className="relative z-10 flex flex-wrap gap-3 mt-8">
                      {project.tech.map(t => (
                        <span key={t} className="px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-sm font-bold text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 group-hover:border-zinc-300 dark:group-hover:border-zinc-700 transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} 
              className="bg-zinc-950 text-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-16 lg:p-20 border border-zinc-800 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-emerald-500/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-blue-500/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"></div>
              
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 relative z-10">
                <div>
                  <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-4 sm:mb-6 leading-[1.1]">
                    LET'S BUILD <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">SOMETHING.</span>
                  </h2>
                  <p className="text-zinc-400 text-base sm:text-lg mb-8 sm:mb-12 max-w-md font-medium">
                    Have an idea, a massive project, or just want to chat about code? Drop me a message below.
                  </p>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-emerald-500/50 transition-colors group cursor-pointer gap-4 sm:gap-0" onClick={() => copyToClipboard(data.contact.email, "email")}>
                      <div className="flex items-center gap-3 sm:gap-4 font-mono text-zinc-300 text-sm sm:text-base break-all sm:break-normal">
                        <div className="p-2 sm:p-2.5 bg-zinc-800 rounded-xl group-hover:bg-emerald-500/20 transition-colors shrink-0">
                          <Mail size={20} className="text-zinc-400 group-hover:text-emerald-500 transition-colors" />
                        </div>
                        {data.contact.email}
                      </div>
                      <button className="p-2 sm:p-3 hover:bg-zinc-800 rounded-xl transition-colors text-zinc-400 group-hover:text-white self-end sm:self-auto shrink-0">
                        {copied === "email" ? <CheckCircle2 size={20} className="text-emerald-500" /> : <Copy size={20} />}
                      </button>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
                      {[
                        { icon: <Github size={24} />, link: data.contact.social?.github },
                        { icon: <Linkedin size={24} />, link: data.contact.social?.linkedin },
                        { icon: <Instagram size={24} />, link: data.contact.social?.instagram }
                      ].map((soc, idx) => (
                        soc.link && (
                          <MagneticButton key={idx} href={soc.link} className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                            {soc.icon}
                          </MagneticButton>
                        )
                      ))}
                    </div>
                  </div>
                </div>

                <form className="space-y-4 sm:space-y-5 flex flex-col justify-center mt-6 lg:mt-0" onSubmit={(e) => e.preventDefault()}>
                  <div className="relative group">
                    <input type="text" placeholder="Your Name" className="w-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-4 sm:p-6 text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500/50 transition-colors peer text-sm sm:text-base" />
                    <div className="absolute inset-0 rounded-2xl border border-emerald-500/0 peer-focus:border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0)] peer-focus:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all pointer-events-none"></div>
                  </div>
                  <div className="relative group">
                    <input type="email" placeholder="Your Email" className="w-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-4 sm:p-6 text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500/50 transition-colors peer text-sm sm:text-base" />
                    <div className="absolute inset-0 rounded-2xl border border-emerald-500/0 peer-focus:border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0)] peer-focus:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all pointer-events-none"></div>
                  </div>
                  <div className="relative group">
                    <textarea rows="4" placeholder="Your Project Message..." className="w-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-4 sm:p-6 text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none peer text-sm sm:text-base" />
                    <div className="absolute inset-0 rounded-2xl border border-emerald-500/0 peer-focus:border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0)] peer-focus:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all pointer-events-none"></div>
                  </div>
                  <button className="w-full py-4 sm:py-6 rounded-2xl bg-white text-zinc-950 font-black text-lg sm:text-xl flex items-center justify-center gap-2 sm:gap-3 hover:bg-emerald-500 hover:text-white transition-all shadow-lg hover:shadow-emerald-500/20 active:scale-[0.98] group">
                    Start Collaboration <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <footer className="py-10 text-center text-zinc-500 dark:text-zinc-600 text-xs font-bold border-t border-zinc-200 dark:border-zinc-800/50 bg-white dark:bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 uppercase tracking-widest flex flex-col md:flex-row justify-between items-center gap-4">
          <span>&copy; {new Date().getFullYear()} {data.hero.name} ALL RIGHTS RESERVED.</span>
          <span className="flex items-center gap-2">Built with <Code2 size={14} className="text-emerald-500" /> & Passion</span>
        </div>
      </footer>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="fixed inset-0 bg-white/90 dark:bg-[#050505]/90 backdrop-blur-md" />
            {(() => {
              const project = data.projects.find((p) => p.id === selectedProject);
              return (
                <motion.div initial={{ opacity: 0, y: 100, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 50, scale: 0.95 }} transition={{ type: "spring", damping: 25, stiffness: 300 }} className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#111] border border-zinc-200 dark:border-zinc-800 rounded-[3rem] shadow-2xl z-10 no-scrollbar p-10 md:p-16">
                  <button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 p-4 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:scale-110 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all z-20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                  <div className="space-y-12">
                    <div className="space-y-6">
                      <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-8">
                        <Code2 size={36} className="text-emerald-500" />
                      </div>
                      <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-950 dark:text-white leading-tight">{project.title}</h2>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map(tech => <span key={tech} className="px-5 py-2 text-sm font-bold rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300">{tech}</span>)}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 border-y border-zinc-200 dark:border-zinc-800 py-12">
                      <div>
                        <h3 className="text-2xl font-black mb-6 text-zinc-950 dark:text-white flex items-center gap-3">
                          <Layers size={24} className="text-emerald-500" /> Overview
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-balance text-lg font-medium">{project.longDesc || project.desc}</p>
                      </div>
                      {project.features && (
                        <div>
                          <h3 className="text-2xl font-black mb-6 text-zinc-950 dark:text-white flex items-center gap-3">
                            <Sparkles size={24} className="text-emerald-500" /> Key Features
                          </h3>
                          <ul className="space-y-4">
                            {project.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-4 text-zinc-600 dark:text-zinc-400 text-lg font-medium p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800/50">
                                <CheckCircle2 size={24} className="text-emerald-500 shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-5 pt-4">
                      {project.live && (
                        <MagneticButton href={project.live} className="flex-1 py-6 px-8 rounded-2xl bg-emerald-500 text-white font-black flex items-center justify-center gap-3 text-lg hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20">
                          Visit Live Site <ExternalLink size={22} />
                        </MagneticButton>
                      )}
                      {project.github && (
                        <MagneticButton href={project.github} className="flex-1 py-6 px-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#111] font-black flex items-center justify-center gap-3 text-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                          Source Code <Github size={22} />
                        </MagneticButton>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}