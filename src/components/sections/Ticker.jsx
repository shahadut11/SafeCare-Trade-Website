// ─── Ticker ────────────────────────────────────────────
'use client'
import { TICKER_ITEMS } from '@/lib/data'

export default function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]
  return (
    <div style={{ background: '#0d0010', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="ticker-wrap py-4">
        <div className="ticker-track">
          {items.map((item, i) => (
            <span key={i} className="font-display text-[12px] font-bold text-white/20 tracking-[0.15em] uppercase">{item}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
