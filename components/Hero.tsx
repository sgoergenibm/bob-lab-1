'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        a: Math.random(),
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(120,169,255,${p.a * 0.6})`;
        ctx.fill();
      });

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(15,98,254,${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '6rem 1rem 4rem',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #161616 0%, #1a1f35 50%, #161616 100%)',
      }}
    >
      {/* Animated canvas background */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />

      {/* Blue gradient accent */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '40vw',
          height: '40vw',
          maxWidth: '600px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(15,98,254,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="section-inner"
        style={{ position: 'relative', zIndex: 1, width: '100%' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Left copy */}
          <div
            style={{
              animation: 'fadeUp 0.8s ease 0.1s both',
              maxWidth: '640px',
            }}
          >
            <p className="eyebrow">
              Client Engineering · Financial Services Market · 2025
            </p>

            <h1
              id="hero-heading"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                color: '#f4f4f4',
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em',
              }}
            >
              Agentic AI
              <br />
              <span
                style={{
                  background:
                    'linear-gradient(90deg, #78a9ff, #0f62fe 40%, #00b0ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                in Wealth Management
              </span>
            </h1>

            <p
              style={{
                fontSize: '1.125rem',
                color: '#c6c6c6',
                lineHeight: 1.7,
                marginBottom: '2rem',
                maxWidth: '560px',
              }}
            >
              Leveraging Agentic AI, we built a user-friendly chat interface
              that drives productivity for financial advisors — helping them
              better prioritize, research, and prepare for client meetings.
            </p>

            {/* Tech badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '2.5rem',
              }}
              aria-label="IBM watsonx technologies used"
            >
              {['watsonx.ai', 'watsonx Assistant', 'watsonx.governance', 'watsonx.data'].map(
                (tech) => (
                  <span
                    key={tech}
                    style={{
                      background: '#262626',
                      border: '1px solid #393939',
                      color: '#78a9ff',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '0.25rem 0.75rem',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* CTA buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a
                href="#journey"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: '#0f62fe',
                  color: '#fff',
                  padding: '0.875rem 1.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'background 0.15s, transform 0.15s',
                  border: 'none',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = '#0353e9';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = '#0f62fe';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'none';
                }}
              >
                Explore the Demo Flow
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6.002 4L10 8l-3.998 4-.796-.796L8.408 8 5.206 4.796z" />
                </svg>
              </a>

              <a
                href="#overview"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'transparent',
                  color: '#78a9ff',
                  padding: '0.875rem 1.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  border: '1px solid #393939',
                  transition: 'border-color 0.15s, color 0.15s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = '#78a9ff';
                  (e.currentTarget as HTMLAnchorElement).style.color = '#a6c8ff';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = '#393939';
                  (e.currentTarget as HTMLAnchorElement).style.color = '#78a9ff';
                }}
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right stat cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              animation: 'fadeUp 0.8s ease 0.3s both',
            }}
            aria-label="Key capabilities"
          >
            {[
              { num: '4', label: 'IBM watsonx\nProducts', accent: '#0f62fe' },
              { num: 'NLP', label: 'Natural Language\nQueries', accent: '#00b0ff' },
              { num: 'RAG', label: 'AI-Powered\nResearch', accent: '#78a9ff' },
              { num: '360°', label: 'Client Portfolio\nView', accent: '#d4bbff' },
            ].map((stat) => (
              <div
                key={stat.num}
                style={{
                  background: '#1e1e1e',
                  border: `1px solid #393939`,
                  borderTop: `3px solid ${stat.accent}`,
                  padding: '1.5rem',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 32px ${stat.accent}22`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'none';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: stat.accent,
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: '#8d8d8d',
                    lineHeight: 1.4,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '-3rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.25rem',
            animation: 'fadeIn 1s ease 1.5s both',
          }}
        >
          <span style={{ fontSize: '0.625rem', color: '#525252', letterSpacing: '0.1em' }}>
            SCROLL
          </span>
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            style={{ animation: 'fadeUp 1.5s ease infinite' }}
          >
            <rect
              x="1"
              y="1"
              width="14"
              height="22"
              rx="7"
              stroke="#525252"
              strokeWidth="1.5"
            />
            <rect x="7" y="5" width="2" height="4" rx="1" fill="#525252" />
          </svg>
        </div>
      </div>
    </section>
  );
}
