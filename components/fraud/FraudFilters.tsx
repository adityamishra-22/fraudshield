'use client'

import { useState } from 'react'
import { SlidersHorizontal, MoreHorizontal, Calendar } from 'lucide-react'

const filterGroups = {
  Campaigns: ['All Campaigns', 'Holiday Boost', 'App Installs', 'Web Traffic'],
  'Traffic Sources': ['All', 'DSPs', 'Ad Networks', 'Direct'],
  'Fraud Types': ['All', 'IVT', 'Bots', 'Click Farming', 'Geo Fraud'],
  Region: ['Global', 'North America', 'Europe', 'Asia'],
}

export default function FraudFilters() {
  const [selected, setSelected] = useState<Record<string, string>>({
    Campaigns: 'All Campaigns',
    'Traffic Sources': 'All',
    'Fraud Types': 'All',
    Region: 'Global',
  })

  return (
    <aside
      className="sticky top-[76px] w-[220px] shrink-0 rounded-xl border p-4"
      style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={13} style={{ color: 'var(--accent)' }} />
          <span className="text-[13px] font-semibold" style={{ color: 'var(--text)' }}>FILTERS</span>
        </div>
        <button
          className="flex h-6 w-6 items-center justify-center rounded transition-colors"
          style={{ color: 'var(--text-muted)' }}
        >
          <MoreHorizontal size={14} />
        </button>
      </div>

      <div className="mb-4">
        <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
          Date Range
        </p>
        <div
          className="flex items-center justify-between rounded border px-2.5 py-1.5 text-[12px]"
          style={{ background: 'var(--bg-card2)', borderColor: 'var(--border)', color: 'var(--text)' }}
        >
          <div>
            <p className="text-[11px] font-medium" style={{ color: 'var(--text-muted)' }}>This Month</p>
            <p className="text-[11px]">Oct 1 – Oct 25, 2024</p>
          </div>
          <Calendar size={13} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
        </div>
      </div>

      {Object.entries(filterGroups).map(([group, options]) => (
        <div key={group} className="mb-4">
          <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
            {group}
          </p>
          <div className="flex flex-col gap-0.5">
            {options.map(opt => (
              <button
                key={opt}
                onClick={() => setSelected(prev => ({ ...prev, [group]: opt }))}
                className="rounded-md px-2 py-1 text-left text-[12.5px] transition-all"
                style={{
                  fontWeight: selected[group] === opt ? 600 : 400,
                  color: selected[group] === opt ? 'var(--accent)' : 'var(--text-muted)',
                  background: selected[group] === opt ? 'var(--accent-light)' : 'transparent',
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}
    </aside>
  )
}
