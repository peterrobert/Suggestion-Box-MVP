import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Notification {
  id: string;
  type: 'verdict' | 'assignment' | 'comment' | 'system' | 'activity' | 'invite' | 'evidence';
  icon: React.ReactNode;
  avatar?: string;
  user?: string;
  title: string;
  description: string;
  suggestionTitle?: string;
  timestamp: string;
  priority?: 'High' | 'Normal' | 'Low';
  isRead: boolean;
  category: string;
}

interface NotificationItemProps {
  notification: Notification;
  isActive?: boolean;
  onClick: (notification: Notification) => void;
}

export function NotificationItem({ notification, isActive, onClick }: NotificationItemProps) {
  return (
    <div
      onClick={() => onClick(notification)}
      className={cn(
        "group relative flex gap-4 p-4 transition-all cursor-pointer border-b border-border bg-white hover:bg-muted/50",
        !notification.isRead && "border-l-[3px] border-l-primary bg-primary/5",
        isActive && "bg-muted shadow-sm"
      )}
    >
      <div className="flex-shrink-0 mt-1">
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center bg-muted text-muted-foreground group-hover:bg-white transition-colors",
          !notification.isRead && "bg-white text-primary"
        )}>
          {notification.icon}
        </div>
      </div>

      <div className="flex-shrink-0 mt-1">
        <Avatar className="h-10 w-10 border border-border">
          {notification.avatar ? (
            <AvatarImage src={notification.avatar} alt={notification.user || "System"} />
          ) : (
            <AvatarFallback className="bg-muted text-xs font-semibold">
              {notification.user?.substring(0, 2).toUpperCase() || "SYS"}
            </AvatarFallback>
          )}
        </Avatar>
      </div>

      <div className="flex-1 min-w-0 space-y-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <h4 className={cn(
              "text-sm font-medium text-foreground leading-tight",
              !notification.isRead && "font-semibold"
            )}>
              {notification.title}
            </h4>
            {notification.priority === 'High' && (
              <Badge variant="destructive" className="h-4 px-1.5 text-[10px] uppercase tracking-wider">
                High
              </Badge>
            )}
            {notification.priority === 'Low' && (
              <Badge variant="outline" className="h-4 px-1.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                Low
              </Badge>
            )}
          </div>
          <span className="text-[11px] text-muted-foreground whitespace-nowrap pt-0.5">
            {notification.timestamp}
          </span>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 leading-snug">
          {notification.description}
        </p>

        {notification.suggestionTitle && (
          <div className="pt-1">
            <span className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground ring-1 ring-inset ring-border">
              Re: {notification.suggestionTitle}
            </span>
          </div>
        )}
      </div>

      <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}