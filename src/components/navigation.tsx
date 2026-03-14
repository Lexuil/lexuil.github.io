'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import type { Locales } from '@/types/locales'
import { sectionTexts } from '@/i18/sections'

interface Props {
  locale: Locales
}

export function Navigation({ locale }: Props) {
  const navItems = sectionTexts[locale].navigation.items
  const toggleMenuAriaLabel = sectionTexts[locale].navigation.toggleMenuAriaLabel
  const [activeSection, setActiveSection] = useState('about')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => item.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled ? 'bg-background/60 backdrop-blur-xl border-b border-border/50' : ''
        )}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-5">
          <div className="flex items-center justify-between">
            <a
              href="#about"
              className="text-foreground font-medium text-sm tracking-tight hover:text-primary transition-colors"
            >
              <span className="font-mono text-primary/60 mr-1">{'<'}</span>
              LX
              <span className="font-mono text-primary/60 ml-1">{'/>'}</span>
            </a>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      'relative px-4 py-2 text-xs tracking-[0.15em] uppercase transition-colors duration-300',
                      activeSection === item.href.slice(1)
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    <span className="font-mono text-primary/50 mr-1.5">0{index + 1}.</span>
                    {item.label}
                    {activeSection === item.href.slice(1) && (
                      <span className="absolute bottom-0 left-4 right-4 h-px bg-primary/50" />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 -m-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label={toggleMenuAriaLabel}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden transition-all duration-300',
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                'text-2xl tracking-tight transition-colors',
                activeSection === item.href.slice(1) ? 'text-foreground' : 'text-muted-foreground'
              )}
            >
              <span className="font-mono text-primary/50 text-sm mr-2">0{index + 1}.</span>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
