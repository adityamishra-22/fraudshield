'use client'

import { recentFraudIncidents } from '@/lib/mock-data'

export default function FraudIncidentsTable() {
  return (
    <div className="rounded-xl border" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
      <div className="px-5 pb-3 pt-4">
        <p className="text-[13px] font-semibold" style={{ color: 'var(--text)' }}>Recent Fraud Incidents</p>
        <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>
          {recentFraudIncidents.length} incidents in last 24 hours
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="border-b" style={{ borderColor: 'var(--border)' }}>
              {['Timestamp', 'Campaign ID', 'Event ID', 'Source ID', 'Traffic Type', 'Fraud Reason', 'Location', 'IP Address', 'Action'].map(h => (
                <th
                  key={h}
                  className="whitespace-nowrap px-3 pb-2.5 pt-1.5 text-left text-[11px] font-semibold uppercase tracking-wide"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {recentFraudIncidents.map((row, i) => (
              <tr
                key={i}
                className="border-b transition-colors"
                style={{ borderColor: 'var(--border)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-card2)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <td className="px-3 py-2.5 font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>{row.timestamp}</td>
                <td className="px-3 py-2.5 font-mono text-[11px]" style={{ color: 'var(--text)' }}>{row.campaignId}</td>
                <td className="px-3 py-2.5 font-mono text-[11px]" style={{ color: 'var(--text)' }}>{row.eventId}</td>
                <td className="whitespace-nowrap px-3 py-2.5 text-[11px]" style={{ color: 'var(--text-muted)' }}>{row.sourceId}</td>
                <td className="px-3 py-2.5">
                  <Badge color="blue">{row.trafficType}</Badge>
                </td>
                <td className="whitespace-nowrap px-3 py-2.5 text-[11px]" style={{ color: 'var(--text)' }}>{row.fraudReason}</td>
                <td className="px-3 py-2.5 text-[11px]" style={{ color: 'var(--text-muted)' }}>{row.location}</td>
                <td className="px-3 py-2.5 font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>{row.ip}</td>
                <td className="px-3 py-2.5">
                  <Badge color={row.action === 'Blocked' ? 'red' : 'orange'}>{row.action}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function Badge({ color, children }: { color: 'blue' | 'red' | 'orange' | 'green'; children: React.ReactNode }) {
  const styles = {
    blue: { background: 'var(--accent-light)', color: 'var(--accent)' },
    red: { background: 'var(--red-light)', color: 'var(--red)' },
    orange: { background: 'var(--orange-light)', color: 'var(--orange)' },
    green: { background: 'var(--green-light)', color: 'var(--green)' },
  }
  return (
    <span className="rounded px-2 py-0.5 text-[11px] font-semibold" style={styles[color]}>
      {children}
    </span>
  )
}
