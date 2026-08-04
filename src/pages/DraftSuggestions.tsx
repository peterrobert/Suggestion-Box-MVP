import { useState, useMemo } from "react";
import { Plus, Search, ChevronDown, ListFilter, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";
import AppShell from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { DraftCard } from "@/components/DraftSuggestions/DraftCard";
import type { Draft } from "@/components/DraftSuggestions/DraftCard";
import { BulkActionBar } from "@/components/DraftSuggestions/BulkActionBar";
import { toast } from "@/hooks/use-toast";

const MOCK_DRAFTS: Draft[] = [
  {
    id: "1",
    title: "Q3 Budget Reallocation Proposal",
    lastEdited: "2 hours ago",
    visibility: "General",
    visibilityType: "General",
    progress: 15,
  },
  {
    id: "2",
    title: "New Employee Onboarding Redesign",
    lastEdited: "1 day ago",
    visibility: "Group: HR",
    visibilityType: "Group",
    progress: 40,
  },
  {
    id: "3",
    title: "Platform API Rate Limit Changes",
    lastEdited: "3 days ago",
    visibility: "General",
    visibilityType: "General",
    progress: 5,
  },
  {
    id: "4",
    title: "Customer Feedback Integration",
    lastEdited: "1 week ago",
    visibility: "Group: Product",
    visibilityType: "Group",
    progress: 60,
  },
];

type SortOption = "Last Edited" | "Title" | "Created Date";

export default function DraftSuggestions() {
  const [drafts, setDrafts] = useState<Draft[]>(MOCK_DRAFTS);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("Last Edited");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const filteredDrafts = useMemo(() => {
    let result = drafts.filter((draft) =>
      draft.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortBy === "Title") {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    }
    // "Last Edited" and "Created Date" would normally use timestamps,
    // but with mock relative strings we'll just keep current order or
    // mock the behavior.

    return result;
  }, [drafts, searchQuery, sortBy]);

  const toggleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(new Set(filteredDrafts.map((d) => d.id)));
    } else {
      setSelectedIds(new Set());
    }
  };

  const toggleSelect = (id: string, selected: boolean) => {
    const next = new Set(selectedIds);
    if (selected) {
      next.add(id);
    } else {
      next.delete(id);
    }
    setSelectedIds(next);
  };

  const handleDelete = (id: string) => {
    setDrafts((prev) => prev.filter((d) => d.id !== id));
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
    toast({
      title: "Draft deleted",
      description: "The suggestion draft has been removed.",
    });
  };

  const handleBulkDelete = () => {
    setDrafts((prev) => prev.filter((d) => !selectedIds.has(d.id)));
    setSelectedIds(new Set());
    toast({
      title: "Drafts deleted",
      description: `Successfully deleted ${selectedIds.size} drafts.`,
    });
  };

  const handleBulkSubmit = () => {
    toast({
      title: "Drafts submitted",
      description: `${selectedIds.size} drafts have been submitted for review.`,
    });
    setDrafts((prev) => prev.filter((d) => !selectedIds.has(d.id)));
    setSelectedIds(new Set());
  };

  const allSelected = filteredDrafts.length > 0 && selectedIds.size === filteredDrafts.length;
  const isIndeterminate = selectedIds.size > 0 && selectedIds.size < filteredDrafts.length;

  return (
    <AppShell pageTitle="Draft Suggestions" breadcrumb="Suggestions">
      <div className="container max-w-5xl mx-auto py-8 px-4 sm:px-6">
        {/* Section 1: Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-2xl font-bold tracking-tight text-foreground">Draft Suggestions</h1>
              <Badge variant="secondary" className="bg-muted text-muted-foreground hover:bg-muted font-medium">
                {drafts.length} drafts
              </Badge>
            </div>
            <p className="text-muted-foreground">
              Suggestions you've started but haven't submitted yet.
            </p>
          </div>
          <Button className="bg-[hsl(var(--brand-primary))] hover:bg-[hsl(var(--brand-hover))] text-white gap-2 h-10 px-5 shadow-sm">
            <Plus className="w-4 h-4" />
            New Suggestion
          </Button>
        </div>

        {drafts.length > 0 ? (
          <>
            {/* Section 2: Toolbar */}
            <div className="bg-white border border-border rounded-xl p-3 mb-6 flex flex-col md:flex-row items-center gap-4">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search across drafts..."
                  className="pl-9 h-10 border-none bg-muted/50 focus-visible:ring-1"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto self-start md:self-center">
                <div className="flex items-center gap-2 pr-4 border-r border-border h-6 mr-2">
                  <Checkbox
                    id="select-all"
                    checked={allSelected}
                    onCheckedChange={toggleSelectAll}
                    className={cn(isIndeterminate && "data-[state=unchecked]:bg-primary data-[state=unchecked]:text-primary-foreground")}
                  />
                  <label htmlFor="select-all" className="text-sm font-medium cursor-pointer select-none">
                    Select All
                  </label>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-10 gap-2 px-3 hover:bg-muted">
                      <ListFilter className="w-4 h-4" />
                      <span className="text-sm font-medium">Sort: {sortBy}</span>
                      <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem onClick={() => setSortBy("Last Edited")}>Last Edited</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortBy("Title")}>Title</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortBy("Created Date")}>Created Date</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <div className="flex items-center bg-muted/50 rounded-lg p-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8 bg-white shadow-sm border border-border/50 text-primary">
                    <LayoutGrid className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                    <ListFilter className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Section 3: Draft Cards List */}
            <div className="space-y-3 pb-24">
              {filteredDrafts.length > 0 ? (
                filteredDrafts.map((draft) => (
                  <DraftCard
                    key={draft.id}
                    draft={draft}
                    isSelected={selectedIds.has(draft.id)}
                    onSelect={toggleSelect}
                    onEdit={(id) => toast({ title: "Continue editing", description: `Opening draft ${id}...` })}
                    onSubmit={(id) => {
                      toast({ title: "Draft submitted", description: "Your suggestion has been submitted." });
                      setDrafts(prev => prev.filter(d => d.id !== id));
                    }}
                    onDelete={handleDelete}
                  />
                ))
              ) : (
                <div className="py-20 text-center bg-muted/20 rounded-xl border border-dashed border-border">
                  <p className="text-muted-foreground italic">No drafts match your search.</p>
                </div>
              )}
            </div>
          </>
        ) : (
          /* Section 4: Empty State */
          <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white border border-border rounded-2xl shadow-sm">
            <div className="w-64 h-64 mb-8">
              <img className="w-full h-full object-contain" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_d68f048082_f22afaa9d28f9142.png" alt="empty drafts folder illustration, minimal flat, gray teal" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">No drafts yet</h2>
            <p className="text-muted-foreground max-w-sm mb-8">
              Start writing your first suggestion and save it as a draft. You'll find it here until you're ready to submit.
            </p>
            <Button size="lg" className="bg-[hsl(var(--brand-primary))] hover:bg-[hsl(var(--brand-hover))] text-white gap-2 px-8">
              <Plus className="w-5 h-5" />
              Create Suggestion
            </Button>
          </div>
        )}

        {/* Section 5: Bulk Actions Bar */}
        <BulkActionBar
          selectedCount={selectedIds.size}
          onClear={() => setSelectedIds(new Set())}
          onDelete={handleBulkDelete}
          onSubmit={handleBulkSubmit}
        />
      </div>
    </AppShell>
  );
}