'use client'
import Image from 'next/image'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { ABOUT } from '@/lib/data'
import { CheckCircle2 } from 'lucide-react'

export default function About() {
  useScrollReveal()
  return (
    <section id="about" className="py-24 relative" style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 50%,rgba(255,69,0,0.07) 0%,transparent 60%),radial-gradient(ellipse 50% 50% at 80% 30%,rgba(120,40,200,0.05) 0%,transparent 60%),#06060a' }}>
      <div className="max-w-[1280px] mx-auto px-7">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Image */}
          <div className="relative reveal-l">
            <div className="rounded-3xl overflow-hidden relative" style={{ boxShadow: '0 40px 120px rgba(0,0,0,0.7)' }}>
              <Image src={ABOUT.image} alt="PyroShield engineering team" width={700} height={520}
                className="w-full object-cover" style={{ height: '520px', filter: 'brightness(0.75) saturate(1.15)' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,rgba(6,6,10,0.7) 0%,transparent 50%)' }}/>
              {/* Badge overlay */}
              <div className="absolute top-5 right-5 rounded-xl p-3" style={{ background: 'rgba(6,6,10,0.75)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="block font-display text-[11px] font-bold tracking-[0.1em] uppercase mb-0.5" style={{ color: '#ff8c00' }}>ISO Certified</span>
                <span className="block font-body text-[11px] text-white/35">FSCD Approved</span>
              </div>
            </div>
            {/* XP badge */}
            <div className="absolute -bottom-5 -left-5 rounded-[18px] p-[18px_24px] animate-card-float" style={{ background: 'rgba(10,10,18,0.85)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <span className="font-display font-black block leading-none" style={{ fontSize: '3rem', background: 'linear-gradient(135deg,#ff4500,#ff8c00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>7+</span>
              <span className="font-body text-[13px] text-white/35 mt-1 block whitespace-nowrap">Years of Excellence</span>
            </div>
          </div>

          {/* Content */}
          <div className="reveal-r">
            <span className="section-label mb-4">About SafeCare Trade</span>
            <h2 className="font-display font-extrabold text-white mb-5" style={{ fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
              Engineering Safety,<br/>
              <span style={{ background: 'linear-gradient(135deg,#ff4500,#ff8c00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Saving Lives</span> Since 2019
            </h2>
            <p className="font-body text-white/40 leading-relaxed mb-8" style={{ fontSize: '16px' }}>{ABOUT.body}</p>

            <div className="flex flex-col gap-3.5 mb-9">
              {ABOUT.features.map(({ title, sub }) => (
                <div key={title} className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,69,0,0.1)', border: '1px solid rgba(255,69,0,0.15)' }}>
                    <CheckCircle2 size={14} color="#ff4500" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-white text-sm mb-0.5">{title}</p>
                    <p className="font-body text-[13px] text-white/35">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {ABOUT.skills.map(({ label, pct }) => (
                <div key={label}>
                  <div className="flex justify-between mb-2">
                    <span className="font-body text-[13px] font-semibold text-white/55">{label}</span>
                    <span className="font-display text-[13px] font-bold" style={{ color: '#ff8c00' }}>{pct}%</span>
                  </div>
                  <div className="prog-track"><div className="prog-fill" data-w={pct}/></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-[-1px] left-0 right-0" style={{ background: '#06060a' }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '60px' }}>
          <path d="M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z" fill="#0e0e18"/>
        </svg>
      </div>
    </section>
  )
}
