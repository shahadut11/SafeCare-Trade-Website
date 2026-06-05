'use client'
import { useEffect, useRef } from 'react'
import { HERO, SITE } from '@/lib/data'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  const bgRef = useRef(null)

  /* Parallax */
  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) bgRef.current.style.transform = `scale(1.05) translateY(${window.scrollY * 0.08}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden grid-pattern">

      {/* Background image */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${HERO.bgImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          transform: 'scale(1.05)',
        }}
      >
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to right,rgba(6,6,10,0.97) 0%,rgba(6,6,10,0.8) 55%,rgba(6,6,10,0.35) 100%),linear-gradient(to bottom,rgba(6,6,10,0.3) 0%,transparent 40%,rgba(6,6,10,0.95) 100%)'
        }}/>
      </div>

      {/* Ambient orbs */}
      <div className="absolute top-[-100px] left-[-150px] w-[600px] h-[600px] rounded-full pointer-events-none animate-orb-float"
           style={{ background: 'radial-gradient(circle,rgba(255,69,0,0.18),transparent 70%)', filter: 'blur(100px)' }}/>
      <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] rounded-full pointer-events-none animate-orb-float"
           style={{ background: 'radial-gradient(circle,rgba(255,140,0,0.12),transparent 70%)', filter: 'blur(100px)', animationDelay: '-4s' }}/>
      <div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] rounded-full pointer-events-none animate-orb-float"
           style={{ background: 'radial-gradient(circle,rgba(120,40,200,0.1),transparent 70%)', filter: 'blur(100px)', animationDelay: '-8s' }}/>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-7 w-full" style={{ paddingTop: '80px' }}>
        <div style={{ maxWidth: '660px' }}>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-[18px] py-1.5 rounded-full mb-7"
               style={{ background: 'rgba(255,69,0,0.1)', border: '1px solid rgba(255,69,0,0.25)', backdropFilter: 'blur(10px)', paddingLeft: '10px' }}>
            <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse-dot"
                 style={{ background: 'linear-gradient(135deg,#ff4500,#ff8c00)' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                <path d="M12 2c0 6-8 6-8 12a8 8 0 0 0 16 0c0-6-8-6-8-12z"/>
              </svg>
            </div>
            <span className="font-body text-[13px] font-semibold tracking-wide" style={{ color: 'rgba(255,180,100,1)' }}>
              {HERO.eyebrow}
            </span>
          </div>

          {/* Small line */}
          <p className="font-display font-semibold text-white/35 uppercase tracking-[0.25em] mb-2"
             style={{ fontSize: 'clamp(0.9rem,2vw,1.2rem)' }}>
            {HERO.lineSmall}
          </p>

          {/* Title */}
          <h1 className="font-display font-black text-white mb-6"
              style={{ fontSize: 'clamp(3rem,7.5vw,7rem)', lineHeight: '0.95', letterSpacing: '-0.05em' }}>
            We Stop<br/>
            <span className="grad-fire">Fires</span><br/>
            Before They<br/>
            Start
          </h1>

          {/* Subtitle */}
          <p className="font-body text-white/50 mb-11"
             style={{ fontSize: 'clamp(15px,1.6vw,18px)', lineHeight: 1.8, maxWidth: '500px' }}>
            Complete fire safety engineering — design, supply, installation & 24/7 maintenance.
            Trusted by <strong className="text-white/75">500+ enterprises</strong> across Bangladesh.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3.5 items-center">
            <button onClick={() => scrollTo('#contact')} className="fire-btn">
              <span>Request Free Audit <ArrowRight size={15}/></span>
            </button>
            <button onClick={() => scrollTo('#projects')} className="glass-btn">
              <Play size={14}/> View Projects
            </button>
          </div>

          {/* Stats strip */}
          <div className="flex mt-14 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            {HERO.stats.map(({ value, label }, i) => (
              <div key={label} className="flex-1 flex flex-col gap-1"
                   style={{ paddingLeft: i === 0 ? 0 : '24px', paddingRight: '24px', borderRight: i < HERO.stats.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                <span className="font-display font-black grad-fire" style={{ fontSize: '2.2rem', lineHeight: 1 }}>{value}</span>
                <span className="font-body text-[12px] text-white/20 tracking-[0.04em]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating cards — desktop */}
      <FloatCard style={{ top: '30%', right: '6%', animationDelay: '0s' }}>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
             style={{ background: 'linear-gradient(135deg,#ff4500,#ff8c00)' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <div>
          <p className="font-display text-[13px] font-bold text-white">ISO 9001 Certified</p>
          <p className="font-body text-[11px] text-white/35 mt-0.5">International Standards</p>
        </div>
      </FloatCard>

      <FloatCard style={{ top: '52%', right: '3%', animationDelay: '-2.5s' }}>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.08)' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff8c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
          </svg>
        </div>
        <div>
          <p className="font-display text-[13px] font-bold text-white">12 Active Projects</p>
          <p className="font-body text-[11px] text-white/35 mt-0.5">Nationwide</p>
        </div>
      </FloatCard>

      <FloatCard style={{ bottom: '22%', right: '8%', animationDelay: '-5s' }}>
        <div className="text-center">
          <p className="font-display font-black grad-fire" style={{ fontSize: '1.6rem', lineHeight: 1 }}>24/7</p>
          <p className="font-body text-[11px] text-white/35 mt-1">Emergency Line</p>
        </div>
      </FloatCard>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 pointer-events-none z-10">
        <span className="font-body text-[10px] text-white tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-[18px] h-[30px] rounded-full flex justify-center pt-[5px]"
             style={{ border: '1.5px solid rgba(255,255,255,0.4)' }}>
          <div className="w-[3px] h-[6px] rounded-full animate-scroll-dot"
               style={{ background: '#ff4500' }}/>
        </div>
      </div>
    </section>
  )
}

function FloatCard({ children, style }) {
  return (
    <div
      className="absolute hidden lg:flex items-center gap-3.5 rounded-[18px] p-[18px_22px] animate-card-float"
      style={{
        background: 'rgba(10,10,18,0.75)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.08)',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
