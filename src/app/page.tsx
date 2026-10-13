'use client';

import { useState } from 'react';
import PipelineVisualizer from '@/components/PipelineVisualizer';
import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Cpu,
  Database,
  Eye,
  FileText,
  Mail,
  ScanLine,
  Wrench,
} from 'lucide-react';

type ProjectCategory = 'vision' | 'systems' | 'web' | 'data';
type Project = {
  title: string;
  category: ProjectCategory;
  label: string;
  summary: string;
  details: string;
  tags: string[];
  visual: 'vision' | 'threads' | 'web' | 'data';
};

const projects: Project[] = [
  {
    title: 'Plate Vision',
    category: 'vision',
    label: 'Computer vision · ANPR',
    summary: 'A video pipeline for locating vehicles and plates, tracking them between frames, and extracting plate text.',
    details: 'YOLOv8 localization, SORT tracking, EasyOCR extraction, and missing-box interpolation with missing.py.',
    tags: ['Python', 'YOLOv8', 'SORT', 'EasyOCR', 'OpenCV'],
    visual: 'vision',
  },
  {
    title: 'Parallel Log Analyzer',
    category: 'systems',
    label: 'Systems programming · C++',
    summary: 'A concurrent parser designed to process large server log files across multiple worker threads.',
    details: 'Explores AVX2, synchronization, and compiler optimization while analyzing million-line workloads.',
    tags: ['C++', 'AVX2', 'std::thread', 'Linux'],
    visual: 'threads',
  },
  {
    title: 'Mubarak Marketplace',
    category: 'web',
    label: 'Web application · B2B',
    summary: 'A business marketplace built around product listings, accounts, and commerce workflows.',
    details: 'Java and Spring Boot backend with user authentication and marketplace features.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'REST API'],
    visual: 'web',
  },
  {
    title: 'MatchPoint',
    category: 'web',
    label: 'Semantic matching · NLP',
    summary: 'A talent-matching application that compares people and opportunities using semantic text representations.',
    details: 'Uses 384-dimensional Sentence-Transformers embeddings with cosine similarity to rank profile-to-role relevance.',
    tags: ['Sentence-Transformers', 'FastAPI', 'React', 'PostgreSQL'],
    visual: 'data',
  },
  {
    title: 'Diabetes Classification',
    category: 'data',
    label: 'Machine learning · Evaluation',
    summary: 'A supervised learning comparison using clinical diabetes data and imbalanced-class handling.',
    details: 'Compared Logistic Regression, Naive Bayes, Random Forest, and SVM using scikit-learn and SMOTE.',
    tags: ['Python', 'pandas', 'scikit-learn', 'SMOTE'],
    visual: 'data',
  },
  {
    title: 'Driver Drowsiness',
    category: 'vision',
    label: 'Computer vision · Model study',
    summary: 'An evaluation of eye-aspect-ratio signals against a YOLOv8-based approach for drowsiness detection.',
    details: 'Compared landmark-based analysis with object detection, including speed and low-light considerations.',
    tags: ['Python', 'MediaPipe', 'EAR', 'YOLOv8'],
    visual: 'vision',
  },
  {
    title: 'BitPost AI',
    category: 'web',
    label: 'Web platform · AI',
    summary: 'An AI SaaS project with a Laravel and MySQL foundation.',
    details: 'The CV describes an AI SaaS infrastructure; product details are kept concise until a public demo is available.',
    tags: ['Laravel', 'MySQL', 'OpenAI'],
    visual: 'web',
  },
  {
    title: 'Cinema Booking & Management',
    category: 'web',
    label: 'Web application · ASP.NET Core',
    summary: 'A database-backed cinema application for managing movies and ticket bookings.',
    details: 'Built with ASP.NET Core MVC, C#, SQLite, and Bootstrap.',
    tags: ['C#', 'ASP.NET Core MVC', 'SQLite', 'Bootstrap'],
    visual: 'web',
  },
  {
    title: 'MyLibrary MVC',
    category: 'web',
    label: 'Web application · ASP.NET Core',
    summary: 'A library management site centered on book records and database-backed workflows.',
    details: 'An MVC project using ASP.NET Core, SQLite, and Bootstrap.',
    tags: ['C#', 'ASP.NET Core MVC', 'SQLite', 'Bootstrap'],
    visual: 'web',
  },
  {
    title: 'Noisy Channel Simulator',
    category: 'systems',
    label: 'Systems programming · C',
    summary: 'A concurrent simulator exploring message handling over a noisy communication channel.',
    details: 'A C project using POSIX threads to model channel behavior and error handling.',
    tags: ['C', 'pthreads', 'Concurrency'],
    visual: 'threads',
  },
];

const filters: { id: 'all' | ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All work' },
  { id: 'vision', label: 'Vision' },
  { id: 'systems', label: 'Systems' },
  { id: 'web', label: 'Web' },
  { id: 'data', label: 'Data' },
];

const services = [
  { icon: Braces, title: 'Web applications', description: 'MVC and database-backed applications.' },
  { icon: Eye, title: 'Computer vision', description: 'Detection, tracking, and OCR prototypes.' },
  { icon: Database, title: 'Data workflows', description: 'Preparation, automation, and model comparisons.' },
  { icon: Wrench, title: 'Technical support', description: 'Practical software and hardware troubleshooting.' },
];

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ width: '18px', height: '18px', flexShrink: 0 }}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ProjectArtwork({ kind }: { kind: Project['visual'] }) {
  if (kind === 'vision') {
    return (
      <div className="art-vision relative flex h-40 items-center justify-center overflow-hidden border-b border-white/10 px-7">
        <div className="relative h-24 w-full max-w-[19rem] rounded-sm border border-slate-500/50 bg-slate-800/70">
          <div className="absolute left-[18%] top-[16%] h-[55%] w-[24%] border border-cyan-300/90" />
          <div className="absolute left-[48%] top-[30%] h-[46%] w-[34%] border border-indigo-300/90" />
          <div className="absolute bottom-[12%] left-[52%] rounded-sm bg-indigo-300 px-1.5 py-0.5 font-mono text-[8px] text-slate-950">PLATE · OCR</div>
          <span className="absolute -top-2 left-[18%] bg-cyan-300 px-1.5 py-0.5 font-mono text-[8px] text-slate-950">VEHICLE 01</span>
        </div>
        <span className="absolute bottom-3 left-4 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400">Illustrative detection overlay</span>
      </div>
    );
  }

  if (kind === 'threads') {
    return (
      <div className="art-threads relative flex h-40 flex-col justify-center gap-2.5 border-b border-white/10 px-7">
        {[1, 2, 3, 4].map((thread, index) => (
          <div key={thread} className="flex items-center gap-3">
            <span className="w-8 font-mono text-[9px] text-slate-400">T{thread}</span>
            <div className="h-2 flex-1 rounded-sm bg-white/10"><div className="h-full rounded-sm bg-indigo-300" style={{ width: `${34 + index * 13}%` }} /></div>
            <span className="font-mono text-[9px] text-slate-400">worker</span>
          </div>
        ))}
        <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400">Parallel workload · schematic</span>
      </div>
    );
  }

  if (kind === 'data') {
    return (
      <div className="art-data relative flex h-40 items-end justify-center gap-3 border-b border-white/10 px-8 pb-8 pt-5">
        {[58, 76, 53, 88, 68, 96, 72, 83].map((height, index) => (
          <div key={index} className="w-4 rounded-t-sm bg-indigo-300/80" style={{ height: `${height}%` }} />
        ))}
        <span className="absolute bottom-3 left-4 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400">Model evaluation · schematic</span>
      </div>
    );
  }

  return (
    <div className="art-web relative flex h-40 items-center justify-center gap-3 border-b border-white/10 px-7">
      <div className="h-[4.8rem] w-16 rounded-sm border border-white/15 bg-white/5 p-1.5"><div className="h-7 rounded-[2px] bg-indigo-300/70" /><div className="mt-2 h-1 w-4/5 bg-white/25" /><div className="mt-1 h-1 w-3/5 bg-white/15" /></div>
      <div className="h-[5.5rem] w-20 rounded-sm border border-indigo-300/40 bg-indigo-300/10 p-2"><div className="mb-2 h-1 w-1/2 bg-indigo-200/70" /><div className="h-1 w-full bg-white/20" /><div className="mt-1 h-1 w-4/5 bg-white/15" /><div className="mt-3 h-3 w-8 rounded-[2px] bg-indigo-300/60" /></div>
      <div className="h-[4.8rem] w-16 rounded-sm border border-white/15 bg-white/5 p-1.5"><div className="h-7 rounded-[2px] bg-slate-500/60" /><div className="mt-2 h-1 w-4/5 bg-white/25" /><div className="mt-1 h-1 w-3/5 bg-white/15" /></div>
      <span className="absolute bottom-3 left-4 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400">Interface study · illustrative</span>
    </div>
  );
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`overflow-hidden border border-slate-200 bg-white ${featured ? 'md:col-span-2' : ''}`}>
      <ProjectArtwork kind={project.visual} />
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-700">{project.label}</span>
        </div>
        <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-950">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.summary}</p>
        <p className="mt-2 text-xs leading-relaxed text-slate-500">{project.details}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => <span key={tag} className="border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-600">{tag}</span>)}
        </div>
      </div>
    </article>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState<'all' | ProjectCategory>('all');
  const visibleProjects = filter === 'all' ? projects : projects.filter((project) => project.category === filter);

  return (
    <div className="min-h-screen bg-[#f4f5f7] text-slate-900 selection:bg-indigo-200 selection:text-slate-950">
      <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f4f5f7]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="flex items-center gap-2.5 font-semibold tracking-tight text-slate-950" aria-label="Sharmarke Mohamed Ibrahim, home">
            <span className="grid h-8 w-8 place-items-center bg-slate-950 text-[11px] font-bold text-white">SM</span>
            <span className="hidden sm:inline">Sharmarke Mohamed Ibrahim</span>
            <span className="sm:hidden">Sharmarke Mohamed</span>
          </a>
          <div className="hidden items-center gap-6 text-xs font-semibold text-slate-600 md:flex">
            <a href="#work" className="transition hover:text-indigo-700">Work</a>
            <a href="#lab" className="transition hover:text-indigo-700">Lab</a>
            <a href="#about" className="transition hover:text-indigo-700">About</a>
            <a href="#experience" className="transition hover:text-indigo-700">Experience</a>
            <a href="#leadership" className="transition hover:text-indigo-700">Leadership</a>
            <a href="/CV.pdf" download className="transition hover:text-indigo-700">CV</a>
            <a href="#contact" className="bg-slate-950 px-4 py-2.5 text-white transition hover:bg-indigo-700">Get in touch</a>
          </div>
          <a href="#contact" className="bg-slate-950 px-3.5 py-2 text-xs font-semibold text-white md:hidden">Contact</a>
        </div>
        <div className="flex gap-5 overflow-x-auto border-t border-slate-200/70 px-5 py-2.5 text-[11px] font-semibold text-slate-600 md:hidden" aria-label="Mobile navigation">
          <a href="#work" className="shrink-0">Work</a><a href="#lab" className="shrink-0">Lab</a><a href="#about" className="shrink-0">About</a><a href="#experience" className="shrink-0">Experience</a><a href="#leadership" className="shrink-0">Leadership</a><a href="/CV.pdf" download className="shrink-0">CV</a><a href="#contact" className="shrink-0">Contact</a>
        </div>
      </nav>

      <main id="home">
        <section className="relative overflow-hidden bg-[#111722] text-white">
          <div className="absolute inset-0 opacity-[0.08]" aria-hidden="true" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.22) 1px, transparent 1px)', backgroundSize: '44px 44px' }} />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-16 lg:py-24">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 border border-white/15 bg-white/[0.04] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-indigo-200">
                <span className="h-1.5 w-1.5 bg-indigo-300" /> Computer Engineer · Istanbul, Türkiye
              </div>
              <h1 className="max-w-3xl text-[2.65rem] font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-[4.35rem]">
                Sharmarke<br /><span className="text-indigo-300">Mohamed Ibrahim.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl">Building practical software across web, computer vision, and systems engineering.</p>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-400">B.S. in Computer Engineering, Istanbul Arel University (2022–2026). Interested in turning technical ideas into useful, carefully evaluated software.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#work" className="inline-flex items-center gap-2 bg-indigo-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-white">Explore my work <ArrowDownRight className="h-4 w-4" /></a>
                <a href="#contact" className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/60">Contact me <ArrowUpRight className="h-4 w-4" /></a>
              </div>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold text-slate-300">
                <a href="https://github.com/Sharmarke-Mohamed-IB" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white"><GitHubIcon /> GitHub <ArrowUpRight className="h-3 w-3" /></a>
                <a href="/CV.pdf" download className="inline-flex items-center gap-2 transition hover:text-white"><FileText className="h-4 w-4" /> Download CV</a>
                <a href="mailto:sharmachannel@gmail.com" className="inline-flex items-center gap-2 transition hover:text-white"><Mail className="h-4 w-4" /> Email</a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[31rem] border border-white/15 bg-[#171f2b]/90 p-5 shadow-2xl shadow-black/20 sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2"><ScanLine className="h-4 w-4 text-indigo-300" /><span className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-300">Edge vision pipeline</span></div>
                <span className="font-mono text-[10px] text-emerald-300">LIVE FLOW</span>
              </div>
              <div className="relative py-5 pl-1">
                <div className="absolute bottom-9 left-[13px] top-9 w-px bg-indigo-300/35" />
                {[
                  ['01', '1080p RTSP stream', 'Frame ingestion'],
                  ['02', 'YOLOv8 localization', 'Vehicle + plate boxes'],
                  ['03', 'SORT tracking', 'Missing-frame interpolation'],
                  ['04', 'EasyOCR extraction', 'Plate text output'],
                ].map(([number, title, detail]) => (
                  <div key={number} className="relative flex gap-4 py-3">
                    <span className="z-10 grid h-6 w-6 shrink-0 place-items-center border border-indigo-200/50 bg-[#171f2b] font-mono text-[8px] text-indigo-200">{number}</span>
                    <div className="flex min-w-0 flex-1 items-start justify-between gap-3">
                      <div><p className="text-sm font-semibold text-white">{title}</p><p className="mt-1 text-[11px] text-slate-400">{detail}</p></div>
                      <Braces className="mt-1 h-3.5 w-3.5 shrink-0 text-slate-500" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-end justify-between border-t border-white/10 pt-4">
                <div><p className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-400">End-to-end latency</p><p className="mt-1 text-3xl font-semibold tracking-tight text-white">84<span className="ml-1 text-base text-indigo-300">ms</span></p></div>
                <span className="border border-emerald-300/30 bg-emerald-300/10 px-2.5 py-1.5 font-mono text-[9px] text-emerald-200">&lt; 100 ms SLA</span>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-slate-200 px-5 sm:px-8 md:grid-cols-4">
            {[
              ['B.S.', 'Computer Engineering'],
              ['84 ms', 'ANPR pipeline latency'],
              ['74', 'SAHA EXPO delegations'],
              ['120+', 'Ministers at the forum'],
            ].map(([value, label]) => <div key={label} className="border-b border-slate-200 px-4 py-5 first:pl-0 even:border-r-0 md:border-b-0 md:px-6 md:first:pl-0"><p className="text-2xl font-semibold tracking-tight text-slate-950">{value}</p><p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.11em] text-slate-500">{label}</p></div>)}
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-16 sm:px-8 sm:py-20">
          <div className="flex flex-col gap-6 border-b border-slate-300 pb-6 md:flex-row md:items-end md:justify-between">
            <div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-indigo-700">Selected projects / 01—10</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">Work built to solve problems.</h2><p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">A selection across vision, systems, web applications, and applied machine learning.</p></div>
            <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter projects">
              {filters.map(({ id, label }) => <button key={id} type="button" aria-pressed={filter === id} onClick={() => setFilter(id)} className={`border px-3 py-2 text-[11px] font-semibold transition ${filter === id ? 'border-slate-950 bg-slate-950 text-white' : 'border-slate-300 bg-transparent text-slate-600 hover:border-slate-500 hover:text-slate-950'}`}>{label}</button>)}
            </div>
          </div>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project, index) => <ProjectCard key={project.title} project={project} featured={filter === 'all' && index === 0} />)}
          </div>
          <p className="mt-5 text-[11px] text-slate-500">Visual panels are illustrative diagrams. Repository links are omitted until project-specific URLs are confirmed.</p>
        </section>

        <section id="lab" className="scroll-mt-28 border-y border-slate-200 bg-[#e9ecf2]">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <div className="mb-7 grid gap-3 md:grid-cols-[1fr_auto] md:items-end"><div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-indigo-700">Interactive lab / 02</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">Systems in practice.</h2></div><p className="max-w-sm text-sm leading-relaxed text-slate-600">Explore pipeline stages, concurrency configurations, and reported model comparisons.</p></div>
            <PipelineVisualizer />
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-6xl gap-9 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[0.8fr_1.2fr]">
          <div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-indigo-700">About / 03</p><h2 className="mt-3 max-w-sm text-3xl font-semibold leading-tight tracking-[-0.04em] text-slate-950">Engineering, with people and practice in view.</h2></div>
          <div className="space-y-4 text-sm leading-7 text-slate-600"><p>I earned a B.S. in Computer Engineering from Istanbul Arel University. My project work covers database-backed applications, computer vision, model evaluation, and concurrent systems programming.</p><p>Earlier work in electronics sales and technical support taught me to listen carefully, explain options clearly, and solve problems with the person using the technology in mind. Student and event leadership has added experience coordinating teams and complex operations.</p><p className="border-l-2 border-indigo-500 pl-4 font-medium text-slate-800">I’m interested in practical engineering work where implementation, measurement, and clear communication all matter.</p></div>
        </section>

        <section id="experience" className="scroll-mt-28 bg-[#111722] text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[0.75fr_1.25fr]">
            <div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-indigo-300">Experience / 04</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">A practical foundation.</h2></div>
            <div className="divide-y divide-white/15 border-y border-white/15">
              <article className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:items-start"><div><h3 className="font-semibold">Software Developer Intern</h3><p className="mt-1 text-sm text-slate-300">Scramble Bit</p></div><span className="font-mono text-[10px] uppercase tracking-wider text-indigo-200">Feb — Jun 2026</span></article>
              <article className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:items-start"><div><h3 className="font-semibold">Sales Associate</h3><p className="mt-1 text-sm text-slate-300">MediaMarkt · customer guidance, product support, transactions, and troubleshooting</p></div><span className="font-mono text-[10px] uppercase tracking-wider text-indigo-200">Istanbul · Jan — Jun 2023</span></article>
              <article className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:items-start"><div><h3 className="font-semibold">Freelance Digital Assistant & Technical Support</h3><p className="mt-1 text-sm text-slate-300">Hardware and software troubleshooting, digital assistance, and visual content support</p></div><span className="font-mono text-[10px] uppercase tracking-wider text-indigo-200">Since 2022</span></article>
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-7"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-indigo-700">Technical toolkit / 05</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">Tools I work with.</h2></div>
          <div className="grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-2">
            {[
              { icon: Braces, title: 'Languages & systems', skills: 'C · C++ · Python · Java · C# · PHP · JavaScript · SQL · POSIX threads · AVX2 · Linux' },
              { icon: Eye, title: 'Vision & machine learning', skills: 'OpenCV · YOLOv8 · MediaPipe · EasyOCR · scikit-learn · Sentence-Transformers · model evaluation' },
              { icon: Database, title: 'Web & data', skills: 'ASP.NET Core MVC · Spring Boot · Laravel · FastAPI · React · SQLite · MySQL · PostgreSQL · REST APIs' },
              { icon: Cpu, title: 'Tools & implementation', skills: 'Git · Docker · GCC/G++ · Bootstrap · Tailwind CSS · Arduino IDE · data preprocessing · concurrency' },
            ].map(({ icon: Icon, title, skills }) => <article key={title} className="bg-white p-5 sm:p-6"><Icon className="h-5 w-5 text-indigo-700" aria-hidden="true" /><h3 className="mt-4 text-sm font-bold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{skills}</p></article>)}
          </div>
        </section>

        <section id="leadership" className="scroll-mt-28 border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <div className="mb-8 max-w-2xl"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-indigo-700">Leadership & service / 06</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">Coordination beyond the code.</h2><p className="mt-3 text-sm leading-relaxed text-slate-600">International events, student governance, and community programs have built a second set of practical skills: communication, planning, and follow-through.</p></div>
            <div className="grid gap-3 md:grid-cols-2">
              {[
                ['Defense Liaison', 'SAHA EXPO 2026 · Serenas Group', 'Supported protocol and liaison operations for delegations representing 74 nations.'],
                ['VIP Secretariat', 'Global Zero Waste Forum', 'Coordinated summit operations for a forum hosting more than 120 ministers.'],
                ['Executive Council Presidency', 'UASI Student Union', 'Worked across governance, budgeting, external relations, and student programs.'],
                ['Chair of Central Council', 'Gudoomiyaha Golaha Dhexe', 'Contributed to Somali student programs, community coordination, and educational events.'],
                ['Graduation Ceremony Organizer', '2025–2026', 'Helped plan and deliver annual graduation events for the Somali student community.'],
                ['International Student Association', 'Bab-iAlem · 2022–2024', 'Supported cultural exchange activities and international student initiatives.'],
              ].map(([title, organization, description]) => <article key={title} className="border border-slate-200 p-5 transition hover:border-indigo-300"><p className="font-mono text-[9px] uppercase tracking-[0.14em] text-indigo-700">{organization}</p><h3 className="mt-2 font-semibold text-slate-950">{title}</h3><p className="mt-2 text-xs leading-relaxed text-slate-600">{description}</p></article>)}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-7"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-indigo-700">Areas of support / 07</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">Useful work, clearly scoped.</h2></div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, description }) => <article key={title} className="border border-slate-200 bg-white p-5"><Icon className="h-5 w-5 text-indigo-700" aria-hidden="true" /><h3 className="mt-4 text-sm font-bold text-slate-950">{title}</h3><p className="mt-2 text-xs leading-relaxed text-slate-600">{description}</p></article>)}
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 bg-indigo-300">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 sm:py-16 md:flex-row md:items-end md:justify-between">
            <div><p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-slate-800">Contact / 08</p><h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl">Let’s talk about what you’re building.</h2><p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-800">For software opportunities, research, or a focused project, send me a note.</p></div>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:sharmachannel@gmail.com" className="inline-flex shrink-0 items-center justify-between gap-8 border border-slate-950 bg-slate-950 px-5 py-4 text-sm font-bold text-white transition hover:bg-slate-800">Email me <ArrowUpRight className="h-4 w-4" /></a>
              <a href="/CV.pdf" download className="inline-flex shrink-0 items-center justify-between gap-8 border border-slate-950 px-5 py-4 text-sm font-bold text-slate-950 transition hover:bg-white">Download CV <FileText className="h-4 w-4" /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#111722] text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-[10px] sm:flex-row sm:items-center sm:justify-between sm:px-8"><span>© 2026 Sharmarke Mohamed Ibrahim</span><span>Computer Engineer · Istanbul, Türkiye</span><a href="#home" className="font-semibold text-slate-200 transition hover:text-indigo-300">Back to top ↑</a></div>
      </footer>
    </div>
  );
}
