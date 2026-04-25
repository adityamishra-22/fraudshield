'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/lib/theme-context'
import { Shield, LayoutDashboard, Sun, Moon } from 'lucide-react'

export default function Header() {
  const pathname = usePathname()
  const { theme, toggle } = useTheme()

  return (
    <header
      suppressHydrationWarning
      className="sticky top-0 z-50 border-b"
      style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
    >
      <div
        className="mx-auto flex h-[60px] max-w-[1400px] items-center justify-between gap-6 px-6"
        suppressHydrationWarning
      >
        <Link href="/" className="flex items-center gap-2 no-underline">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg"
            style={{ background: 'var(--accent)' }}
          >
            <Shield size={16} color="#fff" />
          </div>
          <span className="text-base font-bold" style={{ color: 'var(--text)' }}>
            FRAUD<span style={{ color: 'var(--accent)' }}>SHIELD</span>
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          <NavLink href="/ad-fraud" active={pathname === '/ad-fraud' || pathname === '/'}>
            <LayoutDashboard size={13} />
            Dashboard
          </NavLink>
          <NavLink href="/identity" active={pathname === '/identity'}>
            <Shield size={13} />
            Identity Verification
          </NavLink>
        </nav>

        <button
          onClick={toggle}
          className="flex h-9 w-9 items-center justify-center rounded-lg border transition-colors"
          style={{ background: 'var(--bg-card2)', borderColor: 'var(--border)', color: 'var(--text-muted)' }}
        >
          {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
        </button>
      </div>
    </header>
  )
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[13.5px] font-medium no-underline transition-all"
      style={{
        color: active ? 'var(--accent)' : 'var(--text-muted)',
        background: active ? 'var(--accent-light)' : 'transparent',
      }}
    >
      {children}
    </Link>
  )
}
