'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { STATS, SERVICES, PRODUCTS, PRODUCT_CATEGORIES, PROJECTS, CLIENTS, TESTIMONIALS, FAQS, SITE } from '@/lib/data'
import { ArrowRight, ChevronDown } from 'lucide-react'

/* ═══════════════════════════════════════
   STATS
═══════════════════════════════════════ */
export function Stats() {
  useScrollReveal()
  return (
    <section className="py-24 relative" style={{ background: '#06060a' }}>
      <div className="max-w-[1280px] mx-auto px-7">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map(({ target, label }, i) => (
            <div key={label} className={`text-center py-10 px-6 rounded-2xl reveal d${i} transition-all duration-300 hover:-translate-y-1`}
                 style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <span className="block font-display font-black mb-2.5" data-target={target}
                    style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', lineHeight: 1, background: 'linear-gradient(135deg,#ff4500,#ff8c00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                0+
              </span>
              <p className="font-body text-sm text-white/35">{label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-[-1px] left-0 right-0">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '60px' }}>
          <path d="M0,60 C360,0 1080,0 1440,60 L1440,0 L0,0 Z" fill="#06060a"/>
        </svg>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════
   SERVICES
═══════════════════════════════════════ */
export function Services() {
  useScrollReveal()
  return (
    <section id="services" className="py-24" style={{ background: 'radial-gradient(ellipse 60% 60% at 80% 60%,rgba(255,69,0,0.08) 0%,transparent 60%),radial-gradient(ellipse 40% 40% at 10% 20%,rgba(30,80,200,0.05) 0%,transparent 60%),#0d0d14' }}>
      <div className="max-w-[1280px] mx-auto px-7">
        <div className="text-center max-w-lg mx-auto mb-14 reveal">
          <span className="section-label mb-4">Our Services</span>
          <h2 className="font-display font-extrabold text-white" style={{ fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
            Complete Fire & Electrical Safety <span className="grad-fire">Solutions</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map(({ icon, title, desc }, i) => (
            <div key={title} className={`svc-card shine reveal d${i % 3}`} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '20px', padding: '32px', position: 'relative', overflow: 'hidden', cursor: 'default' }}>
              <div className="text-[24px] mb-5 w-[54px] h-[54px] rounded-[14px] flex items-center justify-center transition-all duration-300"
                   style={{ background: 'rgba(255,69,0,0.1)', border: '1px solid rgba(255,69,0,0.15)' }}>
                {icon}
              </div>
              <h3 className="font-display font-bold text-white mb-2.5 text-lg">{title}</h3>
              <p className="font-body text-[14px] text-white/35 leading-relaxed mb-5">{desc}</p>
              <a href="#contact" className="font-body text-[13px] font-semibold flex items-center gap-1.5 no-underline transition-all duration-200 hover:gap-3" style={{ color: '#ff4500' }}>
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════
   PRODUCTS
═══════════════════════════════════════ */
export function Products() {
  useScrollReveal()
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === active)

  return (
    <section id="products" className="py-24" style={{ background: '#06060a' }}>
      <div className="max-w-[1280px] mx-auto px-7">
        <div className="flex flex-wrap items-end justify-between gap-5 mb-10 reveal">
          <div>
            <span className="section-label mb-3">Our Products</span>
            <h2 className="font-display font-extrabold text-white" style={{ fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.03em' }}>
              Premium Fire <span className="grad-fire">Equipment</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {PRODUCT_CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActive(cat)}
                className="px-5 py-2 rounded-full font-body font-semibold text-[13px] cursor-pointer transition-all duration-300 border-none"
                style={active === cat ? { background: 'linear-gradient(135deg,#ff4500,#ff8c00)', color: '#fff', boxShadow: '0 4px 20px rgba(255,69,0,0.4)' } : { background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.5)' }}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map(({ name, desc, label, img }) => (
            <div key={name} className="rounded-2xl overflow-hidden reveal shine transition-all duration-300 hover:-translate-y-2"
                 style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="relative h-[200px] overflow-hidden">
                <Image src={img} alt={name} fill className="object-cover transition-transform duration-500 hover:scale-110" style={{ filter: 'brightness(0.7) saturate(1.1)' }} sizes="300px"/>
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom,transparent 40%,rgba(6,6,10,0.95) 100%)' }}/>
              </div>
              <div className="p-[18px]">
                <span className="font-body text-[10px] font-bold uppercase tracking-wider block mb-1.5" style={{ color: '#ff8c00' }}>{label}</span>
                <h4 className="font-display font-bold text-white text-[15px] mb-2">{name}</h4>
                <p className="font-body text-[12px] text-white/30 leading-relaxed mb-3">{desc}</p>
                <a href="#contact" className="font-body text-[12px] font-semibold no-underline" style={{ color: '#ff4500' }}>Enquire →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════
   PROJECTS
═══════════════════════════════════════ */
export function Projects() {
  useScrollReveal()
  const featured = PROJECTS.find(p => p.featured)
  const rest     = PROJECTS.filter(p => !p.featured)

  return (
    <section id="projects" className="py-24" style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 50%,rgba(255,69,0,0.07) 0%,transparent 60%),#06060a' }}>
      <div className="max-w-[1280px] mx-auto px-7">
        <div className="text-center max-w-lg mx-auto mb-12 reveal">
          <span className="section-label mb-3">Portfolio</span>
          <h2 className="font-display font-extrabold text-white mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.03em' }}>
            Featured <span className="grad-fire">Projects</span>
          </h2>
          <p className="font-body text-[15px] text-white/35 leading-relaxed">Protecting Bangladesh's biggest names.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          {/* Featured */}
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden cursor-pointer group" style={{ minHeight: '460px' }}>
            <Image src={featured.img} alt={featured.name} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.06]" sizes="(max-width:1024px) 100vw, 66vw"/>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,rgba(6,6,10,0.95) 0%,rgba(6,6,10,0.3) 50%,transparent 100%)' }}/>
            <div className="absolute bottom-0 left-0 right-0 p-7 translate-y-1.5 group-hover:translate-y-0 transition-transform duration-300">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider mb-2.5" style={{ background: 'rgba(255,69,0,0.8)' }}>{featured.type}</span>
              <h3 className="font-display font-extrabold text-white mb-1.5" style={{ fontSize: '22px' }}>{featured.name}</h3>
              <p className="font-body text-[13px] text-white/60">{featured.desc}</p>
            </div>
          </div>
          {/* Side stack */}
          <div className="flex flex-col gap-4">
            {rest.slice(0, 2).map(p => (
              <div key={p.name} className="relative rounded-2xl overflow-hidden cursor-pointer group flex-1" style={{ minHeight: '220px' }}>
                <Image src={p.img} alt={p.name} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.07]" sizes="400px"/>
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,rgba(6,6,10,0.92) 0%,rgba(6,6,10,0.2) 50%,transparent 100%)' }}/>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider mb-2" style={{ background: 'rgba(255,69,0,0.8)' }}>{p.type}</span>
                  <h3 className="font-display font-extrabold text-white text-base">{p.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {rest.slice(2).map(p => (
            <div key={p.name} className="relative rounded-2xl overflow-hidden cursor-pointer group" style={{ height: '200px' }}>
              <Image src={p.img} alt={p.name} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.07]" sizes="400px"/>
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,rgba(6,6,10,0.92) 0%,transparent 60%)' }}/>
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider mb-1.5" style={{ background: 'rgba(255,69,0,0.8)' }}>{p.type}</span>
                <h3 className="font-display font-extrabold text-white text-[15px]">{p.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <a href="#contact" className="ghost-btn">View All Projects →</a>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════
   CTA BANNER
═══════════════════════════════════════ */
export function CtaBanner() {
  useScrollReveal()
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#1a0800 0%,#200d00 40%,#0d0d14 100%)' }}>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%,rgba(255,69,0,0.12),transparent 70%)', pointerEvents: 'none' }}/>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(255,69,0,0.4),transparent)' }}/>
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(255,69,0,0.2),transparent)' }}/>
      <div className="max-w-[1280px] mx-auto px-7 text-center relative z-10">
        <span className="font-body text-[12px] font-bold tracking-[0.2em] uppercase block mb-3 reveal" style={{ color: 'rgba(255,140,0,0.8)' }}>Free Consultation Available</span>
        <h2 className="font-display font-black text-white mb-4 reveal" style={{ fontSize: 'clamp(2.5rem,7vw,6rem)', lineHeight: '0.95', letterSpacing: '-0.05em' }}>
          Is Your Building<br/><span className="grad-fire">Truly Safe?</span>
        </h2>
        <p className="font-body text-white/40 max-w-xl mx-auto mb-11 reveal d1" style={{ fontSize: '17px', lineHeight: 1.8 }}>
          Get a free fire risk assessment from our certified engineers. No commitment — just peace of mind.
        </p>
        <div className="flex flex-wrap gap-3.5 justify-center reveal d2">
          <a href="#contact" className="fire-btn"><span>Book Free Assessment <ArrowRight size={15}/></span></a>
          <a href={`tel:${SITE.phone}`} className="glass-btn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18A2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.55a16 16 0 0 0 6.56 6.56l.84-.84a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════
   CLIENTS
═══════════════════════════════════════ */
export function Clients() {
  useScrollReveal()
  return (
    <section id="clients" className="py-24" style={{ background: '#06060a' }}>
      <div className="max-w-[1280px] mx-auto px-7">
        <div className="text-center mb-12 reveal">
          <span className="section-label mb-3">Trusted By</span>
          <h2 className="font-display font-extrabold text-white" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', letterSpacing: '-0.02em' }}>
            Brands That Trust <span className="grad-fire">SafeCare Trade</span>
          </h2>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2.5 reveal">
          {CLIENTS.map(name => (
            <div key={name}
              className="flex items-center justify-center px-5 py-3.5 rounded-xl font-display font-extrabold text-[15px] text-white/20 hover:text-white/75 transition-all duration-300 cursor-default hover:-translate-y-0.5"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
              onMouseOver={(e) => { e.currentTarget.style.background='rgba(255,69,0,0.06)'; e.currentTarget.style.borderColor='rgba(255,69,0,0.15)'; }}
              onMouseOut={(e) => { e.currentTarget.style.background='rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.06)'; }}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════
   TESTIMONIALS
═══════════════════════════════════════ */
export function Testimonials() {
  useScrollReveal()
  return (
    <section id="testimonials" className="py-24" style={{ background: 'radial-gradient(ellipse 60% 60% at 80% 60%,rgba(255,69,0,0.08) 0%,transparent 60%),#0d0d14' }}>
      <div className="max-w-[1280px] mx-auto px-7">
        <div className="text-center max-w-lg mx-auto mb-12 reveal">
          <span className="section-label mb-3">Testimonials</span>
          <h2 className="font-display font-extrabold text-white" style={{ fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.03em' }}>
            What Clients <span className="grad-fire">Say</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map(({ initials, name, role, stars, quote }, i) => (
            <div key={name} className={`relative rounded-2xl p-8 overflow-hidden reveal d${i} transition-all duration-300 hover:-translate-y-1`}
                 style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="absolute top-4 right-6 font-display text-[80px] leading-none font-black opacity-[0.12]" style={{ color: '#ff4500' }}>"</div>
              <div className="text-[16px] mb-4 text-[#ff8c00]">{'★'.repeat(stars)}</div>
              <p className="font-body text-[14px] text-white/50 leading-[1.85] mb-6">"{quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-display text-[13px] font-bold text-white flex-shrink-0"
                     style={{ background: 'linear-gradient(135deg,#ff4500,#ff8c00)' }}>{initials}</div>
                <div>
                  <span className="font-display font-bold text-white text-sm block">{name}</span>
                  <span className="font-body text-[12px] text-white/25 mt-0.5 block">{role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════
   FAQ
═══════════════════════════════════════ */
export function Faq() {
  useScrollReveal()
  const [open, setOpen] = useState(null)

  return (
    <section className="py-24" style={{ background: '#06060a' }}>
      <div className="max-w-[800px] mx-auto px-7">
        <div className="text-center mb-12 reveal">
          <span className="section-label mb-3">FAQ</span>
          <h2 className="font-display font-extrabold text-white" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', letterSpacing: '-0.02em' }}>
            Common <span className="grad-fire">Questions</span>
          </h2>
        </div>
        <div className="reveal">
          {FAQS.map(({ q, a }, i) => (
            <div key={q} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '22px 0' }}>
              <div className="flex justify-between items-center cursor-pointer gap-4 select-none"
                   onClick={() => setOpen(open === i ? null : i)} role="button" tabIndex={0}
                   onKeyDown={(e) => e.key === 'Enter' && setOpen(open === i ? null : i)}>
                <span className="font-display font-semibold text-white text-base">{q}</span>
                <ChevronDown size={18} color="rgba(255,69,0,0.7)" style={{ flexShrink: 0, transform: open === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.35s ease' }}/>
              </div>
              <div style={{ maxHeight: open === i ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.4s ease', paddingTop: open === i ? '14px' : '0' }}>
                <p className="font-body text-[15px] text-white/38 leading-relaxed">{a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
