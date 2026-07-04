import React from 'react';
import IconCircle from '../ui/IconCircle.jsx';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-copy">
          <p className="eyebrow">About Juvelle</p>
          <h2>A personal assistant, built around your actual day.</h2>
          <p className="about-body">
            Juvelle pairs you with a dedicated personal assistant who handles the small, constant
            demands on your time &mdash; so your calendar, inbox, errands, and to-do list stop
            competing for your attention. No apps to manage, no hand-offs between strangers.
            Just one point of contact who already knows how you like things done.
          </p>
          <p className="about-body">
            We started Juvelle around a simple idea: the people who could benefit most from a
            personal assistant are usually the ones with the least time to manage one. So we
            built the relationship to be low-effort from day one &mdash; a short onboarding call,
            a plan tailored to how you actually work, and an assistant who follows through
            without needing to be micromanaged.
          </p>

          <div className="about-stats">
            <div className="about-stat">
              <h3>1:1</h3>
              <p>A dedicated assistant, not a rotating queue</p>
            </div>
            <div className="about-stat">
              <h3>24/7</h3>
              <p>Requests picked up any time, day or night</p>
            </div>
            <div className="about-stat">
              <h3>100%</h3>
              <p>Discreet &mdash; your information stays private</p>
            </div>
          </div>
        </div>

        <ul className="about-values">
          <li>
            <IconCircle name="sparkles" size={48} />
            <div>
              <h4>Personalized</h4>
              <p>Every plan is built around your habits and preferences, not a generic checklist.</p>
            </div>
          </li>
          <li>
            <IconCircle name="message-square" size={48} />
            <div>
              <h4>Responsive</h4>
              <p>Reach your assistant directly &mdash; no ticket queues or generic support inboxes.</p>
            </div>
          </li>
          <li>
            <IconCircle name="check-circle" size={48} />
            <div>
              <h4>Trusted</h4>
              <p>Every assistant is vetted, and everything you share stays strictly confidential.</p>
            </div>
          </li>
          <li>
            <IconCircle name="clock" size={48} />
            <div>
              <h4>Efficient</h4>
              <p>Tasks get done right the first time, so you spend less time explaining and following up.</p>
            </div>
          </li>
        </ul>
      </div>

      <style>{`
        .about {
          padding: 88px 0 8px;
          background: var(--color-bg);
        }
        .about-grid {
          max-width: 1020px;
          margin: 0 auto;
        }
        .about-copy {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
        }
        .about-copy h2 {
          font-size: 32px;
          margin-top: 14px;
        }
        .about-body {
          margin-top: 20px;
          font-size: 15px;
          line-height: 1.75;
          color: var(--color-body);
          text-align: left;
        }
        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 48px;
          padding-top: 40px;
          border-top: 1px solid var(--color-border);
        }
        .about-stat h3 {
          font-size: 34px;
          color: var(--color-accent);
        }
        .about-stat p {
          margin-top: 8px;
          font-size: 12.5px;
          color: var(--color-ink-soft);
          line-height: 1.5;
        }

        .about-values {
          list-style: none;
          margin: 56px 0 0;
          padding: 40px 0 0;
          border-top: 1px solid var(--color-border);
          display: grid;
          gap: 28px;
          grid-template-columns: 1fr;
        }
        .about-values li {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .about-values h4 {
          font-size: 17px;
          font-family: var(--font-display);
          color: var(--color-ink);
        }
        .about-values p {
          margin-top: 4px;
          font-size: 13.5px;
          color: var(--color-body);
          line-height: 1.55;
        }
        @media (min-width: 760px) {
          .about-values {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px 40px;
          }
        }
      `}</style>
    </section>
  );
}
