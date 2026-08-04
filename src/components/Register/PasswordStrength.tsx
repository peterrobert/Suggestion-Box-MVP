import { Progress } from "@/components/ui/progress";
import { Check, Circle } from "lucide-react";

interface PasswordStrengthProps {
  password: string;
}

export const PasswordStrength = ({ password }: PasswordStrengthProps) => {
  const getStrength = (pwd: string) => {
    let score = 0;
    if (!pwd) return 0;
    if (pwd.length >= 8) score += 25;
    if (/[A-Z]/.test(pwd)) score += 25;
    if (/[0-9]/.test(pwd)) score += 25;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 25;
    return score;
  };

  const strength = getStrength(password);
  
  const getStrengthLabel = (score: number) => {
    if (score === 0) return "";
    if (score <= 25) return "Weak";
    if (score <= 50) return "Fair";
    if (score <= 75) return "Good";
    return "Strong";
  };

  const getStrengthColor = (score: number) => {
    if (score <= 25) return "bg-destructive";
    if (score <= 50) return "bg-orange-500";
    if (score <= 75) return "bg-yellow-500";
    return "bg-brand-success";
  };

  const requirements = [
    { label: "At least 8 characters", met: password.length >= 8 },
    { label: "One uppercase letter", met: /[A-Z]/.test(password) },
    { label: "One number", met: /[0-9]/.test(password) },
    { label: "One special character", met: /[^A-Za-z0-9]/.test(password) },
  ];

  return (
    <div className="space-y-3 mt-2">
      <div className="flex justify-between items-center text-xs">
        <span className="text-muted-foreground font-medium uppercase tracking-wider">Password Strength</span>
        <span className={`font-semibold ${
          strength <= 25 ? "text-destructive" : 
          strength <= 50 ? "text-orange-500" : 
          strength <= 75 ? "text-yellow-500" : 
          "text-brand-success"
        }`}>
          {getStrengthLabel(strength)}
        </span>
      </div>
      
      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-300 ${getStrengthColor(strength)}`} 
          style={{ width: `${strength}%` }}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
        {requirements.map((req, index) => (
          <div key={index} className="flex items-center gap-2">
            {req.met ? (
              <Check className="h-3 w-3 text-brand-success" />
            ) : (
              <div className="h-3 w-3 rounded-full border border-muted-foreground/30" />
            )}
            <span className={`text-[11px] ${req.met ? "text-brand-success font-medium" : "text-muted-foreground"}`}>
              {req.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};