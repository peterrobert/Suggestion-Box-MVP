import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StepperProps {
  currentStep: number;
  steps: string[];
}

export const Stepper: React.FC<StepperProps> = ({ currentStep, steps }) => {
  return (
    <div className="relative flex justify-between items-start w-full mb-12">
      {/* Connector Lines */}
      <div className="absolute top-5 left-0 w-full h-[2px] bg-border -z-10" />
      <div
        className="absolute top-5 left-0 h-[2px] bg-primary transition-all duration-500 ease-in-out -z-10"
        style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
      />

      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isCurrent = stepNumber === currentStep;

        return (
          <div key={step} className="flex flex-col items-center flex-1">
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 border-2",
                isCompleted
                  ? "bg-[#16A34A] border-[#16A34A] text-white"
                  : isCurrent
                  ? "bg-primary border-primary text-primary-foreground ring-4 ring-primary/20"
                  : "bg-background border-border text-muted-foreground"
              )}
            >
              {isCompleted ? (
                <Check className="w-5 h-5" />
              ) : (
                <span>{stepNumber}</span>
              )}
            </div>
            <span
              className={cn(
                "mt-3 text-xs font-medium text-center px-2",
                isCurrent ? "text-primary" : "text-muted-foreground"
              )}
            >
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
};