'use client';

import React from 'react';

import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  FileText, 
  Cpu, 
  Eye, 
  Layers, 
  Terminal, 
  Award,
  Globe
} from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: "Plate Vision & Real-Time ANPR",
      subtitle: "Computer Vision & Edge OCR Pipeline",
      description: "An end-to-end computer vision pipeline utilizing custom YOLOv8 models for vehicle and license plate localization. Integrated SORT multi-object tracking and EasyOCR to extract alphanumeric plate sequences at sub-100ms frame latency.",
      tags: ["Python", "YOLOv8", "OpenCV", "EasyOCR", "PyTorch"],
      github: "https://github.com/sharmarke",
      live: null,
      icon: <Eye className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "MatchPoint: Talent Intelligence Platform",
      subtitle: "AI Semantic Resume Matching System",
      description: "Full-stack talent platform projecting unstructured CV text into 384-dimensional dense vectors using Sentence-Transformers (all-MiniLM-L6-v2). Computes weighted cosine similarity and generates interactive radar chart skill-gap diagnostics.",
      tags: ["FastAPI", "React", "Sentence-Transformers", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/sharmarke",
      live: null,
      icon: <Layers className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "Parallel Log Analyzer & C++ Engine",
      subtitle: "High-Performance Concurrency & Vectorization",
      description: "High-throughput parallel log parsing engine leveraging AVX2 SIMD hardware vector instructions, lock-free concurrent queues, and POSIX multithreading (pthreads) to analyze large datasets with minimal synchronization overhead.",
      tags: ["C++", "AVX2 SIMD", "POSIX Threads", "Concurrency", "Linux"],
      github: "https://github.com/sharmarke",
      live: null,
      icon: <Cpu className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "Driver Drowsiness Monitoring System",
      subtitle: "Facial Landmark & Fatigue Classification",
      description: "Real-time safety application analyzing temporal facial landmarks with MediaPipe to calculate Eye Aspect Ratio (EAR) and head pose heuristics, benchmarking against deep learning object classification pipelines.",
      tags: ["Python", "MediaPipe", "OpenCV", "Computer Vision"],
      github: "https://github.com/sharmarke",
      live: null,
      icon: <Eye className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "Multi-Model ML Data Mining Pipeline",
      subtitle: "Statistical Learning & Model Benchmarking",
      description: "Automated end-to-end machine learning pipeline incorporating feature standardization, SMOTE class balancing, and comparative evaluation across Random Forests, SVMs, and Naive Bayes architectures.",
      tags: ["Python", "scikit-learn", "SMOTE", "pandas", "NumPy"],
      github: "https://github.com/sharmarke",
      live: null,
      icon: <Terminal className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "Mubarak B2B Marketplace & BitPost AI",
      subtitle: "Distributed Web Architectures & Cloud SaaS",
      description: "Modular enterprise architectures: built a B2B marketplace backend with Java Spring Boot and JWT auth, alongside BitPost AI SaaS and containerized ASP.NET Core microservices deployed via Docker.",
      tags: ["Java Spring Boot", "Laravel", "Docker", "MySQL", "ASP.NET Core"],
      github: "https://github.com/sharmarke",
      live: null,
      icon: <Globe className="w-5 h-5 text-indigo-600" />
    }
  ];

  const skillCategories = [
    {
      name: "Core Languages",
      skills: ["C", "C++", "Python", "Java", "C#", "JavaScript", "TypeScript", "SQL", "PHP"]
    },
    {
      name: "Computer Vision & Machine Learning",
      skills: ["YOLOv8", "OpenCV", "MediaPipe", "EasyOCR", "PyTorch", "scikit-learn", "Sentence-Transformers"]
    },
    {
      name: "Systems & Cloud Infrastructure",
      skills: ["AVX2 SIMD", "POSIX Threads", "Docker", "Linux / Bash", "Git", "REST APIs"]
    },
    {
      name: "Web Frameworks & Databases",
      skills: ["FastAPI", "React.js", "Java Spring Boot", "Tailwind CSS", "Laravel", "PostgreSQL", "MySQL"]
    }
  ];

  const leadershipRoles = [
    {
      title: "Defense Logistics Liaison (Mihmandar)",
      event: "SAHA EXPO Aerospace & Defense Exhibition (2026)",
      detail: "Managed international defense liaison operations for Serenas Group, facilitating official communications with foreign military and aerospace delegations from 74 countries."
    },
    {
      title: "VIP Protocol & Summit Secretariat",
      event: "Global Zero Waste Forum / UN-Partnered Summit",
      detail: "Coordinated state-level protocol and administrative operations for ministerial delegations, hosting 120+ international ministers and high-level dignitaries from 183 countries."
    },
    {
      title: "President of Executive Council",
      event: "UASI Student Union & Regional Student Associations",
      detail: "Directed union governance, international student community integration, budget allocation, and multi-university athletic tournaments across 8 major Istanbul institutions."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-semibold text-lg text-slate-900 tracking-tight">
            Sharmarke Mohamed
          </span>
          <div className="flex items-center space-x-6 text-sm font-medium text-slate-600">
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#leadership" className="hover:text-indigo-600 transition-colors">Leadership</a>
            <a 
              href="mailto:sharmachannel@gmail.com" 
              className="bg-indigo-600 text-white px-3.5 py-1.5 rounded-lg hover:bg-indigo-700 transition-all shadow-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">
        
        {/* Hero Section */}
        <section className="space-y-6 pt-4">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-200/60 px-3 py-1 rounded-full text-xs font-medium text-indigo-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available for Erasmus+ Research Traineeships</span>
          </div>
          
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Sharmarke Mohamed Ibrahim
            </h1>
            <p className="text-xl text-slate-600 font-normal">
              Computer Engineering Senior at <span className="text-slate-900 font-medium">Istanbul Arel University</span>
            </p>
          </div>

          <p className="max-w-2xl text-slate-600 leading-relaxed">
            Specializing in applied Computer Vision, high-throughput C++ systems with SIMD acceleration, and modern AI web platforms. Winner of the Bursa AKOM Engineering Challenge with demonstrated experience bridging low-level engineering and international operations.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a 
              href="/CV.pdf" 
              target="_blank"
              className="inline-flex items-center space-x-2 bg-slate-900 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Download Academic CV</span>
            </a>
            <a 
              href="https://github.com/sharmarke" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all shadow-sm"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a 
              href="mailto:sharmachannel@gmail.com" 
              className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>sharmachannel@gmail.com</span>
            </a>
          </div>
        </section>

        {/* Featured Projects Grid */}
        <section id="projects" className="space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Engineering & Research Projects</h2>
            <p className="text-sm text-slate-500 mt-1">Computer vision pipelines, parallel C++ engines, and production web systems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-indigo-50 border border-indigo-100">
                      {proj.icon}
                    </div>
                    <a 
                      href={proj.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-slate-400 hover:text-slate-700 transition-colors"
                      title="View Code Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{proj.title}</h3>
                    <p className="text-xs font-medium text-indigo-600 mt-0.5">{proj.subtitle}</p>
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

        {/* Technical Skills Matrix */}
        <section id="skills" className="space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Technical Competencies</h2>
            <p className="text-sm text-slate-500 mt-1">Core programming languages, frameworks, and low-level tools.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
                <h3 className="font-semibold text-slate-900 text-sm">{cat.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="bg-indigo-50/60 text-indigo-700 border border-indigo-100 text-xs px-2.5 py-1 rounded-md font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Global Leadership & Operations */}
        <section id="leadership" className="space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Leadership & High-Stakes Operations</h2>
            <p className="text-sm text-slate-500 mt-1">International summit liaising, institutional governance, and athletics management.</p>
          </div>

          <div className="space-y-4">
            {leadershipRoles.map((role, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-base font-bold text-slate-900">{role.title}</h3>
                  <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full w-fit mt-1 sm:mt-0">
                    {role.event}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {role.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 mt-20 text-center text-xs text-slate-500 space-y-2">
        <p>© 2026 Sharmarke Mohamed Ibrahim. Built with Next.js, TypeScript & Tailwind CSS.</p>
        <p>Istanbul, Türkiye · sharmachannel@gmail.com</p>
      </footer>

    </div>
  );
}