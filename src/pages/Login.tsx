import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  Lightbulb,
  Loader2,
  Chrome,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  rememberMe: z.boolean().default(false),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    setServerError(null);
    
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // For demo purposes, check for a specific "error" case
      if (data.email === "error@example.com") {
        setServerError("Invalid email or password");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      setServerError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    "Structured review workflows",
    "Evidence-based decisions",
    "Complete audit transparency",
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      {/* Left Panel - 45% */}
      <div className="hidden md:flex md:w-[45%] bg-gradient-to-br from-[#0F766E] to-[#115E59] p-12 flex-col justify-between text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-black/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10">
          <div className="mb-12 inline-flex items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <Lightbulb className="w-7 h-7 text-[#5EEAD4]" />
            </div>
            <span className="text-xl font-bold tracking-tight">Suggestion Box</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            Transparent decisions start here.
          </h1>
          <p className="text-lg text-teal-50/80 mb-10 max-w-lg leading-relaxed">
            Collect ideas, review evidence, and publish permanent decision records your entire organization can trust.
          </p>

          <div className="space-y-4 mb-12">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#5EEAD4]" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-1 overflow-hidden shadow-2xl">
            <img className="w-full aspect-[16/10] object-cover rounded-xl" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_1aa6f62cc9_4b40007ce56a3abc.png" alt="SaaS dashboard showing a list of employee suggestions with status badges and review progress bars in" />
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-4 text-teal-50/60 text-sm">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0F766E] bg-teal-100 overflow-hidden">
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png" alt="User" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <p>Trusted by 500+ organizations worldwide</p>
        </div>
      </div>

      {/* Right Panel - 55% */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 lg:p-24 bg-background">
        <div className="w-full max-w-sm space-y-8">
          {/* Mobile Logo */}
          <div className="flex md:hidden justify-center mb-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-bold">Suggestion Box</span>
            </div>
          </div>

          <div className="text-center md:text-left space-y-2">
            <h2 className="text-[28px] font-bold tracking-tight text-foreground">Welcome back</h2>
            <p className="text-muted-foreground">Sign in to your Suggestion Box account</p>
          </div>

          <Card className="border-none shadow-none md:shadow-sm md:border md:bg-card">
            <CardContent className="p-0 md:p-6 pt-0 md:pt-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {serverError && (
                  <div className="p-3 text-sm font-medium text-destructive bg-destructive/10 border border-destructive/20 rounded-md">
                    {serverError}
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@company.com"
                      className={cn(
                        "pl-10",
                        errors.email && "border-destructive focus-visible:ring-destructive"
                      )}
                      {...register("email")}
                      disabled={isLoading}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs font-medium text-destructive">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      to="/forgot-password"
                      className="text-xs font-medium text-primary hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className={cn(
                        "pl-10 pr-10",
                        errors.password && "border-destructive focus-visible:ring-destructive"
                      )}
                      {...register("password")}
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-xs font-medium text-destructive">{errors.password.message}</p>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="rememberMe"
                    onCheckedChange={(checked) => {
                      // Manual check handling for react-hook-form integration if needed
                      // but basic register works for simple booleans too if we match types
                    }}
                    {...register("rememberMe")}
                    disabled={isLoading}
                  />
                  <label
                    htmlFor="rememberMe"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me for 30 days
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#0F766E] hover:bg-[#115E59] text-white h-11"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background md:bg-card px-2 text-muted-foreground">
                    or continue with
                  </span>
                </div>
              </div>

              <Button
                variant="outline"
                type="button"
                className="w-full h-11"
                disabled={isLoading}
              >
                <Chrome className="w-4 h-4 mr-2" />
                Continue with Google
              </Button>
            </CardContent>
          </Card>

          <p className="text-center text-sm text-muted-foreground">
            New organization?{" "}
            <Link
              to="/register"
              className="font-semibold text-primary hover:underline inline-flex items-center"
            >
              Create your organization <ArrowRight className="ml-1 w-3.5 h-3.5" />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}