import { useParams } from "react-router-dom";
import { Info, HelpCircle } from "lucide-react";
import AppShell from "@/components/AppShell";
import { ReviewProgressTracker } from "@/components/ReviewWorkspace/ReviewProgressTracker";
import { ReviewSummarySidebar } from "@/components/ReviewWorkspace/ReviewSummarySidebar";
import { ResolvePhase } from "@/components/ReviewWorkspace/ResolvePhase";
import { ContextPanel } from "@/components/ReviewWorkspace/ContextPanel";
import { Button } from "@/components/ui/button";

export default function ReviewWorkspace() {
  const { id } = useParams<{ id: string }>();

  return (
    <AppShell
      pageTitle="Review: Redesign Customer Onboarding Flow"
      breadcrumb="Suggestions"
    >
      <div className="flex flex-col h-full bg-background relative">
        {/* Top Progress Tracker */}
        <ReviewProgressTracker />

        {/* Action Bar / Status */}
        <div className="flex items-center justify-between px-8 py-2 bg-slate-50 border-b border-border">
          <div className="flex items-center gap-4 text-[11px] text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-success" />
              <span>All changes saved</span>
            </div>
            <span>•</span>
            <span>Last saved 2 min ago</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <span className="bg-white border border-border px-1 rounded shadow-sm font-bold">?</span>
              <span>Press for keyboard shortcuts</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="h-8 text-xs font-medium">
                View History
              </Button>
              <Button size="sm" className="h-8 text-xs font-bold bg-primary hover:bg-primary/90 px-4">
                Finish Phase
              </Button>
            </div>
          </div>
        </div>

        {/* Main Workspace Layout */}
        <div className="flex-1 overflow-hidden">
          <div className="h-full flex overflow-x-auto lg:overflow-x-hidden">
            {/* Left Sidebar */}
            <div className="hidden lg:block w-[240px] p-6 overflow-y-auto border-r border-border bg-white/50 backdrop-blur-sm">
              <ReviewSummarySidebar />
            </div>

            {/* Center Content */}
            <div className="flex-1 min-w-[600px] bg-background overflow-y-auto p-8 flex justify-center">
              <div className="max-w-3xl w-full">
                <ResolvePhase />
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden xl:block w-[280px] p-6 overflow-y-auto border-l border-border bg-white/50 backdrop-blur-sm">
              <ContextPanel />
            </div>
          </div>
        </div>

        {/* Sticky Live Progress Stats Footer */}
        <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-border px-8 py-3 z-20 flex items-center justify-center shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
          <div className="flex items-center gap-8 text-xs font-bold">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded flex items-center justify-center bg-teal-50 text-teal-600 border border-teal-100 italic">5</span>
              <span className="text-muted-foreground">Resolved</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded flex items-center justify-center bg-slate-50 text-slate-600 border border-slate-100 italic">4</span>
              <span className="text-muted-foreground">Outstanding</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded flex items-center justify-center bg-amber-50 text-amber-600 border border-amber-100 italic">2</span>
              <span className="text-muted-foreground">Critical</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded flex items-center justify-center bg-red-50 text-red-600 border border-red-100 italic">1</span>
              <span className="text-muted-foreground">Blocking</span>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}