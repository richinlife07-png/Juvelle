import React, { useState } from 'react';
import { X, Check, ChevronRight, Mic, Lock, Sparkles, Clock, Calendar, Sun, Moon, Bot } from 'lucide-react';
import Button from '../ui/Button.jsx';

export default function OnboardingModal({ open, onClose }) {
  const [screen, setScreen] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    nickname: '',
    voice: 'warm-female',
    personality: 'friendly',
    relationship: 'all-in-one',
    wakeUp: '',
    workStart: '',
    workEnd: '',
    bedtime: '',
    timezone: '',
    helpWith: [],
    checkIn: 'morning-evening',
    notifications: true,
    calendar: null,
    appearance: 'automatic',
  });

  const handleContinue = () => {
    if (screen < 12) {
      setScreen(screen + 1);
    } else {
      onClose();
    }
  };

  const handleBack = () => {
    if (screen > 1) {
      setScreen(screen - 1);
    }
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const toggleHelpWith = (item) => {
    if (formData.helpWith.includes(item)) {
      setFormData({ ...formData, helpWith: formData.helpWith.filter(i => i !== item) });
    } else {
      setFormData({ ...formData, helpWith: [...formData.helpWith, item] });
    }
  };

  if (!open) return null;

  const renderScreen = () => {
    switch (screen) {
      case 1:
        return (
          <div className="onboarding-screen">
            <div className="onboarding-icon">
              <Sparkles size={48} strokeWidth={1.6} />
            </div>
            <h2>Let's create your assistant.</h2>
            <p>You're just a few steps away from having an AI designed around you.</p>
          </div>
        );

      case 2:
        return (
          <div className="onboarding-screen">
            <h2>What should I call you?</h2>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleChange('firstName', e.target.value)}
                placeholder="Enter your first name"
              />
            </div>
            <div className="form-group">
              <label>Nickname (Optional)</label>
              <input
                type="text"
                value={formData.nickname}
                onChange={(e) => handleChange('nickname', e.target.value)}
                placeholder="What do you prefer to be called?"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="onboarding-screen">
            <h2>Choose Juvelle's Voice</h2>
            <div className="voice-options">
              {[
                { id: 'warm-female', label: 'Warm Female', icon: '🎙️' },
                { id: 'professional-female', label: 'Professional Female', icon: '🎙️' },
                { id: 'calm-male', label: 'Calm Male', icon: '🎙️' },
                { id: 'friendly-male', label: 'Friendly Male', icon: '🎙️' },
              ].map((voice) => (
                <button
                  key={voice.id}
                  className={`voice-option ${formData.voice === voice.id ? 'selected' : ''}`}
                  onClick={() => handleChange('voice', voice.id)}
                >
                  <span className="voice-icon">{voice.icon}</span>
                  <span>{voice.label}</span>
                  {formData.voice === voice.id && <Check size={16} />}
                </button>
              ))}
              <button className={`voice-option premium ${formData.voice === 'custom' ? 'selected' : ''}`} onClick={() => handleChange('voice', 'custom')}>
                <span className="voice-icon">🔒</span>
                <div className="voice-content">
                  <span>Custom Voice</span>
                  <span className="premium-tag">Juvelle Premium</span>
                </div>
                {formData.voice === 'custom' && <Check size={16} />}
              </button>
            </div>
            <p className="option-note">Upload your own voice or create a personalized AI voice.</p>
          </div>
        );

      case 4:
        return (
          <div className="onboarding-screen">
            <h2>Choose Juvelle's Personality</h2>
            <div className="personality-options">
              {[
                { id: 'friendly', label: 'Friendly', icon: '😊' },
                { id: 'professional', label: 'Professional', icon: '💼' },
                { id: 'calm', label: 'Calm', icon: '🌿' },
                { id: 'motivational', label: 'Motivational', icon: '💪' },
                { id: 'luxury', label: 'Luxury Concierge', icon: '✨' },
              ].map((personality) => (
                <button
                  key={personality.id}
                  className={`personality-option ${formData.personality === personality.id ? 'selected' : ''}`}
                  onClick={() => handleChange('personality', personality.id)}
                >
                  <span className="personality-icon">{personality.icon}</span>
                  <span>{personality.label}</span>
                  {formData.personality === personality.id && <Check size={16} />}
                </button>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="onboarding-screen">
            <h2>What kind of relationship would you like with Juvelle?</h2>
            <div className="relationship-options">
              {[
                { id: 'executive', label: 'Executive Assistant', desc: 'Stay organized, manage tasks, and keep your schedule on track.' },
                { id: 'study', label: 'Study Coach', desc: 'Help with assignments, deadlines, and productivity.' },
                { id: 'wellness', label: 'Wellness Companion', desc: 'Build healthy habits and reduce stress.' },
                { id: 'productivity', label: 'Productivity Partner', desc: 'Keep you focused and help you accomplish more.' },
                { id: 'all-in-one', label: 'All-in-One Assistant', desc: 'A personalized blend of everything.' },
              ].map((rel) => (
                <button
                  key={rel.id}
                  className={`relationship-option ${formData.relationship === rel.id ? 'selected' : ''}`}
                  onClick={() => handleChange('relationship', rel.id)}
                >
                  <div className="relationship-content">
                    <span className="relationship-label">{rel.label}</span>
                    <span className="relationship-desc">{rel.desc}</span>
                  </div>
                  {formData.relationship === rel.id && <Check size={20} />}
                </button>
              ))}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="onboarding-screen">
            <h2>What's your daily schedule like?</h2>
            <div className="schedule-form">
              <div className="form-group">
                <label>Wake-up Time</label>
                <input
                  type="time"
                  value={formData.wakeUp}
                  onChange={(e) => handleChange('wakeUp', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Work/School Start</label>
                <input
                  type="time"
                  value={formData.workStart}
                  onChange={(e) => handleChange('workStart', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Work/School End</label>
                <input
                  type="time"
                  value={formData.workEnd}
                  onChange={(e) => handleChange('workEnd', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Bedtime</label>
                <input
                  type="time"
                  value={formData.bedtime}
                  onChange={(e) => handleChange('bedtime', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Timezone</label>
                <select
                  value={formData.timezone}
                  onChange={(e) => handleChange('timezone', e.target.value)}
                >
                  <option value="">Select timezone</option>
                  <option value="EST">Eastern Time (EST)</option>
                  <option value="CST">Central Time (CST)</option>
                  <option value="MST">Mountain Time (MST)</option>
                  <option value="PST">Pacific Time (PST)</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="onboarding-screen">
            <h2>What would you like help with?</h2>
            <div className="help-with-grid">
              {[
                'Calendar Management', 'Reminders', 'To-do Lists', 'School', 'Email',
                'Fitness', 'Budgeting', 'Travel Planning', 'Meal Planning', 'Appointments',
                'Shopping', 'Research'
              ].map((item) => (
                <button
                  key={item}
                  className={`help-item ${formData.helpWith.includes(item) ? 'selected' : ''}`}
                  onClick={() => toggleHelpWith(item)}
                >
                  <span>{item}</span>
                  {formData.helpWith.includes(item) && <Check size={16} />}
                </button>
              ))}
            </div>
          </div>
        );

      case 8:
        return (
          <div className="onboarding-screen">
            <h2>How often should Juvelle check in?</h2>
            <div className="frequency-options">
              {[
                { id: 'hourly', label: 'Every Hour' },
                { id: 'morning-evening', label: 'Morning & Evening' },
                { id: 'on-demand', label: 'Only When I Ask' },
                { id: 'custom', label: 'Custom Schedule' },
              ].map((freq) => (
                <button
                  key={freq.id}
                  className={`frequency-option ${formData.checkIn === freq.id ? 'selected' : ''}`}
                  onClick={() => handleChange('checkIn', freq.id)}
                >
                  <span>{freq.label}</span>
                  {formData.checkIn === freq.id && <Check size={16} />}
                </button>
              ))}
            </div>
          </div>
        );

      case 9:
        return (
          <div className="onboarding-screen">
            <h2>Notifications</h2>
            <div className="notification-options">
              <button
                className={`notification-option ${formData.notifications ? 'selected' : ''}`}
                onClick={() => handleChange('notifications', true)}
              >
                <span>Allow Notifications</span>
                {formData.notifications && <Check size={16} />}
              </button>
              <button
                className={`notification-option ${!formData.notifications ? 'selected' : ''}`}
                onClick={() => handleChange('notifications', false)}
              >
                <span>Not Now</span>
                {!formData.notifications && <Check size={16} />}
              </button>
            </div>
          </div>
        );

      case 10:
        return (
          <div className="onboarding-screen">
            <h2>Connect Your Calendar</h2>
            <div className="calendar-options">
              {[
                { id: 'google', label: 'Google Calendar' },
                { id: 'apple', label: 'Apple Calendar' },
                { id: 'outlook', label: 'Outlook' },
              ].map((cal) => (
                <button
                  key={cal.id}
                  className={`calendar-option ${formData.calendar === cal.id ? 'selected' : ''}`}
                  onClick={() => handleChange('calendar', cal.id)}
                >
                  <Calendar size={20} strokeWidth={1.6} />
                  <span>{cal.label}</span>
                  {formData.calendar === cal.id && <Check size={16} />}
                </button>
              ))}
              <button
                className={`calendar-option ${formData.calendar === 'skip' ? 'selected' : ''}`}
                onClick={() => handleChange('calendar', 'skip')}
              >
                <span>Skip for Now</span>
                {formData.calendar === 'skip' && <Check size={16} />}
              </button>
            </div>
          </div>
        );

      case 11:
        return (
          <div className="onboarding-screen">
            <h2>Appearance</h2>
            <div className="appearance-options">
              {[
                { id: 'light', label: 'Light Mode', icon: <Sun size={20} strokeWidth={1.6} /> },
                { id: 'dark', label: 'Dark Mode', icon: <Moon size={20} strokeWidth={1.6} /> },
                { id: 'automatic', label: 'Automatic', icon: <Bot size={20} strokeWidth={1.6} /> },
              ].map((theme) => (
                <button
                  key={theme.id}
                  className={`appearance-option ${formData.appearance === theme.id ? 'selected' : ''}`}
                  onClick={() => handleChange('appearance', theme.id)}
                >
                  {theme.icon}
                  <span>{theme.label}</span>
                  {formData.appearance === theme.id && <Check size={16} />}
                </button>
              ))}
              <button
                className={`appearance-option premium ${formData.appearance === 'custom' ? 'selected' : ''}`}
                onClick={() => handleChange('appearance', 'custom')}
              >
                <Lock size={20} strokeWidth={1.6} />
                <div className="appearance-content">
                  <span>Custom Themes</span>
                  <span className="premium-tag">Juvelle Premium</span>
                </div>
                {formData.appearance === 'custom' && <Check size={16} />}
              </button>
            </div>
            <p className="option-note">Exclusive luxury themes and custom color palettes.</p>
          </div>
        );

      case 12:
        return (
          <div className="onboarding-screen loading-screen">
            <div className="loading-spinner">
              <Sparkles size={48} strokeWidth={1.6} className="spin" />
            </div>
            <h2>Creating Juvelle...</h2>
            <div className="loading-steps">
              <div className="loading-step">
                <Check size={16} />
                <span>Learning your preferences</span>
              </div>
              <div className="loading-step">
                <Check size={16} />
                <span>Preparing your dashboard</span>
              </div>
              <div className="loading-step">
                <Check size={16} />
                <span>Setting up your experience</span>
              </div>
            </div>
          </div>
        );

      case 13:
        return (
          <div className="onboarding-screen success-screen">
            <div className="success-icon">
              <Check size={48} strokeWidth={1.6} />
            </div>
            <h2>All Set!</h2>
            <p className="success-desc">Your personal assistant is ready to help you stay organized, save time, and focus on what matters most.</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="modal-overlay onboarding-overlay" onClick={onClose}>
      <div className="modal onboarding-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={20} strokeWidth={2} />
        </button>

        <div className="onboarding-progress">
          <div className="progress-bar" style={{ width: `${(screen / 13) * 100}%` }} />
        </div>

        {renderScreen()}

        {screen < 12 && (
          <div className="onboarding-actions">
            {screen > 1 && (
              <Button variant="ghost" icon={false} onClick={handleBack}>
                Back
              </Button>
            )}
            <Button icon={false} onClick={handleContinue}>
              Continue
              <ChevronRight size={16} />
            </Button>
          </div>
        )}
        
        {screen === 13 && (
          <div className="onboarding-actions">
            <Button icon={false} onClick={onClose}>
              Go to Dashboard
              <ChevronRight size={16} />
            </Button>
          </div>
        )}

        <style>{`
          .onboarding-overlay {
            align-items: center;
            justify-content: center;
          }
          .onboarding-modal {
            max-width: 520px;
            padding: 40px 32px;
            max-height: 90vh;
            overflow-y: auto;
          }
          .onboarding-progress {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: var(--color-bg-alt);
          }
          .progress-bar {
            height: 100%;
            background: var(--color-accent);
            transition: width 0.3s ease;
          }
          .onboarding-screen {
            text-align: center;
            padding: 24px 0;
          }
          .onboarding-icon {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 2px solid var(--color-accent-soft);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-accent);
            margin: 0 auto 24px;
          }
          .onboarding-screen h2 {
            font-size: 24px;
            margin-bottom: 12px;
          }
          .onboarding-screen > p {
            font-size: 15px;
            color: var(--color-body);
            line-height: 1.6;
            max-width: 320px;
            margin: 0 auto;
          }
          .form-group {
            margin-bottom: 16px;
            text-align: left;
          }
          .form-group label {
            display: block;
            font-size: 13px;
            color: var(--color-ink-soft);
            margin-bottom: 6px;
          }
          .form-group input,
          .form-group select {
            width: 100%;
            padding: 12px 14px;
            border-radius: var(--radius-sm);
            border: 1px solid var(--color-border);
            font-family: var(--font-body);
            font-size: 14px;
            background: var(--color-bg);
            color: var(--color-ink);
          }
          .form-group input:focus-visible,
          .form-group select:focus-visible {
            outline: 2px solid var(--color-accent);
          }
          .voice-options,
          .personality-options,
          .relationship-options,
          .frequency-options,
          .notification-options,
          .calendar-options,
          .appearance-options {
            display: grid;
            gap: 12px;
            margin-top: 24px;
          }
          .voice-option,
          .personality-option,
          .frequency-option,
          .notification-option,
          .calendar-option,
          .appearance-option {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            border-radius: var(--radius-sm);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            cursor: pointer;
            transition: all 0.2s ease;
            text-align: left;
          }
          .voice-option:hover,
          .personality-option:hover,
          .frequency-option:hover,
          .notification-option:hover,
          .calendar-option:hover,
          .appearance-option:hover {
            border-color: var(--color-accent-soft);
          }
          .voice-option.selected,
          .personality-option.selected,
          .frequency-option.selected,
          .notification-option.selected,
          .calendar-option.selected,
          .appearance-option.selected {
            border-color: var(--color-accent);
            background: var(--color-accent-soft);
          }
          .voice-icon,
          .personality-icon {
            font-size: 20px;
          }
          .voice-content,
          .appearance-content {
            display: flex;
            flex-direction: column;
          }
          .premium-tag {
            font-size: 11px;
            color: var(--color-accent);
          }
          .voice-option.premium,
          .appearance-option.premium {
            opacity: 0.8;
          }
          .relationship-options {
            grid-template-columns: 1fr;
          }
          .relationship-option {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px;
          }
          .relationship-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }
          .relationship-label {
            font-weight: 500;
            color: var(--color-ink);
          }
          .relationship-desc {
            font-size: 13px;
            color: var(--color-body);
            line-height: 1.4;
          }
          .help-with-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            margin-top: 24px;
          }
          .help-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px;
            border-radius: var(--radius-sm);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            cursor: pointer;
            font-size: 13px;
            transition: all 0.2s ease;
          }
          .help-item:hover {
            border-color: var(--color-accent-soft);
          }
          .help-item.selected {
            border-color: var(--color-accent);
            background: var(--color-accent-soft);
          }
          .schedule-form {
            margin-top: 24px;
            text-align: left;
          }
          .option-note {
            font-size: 12px;
            color: var(--color-ink-soft);
            margin-top: 16px;
          }
          .loading-screen {
            padding: 48px 0;
          }
          .loading-spinner {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 2px solid var(--color-accent-soft);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-accent);
            margin: 0 auto 32px;
          }
          .loading-spinner .spin {
            animation: spin 2s linear infinite;
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .loading-steps {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 32px;
            text-align: left;
          }
          .loading-step {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 14px;
            color: var(--color-ink-soft);
          }
          .loading-step svg {
            color: var(--color-emerald);
          }
          .success-screen {
            padding: 48px 0;
          }
          .success-icon {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 2px solid var(--color-emerald);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-emerald);
            margin: 0 auto 24px;
          }
          .success-desc {
            margin-top: 8px;
          }
          .onboarding-actions {
            display: flex;
            gap: 12px;
            justify-content: flex-end;
            margin-top: 32px;
            padding-top: 24px;
            border-top: 1px solid var(--color-border);
          }
          .onboarding-actions .btn {
            display: flex;
            align-items: center;
            gap: 8px;
          }
        @media (min-width: 480px) {
          .help-with-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
      </div>
    </div>
  );
}
