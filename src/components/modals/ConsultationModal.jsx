import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { useConsultationForm } from '../../hooks/useConsultationForm.js';
import Button from '../ui/Button.jsx';

export default function ConsultationModal({ open, onClose }) {
  const { values, updateField, submit, status, errorMessage, reset } = useConsultationForm();
  const dialogRef = useRef(null);

  useEffect(() => {
    if (open) dialogRef.current?.focus();
  }, [open]);

  if (!open) return null;

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <div className="modal-overlay" onMouseDown={handleClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-title"
        tabIndex={-1}
        ref={dialogRef}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={handleClose} aria-label="Close dialog">
          <X size={20} />
        </button>

        {status === 'success' ? (
          <div className="modal-success">
            <h3 id="consultation-title">Request sent</h3>
            <p>Thanks — someone from Juvelle will reach out shortly to schedule your consultation.</p>
            <Button icon={false} onClick={handleClose}>Done</Button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <h3 id="consultation-title">Book a Consultation</h3>
            <p className="modal-sub">Tell us a bit about yourself and we'll follow up to find a time.</p>

            <label>
              Name
              <input
                type="text"
                required
                value={values.name}
                onChange={(e) => updateField('name', e.target.value)}
              />
            </label>

            <label>
              Email
              <input
                type="email"
                required
                value={values.email}
                onChange={(e) => updateField('email', e.target.value)}
              />
            </label>

            <label>
              Phone <span className="optional">(optional)</span>
              <input
                type="tel"
                value={values.phone}
                onChange={(e) => updateField('phone', e.target.value)}
              />
            </label>

            <label>
              What do you need help with? <span className="optional">(optional)</span>
              <textarea
                rows={3}
                value={values.message}
                onChange={(e) => updateField('message', e.target.value)}
              />
            </label>

            {status === 'error' && <p className="modal-error">{errorMessage}</p>}

            <Button icon={false} type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Request Consultation'}
            </Button>
          </form>
        )}
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(23, 28, 41, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 100;
        }
        .modal {
          background: var(--color-surface);
          border-radius: var(--radius-md);
          padding: 36px;
          width: 100%;
          max-width: 440px;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }
        .modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: none;
          border: none;
          color: var(--color-ink-soft);
        }
        .modal h3 {
          font-size: 26px;
        }
        .modal-sub {
          margin-top: 8px;
          font-size: 14px;
          color: var(--color-body);
        }
        .modal form label {
          display: block;
          font-size: 13px;
          color: var(--color-ink-soft);
          margin-top: 18px;
        }
        .modal .optional {
          color: var(--color-body);
          font-weight: 400;
        }
        .modal input,
        .modal textarea {
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
        .modal input:focus-visible,
        .modal textarea:focus-visible {
          outline: 2px solid var(--color-accent);
        }
        .modal .btn { margin-top: 24px; width: 100%; justify-content: center; }
        .modal-error {
          margin-top: 14px;
          font-size: 13px;
          color: #B24343;
        }
        .modal-success {
          text-align: center;
          padding-top: 12px;
        }
        .modal-success p {
          margin-top: 12px;
          color: var(--color-body);
          font-size: 14px;
        }
        .modal-success .btn { margin-top: 24px; width: 100%; justify-content: center; }
      `}</style>
    </div>
  );
}
