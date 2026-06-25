'use client';

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        background: '#161616',
        borderTop: '1px solid #393939',
        padding: '2rem 1rem 1.5rem',
      }}
    >
      <div
        className="section-inner"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* IBM wordmark */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="20"
            height="20"
            aria-hidden="true"
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
          <span style={{ color: '#6f6f6f', fontSize: '0.8125rem' }}>
            IBM Confidential · Client Engineering – Financial Services Market · 2025
          </span>
        </div>

        <nav aria-label="Footer navigation">
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              gap: '1.5rem',
              padding: 0,
              flexWrap: 'wrap',
            }}
          >
            {[
              { label: 'Overview', href: '#overview' },
              { label: 'Business Value', href: '#value' },
              { label: 'User Journey', href: '#journey' },
              { label: 'Architecture', href: '#architecture' },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    color: '#6f6f6f',
                    fontSize: '0.8125rem',
                    textDecoration: 'none',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = '#c6c6c6')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = '#6f6f6f')
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        className="section-inner"
        style={{ marginTop: '1.5rem', borderTop: '1px solid #262626', paddingTop: '1rem' }}
      >
        <p style={{ color: '#525252', fontSize: '0.75rem', lineHeight: 1.6 }}>
          Built with IBM watsonx. All product names, logos, and brands are property of IBM
          Corporation. This solution is built by the IBM Client Engineering team for
          demonstration purposes.
        </p>
      </div>
    </footer>
  );
}
