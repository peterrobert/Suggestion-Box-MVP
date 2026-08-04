import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { ForgotForm } from "@/components/ForgotPassword/ForgotForm";
import { ForgotSuccess } from "@/components/ForgotPassword/ForgotSuccess";
import { Card } from "@/components/ui/card";

const ForgotPassword = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleResetSubmit = async (data: { email: string }) => {
    setIsLoading(true);
    setError(null);
    setEmail(data.email);

    // Simulate API call
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate a "not found" error for demonstration if email is "error@example.com"
          if (data.email === "error@example.com") {
            reject(new Error("This email is not registered. Please check and try again."));
          } else {
            resolve(true);
          }
        }, 1500);
      });
      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = () => {
    // Logic for resending the email
    console.log("Resending email to:", email);
  };

  const handleBackToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background relative overflow-hidden">
      {/* Subtle Teal Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #0f766e 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />
      
      <div className="w-full max-w-sm px-4 relative z-10">
        {!isSuccess && (
          <Link
            to="/login"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-6 transition-colors group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Login
          </Link>
        )}

        <Card className="p-8 shadow-card border-border/50 bg-card/50 backdrop-blur-sm rounded-xl">
          {!isSuccess ? (
            <ForgotForm 
              onSubmit={handleResetSubmit} 
              isLoading={isLoading} 
              error={error} 
            />
          ) : (
            <ForgotSuccess 
              email={email} 
              onResend={handleResend} 
              onBack={handleBackToLogin} 
            />
          )}
        </Card>

        {!isSuccess && (
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Remembered your password?{" "}
              <Link to="/login" className="text-primary font-semibold hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;