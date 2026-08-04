import { cn } from "@/lib/utils";
import { User, MessageSquare, FileUp, CheckCircle2, RefreshCw } from "lucide-react";

const events = [
  {
    id: 1,
    type: "status",
    user: "System",
    content: "moved this suggestion to",
    target: "In Resolution",
    time: "2 hours ago",
    icon: RefreshCw,
    iconColor: "text-amber-500",
  },
  {
    id: 2,
    type: "comment",
    user: "James Park",
    content: "added a comment in Discussion",
    time: "2 hours ago",
    icon: MessageSquare,
    iconColor: "text-blue-500",
  },
  {
    id: 3,
    type: "evidence",
    user: "Sarah Chen",
    content: "uploaded new evidence:",
    target: "Current User Journey Map.pdf",
    time: "4 hours ago",
    icon: FileUp,
    iconColor: "text-purple-500",
  },
  {
    id: 4,
    type: "assignment",
    user: "Sarah Chen",
    content: "assigned the reviewer role to",
    target: "James Park",
    time: "Jan 12, 10:45 AM",
    icon: User,
    iconColor: "text-slate-500",
  },
  {
    id: 5,
    type: "creation",
    user: "Sarah Chen",
    content: "created the suggestion",
    time: "Jan 10, 09:30 AM",
    icon: CheckCircle2,
    iconColor: "text-green-500",
  },
];

export function ActivityTab() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 py-4 max-w-2xl">
      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-border before:via-border before:to-transparent">
        {events.map((event) => (
          <div key={event.id} className="relative flex items-start gap-6 group">
            <div className="absolute left-0 mt-1.5 w-10 h-10 flex items-center justify-center bg-white rounded-full border shadow-sm z-10 group-hover:border-primary/50 transition-colors">
              <event.icon className={cn("w-4 h-4", event.iconColor)} />
            </div>
            <div className="flex-1 ml-12 pt-1.5 pb-2">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{event.user}</span>{" "}
                  {event.content}{" "}
                  {event.target && (
                    <span className="font-medium text-primary">{event.target}</span>
                  )}
                </p>
                <span className="text-xs text-muted-foreground">{event.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}