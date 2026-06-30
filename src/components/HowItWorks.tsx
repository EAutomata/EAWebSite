"use client";

import { motion } from "framer-motion";
import { UserPlus, Settings2, Zap, BarChart2 } from "lucide-react";

const steps = [
  { step: "01", icon: UserPlus,   title: "Create Your Account",    desc: "Sign up in under two minutes. Choose your product, set up your workspace, and invite your team — no credit card required.", grad: "linear-gradient(135deg,#0ea5e9,#38bdf8)" },
  { step: "02", icon: Settings2,  title: "Connect & Configure",     desc: "Integrate with your existing tools via our no-code connectors or developer API. Configure automation rules to match your workflow.", grad: "linear-gradient(135deg,#6366f1,#818cf8)" },
  { step: "03", icon: Zap,        title: "Automate & Execute",      desc: "Let EAutomata's AI engine handle repetitive tasks in real time. Triggers fire automatically and results appear in your dashboard instantly.", grad: "linear-gradient(135deg,#10b981,#34d399)" },
  { step: "04", icon: BarChart2,  title: "Analyze & Optimize",      desc: "Review rich analytics to understand automation impact. Use AI recommendations to continuously refine and improve your processes.", grad: "linear-gradient(135deg,#f59e0b,#fbbf24)" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: "96px 0", background: "#ffffff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <span style={{ display: "inline-block", padding: "6px 18px", background: "#f0fdf4", border: "1px solid #a7f3d0", color: "#065f46", fontSize: 13, fontWeight: 700, borderRadius: 999, marginBottom: 16 }}>
            How It Works
          </span>
          <h2 style={{ fontFamily: "var(--font-sora),sans-serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, color: "#0f172a", lineHeight: 1.15, marginBottom: 16, letterSpacing: "-1px" }}>
            Up and running in{" "}
            <span style={{ background: "linear-gradient(135deg,#0ea5e9,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>four simple steps</span>
          </h2>
          <p style={{ maxWidth: 480, margin: "0 auto", fontSize: 17, color: "#475569", lineHeight: 1.7 }}>
            From signup to full automation in minutes — our intuitive platform removes all the heavy lifting.
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32, position: "relative" }} className="steps-grid">
          {/* Connector line (desktop) */}
          <div aria-hidden style={{ position: "absolute", top: 36, left: "12.5%", right: "12.5%", height: 2, background: "linear-gradient(90deg,#bae6fd,#c7d2fe,#a7f3d0,#fde68a)", borderRadius: 2, pointerEvents: "none" }} className="step-connector" />

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.step}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative" }}
                className="step-item"
              >
                {/* Icon container */}
                <div style={{ position: "relative", zIndex: 2, marginBottom: 20 }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: 20, background: s.grad,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)", transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.1)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(0,0,0,0.2)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)"; }}
                  >
                    <Icon size={28} color="white" />
                  </div>
                  {/* Step badge */}
                  <span style={{ position: "absolute", top: -8, right: -8, width: 24, height: 24, borderRadius: "50%", background: "#fff", border: "2px solid #e2e8f0", fontSize: 10, fontWeight: 700, color: "#64748b", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 6px rgba(0,0,0,0.08)" }}>
                    {s.step}
                  </span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: "#0f172a", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7, maxWidth: 200, margin: "0 auto" }}>{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .steps-grid { grid-template-columns: repeat(2,1fr) !important; } .step-connector { display: none !important; } }
        @media (max-width: 640px)  { .steps-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
