import { CheckCircle2, Circle, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TimelineItem {
  date: string;
  label: string;
  status: "completed" | "pending" | "current";
  actor: {
    name: string;
    avatar?: string;
  };
}

const history: TimelineItem[] = [
  {
    date: "Feb 15, 2025",
    label: "Verdict Published",
    status: "completed",
    actor: { name: "James Park", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" }
  },
  {
    date: "Feb 10, 2025",
    label: "Verdict Ready",
    status: "completed",
    actor: { name: "James Park", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" }
  },
  {
    date: "Feb 1, 2025",
    label: "In Resolution started",
    status: "completed",
    actor: { name: "System", avatar: "" }
  },
  {
    date: "Jan 20, 2025",
    label: "Reviewer assigned",
    status: "completed",
    actor: { name: "Admin", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" }
  },
  {
    date: "Jan 10, 2025",
    label: "Suggestion submitted",
    status: "completed",
    actor: { name: "Sarah Chen", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" }
  }
];

export function DecisionHistory() {
  return (
    <div className="space-y-6">
      {history.map((item, index) => (
        <div key={index} className="relative flex gap-4">
          {index !== history.length - 1 && (
            <div className="absolute left-[15px] top-8 bottom-[-24px] w-0.5 bg-border" />
          )}
          
          <div className="relative z-10 flex-shrink-0">
            {item.status === "completed" ? (
              <div className="w-8 h-8 rounded-full bg-brand-success/10 flex items-center justify-center border border-brand-success/20">
                <CheckCircle2 className="w-4 h-4 text-brand-success" />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center border border-border">
                <Circle className="w-3 h-3 text-muted-foreground" />
              </div>
            )}
          </div>
          
          <div className="flex-1 pt-0.5 pb-6">
            <div className="flex justify-between items-start mb-1">
              <h4 className={`text-sm font-semibold ${item.status === "completed" ? "text-foreground" : "text-muted-foreground"}`}>
                {item.label}
              </h4>
              <span className="text-[10px] font-medium text-muted-foreground whitespace-nowrap">{item.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Avatar className="w-4 h-4">
                {item.actor.avatar ? (
                  <AvatarImage src={item.actor.avatar} />
                ) : null}
                <AvatarFallback className="text-[8px] bg-muted">
                  <User className="w-2 h-2" />
                </AvatarFallback>
              </Avatar>
              <span className="text-[11px] text-muted-foreground">{item.actor.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}