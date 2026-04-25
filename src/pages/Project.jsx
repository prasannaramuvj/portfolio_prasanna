 
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import worksData from "../data/worksData";
import Top from "../components/Navbar/Top";
import Left from "../components/Navbar/Left";
 
// ── GitHub SVG icon ───────────────────────────────────────────────────────────
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);
 
// ── Deploy / External link SVG ────────────────────────────────────────────────
const DeployIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
 
// ── WorkCard with flip ────────────────────────────────────────────────────────
const WorkCard = ({ project, index }) => {
  const [flipped, setFlipped] = useState(false);
 
  const cardBase = `
    flex-shrink-0
    w-[300px] h-[280px]
    sm:w-[320px] sm:h-[310px]
    md:w-[320px] md:h-[340px]
    snap-start
    cursor-pointer
    pl-15
  `;
 
  const faceBase = `
    absolute inset-0
    rounded-tl-2xl rounded-br-2xl
    flex flex-col
    overflow-hidden
    backface-hidden
  `;
 
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={cardBase}
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped((f) => !f)}
    >
      {/* Inner wrapper that rotates */}
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className={`${faceBase} bg-[#f0ede8] p-5 sm:p-6 md:p-7 justify-between shadow-md`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <h2 className="font-serif text-base sm:text-lg md:text-2xl font-bold text-[#111] leading-tight">
            {project.title}
          </h2>
 
          <div>
            <p className="text-[11px] sm:text-xs md:text-sm text-[#444] font-light leading-relaxed text-center mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] sm:text-[10px] md:text-xs font-medium uppercase tracking-wide bg-black/10 text-[#333] rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-[10px] text-[#999] mt-3 text-center tracking-widest uppercase">
              tap to flip
            </p>
          </div>
        </div>
 
        {/* ── BACK ── */}
        <div
          className={`${faceBase} bg-[#1a1a1a] justify-between`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Project image */}
          <div className="w-full flex-1 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-80"
              draggable={false}
            />
          </div>
 
          {/* Links */}
          <div className="p-4 flex flex-col gap-2 bg-[#1a1a1a]">
            <p className="font-serif text-sm font-bold text-white/80 truncate mb-1">
              {project.title}
            </p>
 
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-lg px-3 py-2 transition-colors duration-200"
            >
              <GithubIcon />
              View on GitHub
            </a>
 
            {project.deploy ? (
              <a
                href={project.deploy}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 bg-[#f0ede8]/90 hover:bg-[#f0ede8] text-[#111] text-xs font-medium rounded-lg px-3 py-2 transition-colors duration-200"
              >
                <DeployIcon />
                Live Demo
              </a>
            ) : (
              <span className="flex items-center gap-2 bg-white/5 text-white/30 text-xs font-medium rounded-lg px-3 py-2 cursor-not-allowed">
                <DeployIcon />
                No live demo
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
 
// ── Work Page ─────────────────────────────────────────────────────────────────
const Work = () => {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftRef = useRef(0);
 
  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing";
  };
  const onMouseLeave = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };
  const onMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };
  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeftRef.current - (x - startX.current) * 1.5;
  };
 
  return (
    <div className="relative w-full h-screen overflow-hidden">
 
      {/* Navbars */}
      <div className="navigation z-50">
        <Top />
        <Left />
      </div>
 
      {/* Ghost WORK */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 font-serif font-black leading-none text-transparent ml-10"
        style={{
          fontSize: "clamp(80px, 20vw, 220px)",
          WebkitTextStroke: "1px rgba(255,255,255,0.07)",
        }}
      >
        WORK
      </div>
 
      {/* Cards */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className="
            flex
            gap-3 sm:gap-4 md:gap-6
            overflow-x-auto overflow-y-hidden
            snap-x snap-mandatory
            cursor-grab
            w-full
            px-4 sm:px-8 md:px-20
            pb-1
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {worksData.map((project, i) => (
            <WorkCard key={project.id} project={project} index={i} />
          ))}
          <div className="flex-shrink-0 w-2 sm:w-4 md:w-10" aria-hidden="true" />
        </div>
      </div>
 
      {/* Swipe hint */}
      <p
        aria-hidden="true"
        className="hidden sm:block absolute bottom-5 right-8 md:right-12 font-serif font-black text-5xl md:text-7xl text-white/10 pointer-events-none select-none z-5"
      >
        Swipe
      </p>
      <span className="hidden sm:block absolute bottom-8 right-7 w-2 h-2 rounded-full bg-white/25 animate-pulse z-10" />
      <p className="sm:hidden absolute bottom-4 left-1/2 -translate-x-1/2 text-white/30 text-xs tracking-widest uppercase z-10">
        ← swipe →
      </p>
    </div>
  );
};
 
export default Work;