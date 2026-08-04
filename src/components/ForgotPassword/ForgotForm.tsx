import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, ArrowLeft, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

const formSchema = z.object({
  email: z.string().email("Please enter a valid work email address"),
});

type FormData = z.infer<typeof formSchema>;

interface ForgotFormProps {
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
  error: string | null;
}

export const ForgotForm: React.FC<ForgotFormProps> = ({ onSubmit, isLoading, error }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center text-center space-y-2">
        <div className="p-4 bg-primary/10 rounded-full mb-2">
          <Mail className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Forgot your password?
        </h1>
        <p className="text-sm text-muted-foreground max-w-[280px]">
          Enter your work email and we'll send you a secure link to reset your password.
        </p>
      </div>

      {error && (
        <Alert variant="destructive" className="py-2 px-3 border-destructive/50 bg-destructive/10">
          <AlertDescription className="text-xs font-medium">
            {error}
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email address
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="Enter your work email"
              className={`pl-10 h-11 ${errors.email ? "border-destructive focus-visible:ring-destructive" : ""}`}
              {...register("email")}
            />
          </div>
          {errors.email && (
            <p className="text-[12px] font-medium text-destructive mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full h-11 text-base font-semibold" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Reset Link"
          )}
        </Button>
      </form>

      <p className="text-center text-xs text-muted-foreground px-4">
        Didn't receive the email? Check your spam folder or{" "}
        <a href="#" className="text-primary hover:underline font-medium">
          contact support
        </a>
        .
      </p>
    </div>
  );
};