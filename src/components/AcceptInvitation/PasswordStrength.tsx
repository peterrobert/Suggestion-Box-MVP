import React from 'react';
import { cn } from '@/lib/utils';

interface PasswordStrengthProps {
  strength: number; // 0 to 4
}

export const PasswordStrength = ({ strength }: PasswordStrengthProps) => {
  const labels = ['Weak', 'Fair', 'Good', 'Strong', 'Excellent'];
  const colors = [
    'bg-muted',
    'bg-destructive',
    'bg-brand-warning',
    'bg-primary',
    'bg-brand-success'
  ];

  return (
    <div className="space-y-1.5">
      <div className="flex h-1.5 w-full gap-1 overflow-hidden rounded-full bg-muted">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-full flex-1 transition-all duration-300",
              i < strength ? colors[strength] : "bg-transparent"
            )}
          />
        ))}
      </div>
      <div className="flex justify-between items-center">
        <p className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">
          Password Strength
        </p>
        <p className={cn(
          "text-[10px] uppercase tracking-wider font-bold",
          strength > 0 ? "text-foreground" : "text-muted-foreground"
        )}>
          {strength > 0 ? labels[strength] : ''}
        </p>
      </div>
    </div>
  );
};