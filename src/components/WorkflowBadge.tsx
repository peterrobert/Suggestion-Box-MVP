import { cn } from "@/lib/utils";

type Stage = "Draft" | "Live" | "In Resolution" | "Verdict Ready" | "Complete";

const stageConfig: Record<Stage, { label: string; className: string }> = {
  Draft: { label: "Draft", className: "bg-gray-100 text-gray-600 border-gray-200" },
  Live: { label: "Live", className: "bg-blue-50 text-blue-700 border-blue-200" },
  "In Resolution": { label: "In Resolution", className: "bg-amber-50 text-amber-700 border-amber-200" },
  "Verdict Ready": { label: "Verdict Ready", className: "bg-purple-50 text-purple-700 border-purple-200" },
  Complete: { label: "Complete", className: "bg-green-50 text-green-700 border-green-200" },
};

interface WorkflowBadgeProps {
  stage: Stage | string;
  size?: "sm" | "md";
  className?: string;
}

export default function WorkflowBadge({ stage, size = "sm", className }: WorkflowBadgeProps) {
  const config = stageConfig[stage as Stage] ?? { label: stage, className: "bg-gray-100 text-gray-600 border-gray-200" };
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full border",
        size === "sm" ? "text-[11px] px-2 py-0.5" : "text-xs px-2.5 py-1",
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}