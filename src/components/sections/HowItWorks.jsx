import React from 'react';
import { HOW_IT_WORKS } from '../../data/content.js';
import IconCircle from '../ui/IconCircle.jsx';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="how-heading">
          <p className="eyebrow">{HOW_IT_WORKS.eyebrow}</p>
          <h2>{HOW_IT_WORKS.heading}</h2>
        </div>

        <ol className="steps">
          {HOW_IT_WORKS.steps.map((step, i) => (
            <li className="step" key={step.title}>
              <IconCircle name={step.icon} size={64} />
              {i < HOW_IT_WORKS.steps.length - 1 && <span className="connector" aria-hidden="true" />}
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        .how-it-works {
          background: var(--color-bg-alt);
          padding: 80px 0;
        }
        .how-heading {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 56px;
        }
        .how-heading h2 {
          font-size: 32px;
          margin-top: 14px;
        }
        .steps {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 40px;
          grid-template-columns: repeat(2, 1fr);
          text-align: center;
        }
        .step {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }
        .step h3 {
          font-size: 19px;
        }
        .step p {
          font-size: 14px;
          color: var(--color-body);
          max-width: 24ch;
          line-height: 1.55;
        }
        .connector {
          display: none;
        }
        @media (min-width: 860px) {
          .steps { grid-template-columns: repeat(4, 1fr); }
          .connector {
            display: block;
            position: absolute;
            top: 32px;
            left: calc(50% + 44px);
            width: calc(100% - 44px);
            border-top: 1px dashed var(--color-border);
          }
        }
      `}</style>
    </section>
  );
}
