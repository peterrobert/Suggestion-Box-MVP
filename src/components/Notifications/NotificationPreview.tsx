import React from "react";
import type { Notification } from "./NotificationItem";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  X,
  ExternalLink,
  Reply,
  FileText,
  Clock,
  ChevronRight,
  MoreVertical,
  CheckCircle2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface NotificationPreviewProps {
  notification: Notification | null;
  onClose: () => void;
}

export function NotificationPreview({ notification, onClose }: NotificationPreviewProps) {
  if (!notification) return null;

  return (
    <div className="h-full flex flex-col bg-white border-l border-border animate-in slide-in-from-right duration-300">
      {/* Header */}
      <div className="h-14 flex items-center justify-between px-4 border-b border-border bg-white flex-shrink-0">
        <h3 className="text-sm font-semibold">Notification Details</h3>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 text-muted-foreground">
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-6">
        {/* Content */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Avatar className="h-12 w-12 border-2 border-background shadow-sm">
              {notification.avatar ? (
                <AvatarImage src={notification.avatar} alt={notification.user} />
              ) : (
                <AvatarFallback className="bg-muted text-sm font-semibold">
                  {notification.user?.substring(0, 2).toUpperCase() || "SY"}
                </AvatarFallback>
              )}
            </Avatar>
            <div className="space-y-1 pt-1">
              <h2 className="text-base font-semibold leading-tight text-foreground">{notification.title}</h2>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                <Clock className="w-3 h-3" /> {notification.timestamp}
              </p>
            </div>
          </div>

          <p className="text-sm text-foreground leading-relaxed">
            {notification.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            <Badge variant="outline" className="text-[11px] font-medium py-0 h-6">
              {notification.category}
            </Badge>
            {notification.priority && (
              <Badge
                variant={notification.priority === 'High' ? 'destructive' : 'secondary'}
                className="text-[11px] font-medium py-0 h-6"
              >
                {notification.priority} Priority
              </Badge>
            )}
          </div>
        </div>

        {/* Suggestion Card */}
        {notification.suggestionTitle && (
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Related Suggestion</h4>
            <div className="p-3 rounded-xl border border-border bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group">
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-xs font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                  {notification.suggestionTitle}
                </span>
                <ExternalLink className="w-3 h-3 text-muted-foreground flex-shrink-0" />
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-[10px] bg-brand-light/30 text-primary border-brand-light h-5">
                  Verdict Ready
                </Badge>
                <span className="text-[10px] text-muted-foreground">by {notification.user || 'Admin'}</span>
              </div>
            </div>
          </div>
        )}

        {/* Recent Activity */}
        <div className="space-y-4">
          <h4 className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Recent Activity</h4>
          <div className="space-y-4 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-border">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-3 relative z-10">
                <div className="w-6 h-6 rounded-full bg-white border border-border flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
                <div className="space-y-1 pt-0.5">
                  <p className="text-xs text-foreground">
                    <span className="font-semibold">Sarah Chen</span> added a comment
                  </p>
                  <p className="text-[10px] text-muted-foreground">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="p-4 border-t border-border bg-white space-y-2">
        <Button className="w-full justify-start gap-2 h-10 bg-primary hover:bg-brand-hover text-white shadow-sm transition-all">
          <ExternalLink className="w-4 h-4" />
          Open Suggestion
        </Button>
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" className="gap-2 h-10 border-border hover:bg-muted transition-all">
            <FileText className="w-4 h-4" />
            View Verdict
          </Button>
          <Button variant="outline" className="gap-2 h-10 border-border hover:bg-muted transition-all">
            <Reply className="w-4 h-4" />
            Reply
          </Button>
        </div>
      </div>
    </div>
  );
}