'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  FileText, 
  Cpu, 
  Eye, 
  Layers, 
  Terminal, 
  Globe 
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

function LinkedInIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      style={{ width: "20px", height: "20px", flexShrink: 0 }} 
      fill="currentColor" 
      viewBox="0 0 24 24" 
      aria-hidden="true"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState<'all' | 'vision' | 'systems' | 'web'>('all');

  const projects = [
    {
      title: "Plate Vision & Real-Time ANPR",
      category: "vision",
      badge: "Edge Vision Pipeline",
      metric: "<100ms Inference Latency",
      description: "End-to-end computer vision pipeline utilizing custom YOLOv8 models for vehicle and license plate localization. Integrated SORT multi-object tracking and EasyOCR to extract alphanumeric plate sequences at sub-100ms frame latency.",
      tags: ["Python", "YOLOv8", "OpenCV", "EasyOCR", "PyTorch"],
      github: "https://github.com/Sharmarke-Mohamed-IB",
      icon: <Eye className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "Parallel Log Analyzer & C++ Engine",
      category: "systems",
      badge: "SIMD Concurrency",
      metric: "AVX2 Vectorized",
      description: "High-throughput parallel data parsing engine leveraging AVX2 SIMD hardware instructions, lock-free concurrent queues, and POSIX multithreading (pthreads) to analyze large datasets with minimal lock contention.",
      tags: ["C++", "AVX2 SIMD", "POSIX Threads", "Concurrency", "Linux"],
      github: "https://github.com/Sharmarke-Mohamed-IB",
      icon: <Cpu className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "MatchPoint: Talent Intelligence",
      category: "web",
      badge: "Semantic Embeddings",
      metric: "384-Dim Vectors",
      description: "Full-stack talent intelligence system converting unstructured text into dense semantic vectors via Sentence-Transformers (all-MiniLM-L6-v2), with weighted cosine similarity and interactive radar chart diagnostics.",
      tags: ["FastAPI", "React", "Sentence-Transformers", "PostgreSQL", "Tailwind"],
      github: "https://github.com/Sharmarke-Mohamed-IB",
      icon: <Layers className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "Driver Drowsiness Monitoring",
      category: "vision",
      badge: "Facial Landmark Tracking",
      metric: "MediaPipe EAR vs YOLOv8",
      description: "Real-time safety system calculating Eye Aspect Ratio (EAR) and head-pose heuristics, benchmarking geometric landmark analysis against deep learning classification pipelines.",
      tags: ["Python", "MediaPipe", "OpenCV", "Computer Vision"],
      github: "https://github.com/Sharmarke-Mohamed-IB",
      icon: <Eye className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "Multi-Model ML Data Mining",
      category: "systems",
      badge: "Empirical Benchmarking",
      metric: "SMOTE Balanced",
      description: "Machine learning workflow featuring automated preprocessing, feature scaling, SMOTE oversampling, and comparative benchmarking across Random Forests, SVMs, and Decision Trees.",
      tags: ["Python", "scikit-learn", "SMOTE", "pandas", "NumPy"],
      github: "https://github.com/Sharmarke-Mohamed-IB",
      icon: <Terminal className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "Mubarak B2B & BitPost AI",
      category: "web",
      badge: "Distributed Architecture",
      metric: "Docker Multi-Tier",
      description: "Enterprise application architectures: built a B2B marketplace backend with Java Spring Boot and JWT auth, alongside BitPost AI SaaS and containerized ASP.NET Core microservices deployed via Docker.",
      tags: ["Java Spring Boot", "Laravel", "Docker", "MySQL", "ASP.NET Core"],
      github: "https://github.com/Sharmarke-Mohamed-IB",
      icon: <Globe className="w-5 h-5 text-indigo-600" />
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
          <div className="flex items-center space-x-6 text-sm font-medium text-slate-600">
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#leadership" className="hover:text-indigo-600 transition-colors">Leadership</a>
            <a 
              href="mailto:sharmachannel@gmail.com" 
              className="bg-indigo-600 text-white px-3.5 py-1.5 rounded-lg hover:bg-indigo-700 transition-all font-semibold shadow-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">
        
        {/* Hero Section */}
        <section className="space-y-6 pt-4">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full text-xs font-semibold text-indigo-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available for Erasmus+ Research Traineeships</span>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Sharmarke Mohamed Ibrahim
            </h1>
            <p className="text-xl text-slate-600 font-medium">
              Computer Engineering Senior at <span className="text-slate-900 font-semibold">Istanbul Arel University</span>
            </p>
          </div>

          <p className="max-w-2xl text-slate-600 leading-relaxed text-base">
            Specializing in applied Computer Vision, AVX2 SIMD hardware acceleration in C++, and modern AI system architectures. Winner of the Bursa AKOM Engineering Challenge with experience coordinating high-stakes international defense and diplomatic operations.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
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
              href="https://linkedin.com" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 bg-white border border-slate-300 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-sm"
            >
              <LinkedInIcon className="w-4 h-4 text-[#0A66C2]" />
              <span>LinkedIn</span>
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
              <p className="text-2xl font-black text-indigo-600">Cambridge</p>
              <p className="text-xs text-slate-500 font-medium mt-1">C1 English Proficiency</p>
            </div>
          </div>
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
                {["C", "C++", "Python", "Java", "C#", "SQL", "POSIX Threads", "AVX2 SIMD"].map((s, i) => (
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
                {["Docker", "Docker Compose", "Linux / Bash", "Git", "REST APIs", "PostgreSQL", "MySQL"].map((s, i) => (
                  <span key={i} className="bg-slate-100 text-slate-800 text-xs px-2.5 py-1 rounded-md font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
              <h3 className="font-bold text-slate-900 text-sm">Modern Web Architectures</h3>
              <div className="flex flex-wrap gap-2">
                {["FastAPI", "React.js", "Java Spring Boot", "Tailwind CSS", "ASP.NET Core", "Laravel"].map((s, i) => (
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
                <h3 className="text-base font-bold text-slate-900">Defense Logistics Liaison (Mihmandar)</h3>
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
                <h3 className="text-base font-bold text-slate-900">VIP Protocol & Summit Secretariat</h3>
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full w-fit">
                  Global Zero Waste Forum
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Administered technical logistics and ministerial VIP operations for a UN-partnered summit hosting over 120 international ministers across 183 countries.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-base font-bold text-slate-900">President of Executive Council</h3>
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full w-fit">
                  UASI Student Union
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Directed student union governance, organized multi-university athletic tournaments mobilizing 8 Istanbul institutions, and coordinated student community welfare programs.
              </p>
            </div>
          </div>
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