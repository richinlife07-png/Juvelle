import React, { useState } from 'react';
import { X, Camera, Lock } from 'lucide-react';
import Button from '../ui/Button.jsx';

export default function PaymentModal({ open, onClose, plan, onPaymentSuccess }) {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    name: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  const planDetails = {
    plus: { name: 'Juvelle Plus', price: '$9.99', isLifetime: false },
    pro: { name: 'Juvelle Pro', price: '$19.99', isLifetime: false },
    lifetime: { name: 'Juvelle Lifetime', price: '$99–149', isLifetime: true },
  };

  const currentPlan = planDetails[plan] || planDetails.plus;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.cardNumber || !formData.expiry || !formData.cvv || !formData.name) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    setSuccess(true);
    if (onPaymentSuccess) {
      setTimeout(() => onPaymentSuccess(), 1000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleScanCard = () => {
    setIsScanning(true);
    // Simulate scanning - in real app, this would use camera API
    setTimeout(() => {
      setIsScanning(false);
      setFormData({ ...formData, cardNumber: '4242 4242 4242 4242' });
    }, 2000);
  };

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal payment-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        {success ? (
          <div className="modal-success">
            <div className="success-icon">
              <Lock size={32} strokeWidth={1.6} />
            </div>
            <h2>Payment Successful</h2>
            <p>Your {currentPlan.name} subscription is now active. You can start using all features immediately.</p>
            <Button icon={false} onClick={onClose}>Get Started</Button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <h2>Complete Your Subscription</h2>
              <p className="modal-subtitle">{currentPlan.name} &mdash; {currentPlan.isLifetime ? currentPlan.price + ' one-time' : currentPlan.price + '/month'}</p>
            </div>

            <form className="payment-form" onSubmit={handleSubmit}>
              <label>Card Number
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                />
              </label>

              <div className="form-row">
                <label>Expiry Date
                  <input
                    type="text"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    maxLength={5}
                  />
                </label>
                <label>CVV
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="123"
                    maxLength={3}
                  />
                </label>
              </div>

              <label>Name on Card
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
              </label>

              {isScanning && (
                <div className="scanning-indicator">
                  <Camera size={20} strokeWidth={1.6} />
                  <span>Scanning card...</span>
                </div>
              )}

              {error && <p className="modal-error">{error}</p>}

              <div className="payment-summary">
                <div className="summary-row">
                  <span>{currentPlan.name}</span>
                  <span>{currentPlan.isLifetime ? currentPlan.price + ' one-time' : currentPlan.price + '/month'}</span>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>{currentPlan.isLifetime ? currentPlan.price : currentPlan.price + '/month'}</span>
                </div>
              </div>

              <Button type="submit" icon={false} className="payment-submit">
                {currentPlan.isLifetime ? 'Pay ' + currentPlan.price : 'Pay ' + currentPlan.price + '/month'}
              </Button>

              <p className="payment-note">
                <Lock size={12} strokeWidth={1.6} />
                Your payment information is secure and encrypted.
              </p>
            </form>
          </>
        )}
      </div>

      <style>{`
        .payment-modal {
          max-width: 480px;
        }
        .modal-header {
          text-align: center;
          margin-bottom: 32px;
        }
        .modal-header h2 {
          font-size: 24px;
          margin-bottom: 8px;
        }
        .modal-subtitle {
          font-size: 14px;
          color: var(--color-body);
          margin: 0;
        }

        .payment-form label {
          display: block;
          font-size: 13px;
          color: var(--color-ink-soft);
          margin-bottom: 6px;
        }
        .payment-form input {
          display: block;
          width: 100%;
          padding: 12px 14px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
          font-family: var(--font-body);
          font-size: 14px;
          background: var(--color-bg);
          color: var(--color-ink);
        }
        .payment-form input:focus-visible {
          outline: 2px solid var(--color-accent);
        }

        .card-input-wrapper {
          position: relative;
        }
        .scan-card-btn {
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: var(--color-accent);
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .scan-card-btn:hover {
          color: var(--color-emerald);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .scanning-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px;
          background: var(--color-accent-soft);
          border-radius: var(--radius-sm);
          color: var(--color-accent);
          font-size: 13px;
          margin-top: 16px;
        }

        .payment-summary {
          margin: 24px 0;
          padding: 16px;
          background: var(--color-bg-alt);
          border-radius: var(--radius-sm);
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: var(--color-ink-soft);
          margin-bottom: 8px;
        }
        .summary-row.total {
          font-size: 16px;
          font-weight: 500;
          color: var(--color-ink);
          margin-bottom: 0;
          padding-top: 8px;
          border-top: 1px solid var(--color-border);
        }

        .payment-submit {
          width: 100%;
          justify-content: center;
        }

        .payment-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 12px;
          color: var(--color-ink-soft);
          margin-top: 16px;
        }

        .modal-success {
          text-align: center;
          padding: 32px 0;
        }
        .success-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          border: 2px solid var(--color-emerald);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-emerald);
          margin: 0 auto 24px;
        }
        .modal-success h2 {
          font-size: 24px;
          margin-bottom: 12px;
        }
        .modal-success p {
          font-size: 14px;
          color: var(--color-body);
          margin-bottom: 24px;
          max-width: 280px;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </div>
  );
}
