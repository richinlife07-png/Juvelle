import React, { useState } from 'react';
import IconCircle from '../ui/IconCircle.jsx';
import Button from '../ui/Button.jsx';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    setSuccess(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">Get In Touch</p>
          <h2>Let&rsquo;s simplify your day.</h2>
          <p className="contact-body">Have a question before you sign up, or want to talk through what you need help with first? Send a message and your future assistant will get back to you personally.</p>

          <ul className="contact-details">
            <li>
              <IconCircle name="mail" size={40} />
              <div><span className="contact-label">Email</span><span>Juvellehelp@gmail.com</span></div>
            </li>
            <li>
              <IconCircle name="clock" size={40} />
              <div><span className="contact-label">Hours</span><span>Available anytime</span></div>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>Email
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>Message
            <textarea name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
          </label>
          {error && <p className="modal-error">{error}</p>}
          {success && <p className="contact-success">Thanks &mdash; we&rsquo;ll be in touch shortly.</p>}
          <Button type="submit" icon={false}>Send Message</Button>
        </form>
      </div>

      <style>{`
        .contact {
          padding: 88px 0;
          background: var(--color-bg-alt);
        }
        .contact-grid {
          display: grid;
          gap: 48px;
        }
        .contact-copy h2 {
          font-size: 32px;
          margin-top: 14px;
        }
        .contact-body {
          margin-top: 18px;
          font-size: 15px;
          line-height: 1.65;
          color: var(--color-body);
          max-width: 42ch;
        }
        .contact-details {
          list-style: none;
          margin: 32px 0 0;
          padding: 0;
          display: grid;
          gap: 18px;
        }
        .contact-details li {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .contact-details div {
          display: flex;
          flex-direction: column;
          font-size: 14px;
          color: var(--color-ink);
        }
        .contact-label {
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-accent);
          margin-bottom: 2px;
        }
        .contact-form {
          background: var(--color-surface);
          border-radius: var(--radius-md);
          padding: 32px;
          border: 1px solid var(--color-border);
        }
        .contact-form label {
          display: block;
          font-size: 13px;
          color: var(--color-ink-soft);
          margin-top: 16px;
        }
        .contact-form label:first-child {
          margin-top: 0;
        }
        .contact-form input, .contact-form textarea {
          display: block;
          width: 100%;
          margin-top: 6px;
          padding: 11px 12px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
          font-family: var(--font-body);
          font-size: 14px;
          background: var(--color-bg);
          color: var(--color-ink);
        }
        .contact-form input:focus-visible, .contact-form textarea:focus-visible {
          outline: 2px solid var(--color-accent);
        }
        .contact-form .btn {
          margin-top: 20px;
          width: 100%;
          justify-content: center;
        }
        .contact-success {
          margin-top: 14px;
          font-size: 13px;
          color: var(--color-emerald);
        }
        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
}
