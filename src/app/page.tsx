'use client';

import { useState } from 'react';
import PipelineVisualizer from '@/components/PipelineVisualizer';
import { 
  Mail, 
  FileText, 
  Cpu, 
  Eye, 
  Layers, 
  Globe,
  Database,
  Code2,
  Wrench,
  ArrowUpRight
} from 'lucide-react';

function GitHubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      style={{ width: "20px", height: "20px", flexShrink: 0 }} 
      fill="currentColor" 
      viewBox="0 0 24 24" 
      aria-hidden="true"
    >
      <path 
        fillRule="evenodd" 
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" 
        clipRule="evenodd" 
      />
    </svg>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState<'all' | 'vision' | 'systems' | 'web'>('all');

  const projects = [
    {
      title: "Plate Vision (ANPR)",
      category: "vision",
      badge: "Edge Vision Pipeline",
      metric: "<100ms Inference Latency",
      description: "End-to-end computer vision pipeline utilizing custom YOLOv8 models for vehicle and license plate localization. Integrated SORT multi-object tracking and EasyOCR to extract alphanumeric plate sequences at sub-100ms frame latency.",
      tags: ["Python", "YOLOv8", "OpenCV", "EasyOCR", "PyTorch"],
      icon: <Eye className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "Parallel Log Analyzer (C++ AVX2)",
      category: "systems",
      badge: "SIMD Concurrency",
      metric: "AVX2 Vectorized",
      description: "High-throughput parallel data parsing engine leveraging AVX2 SIMD hardware instructions, lock-free concurrent queues, and POSIX multithreading (pthreads) to analyze large datasets with minimal lock contention.",
      tags: ["C++", "AVX2 SIMD", "POSIX Threads", "Concurrency", "Linux"],
      icon: <Cpu className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "Noisy Channel Simulator",
      category: "systems",
      badge: "Concurrent Systems",
      metric: "C / pthreads",
      description: "A noisy communication channel simulator built in C with POSIX threads to explore concurrent message processing and error behavior.",
      tags: ["C", "pthreads", "Concurrency", "Simulation"],
      icon: <Cpu className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "MatchPoint: Talent Intelligence",
      category: "web",
      badge: "Semantic Embeddings",
      metric: "384-Dim Vectors",
      description: "Full-stack talent intelligence system converting unstructured text into dense semantic vectors via Sentence-Transformers (all-MiniLM-L6-v2), with weighted cosine similarity and interactive radar chart diagnostics.",
      tags: ["FastAPI", "React", "Sentence-Transformers", "PostgreSQL", "Tailwind"],
      icon: <Layers className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "Driver Drowsiness (EAR vs YOLOv8)",
      category: "vision",
      badge: "Facial Landmark Tracking",
      metric: "MediaPipe EAR vs YOLOv8",
      description: "Real-time safety system calculating Eye Aspect Ratio (EAR) and head-pose heuristics, benchmarking geometric landmark analysis against deep learning classification pipelines.",
      tags: ["Python", "MediaPipe", "OpenCV", "Computer Vision"],
      icon: <Eye className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "Mubarak B2B & BitPost AI",
      category: "web",
      badge: "Distributed Architecture",
      metric: "Docker Multi-Tier",
      description: "Enterprise application architectures: built a B2B marketplace backend with Java Spring Boot and JWT auth, alongside BitPost AI SaaS and containerized ASP.NET Core microservices deployed via Docker.",
      tags: ["Java Spring Boot", "Laravel", "Docker", "MySQL", "ASP.NET Core"],
      icon: <Globe className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "Cinema Booking & Management",
      category: "web",
      badge: "Full-Stack Applications",
      metric: "ASP.NET Core MVC",
      description: "A database-backed cinema application for managing movies and ticket bookings, built with ASP.NET Core MVC, C#, SQLite, and Bootstrap.",
      tags: ["C#", "ASP.NET Core MVC", "SQL", "Web Applications"],
      icon: <Layers className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "MyLibrary MVC",
      category: "web",
      badge: "Database-Backed Web App",
      metric: "ASP.NET Core · SQLite",
      description: "An MVC library application centered on book management and database-backed workflows, developed with ASP.NET Core, SQLite, and Bootstrap.",
      tags: ["C#", "ASP.NET Core MVC", "SQLite", "Bootstrap"],
      icon: <Database className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "Diabetes Classification",
      category: "systems",
      badge: "Supervised Learning",
      metric: "ROC-AUC comparison",
      description: "A scikit-learn study comparing classification models on the diabetes dataset, including preprocessing, SMOTE, and evaluation with ROC-AUC and accuracy.",
      tags: ["Python", "pandas", "scikit-learn", "SMOTE", "Model Evaluation"],
      icon: <Cpu className="w-5 h-5 text-indigo-600" />
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg text-slate-900 tracking-tight">
            Sharmarke Mohamed
          </span>
          <div className="hidden items-center space-x-5 text-sm font-medium text-slate-600 md:flex">
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#lab" className="hover:text-indigo-600 transition-colors">Lab</a>
            <a href="#experience" className="hover:text-indigo-600 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#leadership" className="hover:text-indigo-600 transition-colors">Leadership</a>
            <a href="#services" className="hover:text-indigo-600 transition-colors">Services</a>
            <a 
              href="#contact" 
              className="bg-indigo-600 text-white px-3.5 py-1.5 rounded-lg hover:bg-indigo-700 transition-all font-semibold shadow-sm"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex gap-5 overflow-x-auto border-t border-slate-100 px-6 py-2 text-xs font-medium text-slate-600 md:hidden" aria-label="Mobile navigation">
          <a href="#about" className="shrink-0">About</a>
          <a href="#projects" className="shrink-0">Projects</a>
          <a href="#lab" className="shrink-0">Lab</a>
          <a href="#experience" className="shrink-0">Experience</a>
          <a href="#skills" className="shrink-0">Skills</a>
          <a href="#leadership" className="shrink-0">Leadership</a>
          <a href="#services" className="shrink-0">Services</a>
          <a href="#contact" className="shrink-0">Contact</a>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">
        
        {/* Hero Section */}
        <section className="space-y-6 pt-4">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full text-xs font-semibold text-indigo-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Computer Engineering · Istanbul Arel University · 2022–2026</span>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Sharmarke Mohamed Ibrahim
            </h1>
            <p className="text-xl text-slate-600 font-medium">
              Computer Engineer building practical software, AI, and data-driven solutions.
            </p>
          </div>

          <p className="max-w-2xl text-slate-600 leading-relaxed text-base">
            I hold a B.S. in Computer Engineering from Istanbul Arel University. My project work spans web applications, computer vision, machine learning, and systems programming—from database-backed products to parallel C++ processing.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700">
              Explore Projects <ArrowUpRight className="h-4 w-4" />
            </a>
            <a 
              href="/CV.pdf" 
              target="_blank"
              className="inline-flex items-center space-x-2 bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-all shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Download Academic CV</span>
            </a>
            <a 
              href="https://github.com/Sharmarke-Mohamed-IB" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 bg-white border border-slate-300 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-sm"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a 
              href="mailto:sharmachannel@gmail.com" 
              className="inline-flex items-center space-x-2 bg-white border border-slate-300 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>sharmachannel@gmail.com</span>
            </a>
          </div>

          {/* Research Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200">
            <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
              <p className="text-2xl font-black text-indigo-600">AVX2</p>
              <p className="text-xs text-slate-500 font-medium mt-1">SIMD Hardware Vectorization</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
              <p className="text-2xl font-black text-slate-900">&lt;100ms</p>
              <p className="text-xs text-slate-500 font-medium mt-1">Inference Latency</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
              <p className="text-2xl font-black text-slate-900">1st Place</p>
              <p className="text-xs text-slate-500 font-medium mt-1">Bursa AKOM Challenge</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
              <p className="text-2xl font-black text-indigo-600">English</p>
              <p className="text-xs text-slate-500 font-medium mt-1">Cambridge certificate · 2023</p>
            </div>
          </div>
        </section>

        <section id="about" className="grid gap-6 border-y border-slate-200 py-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">About</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">Engineering with a practical focus</h2>
          </div>
          <div className="space-y-3 text-sm leading-relaxed text-slate-600">
            <p>I studied Computer Engineering at Istanbul Arel University from 2022 to 2026. My work combines implementation with evaluation across software, data, and systems projects.</p>
            <p>Alongside development, customer support and event coordination have strengthened how I explain technical ideas, work with different people, and keep complex tasks moving.</p>
          </div>
        </section>

        <section id="experience" className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Experience</h2>
          </div>
          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="font-bold text-slate-900">Software Developer Intern · Scramble Bit</h3>
              <span className="text-sm font-medium text-indigo-600">February–June 2026</span>
            </div>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="font-bold text-slate-900">Sales Associate · MediaMarkt</h3>
              <span className="text-sm font-medium text-indigo-600">Istanbul · January–June 2023</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">Helped customers compare electronics, understand product features, complete purchases, and resolve setup or troubleshooting questions.</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="font-bold text-slate-900">Freelance Digital Assistance & Technical Support</h3>
              <span className="text-sm font-medium text-indigo-600">Since 2022</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">Provided hardware and software troubleshooting, digital assistance, and visual content support.</p>
          </article>
        </section>

        <section id="lab" className="space-y-5">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Interactive Engineering Lab</h2>
            <p className="mt-1 text-sm text-slate-500">Pipeline latency, parallel parsing configurations, and supervised model benchmarks.</p>
          </div>
          <PipelineVisualizer />
        </section>

        {/* Projects Section with Live Interactive Filter Tabs */}
        <section id="projects" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Engineering & Research Projects</h2>
              <p className="text-sm text-slate-500 mt-1">Computer vision pipelines, parallel SIMD engines, and scalable web architectures.</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'vision', label: 'Computer Vision' },
                { id: 'systems', label: 'Systems & ML' },
                { id: 'web', label: 'Web Platforms' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as 'all' | 'vision' | 'systems' | 'web')}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                    filter === tab.id
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((proj, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-indigo-50 border border-indigo-100">
                      {proj.icon}
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {proj.metric}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{proj.title}</h3>
                    <p className="text-xs font-medium text-indigo-600 mt-0.5">{proj.badge}</p>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-slate-100">
                  {proj.tags.map((t, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-md font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Technical Competencies</h2>
            <p className="text-sm text-slate-500 mt-1">Core programming languages, machine learning frameworks, and infrastructure tools.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
              <h3 className="font-bold text-slate-900 text-sm">Languages & Low-Level</h3>
              <div className="flex flex-wrap gap-2">
                {["C", "C++", "Python", "Java", "C#", "PHP", "JavaScript", "SQL", "POSIX Threads", "AVX2 SIMD"].map((s, i) => (
                  <span key={i} className="bg-slate-100 text-slate-800 text-xs px-2.5 py-1 rounded-md font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
              <h3 className="font-bold text-slate-900 text-sm">Computer Vision & AI</h3>
              <div className="flex flex-wrap gap-2">
                {["OpenCV", "YOLOv8", "MediaPipe", "EasyOCR", "PyTorch", "scikit-learn", "Sentence-Transformers"].map((s, i) => (
                  <span key={i} className="bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs px-2.5 py-1 rounded-md font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
              <h3 className="font-bold text-slate-900 text-sm">Cloud, Systems & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {["Docker", "Docker Compose", "Linux / Bash", "Git", "REST APIs", "SQLite", "MySQL", "Arduino IDE"].map((s, i) => (
                  <span key={i} className="bg-slate-100 text-slate-800 text-xs px-2.5 py-1 rounded-md font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
              <h3 className="font-bold text-slate-900 text-sm">Modern Web Architectures</h3>
              <div className="flex flex-wrap gap-2">
                {["FastAPI", "React.js", "Java Spring Boot", "ASP.NET Core MVC", "Laravel", "Bootstrap", "Tailwind CSS"].map((s, i) => (
                  <span key={i} className="bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs px-2.5 py-1 rounded-md font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Executive Leadership & Protocol */}
        <section id="leadership" className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Executive Leadership & Protocol</h2>
            <p className="text-sm text-slate-500 mt-1">International defense liaisons, global summit operations, and governance.</p>
          </div>

          <div className="space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-base font-bold text-slate-900">Defense Liaison · Serenas Group</h3>
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full w-fit">
                  SAHA EXPO 2026
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Facilitated official defense liaison operations for Serenas Group, coordinating protocol and logistics for high-level military delegations representing 74 countries.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-base font-bold text-slate-900">Global Summit Secretariat</h3>
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full w-fit">
                  Global Zero Waste Forum
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Coordinated VIP operations and administration for a summit hosting over 120 ministers from 183 countries, alongside former heads of state and international delegates.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-base font-bold text-slate-900">UASI Executive Council Presidency</h3>
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full w-fit">
                  UASI Student Union
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Led student union operations, including governance, budgeting, and external relations. Also coordinated inter-university athletics involving eight Istanbul universities.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-base font-bold text-slate-900">Chair of Central Council (Gudoomiyaha Golaha Dhexe)</h3>
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full w-fit">Somali student community</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">Contributed to student programs, community coordination, and educational events in Türkiye.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-base font-bold text-slate-900">Graduation Ceremony Organizer</h3>
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full w-fit">2025–2026</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">Helped establish annual graduation ceremonies for the Somali student community, coordinating planning and event operations.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-base font-bold text-slate-900">Bab-iAlem International Student Association</h3>
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full w-fit">2022–2024</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">Supported cultural exchange events and planning for international student experiences.</p>
            </div>
          </div>
        </section>

        <section id="services" className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Ways I Can Help</h2>
            <p className="mt-1 text-sm text-slate-500">Practical development and technical support for focused projects.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Web applications', text: 'MVC applications and database-backed workflows.', icon: Code2 },
              { title: 'Computer vision', text: 'Prototypes for detection, tracking, and OCR tasks.', icon: Eye },
              { title: 'Data workflows', text: 'Data preparation, automation, and model comparisons.', icon: Database },
              { title: 'Technical support', text: 'Hands-on troubleshooting for common software and hardware issues.', icon: Wrench },
            ].map(({ title, text, icon: Icon }) => (
              <article key={title} className="rounded-xl border border-slate-200 bg-white p-5">
                <Icon className="mb-3 h-5 w-5 text-indigo-600" aria-hidden="true" />
                <h3 className="text-sm font-bold text-slate-900">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="flex flex-col gap-5 rounded-2xl bg-slate-900 p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-300">Contact</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight">Have a project or opportunity in mind?</h2>
            <p className="mt-2 text-sm text-slate-300">I’m open to discussing software projects, engineering roles, and research opportunities.</p>
          </div>
          <a href="mailto:sharmachannel@gmail.com" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-slate-900 transition-colors hover:bg-indigo-50">
            <Mail className="h-4 w-4" aria-hidden="true" /> Email me
          </a>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-500 space-y-2">
        <p>© 2026 Sharmarke Mohamed Ibrahim. Built with Next.js, TypeScript & Tailwind CSS.</p>
        <p>Istanbul, Türkiye · sharmachannel@gmail.com</p>
      </footer>

    </div>
  );
}
