import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowLeft, Check } from 'lucide-react';
import Button from '../ui/Button.jsx';

export default function AuthModal({ open, onClose }) {
  const [view, setView] = useState('signin'); // signin, signup, forgot
  const [recoveryMethod, setRecoveryMethod] = useState('link'); // link, qr
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    remember: false,
  });
  const [passwordRequirements, setPasswordRequirements] = useState({
    length: false,
    upper: false,
    number: false,
    special: false,
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (open) dialogRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (view === 'signup') {
      const password = formData.password;
      setPasswordRequirements({
        length: password.length >= 8,
        upper: /[A-Z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[@#$%^&*(),.?":{}|<>]/.test(password),
      });
    }
  }, [formData.password, view]);

  if (!open) return null;

  const handleClose = () => {
    setView('signin');
    setFormData({ email: '', password: '', confirmPassword: '', phone: '', remember: false });
    setError('');
    setSuccess(false);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (view === 'signup') {
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
      if (!Object.values(passwordRequirements).every(Boolean)) {
        setError('Please meet all password requirements.');
        return;
      }
    }

    // Simulate API call
    setSuccess(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const switchView = (newView) => {
    setView(newView);
    setError('');
    setSuccess(false);
  };

  return (
    <div className="modal-overlay" onMouseDown={handleClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="authModalTitle"
        tabIndex={-1}
        ref={dialogRef}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={handleClose} aria-label="Close dialog">
          <X size={20} strokeWidth={2} />
        </button>

        {/* Success States */}
        {success && (
          <div className="modal-success open">
            <h3>
              {view === 'signin' && 'Signed in'}
              {view === 'signup' && 'Account created'}
              {view === 'forgot' && 'Link sent'}
            </h3>
            <p>
              {view === 'signin' && 'Welcome back! You\'re all set.'}
              {view === 'signup' && 'Welcome to Juvelle! Your account is ready to go.'}
              {view === 'forgot' && 'Check your phone for a text with a link to reset your password.'}
            </p>
            <Button icon={false} onClick={handleClose}>Done</Button>
          </div>
        )}

        {/* Sign In */}
        {!success && view === 'signin' && (
          <form onSubmit={handleSubmit}>
            <h3 id="authModalTitle">Sign In</h3>
            <p className="modal-sub">Welcome back. Enter your details to continue.</p>

            <label>Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </label>

            <label>Password
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                autoComplete="current-password"
              />
            </label>

            <div className="auth-row-between">
              <label className="remember-me">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />
                Keep me signed in
              </label>
              <button type="button" className="forgot-link" onClick={() => switchView('forgot')}>
                Forgot password?
              </button>
            </div>

            {error && <p className="modal-error">{error}</p>}
            <Button icon={false} type="submit">Sign In</Button>

            <p className="auth-switch">
              Don't have an account? <button type="button" onClick={() => switchView('signup')}>Sign up!</button>
            </p>
          </form>
        )}

        {/* Sign Up */}
        {!success && view === 'signup' && (
          <form onSubmit={handleSubmit}>
            <h3 id="authModalTitle">Create Your Account</h3>
            <p className="modal-sub">Get started in just a minute.</p>

            <label>Email or Phone Number
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="username"
                placeholder="you@email.com or (555) 123-4567"
              />
            </label>

            <label>Password
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                autoComplete="new-password"
              />
            </label>

            <div className="password-requirements">
              <div className={`req ${passwordRequirements.length ? 'met' : ''}`}>
                <span className="req-icon">
                  <Check size={10} strokeWidth={3} />
                </span>
                At least 8 characters
              </div>
              <div className={`req ${passwordRequirements.upper ? 'met' : ''}`}>
                <span className="req-icon">
                  <Check size={10} strokeWidth={3} />
                </span>
                One uppercase letter
              </div>
              <div className={`req ${passwordRequirements.number ? 'met' : ''}`}>
                <span className="req-icon">
                  <Check size={10} strokeWidth={3} />
                </span>
                One number
              </div>
              <div className={`req ${passwordRequirements.special ? 'met' : ''}`}>
                <span className="req-icon">
                  <Check size={10} strokeWidth={3} />
                </span>
                One special character (@ # $ etc.)
              </div>
            </div>

            <label>Confirm Password
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                autoComplete="new-password"
              />
            </label>

            <div className="auth-row-between" style={{ justifyContent: 'flex-start' }}>
              <label className="remember-me">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />
                Keep me signed in
              </label>
            </div>

            {error && <p className="modal-error">{error}</p>}
            <Button icon={false} type="submit">Sign Up</Button>

            <p className="auth-switch">
              Already have an account? <button type="button" onClick={() => switchView('signin')}>Sign in</button>
            </p>
          </form>
        )}

        {/* Forgot Password */}
        {!success && view === 'forgot' && (
          <>
            <button type="button" className="back-link" onClick={() => switchView('signin')}>
              <ArrowLeft size={14} strokeWidth={2} />
              Back to sign in
            </button>
            <h3 id="authModalTitle">Reset Your Password</h3>
            <p className="modal-sub">Choose how you'd like to get your reset link.</p>

            <div className="auth-tabs-recovery">
              <button
                type="button"
                className={recoveryMethod === 'link' ? 'active' : ''}
                onClick={() => setRecoveryMethod('link')}
              >
                Text me a link
              </button>
              <button
                type="button"
                className={recoveryMethod === 'qr' ? 'active' : ''}
                onClick={() => setRecoveryMethod('qr')}
              >
                Scan a QR code
              </button>
            </div>

            {recoveryMethod === 'link' && (
              <form onSubmit={handleSubmit} className="recovery-panel active">
                <label>Phone Number
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(555) 123-4567"
                  />
                </label>
                {error && <p className="modal-error">{error}</p>}
                <Button icon={false} type="submit">Send Reset Link</Button>
              </form>
            )}

            {recoveryMethod === 'qr' && (
              <div className="recovery-panel active">
                <div className="qr-box">
                  <svg width="140" height="140" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" aria-label="QR code placeholder">
                    <rect width="140" height="140" fill="#fff" stroke="var(--color-border)"/>
                    <g fill="var(--color-ink)">
                      <rect x="10" y="10" width="30" height="30"/><rect x="18" y="18" width="14" height="14" fill="#fff"/>
                      <rect x="100" y="10" width="30" height="30"/><rect x="108" y="18" width="14" height="14" fill="#fff"/>
                      <rect x="10" y="100" width="30" height="30"/><rect x="18" y="108" width="14" height="14" fill="#fff"/>
                      <rect x="50" y="10" width="8" height="8"/><rect x="66" y="10" width="8" height="8"/><rect x="82" y="18" width="8" height="8"/>
                      <rect x="50" y="30" width="8" height="8"/><rect x="70" y="34" width="8" height="8"/><rect x="86" y="42" width="8" height="8"/>
                      <rect x="50" y="50" width="8" height="8"/><rect x="62" y="58" width="8" height="8"/><rect x="78" y="50" width="8" height="8"/>
                      <rect x="10" y="50" width="8" height="8"/><rect x="26" y="58" width="8" height="8"/><rect x="10" y="70" width="8" height="8"/>
                      <rect x="50" y="70" width="8" height="8"/><rect x="66" y="78" width="8" height="8"/><rect x="90" y="66" width="8" height="8"/>
                      <rect x="50" y="90" width="8" height="8"/><rect x="66" y="94" width="8" height="8"/><rect x="82" y="90" width="8" height="8"/>
                      <rect x="100" y="50" width="8" height="8"/><rect x="116" y="58" width="8" height="8"/><rect x="100" y="74" width="8" height="8"/>
                      <rect x="100" y="90" width="8" height="8"/><rect x="118" y="100" width="8" height="8"/><rect x="106" y="112" width="8" height="8"/>
                    </g>
                  </svg>
                  <p>Scan this code with your phone's camera to reset your password.</p>
                </div>
              </div>
            )}
          </>
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
        .modal input, .modal textarea {
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
        .modal input:focus-visible, .modal textarea:focus-visible {
          outline: 2px solid var(--color-accent);
        }
        .modal .btn {
          margin-top: 24px;
          width: 100%;
          justify-content: center;
        }
        .modal-error {
          margin-top: 14px;
          font-size: 13px;
          color: #B24343;
        }
        .modal-success {
          text-align: center;
          padding-top: 12px;
          display: none;
        }
        .modal-success.open {
          display: block;
        }
        .modal-success p {
          margin-top: 12px;
          color: var(--color-body);
          font-size: 14px;
        }
        .modal-success .btn {
          margin-top: 24px;
          width: 100%;
          justify-content: center;
        }

        /* Auth specific styles */
        .auth-row-between {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 18px;
        }
        .remember-me {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--color-ink-soft);
        }
        .remember-me input {
          width: auto;
          margin: 0;
          accent-color: var(--color-accent);
        }
        .forgot-link {
          background: none;
          border: none;
          padding: 0;
          font-size: 13px;
          color: var(--color-accent);
        }
        .forgot-link:hover {
          text-decoration: underline;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: var(--color-ink-soft);
          background: none;
          border: none;
          padding: 0;
          margin-bottom: 4px;
        }
        .back-link:hover {
          color: var(--color-accent);
        }

        .password-requirements {
          margin-top: 10px;
          display: grid;
          gap: 6px;
        }
        .password-requirements .req {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: var(--color-body);
          transition: color 0.15s ease;
        }
        .password-requirements .req .req-icon {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px solid var(--color-border);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .password-requirements .req.met {
          color: var(--color-emerald);
        }
        .password-requirements .req.met .req-icon {
          background: var(--color-emerald);
          border-color: var(--color-emerald);
          color: #fff;
        }

        .auth-tabs-recovery {
          display: flex;
          gap: 8px;
          margin-top: 18px;
          background: var(--color-bg);
          border-radius: var(--radius-full);
          padding: 4px;
        }
        .auth-tabs-recovery button {
          flex: 1;
          border: none;
          background: none;
          padding: 9px 10px;
          border-radius: var(--radius-full);
          font-size: 13px;
          color: var(--color-ink-soft);
        }
        .auth-tabs-recovery button.active {
          background: var(--color-ink);
          color: var(--color-bg);
        }
        .recovery-panel {
          display: none;
          margin-top: 18px;
        }
        .recovery-panel.active {
          display: block;
        }
        .qr-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 18px 0 6px;
          text-align: center;
        }
        .qr-box p {
          font-size: 13px;
          color: var(--color-body);
        }

        .auth-switch {
          margin-top: 22px;
          text-align: center;
          font-size: 13px;
          color: var(--color-body);
        }
        .auth-switch button {
          background: none;
          border: none;
          padding: 0;
          color: var(--color-accent);
          font-weight: 500;
          font-size: 13px;
        }
        .auth-switch button:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
