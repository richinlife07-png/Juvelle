import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, BRAND } from '../../data/content.js';
import Button from '../ui/Button.jsx';

export default function Navbar({ onBookConsultation }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="brand">
          <span className="brand-name">{BRAND.name}</span>
          <span className="brand-tagline">{BRAND.tagline}</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((link, i) => (
            <a key={link.href} href={link.href} className={i === 0 ? 'active' : ''}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-cta">
          <Button icon={false} onClick={onBookConsultation}>
            Get Started
          </Button>
        </div>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="nav-mobile container">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <Button
            icon={false}
            onClick={() => {
              setOpen(false);
              onBookConsultation();
            }}
          >
            Get Started
          </Button>
        </div>
      )}

      <style>{`
        .navbar {
          background: var(--color-bg);
          position: sticky;
          top: 0;
          z-index: 40;
          border-bottom: 1px solid transparent;
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 22px;
          padding-bottom: 22px;
        }
        .brand {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }
        .brand-name {
          font-family: var(--font-display);
          font-size: 28px;
          letter-spacing: 0.02em;
          color: var(--color-ink);
        }
        .brand-tagline {
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--color-body);
          margin-top: 4px;
        }
        .nav-links {
          display: none;
          gap: 32px;
          font-size: 15px;
          color: var(--color-ink-soft);
        }
        .nav-links a.active {
          color: var(--color-ink);
          padding-bottom: 4px;
          border-bottom: 1px solid var(--color-ink);
        }
        .nav-links a:hover {
          color: var(--color-accent);
        }
        .navbar-cta { display: none; }
        .nav-toggle {
          background: none;
          border: none;
          color: var(--color-ink);
          display: inline-flex;
        }
        .nav-mobile {
          display: flex;
          flex-direction: column;
          gap: 18px;
          padding-bottom: 24px;
          font-size: 16px;
        }
        @media (min-width: 900px) {
          .nav-links { display: flex; }
          .navbar-cta { display: block; }
          .nav-toggle { display: none; }
        }
      `}</style>
    </header>
  );
}
