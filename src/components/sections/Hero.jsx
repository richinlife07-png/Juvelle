import React from 'react';
import { HERO_CONTENT } from '../../data/content.js';
import Button from '../ui/Button.jsx';
import IconCircle from '../ui/IconCircle.jsx';

export default function Hero({ onBookConsultation }) {
  return (
    <section id="home" className="hero container">
      <div className="hero-copy">
        <p className="eyebrow">{HERO_CONTENT.eyebrow}</p>
        <h1 className="hero-headline">
          {HERO_CONTENT.headline.map((part, i) =>
            part.italic ? <em key={i}>{part.text}</em> : <span key={i}>{part.text}</span>
          )}
        </h1>
        <p className="hero-body">{HERO_CONTENT.body}</p>

        <div className="hero-actions">
          <Button onClick={onBookConsultation}>{HERO_CONTENT.primaryCta}</Button>
          <Button as="a" href="#how-it-works" variant="ghost">
            {HERO_CONTENT.secondaryCta}
          </Button>
        </div>

        <div className="hero-stats">
          {HERO_CONTENT.stats.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <IconCircle name={stat.icon} size={40} />
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-art" role="img" aria-label="Photo of a tidy desk with a notebook, mug, laptop and plant">
        <img src="/desk-photo.png" alt="Desk with notebook, mug, laptop and plant" />
      </div>

      <style>{`
        .hero {
          display: grid;
          gap: 48px;
          padding: 48px 32px 72px;
          align-items: center;
        }
        .hero-headline {
          font-size: 44px;
          margin-top: 18px;
          max-width: 15ch;
        }
        .hero-headline em {
          font-style: italic;
          color: var(--color-accent);
        }
        .hero-body {
          margin-top: 22px;
          font-size: 16px;
          line-height: 1.65;
          color: var(--color-body);
          max-width: 46ch;
        }
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 28px;
          margin-top: 32px;
          flex-wrap: wrap;
        }
        .hero-stats {
          display: flex;
          gap: 30px;
          margin-top: 52px;
          flex-wrap: wrap;
        }
        .hero-stat {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          color: var(--color-ink-soft);
          padding-right: 24px;
          border-right: 1px solid var(--color-border);
        }
        .hero-stat:last-child { border-right: none; }
        .hero-art {
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--color-accent-soft);
          box-shadow: 0 24px 48px -24px rgba(16, 53, 42, 0.25);
        }
        .hero-art img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        @media (min-width: 960px) {
          .hero {
            grid-template-columns: 1fr 1fr;
            padding: 64px 32px 96px;
          }
          .hero-headline { font-size: 58px; }
        }
      `}</style>
    </section>
  );
}

function DeskIllustration() {
  return (
    <svg viewBox="0 0 600 460" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="600" height="460" fill="var(--color-bg-alt)" />
      <rect x="0" y="300" width="600" height="160" fill="#EFE7D8" />
      <ellipse cx="150" cy="330" rx="140" ry="16" fill="#00000008" />

      {/* laptop */}
      <g transform="translate(300,150)">
        <rect x="0" y="0" width="230" height="150" rx="10" fill="#2B3245" />
        <rect x="10" y="10" width="210" height="130" rx="4" fill="#171C29" />
        <text x="30" y="60" fontFamily="Cormorant Garamond, serif" fontSize="18" fill="#C9AE85">Focus on</text>
        <text x="30" y="86" fontFamily="Cormorant Garamond, serif" fontSize="18" fill="#C9AE85">your life. We'll</text>
        <text x="30" y="112" fontFamily="Cormorant Garamond, serif" fontSize="18" fill="#C9AE85">handle the rest.</text>
        <path d="M-14 150 L244 150 L262 172 L-32 172 Z" fill="#9AA0AC" />
        <path d="M-14 150 L244 150 L244 156 L-14 156 Z" fill="#B7BCC6" />
      </g>

      {/* notebook */}
      <g transform="translate(60,300)">
        <rect x="0" y="0" width="220" height="90" rx="6" fill="#E7DAC4" />
        <rect x="0" y="0" width="220" height="10" rx="4" fill="#DACBAE" />
        <text x="110" y="52" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="17" fill="#8C7757" textAnchor="middle">juvelle</text>
        <rect x="150" y="-18" width="6" height="55" rx="3" fill="#B78A5C" transform="rotate(18 153 10)" />
      </g>

      {/* mug */}
      <g transform="translate(150,220)">
        <rect x="0" y="0" width="70" height="60" rx="12" fill="#232A3B" />
        <path d="M70 12 h16 a14 14 0 0 1 0 36 h-16" fill="none" stroke="#232A3B" strokeWidth="8" />
        <text x="35" y="38" fontFamily="Cormorant Garamond, serif" fontSize="22" fill="#C9AE85" textAnchor="middle">J</text>
      </g>

      {/* plant */}
      <g transform="translate(370,80)">
        <path d="M40 220 a40 60 0 0 1 80 0 z" fill="#E4D8C4" />
        <path d="M50 220 a30 46 0 0 1 60 0 z" fill="#EFE6D6" />
        <g stroke="#8CA37C" strokeWidth="4" fill="none" strokeLinecap="round">
          <path d="M80 220 C70 160 60 120 30 60" />
          <path d="M80 220 C85 150 95 110 120 40" />
          <path d="M80 220 C82 170 80 140 80 90" />
        </g>
        <g fill="#9BB389">
          <ellipse cx="28" cy="55" rx="14" ry="7" transform="rotate(-30 28 55)" />
          <ellipse cx="120" cy="36" rx="15" ry="7" transform="rotate(35 120 36)" />
          <ellipse cx="82" cy="86" rx="13" ry="6" transform="rotate(5 82 86)" />
        </g>
      </g>
    </svg>
  );
}
