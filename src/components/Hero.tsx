"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: "easeOut" as const },
  }),
};

const stats = [
  { label: "Engineers Automated", value: "12,000+" },
  { label: "Products Shipped", value: "3" },
  { label: "Uptime SLA", value: "99.9%" },
  { label: "Countries Served", value: "28" },
];

export default function Hero() {
  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden", paddingTop: 64 }} className="bg-grid">
      {/* Background orbs */}
      <div aria-hidden style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,233,0.15), rgba(99,102,241,0.08))", filter: "blur(60px)", pointerEvents: "none" }} />
      <div aria-hidden style={{ position: "absolute", bottom: -80, left: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.12), rgba(14,165,233,0.06))", filter: "blur(60px)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: 1280, margin: "0 auto", padding: "80px 32px", textAlign: "center" }}>

        {/* Badge */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 18px", background: "linear-gradient(135deg, #f0f9ff, #eef2ff)", border: "1px solid #bae6fd", borderRadius: 999, fontSize: 13, fontWeight: 600, color: "#0369a1", marginBottom: 28 }}
        >
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#0ea5e9", display: "inline-block" }} />
          AI-Powered Engineering Automation Platform
        </motion.div>

        {/* Headline */}
        <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="show"
          style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 900, lineHeight: 1.08, letterSpacing: "-2px", color: "#0f172a", marginBottom: 24, textAlign: "center" }}
        >
          Automating the{" "}
          <span style={{ background: "linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Future of Engineering
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="show"
          style={{ maxWidth: 620, margin: "0 auto 36px", fontSize: "clamp(16px, 2vw, 20px)", color: "#475569", lineHeight: 1.7, textAlign: "center" }}
        >
          EAutomata delivers intelligent AI + automation SaaS solutions that empower engineering teams to move faster, scale effortlessly, and eliminate repetitive workflows — so your people can focus on what actually matters.
        </motion.p>

        {/* CTAs */}
        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show"
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 56 }}
        >
          <a id="hero-get-started" href="#products" style={{
            display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px",
            background: "linear-gradient(135deg, #0ea5e9, #6366f1)", color: "white",
            fontWeight: 700, fontSize: 16, borderRadius: 16, textDecoration: "none",
            boxShadow: "0 8px 24px rgba(14,165,233,0.35)", transition: "transform 0.2s, box-shadow 0.2s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(14,165,233,0.45)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(14,165,233,0.35)"; }}
          >
            Get Started <ArrowRight size={18} />
          </a>
          <a id="hero-book-demo" href="#contact" style={{
            display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px",
            background: "white", border: "1.5px solid #e2e8f0", color: "#374151",
            fontWeight: 700, fontSize: 16, borderRadius: 16, textDecoration: "none",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)", transition: "transform 0.2s, border-color 0.2s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.borderColor = "#0ea5e9"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0"; }}
          >
            <PlayCircle size={18} color="#0ea5e9" /> Book a Demo
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="show"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, maxWidth: 680, margin: "0 auto" }}
          className="stats-grid"
        >
          {stats.map((s) => (
            <div key={s.label} style={{
              background: "rgba(255,255,255,0.75)", backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.9)", borderRadius: 16,
              padding: "16px 12px", textAlign: "center",
              boxShadow: "0 2px 12px rgba(14,165,233,0.06)",
            }}>
              <p style={{ fontSize: 24, fontWeight: 800, background: "linear-gradient(135deg, #0ea5e9, #6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontFamily: "var(--font-sora), sans-serif" }}>
                {s.value}
              </p>
              <p style={{ fontSize: 11, color: "#64748b", marginTop: 4, fontWeight: 500 }}>
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
          style={{ marginTop: 48, color: "#94a3b8", display: "flex", justifyContent: "center" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) { .stats-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}
