import React from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

interface PricingToggleProps {
  isAnnual: boolean;
  onToggle: (checked: boolean) => void;
}

export const PricingToggle = ({ isAnnual, onToggle }: PricingToggleProps) => {
  return (
    <div className="flex flex-col items-center gap-4 py-8">
      <div className="flex items-center gap-4">
        <Label
          htmlFor="billing-toggle"
          className={`text-sm font-medium cursor-pointer transition-colors ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}
          onClick={() => onToggle(false)}
        >
          Monthly
        </Label>
        <Switch
          id="billing-toggle"
          checked={isAnnual}
          onCheckedChange={onToggle}
          className="data-[state=checked]:bg-primary"
        />
        <Label
          htmlFor="billing-toggle"
          className={`text-sm font-medium cursor-pointer transition-colors ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}
          onClick={() => onToggle(true)}
        >
          Annual
        </Label>
        <Badge variant="outline" className="ml-2 border-primary/20 text-primary bg-primary/5 font-semibold">
          Save 20%
        </Badge>
      </div>
    </div>
  );
};