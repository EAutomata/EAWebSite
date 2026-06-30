"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Products", href: "#products" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s",
        backgroundColor: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(226,232,240,0.6)" : "none",
        boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
          gap: 16,
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", flexShrink: 0 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 10,
            background: "linear-gradient(135deg, #0ea5e9, #6366f1)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 12px rgba(14,165,233,0.3)",
          }}>
            <Zap size={16} color="white" />
          </div>
          <span style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: 800, fontSize: 20, color: "#0f172a", letterSpacing: "-0.5px" }}>
            E<span style={{ background: "linear-gradient(135deg,#0ea5e9,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Automata</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 32, flex: 1, justifyContent: "center" }} className="hidden-mobile">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} style={{
              fontSize: 14, fontWeight: 500, color: "#475569", textDecoration: "none",
              transition: "color 0.2s", whiteSpace: "nowrap",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#0ea5e9")}
            onMouseLeave={e => (e.currentTarget.style.color = "#475569")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }} className="hidden-mobile">
          <a href="#contact" style={{ fontSize: 14, fontWeight: 500, color: "#475569", textDecoration: "none", whiteSpace: "nowrap" }}>
            Sign In
          </a>
          <a href="#contact" style={{
            padding: "9px 20px", fontSize: 14, fontWeight: 600, borderRadius: 12,
            background: "linear-gradient(135deg,#0ea5e9,#6366f1)", color: "white",
            textDecoration: "none", whiteSpace: "nowrap",
            boxShadow: "0 4px 14px rgba(14,165,233,0.3)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(14,165,233,0.4)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 14px rgba(14,165,233,0.3)"; }}
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{
            display: "none", padding: 8, borderRadius: 8, border: "none",
            background: "transparent", cursor: "pointer", color: "#475569",
          }}
          className="show-mobile"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: "rgba(255,255,255,0.97)", borderBottom: "1px solid #e2e8f0", overflow: "hidden" }}
          >
            <div style={{ padding: "12px 24px 20px" }}>
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                  style={{ display: "block", padding: "10px 12px", fontSize: 15, fontWeight: 500, color: "#374151", textDecoration: "none", borderRadius: 8 }}
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileOpen(false)} style={{
                display: "block", textAlign: "center", marginTop: 12, padding: "11px 24px",
                background: "linear-gradient(135deg,#0ea5e9,#6366f1)", color: "white",
                fontWeight: 600, fontSize: 14, borderRadius: 12, textDecoration: "none",
              }}>
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
