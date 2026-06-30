"use client";

import { motion } from "framer-motion";
import { Check, Zap, Building2, Rocket } from "lucide-react";

const plans = [
  {
    id: "basic", icon: Zap, name: "Basic", price: "$29", period: "/month",
    desc: "Perfect for individuals and small teams getting started with automation.",
    grad: "linear-gradient(135deg,#0ea5e9,#38bdf8)", popular: false,
    features: ["1 active product", "Up to 5 users", "1,000 automation runs/mo", "Basic analytics", "Email support", "API access", "Community forum"],
    ctaBg: "transparent", ctaBorder: "#0ea5e9", ctaColor: "#0369a1", ctaText: "Start Free Trial",
  },
  {
    id: "pro", icon: Rocket, name: "Pro", price: "$89", period: "/month",
    desc: "For scaling teams who need more power, integrations, and insights.",
    grad: "linear-gradient(135deg,#6366f1,#8b5cf6)", popular: true,
    features: ["3 active products", "Up to 50 users", "50,000 automation runs/mo", "Advanced analytics & reports", "Priority email & chat support", "Full API + webhook access", "Custom domains", "Team roles & permissions"],
    ctaBg: "linear-gradient(135deg,#6366f1,#8b5cf6)", ctaBorder: "transparent", ctaColor: "#fff", ctaText: "Get Started – Most Popular",
  },
  {
    id: "enterprise", icon: Building2, name: "Enterprise", price: "Custom", period: "",
    desc: "Tailored solutions for large organisations with complex requirements.",
    grad: "linear-gradient(135deg,#475569,#334155)", popular: false,
    features: ["Unlimited products", "Unlimited users", "Unlimited automation runs", "Custom AI model training", "Dedicated success manager", "SLA & uptime guarantees", "SSO / SAML integration", "On-premise deployment option", "Security audit & compliance"],
    ctaBg: "transparent", ctaBorder: "#e2e8f0", ctaColor: "#374151", ctaText: "Contact Sales",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: "96px 0", background: "linear-gradient(180deg,#ffffff 0%, #f8faff 100%)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 900, height: 300, background: "radial-gradient(ellipse at center, rgba(99,102,241,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <span style={{ display: "inline-block", padding: "6px 18px", background: "#f5f3ff", border: "1px solid #ddd6fe", color: "#5b21b6", fontSize: 13, fontWeight: 700, borderRadius: 999, marginBottom: 16 }}>
            Transparent Pricing
          </span>
          <h2 style={{ fontFamily: "var(--font-sora),sans-serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, color: "#0f172a", lineHeight: 1.15, marginBottom: 16, letterSpacing: "-1px" }}>
            Simple plans,{" "}
            <span style={{ background: "linear-gradient(135deg,#0ea5e9,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>powerful results</span>
          </h2>
          <p style={{ maxWidth: 480, margin: "0 auto", fontSize: 17, color: "#475569", lineHeight: 1.7 }}>
            All plans include a 14-day free trial. No credit card required. Cancel anytime.
          </p>
        </motion.div>

        {/* Plans */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28, alignItems: "start" }} className="pricing-grid">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.div key={plan.id} id={`pricing-${plan.id}`}
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                style={{
                  background: "#fff", borderRadius: 24, padding: 32,
                  border: plan.popular ? "2px solid #6366f1" : "1px solid #e2e8f0",
                  boxShadow: plan.popular ? "0 20px 60px rgba(99,102,241,0.18)" : "0 2px 12px rgba(0,0,0,0.05)",
                  position: "relative", transition: "box-shadow 0.3s",
                  transform: plan.popular ? "scale(1.02)" : "scale(1)",
                  display: "flex", flexDirection: "column",
                }}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div style={{ position: "absolute", top: -16, left: "50%", transform: "translateX(-50%)", padding: "6px 20px", background: "linear-gradient(135deg,#6366f1,#8b5cf6)", color: "#fff", fontWeight: 700, fontSize: 12, borderRadius: 999, whiteSpace: "nowrap", boxShadow: "0 4px 14px rgba(99,102,241,0.4)" }}>
                    🚀 Most Popular
                  </div>
                )}

                {/* Icon + Name */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: plan.grad, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.12)" }}>
                    <Icon size={18} color="white" />
                  </div>
                  <span style={{ fontSize: 18, fontWeight: 800, color: "#0f172a" }}>{plan.name}</span>
                </div>

                {/* Price */}
                <div style={{ marginBottom: 12 }}>
                  <span style={{ fontFamily: "var(--font-sora),sans-serif", fontSize: 42, fontWeight: 900, color: "#0f172a" }}>{plan.price}</span>
                  <span style={{ fontSize: 14, color: "#94a3b8" }}>{plan.period}</span>
                </div>
                <p style={{ fontSize: 14, color: "#64748b", marginBottom: 24, lineHeight: 1.65 }}>{plan.desc}</p>
                <div style={{ height: 1, background: "#f1f5f9", marginBottom: 24 }} />

                {/* Features */}
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#374151" }}>
                      <span style={{ width: 20, height: 20, borderRadius: "50%", background: plan.grad, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Check size={11} color="white" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a href="#contact" style={{
                  display: "block", textAlign: "center", padding: "13px 24px",
                  borderRadius: 14, fontWeight: 700, fontSize: 14, textDecoration: "none",
                  background: plan.ctaBg, border: `1.5px solid ${plan.ctaBorder}`,
                  color: plan.ctaColor, transition: "transform 0.2s, opacity 0.2s",
                  boxShadow: plan.popular ? "0 6px 20px rgba(99,102,241,0.3)" : "none",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.88"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = ""; }}
                >
                  {plan.ctaText}
                </a>
              </motion.div>
            );
          })}
        </div>

        <p style={{ textAlign: "center", color: "#94a3b8", fontSize: 13, marginTop: 40 }}>
          All prices in USD. Annual billing available at 20% discount.{" "}
          <a href="#contact" style={{ color: "#0ea5e9" }}>Contact us</a> for volume pricing.
        </p>
      </div>

      <style>{`
        @media (max-width: 1024px) { .pricing-grid { grid-template-columns: 1fr !important; max-width: 480px; margin: 0 auto; } }
      `}</style>
    </section>
  );
}
