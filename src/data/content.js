// All copy lives here, shaped roughly like what a CMS/API response would
// return. Later this module can be replaced by a hook that fetches the same
// shape from the backend (e.g. GET /api/site-content) with no component changes.

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_CONTENT = {
  eyebrow: 'Welcome to Juvelle',
  headline: [
    { text: 'The personal ' },
    { text: 'assistant you\u2019ve ' },
    { text: 'been ' },
    { text: 'waiting for.', italic: true },
  ],
  body: 'Juvelle helps you take back your time, stay organized, and focus on what truly matters. Consider it done.',
  primaryCta: 'Get Started',
  secondaryCta: 'Learn More',
  stats: [
    { icon: 'clock', label: 'Save Time' },
    { icon: 'check-circle', label: 'Stay Organized' },
    { icon: 'sparkles', label: 'Reduce Stress' },
  ],
};

export const HOW_IT_WORKS = {
  eyebrow: 'How It Works',
  heading: 'Seamless support, every step of the way.',
  steps: [
    { icon: 'message-square', title: '1. Connect', body: 'Tell us about your needs and priorities.' },
    { icon: 'calendar', title: '2. Plan', body: 'We create a personalized plan just for you.' },
    { icon: 'check-circle', title: '3. Delegate', body: 'We get to work\u2014efficiently and discreetly.' },
    { icon: 'sparkles', title: '4. Relax', body: 'Enjoy more time and peace of mind.' },
  ],
};

export const WHAT_WE_HELP_WITH = {
  eyebrow: 'What We Help With',
  heading: ['Life is busy.', 'We make it easier.'],
  body: 'From daily task management to special projects, Juvelle is here to handle the details so you can focus on what matters most.',
  cta: 'Explore Services',
  categories: [
    { icon: 'calendar', label: 'Calendar & Schedule Management' },
    { icon: 'mail', label: 'Email & Inbox Management' },
    { icon: 'plane', label: 'Travel Planning & Arrangements' },
    { icon: 'shopping-bag', label: 'Errands & Task Management' },
    { icon: 'file-text', label: 'Research & Information' },
    { icon: 'gift', label: 'Personal & Lifestyle Support' },
  ],
};

export const TRUST_BAND = {
  eyebrow: 'Trusted. Reliable. Discreet.',
  heading: 'Your time is valuable. Your trust is everything.',
};

export const BRAND = {
  name: 'juvelle',
  tagline: 'Personal Assistant',
};

export const PRICING = {
  eyebrow: 'Pricing',
  heading: 'Choose the plan that fits your life.',
  body: 'Start free and upgrade when you\'re ready. No hidden fees, cancel anytime.',
  plans: {
    free: {
      name: 'Free Plan',
      tagline: 'Perfect for students and casual users.',
      price: 'Free',
      cta: 'Get Started',
      features: [
        'AI chat (limited messages per day)',
        'Basic reminders',
        'Basic calendar',
        'To-do lists',
        'Daily planning',
        'A few voice conversations each day',
      ],
    },
    plus: {
      name: 'Juvelle Plus',
      tagline: 'Most users would choose this.',
      price: '9.99',
      cta: 'Start Free Trial',
      features: [
        'Unlimited AI chats',
        'Unlimited voice conversations',
        'Smart reminders',
        'Automatic schedule planning',
        'Personalized productivity suggestions',
        'Memory across conversations',
        'Calendar syncing',
        'Priority responses',
        'Early access to new features',
      ],
    },
    pro: {
      name: 'Juvelle Pro',
      tagline: 'For power users.',
      price: '19.99',
      cta: 'Start Free Trial',
      features: [
        'Everything in Plus, plus:',
        'Email organization',
        'AI-generated daily and weekly plans',
        'Goal tracking',
        'Advanced scheduling',
        'Multiple calendars',
        'Longer memory',
        'Integrations with more apps',
        'Premium voices',
      ],
    },
  },
  studentDiscount: {
    title: '🎓 Student Discount',
    description: '50% off Plus with student verification. Perfect for students who need help staying organized.',
  },
  lifetime: {
    title: 'Lifetime Plan',
    description: 'Limited-time offer for early supporters. Get lifetime access to all Plus features.',
    price: '99–149',
  },
};
