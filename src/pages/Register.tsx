import { Zap } from "lucide-react";
import { RegisterLeftPanel } from "@/components/Register/RegisterLeftPanel";
import { RegisterForm } from "@/components/Register/RegisterForm";

const Register = () => {
  return (
    <div className="flex min-h-screen w-full bg-background font-sans selection:bg-primary/20 selection:text-primary">
      {/* Left Panel - Hero & Branding (Visible on large screens) */}
      <RegisterLeftPanel />

      {/* Right Panel - Registration Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 lg:p-12 xl:p-24 bg-background">
        <div className="w-full max-w-md mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Logo Mark for Mobile/Tablets */}
          <div className="flex lg:hidden items-center justify-center gap-2 mb-8">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Zap className="h-6 w-6 text-white fill-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-foreground">Suggestion Box</span>
          </div>

          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex lg:hidden items-center gap-4 mb-4">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div
                    key={step}
                    className={`h-1 w-6 rounded-full ${
                      step === 1 ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Create your account</h2>
            <p className="text-muted-foreground">
              Step 1 of 5 — Let's start with your details
            </p>
          </div>

          {/* Desktop Step Indicator (Visual only, text is in the left panel) */}
          <div className="hidden lg:flex gap-1.5 pt-2">
            {[1, 2, 3, 4, 5].map((step) => (
              <div
                key={step}
                className={`h-1.5 w-full rounded-full transition-colors duration-300 ${
                  step === 1 ? "bg-primary shadow-[0_0_8px_rgba(15,118,110,0.4)]" : "bg-muted"
                }`}
              />
            ))}
          </div>

          <div className="bg-card border border-border/50 rounded-2xl p-1 shadow-sm">
            <div className="bg-card p-6 rounded-[14px]">
              <RegisterForm />
            </div>
          </div>
          
          <div className="lg:hidden text-center text-xs text-muted-foreground mt-8">
            &copy; {new Date().getFullYear()} Suggestion Box Inc. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;