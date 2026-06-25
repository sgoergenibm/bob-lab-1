'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const VALUE_PILLARS = [
  {
    id: 'planning',
    icon: '📊',
    title: 'Optimize Planning Effort',
    color: '#0f62fe',
    items: [
      'Data understanding enabled with semantic search',
      'Better identify emerging trends and opportunities',
      'Analyze and retrieve faster insights',
    ],
  },
  {
    id: 'personalize',
    icon: '🤝',
    title: 'Personalize Client Strategy',
    color: '#00b0ff',
    items: [
      'Create highly customized investment strategies',
      'Adjust portfolios to align with the ever-changing financial landscape',
      'Drive deeper client relationships',
    ],
  },
  {
    id: 'risk',
    icon: '🛡️',
    title: 'Mitigate Risk',
    color: '#d4bbff',
    items: [
      'Act as oversight for high-value and complex portfolios',
      'Proactively monitor compliance',
      'Properly control data access with role-based permissions',
    ],
  },
];

export default function BusinessValue() {
  const { ref, visible } = useIntersectionObserver();

  return (
    <section
      id="value"
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="value-heading"
      style={{
        background: '#161616',
        padding: '5rem 1rem',
        borderTop: '1px solid #262626',
      }}
    >
      <div
        className="section-inner"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(24px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <p className="eyebrow">Business Value</p>
        <h2
          id="value-heading"
          style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 700,
            color: '#f4f4f4',
            lineHeight: 1.2,
            marginBottom: '1rem',
            maxWidth: '640px',
          }}
        >
          Transforming the Advisor&apos;s Role
        </h2>
        <p
          style={{
            color: '#8d8d8d',
            marginBottom: '3rem',
            maxWidth: '560px',
            lineHeight: 1.7,
          }}
        >
          Agentic AI enables advisors to be more{' '}
          <strong style={{ color: '#c6c6c6' }}>streamlined</strong> and{' '}
          <strong style={{ color: '#c6c6c6' }}>specialized</strong> — focusing
          on what matters most: their clients.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
          role="list"
          aria-label="Business value pillars"
        >
          {VALUE_PILLARS.map((pillar, i) => (
            <article
              key={pillar.id}
              role="listitem"
              aria-labelledby={`pillar-${pillar.id}`}
              style={{
                background: '#1e1e1e',
                border: '1px solid #393939',
                borderTop: `3px solid ${pillar.color}`,
                padding: '2rem',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease, background 0.15s',
                animation: visible ? `fadeUp 0.6s ease ${i * 0.15}s both` : 'none',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-6px)';
                el.style.boxShadow = `0 12px 40px ${pillar.color}20`;
                el.style.background = '#262626';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'none';
                el.style.boxShadow = 'none';
                el.style.background = '#1e1e1e';
              }}
            >
              {/* Icon circle */}
              <div
                aria-hidden="true"
                style={{
                  width: '48px',
                  height: '48px',
                  background: `${pillar.color}18`,
                  border: `1px solid ${pillar.color}40`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  marginBottom: '1.25rem',
                }}
              >
                {pillar.icon}
              </div>

              <h3
                id={`pillar-${pillar.id}`}
                style={{
                  color: '#f4f4f4',
                  fontSize: '1rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                  lineHeight: 1.3,
                }}
              >
                {pillar.title}
              </h3>

              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.625rem',
                }}
              >
                {pillar.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.625rem',
                      color: '#a8a8a8',
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        flexShrink: 0,
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: pillar.color,
                        marginTop: '8px',
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Bottom stat bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '0',
            marginTop: '3rem',
            background: '#262626',
            border: '1px solid #393939',
          }}
          aria-label="Workflow steps"
        >
          {['Log In', 'Prioritize', 'Research', 'Schedule'].map((step, i) => (
            <div
              key={step}
              style={{
                padding: '1.5rem',
                borderRight: i < 3 ? '1px solid #393939' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
              }}
            >
              <span
                style={{
                  fontSize: '0.625rem',
                  color: '#525252',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Step {i + 1}
              </span>
              <span style={{ color: '#78a9ff', fontWeight: 600, fontSize: '0.875rem' }}>
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
