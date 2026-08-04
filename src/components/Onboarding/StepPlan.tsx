import React from 'react';
import type { UseFormReturn } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StepPlanProps {
  form: UseFormReturn<any>;
}

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    price: '$1',
    period: '/month',
    description: 'Perfect for small teams and startups.',
    features: ['Up to 50 suggestions', 'Basic analytics', 'Email support'],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 'Custom',
    period: '',
    description: 'Advanced features for growing organizations.',
    features: ['Unlimited suggestions', 'Advanced reporting', 'Priority support', 'SAML SSO'],
  },
];

export const StepPlan: React.FC<StepPlanProps> = ({ form }) => {
  const selectedPlan = form.watch('plan', 'basic');

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="plan"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {plans.map((plan) => (
                  <label
                    key={plan.id}
                    className={cn(
                      "relative flex flex-col p-6 cursor-pointer rounded-xl border-2 transition-all duration-200 hover:border-primary/50 bg-card",
                      selectedPlan === plan.id
                        ? "border-primary ring-1 ring-primary/20 bg-primary/[0.02]"
                        : "border-border"
                    )}
                  >
                    <input
                      type="radio"
                      className="sr-only"
                      checked={selectedPlan === plan.id}
                      onChange={() => field.onChange(plan.id)}
                    />
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-lg">{plan.name}</h3>
                        <p className="text-sm text-muted-foreground">{plan.description}</p>
                      </div>
                      {selectedPlan === plan.id && (
                        <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                          <Check className="h-4 w-4 text-primary-foreground" />
                        </div>
                      )}
                    </div>
                    <div className="mt-auto pt-4 border-t border-border">
                      <div className="flex items-baseline mb-4">
                        <span className="text-3xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground ml-1">{plan.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm">
                            <Check className="h-3 w-3 mr-2 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </label>
                ))}
              </div>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};