import React from "react";
import { Check, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Requirement {
  label: string;
  met: boolean;
}

interface PasswordRequirementsProps {
  requirements: Requirement[];
}

export const PasswordRequirements: React.FC<PasswordRequirementsProps> = ({ requirements }) => {
  return (
    <ul className="space-y-2 mt-4">
      {requirements.map((req, index) => (
        <li key={index} className="flex items-center gap-2 text-xs">
          {req.met ? (
            <Check className="h-3.5 w-3.5 text-[var(--brand-success)]" />
          ) : (
            <Circle className="h-3.5 w-3.5 text-muted-foreground/30 fill-muted-foreground/10" />
          )}
          <span className={cn(
            "transition-colors",
            req.met ? "text-foreground font-medium" : "text-muted-foreground"
          )}>
            {req.label}
          </span>
        </li>
      ))}
    </ul>
  );
};