import { render, screen } from '@testing-library/react'
import { VerificationHistoryTable } from '@/components/identity/IdentityCharts'
import { verificationHistory } from '@/lib/mock-data'

describe('VerificationHistoryTable', () => {
  it('renders the section heading', () => {
    render(<VerificationHistoryTable />)
    expect(screen.getByText('Verification History')).toBeInTheDocument()
  })

  it('renders all column headers', () => {
    render(<VerificationHistoryTable />)
    expect(screen.getByText('Date')).toBeInTheDocument()
    expect(screen.getByText('User ID/Phone')).toBeInTheDocument()
    expect(screen.getByText('Verification Type')).toBeInTheDocument()
    expect(screen.getByText('Status')).toBeInTheDocument()
    expect(screen.getByText('Actions')).toBeInTheDocument()
  })

  it('renders a row for each history entry', () => {
    render(<VerificationHistoryTable />)
    const viewButtons = screen.getAllByText('View Details')
    expect(viewButtons.length).toBe(verificationHistory.length)
  })

  it('renders Verified status badge', () => {
    render(<VerificationHistoryTable />)
    const verified = screen.getAllByText('Verified')
    expect(verified.length).toBeGreaterThan(0)
  })

  it('renders Pending status badge', () => {
    render(<VerificationHistoryTable />)
    const pending = screen.getAllByText('Pending')
    expect(pending.length).toBeGreaterThan(0)
  })

  it('renders Failed status badge', () => {
    render(<VerificationHistoryTable />)
    expect(screen.getByText('Failed')).toBeInTheDocument()
  })
})
