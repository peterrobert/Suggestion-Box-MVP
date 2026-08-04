import { 
  FileText, 
  Target, 
  ExternalLink, 
  History,
  Info
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ContextPanel() {
  return (
    <aside className="w-[280px] flex flex-col gap-6 flex-shrink-0">
      <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
        <div className="flex items-center gap-2 mb-3">
          <Info className="w-4 h-4 text-slate-500" />
          <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Suggestion Overview</h4>
        </div>
        <p className="text-sm font-semibold text-foreground mb-1">Redesign Customer Onboarding Flow</p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Comprehensive overhaul of the first-time user experience focused on activation and friction reduction.
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-primary" />
          <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Primary Goal</h4>
        </div>
        <div className="text-sm p-3 bg-white border border-border rounded-lg italic text-foreground">
          "Improve customer activation rate by 30% through simplified step-by-step guidance."
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-muted-foreground" />
          <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Related Suggestions</h4>
        </div>
        <div className="space-y-2">
          <a href="#" className="flex items-start gap-2 group">
            <ExternalLink className="w-3.5 h-3.5 mt-0.5 text-muted-foreground group-hover:text-primary" />
            <span className="text-xs text-foreground group-hover:text-primary transition-colors line-clamp-2">
              Onboarding email sequence updates (Q2-2024)
            </span>
          </a>
          <a href="#" className="flex items-start gap-2 group">
            <ExternalLink className="w-3.5 h-3.5 mt-0.5 text-muted-foreground group-hover:text-primary" />
            <span className="text-xs text-foreground group-hover:text-primary transition-colors line-clamp-2">
              Mobile app splash screen redesign
            </span>
          </a>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Discussion Participants</h4>
        <div className="flex -space-x-2 overflow-hidden">
          <Avatar className="inline-block border-2 border-white w-8 h-8">
            <AvatarImage src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <Avatar className="inline-block border-2 border-white w-8 h-8">
            <AvatarImage src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" />
            <AvatarFallback>PK</AvatarFallback>
          </Avatar>
          <Avatar className="inline-block border-2 border-white w-8 h-8">
            <AvatarImage src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" />
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
          <Avatar className="inline-block border-2 border-white w-8 h-8">
            <AvatarImage src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg" />
            <AvatarFallback>LD</AvatarFallback>
          </Avatar>
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-[10px] font-bold border-2 border-white">
            +2
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <History className="w-4 h-4 text-muted-foreground" />
          <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Recent Activity</h4>
        </div>
        <div className="space-y-4 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-border">
          <div className="relative pl-6">
            <div className="absolute left-1 top-1 w-2 h-2 rounded-full bg-primary" />
            <p className="text-xs font-semibold">James Park confirmed a risk</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">2 hours ago</p>
          </div>
          <div className="relative pl-6">
            <div className="absolute left-1 top-1 w-2 h-2 rounded-full bg-muted-foreground" />
            <p className="text-xs font-medium">Alex Rivera added a comment</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">4 hours ago</p>
          </div>
          <div className="relative pl-6">
            <div className="absolute left-1 top-1 w-2 h-2 rounded-full bg-muted-foreground" />
            <p className="text-xs font-medium">Lydia Deng uploaded evidence</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">Yesterday</p>
          </div>
        </div>
      </div>
    </aside>
  );
}