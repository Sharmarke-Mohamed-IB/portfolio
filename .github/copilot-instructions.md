# Codex Instructions for Portfolio Development

## Technical Rules
- Framework: Next.js 16 (App Router), TypeScript (strict).
- Styling: Tailwind CSS v4 via `@tailwindcss/postcss`. 
- Global CSS: `src/app/globals.css` uses `@import "tailwindcss";`. Do NOT use `@theme inline` or deprecated `@tailwind base/components/utilities`.
- Icons: Standard UI icons from `lucide-react`. Never import brand icons like `Github` or `Linkedin` from `lucide-react` (they do not exist). Use inline SVGs with explicit styles: `style={{ width: '20px', height: '20px', flexShrink: 0 }}`.

## Engineering Profile
- Candidate: Sharmarke Mohamed Ibrahim, Computer Engineering Senior at Istanbul Arel University.
- Focus Areas: 
  1. Low-Level Systems & Hardware Vectorization (C++, AVX2 SIMD, POSIX Threads).
  2. Applied Computer Vision & Edge AI (YOLOv8, SORT tracking, EasyOCR ANPR at <100ms latency, MediaPipe).
  3. Scalable Web Architectures (FastAPI, Sentence-Transformers 384-dim semantic matching, Java Spring Boot, Docker).
  4. Honors: 1st Place at Bursa AKOM Engineering Challenge, Defense Liaison at SAHA EXPO 2026.

## Design Aesthetic
- Clean, high-density academic and research lab aesthetic.
- Color palette: Slate (`bg-slate-50`, `text-slate-900`) and Indigo (`text-indigo-600`, `bg-indigo-50`).
- No flashy non-functional animations; focus on clean typography, metrics chips, and interactive data visualizers.