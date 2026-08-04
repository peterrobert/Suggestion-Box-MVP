import { Link, useParams } from "react-router-dom";
import { 
  ArrowLeft, 
  Share2, 
  Eye, 
  MoreVertical, 
  User, 
  Calendar, 
  Users, 
  AlertCircle, 
  Clock,
  ChevronRight
} from "lucide-react";
import AppShell from "@/components/AppShell";
import WorkflowBadge from "@/components/WorkflowBadge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Page-scoped components
import { WorkflowTracker } from "@/components/SuggestionDetails/WorkflowTracker";
import { OverviewTab } from "@/components/SuggestionDetails/OverviewTab";
import { DiscussionTab } from "@/components/SuggestionDetails/DiscussionTab";
import { EvidenceTab } from "@/components/SuggestionDetails/EvidenceTab";
import { ActivityTab } from "@/components/SuggestionDetails/ActivityTab";
import { ReviewPanel } from "@/components/SuggestionDetails/ReviewPanel";

export default function SuggestionDetails() {
  const { id } = useParams<{ id: string }>();

  return (
    <AppShell pageTitle="Redesign Customer Onboarding Flow" breadcrumb="Suggestions">
      <div className="flex flex-col h-full bg-background">
        {/* Header Bar */}
        <div className="bg-white border-b border-border px-6 py-4 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/suggestions" className="text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-3">
                <h1 className="text-xl font-bold tracking-tight">Redesign Customer Onboarding Flow</h1>
                <WorkflowBadge stage="In Resolution" />
                <div className="px-2 py-0.5 rounded bg-muted text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Marketing</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Eye className="w-4 h-4" />
                Watch
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem>Edit Suggestion</DropdownMenuItem>
                  <DropdownMenuItem>Move to Group</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Export as PDF</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive focus:text-destructive">Delete Suggestion</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="font-medium">Created by</span>
              <div className="flex items-center gap-1.5 text-foreground">
                <Avatar className="w-4 h-4">
                  <AvatarImage src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <span>Sarah Chen</span>
              </div>
            </div>
            <div className="w-px h-3 bg-border" />
            <div className="flex items-center gap-2">
              <span className="font-medium">Assigned to</span>
              <div className="flex items-center gap-1.5 text-foreground">
                <Avatar className="w-4 h-4">
                  <AvatarImage src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <span>James Park</span>
              </div>
            </div>
            <div className="w-px h-3 bg-border" />
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Last updated 2 hours ago</span>
            </div>
          </div>
        </div>

        {/* Main Workspace Layout */}
        <div className="flex flex-1 overflow-hidden flex-col lg:flex-row">
          
          {/* LEFT SIDEBAR (240px) */}
          <aside className="w-full lg:w-[260px] bg-white border-r border-border overflow-y-auto p-6 space-y-8 flex-shrink-0">
            <div className="space-y-4">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Workflow Summary</h3>
              <WorkflowTracker />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Progress</h3>
                <span className="text-xs font-bold text-primary">65%</span>
              </div>
              <Progress value={65} className="h-1.5" />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase font-medium">Resolved</p>
                  <p className="text-sm font-bold">8 / 12</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase font-medium">Critical</p>
                  <p className="text-sm font-bold text-destructive">2 left</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 group cursor-default">
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase font-medium">Reviewer</p>
                  <p className="text-xs font-medium">James Park</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group cursor-default">
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase font-medium">Due Date</p>
                  <p className="text-xs font-medium">March 15, 2025</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group cursor-default">
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase font-medium">Group</p>
                  <p className="text-xs font-medium">Marketing</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Outstanding Items</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 rounded-lg bg-destructive/5 border border-destructive/10">
                  <span className="text-[11px] font-medium text-destructive">Blocking Issues</span>
                  <span className="text-xs font-bold text-destructive">2</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-amber-50 border border-amber-100">
                  <span className="text-[11px] font-medium text-amber-700">Pending Evidence</span>
                  <span className="text-xs font-bold text-amber-700">3</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-muted border border-border">
                  <span className="text-[11px] font-medium text-muted-foreground">Open Concerns</span>
                  <span className="text-xs font-bold text-muted-foreground">1</span>
                </div>
              </div>
            </div>
          </aside>

          {/* CENTER CONTENT */}
          <main className="flex-1 overflow-y-auto bg-slate-50/50">
            <div className="max-w-5xl mx-auto p-6">
              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="bg-white border p-1 h-11 w-fit">
                  <TabsTrigger value="overview" className="px-6 h-9 data-[state=active]:bg-muted data-[state=active]:shadow-none">Overview</TabsTrigger>
                  <TabsTrigger value="discussion" className="px-6 h-9 data-[state=active]:bg-muted data-[state=active]:shadow-none">Discussion</TabsTrigger>
                  <TabsTrigger value="evidence" className="px-6 h-9 data-[state=active]:bg-muted data-[state=active]:shadow-none">Evidence</TabsTrigger>
                  <TabsTrigger value="activity" className="px-6 h-9 data-[state=active]:bg-muted data-[state=active]:shadow-none">Activity</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <OverviewTab />
                </TabsContent>
                
                <TabsContent value="discussion">
                  <DiscussionTab />
                </TabsContent>

                <TabsContent value="evidence">
                  <EvidenceTab />
                </TabsContent>

                <TabsContent value="activity">
                  <ActivityTab />
                </TabsContent>
              </Tabs>
            </div>
          </main>

          {/* RIGHT SIDEBAR (280px) */}
          <aside className="w-full lg:w-[300px] bg-white border-l border-border overflow-y-auto p-6 flex-shrink-0">
            <ReviewPanel />
          </aside>

        </div>
      </div>
    </AppShell>
  );
}