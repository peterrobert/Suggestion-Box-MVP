import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Target, Eye, Tag } from "lucide-react";

export function OverviewTab() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-primary" />
            About this Suggestion
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-foreground leading-relaxed">
            The current customer onboarding flow has a drop-off rate of 42% at the technical setup stage. 
            This suggestion proposes a complete redesign of the initial 5 minutes of the user experience, 
            incorporating interactive tooltips, a progress-oriented checklist, and automated "Quick Start" templates 
            to reduce friction and time-to-value.
          </p>

          <div className="grid gap-4 pt-2">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 border border-border">
              <Target className="w-5 h-5 mt-0.5 text-primary" />
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Purpose</p>
                <p className="text-sm text-foreground font-medium">Improve user retention during the first 24 hours of account activation.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 border border-border">
              <div className="w-5 h-5 mt-0.5 flex items-center justify-center bg-primary/10 rounded">
                <span className="text-[10px] font-bold text-primary">PG</span>
              </div>
              <div className="space-y-1 flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Primary Goal</p>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-[10px]">High Impact</Badge>
                </div>
                <p className="text-sm text-foreground font-medium">Reduce onboarding drop-off by 25% within Q3.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4 py-3 rounded-lg border border-border">
              <Eye className="w-5 h-5 text-muted-foreground" />
              <div className="flex-1 flex items-center justify-between">
                <span className="text-sm font-medium">Visibility</span>
                <span className="text-sm text-muted-foreground">General (Public)</span>
              </div>
            </div>

            <div className="flex items-start gap-4 px-4 py-3 rounded-lg border border-border">
              <Tag className="w-5 h-5 text-muted-foreground mt-0.5" />
              <div className="space-y-2 flex-1">
                <span className="text-sm font-medium">Tags</span>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="secondary" className="font-normal">UX</Badge>
                  <Badge variant="secondary" className="font-normal">Marketing</Badge>
                  <Badge variant="secondary" className="font-normal">Q2 2025</Badge>
                  <Badge variant="secondary" className="font-normal">Onboarding</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-primary/[0.02]">
        <CardHeader>
          <div className="flex items-center gap-2">
            <div className="px-2 py-0.5 rounded bg-primary text-[10px] font-bold text-white uppercase tracking-tight">AI Insights</div>
            <CardTitle className="text-base">System Analysis</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-white border border-primary/10 shadow-sm">
            <p className="text-sm font-medium mb-2">Complexity Estimate</p>
            <div className="flex items-center gap-4">
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[65%]" />
              </div>
              <span className="text-sm font-bold text-primary">Medium-High</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2 italic">Based on 14 related suggestions and current system architecture.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 rounded-lg bg-white border border-border">
              <p className="text-[10px] font-semibold text-muted-foreground uppercase mb-1">Sentiment</p>
              <p className="text-sm font-medium text-green-600">Highly Positive</p>
            </div>
            <div className="p-3 rounded-lg bg-white border border-border">
              <p className="text-[10px] font-semibold text-muted-foreground uppercase mb-1">Confidence</p>
              <p className="text-sm font-medium">89% Match</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}