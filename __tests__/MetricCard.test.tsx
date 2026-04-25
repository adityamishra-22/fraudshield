import { render, screen } from '@testing-library/react'
import MetricCard from '@/components/shared/MetricCard'

describe('MetricCard', () => {
  it('renders label and value', () => {
    render(<MetricCard label="Total Traffic" value="1,245,678" />)
    expect(screen.getByText('Total Traffic')).toBeInTheDocument()
    expect(screen.getByText('1,245,678')).toBeInTheDocument()
  })

  it('renders sub text when provided', () => {
    render(<MetricCard label="Fraud Rate" value="8.4%" sub="▼ -0.5%" />)
    expect(screen.getByText('▼ -0.5%')).toBeInTheDocument()
  })

  it('does not render sub element when omitted', () => {
    render(<MetricCard label="Total Traffic" value="1,245,678" />)
    const spans = Array.from(document.querySelectorAll('span'))
    expect(spans).toHaveLength(2)
  })

  it('applies subColor style', () => {
    render(<MetricCard label="Valid" value="91%" sub="of total" subColor="var(--green)" />)
    expect(screen.getByText('of total')).toHaveStyle({ color: 'var(--green)' })
  })

  it('applies valueColor style', () => {
    render(<MetricCard label="Fraud Rate" value="8.4%" valueColor="var(--red)" />)
    expect(screen.getByText('8.4%')).toHaveStyle({ color: 'var(--red)' })
  })
})
