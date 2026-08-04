import { Check, Circle, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

const stages = [
  { id: "draft", label: "Draft", status: "complete" },
  { id: "live", label: "Live", status: "complete" },
  { id: "resolution", label: "In Resolution", status: "current" },
  { id: "verdict", label: "Verdict Ready", status: "locked" },
  { id: "complete", label: "Complete", status: "locked" },
];

export function WorkflowTracker() {
  return (
    <div className="space-y-4">
      {stages.map((stage, idx) => (
        <div key={stage.id} className="flex items-start gap-3 relative">
          {idx !== stages.length - 1 && (
            <div 
              className={cn(
                "absolute left-[9px] top-[22px] w-[2px] h-[calc(100%-10px)]",
                stage.status === "complete" ? "bg-primary" : "bg-border"
              )} 
            />
          )}
          <div className="flex-shrink-0 mt-1">
            {stage.status === "complete" ? (
              <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
            ) : stage.status === "current" ? (
              <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
            ) : (
              <div className="w-5 h-5 rounded-full border-2 border-border flex items-center justify-center">
                <Lock className="w-2.5 h-2.5 text-muted-foreground" />
              </div>
            )}
          </div>
          <div className="flex-1 pb-4">
            <p className={cn(
              "text-sm font-medium leading-none mt-1.5",
              stage.status === "current" ? "text-primary" : 
              stage.status === "locked" ? "text-muted-foreground" : "text-foreground"
            )}>
              {stage.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}