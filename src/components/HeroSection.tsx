"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { STATS } from "@/lib/data";

const TERMINAL_LINES = [
  { prompt: true, cmd: "whoami" },
  { prompt: false, out: "// Yash Kiranbhai Patel", color: "text-yellow" },
  { prompt: false, out: "// B.Tech IT, 3rd Year — MBIT", color: "text-[#666]" },
  { prompt: true, cmd: "skills --list" },
  { prompt: false, out: "[ React, Next.js, Node.js, Python ]", color: "text-yellow" },
  { prompt: false, out: "[ MongoDB, Supabase, Gemini AI, OpenAI ]", color: "text-yellow" },
  { prompt: false, out: "[ TensorFlow, EfficientNet, BiLSTM ]", color: "text-yellow" },
  { prompt: true, cmd: "status --current" },
  {
    prompt: false,
    out: "✓ Open for internships & freelance work",
    color: "text-green",
  },
];

const STAT_BG = [
  "bg-yellow text-ink",
  "bg-ink text-paper",
  "bg-ink text-paper",
  "bg-red text-paper",
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen pt-[56px] pb-[30px] grid grid-cols-1 lg:grid-cols-2 border-b-[3px] border-ink"
    >
      {/* ── LEFT ─────────────────────────────── */}
      <div className="border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-ink p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 bg-ink text-yellow font-mono text-[0.7rem] font-medium px-3 py-1.5 border-[3px] border-ink mb-6 w-fit">
            <span
              className="w-2 h-2 bg-green rounded-full animate-blink flex-shrink-0"
              aria-hidden="true"
            />
            SYSTEM STATUS: ONLINE // OPEN FOR WORK
          </div>

          {/* Name with glitch */}
          <h1
            className="glitch font-bold leading-none tracking-[-3px] mb-3"
            style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
            data-text="YASH PATEL"
          >
            YASH
            <br />
            <span
              className="text-yellow"
              style={{ WebkitTextStroke: "2px #0a0a0a" }}
            >
              PATEL
            </span>
          </h1>

          {/* Role */}
          <p className="font-mono text-[#444] mb-6 border-l-[5px] border-yellow pl-4"
            style={{ fontSize: "clamp(0.95rem, 2vw, 1.25rem)" }}>
            &gt;_ AI &amp; Full-Stack Developer
          </p>

          {/* Description */}
          <p className="text-[1rem] leading-relaxed text-[#333] max-w-md mb-8">
            B.Tech IT @ MBIT. I build AI-powered systems that solve real
            problems — from civic infrastructure platforms to cognitive load
            estimators using deep learning.{" "}
            <strong>I build things that actually work.</strong>
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="bg-ink text-yellow border-[3px] border-ink px-5 sm:px-6 py-3 font-mono font-bold text-[0.85rem] uppercase tracking-widest shadow-brutal transition-all duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg"
            >
              VIEW WORK
            </Link>
            <a
              href="/Yash_Patel_Resume.pdf"
              download
              className="bg-paper text-ink border-[3px] border-ink px-5 sm:px-6 py-3 font-mono font-bold text-[0.85rem] uppercase tracking-widest shadow-brutal transition-all duration-100 hover:bg-yellow hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg"
            >
              DOWNLOAD CV
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── RIGHT ────────────────────────────── */}
      <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center gap-6">
        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-2 gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              className={`stat-card border-[3px] border-ink p-4 sm:p-6 shadow-brutal transition-all duration-100 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg cursor-default ${STAT_BG[i]}`}
            >
              <div className="font-mono font-bold leading-none"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
                {stat.num}
              </div>
              <div className="text-[0.7rem] sm:text-[0.75rem] font-medium uppercase tracking-widest mt-1 opacity-70">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Terminal */}
        <motion.div
          className="border-[3px] border-ink shadow-brutal bg-ink"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Terminal title bar */}
          <div className="bg-[#1a1a1a] border-b-2 border-[#333] px-4 py-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            <span className="font-mono text-[0.7rem] text-[#666] ml-2">
              yash@MBIT: ~
            </span>
          </div>
          {/* Terminal body */}
          <div className="p-4 font-mono text-[0.75rem] sm:text-[0.78rem] leading-loose">
            {TERMINAL_LINES.map((line, i) =>
              line.prompt ? (
                <div key={i}>
                  <span className="text-green">yash@MBIT</span>
                  <span className="text-[#666]">:</span>
                  <span className="text-blue">~</span>
                  <span className="text-[#666]">$</span>{" "}
                  <span className="text-paper">{line.cmd}</span>
                </div>
              ) : (
                <div key={i} className={line.color}>
                  {line.out}
                </div>
              )
            )}
            <div className="text-[#666] mt-1">
              <span className="text-paper">█</span>
              <span className="animate-blink inline-block text-paper">_</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
