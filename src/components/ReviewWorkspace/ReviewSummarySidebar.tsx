import { 
  Calendar, 
  User, 
  AlertCircle, 
  Clock, 
  MessageSquare, 
  FileCheck, 
  AlertTriangle 
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import WorkflowBadge from "@/components/WorkflowBadge";

export function ReviewSummarySidebar() {
  return (
    <aside className="w-[240px] flex flex-col gap-6 flex-shrink-0">
      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Review Summary</span>
          <div className="flex items-center gap-2">
            <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 border-amber-200 font-bold px-2 py-0.5 text-[10px]">
              RESOLVE
            </Badge>
            <WorkflowBadge stage="In Resolution" size="sm" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground font-medium">Resolution Progress</span>
            <span className="font-bold">58%</span>
          </div>
          <Progress value={58} className="h-1.5" />
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8 border border-border">
            <AvatarImage src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-foreground">James Park</span>
            <span className="text-[10px] text-muted-foreground">Lead Reviewer</span>
          </div>
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 bg-red-50 rounded-lg border border-red-100">
          <Calendar className="w-3.5 h-3.5 text-red-500" />
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-red-700">Due March 15, 2025</span>
            <span className="text-[9px] text-red-600 font-medium">Overdue in 3 days</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Outstanding Items</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs">
            <Clock className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-foreground">4 pending items</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-red-600">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>2 blocking issues</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-amber-600">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>1 SLA warning</span>
          </div>
        </div>
      </div>

      <div className="space-y-3 pt-4 border-t border-border">
        <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Activity Summary</h4>
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-3.5 h-3.5" />
              <span>Last action</span>
            </div>
            <span className="font-medium">2 hours ago</span>
          </div>
          <div className="flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Total comments</span>
            </div>
            <span className="font-medium">12</span>
          </div>
          <div className="flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-2 text-muted-foreground">
              <FileCheck className="w-3.5 h-3.5" />
              <span>Evidence reviewed</span>
            </div>
            <span className="font-medium">3 of 5</span>
          </div>
        </div>
      </div>
    </aside>
  );
}