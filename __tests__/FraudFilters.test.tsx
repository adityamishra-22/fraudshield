import { render, screen, fireEvent } from '@testing-library/react'
import FraudFilters from '@/components/fraud/FraudFilters'

describe('FraudFilters', () => {
  it('renders FILTERS heading', () => {
    render(<FraudFilters />)
    expect(screen.getByText('FILTERS')).toBeInTheDocument()
  })

  it('renders all filter section headings', () => {
    render(<FraudFilters />)
    expect(screen.getByText('Campaigns')).toBeInTheDocument()
    expect(screen.getByText('Traffic Sources')).toBeInTheDocument()
    expect(screen.getByText('Fraud Types')).toBeInTheDocument()
    expect(screen.getByText('Region')).toBeInTheDocument()
  })

  it('renders date range with This Month label', () => {
    render(<FraudFilters />)
    expect(screen.getByText('This Month')).toBeInTheDocument()
    expect(screen.getByText('Oct 1 – Oct 25, 2024')).toBeInTheDocument()
  })

  it('shows All Campaigns selected by default', () => {
    render(<FraudFilters />)
    expect(screen.getByText('All Campaigns')).toHaveStyle({ fontWeight: 600 })
  })

  it('activates a filter option on click', () => {
    render(<FraudFilters />)
    const btn = screen.getByText('Bots')
    fireEvent.click(btn)
    expect(btn).toHaveStyle({ fontWeight: 600 })
  })

  it('deselects previous option when a new one is clicked', () => {
    render(<FraudFilters />)
    const allBtn = screen.getByText('All Campaigns')
    const holidayBtn = screen.getByText('Holiday Boost')
    fireEvent.click(holidayBtn)
    expect(holidayBtn).toHaveStyle({ fontWeight: 600 })
    expect(allBtn).not.toHaveStyle({ fontWeight: 600 })
  })
})
