"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Bell, Building2 } from "lucide-react";

const products = [
  {
    id: "ai-resume-analyzer",
    icon: FileText,
    tag: "AI · Hiring",
    title: "AI Resume Analyzer",
    description: "Automatically parse, score, and rank candidate resumes against job descriptions using advanced NLP. Cut screening time by 90% and eliminate unconscious bias from your hiring pipeline.",
    features: ["Smart JD matching & scoring", "Skill gap identification", "Bulk PDF processing", "ATS-ready export"],
    grad: "linear-gradient(135deg,#0ea5e9,#38bdf8)", tagBg: "#f0f9ff", tagColor: "#0369a1", dot: "#0ea5e9",
  },
  {
    id: "bill-reminder",
    icon: Bell,
    tag: "Finance · Productivity",
    title: "Bill Reminder Tool",
    description: "Never miss a payment again. Intelligent bill tracking with multi-channel reminders (email, SMS, push), recurring schedule management, and integrated spend analytics.",
    features: ["Multi-channel smart alerts", "Recurring payment schedules", "Spend analytics dashboard", "Calendar integrations"],
    grad: "linear-gradient(135deg,#6366f1,#818cf8)", tagBg: "#eef2ff", tagColor: "#4338ca", dot: "#6366f1",
  },
  {
    id: "tenant-license-mgmt",
    icon: Building2,
    tag: "Enterprise · SaaS",
    title: "Tenant & License Management",
    description: "Full-stack multi-tenancy and license lifecycle management for SaaS businesses. Provision tenants, track license seat utilisation, and enforce compliance — all from one control panel.",
    features: ["Multi-tenant provisioning", "Seat & license tracking", "Role-based access control", "Compliance reporting"],
    grad: "linear-gradient(135deg,#10b981,#34d399)", tagBg: "#f0fdf4", tagColor: "#065f46", dot: "#10b981",
  },
];

export default function Products() {
  return (
    <section id="products" style={{ padding: "96px 0", background: "linear-gradient(180deg,#f8faff 0%,#ffffff 100%)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <span style={{ display: "inline-block", padding: "6px 18px", background: "#eef2ff", border: "1px solid #c7d2fe", color: "#4338ca", fontSize: 13, fontWeight: 700, borderRadius: 999, marginBottom: 16 }}>
            Our Products
          </span>
          <h2 style={{ fontFamily: "var(--font-sora),sans-serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, color: "#0f172a", lineHeight: 1.15, marginBottom: 16, letterSpacing: "-1px" }}>
            Solutions built for{" "}
            <span style={{ background: "linear-gradient(135deg,#0ea5e9,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>real engineering problems</span>
          </h2>
          <p style={{ maxWidth: 560, margin: "0 auto", fontSize: 17, color: "#475569", lineHeight: 1.7 }}>
            Three focused SaaS products designed to eliminate friction in hiring, finance, and enterprise management workflows.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }} className="products-grid">
          {products.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div key={p.id} id={p.id}
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                style={{
                  background: "#fff", borderRadius: 24, border: "1px solid #e2e8f0",
                  padding: 32, display: "flex", flexDirection: "column",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)", transition: "box-shadow 0.3s, border-color 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 20px 48px rgba(0,0,0,0.10)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)"; }}
              >
                {/* Icon */}
                <div style={{ width: 56, height: 56, borderRadius: 18, background: p.grad, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, boxShadow: "0 6px 18px rgba(0,0,0,0.12)" }}>
                  <Icon size={24} color="white" />
                </div>
                {/* Tag */}
                <span style={{ display: "inline-block", padding: "4px 12px", background: p.tagBg, color: p.tagColor, fontSize: 11, fontWeight: 700, borderRadius: 999, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 14, width: "fit-content" }}>
                  {p.tag}
                </span>
                {/* Title */}
                <h3 style={{ fontSize: 20, fontWeight: 800, color: "#0f172a", marginBottom: 12, lineHeight: 1.3 }}>{p.title}</h3>
                {/* Description */}
                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.75, marginBottom: 20, flex: 1 }}>{p.description}</p>
                {/* Features */}
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 8 }}>
                  {p.features.map((feat) => (
                    <li key={feat} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, fontWeight: 600, color: "#374151" }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: p.dot, flexShrink: 0 }} />
                      {feat}
                    </li>
                  ))}
                </ul>
                {/* CTA */}
                <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 700, color: p.tagColor, textDecoration: "none" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.textDecoration = "underline")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.textDecoration = "none")}
                >
                  Explore Product <ArrowRight size={14} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .products-grid { grid-template-columns: 1fr !important; max-width: 560px; margin: 0 auto; } }
      `}</style>
    </section>
  );
}
