"use client";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SERVICES, SITE } from "@/lib/data";
import logo from "@/assets/logo.jpeg";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg,#08080f 0%,#06060a 100%)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "64px 0 28px",
      }}>
      <div className="max-w-[1280px] mx-auto px-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src={logo}
                alt="SafeCare & Trade"
                width={40}
                height={40}
                className="w-10 h-10 object-contain rounded-xl flex-shrink-0"
              />

              <span className="font-display font-extrabold text-xl text-[#FF7233]">
                SafeCare & Trade
              </span>
            </div>

            <p className="font-body text-sm text-white/25 leading-relaxed mb-5">
              Bangladesh's most trusted fire safety engineering company.
              Protecting lives and property since 2012.
            </p>

            <div className="flex gap-2.5">
              {[
                {
                  href: SITE.social.facebook,
                  label: "Facebook",
                  d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                },
                {
                  href: SITE.social.linkedin,
                  label: "LinkedIn",
                  d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                },
              ].map(({ href, label, d }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-[34px] h-[34px] rounded-lg flex items-center justify-center text-white/35 hover:text-fire-2 transition-all duration-200 no-underline"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "rgba(255,69,0,0.15)";
                    e.currentTarget.style.borderColor = "rgba(255,69,0,0.3)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.07)";
                  }}>
                  <svg
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d={d} />
                  </svg>
                </a>
              ))}

              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-[34px] h-[34px] rounded-lg flex items-center justify-center text-white/35 transition-all duration-200 no-underline"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "rgba(37,211,102,0.15)";
                  e.currentTarget.style.borderColor = "rgba(37,211,102,0.3)";
                  e.currentTarget.style.color = "#25D366";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.35)";
                }}>
                <svg
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="font-display text-[13px] font-bold text-white/50 tracking-[0.1em] uppercase block mb-4">
              Quick Links
            </span>
            <div className="flex flex-col gap-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="font-body text-sm text-white/25 hover:text-fire-2 transition-colors duration-200 no-underline">
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <span className="font-display text-[13px] font-bold text-white/50 tracking-[0.1em] uppercase block mb-4">
              Services
            </span>
            <div className="flex flex-col gap-2.5">
              {SERVICES.map(({ title }) => (
                <a
                  key={title}
                  href="#services"
                  className="font-body text-sm text-white/25 hover:text-fire-2 transition-colors duration-200 no-underline">
                  {title}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <span className="font-display text-[13px] font-bold text-white/50 tracking-[0.1em] uppercase block mb-4">
              Get In Touch
            </span>

            <div className="mb-4">
              <p className="font-body text-[11px] text-white/20 uppercase tracking-widest mb-1">
                Emergency Hotline
              </p>
              <a
                href={`tel:${SITE.phone}`}
                className="font-display text-[1.3rem] font-extrabold no-underline"
                style={{ color: "#ff8c00" }}>
                {SITE.phone}
              </a>
            </div>

            <p className="font-body text-sm text-white/25 leading-relaxed">
              {SITE.email}
              <br />
              <br />
              House 42, Road 11, Block D<br />
              Banani, Dhaka-1213
              <br />
              <br />
              Sun–Thu: 9AM–6PM · Emergency 24/7
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p className="font-body text-xs text-white/20">
            © {new Date().getFullYear()} PyroShield Engineering Ltd. All rights
            reserved.
          </p>

          <div className="flex gap-5">
            {["Privacy", "Terms", "Sitemap"].map((t) => (
              <a
                key={t}
                href="#"
                className="font-body text-xs text-white/20 hover:text-white/60 transition-colors no-underline">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
