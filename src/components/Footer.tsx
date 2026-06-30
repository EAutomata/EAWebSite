"use client";

import { Zap, Twitter, Linkedin, Github, Youtube } from "lucide-react";

const footerLinks = {
  Products: [
    { label: "AI Resume Analyzer",   href: "#ai-resume-analyzer" },
    { label: "Bill Reminder Tool",   href: "#bill-reminder" },
    { label: "Tenant Management",    href: "#tenant-license-mgmt" },
    { label: "Roadmap",              href: "#" },
  ],
  Company: [
    { label: "About",    href: "#" },
    { label: "Blog",     href: "#" },
    { label: "Careers",  href: "#" },
    { label: "Press Kit",href: "#" },
  ],
  Support: [
    { label: "Documentation", href: "#" },
    { label: "API Reference",  href: "#" },
    { label: "Status Page",    href: "#" },
    { label: "Contact Us",     href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy",   href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy",    href: "#" },
    { label: "Security",         href: "#" },
  ],
};

const socials = [
  { icon: Twitter,  href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github,   href: "#", label: "GitHub" },
  { icon: Youtube,  href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0f172a", color: "#94a3b8" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 32px 32px" }}>

        {/* Top row */}
        <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 48, paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.08)" }} className="footer-top">

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 34, height: 34, borderRadius: 10, background: "linear-gradient(135deg,#0ea5e9,#6366f1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Zap size={16} color="white" />
              </div>
              <span style={{ fontFamily: "var(--font-sora),sans-serif", fontSize: 20, fontWeight: 800, color: "#fff" }}>
                E<span style={{ color: "#38bdf8" }}>Automata</span>
              </span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: "#64748b", marginBottom: 24, maxWidth: 180 }}>
              AI-powered SaaS solutions for modern engineering teams.
            </p>
            {/* Socials */}
            <div style={{ display: "flex", gap: 8 }}>
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a key={s.label} href={s.href} aria-label={s.label}
                    style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748b", textDecoration: "none", transition: "background 0.2s, color 0.2s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg,#0ea5e9,#6366f1)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.color = "#64748b"; }}
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32 }} className="footer-links">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h4 style={{ color: "#fff", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 16 }}>{section}</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}
                        style={{ fontSize: 13, color: "#64748b", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#38bdf8")}
                        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#64748b")}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ paddingTop: 28, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 12, color: "#475569" }}>
            © {new Date().getFullYear()} EAutomata (Engineering Automata). All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: "#475569" }}>
            Made with <span style={{ color: "#f87171" }}>♥</span> by the EAutomata team
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .footer-top { grid-template-columns: 1fr !important; } }
        @media (max-width: 640px) { .footer-links { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </footer>
  );
}
