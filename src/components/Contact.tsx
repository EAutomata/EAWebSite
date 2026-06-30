"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, CheckCircle2, Loader2 } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpwqrzzy";

const contactDetails = [
  { icon: Mail,    label: "Email Us", value: "hello@eautomata.com",   href: "mailto:hello@eautomata.com" },
  { icon: Phone,   label: "Call Us",  value: "+1 (800) EAU-TOMA",     href: "tel:+18003288662" },
  { icon: MapPin,  label: "Office",   value: "San Francisco, CA, USA", href: "#" },
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm({ name: "", email: "", message: "" });
    } catch { setStatus("error"); }
    setTimeout(() => setStatus("idle"), 5000);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 16px", borderRadius: 12, fontSize: 14, color: "#0f172a",
    border: "1.5px solid #e2e8f0", background: "#f8faff", outline: "none", boxSizing: "border-box",
    transition: "border-color 0.2s, box-shadow 0.2s", fontFamily: "inherit",
  };

  return (
    <section id="contact" style={{ padding: "96px 0", background: "linear-gradient(180deg,#f8faff 0%,#ffffff 100%)", position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <span style={{ display: "inline-block", padding: "6px 18px", background: "#f0f9ff", border: "1px solid #bae6fd", color: "#0369a1", fontSize: 13, fontWeight: 700, borderRadius: 999, marginBottom: 16 }}>
            Get In Touch
          </span>
          <h2 style={{ fontFamily: "var(--font-sora),sans-serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, color: "#0f172a", lineHeight: 1.15, marginBottom: 16, letterSpacing: "-1px" }}>
            Ready to{" "}
            <span style={{ background: "linear-gradient(135deg,#0ea5e9,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>start automating?</span>
          </h2>
          <p style={{ maxWidth: 480, margin: "0 auto", fontSize: 17, color: "#475569", lineHeight: 1.7 }}>
            Whether you want a demo, have a question, or are ready to sign up — we&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* 2-col layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }} className="contact-grid">

          {/* Left: info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            <div style={{ borderRadius: 24, background: "linear-gradient(135deg,#0ea5e9,#6366f1)", padding: 36, color: "#fff", boxShadow: "0 16px 48px rgba(14,165,233,0.25)" }}>
              <h3 style={{ fontFamily: "var(--font-sora),sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 12 }}>Let&apos;s build together</h3>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.85)" }}>
                Our team of engineers and product specialists is ready to help you automate your workflows and scale your business. Typical response time: under 2 hours.
              </p>
            </div>
            {contactDetails.map((d) => {
              const Icon = d.icon;
              return (
                <a key={d.label} href={d.href} style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 20px", background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", textDecoration: "none", transition: "box-shadow 0.2s, border-color 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(14,165,233,0.12)"; (e.currentTarget as HTMLElement).style.borderColor = "#bae6fd"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0"; }}
                >
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: "linear-gradient(135deg,#0ea5e9,#6366f1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={18} color="white" />
                  </div>
                  <div>
                    <p style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 2 }}>{d.label}</p>
                    <p style={{ fontSize: 15, fontWeight: 700, color: "#0f172a" }}>{d.value}</p>
                  </div>
                </a>
              );
            })}
          </motion.div>

          {/* Right: form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <form id="contact-form" onSubmit={handleSubmit}
              style={{ background: "#fff", borderRadius: 24, border: "1px solid #e2e8f0", boxShadow: "0 8px 32px rgba(0,0,0,0.07)", padding: 36, display: "flex", flexDirection: "column", gap: 20 }}
            >
              <div>
                <label htmlFor="contact-name" style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#374151", marginBottom: 8 }}>
                  Full Name <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input id="contact-name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="John Smith" style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = "#0ea5e9"; e.target.style.boxShadow = "0 0 0 3px rgba(14,165,233,0.12)"; }}
                  onBlur={e => { e.target.style.borderColor = "#e2e8f0"; e.target.style.boxShadow = "none"; }}
                />
              </div>
              <div>
                <label htmlFor="contact-email" style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#374151", marginBottom: 8 }}>
                  Work Email <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input id="contact-email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@company.com" style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = "#0ea5e9"; e.target.style.boxShadow = "0 0 0 3px rgba(14,165,233,0.12)"; }}
                  onBlur={e => { e.target.style.borderColor = "#e2e8f0"; e.target.style.boxShadow = "none"; }}
                />
              </div>
              <div>
                <label htmlFor="contact-message" style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#374151", marginBottom: 8 }}>
                  Message <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <textarea id="contact-message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell us about your use case, team size, or questions..." style={{ ...inputStyle, resize: "none" }}
                  onFocus={e => { e.target.style.borderColor = "#0ea5e9"; e.target.style.boxShadow = "0 0 0 3px rgba(14,165,233,0.12)"; }}
                  onBlur={e => { e.target.style.borderColor = "#e2e8f0"; e.target.style.boxShadow = "none"; }}
                />
              </div>
              <button id="contact-submit" type="submit" disabled={status === "loading" || status === "success"}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  padding: "14px 24px", borderRadius: 14, fontWeight: 700, fontSize: 15,
                  background: "linear-gradient(135deg,#0ea5e9,#6366f1)", color: "#fff",
                  border: "none", cursor: status === "loading" ? "not-allowed" : "pointer",
                  boxShadow: "0 6px 20px rgba(14,165,233,0.3)", transition: "opacity 0.2s, transform 0.2s",
                  opacity: status === "loading" || status === "success" ? 0.7 : 1, fontFamily: "inherit",
                }}
                onMouseEnter={e => { if (status === "idle") (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; }}
              >
                {status === "loading" && <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />}
                {status === "success" && <CheckCircle2 size={16} />}
                {status === "idle" && <Send size={16} />}
                {status === "idle" && "Send Message"}
                {status === "loading" && "Sending..."}
                {status === "success" && "Message Sent!"}
                {status === "error" && "Retry – Something went wrong"}
              </button>
              {status === "success" && <p style={{ textAlign: "center", color: "#059669", fontSize: 14, fontWeight: 600 }}>✅ Thanks! We&apos;ll be in touch within 2 hours.</p>}
              {status === "error" && <p style={{ textAlign: "center", color: "#dc2626", fontSize: 14, fontWeight: 600 }}>❌ Failed to send. Please try again or email us directly.</p>}
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
