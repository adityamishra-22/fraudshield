'use client'

import dynamic from 'next/dynamic'
import {
  LineChart, Line, BarChart, Bar, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, LabelList,
  ResponsiveContainer, PieChart, Pie,
} from 'recharts'
import { fraudTrendData, fraudTypeData, fraudSourceData } from '@/lib/mock-data'

const WorldMap = dynamic(() => import('./WorldMap'), { ssr: false })

const tooltip = {
  contentStyle: {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 8,
    fontSize: 12,
  },
}

const barColors = ['#4f8ef7', '#00c48c', '#a78bfa', '#ff9f43', '#ff4c4c']

export function FraudTrendChart() {
  return (
    <div className="rounded-xl border p-5" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
      <p className="text-[13px] font-semibold" style={{ color: 'var(--text)' }}>Ad Fraud Trend (Daily)</p>
      <p className="mb-3 text-[11px]" style={{ color: 'var(--text-muted)' }}>IVT % over time</p>
      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={fraudTrendData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="day" tick={{ fontSize: 10, fill: 'var(--text-muted)' }} tickLine={false} />
          <YAxis tick={{ fontSize: 10, fill: 'var(--text-muted)' }} tickLine={false} axisLine={false} />
          <Tooltip {...tooltip} />
          <Line type="monotone" dataKey="ivt" stroke="#ff4c4c" strokeWidth={2} dot={false} name="IVT %" />
          <Line type="monotone" dataKey="valid" stroke="#4f8ef7" strokeWidth={2} dot={false} name="Valid %" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export function FraudTypeChart() {
  return (
    <div className="rounded-xl border p-5" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
      <p className="mb-3 text-[13px] font-semibold" style={{ color: 'var(--text)' }}>Fraud Distribution by Type</p>
      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={fraudTypeData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
          <XAxis dataKey="type" tick={{ fontSize: 10, fill: 'var(--text-muted)' }} tickLine={false} axisLine={false} />
          <YAxis
            tick={{ fontSize: 10, fill: 'var(--text-muted)' }}
            tickLine={false}
            axisLine={false}
            tickFormatter={v => `${(v / 1000).toFixed(0)}k`}
          />
          <Tooltip
            {...tooltip}
            formatter={(v: unknown) => [`${((v as number) / 1000).toFixed(0)}k`, 'Incidents']}
          />
          <Bar dataKey="count" radius={[4, 4, 0, 0]}>
            {fraudTypeData.map((_, i) => (
              <Cell key={i} fill={barColors[i % barColors.length]} />
            ))}
            <LabelList
              dataKey="count"
              position="top"
              formatter={(v: unknown) => `${((v as number) / 1000).toFixed(0)}k`}
              style={{ fontSize: 10, fill: 'var(--text-muted)' }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

function PieLabel({ cx = 0, cy = 0, midAngle = 0, innerRadius = 0, outerRadius = 0, percent = 0 }: {
  cx?: number; cy?: number; midAngle?: number; innerRadius?: number; outerRadius?: number; percent?: number
}) {
  if (percent < 0.08) return null
  const rad = (midAngle * Math.PI) / 180
  const r = innerRadius + (outerRadius - innerRadius) * 0.6
  const x = cx + r * Math.cos(-rad)
  const y = cy + r * Math.sin(-rad)
  return (
    <text x={x} y={y} textAnchor="middle" dominantBaseline="central" style={{ fontSize: 11, fontWeight: 700, fill: '#fff', pointerEvents: 'none' }}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export function FraudSourcePie() {
  return (
    <div className="rounded-xl border p-5" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
      <p className="mb-3 text-[13px] font-semibold" style={{ color: 'var(--text)' }}>Top 5 Fraudulent Sources</p>
      <div className="flex items-center gap-4">
        <ResponsiveContainer width={150} height={150}>
          <PieChart>
            <Pie
              data={fraudSourceData}
              cx="50%"
              cy="50%"
              outerRadius={72}
              dataKey="value"
              stroke="none"
              labelLine={false}
              label={PieLabel}
            >
              {fraudSourceData.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="flex flex-col gap-2">
          {fraudSourceData.map(s => (
            <div key={s.name} className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: s.color }} />
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{s.name}</span>
              <span className="ml-auto text-xs font-semibold" style={{ color: 'var(--text)' }}>{s.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function FraudHotspotMap() {
  return (
    <div className="flex-1 rounded-xl border p-5" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
      <p className="text-[13px] font-semibold" style={{ color: 'var(--text)' }}>Fraud Hotspots by Country</p>
      <p className="mb-3 text-[11px]" style={{ color: 'var(--text-muted)' }}>World Map</p>
      <WorldMap />
    </div>
  )
}
