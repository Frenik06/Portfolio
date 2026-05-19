import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Cpu,
  Network,
  Code,
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  ChevronRight,
  User,
  Layout,
  ShoppingCart,
  Monitor
} from 'lucide-react';

const Navbar = () => (
  <nav className="nav-blur">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
        FM.
      </span>
      <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
        <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
        <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
        <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
        <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
        <a href="#education" className="hover:text-indigo-400 transition-colors">Education</a>
      </div>
      {/* <a
        href="mailto:frenikmangukiya321@gmail.com"
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-lg transition-all shadow-lg shadow-indigo-500/20"
      >
        Hire Me
      </a> */}
    </div>
  </nav>
);

const Hero = () => (
  <section id="about" className="section-container min-h-[calc(100vh-64px)] flex flex-col justify-center items-center text-center relative overflow-hidden">
    {/* Background Glows */}
    <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-600/10 blur-[120px] rounded-full animate-pulse-slow"></div>
    <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-cyan-600/10 blur-[120px] rounded-full animate-pulse-slow"></div>

    <div className="animate-fade-in-up space-y-6 max-w-3xl z-10">
      {/* <div className="inline-block px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 text-sm font-mono mb-4">
        Available for Internships 2024-25
      </div> */}
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
        Frenik <span className="accent-gradient">Mangukiya</span>
      </h1>
      <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
        Information Technology Engineering Student @ L.D. College Of Engineering
        <span className="block mt-2 text-indigo-400">(Batch 2023-27 • Current CPI: 7.71)</span>
      </p>
      <p className="text-slate-300 max-w-2xl mx-auto">
        Passionate about crafting compelling digital experiences, full-stack web applications, and robust database management systems.
      </p>

      <div className="flex flex-wrap justify-center gap-4 pt-8">
        <a href="https://github.com/Frenik06" target="_blank" rel="noopener noreferrer" className="glass-card flex items-center gap-2 py-3 px-6 hover:scale-[1.05] group">
          <Github size={20} className="group-hover:text-indigo-400 transition-colors" />
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/frenik-mangukiya-7a3b01399/" target="_blank" rel="noopener noreferrer" className="glass-card flex items-center gap-2 py-3 px-6 hover:scale-[1.05] group">
          <Linkedin size={20} className="group-hover:text-cyan-400 transition-colors" />
          <span>LinkedIn</span>
        </a>
        <a href="mailto:frenikmangukiya321@gmail.com" className="glass-card flex items-center gap-2 py-3 px-6 hover:scale-[1.05] group border-indigo-500/30">
          <Mail size={20} className="text-indigo-400" />
          <span>Email Me</span>
        </a>
      </div>
    </div>
  </section>
);

const Skills = () => {
  const skillGroups = [
    {
      title: "Languages",
      icon: <Code size={20} />,
      skills: ["C", "C++", "HTML", "CSS", "JavaScript", "SQL"]
    },
    {
      title: "Tools & Libraries",
      icon: <Cpu size={20} />,
      skills: ["ReactJS", "Tailwind CSS", "SQL Workbench", "GitHub"]
    },
    {
      title: "Areas of Interest",
      icon: <Layout size={20} />,
      skills: ["AI (Artificial Intelligence)", "CN (Computer Networks)", "Coding"]
    }
  ];

  return (
    <section id="skills" className="section-container bg-slate-850/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-indigo-400">Toolkit</span></h2>
        <div className="w-20 h-1.5 bg-indigo-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skillGroups.map((group, idx) => (
          <div key={idx} className="glass-card group hover:scale-[1.02]">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
              {group.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, sIdx) => (
                <span key={sIdx} className="badge badge-primary">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Experience = () => (
  <section id="experience" className="section-container">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional <span className="text-cyan-400">Journey</span></h2>
      <div className="w-20 h-1.5 bg-cyan-500 mx-auto rounded-full"></div>
    </div>

    <div className="max-w-4xl mx-auto">
      <div className="relative pl-8 border-l-2 border-slate-700 space-y-12">
        <div className="relative">
          {/* Timeline Dot */}
          <div className="absolute -left-[41px] top-0 w-5 h-5 bg-cyan-500 rounded-full border-4 border-slate-900 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>

          <div className="glass-card glow-hover">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <h3 className="text-2xl font-bold text-white">Software Engineering Intern</h3>
              <span className="badge badge-cyan flex items-center gap-1">
                <Calendar size={14} /> May 2026 (2 Weeks)
              </span>
            </div>
            <div className="flex items-center gap-2 text-cyan-400 mb-6 font-semibold uppercase tracking-wider text-sm">
              <Briefcase size={16} /> Bigscal Technologies
            </div>

            <ul className="space-y-4 text-slate-300">
              <li className="flex gap-3">
                <ChevronRight className="text-cyan-500 shrink-0 mt-1" size={18} />
                <p>Improved JavaScript problem-solving, data logic, and algorithmic quizzes to build high-performance web solutions.</p>
              </li>
              <li className="flex gap-3">
                <ChevronRight className="text-cyan-500 shrink-0 mt-1" size={18} />
                <p>Focused on SQL infrastructure optimization, database design execution, and direct data manipulation on production-level company products.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Projects = () => {
  const projectList = [
    {
      title: "Job Portal",
      desc: "Full-stack web application featuring separate login portals for Job Seekers and Recruiters. Includes custom dashboards, automated appointment/interview managers, and dynamic job listing tables.",
      tags: ["React", "PHP", "SQL", "Tailwind"],
      link: "https://github.com/Frenik06/online-job-portal",
      icon: <Monitor size={24} />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "E-commerce Website",
      desc: "User-centric frontend shopping platform focusing on fluid navigation, responsive cart views, product filtering interfaces, and seamless multi-device scaling.",
      tags: ["React", "Tailwind CSS", "Redux"],
      link: "https://github.com/Frenik06/E-commerce",
      icon: <ShoppingCart size={24} />,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Portfolio Website",
      desc: "Highly performant, dynamic single-page application built using React and Tailwind CSS to showcase design sensibilities and optimal asset loading.",
      tags: ["React", "Tailwind", "Framer Motion"],
      link: "https://github.com/Frenik06/Portfolio",
      icon: <User size={24} />,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section id="projects" className="section-container bg-slate-850/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-indigo-400">Projects</span></h2>
        <div className="w-20 h-1.5 bg-indigo-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, idx) => (
          <div key={idx} className="glass-card group flex flex-col hover:scale-[1.02] hover:-translate-y-2">
            <div className={`w-full h-48 rounded-xl bg-gradient-to-br ${project.color} mb-6 flex items-center justify-center text-white/90 relative overflow-hidden`}>
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
              {project.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-400 transition-colors">{project.title}</h3>
            <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-slate-700 text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-indigo-400 font-semibold text-sm hover:text-indigo-300 transition-colors"
            >
              View Project <ExternalLink size={14} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const Education = () => (
  <section id="education" className="section-container">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic <span className="text-cyan-400">Background</span></h2>
      <div className="w-20 h-1.5 bg-cyan-500 mx-auto rounded-full"></div>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          level: "B.E in Information Technology",
          school: "L.D. College Of Engineering (Ahmedabad, GTU)",
          date: "2023 - 2027",
          result: "CPI: 7.71",
          icon: <GraduationCap className="text-indigo-400" />
        },
        {
          level: "HSC (Class XII)",
          school: "Sanskardeep Vidhyasankul (GSEB)",
          date: "2023",
          result: "Score: 81.38%",
          icon: <Monitor className="text-cyan-400" />
        },
        {
          level: "SSC (Class X)",
          school: "Sanskardeep Vidhyasankul (GSEB)",
          date: "2021",
          result: "Score: 97.5%",
          icon: <Code2 className="text-indigo-400" />
        }
      ].map((edu, idx) => (
        <div key={idx} className="glass-card hover:bg-slate-800/80 transition-all border-l-4 border-l-indigo-500">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 rounded-lg bg-slate-700/50">
              {edu.icon}
            </div>
            <div className="text-xs font-mono text-slate-500 uppercase">{edu.date}</div>
          </div>
          <h3 className="text-lg font-bold text-white mb-1 leading-tight">{edu.level}</h3>
          <p className="text-slate-400 text-sm mb-4">{edu.school}</p>
          <div className="text-2xl font-black text-indigo-400/90">{edu.result}</div>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-slate-800 bg-slate-950/50 py-12">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
          Frenik Mangukiya
        </span>
        <p className="text-slate-500 text-sm mt-2 font-medium">
          © 2026 • Crafted with React & Tailwind
        </p>
      </div>

      <div className="flex gap-8 items-center">
        <div className="flex flex-col items-center md:items-end">
          <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Hobbies</span>
          <div className="flex gap-4 text-sm font-medium text-slate-300">
            <span className="flex items-center gap-1.5"><Code size={14} className="text-indigo-500" /> Coding</span>
            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-cyan-500" /> Travel</span>
          </div>
        </div>
        <div className="w-px h-10 bg-slate-800 hidden md:block"></div>
        <div className="flex gap-4">
          <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-indigo-500/20 hover:text-indigo-400 transition-all">
            <Github size={20} />
          </a>
          <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all">
            <Linkedin size={20} />
          </a>
          <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-indigo-500/20 hover:text-indigo-400 transition-all">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
