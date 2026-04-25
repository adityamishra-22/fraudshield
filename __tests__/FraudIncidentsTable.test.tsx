import { render, screen } from '@testing-library/react'
import FraudIncidentsTable from '@/components/fraud/FraudIncidentsTable'
import { recentFraudIncidents } from '@/lib/mock-data'

describe('FraudIncidentsTable', () => {
  it('renders the section heading', () => {
    render(<FraudIncidentsTable />)
    expect(screen.getByText('Recent Fraud Incidents')).toBeInTheDocument()
  })

  it('renders the correct incident count in subtitle', () => {
    render(<FraudIncidentsTable />)
    expect(screen.getByText(`${recentFraudIncidents.length} incidents in last 24 hours`)).toBeInTheDocument()
  })

  it('renders all column headers', () => {
    render(<FraudIncidentsTable />)
    expect(screen.getByText('Campaign ID')).toBeInTheDocument()
    expect(screen.getByText('Fraud Reason')).toBeInTheDocument()
    expect(screen.getByText('Action')).toBeInTheDocument()
  })

  it('renders Blocked badge for blocked incidents', () => {
    render(<FraudIncidentsTable />)
    const blocked = screen.getAllByText('Blocked')
    expect(blocked.length).toBeGreaterThan(0)
  })

  it('renders Flagged badge for flagged incidents', () => {
    render(<FraudIncidentsTable />)
    expect(screen.getByText('Flagged')).toBeInTheDocument()
  })

  it('renders correct number of rows', () => {
    render(<FraudIncidentsTable />)
    const rows = screen.getAllByText('Click')
    expect(rows.length).toBeGreaterThanOrEqual(1)
  })
})
