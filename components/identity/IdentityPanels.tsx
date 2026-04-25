'use client'

import { Phone, FileText, Upload, RotateCcw } from 'lucide-react'

export function IdentityScanningPanel() {
  return (
    <div className="rounded-xl border p-5" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
      <h2 className="mb-4 text-[15px] font-bold" style={{ color: 'var(--text)' }}>
        Identity Scanning & Verification
      </h2>

      <div className="flex flex-col gap-3">
        {/* Phone row */}
        <div
          className="rounded-xl border p-4"
          style={{ background: 'var(--bg-card2)', borderColor: 'var(--border)' }}
        >
          <div className="mb-2.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                style={{ background: 'var(--accent-light)' }}
              >
                <Phone size={15} style={{ color: 'var(--accent)' }} />
              </div>
              <p className="text-[13px] font-semibold" style={{ color: 'var(--text)' }}>
                Phone Number Verification
              </p>
            </div>
            <StatusPill color="green">Active</StatusPill>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full" style={{ background: 'var(--border)' }}>
            <div className="h-full rounded-full" style={{ width: '80%', background: 'var(--accent)' }} />
          </div>
        </div>

        {/* Document scan row */}
        <div
          className="rounded-xl border p-4"
          style={{ background: 'var(--bg-card2)', borderColor: 'var(--border)' }}
        >
          <div className="mb-2.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                style={{ background: 'var(--orange-light)' }}
              >
                <FileText size={15} style={{ color: 'var(--orange)' }} />
              </div>
              <p className="text-[13px] font-semibold" style={{ color: 'var(--text)' }}>
                Document Scan (ID Card/Driver's License)
              </p>
            </div>
            <span className="shrink-0 text-[12px]" style={{ color: 'var(--text-muted)' }}>
              Processing – 65% Complete
            </span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full" style={{ background: 'var(--border)' }}>
            <div className="h-full rounded-full" style={{ width: '65%', background: 'var(--orange)' }} />
          </div>
        </div>

        {/* Upload row */}
        <div
          className="rounded-xl border border-dashed p-4"
          style={{ borderColor: 'var(--border)', background: 'transparent' }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                style={{ background: 'var(--accent-light)' }}
              >
                <Upload size={15} style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <p className="text-[13px] font-semibold" style={{ color: 'var(--text)' }}>Upload ID Document</p>
                <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>
                  Document Scan (ID Card/Driver's License)
                </p>
              </div>
            </div>
            <button
              className="shrink-0 rounded-lg px-3 py-1.5 text-[12px] font-semibold text-white transition-opacity hover:opacity-85"
              style={{ background: 'var(--accent)' }}
            >
              Upload ID Document
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function UserProfilePanel() {
  const fields = [
    { label: 'Full Name', value: '[Scanning...]' },
    { label: 'Date of Birth', value: '[Scanning...]' },
    { label: 'Address', value: '[Scanning...]' },
    { label: 'National ID', value: '[Scanning...]' },
  ]

  return (
    <div className="rounded-xl border p-5" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[15px] font-bold" style={{ color: 'var(--text)' }}>User Profile Information</h2>
        <StatusPill color="blue">
          <RotateCcw size={9} />
          Verifying Profile
        </StatusPill>
      </div>
      <div className="flex flex-col gap-2.5">
        {fields.map(f => (
          <div key={f.label} className="flex items-baseline gap-3">
            <span className="w-[90px] shrink-0 text-[12px] font-semibold" style={{ color: 'var(--text)' }}>
              {f.label}:
            </span>
            <span className="text-[12px]" style={{ color: 'var(--text-muted)' }}>
              {f.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function StatusPill({ color, children }: { color: 'green' | 'blue' | 'orange'; children: React.ReactNode }) {
  const styles = {
    green: { background: 'var(--green-light)', color: 'var(--green)' },
    blue: { background: 'var(--accent-light)', color: 'var(--accent)' },
    orange: { background: 'var(--orange-light)', color: 'var(--orange)' },
  }
  return (
    <span
      className="flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold"
      style={styles[color]}
    >
      {children}
    </span>
  )
}
