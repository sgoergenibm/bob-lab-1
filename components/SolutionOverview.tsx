'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const TECH_STACK = [
  {
    id: 'wxa',
    name: 'watsonx.ai',
    color: '#0f62fe',
    desc: 'Granite & Llama-3 LLMs for planning, reasoning, and natural language understanding.',
  },
  {
    id: 'assistant',
    name: 'watsonx Assistant',
    color: '#00b0ff',
    desc: 'User-facing chat interface with custom JS integrations for seamless advisor interaction.',
  },
  {
    id: 'governance',
    name: 'watsonx.governance',
    color: '#d4bbff',
    desc: 'AI model monitoring and comprehensive governance to mitigate risk across all AI decisions.',
  },
  {
    id: 'data',
    name: 'watsonx.data',
    color: '#78a9ff',
    desc: 'Data lakehouse combining structured PostgreSQL/Iceberg tables and vectorized research documents.',
  },
];

export default function SolutionOverview() {
  const { ref, visible } = useIntersectionObserver();

  return (
    <section
      id="overview"
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="overview-heading"
      style={{
        background: '#1a1a1a',
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
        <p className="eyebrow">Solution Overview</p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
            marginBottom: '4rem',
          }}
        >
          <div>
            <h2
              id="overview-heading"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 700,
                color: '#f4f4f4',
                lineHeight: 1.2,
                marginBottom: '1.5rem',
              }}
            >
              Augmenting Wealth Management with{' '}
              <span style={{ color: '#78a9ff' }}>watsonx</span>
            </h2>
            <p style={{ color: '#c6c6c6', lineHeight: 1.8, marginBottom: '1rem' }}>
              We built a user-friendly chat interface that drives productivity for financial
              advisors by helping them better prioritize, research, and prepare for client
              meetings — all through natural language.
            </p>
            <p style={{ color: '#8d8d8d', lineHeight: 1.8, marginBottom: '1rem' }}>
              This solution does not require the user to be an expert in SQL. Advisors can
              easily ask various client- and market-related questions and make informed
              decisions with easy access to data from internal and external sources.
            </p>
            <p style={{ color: '#8d8d8d', lineHeight: 1.8 }}>
              AI models are monitored to mitigate risk and provide comprehensive governance
              — with semantic search enabled through automated metadata enrichment.
            </p>
          </div>

          {/* Feature callout */}
          <div
            style={{
              background: '#262626',
              border: '1px solid #393939',
              borderLeft: '4px solid #0f62fe',
              padding: '2rem',
            }}
          >
            <h3
              style={{
                color: '#78a9ff',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Why Agentic AI?
            </h3>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.875rem',
              }}
              aria-label="Key differentiators"
            >
              {[
                'Natural language queries — no SQL expertise required',
                'Multi-source data retrieval in a single conversation',
                'Automated planning and reasoning with tool selection',
                'Built-in governance and compliance monitoring',
                'Semantic search via automated metadata enrichment',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    color: '#c6c6c6',
                    fontSize: '0.875rem',
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      width: '18px',
                      height: '18px',
                      background: '#0f62fe',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '1px',
                    }}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 5l2.5 2.5L8 3"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech stack cards */}
        <h3
          style={{
            color: '#8d8d8d',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}
        >
          Technology Stack
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1px',
            background: '#393939',
            border: '1px solid #393939',
          }}
          role="list"
          aria-label="IBM watsonx technology stack"
        >
          {TECH_STACK.map((tech, i) => (
            <div
              key={tech.id}
              role="listitem"
              style={{
                background: '#1e1e1e',
                padding: '1.75rem 1.5rem',
                borderTop: `3px solid ${tech.color}`,
                transition: 'background 0.15s, transform 0.2s',
                cursor: 'default',
                animation: `fadeUp 0.5s ease ${i * 0.1}s both`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = '#262626';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = '#1e1e1e';
                (e.currentTarget as HTMLDivElement).style.transform = 'none';
              }}
            >
              <div
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: tech.color,
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                }}
              >
                {tech.name}
              </div>
              <p style={{ fontSize: '0.875rem', color: '#c6c6c6', lineHeight: 1.6 }}>
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
