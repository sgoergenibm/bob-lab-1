'use client';

import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const TABS = [
  {
    id: 'login',
    label: 'Log In',
    step: '01',
  },
  {
    id: 'prioritize',
    label: 'Prioritize',
    step: '02',
  },
  {
    id: 'research',
    label: 'Research',
    step: '03',
  },
  {
    id: 'schedule',
    label: 'Schedule',
    step: '04',
  },
];

const TAB_CONTENT = {
  login: {
    heading: 'Seamless + Secure Log In',
    color: '#0f62fe',
    story:
      "Starting off his day, Fred logs in with single sign-on, providing an easy, secure login experience. He's immediately met with a comprehensive view of market performance, pending tasks, and headlines.",
    highlight:
      '"Summarize today\'s top market headlines for me."',
    highlightLabel: 'Example query',
    features: [
      { label: 'Single Sign-On (SSO)', desc: 'One-click secure access without friction' },
      { label: 'Market Dashboard', desc: 'Instant overview of performance, tasks, and headlines' },
      { label: 'AI Headline Summary', desc: 'Assistant condenses morning news into actionable insights' },
    ],
    tag: 'watsonx Assistant',
  },
  prioritize: {
    heading: 'Quick Identification of High Asset Holding Clients',
    color: '#00b0ff',
    story:
      'Fred catches that IBM had strong Q4 earnings in the summarized headlines. He wants to know the top 5 clients working for IBM ranked by holdings — and asks the Assistant directly.',
    highlight:
      '"Who are my top 5 clients employed by IBM ranked by holdings?"',
    highlightLabel: 'Actual natural language query',
    features: [
      { label: 'Text2SQL Engine', desc: 'Converts natural language into precise SQL queries on the fly' },
      { label: 'Multi-System Data', desc: 'Retrieves data without navigating multiple portals' },
      { label: 'Validated Output', desc: 'Assistant confirms results and suggests next actions' },
    ],
    tag: 'Text2SQL · watsonx.data',
  },
  research: {
    heading: 'Surface Industry + Market Insights',
    color: '#d4bbff',
    story:
      "Fred notices the client's portfolio has a strong healthcare emphasis. Instead of sifting through research documents, he asks the Assistant medical-care inflation questions and receives a concise, cited summary.",
    highlight:
      '"What is the current trend for medical care inflation?"',
    highlightLabel: 'RAG-powered research query',
    features: [
      { label: 'RAG Research', desc: 'Retrieval-Augmented Generation over vectorized research PDFs' },
      { label: 'Geographic Proximity', desc: 'Map view of clients within a 5-mile radius for trip optimization' },
      { label: 'Clickable References', desc: 'Every insight includes a link to the source document' },
    ],
    tag: 'RAG · Geo API · PyZipcodes',
  },
  schedule: {
    heading: 'Smooth Scheduling',
    color: '#78a9ff',
    story:
      'After reviewing the client profile and market research, Fred decides a follow-up meeting is warranted to reassess the strategy. He schedules it directly through the Assistant — keeping everything in one workflow.',
    highlight:
      '"Set up time for me to call the client about a follow-up meeting."',
    highlightLabel: 'Scheduling via natural language',
    features: [
      { label: 'Calendar Integration', desc: 'Direct meeting scheduling without leaving the chat interface' },
      { label: 'Long-Term Goal Alignment', desc: 'Scheduling informed by client strategy and context' },
      { label: 'End-to-End Workflow', desc: 'Full loop from login to action in a single AI-powered session' },
    ],
    tag: 'watsonx Assistant · Calendar API',
  },
};

export default function UserJourney() {
  const [activeTab, setActiveTab] = useState<keyof typeof TAB_CONTENT>('login');
  const { ref, visible } = useIntersectionObserver();
  const content = TAB_CONTENT[activeTab];

  return (
    <section
      id="journey"
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="journey-heading"
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
        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <p className="eyebrow">Demo Flow · User Journey</p>
          <h2
            id="journey-heading"
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 700,
              color: '#f4f4f4',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            Fred&apos;s Workflow with{' '}
            <span style={{ color: '#78a9ff' }}>watsonx</span>
          </h2>
          <p style={{ color: '#8d8d8d', maxWidth: '560px', lineHeight: 1.7 }}>
            Follow Fred Dodd, a Financial Wealth Advisor, as he uses the AI
            assistant to streamline his entire client-prep workflow in one session.
          </p>
        </div>

        {/* Advisor intro card */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            background: '#262626',
            border: '1px solid #393939',
            borderLeft: '4px solid #0f62fe',
            padding: '1.25rem 1.5rem',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
          }}
          aria-label="Advisor persona"
        >
          <div
            aria-hidden="true"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #0f62fe, #00b0ff)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#fff',
            }}
          >
            FD
          </div>
          <div>
            <div style={{ color: '#f4f4f4', fontWeight: 700, fontSize: '0.9375rem' }}>
              Fred Dodd
            </div>
            <div style={{ color: '#8d8d8d', fontSize: '0.8125rem' }}>
              Financial Wealth Advisor — manages client relationships, complex decisions & personalized plans
            </div>
          </div>
          <div
            style={{
              marginLeft: 'auto',
              background: '#0f62fe18',
              border: '1px solid #0f62fe40',
              color: '#78a9ff',
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              padding: '0.25rem 0.75rem',
              textTransform: 'uppercase',
            }}
          >
            Demo Persona
          </div>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Fred's workflow steps"
          className="journey-tabs"
          style={{ marginBottom: '2rem' }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              className={`journey-tab${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id as keyof typeof TAB_CONTENT)}
            >
              <span aria-hidden="true" style={{ opacity: 0.5, marginRight: '0.375rem' }}>
                {tab.step}
              </span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab panel */}
        <div
          key={activeTab}
          role="tabpanel"
          id={`panel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
          style={{ animation: 'fadeUp 0.4s ease forwards' }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {/* Left: story */}
            <div
              style={{
                background: '#1e1e1e',
                border: '1px solid #393939',
                borderTop: `3px solid ${content.color}`,
                padding: '2rem',
              }}
            >
              {/* Tag */}
              <span
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: content.color,
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '0.75rem',
                }}
              >
                {content.tag}
              </span>

              <h3
                style={{
                  color: '#f4f4f4',
                  fontSize: '1.1875rem',
                  fontWeight: 700,
                  lineHeight: 1.3,
                  marginBottom: '1rem',
                }}
              >
                {content.heading}
              </h3>

              <p
                style={{
                  color: '#c6c6c6',
                  lineHeight: 1.75,
                  fontSize: '0.9375rem',
                  marginBottom: '1.5rem',
                }}
              >
                {content.story}
              </p>

              {/* Query highlight */}
              <div
                style={{
                  background: '#262626',
                  borderLeft: `3px solid ${content.color}`,
                  padding: '1rem 1.25rem',
                }}
              >
                <div
                  style={{
                    fontSize: '0.625rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: '#525252',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                  }}
                >
                  {content.highlightLabel}
                </div>
                <blockquote
                  style={{
                    color: '#78a9ff',
                    fontStyle: 'italic',
                    fontSize: '0.9375rem',
                    lineHeight: 1.5,
                    fontWeight: 400,
                    margin: 0,
                  }}
                >
                  {content.highlight}
                </blockquote>
              </div>
            </div>

            {/* Right: features */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1px',
                background: '#393939',
                border: '1px solid #393939',
                alignSelf: 'start',
              }}
              role="list"
              aria-label={`Features for ${content.heading}`}
            >
              {content.features.map((feat) => (
                <div
                  key={feat.label}
                  role="listitem"
                  style={{
                    background: '#1e1e1e',
                    padding: '1.25rem 1.5rem',
                    transition: 'background 0.15s',
                    cursor: 'default',
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
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '0.25rem',
                    }}
                  >
                    <div
                      aria-hidden="true"
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: content.color,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{ color: '#f4f4f4', fontWeight: 600, fontSize: '0.875rem' }}
                    >
                      {feat.label}
                    </span>
                  </div>
                  <p
                    style={{
                      color: '#8d8d8d',
                      fontSize: '0.8125rem',
                      paddingLeft: '1.125rem',
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Progress indicator */}
          <nav
            aria-label="Workflow progress"
            style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem', alignItems: 'center' }}
          >
            {TABS.map((tab) => (
              <button
                key={tab.id}
                aria-label={`Go to step ${tab.step}: ${tab.label}`}
                onClick={() => setActiveTab(tab.id as keyof typeof TAB_CONTENT)}
                style={{
                  width: activeTab === tab.id ? '2rem' : '0.5rem',
                  height: '4px',
                  background: activeTab === tab.id ? content.color : '#393939',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '2px',
                  transition: 'width 0.3s ease, background 0.2s ease',
                  padding: 0,
                }}
              />
            ))}
            <span
              style={{
                fontSize: '0.75rem',
                color: '#525252',
                marginLeft: '0.5rem',
              }}
              aria-live="polite"
            >
              Step {TABS.findIndex((t) => t.id === activeTab) + 1} of {TABS.length}
            </span>
          </nav>
        </div>
      </div>
    </section>
  );
}
