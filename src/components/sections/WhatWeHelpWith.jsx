import React from 'react';
import { WHAT_WE_HELP_WITH } from '../../data/content.js';
import IconCircle from '../ui/IconCircle.jsx';
import Button from '../ui/Button.jsx';

export default function WhatWeHelpWith({ onBookConsultation }) {
  return (
    <section id="services" className="help">
      <div className="container help-grid">
        <div className="help-copy">
          <p className="eyebrow">{WHAT_WE_HELP_WITH.eyebrow}</p>
          <h2>
            {WHAT_WE_HELP_WITH.heading.map((line) => (
              <React.Fragment key={line}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h2>
          <p className="help-body">{WHAT_WE_HELP_WITH.body}</p>
          <Button onClick={onBookConsultation} variant="ghost">
            {WHAT_WE_HELP_WITH.cta}
          </Button>
        </div>

        <div className="help-divider" aria-hidden="true" />

        <ul className="help-categories">
          {WHAT_WE_HELP_WITH.categories.map((cat) => (
            <li key={cat.label}>
              <IconCircle name={cat.icon} size={48} />
              <span>{cat.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .help {
          padding: 88px 0;
        }
        .help-grid {
          display: grid;
          gap: 40px;
        }
        .help-copy h2 {
          font-size: 32px;
          margin-top: 14px;
        }
        .help-body {
          margin-top: 18px;
          font-size: 15px;
          color: var(--color-body);
          line-height: 1.6;
          max-width: 40ch;
        }
        .help-copy .btn { margin-top: 28px; }
        .help-divider { display: none; }
        .help-categories {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px 24px;
        }
        .help-categories li {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
          font-size: 13px;
          color: var(--color-ink-soft);
          line-height: 1.4;
        }
        @media (min-width: 760px) {
          .help-categories { grid-template-columns: repeat(3, 1fr); }
        }
        @media (min-width: 960px) {
          .help-grid {
            grid-template-columns: 1fr 1px 1.4fr;
            align-items: center;
          }
          .help-divider {
            display: block;
            background: var(--color-border);
            height: 100%;
          }
        }
      `}</style>
    </section>
  );
}
