"use client";

import { cn } from "@/lib/utils";

interface WizardStepperProps {
  steps: string[];
  current: number;
}

export function WizardStepper({ steps, current }: WizardStepperProps) {
  return (
    <div className="flex items-center gap-2">
      {steps.map((step, idx) => (
        <div key={step} className="flex items-center gap-2">
          <div
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold transition-colors",
              idx < current
                ? "bg-primary text-primary-foreground"
                : idx === current
                ? "bg-primary/10 text-primary ring-2 ring-primary"
                : "bg-muted text-muted-foreground"
            )}
          >
            {idx < current ? "✓" : idx + 1}
          </div>
          <span
            className={cn(
              "text-xs font-medium hidden sm:inline",
              idx <= current ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {step}
          </span>
          {idx < steps.length - 1 && (
            <div
              className={cn(
                "h-0.5 w-6 sm:w-10",
                idx < current ? "bg-primary" : "bg-muted"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}
