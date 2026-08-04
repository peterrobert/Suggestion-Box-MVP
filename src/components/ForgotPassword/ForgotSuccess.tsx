import React, { useState, useEffect } from "react";
import { CheckCircle2, ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ForgotSuccessProps {
  email: string;
  onResend: () => void;
  onBack: () => void;
}

export const ForgotSuccess: React.FC<ForgotSuccessProps> = ({ email, onResend, onBack }) => {
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else {
      setCanResend(true);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleResend = () => {
    if (canResend) {
      onResend();
      setCountdown(60);
      setCanResend(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center text-center space-y-2">
        <div className="p-4 bg-brand-success/10 rounded-full mb-2">
          <CheckCircle2 className="h-10 w-10 text-[hsl(var(--brand-success))]" />
        </div>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Check your inbox
        </h1>
        <p className="text-sm text-muted-foreground">
          We've sent a password reset link to your email address. The link expires in 30 minutes.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="px-3 py-1 bg-muted rounded-full text-sm font-medium text-muted-foreground border border-border">
          {email}
        </div>
      </div>

      <div className="space-y-3">
        <Button className="w-full h-11 text-base font-semibold" onClick={() => window.open("mailto:", "_blank")}>
          Open Email App
        </Button>
        
        <div className="text-center">
          <button
            onClick={handleResend}
            disabled={!canResend}
            className={`text-sm font-medium transition-colors ${
              canResend ? "text-primary hover:underline" : "text-muted-foreground cursor-not-allowed"
            }`}
          >
            {canResend ? "Resend email" : `Resend email in ${countdown}s`}
          </button>
        </div>
      </div>

      <div className="pt-2">
        <button
          onClick={onBack}
          className="flex items-center justify-center w-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Login
        </button>
      </div>
    </div>
  );
};