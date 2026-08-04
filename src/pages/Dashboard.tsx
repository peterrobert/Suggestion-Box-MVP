import React from "react";
import AppShell from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  AlertCircle,
  Clock,
  UserPlus,
  AlertTriangle,
  Users,
  Settings,
  Search,
  LayoutGrid,
  BookOpen,
  GitBranch,
  MessageCircle,
  Plus,
} from "lucide-react";
import SuggestionCard from "@/components/SuggestionCard";
import type { SuggestionData } from "@/components/SuggestionCard";
import {
  AttentionCard,
  ActivityItem,
  WorkflowStage,
  QuickAction,
  ResourceLink,
} from "@/components/Dashboard/DashboardComponents";
import { Link } from "react-router-dom";

const SUGGESTIONS_DATA: SuggestionData[] = [
  {
    id: "1",
    title: "Redesign Customer Onboarding Flow",
    purpose: "Simplify the first-time user experience to improve retention.",
    primaryGoal: "Increase Day 1 retention by 15%",
    stage: "In Resolution",
    progress: 65,
    assignedReviewer: { name: "Sarah Chen", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" },
    group: "Marketing",
    comments: 8,
    evidence: 4,
    lastUpdated: "2h ago",
    createdBy: { name: "Peter Kim", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" },
  },
  {
    id: "2",
    title: "Add Dark Mode Support",
    purpose: "Highly requested feature from power users.",
    primaryGoal: "Improve user satisfaction scores.",
    stage: "Live",
    progress: 20,
    assignedReviewer: undefined,
    group: "Product",
    comments: 3,
    evidence: 1,
    lastUpdated: "1d ago",
    createdBy: { name: "Alex Johnson", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" },
  },
  {
    id: "3",
    title: "Implement SSO Integration",
    purpose: "Enable enterprise customers to use Okta/Azure AD.",
    primaryGoal: "Reduce friction for enterprise sales.",
    stage: "Verdict Ready",
    progress: 90,
    assignedReviewer: { name: "James Park", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg" },
    group: "Engineering",
    comments: 12,
    evidence: 8,
    lastUpdated: "30m ago",
    createdBy: { name: "David Lee", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" },
  },
  {
    id: "4",
    title: "Improve Mobile Navigation",
    purpose: "The current menu is difficult to use on small screens.",
    primaryGoal: "Improve mobile conversion rates.",
    stage: "Draft",
    progress: 5,
    assignedReviewer: undefined,
    group: "Design",
    comments: 1,
    evidence: 0,
    lastUpdated: "3d ago",
    createdBy: { name: "Maria Santos", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg" },
  },
  {
    id: "5",
    title: "Annual Pricing Review",
    purpose: "Optimize plans for the upcoming fiscal year.",
    primaryGoal: "Increase ARPU by 5%.",
    stage: "Complete",
    progress: 100,
    assignedReviewer: { name: "David Lee", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" },
    group: "Finance",
    comments: 15,
    evidence: 12,
    lastUpdated: "1w ago",
    createdBy: { name: "James Park", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg" },
  },
  {
    id: "6",
    title: "Customer Support Chatbot",
    purpose: "Automate common support queries using LLMs.",
    primaryGoal: "Reduce support ticket volume by 30%.",
    stage: "In Resolution",
    progress: 45,
    assignedReviewer: { name: "Maria Santos", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg" },
    group: "Product",
    comments: 6,
    evidence: 3,
    lastUpdated: "4h ago",
    createdBy: { name: "Sarah Chen", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" },
  },
];

const ACTIVITY_DATA = [
  {
    id: 1,
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
    userName: "James Park",
    action: "rendered a verdict on",
    target: "SSO Integration",
    targetLink: "/suggestions/3",
    time: "30m ago",
    dotColor: "text-purple-500",
  },
  {
    id: 2,
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
    userName: "Sarah Chen",
    action: "confirmed evidence on",
    target: "Customer Onboarding",
    targetLink: "/suggestions/1",
    time: "1h ago",
    dotColor: "text-blue-500",
  },
  {
    id: 3,
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
    userName: "You",
    action: "submitted the",
    target: "Redesign Onboarding suggestion",
    targetLink: "/suggestions/1",
    time: "2h ago",
    dotColor: "text-primary",
  },
  {
    id: 4,
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
    userName: "Maria Santos",
    action: "added a comment on",
    target: "Customer Support Chatbot",
    targetLink: "/suggestions/6",
    time: "3h ago",
    dotColor: "text-amber-500",
  },
  {
    id: 5,
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
    userName: "Peter Kim",
    action: "was assigned as reviewer for",
    target: "Annual Review",
    targetLink: "/suggestions/5",
    time: "4h ago",
    dotColor: "text-blue-500",
  },
  {
    id: 6,
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
    userName: "Alex Johnson",
    action: "joined the organization",
    target: "Acme Corp",
    targetLink: "/admin",
    time: "1d ago",
    dotColor: "text-teal-500",
  },
  {
    id: 7,
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
    userName: "David Lee",
    action: "published the verdict on",
    target: "Annual Pricing Review",
    targetLink: "/suggestions/5",
    time: "1d ago",
    dotColor: "text-green-500",
  },
  {
    id: 8,
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
    userName: "System",
    action: "notified that",
    target: "Add Dark Mode went live",
    targetLink: "/suggestions/2",
    time: "2d ago",
    dotColor: "text-blue-500",
  },
];

export default function Dashboard() {
  return (
    <AppShell pageTitle="Dashboard" breadcrumb="Acme Corp">
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-12">

        {/* Section 1: Welcome Header */}
        <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-[28px] font-bold text-foreground leading-tight">
              Good morning, Peter 👋
            </h1>
            <p className="text-muted-foreground mt-1">
              Welcome back to Suggestion Box. Here's what needs your attention today.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 gap-1.5 py-1">
                <AlertCircle className="w-3 h-3" />
                3 items need your attention
              </Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 gap-1.5 py-1">
                <Clock className="w-3 h-3" />
                2 suggestions updated
              </Badge>
              <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 gap-1.5 py-1">
                <Plus className="w-3 h-3" />
                1 new notification
              </Badge>
            </div>
          </div>
          <Button className="md:w-auto h-11 px-6 font-semibold">
            <UserPlus className="w-4 h-4 mr-2" />
            Invite Members
          </Button>
        </section>

        {/* Section 2: Needs Your Attention */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
            <h2 className="text-lg font-bold text-foreground">Needs Your Attention</h2>
            <Badge variant="secondary" className="rounded-full px-2 py-0 h-5 text-[10px]">3</Badge>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <AttentionCard
              icon={AlertCircle}
              iconColor="text-destructive"
              badgeText="URGENT"
              badgeVariant="destructive"
              title="Assign Reviewer"
              description="Marketing Campaign suggestion has been live for 7 days without a reviewer assigned."
              actionText="Assign Now"
            />
            <AttentionCard
              icon={Clock}
              iconColor="text-amber-500"
              badgeText="DUE SOON"
              badgeVariant="warning"
              title="SLA Deadline Approaching"
              description="Product Roadmap review is due in 2 days."
              actionText="Review Now"
            />
            <AttentionCard
              icon={UserPlus}
              iconColor="text-teal-500"
              badgeText="ACTION"
              badgeVariant="secondary"
              title="Pending Invitations"
              description="3 team members have pending invitations that expire in 24 hours."
              actionText="Manage Invitations"
            />
            <AttentionCard
              icon={AlertTriangle}
              iconColor="text-amber-500"
              badgeText="WARNING"
              badgeVariant="outline"
              title="Seat Limit Approaching"
              description="You're using 4 of 5 seats on your Basic plan."
              actionText="Upgrade Plan"
            />
          </div>
        </section>

        {/* Section 3: Recent Suggestions */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-foreground">Recent Suggestions</h2>
            <Link to="/suggestions" className="text-sm font-medium text-primary hover:underline">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUGGESTIONS_DATA.map((suggestion) => (
              <SuggestionCard key={suggestion.id} suggestion={suggestion} />
            ))}
          </div>
        </section>

        {/* Section 4 & 5 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Section 4: Recent Activity */}
          <section className="lg:col-span-2">
            <h2 className="text-lg font-bold text-foreground mb-8">Recent Activity</h2>
            <div className="bg-white border border-border rounded-xl p-8">
              {ACTIVITY_DATA.map((activity) => (
                <ActivityItem key={activity.id} {...activity} />
              ))}
              <Button variant="ghost" className="w-full mt-2 text-muted-foreground hover:text-foreground">
                Load more activity
              </Button>
            </div>
          </section>

          {/* Sidebar sections: Workflow and Quick Actions */}
          <div className="space-y-12">
            {/* Section 5: Workflow Overview */}
            <section>
              <h2 className="text-lg font-bold text-foreground mb-6">Workflow Overview</h2>
              <div className="flex flex-col gap-3">
                <WorkflowStage stage="Draft" count={4} colorClass="bg-gray-500" />
                <WorkflowStage stage="Live" count={3} colorClass="bg-blue-500" />
                <WorkflowStage stage="In Resolution" count={2} colorClass="bg-amber-500" isActive={true} />
                <WorkflowStage stage="Verdict Ready" count={1} colorClass="bg-purple-500" />
                <WorkflowStage stage="Complete" count={8} colorClass="bg-green-500" />
              </div>
            </section>

            {/* Section 6: Quick Actions */}
            <section>
              <h2 className="text-lg font-bold text-foreground mb-6">Quick Actions</h2>
              <div className="grid grid-cols-1 gap-3">
                <QuickAction
                  icon={UserPlus}
                  title="Invite Members"
                  description="Add collaborators to your organization."
                  href="/admin"
                />
                <QuickAction
                  icon={Users}
                  title="Manage Groups"
                  description="Organize members into functional groups."
                  href="/admin"
                />
                <QuickAction
                  icon={Search}
                  title="Browse Suggestions"
                  description="Explore and filter all suggestions."
                  href="/suggestions"
                />
                <QuickAction
                  icon={Settings}
                  title="Organization Settings"
                  description="Configure workspace preferences."
                  href="/account"
                />
              </div>
            </section>
          </div>
        </div>

        {/* Section 7: Helpful Resources */}
        <section className="pb-8">
          <h2 className="text-lg font-bold text-foreground mb-6">Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ResourceLink icon={BookOpen} title="Documentation" href="#" />
            <ResourceLink icon={GitBranch} title="Review Workflow Guide" href="#" />
            <ResourceLink icon={Users} title="Community Guidelines" href="#" />
            <ResourceLink icon={MessageCircle} title="Contact Support" href="#" />
          </div>
        </section>

      </div>
    </AppShell>
  );
}