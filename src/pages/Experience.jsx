// src/pages/Experience.jsx

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import experience from "../data/experience";
import Top from "../components/Navbar/Top";
import Left from "../components/Navbar/Left";

// ── Badge styles per type ─────────────────────────────────────────────────────
const badgeStyle = {
  "FULL-TIME": "border-white/20 text-white/60",
  CONTRACT: "border-amber-400/30 text-amber-300/70",
  INTERNSHIP: "border-sky-400/30 text-sky-300/70",
  "PART-TIME": "border-green-400/30 text-green-300/70",
};

// ── Left Card ─────────────────────────────────────────────────────────────────
const ExpCard = ({ exp, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`
      relative cursor-pointer rounded-xl p-5 transition-all duration-300 border ml-10
      ${
        isActive
          ? "bg-white/[0.07] border-white/20"
          : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/15"
      }
    `}
  >
    {/* Active accent */}
    {isActive && (
      <motion.div
        layoutId="activeBar"
        className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-white/60"
      />
    )}

    <div className="pl-3">
      {/* Company + badge */}
      <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
        <h2 className="font-serif text-base sm:text-lg font-bold text-white leading-snug">
          {exp.company}
        </h2>
        <span
          className={`text-[9px] tracking-widest uppercase border rounded-full px-2.5 py-0.5 font-medium ${badgeStyle[exp.type] || "border-white/20 text-white/50"}`}
        >
          {exp.type}
        </span>
      </div>

      {/* Role */}
      <p className="text-sm font-semibold text-white/75 mb-0.5">{exp.role}</p>

      {/* Duration */}
      <p className="text-xs text-white/45 mb-0.5">{exp.duration}</p>

      {/* Location */}
      <p className="text-[11px] text-white/30 italic mb-4">{exp.location}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5">
        {exp.skills.map((s) => (
          <span
            key={s}
            className="text-[10px] bg-white/[0.08] text-white/60 rounded-md px-2 py-0.5 font-medium"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// ── Right Points Panel ────────────────────────────────────────────────────────
const PointsPanel = ({ exp }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={exp.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="py-10 px-6 sm:px-10 md:px-12"
    >
      <ul className="space-y-6">
        {exp.points.map((point, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.07, duration: 0.28 }}
            className="flex items-start gap-4"
          >
            <span className="mt-[5px] flex-shrink-0 text-white/35 text-[10px]">
              ▶
            </span>
            <p className="text-sm sm:text-base leading-relaxed text-white/75 font-light">
              {point}
            </p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </AnimatePresence>
);

// ── Mobile: vertical stacked ──────────────────────────────────────────────────
const MobileExperience = () => {
  const [openId, setOpenId] = useState(experience[0].id);

  return (
    <div className="flex flex-col gap-4 px-4 py-6">
      {experience.map((exp) => (
        <div key={exp.id}>
          <ExpCard
            exp={exp}
            isActive={openId === exp.id}
            onClick={() => setOpenId(openId === exp.id ? null : exp.id)}
          />
          <AnimatePresence>
            {openId === exp.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden"
              >
                <div className="bg-white/[0.03] border border-white/[0.06] border-t-0 rounded-b-xl ml-10">
                  <PointsPanel exp={exp} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

// ── Experience Page ───────────────────────────────────────────────────────────
const Experience = () => {
  const [activeId, setActiveId] = useState(experience[0].id);
  const activeExp = experience.find((e) => e.id === activeId);

  return (
    <div className="relative w-full h-screen bg-[#0d0d0d] overflow-hidden flex flex-col">
      {/* ── Fixed Navbars ── */}
      <div className="navigation z-50">
        <Top />
        <Left className="text-white"/>
      </div>

      {/* Ghost heading */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 font-serif font-black text-transparent whitespace-nowrap"
        style={{
          fontSize: "clamp(36px, 10vw, 130px)",
          WebkitTextStroke: "1px rgba(255,255,255,0.05)",
          letterSpacing: "-0.02em",
        }}
      >
        EXPERIENCE
      </div>

      {/* ── MOBILE (< md): Top nav pushes content down, stacked accordion ── */}
      <div className="md:hidden relative z-10 overflow-y-auto h-full pt-16">
        <MobileExperience />
      </div>

      {/* ── DESKTOP (md+): Two panel side-by-side, both independently scrollable ── */}
      <div className="hidden md:flex flex-row h-full pt-16 pl-20 relative z-10">
        {/* LEFT — scrollable card list */}
        <div
          className="w-[400px] lg:w-[420px] xl:w-[460px] flex-shrink-0 overflow-y-auto h-full border-r border-white/[0.07] px-6 py-10 space-y-4
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {experience.map((exp) => (
            <ExpCard
              key={exp.id}
              exp={exp}
              isActive={activeId === exp.id}
              onClick={() => setActiveId(exp.id)}
            />
          ))}
          {/* bottom breathing room */}
          <div className="h-10" />
        </div>

        {/* RIGHT — scrollable points */}
        <div className="flex-1 overflow-y-auto h-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden flex items-start">
          <div className="w-full max-w-2xl">
            <PointsPanel exp={activeExp} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
