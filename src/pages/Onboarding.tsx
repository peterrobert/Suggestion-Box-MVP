import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { Stepper } from '@/components/Onboarding/Stepper';
import { StepAccount } from '@/components/Onboarding/StepAccount';
import { StepOrganization } from '@/components/Onboarding/StepOrganization';
import { StepPlan } from '@/components/Onboarding/StepPlan';
import { StepPayment } from '@/components/Onboarding/StepPayment';
import { StepInvite } from '@/components/Onboarding/StepInvite';
import { cn } from '@/lib/utils';

// Multi-step form schema
const onboardingSchema = z.object({
  // Step 1: Account
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid work email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
  // Step 2: Organization
  orgName: z.string().min(2, 'Organization name is required'),
  slug: z.string().min(2, 'Slug is required').regex(/^[a-z0-9-]+$/, 'Slug must be lowercase alphanumeric and hyphens'),
  industry: z.string().min(1, 'Industry is required'),
  orgSize: z.string().min(1, 'Organization size is required'),
  country: z.string().min(1, 'Country is required'),
  // Step 3: Plan
  plan: z.enum(['basic', 'pro']),
  // Step 4: Payment
  cardHolder: z.string().optional(),
  cardNumber: z.string().optional(),
  expiry: z.string().optional(),
  cvc: z.string().optional(),
  billingAddress: z.string().optional(),
  billingCity: z.string().optional(),
  billingZip: z.string().optional(),
  // Step 5: Invite
  invitees: z.array(z.object({
    email: z.string().email(),
    role: z.string(),
  })).default([]),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type OnboardingValues = z.infer<typeof onboardingSchema>;

const STEPS = [
  { title: 'Account', description: 'Create your personal account' },
  { title: 'Organization', description: 'Tell us about your company' },
  { title: 'Plan', description: 'Choose a plan that fits your needs' },
  { title: 'Payment', description: 'Secure your subscription' },
  { title: 'Invite Team', description: 'Bring your colleagues onboard' },
];

const Onboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const form = useForm<OnboardingValues>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      orgName: '',
      slug: '',
      industry: '',
      orgSize: '',
      country: '',
      plan: 'basic',
      cardHolder: '',
      cardNumber: '',
      expiry: '',
      cvc: '',
      billingAddress: '',
      billingCity: '',
      billingZip: '',
      invitees: [],
    },
    mode: 'onChange',
  });

  const nextStep = async () => {
    // Validate current step fields before proceeding
    let fieldsToValidate: any[] = [];
    if (currentStep === 1) fieldsToValidate = ['fullName', 'email', 'password', 'confirmPassword'];
    if (currentStep === 2) fieldsToValidate = ['orgName', 'slug', 'industry', 'orgSize', 'country'];
    if (currentStep === 3) fieldsToValidate = ['plan'];
    if (currentStep === 4) fieldsToValidate = ['cardHolder', 'cardNumber', 'expiry', 'cvc', 'billingAddress', 'billingCity', 'billingZip'];

    const result = await form.trigger(fieldsToValidate as any);
    if (result) {
      if (currentStep < STEPS.length) {
        setCurrentStep((prev) => prev + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Final submit
        onSubmit(form.getValues());
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const onSubmit = async (data: OnboardingValues) => {
    setIsSubmitting(true);
    // Simulate API call
    console.log('Submitting onboarding data:', data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    navigate('/dashboard');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <StepAccount form={form} />;
      case 2: return <StepOrganization form={form} />;
      case 3: return <StepPlan form={form} />;
      case 4: return <StepPayment form={form} />;
      case 5: return <StepInvite form={form} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto w-full">
        {/* Progress Stepper */}
        <Stepper 
          currentStep={currentStep} 
          steps={STEPS.map(s => s.title)} 
        />

        {/* Step Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {STEPS[currentStep - 1].title}
          </h1>
          <p className="text-muted-foreground">
            {STEPS[currentStep - 1].description}
          </p>
        </div>

        {/* Form Card */}
        <Card className="border-none shadow-card rounded-xl">
          <CardContent className="p-8 md:p-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {renderStep()}

                <div className="pt-8 mt-8 border-t border-border flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-muted-foreground">
                      Step {currentStep} of {STEPS.length}
                    </span>
                    {currentStep === 5 && (
                      <button 
                        type="button" 
                        onClick={() => navigate('/dashboard')}
                        className="text-xs text-muted-foreground hover:text-primary transition-colors mt-1 underline-offset-4 hover:underline"
                      >
                        Skip for now
                      </button>
                    )}
                  </div>

                  <div className="flex gap-3">
                    {currentStep > 1 && (
                      <Button 
                        type="button" 
                        variant="ghost" 
                        onClick={prevStep}
                        disabled={isSubmitting}
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back
                      </Button>
                    )}
                    
                    <Button 
                      type="button" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground min-w-[120px]"
                      onClick={nextStep}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Processing
                        </>
                      ) : (
                        <>
                          {currentStep === STEPS.length ? 'Complete Setup' : 'Continue'}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Footer info */}
        <div className="mt-8 text-center text-xs text-muted-foreground">
          <p>© 2024 Suggestion Box Inc. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link to="/terms" className="hover:text-foreground">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;