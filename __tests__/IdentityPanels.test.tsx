import { render, screen, fireEvent } from '@testing-library/react'
import { IdentityScanningPanel, UserProfilePanel } from '@/components/identity/IdentityPanels'

describe('IdentityScanningPanel', () => {
  it('renders the section heading', () => {
    render(<IdentityScanningPanel />)
    expect(screen.getByText('Identity Scanning & Verification')).toBeInTheDocument()
  })

  it('renders phone verification title', () => {
    render(<IdentityScanningPanel />)
    expect(screen.getByText('Phone Number Verification')).toBeInTheDocument()
  })

  it('shows Active status pill', () => {
    render(<IdentityScanningPanel />)
    expect(screen.getByText('Active')).toBeInTheDocument()
  })

  it('renders document scan with progress text', () => {
    render(<IdentityScanningPanel />)
    expect(screen.getAllByText("Document Scan (ID Card/Driver's License)").length).toBeGreaterThan(0)
    expect(screen.getByText('Processing – 65% Complete')).toBeInTheDocument()
  })

  it('renders the upload button', () => {
    render(<IdentityScanningPanel />)
    expect(screen.getByRole('button', { name: /upload id document/i })).toBeInTheDocument()
  })

  it('upload button is clickable without errors', () => {
    render(<IdentityScanningPanel />)
    fireEvent.click(screen.getByRole('button', { name: /upload id document/i }))
  })
})

describe('UserProfilePanel', () => {
  it('renders all profile field labels', () => {
    render(<UserProfilePanel />)
    expect(screen.getByText('Full Name:')).toBeInTheDocument()
    expect(screen.getByText('Date of Birth:')).toBeInTheDocument()
    expect(screen.getByText('Address:')).toBeInTheDocument()
    expect(screen.getByText('National ID:')).toBeInTheDocument()
  })

  it('shows scanning placeholder for all fields', () => {
    render(<UserProfilePanel />)
    expect(screen.getAllByText('[Scanning...]')).toHaveLength(4)
  })

  it('shows verifying profile badge', () => {
    render(<UserProfilePanel />)
    expect(screen.getByText('Verifying Profile')).toBeInTheDocument()
  })
})
