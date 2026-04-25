'use client'

import { IdentityScanningPanel, UserProfilePanel } from '@/components/identity/IdentityPanels'
import { VerificationSuccessChart, ScanResultsPanel, UserStatusPie, VerificationHistoryTable } from '@/components/identity/IdentityCharts'

export default function IdentityPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-6" suppressHydrationWarning>
      <h1 className="text-xl font-bold tracking-tight" style={{ color: 'var(--text)' }}>
        Identity Verification & User Dashboard
      </h1>
      <p className="mb-5 mt-1 text-[13px]" style={{ color: 'var(--text-muted)' }}>
        Real-time identity scanning and verification management
      </p>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1fr_320px]">
        <div className="flex flex-col gap-4">
          <IdentityScanningPanel />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <UserProfilePanel />
            <VerificationSuccessChart />
          </div>
          <VerificationHistoryTable />
        </div>

        <div className="flex flex-col gap-4">
          <ScanResultsPanel />
          <UserStatusPie />
        </div>
      </div>
    </div>
  )
}
