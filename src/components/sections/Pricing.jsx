import React from 'react';
import { PRICING } from '../../data/content.js';
import Button from '../ui/Button.jsx';
import { Check, Star, Gem, GraduationCap } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="pricing-header">
          <p className="eyebrow">{PRICING.eyebrow}</p>
          <h2>{PRICING.heading}</h2>
          <p className="pricing-body">{PRICING.body}</p>
        </div>

        <div className="pricing-grid">
          {/* Free Plan */}
          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3>{PRICING.plans.free.name}</h3>
              <p className="pricing-tagline">{PRICING.plans.free.tagline}</p>
              <div className="pricing-price">
                <span className="price-amount">{PRICING.plans.free.price}</span>
              </div>
            </div>
            <ul className="pricing-features">
              {PRICING.plans.free.features.map((feature, i) => (
                <li key={i}>
                  <Check size={16} strokeWidth={2} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button icon={false} variant="ghost" className="pricing-cta">
              {PRICING.plans.free.cta}
            </Button>
          </div>

          {/* Plus Plan */}
          <div className="pricing-card featured">
            <div className="pricing-badge">
              <Star size={14} strokeWidth={2} />
              <span>Most Popular</span>
            </div>
            <div className="pricing-card-header">
              <h3>{PRICING.plans.plus.name}</h3>
              <p className="pricing-tagline">{PRICING.plans.plus.tagline}</p>
              <div className="pricing-price">
                <span className="price-amount">${PRICING.plans.plus.price}</span>
                <span className="price-period">/month</span>
              </div>
            </div>
            <ul className="pricing-features">
              {PRICING.plans.plus.features.map((feature, i) => (
                <li key={i}>
                  <Check size={16} strokeWidth={2} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button icon={false} className="pricing-cta">
              {PRICING.plans.plus.cta}
            </Button>
          </div>

          {/* Pro Plan */}
          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3>{PRICING.plans.pro.name}</h3>
              <p className="pricing-tagline">{PRICING.plans.pro.tagline}</p>
              <div className="pricing-price">
                <span className="price-amount">${PRICING.plans.pro.price}</span>
                <span className="price-period">/month</span>
              </div>
            </div>
            <ul className="pricing-features">
              {PRICING.plans.pro.features.map((feature, i) => (
                <li key={i}>
                  <Check size={16} strokeWidth={2} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button icon={false} variant="ghost" className="pricing-cta">
              {PRICING.plans.pro.cta}
            </Button>
          </div>
        </div>

        {/* Student Discount */}
        <div className="student-discount">
          <div className="student-discount-icon">
            <GraduationCap size={24} strokeWidth={1.6} />
          </div>
          <div className="student-discount-content">
            <h4>{PRICING.studentDiscount.title}</h4>
            <p>{PRICING.studentDiscount.description}</p>
          </div>
        </div>

        {/* Lifetime Plan */}
        <div className="lifetime-offer">
          <div className="lifetime-badge">
            <Gem size={16} strokeWidth={1.6} />
            <span>Limited Time</span>
          </div>
          <h4>{PRICING.lifetime.title}</h4>
          <p>{PRICING.lifetime.description}</p>
          <div className="lifetime-price">
            <span className="price-amount">${PRICING.lifetime.price}</span>
            <span className="price-period">one-time</span>
          </div>
        </div>
      </div>

      <style>{`
        .pricing {
          padding: 88px 0;
          background: var(--color-bg-alt);
        }
        .pricing-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 56px;
        }
        .pricing-header h2 {
          font-size: 32px;
          margin-top: 14px;
        }
        .pricing-body {
          margin-top: 18px;
          font-size: 15px;
          color: var(--color-body);
          line-height: 1.6;
        }

        .pricing-grid {
          display: grid;
          gap: 32px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 760px) {
          .pricing-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .pricing-card {
          background: var(--color-surface);
          border-radius: var(--radius-md);
          padding: 32px;
          border: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .pricing-card.featured {
          border-color: var(--color-accent);
          box-shadow: 0 8px 32px -8px rgba(182, 145, 47, 0.3);
        }

        .pricing-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--color-accent);
          color: var(--color-bg);
          padding: 6px 16px;
          border-radius: var(--radius-full);
          font-size: 12px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .pricing-card-header {
          text-align: center;
          margin-bottom: 24px;
        }
        .pricing-card-header h3 {
          font-size: 22px;
          margin-bottom: 8px;
        }
        .pricing-tagline {
          font-size: 13px;
          color: var(--color-body);
          margin-bottom: 16px;
        }
        .pricing-price {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 4px;
        }
        .price-amount {
          font-size: 42px;
          font-weight: 500;
          color: var(--color-ink);
          font-family: var(--font-display);
        }
        .price-period {
          font-size: 14px;
          color: var(--color-ink-soft);
        }

        .pricing-features {
          list-style: none;
          margin: 0 0 24px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }
        .pricing-features li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          color: var(--color-ink-soft);
          line-height: 1.5;
        }
        .pricing-features li svg {
          color: var(--color-accent);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .pricing-cta {
          width: 100%;
          justify-content: center;
        }

        .student-discount {
          margin-top: 48px;
          background: var(--color-surface);
          border-radius: var(--radius-md);
          padding: 24px 32px;
          border: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .student-discount-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid var(--color-accent-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-accent);
          flex-shrink: 0;
        }
        .student-discount-content h4 {
          font-size: 18px;
          margin-bottom: 4px;
        }
        .student-discount-content p {
          font-size: 14px;
          color: var(--color-body);
          margin: 0;
        }

        .lifetime-offer {
          margin-top: 32px;
          background: linear-gradient(135deg, var(--color-ink) 0%, var(--color-emerald) 100%);
          border-radius: var(--radius-md);
          padding: 32px;
          text-align: center;
          color: var(--color-bg);
        }
        .lifetime-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.15);
          padding: 6px 16px;
          border-radius: var(--radius-full);
          font-size: 12px;
          margin-bottom: 16px;
        }
        .lifetime-offer h4 {
          font-size: 22px;
          margin-bottom: 8px;
          color: var(--color-bg);
        }
        .lifetime-offer p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 20px;
        }
        .lifetime-offer .lifetime-price {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 4px;
        }
        .lifetime-offer .price-amount {
          font-size: 36px;
          color: var(--color-bg);
        }
        .lifetime-offer .price-period {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </section>
  );
}
