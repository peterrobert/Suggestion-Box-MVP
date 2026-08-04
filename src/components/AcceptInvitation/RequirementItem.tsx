import React from 'react';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RequirementItemProps {
  label: string;
  isMet: boolean;
}

export const RequirementItem = ({ label, isMet }: RequirementItemProps) => {
  return (
    <div className="flex items-center gap-2 text-sm transition-colors duration-200">
      {isMet ? (
        <Check className="h-3.5 w-3.5 text-brand-success" />
      ) : (
        <div className="h-3.5 w-3.5 rounded-full border border-muted-foreground/30" />
      )}
      <span className={cn(
        isMet ? "text-brand-success" : "text-muted-foreground"
      )}>
        {label}
      </span>
    </div>
  );
};