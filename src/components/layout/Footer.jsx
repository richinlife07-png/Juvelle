import React from 'react';
import { Sparkles } from 'lucide-react';
import { TRUST_BAND, BRAND } from '../../data/content.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="eyebrow">{TRUST_BAND.eyebrow}</p>
        <p className="footer-heading">
          {TRUST_BAND.heading} <Sparkles size={16} strokeWidth={1.6} />
        </p>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>
      </div>

      <style>{`
        .footer {
          background: var(--color-bg-alt);
          border-top: 1px solid var(--color-border);
        }
        .footer-inner {
          padding: 56px 32px 40px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }
        .footer-heading {
          font-family: var(--font-display);
          font-size: 22px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--color-ink);
        }
        .footer-copyright {
          font-size: 12px;
          color: var(--color-body);
          margin-top: 16px;
        }
      `}</style>
    </footer>
  );
}
