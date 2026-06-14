/* eslint-disable @typescript-eslint/no-explicit-any */
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  SiHtml5,
  SiCss as SiCss3,
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiVercel,
  SiNetlify,
  SiGithubpages,
  SiGit,
  SiGithub,
  SiOpenai,
  SiReplit,
  SiGithubcopilot,
  SiAnthropic,
} from "react-icons/si";
import {
  FiMonitor,
  FiCode,
  FiMessageSquare,
  FiPhone,
  FiTrendingUp,
  FiTool,
  FiArrowDown,
  FiMail,
  FiMapPin,
  FiArrowUp,
  FiX,
  FiExternalLink,
  FiGithub,
  FiMenu,
  FiLinkedin,
  FiInstagram,
  FiFacebook,
} from "react-icons/fi";
import { FaMicrophone, FaMagic } from "react-icons/fa";
import rasheedAsset from "@/assets/rasheed.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rasheed Ahmed — Full Stack & AI Engineer" },
      {
        name: "description",
        content:
          "Personal portfolio of Rasheed Ahmed — Full Stack + AI Engineer, Designer and Freelancer based in Karachi.",
      },
      { property: "og:title", content: "Rasheed Ahmed — Portfolio" },
      {
        property: "og:description",
        content: "Full Stack + AI Engineer | Designer | Freelancer | Vibe Coder",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

/* ────────────────────────────── DATA ────────────────────────────── */

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const ROLES = [
  "Full Stack Developer",
  "AI Engineer",
  "Chatbot Developer",
  "Freelancer",
  "Vibe Coder",
];

const STATS = [
  { value: 2, suffix: "+", label: "Years of Learning Experience" },
  { value: 20, suffix: "+", label: "Technologies Used" },
  { value: 10, suffix: "+", label: "Practice Projects" },
  // { value: 10, suffix: "+", label: "Happy Clients" },
];

const TAGS = [
  "Full Stack Dev",
  "AI Solutions",
  "Voice Agents",
  "Chatbots",
  "UI/UX",
  "Automation",
  "Freelancing",
];

const EDUCATION = [
  {
    title: "BS Computer Science",
    inst: "ILMA University, Karachi",
    time: "2023 - Present",
    desc: "Software development, AI technologies, databases, networking, and modern web development. Active projects in AI automation and web apps.",
  },
  {
    title: "Intermediate in Computer Science",
    inst: "Sir Adamjee Institute",
    time: "2021 - 2023",
    desc: "Pre-engineering with a focus on computer science fundamentals.",
  },
  {
    title: "Matriculation",
    inst: "The Genesis School System",
    time: "Completed 2021",
    desc: "Science group — foundation in mathematics and computing.",
  },
  {
    title: "Agentic AI and Cloud Computing",
    inst: "Governor IT Initiative (GIAIC)",
    time: "2024 - Present",
    desc: "Focused on Agentic AI, AI-assisted development workflows, prompt engineering, automation, cloud computing, API integration, and building intelligent applications using modern AI tools and frameworks.",
  },
  {
    title: "Generative AI and Chatbot Development",
    inst: "Saylani Mass IT Training Program (SMIT)",
    time: "Completed 2024",
    desc: "Learned Generative AI concepts, prompt engineering, chatbot development, API integration, and AI-powered application development through hands-on projects and practical implementation.",
  },
  {
    title: "Web & Mobile App Development",
    inst: "Jawan Pakistan",
    time: "Completed 2023",
    desc: "Hands-on MERN stack training. Completed real-world projects across web and mobile.",
  },
];

const SKILL_CATEGORIES = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", Icon: SiCss3, color: "#1572B6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "Python", Icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    skills: [
      { name: "React.js", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", Icon: SiExpress, color: "#FFFFFF" },
      { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
    ],
  },
  {
    id: "database",
    label: "Database",
    skills: [
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    id: "deployment",
    label: "Deployment",
    skills: [
      { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
      { name: "Netlify", Icon: SiNetlify, color: "#00C7B7" },
      { name: "GitHub Pages", Icon: SiGithubpages, color: "#FFFFFF" },
    ],
  },
  {
    id: "versioncontrol",
    label: "Version Control",
    skills: [
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
    ],
  },
  {
    id: "ai",
    label: "AI & Automation",
    skills: [
      { name: "OpenAI API", Icon: SiOpenai, color: "#74AA9C" },
      { name: "OpenAI Agent SDK", Icon: SiOpenai, color: "#74AA9C" },
      { name: "Claude / Anthropic", Icon: SiAnthropic, color: "#D4A96A" },
      { name: "Retell AI", Icon: FaMicrophone, color: "#64FFDA" },
      { name: "Vapi AI", Icon: FaMicrophone, color: "#64FFDA" },
      { name: "Lovable", Icon: FaMagic, color: "#A855F7" },
      { name: "Replit", Icon: SiReplit, color: "#F26207" },
      { name: "GitHub Copilot", Icon: SiGithubcopilot, color: "#FFFFFF" },
    ],
  },
];

const SERVICES = [
  {
    Icon: FiMonitor,
    title: "Website Design",
    desc: "Modern UI/UX with premium feel and smooth interactions.",
  },
  {
    Icon: FiCode,
    title: "Web Development",
    desc: "Custom full-stack web apps built to scale and perform.",
  },
  {
    Icon: FiMessageSquare,
    title: "AI Chatbots",
    desc: "Smart AI chatbot solutions for businesses and automation.",
  },
  {
    Icon: FiPhone,
    title: "AI Call Agents",
    desc: "AI voice agents for customer support and call handling.",
  },
  {
    Icon: FiTrendingUp,
    title: "Digital Marketing",
    desc: "Growth strategies, SEO, and online presence management.",
  },
  {
    Icon: FiTool,
    title: "Bug Fixing & Maintenance",
    desc: "Speed optimization, debugging, and ongoing maintenance.",
  },
];

const PROJECTS = [
  {
    title: "Portfolio Website",
    category: "Frontend",
    grad: "from-cyan-400/40 to-indigo-500/30",
    desc: "Personal portfolio with a built with reactjs, Tailwind CSS, and Framer Motion.",
    long: "Built with React.js, Tailwind CSS, and Framer Motion. Currently working on integrating a RAG chatbot uses a vector knowledge base to answer questions about services, pricing, and projects — and collects client leads automatically.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    live: "https://rasheedahmeddev.vercel.app/",
    source: "https://github.com/irasheedahmed/rasheed-ahmed-portfolio",
  },
  {
    title: "AI Voice Call Agent",
    category: "AI Automation",
    grad: "from-violet-400/40 to-cyan-500/30",
    desc: "Live AI voice agent that handles real phone calls — answers queries, qualifies leads, and manages conversations autonomously.",
    long: "Deployed on Retell AI with a Twilio US phone number. The agent handles inbound calls, responds naturally using a custom knowledge base, and can be embedded directly into any website as a call widget.",
    tech: ["Retell AI", "Twilio", "OpenAI", "Voice AI"],
    live: "https://agent.retellai.com/orb/agent_dc60fb94e9c85841c22e23fd27?token=e1837357eda13a233373f7ef8cb96c5c",
    source:
      "https://agent.retellai.com/orb/agent_dc60fb94e9c85841c22e23fd27?token=e1837357eda13a233373f7ef8cb96c5c",
  },
  {
    title: "Furniro E-Commerce Platform",
    category: "Web Development",
    grad: "from-green-400/40 to-teal-500/30",
    desc: "Modern full-stack e-commerce with product listing, add-to-cart, and complete checkout flow.",
    long: "Full-stack furniture e-commerce store with product listings, add-to-cart, and a complete checkout flow — orders managed live via Sanity CMS dashboard. Built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS", "Sanity CMS"],
    live: "https://furniro-ecommerce-webclone.vercel.app/",
    source: "https://github.com/irasheedahmed/Furniro-Ecommerce",
  },
  {
    title: "Fuel Grill Restaurant Website",
    category: "Frontend",
    grad: "from-orange-400/40 to-red-500/30",
    desc: "Dark industrial-themed restaurant website with animated hero, scroll reveals, and live menu data pulled from Uber Eats.",
    long: "Restaurant demo website for Fuel Grill (Hamilton, ON) — dark charcoal/ember aesthetic, slide-in animated hero heading, smooth preloader, scroll-reveal sections, and a real menu with pricing sourced directly from the client's Uber Eats listing.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://restaurant-demo-website-five.vercel.app/",
    source: "https://github.com/irasheedahmed/Restaurant-Demo-Website",
  },
  {
    title: "Real Estate Website + Chatbot",
    category: "AI Automation",
    grad: "from-blue-400/40 to-cyan-400/30",
    desc: "Property listing platform with an integrated AI chatbot for instant property queries and lead capture.",
    long: "Real estate website with property listings, search filters, and an AI-powered chatbot that answers property queries, collects buyer/seller leads, and routes inquiries to agents automatically.",
    tech: ["HTML", "CSS", "JavaScript", "AI Chatbot"],
    live: "https://real-state-website-chatbot.vercel.app/",
    source: "https://github.com/irasheedahmed/RealState-Website_Chatbot",
  },
  {
    title: "Rasheed Airlines Website + Chatbot",
    category: "Frontend",
    grad: "from-sky-400/40 to-indigo-500/30",
    desc: "Airline company website with flight booking UI, photo gallery, and an integrated customer support chatbot.",
    long: "Multi-section airline website featuring flight booking interface, destination gallery, about section, and contact — with an embedded AI chatbot for handling passenger queries and booking assistance.",
    tech: ["HTML", "CSS", "JavaScript", "Chatbot"],
    live: "https://rasheedairlines-website.vercel.app/",
    source: "https://github.com/irasheedahmed/Airlines-Website",
  },
  {
    title: "Interactive Resume Builder",
    category: "Frontend",
    grad: "from-amber-400/30 to-orange-500/30",
    desc: "Dynamic resume generator — fill in your details and instantly get a formatted, downloadable PDF resume.",
    long: "Form-driven resume builder that takes user input (personal info, education, experience, skills) and generates a clean, formatted resume on the fly with a one-click PDF download.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://interactive-resumebuilder.vercel.app/",
    source: "https://github.com/irasheedahmed/Dynamic-Resume_Builder",
  },
  {
    title: "Next.js Developer Portfolio",
    category: "Frontend",
    grad: "from-cyan-400/40 to-purple-500/30",
    desc: "Previous portfolio version built with Next.js — showcasing projects, skills, and a contact section.",
    long: "Clean developer portfolio built with Next.js, featuring projects showcase, skills section, and contact form. Deployed on Vercel with fast static generation.",
    tech: ["Next.js", "Tailwind CSS"],
    live: "https://rasheed-next-js-portfolio.vercel.app/",
    source: "https://github.com/irasheedahmed/NextJs-Portfolio",
  },
  {
    title: "TechFlux Blog",
    category: "Frontend",
    grad: "from-teal-400/30 to-blue-500/30",
    desc: "Responsive tech blog website covering JavaScript, AI, cybersecurity, cloud computing, and software engineering.",
    long: "Multi-page tech blog with dedicated articles on JavaScript, AI, cybersecurity, cloud computing, and software engineering. Features newsletter subscription, animated loader, and a clean responsive layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://tech-flux-blogs.vercel.app/",
    source: "https://github.com/irasheedahmed/TechFlux",
  },
];

const PROJECT_FILTERS = ["All", "AI Automation", "Web Development", "Frontend"];

/* ───────────────────────── HELPERS / HOOKS ───────────────────────── */

function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative scroll-mt-24 py-24 md:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-6">{children}</div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={stagger}
      className="mb-14 text-center"
    >
      <motion.p
        variants={fadeUp}
        className="mb-3 font-mono text-sm tracking-widest text-[var(--cyan)]"
      >
        {eyebrow}
      </motion.p>
      <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl">
        {title}
      </motion.h2>
      {sub && (
        <motion.p variants={fadeUp} className="mt-3 text-[var(--text-muted)]">
          {sub}
        </motion.p>
      )}
    </motion.div>
  );
}

/* ──────────────────────────── PRELOADER ──────────────────────────── */

function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const start = Date.now();
    const total = 1500;
    const i = setInterval(() => {
      const p = Math.min(100, ((Date.now() - start) / total) * 100);
      setProgress(p);
      if (p >= 100) {
        clearInterval(i);
        setTimeout(onDone, 250);
      }
    }, 30);
    return () => clearInterval(i);
  }, [onDone]);
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-[var(--bg-primary)]"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-8">
        <div className="relative grid h-32 w-32 place-items-center">
          <div className="absolute inset-0 rounded-full border-2 border-[var(--cyan)]/30 border-t-[var(--cyan)] animate-spin-slow" />
          <div className="absolute inset-2 rounded-full bg-[var(--cyan)]/5 animate-pulse-glow" />
          <span className="gradient-text font-display text-4xl font-extrabold">RA</span>
        </div>
        <div className="w-56">
          <div className="mb-2 flex justify-between font-mono text-xs text-[var(--text-muted)]">
            <span>Loading</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-[2px] w-full overflow-hidden rounded bg-[var(--border)]">
            <div
              className="h-full bg-[var(--cyan)]"
              style={{ width: `${progress}%`, boxShadow: "0 0 12px rgba(100,255,218,0.6)" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ────────────────────────────── HEADER ────────────────────────────── */

function Header({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`}
      style={{
        background: scrolled ? "rgba(10,25,47,0.75)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(100,255,218,0.1)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <button
          onClick={() => scrollTo("home")}
          className="glow-text font-display text-2xl font-extrabold"
        >
          RA<span className="text-[var(--cyan-dim)]">.</span>
        </button>
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className={`relative px-4 py-2 text-sm transition-colors ${active === n.id ? "text-[var(--cyan)]" : "text-[var(--text-secondary)] hover:text-white"}`}
            >
              {n.label}
              {active === n.id && (
                <motion.span
                  layoutId="navInd"
                  className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded bg-[var(--cyan)]"
                  style={{ boxShadow: "0 0 8px rgba(100,255,218,0.7)" }}
                />
              )}
            </button>
          ))}
        </nav>
        <div className="hidden lg:block">
          <CTAButton>
            <a
              href="https://calendly.com/business-rasheedahmed/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Call
            </a>
          </CTAButton>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="grid h-10 w-10 place-items-center rounded-md border border-[var(--border)] text-[var(--cyan)] lg:hidden"
          aria-label="Open menu"
        >
          <FiMenu size={20} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="glass-card fixed right-0 top-0 z-50 h-full w-72 rounded-none border-l border-[var(--cyan)]/20 p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="glow-text font-display text-xl font-bold">RA.</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="text-[var(--text-secondary)]"
                >
                  <FiX size={22} />
                </button>
              </div>
              <nav className="flex flex-col gap-2">
                {NAV.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => {
                      scrollTo(n.id);
                      setOpen(false);
                    }}
                    className={`rounded-lg px-3 py-2 text-left ${active === n.id ? "bg-[var(--cyan)]/10 text-[var(--cyan)]" : "text-[var(--text-secondary)]"}`}
                  >
                    {n.label}
                  </button>
                ))}
                <div className="mt-4">
                  <CTAButton
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <a
                      href="https://calendly.com/business-rasheedahmed/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book a Call
                    </a>
                  </CTAButton>
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

function CTAButton({
  children,
  onClick,
  filled = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  filled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`group inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
        filled
          ? "bg-[var(--cyan)] text-[var(--bg-primary)] hover:shadow-[0_0_30px_rgba(100,255,218,0.45)]"
          : "border border-[var(--cyan)] text-[var(--cyan)] hover:bg-[var(--cyan)] hover:text-[var(--bg-primary)]"
      }`}
    >
      {children}
    </button>
  );
}

/* ────────────────────────────── HERO ────────────────────────────── */

function TypeCycle({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i];
    const speed = del ? 50 : 90;
    const t = setTimeout(() => {
      if (!del) {
        const next = w.slice(0, text.length + 1);
        setText(next);
        if (next === w) setTimeout(() => setDel(true), 1300);
      } else {
        const next = w.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI((i + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return (
    <span className="font-mono text-[var(--cyan)]">
      {text}
      <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-0.5 animate-pulse bg-[var(--cyan)]" />
    </span>
  );
}

function FloatingIcon({
  Icon,
  className,
  color,
  delay = 0,
}: {
  Icon: any;
  className: string;
  color: string;
  delay?: number;
}) {
  return (
    <div
      className={`absolute grid h-12 w-12 place-items-center rounded-xl border border-[var(--cyan)]/20 bg-[var(--bg-card)]/80 backdrop-blur ${className} animate-floaty`}
      style={{ animationDelay: `${delay}s`, boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}
    >
      <Icon size={22} color={color} />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="pointer-events-none absolute -top-32 left-1/4 h-[500px] w-[500px] radial-cyan opacity-60" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] radial-cyan opacity-40" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fadeUp} className="mb-4 font-mono text-sm text-[var(--text-muted)]">
            Hi, I'm
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
            <span className="gradient-text">Rasheed Ahmed</span>
          </motion.h1>
          <motion.div
            variants={fadeUp}
            className="mt-4 text-xl md:text-2xl text-[var(--text-secondary)]"
          >
            I'm a <TypeCycle words={ROLES} />
          </motion.div>
          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-[var(--text-muted)]">
            Building modern web apps, AI voice agents, chatbots, and automation systems that help
            businesses work smarter.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <CTAButton filled onClick={() => scrollTo("projects")}>
              View Projects
            </CTAButton>
            <CTAButton>
              <a href="/Rasheed_Ahmed_Resume.pdf" download>
                Download Resume
              </a>
            </CTAButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto aspect-square w-[280px] sm:w-[360px] lg:w-[440px]"
        >
          <div className="absolute inset-0 rounded-full radial-cyan blur-2xl" />
          <div className="absolute inset-2 animate-pulse-glow rounded-full" />
          <div className="absolute inset-0 rounded-full border-2 border-[var(--cyan)]/40 animate-spin-slow" />
          <div
            className="absolute inset-4 overflow-hidden rounded-full border-2 border-[var(--cyan)]/60"
            style={{
              boxShadow: "0 0 80px rgba(100,255,218,0.25), inset 0 0 40px rgba(100,255,218,0.15)",
            }}
          >
            <img
              src={rasheedAsset}
              alt="Rasheed Ahmed — Full Stack and AI Engineer"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <FloatingIcon Icon={SiReact} color="#61DAFB" className="-left-4 top-10" />
          <FloatingIcon Icon={SiNodedotjs} color="#3AB89A" className="-right-2 top-24" delay={1} />
          <FloatingIcon Icon={SiOpenai} color="#64FFDA" className="-left-2 bottom-16" delay={2} />
          <FloatingIcon
            Icon={SiNextdotjs}
            color="#FFFFFF"
            className="-right-4 bottom-6"
            delay={1.5}
          />
        </motion.div>
      </div>

      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--cyan)] animate-bounce-arrow"
        aria-label="Scroll down"
      >
        <FiArrowDown size={26} />
      </button>
    </section>
  );
}

/* ────────────────────────────── ABOUT ────────────────────────────── */

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            const start = Date.now();
            const dur = 1400;
            const tick = () => {
              const p = Math.min(1, (Date.now() - start) / dur);
              setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
              if (p < 1) requestAnimationFrame(tick);
            };
            tick();
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {v}
      {suffix}
    </span>
  );
}

function About() {
  return (
    <Section id="about">
      <SectionHeader eyebrow="01 — About" title="A bit about me" />
      <div className="grid gap-10 lg:grid-cols-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="lg:col-span-3 space-y-5"
        >
          <motion.p
            variants={fadeUp}
            className="text-lg leading-relaxed text-[var(--text-secondary)]"
          >
            I'm <span className="text-[var(--cyan)]">Rasheed Ahmed</span> — a Full Stack and AI
            Engineer based in Karachi, Pakistan. I build modern web applications and AI-powered
            solutions including voice agents, chatbots, and automation systems. Currently pursuing a
            BSCS at ILMA University.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[var(--text-muted)] leading-relaxed">
            I focus on clean code, great UX, and practical AI integration that helps businesses run
            more efficiently. I work with clients locally in Pakistan and internationally — mostly
            Canada and the US.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-2">
            {TAGS.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[var(--cyan)]/30 px-3 py-1 text-xs text-[var(--cyan)]"
              >
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="lg:col-span-2 grid grid-cols-2 gap-4"
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="glass-card glow-border relative overflow-hidden p-5"
            >
              <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--cyan)] to-transparent" />
              <div className="gradient-text font-display text-3xl font-extrabold">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs text-[var(--text-muted)]">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

/* ──────────────────────────── EDUCATION ──────────────────────────── */

function Education() {
  return (
    <Section id="education">
      <SectionHeader eyebrow="02 — Education" title="My academic journey" />
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-0 h-full w-[2px] bg-[var(--cyan)]/20 md:left-1/2 md:-translate-x-1/2" />
        <div className="space-y-10">
          {EDUCATION.map((e, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative flex items-start gap-6 md:gap-0 ${left ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="absolute left-4 top-3 z-10 grid h-4 w-4 -translate-x-1/2 place-items-center md:left-1/2">
                  <span
                    className="absolute h-4 w-4 rounded-full bg-[var(--cyan)]"
                    style={{
                      boxShadow: "0 0 0 4px rgba(100,255,218,0.15), 0 0 20px rgba(100,255,218,0.6)",
                    }}
                  />
                </div>
                <div className={`hidden md:block md:w-1/2 ${left ? "md:pr-12" : "md:pl-12"}`} />
                <div
                  className={`glass-card glow-border ml-12 w-full p-6 md:ml-0 md:w-1/2 ${left ? "md:mr-0 md:pl-12 md:ml-0" : "md:pr-12"} ${left ? "md:rounded-l-2xl" : "md:rounded-r-2xl"}`}
                  style={{ marginLeft: undefined }}
                >
                  <div className="mb-1 font-mono text-xs text-[var(--cyan)]">{e.time}</div>
                  <h3 className="text-lg">{e.title}</h3>
                  <div className="text-sm text-[var(--text-secondary)]">{e.inst}</div>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">{e.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* ────────────────────────────── SKILLS ────────────────────────────── */

function Skills() {
  const [tab, setTab] = useState("all");
  const tabs = useMemo(
    () => [
      { id: "all", label: "All" },
      ...SKILL_CATEGORIES.map((c) => ({ id: c.id, label: c.label })),
    ],
    [],
  );
  const skills = useMemo(() => {
    if (tab === "all") return SKILL_CATEGORIES.flatMap((c) => c.skills);
    return SKILL_CATEGORIES.find((c) => c.id === tab)?.skills ?? [];
  }, [tab]);
  return (
    <Section id="skills">
      <SectionHeader eyebrow="03 — Skills" title="Skills & Tools" sub="Technologies I work with" />
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-all ${
              tab === t.id
                ? "border-transparent bg-[var(--cyan)] text-[var(--bg-primary)] shadow-[0_0_20px_rgba(100,255,218,0.35)]"
                : "border-[var(--cyan)]/30 text-[var(--cyan)] hover:bg-[var(--cyan)]/10"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {skills.map((s) => (
            <motion.div
              key={s.name}
              whileHover={{ y: -6 }}
              className="glass-card glow-border flex flex-col items-center gap-3 p-5"
            >
              <s.Icon size={36} color={s.color} />
              <div className="text-sm text-[var(--text-secondary)]">{s.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}

/* ──────────────────────────── SERVICES ──────────────────────────── */

function TiltCard({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-50, 50], [8, -8]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-50, 50], [-8, 8]), { stiffness: 200, damping: 20 });
  return (
    <motion.div
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        x.set(e.clientX - r.left - r.width / 2);
        y.set(e.clientY - r.top - r.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 800 }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

function Services() {
  return (
    <Section id="services">
      <SectionHeader
        eyebrow="04 — Services"
        title="What I do"
        sub="Services tailored for modern businesses"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {SERVICES.map((s) => (
          <motion.div key={s.title} variants={fadeUp}>
            <TiltCard>
              <div className="glass-card group relative h-full overflow-hidden p-7 transition-all hover:border-[var(--cyan)]/40">
                <div
                  className="mb-5 grid h-14 w-14 place-items-center rounded-xl bg-[var(--cyan)]/10 text-[var(--cyan)]"
                  style={{ boxShadow: "0 0 30px rgba(100,255,218,0.15)" }}
                >
                  <s.Icon size={24} />
                </div>
                <h3 className="text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">{s.desc}</p>
                <span className="absolute inset-x-7 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[var(--cyan)] to-[var(--cyan-dim)] transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

/* ──────────────────────────── PROJECTS ──────────────────────────── */

function Projects() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<number | null>(null);
  const list = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="05 — Projects"
        title="Selected work"
        sub="A few projects I'm proud of"
      />
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {PROJECT_FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-all ${
              filter === f
                ? "border-transparent bg-[var(--cyan)] text-[var(--bg-primary)]"
                : "border-[var(--cyan)]/30 text-[var(--cyan)] hover:bg-[var(--cyan)]/10"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {list.map((p, idx) => (
            <motion.button
              key={p.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              whileHover={{ y: -6 }}
              onClick={() => setOpen(PROJECTS.indexOf(p))}
              className="glass-card glow-border group overflow-hidden text-left"
            >
              <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${p.grad}`}>
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="font-display text-6xl font-extrabold text-white/10 transition-transform duration-500 group-hover:scale-110">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] to-transparent" />
              </div>
              <div className="p-5">
                <span className="inline-block rounded-full border border-[var(--cyan)]/30 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-[var(--cyan)]">
                  {p.category}
                </span>
                <h3 className="mt-3 text-lg">{p.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-[var(--text-muted)]">{p.desc}</p>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-black/70 p-4 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card relative w-full max-w-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/40 text-white hover:bg-[var(--cyan)] hover:text-[var(--bg-primary)]"
              >
                <FiX size={18} />
              </button>
              <div className={`h-48 bg-gradient-to-br ${PROJECTS[open].grad}`}>
                <div className="h-full w-full grid-bg opacity-40" />
              </div>
              <div className="p-7">
                <span className="text-xs uppercase tracking-wider text-[var(--cyan)]">
                  {PROJECTS[open].category}
                </span>
                <h3 className="mt-2 text-2xl">{PROJECTS[open].title}</h3>
                <p className="mt-3 text-[var(--text-secondary)]">{PROJECTS[open].long}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {PROJECTS[open].tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-[var(--border)] bg-[var(--bg-surface)] px-2.5 py-1 font-mono text-xs text-[var(--text-secondary)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={PROJECTS[open].live}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-md bg-[var(--cyan)] px-4 py-2 text-sm font-medium text-[var(--bg-primary)] hover:shadow-[0_0_24px_rgba(100,255,218,0.5)]"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                  <a
                    href={PROJECTS[open].source}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-md border border-[var(--cyan)] px-4 py-2 text-sm text-[var(--cyan)] hover:bg-[var(--cyan)] hover:text-[var(--bg-primary)]"
                  >
                    <FiGithub /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

/* ────────────────────────────── CONTACT ────────────────────────────── */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FloatInput({ label, type = "text", as = "input", value, onChange, name }: any) {
  const [focus, setFocus] = useState(false);
  const has = focus || (value && value.length > 0);
  const C: any = as;
  return (
    <label className="relative block">
      <span
        className={`pointer-events-none absolute left-3 z-10 px-1 font-mono text-xs transition-all
        ${has ? "-top-2 bg-[var(--bg-card)] text-[var(--cyan)]" : "top-3 text-[var(--text-muted)]"}`}
      >
        {label}
      </span>
      <C
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        rows={as === "textarea" ? 5 : undefined}
        className="w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--bg-surface)]/60 px-3 py-3 text-sm text-white outline-none transition-colors focus:border-[var(--cyan)]"
      />
    </label>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [state, setState] = useState<"idle" | "loading" | "sent">("idle");
  const change = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    setTimeout(() => {
      setState("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setState("idle"), 2500);
    }, 1100);
  };
  const socials = [
    { Icon: FiGithub, href: "https://github.com/irasheedahmed" },
    { Icon: FiLinkedin, href: "https://www.linkedin.com/in/rasheed-kashif495/" },
    { Icon: FiInstagram, href: "https://www.instagram.com/rasheedahmed.dev/" },
    { Icon: FiFacebook, href: "https://www.facebook.com/rasheedahmed495" },
  ];
  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="06 — Contact"
        title="Get In Touch"
        sub="Have a project in mind or want to collaborate? I'd love to hear from you."
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass-card space-y-6 p-7"
        >
          <div>
            <h3 className="text-xl">Let's build something great.</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Available for freelance projects, AI integrations and full-stack builds.
            </p>
          </div>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--cyan)]/30 text-[var(--cyan)]">
                <FiMail />
              </span>
              <a
                href="mailto:rasheedahmed4845@gmail.com"
                className="text-[var(--text-secondary)] hover:text-[var(--cyan)]"
              >
                rasheedahmed4845@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--cyan)]/30 text-[var(--cyan)]">
                <FiPhone />
              </span>
              <a
                href="tel:+923351323557"
                className="text-[var(--text-secondary)] hover:text-[var(--cyan)]"
              >
                +92 335 132 3557
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--cyan)]/30 text-[var(--cyan)]">
                <FiMapPin />
              </span>
              <span className="text-[var(--text-secondary)]">Karachi, Pakistan</span>
            </li>
          </ul>
          <div className="flex gap-3 pt-2">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                aria-label="social link"
                className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] text-[var(--text-secondary)] transition-all hover:border-[var(--cyan)] hover:text-[var(--cyan)] hover:shadow-[0_0_20px_rgba(100,255,218,0.3)]"
                target="_blank"
              >
                <s.Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass-card space-y-5 p-7"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <FloatInput label="Name" name="name" value={form.name} onChange={change} />
            <FloatInput
              label="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={change}
            />
          </div>
          <FloatInput label="Subject" name="subject" value={form.subject} onChange={change} />
          <FloatInput
            label="Message"
            as="textarea"
            name="message"
            value={form.message}
            onChange={change}
          />
          <button
            type="submit"
            disabled={state === "loading"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--cyan)] px-6 py-3 text-sm font-semibold text-[var(--bg-primary)] transition-all hover:shadow-[0_0_24px_rgba(100,255,218,0.5)] disabled:opacity-70 sm:w-auto"
          >
            {state === "loading" && (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-[var(--bg-primary)] border-t-transparent" />
            )}
            {state === "idle" && "Send Message"}
            {state === "loading" && "Sending..."}
            {state === "sent" && "Message Sent ✓"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

/* ────────────────────────────── FOOTER ────────────────────────────── */

function Footer() {
  const socials = [
    { Icon: FiGithub, href: "https://github.com/irasheedahmed" },
    { Icon: FiLinkedin, href: "https://www.linkedin.com/in/rasheed-kashif495/" },
    { Icon: FiFacebook, href: "https://www.instagram.com/rasheedahmed.dev/" },
    { Icon: FiFacebook, href: "https://www.facebook.com/rasheedahmed495" },
  ];
  return (
    <footer className="relative border-t border-[var(--cyan)]/10 bg-[var(--bg-surface)]/40 pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-10 md:grid-cols-3">
        <div>
          <div className="glow-text font-display text-2xl font-extrabold">RA.</div>
          <p className="mt-3 max-w-xs text-sm text-[var(--text-muted)]">
            Full Stack + AI Engineer crafting modern web and intelligent automation.
          </p>
        </div>
        <div>
          <div className="mb-3 text-sm uppercase tracking-wider text-[var(--cyan)]">
            Quick Links
          </div>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {NAV.map((n) => (
              <li key={n.id}>
                <button
                  onClick={() => scrollTo(n.id)}
                  className="text-[var(--text-secondary)] hover:text-[var(--cyan)]"
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mb-3 text-sm uppercase tracking-wider text-[var(--cyan)]">Connect</div>
          <div className="flex gap-3">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                aria-label="social link"
                className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--cyan)] hover:text-[var(--cyan)]"
                target="_blank"
              >
                <s.Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--cyan)]/10 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 text-xs text-[var(--text-muted)] sm:flex-row">
          <span>© 2026 Rasheed Ahmed. All Rights Reserved.</span>
          <span>
            Built with React & <span className="text-[var(--cyan)]">♥</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-[var(--cyan)] text-[var(--bg-primary)] shadow-[0_0_24px_rgba(100,255,218,0.5)]"
        >
          <FiArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ────────────────────────────── PAGE ────────────────────────────── */

function Portfolio() {
  const [loaded, setLoaded] = useState(false);
  const active = useScrollSpy(NAV.map((n) => n.id));
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <AnimatePresence>{!loaded && <Preloader onDone={() => setLoaded(true)} />}</AnimatePresence>
      <Header active={active} />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
