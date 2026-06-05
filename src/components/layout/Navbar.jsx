"use client";
import Image from "next/image";
import logo from "@/assets/logo.jpeg";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, ArrowRight, Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el)
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 72,
        behavior: "smooth",
      });
  };

  return (
    <>
      {/* ── Desktop Navbar ── */}
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={
          scrolled
            ? {
                background: "rgba(6,6,10,0.92)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
              }
            : {}
        }>
        <div className="max-w-[1280px] mx-auto px-7 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src={logo}
              alt="SafeCare Logo"
              width={42}
              height={42}
              className="rounded-xl object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
            />

            <div>
              <span className="font-display font-extrabold text-lg text-[#FF7233] tracking-tight leading-tight block">
                SafeCare & Trade
              </span>
              <span className="font-body text-[10px] text-white/20 tracking-[0.18em] uppercase">
                Engineering Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={label}
                onClick={(e) => scrollTo(e, href)}
                className="px-4 py-2 rounded-lg text-[13px] font-medium text-white/55 hover:text-white hover:bg-white/[0.06] transition-all duration-200 font-body border-none bg-transparent cursor-pointer">
                {label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${SITE.phone}`}
              className="hidden md:flex items-center gap-1.5 text-[13px] font-medium text-white/40 hover:text-white/90 transition-colors duration-200 font-body no-underline">
              <Phone size={13} /> {SITE.phone}
            </a>
            <button
              onClick={(e) => scrollTo(e, "#contact")}
              className="fire-btn hidden sm:flex">
              <span className="flex items-center gap-2.5">
                Get a Quote <ArrowRight size={14} />
              </span>
            </button>
            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 cursor-pointer transition-colors duration-200 hover:bg-white/[0.08]"
              style={{ background: "rgba(255,255,255,0.06)" }}>
              {mobileOpen ? (
                <X size={18} color="white" />
              ) : (
                <Menu size={18} color="white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu ── */}
      <div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-9 transition-all duration-300"
        style={{
          background: "rgba(6,6,10,0.97)",
          backdropFilter: "blur(24px)",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "all" : "none",
          transform: mobileOpen ? "translateY(0)" : "translateY(-8px)",
        }}>
        {NAV_LINKS.map(({ label, href }) => (
          <button
            key={label}
            onClick={(e) => scrollTo(e, href)}
            className="font-display text-[2rem] font-bold text-white border-none bg-transparent cursor-pointer hover:text-fire-2 transition-colors duration-200">
            {label}
          </button>
        ))}
        <button
          onClick={(e) => scrollTo(e, "#contact")}
          className="fire-btn mt-2">
          <span>Get a Quote →</span>
        </button>
      </div>

      {/* ── Global fire button style ── */}
      <style jsx global>{`
        .fire-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 26px;
          background: linear-gradient(135deg, #ff4500, #ff8c00);
          color: #fff;
          font-family: var(--font-inter);
          font-weight: 600;
          font-size: 14px;
          border: none;
          border-radius: 9999px;
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0 4px 24px rgba(255, 69, 0, 0.35);
          transition:
            transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
          white-space: nowrap;
        }
        .fire-btn span {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .fire-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #ff6a33, #ffaa33);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .fire-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 40px rgba(255, 69, 0, 0.5);
        }
        .fire-btn:hover::before {
          opacity: 1;
        }
        .fire-btn:active {
          transform: translateY(-1px) scale(0.99);
        }

        .glass-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 26px;
          background: rgba(255, 255, 255, 0.06);
          color: rgba(255, 255, 255, 0.85);
          font-family: var(--font-inter);
          font-weight: 600;
          font-size: 14px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 9999px;
          cursor: pointer;
          text-decoration: none;
          backdrop-filter: blur(10px);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          white-space: nowrap;
        }
        .glass-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
        }

        .ghost-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 24px;
          background: transparent;
          color: #ff4500;
          font-family: var(--font-inter);
          font-weight: 600;
          font-size: 14px;
          border: 1.5px solid rgba(255, 69, 0, 0.35);
          border-radius: 9999px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .ghost-btn:hover {
          background: rgba(255, 69, 0, 0.08);
          border-color: #ff4500;
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
}

function FlameIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 2c0 6-8 6-8 12a8 8 0 0 0 16 0c0-6-8-6-8-12z" />
      <path d="M12 12c0 3-3 3-3 6a3 3 0 0 0 6 0c0-3-3-3-3-6z" />
    </svg>
  );
}
