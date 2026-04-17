/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Layout, 
  Database, 
  Terminal, 
  Briefcase, 
  GraduationCap, 
  ChevronRight,
  User,
  Cpu
} from "lucide-react";
import React, { useRef } from "react";

const Section = ({ children, id, className = "" }: { children: React.ReactNode, id: string, className?: string }) => (
  <section id={id} className={`py-24 px-6 md:px-12 lg:px-24 scroll-mt-20 ${className}`}>
    {children}
  </section>
);

const SectionTitle = ({ children, number }: { children: React.ReactNode, number: string }) => (
  <div className="flex items-baseline gap-4 mb-16 overflow-hidden">
    <span className="font-mono text-brand text-sm md:text-base font-bold tracking-widest">{number}</span>
    <motion.h2 
      initial={{ y: "100%" }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="text-4xl md:text-5xl lg:text-6xl font-display uppercase leading-none"
    >
      {children}
    </motion.h2>
  </div>
);

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  return (
    <div ref={containerRef} className="min-h-screen selection:bg-brand selection:text-surface overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand/5 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center glass">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-display text-xl tracking-tighter"
        >
          VP<span className="text-brand">.</span>
        </motion.div>
        
        <div className="hidden md:flex gap-8 items-center font-mono text-[10px] uppercase tracking-widest text-white/60">
          <a href="#about" className="hover:text-brand transition-colors">About</a>
          <a href="#experience" className="hover:text-brand transition-colors">Experience</a>
          <a href="#projects" className="hover:text-brand transition-colors">Projects</a>
          <a href="#skills" className="hover:text-brand transition-colors">Skills</a>
          <a href="#contact" className="hover:text-brand transition-colors">Contact</a>
        </div>

        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white/60 hover:text-brand transition-colors">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/60 hover:text-brand transition-colors">
            <Linkedin size={18} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        style={{ opacity, scale }}
        className="h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 bg-surface relative z-10"
      >
        <div className="space-y-2">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-mono text-brand text-xs md:text-sm uppercase tracking-[0.3em]"
          >
            Digital Artisan & Full Stack Dev
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[18vw] leading-[0.8] font-display uppercase -translate-x-[0.05em] select-none"
          >
            Varshik<br />Pal
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-6 md:left-12 lg:left-24 flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest"
        >
          <div className="w-12 h-px bg-white" />
          Scroll to explore
        </motion.div>
      </motion.section>

      {/* About Section */}
      <Section id="about">
        <SectionTitle number="01">Objective</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-light text-white/80 leading-relaxed max-w-2xl"
          >
            Full Stack Developer with a strong foundation in <span className="text-brand italic">HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB.</span>
            <br /><br />
            Passionate about building responsive frontend applications, developing RESTful APIs, and crafting clean, scalable code for complex web ecosystems.
          </motion.div>
          
          <div className="space-y-12">
            <div className="flex items-start gap-6">
              <div className="p-4 glass rounded-2xl shrink-0">
                <GraduationCap className="text-brand" size={32} />
              </div>
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-brand mb-2">Education</h3>
                <p className="text-lg font-medium">BTech - Computer Science & Engineering</p>
                <p className="text-sm text-white/60">HMRITM (Guru Gobind Singh Indraprastha University)</p>
                <p className="text-xs text-white/40 mt-1">2022 — 2026 | Hamidpur, Delhi</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="p-4 glass rounded-2xl shrink-0">
                <User className="text-brand" size={32} />
              </div>
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-brand mb-2">Current Status</h3>
                <p className="text-lg font-medium">Seeking Entry-Level Opportunities</p>
                <p className="text-sm text-white/60">Available for Full-Stack / MERN development roles.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" className="bg-white/2">
        <SectionTitle number="02">Experience</SectionTitle>
        <div className="max-w-4xl space-y-16">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative pl-8 md:pl-16 border-l border-white/10 group"
          >
            <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-brand rounded-full group-hover:scale-150 transition-transform" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight">Future Invo Solutions</h3>
                <p className="text-brand font-mono text-xs uppercase tracking-widest mt-1">Frontend Developer Intern</p>
              </div>
              <p className="text-xs font-mono uppercase text-white/40 mt-2 md:mt-0">March 2026 — Present</p>
            </div>
            
            <ul className="space-y-4 text-white/60 text-sm md:text-base leading-relaxed">
              <li className="flex items-start gap-2">
                <ChevronRight size={16} className="text-brand mt-1 shrink-0" />
                <span>Developed the "Image Tool" from scratch, focusing on complex frontend logic and seamless API integration.</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight size={16} className="text-brand mt-1 shrink-0" />
                <span>Implemented RESTful API integrations via Axios to handle dynamic image processing tasks.</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight size={16} className="text-brand mt-1 shrink-0" />
                <span>Collaborated with the backend team to resolve cross-origin (CORS) and server-side integration issues.</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight size={16} className="text-brand mt-1 shrink-0" />
                <span>Maintained technical documentation and architectural breakdowns for project modules.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <SectionTitle number="03">Projects</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Project 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="group"
          >
            <div className="aspect-[16/10] overflow-hidden rounded-3xl relative glass mb-8">
              <img 
                src="https://picsum.photos/seed/jobportal/1200/800"
                alt="Job Portal"
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent hidden group-hover:flex items-center justify-center gap-4">
                <a href="#" className="p-4 glass rounded-full hover:bg-brand hover:text-surface transition-all">
                  <Github size={24} />
                </a>
                <a href="#" className="p-4 glass rounded-full hover:bg-brand hover:text-surface transition-all">
                  <ExternalLink size={24} />
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-display uppercase tracking-tight">Job Portal Application</h3>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
                Built a full-featured job portal leveraging React with Redux Toolkit for state management and Tailwind CSS for responsive design. Features include user authentication, job search/filtering, and company profiles.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['React', 'Redux Toolkit', 'Node.js', 'Express', 'Tailwind CSS'].map(tag => (
                  <span key={tag} className="text-[9px] font-mono uppercase tracking-widest px-2 py-1 rounded bg-white/5 text-white/40 border border-white/5 italic">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="group"
          >
            <div className="aspect-[16/10] overflow-hidden rounded-3xl relative glass mb-8">
              <img 
                src="https://picsum.photos/seed/bookstore/1200/800"
                alt="Book Store"
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent hidden group-hover:flex items-center justify-center gap-4">
                <a href="#" className="p-4 glass rounded-full hover:bg-brand hover:text-surface transition-all">
                  <Github size={24} />
                </a>
                <a href="#" className="p-4 glass rounded-full hover:bg-brand hover:text-surface transition-all">
                  <ExternalLink size={24} />
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-display uppercase tracking-tight">The Book Store</h3>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
                Modular React application with persistent login sessions via Context API. Developed using the MERN stack for fast performance and optimized API interactions with debounced search functionality.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['MERN Stack', 'DaisyUI', 'Vite', 'REST API'].map(tag => (
                  <span key={tag} className="text-[9px] font-mono uppercase tracking-widest px-2 py-1 rounded bg-white/5 text-white/40 border border-white/5 italic">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="bg-brand/5">
        <SectionTitle number="04">Skills</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {[
            { icon: Layout, title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React.js", "JSX", "Hooks"] },
            { icon: Cpu, title: "Styling UI", items: ["Tailwind CSS", "Flexbox", "CSS Grid", "Responsive Design"] },
            { icon: Terminal, title: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
            { icon: Database, title: "Database", items: ["MongoDB"] },
            { icon: Code2, title: "Tools", items: ["Git", "GitHub", "VS Code"] },
            { icon: Briefcase, title: "Core CS", items: ["SDLC", "Client-Server Architecture", "API Integration"] },
          ].map((skill, i) => (
            <motion.div 
              key={skill.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass rounded-[2rem] hover:border-brand/40 transition-colors"
            >
              <skill.icon className="text-brand mb-6" size={24} />
              <h3 className="text-lg font-bold mb-4 uppercase tracking-tighter">{skill.title}</h3>
              <ul className="space-y-2">
                {skill.items.map(item => (
                  <li key={item} className="text-xs font-mono uppercase tracking-widest text-white/40 italic flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand/20" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="relative pb-48">
        <SectionTitle number="05">Contact</SectionTitle>
        <div className="flex flex-col items-center text-center space-y-12">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display uppercase leading-tight"
          >
            Let's build <br /> <span className="text-brand">Something</span> great.
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="mailto:palvarshik@gmail.com" 
              className="px-12 py-6 glass rounded-full font-mono text-xs uppercase tracking-[0.2em] hover:bg-brand hover:text-surface transition-all flex items-center gap-3 group"
            >
              <Mail size={16} /> 
              palvarshik@gmail.com
            </a>
            <a 
              href="tel:+917701871293" 
              className="px-12 py-6 glass rounded-full font-mono text-xs uppercase tracking-[0.2em] hover:bg-brand hover:text-surface transition-all flex items-center gap-3 group"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-8 mt-12 overflow-hidden">
            <a href="https://github.com" className="hover:text-brand transition-colors flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest">
              <Github size={14} /> Github
            </a>
            <a href="https://linkedin.com" className="hover:text-brand transition-colors flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest">
              <Linkedin size={14} /> Linkedin
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-12 left-0 w-full px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-mono text-white/20 uppercase tracking-[0.3em]">
          <p>© 2026 Varshik Pal</p>
          <p>Handcrafted using React & Tailwind</p>
          <p>Delhi, India</p>
        </footer>
      </Section>
    </div>
  );
}
