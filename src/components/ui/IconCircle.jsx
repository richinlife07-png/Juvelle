import React from 'react';
import {
  Clock, CheckCircle, Sparkles, MessageSquare, Calendar,
  Mail, Plane, ShoppingBag, FileText, Gift,
} from 'lucide-react';

const ICONS = {
  clock: Clock,
  'check-circle': CheckCircle,
  sparkles: Sparkles,
  'message-square': MessageSquare,
  calendar: Calendar,
  mail: Mail,
  plane: Plane,
  'shopping-bag': ShoppingBag,
  'file-text': FileText,
  gift: Gift,
};

export default function IconCircle({ name, size = 44 }) {
  const Icon = ICONS[name] || Sparkles;
  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        border: '1px solid var(--color-accent-soft)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-accent)',
        flexShrink: 0,
        background: 'var(--color-surface)',
      }}
    >
      <Icon size={size * 0.4} strokeWidth={1.6} />
    </span>
  );
}
