import React from "react";
import { cn } from "@/lib/utils";

interface PasswordStrengthProps {
  strength: number; // 0 to 4
}

export const PasswordStrength: React.FC<PasswordStrengthProps> = ({ strength }) => {
  const segments = [0, 1, 2, 3];
  
  const getSegmentColor = (index: number) => {
    if (index >= strength) return "bg-muted";
    
    switch (strength) {
      case 1: return "bg-destructive"; // Red
      case 2: return "bg-amber-500"; // Amber
      case 3: return "bg-yellow-400"; // Yellow
      case 4: return "bg-brand-success"; // Green (using brand variable class if available, else standard)
      default: return "bg-muted";
    }
  };

  const getStrengthText = () => {
    switch (strength) {
      case 1: return "Weak";
      case 2: return "Fair";
      case 3: return "Good";
      case 4: return "Strong";
      default: return "";
    }
  };

  const getStrengthTextColor = () => {
    switch (strength) {
      case 1: return "text-destructive";
      case 2: return "text-amber-600";
      case 3: return "text-yellow-600";
      case 4: return "text-[var(--brand-success)]";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="space-y-2 mt-2">
      <div className="flex gap-1 h-1.5 w-full">
        {segments.map((index) => (
          <div
            key={index}
            className={cn(
              "flex-1 rounded-full transition-colors duration-300",
              getSegmentColor(index)
            )}
          />
        ))}
      </div>
      {strength > 0 && (
        <p className={cn("text-xs font-medium text-right", getStrengthTextColor())}>
          {getStrengthText()}
        </p>
      )}
    </div>
  );
};