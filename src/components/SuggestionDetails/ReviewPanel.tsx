import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { 
  FileSearch, 
  CheckCircle2, 
  Target, 
  Gavel, 
  MessageCircle, 
  FileText, 
  Activity,
  ChevronRight
} from "lucide-react";

export function ReviewPanel() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Review Actions</h3>
        <div className="space-y-2">
          <Button className="w-full justify-start gap-2 bg-primary hover:bg-primary/90">
            <FileSearch className="w-4 h-4" />
            Frame Suggestion
          </Button>
          <Button variant="outline" className="w-full justify-start gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Confirm Evidence
          </Button>
          <Button variant="outline" className="w-full justify-start gap-2">
            <Target className="w-4 h-4" />
            Evaluate Primary Goal
          </Button>
          <Button variant="outline" className="w-full justify-start gap-2">
            <Gavel className="w-4 h-4" />
            Render Verdict
          </Button>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Quick Stats</h3>
        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center p-2 rounded-lg bg-muted/50 border border-border">
            <MessageCircle className="w-3.5 h-3.5 text-muted-foreground mb-1" />
            <span className="text-sm font-bold">8</span>
            <span className="text-[10px] text-muted-foreground">Comments</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-lg bg-muted/50 border border-border">
            <FileText className="w-3.5 h-3.5 text-muted-foreground mb-1" />
            <span className="text-sm font-bold">3</span>
            <span className="text-[10px] text-muted-foreground">Evidence</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-lg bg-muted/50 border border-border">
            <Activity className="w-3.5 h-3.5 text-muted-foreground mb-1" />
            <span className="text-sm font-bold">12</span>
            <span className="text-[10px] text-muted-foreground">Activity</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Related Suggestions</h3>
        <div className="space-y-2">
          <Link to="/suggestions" className="block p-3 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors group">
            <p className="text-[11px] text-primary font-medium mb-1">In Resolution</p>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-foreground truncate mr-2">New User Welcome Email...</span>
              <ChevronRight className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </Link>
          <Link to="/suggestions" className="block p-3 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors group">
            <p className="text-[11px] text-green-600 font-medium mb-1">Complete</p>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-foreground truncate mr-2">Product Sandbox Environment</span>
              <ChevronRight className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}