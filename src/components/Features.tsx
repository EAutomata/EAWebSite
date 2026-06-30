"use client";

import { motion } from "framer-motion";
import { Brain, Cloud, ShieldCheck, BarChart3, Rocket, RefreshCcw } from "lucide-react";

const features = [
  { icon: Brain,        title: "AI-Powered Automation",    desc: "Harness large language models and ML pipelines to automate complex decision-making and repetitive engineering workflows at scale.", grad: "linear-gradient(135deg,#0ea5e9,#38bdf8)", bg: "#f0f9ff", border: "#bae6fd" },
  { icon: Cloud,        title: "Scalable Cloud Solutions",  desc: "Built on multi-tenant cloud architecture designed to handle millions of requests. Auto-scale seamlessly as your team and data grow.", grad: "linear-gradient(135deg,#6366f1,#818cf8)", bg: "#eef2ff", border: "#c7d2fe" },
  { icon: ShieldCheck,  title: "Secure Architecture",       desc: "Enterprise-grade security with end-to-end encryption, role-based access control, and SOC 2 compliant infrastructure.", grad: "linear-gradient(135deg,#10b981,#34d399)", bg: "#f0fdf4", border: "#a7f3d0" },
  { icon: BarChart3,    title: "Real-Time Analytics",       desc: "Live dashboards and actionable insights into system performance, user behaviour, and automation efficiency — all in one place.", grad: "linear-gradient(135deg,#8b5cf6,#a78bfa)", bg: "#f5f3ff", border: "#ddd6fe" },
  { icon: Rocket,       title: "Rapid Deployment",          desc: "From zero to production in minutes. Pre-built integrations, webhooks, and an intuitive API make onboarding completely effortless.", grad: "linear-gradient(135deg,#f59e0b,#fbbf24)", bg: "#fffbeb", border: "#fde68a" },
  { icon: RefreshCcw,   title: "Continuous Updates",        desc: "Our AI models are retrained continuously so your tools keep improving without any extra work from your team.", grad: "linear-gradient(135deg,#ec4899,#f472b6)", bg: "#fdf2f8", border: "#fbcfe8" },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: "96px 0", background: "#ffffff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <span style={{ display: "inline-block", padding: "6px 18px", background: "#f0f9ff", border: "1px solid #bae6fd", color: "#0369a1", fontSize: 13, fontWeight: 700, borderRadius: 999, marginBottom: 16 }}>
            Platform Features
          </span>
          <h2 style={{ fontFamily: "var(--font-sora),sans-serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, color: "#0f172a", lineHeight: 1.15, marginBottom: 16, letterSpacing: "-1px" }}>
            Everything you need to{" "}
            <span style={{ background: "linear-gradient(135deg,#0ea5e9,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>automate smarter</span>
          </h2>
          <p style={{ maxWidth: 560, margin: "0 auto", fontSize: 17, color: "#475569", lineHeight: 1.7 }}>
            A comprehensive suite of AI and automation tools built for modern engineering teams who demand reliability, speed, and intelligence.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="features-grid">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div key={f.title}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                style={{
                  background: f.bg, border: `1px solid ${f.border}`,
                  borderRadius: 20, padding: 28,
                  cursor: "default", transition: "box-shadow 0.3s",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.10)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)")}
              >
                <div style={{ width: 48, height: 48, borderRadius: 14, background: f.grad, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, boxShadow: "0 4px 14px rgba(0,0,0,0.12)" }}>
                  <Icon size={22} color="white" />
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0f172a", marginBottom: 10 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7 }}>{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .features-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 640px)  { .features-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
