"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Sarah Thompson",  role: "VP of Engineering",  company: "NovaTech Solutions",   avatar: "ST", grad: "linear-gradient(135deg,#0ea5e9,#38bdf8)", rating: 5, quote: "EAutomata's AI Resume Analyzer cut our hiring screening time from 3 weeks to 2 days. The accuracy is remarkable — it surfaces candidates we would have missed and filters out noise we used to spend hours on." },
  { name: "James Okafor",    role: "CTO",                company: "Meridian Labs",          avatar: "JO", grad: "linear-gradient(135deg,#6366f1,#818cf8)", rating: 5, quote: "The Tenant & License Management system is a game-changer for our SaaS business. We manage 500+ tenants without breaking a sweat. The provisioning automation alone saved us 20 engineering hours per week." },
  { name: "Priya Menon",     role: "CFO",                company: "Bridgepoint Corp",       avatar: "PM", grad: "linear-gradient(135deg,#10b981,#34d399)", rating: 5, quote: "We used to miss vendor payments regularly despite having a whole team tracking them. EAutomata's Bill Reminder Tool gave us full visibility and automated our reminders. Zero missed payments in 6 months." },
  { name: "Daniel Cruz",     role: "Head of Product",    company: "Apex Dynamics",          avatar: "DC", grad: "linear-gradient(135deg,#f59e0b,#fbbf24)", rating: 5, quote: "What impressed me most was the onboarding speed. We were fully automated and integrated with our stack in under a week. The analytics dashboard gives us clarity we never had before." },
  { name: "Lena Hartmann",   role: "Engineering Manager",company: "CloudSphere AG",         avatar: "LH", grad: "linear-gradient(135deg,#ec4899,#f472b6)", rating: 5, quote: "EAutomata has truly raised the bar for what I expect from a SaaS automation platform. The security model is rock-solid, and their support team responds within the hour. Couldn't imagine going back." },
  { name: "Marcus Reid",     role: "COO",                company: "Vertex Capital Group",   avatar: "MR", grad: "linear-gradient(135deg,#8b5cf6,#a78bfa)", rating: 5, quote: "Switching to EAutomata was one of our best operational decisions this year. The real-time analytics surfaced bottlenecks we didn't even know existed. ROI was clear within the first month." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "96px 0", background: "linear-gradient(180deg,#f8faff 0%,#ffffff 100%)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <span style={{ display: "inline-block", padding: "6px 18px", background: "#fdf2f8", border: "1px solid #fbcfe8", color: "#9d174d", fontSize: 13, fontWeight: 700, borderRadius: 999, marginBottom: 16 }}>
            Customer Stories
          </span>
          <h2 style={{ fontFamily: "var(--font-sora),sans-serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, color: "#0f172a", lineHeight: 1.15, marginBottom: 16, letterSpacing: "-1px" }}>
            Trusted by teams who{" "}
            <span style={{ background: "linear-gradient(135deg,#0ea5e9,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>build the future</span>
          </h2>
          <p style={{ maxWidth: 480, margin: "0 auto", fontSize: 17, color: "#475569", lineHeight: 1.7 }}>
            Hear from the engineers, founders, and operators who rely on EAutomata every day.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }} className="testi-grid">
          {testimonials.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              style={{
                background: "#fff", borderRadius: 20, border: "1px solid #e2e8f0",
                padding: 28, display: "flex", flexDirection: "column", gap: 16,
                boxShadow: "0 2px 10px rgba(0,0,0,0.04)", cursor: "default", transition: "box-shadow 0.3s",
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.10)")}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.04)")}
            >
              <Quote size={22} color="#e2e8f0" fill="#e2e8f0" />
              {/* Stars */}
              <div style={{ display: "flex", gap: 3 }}>
                {Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={14} color="#f59e0b" fill="#f59e0b" />)}
              </div>
              {/* Quote */}
              <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.75, flex: 1 }}>&ldquo;{t.quote}&rdquo;</p>
              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 12, borderTop: "1px solid #f1f5f9" }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: t.grad, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
                  {t.avatar}
                </div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>{t.name}</p>
                  <p style={{ fontSize: 12, color: "#94a3b8" }}>{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .testi-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 640px)  { .testi-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
