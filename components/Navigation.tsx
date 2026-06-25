'use client';

import { useState, useEffect, useCallback } from 'react';

const NAV_ITEMS = [
  { label: 'Overview', href: '#overview' },
  { label: 'Business Value', href: '#value' },
  { label: 'User Journey', href: '#journey' },
  { label: 'Architecture', href: '#architecture' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <header
      className="nav-header"
      style={{
        borderBottomColor: scrolled ? '#393939' : 'transparent',
        background: scrolled ? 'rgba(22,22,22,0.97)' : 'rgba(22,22,22,0.7)',
      }}
      role="banner"
    >
      <div className="nav-inner">
        {/* Logo */}
        <a href="#top" className="nav-logo" aria-label="IBM watsonx – go to top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="24"
            height="24"
            aria-hidden="true"
            focusable="false"
          >
            <rect width="32" height="32" fill="#0f62fe" rx="2" />
            <text
              x="50%"
              y="55%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#ffffff"
              fontSize="11"
              fontWeight="700"
              fontFamily="IBM Plex Sans, sans-serif"
            >
              IBM
            </text>
          </svg>
          <span>watsonx · Wealth Management</span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation">
          <ul className="nav-links" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <li>
              <a href="#journey" className="nav-cta">
                See Demo
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((o) => !o)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#f4f4f4',
            cursor: 'pointer',
            padding: '0.5rem',
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M6 6l8 8M6 14l8-8" stroke="currentColor" strokeWidth="1.5" fill="none" />
            ) : (
              <>
                <rect y="3" width="20" height="2" />
                <rect y="9" width="20" height="2" />
                <rect y="15" width="20" height="2" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          style={{
            position: 'absolute',
            top: '48px',
            left: 0,
            right: 0,
            background: '#161616',
            borderBottom: '1px solid #393939',
            animation: 'fadeUp 0.2s ease forwards',
          }}
        >
          <ul role="list" style={{ listStyle: 'none', padding: '0.5rem 0' }}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '0.875rem 1.5rem',
                    color: '#c6c6c6',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    borderBottom: '1px solid #262626',
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
