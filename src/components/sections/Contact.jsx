'use client'
import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SITE } from '@/lib/data'
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react'

const SERVICES_OPTIONS = [
  'Fire Alarm System', 'Sprinkler System', 'Gas Suppression System',
  'Hydrant System', 'Safety Audit & Compliance', 'Annual Maintenance Contract', 'Multiple Services',
]
const BUILDING_TYPES = [
  'Commercial Office', 'Garment Factory', 'Hospital / Clinic', 'Hotel / Restaurant',
  'Data Center', 'Industrial / Warehouse', 'Residential', 'Educational Institution',
]
const CONTACT_INFO = [
  { Icon: MapPin, title: 'Head Office', text: SITE.address },
  { Icon: Phone, title: 'Emergency Hotline (24/7)', text: SITE.phone, isPhone: true },
  { Icon: Mail, title: 'Email', text: SITE.email },
]

export default function Contact() {
  useScrollReveal()
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="py-24" style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 50%,rgba(255,69,0,0.07) 0%,transparent 60%),#06060a' }}>
      <div className="max-w-[1280px] mx-auto px-7">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left Info ── */}
          <div className="reveal-l">
            <span className="section-label mb-4">Contact Us</span>
            <h2 className="font-display font-extrabold text-white mb-4" style={{ fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
              Let's Discuss Your{' '}
              <span style={{ background: 'linear-gradient(135deg,#ff4500,#ff8c00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Safety Needs
              </span>
            </h2>
            <p className="font-body text-white/38 leading-relaxed mb-9" style={{ fontSize: '16px' }}>
              Our certified fire safety engineers are ready to assess your facility and provide tailored fire protection solutions.
             Contact us today for a consultation and a customized proposal.
            </p>

            {/* Contact cards */}
            <div className="flex flex-col gap-3 mb-9">
              {CONTACT_INFO.map(({ Icon, title, text, isPhone }) => (
                <div key={title}
                  className="flex items-start gap-4 p-5 rounded-[14px] transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                  onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,69,0,0.15)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(255,69,0,0.1)', border: '1px solid rgba(255,69,0,0.15)', color: '#ff6a2b' }}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="font-display font-bold text-white text-[13px] mb-1">{title}</p>
                    {isPhone ? (
                      <a href={`tel:${text}`} className="font-display font-extrabold no-underline" style={{ fontSize: '18px', color: '#ff8c00' }}>{text}</a>
                    ) : (
                      <p className="font-body text-[13px] text-white/35 leading-relaxed">{text}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div
              className="h-[200px] rounded-[18px] flex flex-col items-center justify-center gap-2.5"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <MapPin size={36} color="rgba(255,255,255,0.18)" />

              <p className="font-body text-[13px] text-white/20 text-center px-4">
                House-20 (Gr. FL), Road-6, Lane-4, Block-B, Mirpur-6, Dhaka-1216
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=House-20+Road-6+Lane-4+Block-B+Mirpur-6+Dhaka-1216"
                target="_blank"
                rel="noreferrer"
                className="font-body text-[12px] font-semibold no-underline transition-colors duration-200"
                style={{ color: '#ff4500' }}
              >
                View on Google Maps →
              </a>
            </div>
          </div>

          {/* ── Right Form ── */}
          <div className="reveal-r">
            <div className="rounded-3xl p-10" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              {!sent ? (
                <>
                  <h3 className="font-display font-extrabold text-white mb-1.5" style={{ fontSize: '22px' }}>Request a Free Quote</h3>
                  <p className="font-body text-[13px] text-white/25 mb-7">We respond within 24 hours with a tailored proposal.</p>

                  <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="flex flex-col gap-4">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="font-body text-[12px] font-semibold text-white/35 uppercase tracking-wider block mb-1.5">Full Name *</label>
                        <input required type="text" placeholder="John Doe" className="form-inp" />
                      </div>
                      <div>
                        <label className="font-body text-[12px] font-semibold text-white/35 uppercase tracking-wider block mb-1.5">Company</label>
                        <input type="text" placeholder="Company Ltd." className="form-inp" />
                      </div>
                    </div>
                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="font-body text-[12px] font-semibold text-white/35 uppercase tracking-wider block mb-1.5">Phone *</label>
                        <input required type="tel" placeholder={SITE.phone} className="form-inp" />
                      </div>
                      <div>
                        <label className="font-body text-[12px] font-semibold text-white/35 uppercase tracking-wider block mb-1.5">Email</label>
                        <input type="email" placeholder="you@company.com" className="form-inp" />
                      </div>
                    </div>
                    {/* Service */}
                    <div>
                      <label className="font-body text-[12px] font-semibold text-white/35 uppercase tracking-wider block mb-1.5">Service Required *</label>
                      <select required className="form-inp" style={{ appearance: 'none' }}>
                        <option value="" disabled defaultValue>Select a service...</option>
                        {SERVICES_OPTIONS.map(s => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                    {/* Building */}
                    <div>
                      <label className="font-body text-[12px] font-semibold text-white/35 uppercase tracking-wider block mb-1.5">Building Type</label>
                      <select className="form-inp" style={{ appearance: 'none' }}>
                        <option value="" disabled defaultValue>Select building type...</option>
                        {BUILDING_TYPES.map(b => <option key={b}>{b}</option>)}
                      </select>
                    </div>
                    {/* Details */}
                    <div>
                      <label className="font-body text-[12px] font-semibold text-white/35 uppercase tracking-wider block mb-1.5">Project Details</label>
                      <textarea className="form-inp" rows={3} placeholder="Building size, floors, current system status..." style={{ resize: 'none' }} />
                    </div>

                    <button type="submit" className="fire-btn w-full justify-center" style={{ padding: '15px 28px' }}>
                      <span>Send Request <Send size={14} /></span>
                    </button>
                    <p className="font-body text-[11px] text-white/20 text-center">🔒 Your information is 100% secure and never shared.</p>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                  <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center" style={{ background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.2)' }}>
                    <CheckCircle size={32} color="#22c55e" />
                  </div>
                  <h4 className="font-display font-extrabold text-white" style={{ fontSize: '24px' }}>Request Sent!</h4>
                  <p className="font-body text-[14px] text-white/38 max-w-xs leading-relaxed">
                    Our team will contact you within 24 hours with a personalized fire safety proposal.
                  </p>
                  <button onClick={() => setSent(false)} className="font-body text-[13px] font-semibold underline bg-transparent border-none cursor-pointer" style={{ color: '#ff4500' }}>
                    Submit another request
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Form input style */}
      <style jsx global>{`
        .form-inp {
          width: 100%; padding: 13px 18px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          font-family: var(--font-inter); font-size: 14px; color: #fff;
          outline: none;
          transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
        }
        .form-inp:focus {
          border-color: rgba(255,69,0,0.5);
          background: rgba(255,255,255,0.06);
          box-shadow: 0 0 0 4px rgba(255,69,0,0.08);
        }
        .form-inp::placeholder { color: rgba(255,255,255,0.25); }
        .form-inp option { background: #1a1a2e; color: #fff; }
      `}</style>
    </section>
  )
}
