import React from "react";
import type { LucideIcon } from "lucide-react";
import { CircleAlert } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AttentionCardProps {
  icon: LucideIcon;
  iconColor: string;
  badgeText: string;
  badgeVariant?: "destructive" | "warning" | "outline" | "secondary" | "default";
  title: string;
  description: string;
  actionText: string;
  onClick?: () => void;
  className?: string;
}

export const AttentionCard: React.FC<AttentionCardProps> = ({
  icon: Icon,
  iconColor,
  badgeText,
  badgeVariant = "default",
  title,
  description,
  actionText,
  onClick,
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-white border border-border rounded-xl p-5 shadow-sm flex flex-col h-full transition-all hover:shadow-md",
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={cn("p-2 rounded-lg bg-opacity-10", iconColor.replace("text-", "bg-"))}>
          <Icon className={cn("w-5 h-5", iconColor)} />
        </div>
        <Badge variant={badgeVariant as any} className="text-[10px] font-bold uppercase tracking-wider">
          {badgeText}
        </Badge>
      </div>
      <h3 className="text-sm font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-xs text-muted-foreground mb-6 flex-1">{description}</p>
      <Button
        variant="ghost"
        className="justify-start p-0 h-auto text-xs font-semibold text-primary hover:bg-transparent hover:text-primary/80 group"
        onClick={onClick}
      >
        {actionText}
        <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
      </Button>
    </div>
  );
};

interface ActivityItemProps {
  avatar: string;
  userName: string;
  action: string;
  target: string;
  targetLink: string;
  time: string;
  dotColor: string;
}

export const ActivityItem: React.FC<ActivityItemProps> = ({
  avatar,
  userName,
  action,
  target,
  targetLink,
  time,
  dotColor,
}) => {
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-[11px] top-[26px] bottom-0 w-px bg-border group-last:hidden" />

      {/* Timeline dot */}
      <div className={cn("absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full border-4 border-background flex items-center justify-center z-10", dotColor)}>
        <div className="w-1.5 h-1.5 rounded-full bg-current" />
      </div>

      <div className="flex items-start gap-3">
        <img
          src={avatar}
          alt={userName}
          className="w-8 h-8 rounded-full border border-border object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <p className="text-sm text-foreground">
            <span className="font-semibold">{userName}</span>{" "}
            <span className="text-muted-foreground">{action}</span>{" "}
            <a href={targetLink} className="font-medium text-primary hover:underline">
              {target}
            </a>
          </p>
          <p className="text-xs text-muted-foreground mt-1">{time}</p>
        </div>
      </div>
    </div>
  );
};

interface WorkflowStageProps {
  stage: string;
  count: number;
  colorClass: string;
  isActive?: boolean;
}

export const WorkflowStage: React.FC<WorkflowStageProps> = ({
  stage,
  count,
  colorClass,
  isActive
}) => {
  return (
    <button className={cn(
      "flex flex-col items-center gap-2 px-4 py-3 rounded-xl border transition-all flex-1 min-w-[120px]",
      isActive ? "border-primary bg-primary/5 ring-1 ring-primary/20" : "border-border bg-card hover:border-primary/30"
    )}>
      <span className={cn("px-2 py-0.5 rounded-full text-[10px] font-bold text-white", colorClass)}>
        {count}
      </span>
      <span className="text-xs font-medium text-foreground whitespace-nowrap">{stage}</span>
    </button>
  );
};

interface QuickActionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export const QuickAction: React.FC<QuickActionProps> = ({ icon: Icon, title, description, href }) => {
  return (
    <a
      href={href}
      className="group p-4 bg-white border border-border rounded-xl flex items-start gap-4 transition-all hover:border-primary/30 hover:shadow-sm"
    >
      <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
        <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold text-foreground">{title}</h4>
          <span className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">→</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{description}</p>
      </div>
    </a>
  );
};

interface ResourceLinkProps {
  icon: LucideIcon;
  title: string;
  href: string;
}

export const ResourceLink: React.FC<ResourceLinkProps> = ({ icon: Icon, title, href }) => {
  return (
    <a
      href={href}
      className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/20 hover:bg-muted/30 transition-all group"
    >
      <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      <span className="text-xs font-medium text-foreground flex-1">{title}</span>
      <span className="text-muted-foreground text-xs group-hover:translate-x-0.5 transition-transform">→</span>
    </a>
  );
};