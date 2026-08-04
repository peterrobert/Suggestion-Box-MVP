import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import AppShell from "@/components/AppShell";
import SuggestionCard from "@/components/SuggestionCard";
import type { SuggestionData } from "@/components/SuggestionCard";
import { Button } from "@/components/ui/button";
import SuggestionsToolbar from "@/components/Suggestions/SuggestionsToolbar";
import SuggestionsTable from "@/components/Suggestions/SuggestionsTable";
import SuggestionsEmptyState from "@/components/Suggestions/SuggestionsEmptyState";
import SuggestionsSkeleton from "@/components/Suggestions/SuggestionsSkeleton";

const SAMPLE_SUGGESTIONS: SuggestionData[] = [
  {
    id: "1",
    title: "Redesign Customer Onboarding Flow",
    purpose: "Simplify the first-time user experience to reduce drop-off during registration.",
    primaryGoal: "Increase conversion rate by 15%",
    stage: "In Resolution",
    progress: 65,
    assignedReviewer: { name: "Sarah Chen", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" },
    group: "Marketing",
    comments: 8,
    evidence: 2,
    lastUpdated: "2 hours ago",
    createdBy: { name: "John Doe" },
  },
  {
    id: "2",
    title: "Add Dark Mode Support",
    purpose: "Implement a system-wide dark theme to improve user comfort in low-light environments.",
    primaryGoal: "Improve accessibility scores",
    stage: "Live",
    progress: 20,
    group: "Product",
    comments: 3,
    evidence: 1,
    lastUpdated: "5 hours ago",
    createdBy: { name: "Jane Smith" },
  },
  {
    id: "3",
    title: "Implement SSO Integration",
    purpose: "Enable Single Sign-On for enterprise customers using Okta and Azure AD.",
    primaryGoal: "Security compliance and enterprise readiness",
    stage: "Verdict Ready",
    progress: 90,
    assignedReviewer: { name: "James Park", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" },
    group: "Engineering",
    comments: 12,
    evidence: 5,
    lastUpdated: "1 day ago",
    createdBy: { name: "Mike Wilson" },
  },
  {
    id: "4",
    title: "Improve Mobile Navigation",
    purpose: "Revamp the mobile app navigation to follow modern thumb-friendly patterns.",
    primaryGoal: "Reduce mobile bounce rate",
    stage: "Draft",
    progress: 5,
    group: "Design",
    comments: 1,
    evidence: 0,
    lastUpdated: "2 days ago",
    createdBy: { name: "Emily Brown" },
  },
  {
    id: "5",
    title: "Annual Pricing Review",
    purpose: "Evaluate current pricing tiers against market competitors and customer feedback.",
    primaryGoal: "Maximize ARPU",
    stage: "Complete",
    progress: 100,
    assignedReviewer: { name: "David Lee", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg" },
    group: "Finance",
    comments: 15,
    evidence: 8,
    lastUpdated: "3 days ago",
    createdBy: { name: "Chris Evans" },
  },
  {
    id: "6",
    title: "Customer Support Chatbot",
    purpose: "Integrate an AI-powered chatbot to handle common support inquiries automatically.",
    primaryGoal: "Reduce support ticket volume by 30%",
    stage: "In Resolution",
    progress: 45,
    assignedReviewer: { name: "Maria Santos", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" },
    group: "Product",
    comments: 6,
    evidence: 3,
    lastUpdated: "4 days ago",
    createdBy: { name: "Alex Wong" },
  },
  {
    id: "7",
    title: "Accessibility Improvements",
    purpose: "Audit and fix WCAG 2.1 compliance issues across the core dashboard.",
    primaryGoal: "Reach AA compliance",
    stage: "Live",
    progress: 30,
    group: "Engineering",
    comments: 4,
    evidence: 2,
    lastUpdated: "1 week ago",
    createdBy: { name: "Sarah Connor" },
  },
  {
    id: "8",
    title: "Performance Optimization Sprint",
    purpose: "Identify and resolve performance bottlenecks in the data-heavy analytics views.",
    primaryGoal: "Reduce initial load time under 2s",
    stage: "Draft",
    progress: 10,
    group: "Engineering",
    comments: 0,
    evidence: 0,
    lastUpdated: "1 week ago",
    createdBy: { name: "John Smith" },
  },
];

export default function Suggestions() {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<"grid" | "table">("grid");
  const [activeFilter, setActiveFilter] = useState("All");
  const [suggestions, setSuggestions] = useState<SuggestionData[]>([]);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setSuggestions(SAMPLE_SUGGESTIONS);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredSuggestions = activeFilter === "All"
    ? suggestions
    : suggestions.filter(s => s.stage === activeFilter);

  return (
    <AppShell pageTitle="Suggestions" breadcrumb="Acme Corp">
      <div className="p-4 md:p-8 max-w-[1400px] mx-auto space-y-8">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Suggestions</h1>
            <p className="text-muted-foreground text-sm">
              Browse and manage suggestions you have permission to view.
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 rounded-full px-6 h-11 self-start sm:self-center">
            <Plus className="w-4 h-4 mr-2" />
            New Suggestion
          </Button>
        </div>

        {/* Toolbar */}
        <SuggestionsToolbar
          view={view}
          setView={setView}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        {/* Content */}
        <div className="min-h-[400px]">
          {loading ? (
            <SuggestionsSkeleton />
          ) : filteredSuggestions.length > 0 ? (
            view === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSuggestions.map((suggestion) => (
                  <SuggestionCard key={suggestion.id} suggestion={suggestion} />
                ))}
              </div>
            ) : (
              <SuggestionsTable suggestions={filteredSuggestions} />
            )
          ) : (
            <SuggestionsEmptyState />
          )}
        </div>
      </div>
    </AppShell>
  );
}