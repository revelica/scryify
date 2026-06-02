import { Link, useLocation } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'
import { Button } from '@/components/ui/button'
import { Zap, Menu, X } from 'lucide-react'
import { useState } from 'react'

interface NavigationProps {
  theme: 'light' | 'dark'
  toggle: () => void
}

export function Navigation({ theme, toggle }: NavigationProps) {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { to: '/', label: 'Product' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/about', label: 'About' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Zap className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-mono">scryify</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.to
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} toggle={toggle} />
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">Log in</Button>
            <Button size="sm" className="hidden md:inline-flex">Get started</Button>
            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-2">
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="block px-2 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm" className="w-full">Log in</Button>
              <Button size="sm" className="w-full">Get started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
