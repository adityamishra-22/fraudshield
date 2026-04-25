'use client'

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell,
} from 'recharts'
import { verificationSuccessData, userStatusData, verificationHistory } from '@/lib/mock-data'
import { Phone, FileText, User, CheckCircle, Clock, XCircle, PenLine, Info } from 'lucide-react'

const tooltip = {
  contentStyle: {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 8,
    fontSize: 12,
  },
}

export function VerificationSuccessChart() {
  return (
    <div className="rounded-xl border p-5" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
      <p className="text-[15px] font-bold" style={{ color: 'var(--text)' }}>Verification Success Rate</p>
      <p className="mb-4 text-[11px]" style={{ color: 'var(--text-muted)' }}>Rolling 100 verifications</p>
      <ResponsiveContainer width="100%" height={148}>
        <LineChart data={verificationSuccessData} margin={{ top: 5, right: 5, left: -28, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="day" tick={{ fontSize: 10, fill: 'var(--text-muted)' }} tickLine={false} />
          <YAxis
            tick={{ fontSize: 10, fill: 'var(--text-muted)' }}
            tickLine={false}
            axisLine={false}
            domain={[0, 100]}
            tickFormatter={v => `${v}`}
          />
          <Tooltip {...tooltip} formatter={(v: unknown) => [`${v}%`, 'Success Rate']} />
          <Line type="monotone" dataKey="rate" stroke="var(--accent)" strokeWidth={2.5} dot={false} fill="var(--accent-light)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export function ScanResultsPanel() {
  return (
    <div className="rounded-xl border p-5" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
      <h2 className="mb-4 text-[15px] font-bold" style={{ color: 'var(--text)' }}>Scan Results</h2>

      {/* Phone Number Scan */}
      <div className="mb-4">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
          Phone Number Scan
        </p>
        <div className="rounded-lg p-3" style={{ background: 'var(--green-light)' }}>
          <div className="mb-1.5 flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[12px] font-medium" style={{ color: 'var(--text)' }}>
              <Phone size={11} style={{ color: 'var(--accent)' }} />
              +1 (555) 123-4567
            </span>
            <div className="flex items-center gap-1.5">
              <button className="flex h-5 w-5 items-center justify-center rounded" style={{ color: 'var(--text-muted)' }}>
                <PenLine size={11} />
              </button>
              <button className="flex h-5 w-5 items-center justify-center rounded" style={{ color: 'var(--text-muted)' }}>
                <Info size={11} />
              </button>
            </div>
          </div>
          <span className="flex items-center gap-1 text-[11px] font-semibold" style={{ color: 'var(--green)' }}>
            <CheckCircle size={11} /> Verified
          </span>
        </div>
      </div>

      {/* ID Document Scan */}
      <div className="mb-4">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
          ID Document Scan
        </p>
        <div className="rounded-lg p-3" style={{ background: 'var(--bg-card2)' }}>
          <div className="mb-2 flex items-center gap-2.5">
            <div
              className="flex h-10 w-12 shrink-0 items-center justify-center rounded"
              style={{ background: 'var(--border)' }}
            >
              <FileText size={14} style={{ color: 'var(--text-muted)' }} />
            </div>
            <div>
              <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>Analyzing Document...</p>
              <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>Extracting Details...</p>
            </div>
          </div>
          <div className="h-1 overflow-hidden rounded-full" style={{ background: 'var(--border)' }}>
            <div className="h-full rounded-full" style={{ width: '45%', background: 'var(--accent)' }} />
          </div>
        </div>
      </div>

      {/* Face Match */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
            Face Match
          </p>
          <span className="text-[11px] font-medium" style={{ color: 'var(--text-muted)' }}>Comparing...</span>
        </div>
        <div className="rounded-lg p-3" style={{ background: 'var(--bg-card2)' }}>
          <div className="flex items-center gap-3">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              <User size={20} style={{ color: 'var(--text-muted)' }} />
            </div>
            <p className="text-[11px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              User's photo from<br />document
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function UserStatusPie() {
  return (
    <div className="rounded-xl border p-5" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
      <h2 className="mb-3 text-[15px] font-bold" style={{ color: 'var(--text)' }}>User Status Distribution</h2>
      <div className="flex items-center gap-4">
        <ResponsiveContainer width={130} height={130}>
          <PieChart>
            <Pie
              data={userStatusData}
              cx="50%"
              cy="50%"
              outerRadius={62}
              dataKey="value"
              stroke="none"
            >
              {userStatusData.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="flex flex-col gap-2.5">
          {userStatusData.map(s => (
            <div key={s.name} className="flex items-center gap-2">
              <div className="h-3 w-3 shrink-0 rounded-sm" style={{ background: s.color }} />
              <span className="text-[12px]" style={{ color: 'var(--text-muted)' }}>{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function VerificationHistoryTable() {
  const statusConfig: Record<string, { color: string; bg: string; icon: React.ReactNode }> = {
    Verified: { color: 'var(--green)', bg: 'var(--green-light)', icon: <CheckCircle size={10} /> },
    Pending: { color: 'var(--orange)', bg: 'var(--orange-light)', icon: <Clock size={10} /> },
    Failed: { color: 'var(--red)', bg: 'var(--red-light)', icon: <XCircle size={10} /> },
  }

  return (
    <div className="rounded-xl border" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
      <div className="px-5 pb-3 pt-5">
        <h2 className="text-[15px] font-bold" style={{ color: 'var(--text)' }}>Verification History</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="border-b" style={{ borderColor: 'var(--border)' }}>
              {['Date', 'User ID/Phone', 'Verification Type', 'Status', 'Actions'].map(h => (
                <th
                  key={h}
                  className="whitespace-nowrap px-4 pb-2.5 pt-1 text-left text-[11px] font-semibold uppercase tracking-wide"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {verificationHistory.map((row, i) => {
              const s = statusConfig[row.status] ?? statusConfig.Pending
              return (
                <tr
                  key={i}
                  className="border-b transition-colors"
                  style={{ borderColor: 'var(--border)' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-card2)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  <td className="px-4 py-2.5 font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>{row.date}</td>
                  <td className="whitespace-nowrap px-4 py-2.5 font-mono text-[11px]" style={{ color: 'var(--text)' }}>{row.userId}</td>
                  <td className="px-4 py-2.5 text-[11px]" style={{ color: 'var(--text-muted)' }}>{row.type}</td>
                  <td className="px-4 py-2.5">
                    <span
                      className="inline-flex items-center gap-1 rounded px-2 py-0.5 text-[11px] font-semibold"
                      style={{ background: s.bg, color: s.color }}
                    >
                      {s.icon} {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-2.5">
                    <button
                      className="text-[11px] font-medium transition-opacity hover:opacity-70"
                      style={{ color: 'var(--accent)', background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
