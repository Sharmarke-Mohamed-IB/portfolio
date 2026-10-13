'use client';

import { useState } from 'react';
import { Activity, Cpu, Eye, FlaskConical, Gauge, ScanLine } from 'lucide-react';

const tabs = [
  { id: 'vision', label: 'Edge Vision ANPR', icon: Eye },
  { id: 'concurrency', label: 'C++ Concurrency', icon: Cpu },
  { id: 'clinical', label: 'Clinical ML', icon: FlaskConical },
] as const;

type TabId = (typeof tabs)[number]['id'];

const pipeline = [
  { title: '1080p RTSP Stream', detail: 'Live frame ingestion', time: '12 ms', icon: ScanLine },
  { title: 'YOLOv8 Localization', detail: 'Vehicle and plate bounding boxes', time: '38 ms', icon: Eye },
  { title: 'SORT Tracking', detail: 'Track IDs with missing.py interpolation', time: '14 ms', icon: Activity },
  { title: 'EasyOCR Extraction', detail: 'Plate text recognition', time: '20 ms', icon: Gauge },
];

export default function PipelineVisualizer() {
  const [activeTab, setActiveTab] = useState<TabId>('vision');

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-5 pt-5 sm:px-6">
        <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">Interactive lab</p>
            <h3 className="mt-1 text-xl font-bold tracking-tight text-slate-900">Systems in Practice</h3>
          </div>
          <span className="text-xs text-slate-500">Select a study to inspect its workflow and metrics</span>
        </div>
        <div className="flex gap-1 overflow-x-auto" role="tablist" aria-label="Engineering benchmarks">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              id={`lab-tab-${id}`}
              type="button"
              role="tab"
              aria-selected={activeTab === id}
              aria-controls={`lab-panel-${id}`}
              onClick={() => setActiveTab(id)}
              className={`inline-flex shrink-0 items-center gap-2 border-b-2 px-3 py-3 text-sm font-semibold transition-colors ${activeTab === id ? 'border-indigo-600 text-indigo-700' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />{label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-5 sm:p-6" role="tabpanel" id={`lab-panel-${activeTab}`} aria-labelledby={`lab-tab-${activeTab}`}>
        {activeTab === 'vision' && (
          <div>
            <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
              <div>
                <h4 className="font-bold text-slate-900">Real-time license plate recognition</h4>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-600">An edge pipeline processes each 1080p RTSP frame from localization through text extraction, with interpolation supporting short track gaps.</p>
              </div>
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-right">
                <p className="text-2xl font-black tabular-nums text-emerald-700">84<span className="ml-1 text-sm font-bold">ms</span></p>
                <p className="text-[11px] font-semibold text-emerald-800">total · under 100 ms SLA</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {pipeline.map(({ title, detail, time, icon: Icon }, index) => (
                <div key={title} className="relative rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600"><Icon className="h-4 w-4" /></span>
                    <span className="font-mono text-xs font-bold text-slate-700">{time}</span>
                  </div>
                  <p className="text-sm font-bold text-slate-900">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">{detail}</p>
                  {index < pipeline.length - 1 && <span className="absolute -right-2 top-7 z-10 hidden text-slate-400 xl:block" aria-hidden="true">→</span>}
                </div>
              ))}
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100" aria-label="84 milliseconds of 100 millisecond latency budget">
              <div className="h-full w-[84%] rounded-full bg-indigo-500" />
            </div>
            <div className="mt-1 flex justify-between text-[11px] text-slate-500"><span>0 ms</span><span>Latency budget</span><span>100 ms</span></div>
          </div>
        )}

        {activeTab === 'concurrency' && (
          <div>
            <div className="mb-5">
              <h4 className="font-bold text-slate-900">Parallel server log parsing</h4>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-600">Compare worker configurations while parsing more than one million log lines. The build uses <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs text-indigo-700">-O3 -march=native</code>; shared critical sections use <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs text-indigo-700">std::lock_guard</code>.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[1, 2, 4, 8].map((threads) => (
                <div key={threads} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
                  <p className="text-3xl font-black tabular-nums text-indigo-700">{threads}<span className="ml-1 text-sm font-semibold text-slate-500">T</span></p>
                  <p className="mt-1 text-xs font-semibold text-slate-600">{threads === 1 ? 'Single worker' : `${threads} workers`}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-900 px-4 py-3 text-sm text-slate-100">
              <span><span className="font-semibold text-white">Workload:</span> 1M+ server log lines</span>
              <span className="font-mono text-xs text-indigo-200">C++ · std::thread · AVX2 · -O3</span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-500">Thread counts are shown as benchmark configurations; throughput values depend on the host CPU and workload.</p>
          </div>
        )}

        {activeTab === 'clinical' && (
          <div>
            <div className="mb-5">
              <h4 className="font-bold text-slate-900">Supervised models on clinical diabetes data</h4>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-600">A comparative classification study with imbalanced-class handling using SMOTE. AUC values are surfaced where reported.</p>
            </div>
            <div className="space-y-3">
              {[
                { model: 'Logistic Regression', score: '0.872', width: '87.2%' },
                { model: 'Naive Bayes', score: '0.871', width: '87.1%' },
                { model: 'Random Forest', score: 'Benchmark', width: null },
                { model: 'Support Vector Machine', score: 'Benchmark · SMOTE', width: null },
              ].map(({ model, score, width }) => (
                <div key={model} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-2 rounded-xl border border-slate-200 p-3 sm:grid-cols-[190px_minmax(0,1fr)_auto]">
                  <span className="text-sm font-semibold text-slate-800">{model}</span>
                  {width ? <div className="col-span-2 h-2 overflow-hidden rounded-full bg-slate-100 sm:col-span-1"><div className="h-full rounded-full bg-indigo-500" style={{ width }} /></div> : <div className="col-span-2 hidden h-2 rounded-full bg-slate-100 sm:block" />}
                  <span className="text-xs font-bold tabular-nums text-indigo-700">{score}{width ? ' AUC' : ''}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">Random Forest and SVM are included in the comparison; no AUC figure is shown here.</p>
          </div>
        )}
      </div>
    </section>
  );
}
