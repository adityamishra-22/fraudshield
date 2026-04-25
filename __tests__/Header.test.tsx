import { render, screen, fireEvent } from '@testing-library/react'

jest.mock('next/navigation', () => ({
  usePathname: () => '/ad-fraud',
}))

jest.mock('@/lib/theme-context', () => ({
  useTheme: () => ({ theme: 'light', toggle: jest.fn() }),
}))

jest.mock('next/link', () => {
  const Link = ({ href, children, ...rest }: { href: string; children: React.ReactNode; [key: string]: unknown }) => (
    <a href={href} {...rest}>{children}</a>
  )
  Link.displayName = 'Link'
  return Link
})

import Header from '@/components/Header'

describe('Header', () => {
  it('renders the FraudShield logo text', () => {
    render(<Header />)
    expect(screen.getByText('SHIELD')).toBeInTheDocument()
  })

  it('renders both navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Identity Verification')).toBeInTheDocument()
  })

  it('marks Ad Fraud as active when on /ad-fraud', () => {
    render(<Header />)
    const fraudLink = screen.getByText('Dashboard').closest('a')
    expect(fraudLink).toHaveStyle({ color: 'var(--accent)' })
  })

  it('renders theme toggle button', () => {
    render(<Header />)
    const btn = screen.getByRole('button')
    expect(btn).toBeInTheDocument()
  })

  it('calls toggle when theme button is clicked', () => {
    const toggleMock = jest.fn()
    jest.spyOn(require('@/lib/theme-context'), 'useTheme').mockReturnValue({
      theme: 'light',
      toggle: toggleMock,
    })
    render(<Header />)
    fireEvent.click(screen.getByRole('button'))
    expect(toggleMock).toHaveBeenCalledTimes(1)
  })
})
