import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Button({
  children,
  variant = 'primary',
  icon = true,
  as: Component = 'button',
  ...rest
}) {
  const className = variant === 'primary' ? 'btn btn-primary' : 'btn btn-ghost';

  return (
    <Component className={className} {...rest}>
      {children}
      {icon && <ArrowRight size={16} strokeWidth={2} />}
    </Component>
  );
}
