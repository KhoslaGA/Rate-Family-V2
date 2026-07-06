'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

interface NavigationProps {
  onLinkClick?: () => void
}

export default function Navigation({ onLinkClick }: NavigationProps) {
  const [openDropdown, setOpenDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const insuranceLinks = [
    { href: '/auto-insurance', label: 'Auto Insurance' },
    { href: '/home-insurance', label: 'Home Insurance' },
    { href: '/health-insurance', label: 'Health Insurance' },
    { href: '/life-insurance', label: 'Life Insurance' },
    { href: '/business-insurance', label: 'Business Insurance' },
    { href: '/travel-insurance', label: 'Travel Insurance' },
  ]

  const handleLinkClick = () => {
    setOpenDropdown(false)
    onLinkClick?.()
  }

  return (
    <nav className="flex items-center space-x-1">
      <Link
        href="/"
        className="px-4 py-2 text-primary-600 hover:text-secondary-600 font-medium transition-colors duration-200 rounded-lg hover:bg-gray-50"
        onClick={handleLinkClick}
      >
        Home
      </Link>

      {/* Insurance Products Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpenDropdown(!openDropdown)}
          onMouseEnter={() => setOpenDropdown(true)}
          className="px-4 py-2 text-primary-600 hover:text-secondary-600 font-medium transition-colors duration-200 flex items-center space-x-1 rounded-lg hover:bg-gray-50"
        >
          <span>Insurance</span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${
              openDropdown ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {openDropdown && (
          <div
            className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
            onMouseLeave={() => setOpenDropdown(false)}
          >
            {insuranceLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2.5 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-150 font-medium"
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      <Link
        href="/blog"
        className="px-4 py-2 text-primary-600 hover:text-secondary-600 font-medium transition-colors duration-200 rounded-lg hover:bg-gray-50"
        onClick={handleLinkClick}
      >
        Blog
      </Link>

      <Link
        href="/about"
        className="px-4 py-2 text-primary-600 hover:text-secondary-600 font-medium transition-colors duration-200 rounded-lg hover:bg-gray-50"
        onClick={handleLinkClick}
      >
        About
      </Link>

      <Link
        href="/contact"
        className="px-4 py-2 text-primary-600 hover:text-secondary-600 font-medium transition-colors duration-200 rounded-lg hover:bg-gray-50"
        onClick={handleLinkClick}
      >
        Contact
      </Link>
    </nav>
  )
}
