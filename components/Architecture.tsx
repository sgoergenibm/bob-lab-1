'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const ARCH_LAYERS = [
  {
    id: 'ui',
    label: 'Interface Layer',
    color: '#0f62fe',
    items: [
      { name: 'Wealth Advisor Chat UI', desc: 'User-facing interface for natural language queries' },
      { name: 'watsonx Assistant', desc: 'AI assistant with custom JS integration' },
    ],
  },
  {
    id: 'agent',
    label: 'AI Agent Layer',
    color: '#00b0ff',
    items: [
      { name: 'AI Service Endpoint', desc: 'Routes requests to the appropriate agent' },
      { name: 'Planning / Reasoning Model', desc: 'Granite LLM + Llama-3 for multi-step task execution' },
      { name: 'Tool Selector', desc: 'Identifies the correct tool based on the natural language query' },
    ],
  },
  {
    id: 'tools',
    label: 'Tool Layer',
    color: '#d4bbff',
    items: [
      { name: 'Text2SQL', desc: 'Dynamically generates SQL and queries via Presto in watsonx.data' },
      { name: 'RAG', desc: 'Retrieval-Augmented Generation over vectorized research documents' },
      { name: 'PyZipcodes / Geo API', desc: 'Lists clients within a geographic radius (e.g., 10 miles)' },
      { name: 'Role-Based Access', desc: 'Enforces data-level permissions per user role' },
    ],
  },
  {
    id: 'data',
    label: 'Data Layer (watsonx.data)',
    color: '#78a9ff',
    items: [
      { name: 'PostgreSQL – Client Table', desc: 'ID, name, address, city, zip, risk profile, etc.' },
      { name: 'Iceberg S3 – Accounts Table', desc: 'ID, client ID, holdings details' },
      { name: 'Iceberg S3 – Holdings Table', desc: 'ID, amount, account holder ID, asset type' },
      { name: 'Vector Store', desc: 'Equity research, bonds, market reports, economic summaries' },
    ],
  },
  {
    id: 'gov',
    label: 'Governance Layer',
    color: '#ff8389',
    items: [
      { name: 'watsonx.governance', desc: 'AI model monitoring and risk mitigation' },
      { name: 'Metadata Enrichment', desc: 'Automated tagging for semantic search across all data sources' },
    ],
  },
];

export default function Architecture() {
  const { ref, visible } = useIntersectionObserver();

  return (
    <section
      id="architecture"
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="arch-heading"
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
        <p className="eyebrow">Solution Architecture</p>
        <h2
          id="arch-heading"
          style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 700,
            color: '#f4f4f4',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}
        >
          How It All Fits Together
        </h2>
        <p
          style={{
            color: '#8d8d8d',
            maxWidth: '560px',
            lineHeight: 1.7,
            marginBottom: '3rem',
          }}
        >
          A multi-layer architecture orchestrates natural language, AI reasoning,
          structured data, documents, and governance into a unified advisor experience.
        </p>

        {/* Flow diagram */}
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#393939' }}
          role="list"
          aria-label="Architecture layers"
        >
          {ARCH_LAYERS.map((layer, li) => (
            <div
              key={layer.id}
              role="listitem"
              style={{
                background: '#1e1e1e',
                borderLeft: `4px solid ${layer.color}`,
                animation: visible ? `fadeUp 0.5s ease ${li * 0.12}s both` : 'none',
              }}
            >
              <div
                style={{
                  padding: '0.875rem 1.5rem',
                  background: '#262626',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  borderBottom: '1px solid #393939',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: layer.color,
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    color: '#f4f4f4',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    letterSpacing: '0.02em',
                  }}
                >
                  {layer.label}
                </span>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1px',
                  background: '#393939',
                }}
              >
                {layer.items.map((item) => (
                  <div
                    key={item.name}
                    style={{
                      background: '#1e1e1e',
                      padding: '1.25rem 1.5rem',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLDivElement).style.background = '#262626')
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLDivElement).style.background = '#1e1e1e')
                    }
                  >
                    <div
                      style={{
                        color: layer.color,
                        fontSize: '0.8125rem',
                        fontWeight: 700,
                        marginBottom: '0.375rem',
                        lineHeight: 1.3,
                      }}
                    >
                      {item.name}
                    </div>
                    <div
                      style={{
                        color: '#8d8d8d',
                        fontSize: '0.8125rem',
                        lineHeight: 1.5,
                      }}
                    >
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Arrow connector between layers */}
              {li < ARCH_LAYERS.length - 1 && (
                <div
                  aria-hidden="true"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '0.5rem',
                    background: '#161616',
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 2v10M4 9l4 4 4-4"
                      stroke="#525252"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Data schema summary */}
        <div
          style={{
            marginTop: '2rem',
            background: '#262626',
            border: '1px solid #393939',
            padding: '1.5rem',
          }}
          aria-label="Data schema overview"
        >
          <h3
            style={{
              color: '#8d8d8d',
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            Data Schema Highlights
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
            }}
          >
            {[
              { type: 'Structured', label: 'Client, Accounts, Holdings', sub: 'PostgreSQL · Iceberg S3 via watsonx.data', color: '#78a9ff' },
              { type: 'Unstructured', label: 'Research Reports, Market Docs', sub: 'Vector store with RAG retrieval', color: '#d4bbff' },
              { type: 'Real-Time', label: 'Live Market Data', sub: 'External API integrations', color: '#00b0ff' },
            ].map((d) => (
              <div key={d.type}>
                <span
                  style={{
                    fontSize: '0.625rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    color: d.color,
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '0.25rem',
                  }}
                >
                  {d.type}
                </span>
                <div style={{ color: '#c6c6c6', fontSize: '0.875rem', fontWeight: 600 }}>
                  {d.label}
                </div>
                <div style={{ color: '#525252', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                  {d.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
