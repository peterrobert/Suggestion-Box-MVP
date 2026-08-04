import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  User, 
  Lock, 
  Eye, 
  EyeOff, 
  Loader2,
  ChevronLeft
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { RequirementItem } from '@/components/AcceptInvitation/RequirementItem';
import { PasswordStrength } from '@/components/AcceptInvitation/PasswordStrength';
import { InviteInfo } from '@/components/AcceptInvitation/InviteInfo';

const acceptInvitationSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Must contain an uppercase letter')
    .regex(/[0-9]/, 'Must contain a number')
    .regex(/[^a-zA-Z0-9]/, 'Must contain a special character'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type AcceptInvitationForm = z.infer<typeof acceptInvitationSchema>;

const AcceptInvitation = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<AcceptInvitationForm>({
    resolver: zodResolver(acceptInvitationSchema),
    defaultValues: {
      fullName: '',
      password: '',
      confirmPassword: ''
    }
  });

  const passwordValue = watch('password', '');

  const requirements = [
    { label: '8+ characters', met: passwordValue.length >= 8 },
    { label: 'Upper case letter', met: /[A-Z]/.test(passwordValue) },
    { label: 'Number', met: /[0-9]/.test(passwordValue) },
    { label: 'Special character', met: /[^a-zA-Z0-9]/.test(passwordValue) },
  ];

  const calculateStrength = () => {
    if (!passwordValue) return 0;
    let strength = 0;
    if (passwordValue.length >= 8) strength++;
    if (/[A-Z]/.test(passwordValue)) strength++;
    if (/[0-9]/.test(passwordValue)) strength++;
    if (/[^a-zA-Z0-9]/.test(passwordValue)) strength++;
    return strength;
  };

  const onSubmit = async (data: AcceptInvitationForm) => {
    setIsLoading(true);
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    navigate('/onboarding');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-md space-y-6">
        
        <Card className="overflow-hidden border-none shadow-modal bg-card">
          {/* Subtle gradient header */}
          <div className="h-2 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />
          
          <CardContent className="pt-8 space-y-8">
            <InviteInfo 
              orgName="Acme Corporation"
              role="Reviewer"
              inviterName="Sarah Chen"
              note="Join our team to help review and evaluate suggestions transparently."
            />

            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-foreground">
                  Create your account
                </h3>
                <p className="text-sm text-muted-foreground">
                  Complete your profile to join Acme Corporation
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="fullName"
                      placeholder="Jane Doe"
                      className="pl-10 h-11 border-input bg-background/50 focus:bg-background transition-all"
                      {...register('fullName')}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-xs text-destructive font-medium">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password text-sm font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      className="pl-10 pr-10 h-11 border-input bg-background/50 focus:bg-background transition-all"
                      {...register('password')}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  
                  <PasswordStrength strength={calculateStrength()} />
                  
                  <div className="grid grid-cols-2 gap-y-2 pt-1">
                    {requirements.map((req, idx) => (
                      <RequirementItem key={idx} label={req.label} isMet={req.met} />
                    ))}
                  </div>
                  
                  {errors.password && (
                    <p className="text-xs text-destructive font-medium">{errors.password.message}</p>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword text-sm font-medium">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      className="pl-10 h-11 border-input bg-background/50 focus:bg-background transition-all"
                      {...register('confirmPassword')}
                    />
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-xs text-destructive font-medium">{errors.confirmPassword.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-11 text-sm font-semibold shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Joining Organization...
                    </>
                  ) : (
                    'Join Organization'
                  )}
                </Button>
              </form>

              <div className="flex justify-center">
                <Link 
                  to="/login" 
                  className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  <ChevronLeft className="mr-1 h-4 w-4" />
                  Return to Login
                </Link>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="bg-muted/30 border-t py-4 px-6">
            <p className="text-[11px] text-center w-full text-muted-foreground leading-relaxed">
              By joining, you agree to our{' '}
              <a href="#" className="underline hover:text-foreground">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="underline hover:text-foreground">Privacy Policy</a>
            </p>
          </CardFooter>
        </Card>

        {/* Support text or footer could go here */}
      </div>
    </div>
  );
};

export default AcceptInvitation;