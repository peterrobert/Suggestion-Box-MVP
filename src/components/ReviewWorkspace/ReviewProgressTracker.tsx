import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type PhaseStatus = "completed" | "current" | "locked";

interface Phase {
  id: number;
  name: string;
  description: string;
  status: PhaseStatus;
}

const phases: Phase[] = [
  { id: 1, name: "FRAME", description: "Define framework", status: "completed" },
  { id: 2, name: "RESOLVE", description: "Work through items", status: "current" },
  { id: 3, name: "DECIDE", description: "Publish verdict", status: "locked" },
];

export function ReviewProgressTracker() {
  return (
    <div className="w-full bg-white border-b border-border px-8 py-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between relative">
        {/* Connector lines */}
        <div className="absolute top-5 left-0 w-full h-0.5 bg-muted -z-0" />
        <div 
          className="absolute top-5 left-0 h-0.5 bg-primary transition-all duration-500 -z-0" 
          style={{ width: "50%" }} // Approximate based on current phase
        />

        {phases.map((phase, idx) => {
          const isCompleted = phase.status === "completed";
          const isCurrent = phase.status === "current";
          const isLocked = phase.status === "locked";

          return (
            <div key={phase.id} className="relative z-10 flex flex-col items-center group">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-200 bg-white",
                  isCompleted && "bg-primary border-primary text-white",
                  isCurrent && "border-teal-500 text-teal-600 ring-4 ring-teal-50",
                  isLocked && "border-muted text-muted-foreground"
                )}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5 stroke-[3px]" />
                ) : (
                  <span className="text-sm font-bold">{phase.id}</span>
                )}
              </div>
              <div className="mt-3 text-center">
                <p className={cn(
                  "text-[11px] font-bold tracking-wider",
                  isCompleted && "text-primary",
                  isCurrent && "text-teal-600",
                  isLocked && "text-muted-foreground"
                )}>
                  {phase.name}
                </p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{phase.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}