import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  Loader2, 
  Inbox, 
  HelpCircle,
  ChevronLeft,
  RefreshCw,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { cn } from '@/lib/utils';

const EmailVerification = () => {
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [redirectProgress, setRedirectProgress] = useState(0);

  // Simulation: Click to verify for demo purposes
  const handleVerifySimulation = () => {
    setIsVerified(true);
  };

  // Resend countdown logic
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  // Redirect progress logic
  useEffect(() => {
    if (isVerified) {
      const interval = setInterval(() => {
        setRedirectProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => navigate('/dashboard'), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isVerified, navigate]);

  const handleResend = () => {
    setIsResending(true);
    // Simulate API call
    setTimeout(() => {
      setIsResending(false);
      setTimeLeft(60);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full bg-background flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Background decoration elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo or Brand Mark */}
        <div className="flex justify-center mb-8">
          <Link to="/landing" className="flex items-center gap-2">
            <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <ShieldCheck className="text-white h-6 w-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">Suggestion Box</span>
          </Link>
        </div>

        <Card className="border-none shadow-modal bg-card/50 backdrop-blur-sm overflow-hidden">
          {!isVerified ? (
            <>
              <CardHeader className="pt-10 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
                    <div className="relative h-24 w-24 bg-accent rounded-full flex items-center justify-center text-primary border-4 border-background">
                      <Mail className="h-10 w-10 animate-bounce" style={{ animationDuration: '3s' }} />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-2xl font-bold tracking-tight">Verify your email</CardTitle>
                  <CardDescription className="text-base">
                    We've sent a verification link to your email address. Please check your inbox to activate your account.
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 pb-8">
                {/* Email Pill */}
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full border border-border group transition-colors hover:border-primary/30">
                    <Inbox className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium text-foreground">sarah@company.com</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    className="w-full h-12 text-base font-semibold group"
                    onClick={handleVerifySimulation}
                  >
                    Open Email App
                    <ExternalLink className="ml-2 h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </Button>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center px-8">
                      <span className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground font-medium">Or</span>
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full h-12 border-border/60 hover:bg-muted transition-colors"
                    onClick={handleResend}
                    disabled={isResending || timeLeft > 0}
                  >
                    {isResending ? (
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    ) : (
                      <RefreshCw className={cn("h-4 w-4 mr-2", timeLeft > 0 && "opacity-50")} />
                    )}
                    {timeLeft > 0 ? `Resend in ${timeLeft}s` : "Resend Verification Email"}
                  </Button>
                </div>

                {/* Secondary Actions */}
                <div className="flex flex-col gap-3 pt-2">
                  <Link 
                    to="/register" 
                    className="text-sm text-center text-muted-foreground hover:text-primary transition-colors underline underline-offset-4 decoration-muted-foreground/30 hover:decoration-primary/50"
                  >
                    Entered the wrong email? Change it
                  </Link>
                  <Link 
                    to="/login" 
                    className="text-sm text-center text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-1 group"
                  >
                    <ChevronLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
                    Back to Login
                  </Link>
                </div>

                {/* Info Tips */}
                <div className="pt-6 border-t border-border/40">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="tips" className="border-none">
                      <AccordionTrigger className="text-xs font-semibold text-muted-foreground hover:text-foreground py-2 hover:no-underline">
                        <div className="flex items-center gap-2">
                          <HelpCircle className="h-3.5 w-3.5" />
                          Didn't receive the email?
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-xs text-muted-foreground leading-relaxed pt-2 space-y-2">
                        <p>• Check your spam or junk folder (sometimes it lands there).</p>
                        <p>• Add <span className="text-foreground font-medium">hello@suggestionbox.com</span> to your safe senders list.</p>
                        <p>• If you're on a corporate network, it might be held in quarantine.</p>
                        <p>• Try using a different email address if the problem persists.</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </CardContent>
            </>
          ) : (
            <>
              <CardHeader className="pt-12 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl" />
                    <div className="relative h-24 w-24 bg-green-50 rounded-full flex items-center justify-center text-green-600 border-4 border-background">
                      <CheckCircle2 className="h-12 w-12" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-2xl font-bold tracking-tight">Email verified!</CardTitle>
                  <CardDescription className="text-base max-w-[280px] mx-auto text-balance">
                    Your account is now active. You're being redirected to your dashboard...
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="pb-12 px-10 space-y-8">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium text-muted-foreground mb-1">
                    <span>Redirecting</span>
                    <span>{redirectProgress}%</span>
                  </div>
                  <Progress value={redirectProgress} className="h-2 bg-muted" />
                </div>

                <Button 
                  className="w-full h-12 text-base font-semibold"
                  asChild
                >
                  <Link to="/dashboard">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </>
          )}
        </Card>

        {/* Footer info */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          &copy; {new Date().getFullYear()} Suggestion Box Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default EmailVerification;