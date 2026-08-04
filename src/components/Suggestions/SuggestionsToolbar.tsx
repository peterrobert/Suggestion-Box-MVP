import { Search, Grid, List, ChevronDown, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface SuggestionsToolbarProps {
  view: "grid" | "table";
  setView: (view: "grid" | "table") => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const filters = [
  { label: "All", count: null },
  { label: "Draft", count: 2 },
  { label: "Live", count: 3 },
  { label: "In Resolution", count: 2 },
  { label: "Verdict Ready", count: 1 },
  { label: "Complete", count: 5 },
];

export default function SuggestionsToolbar({
  view,
  setView,
  activeFilter,
  setActiveFilter,
}: SuggestionsToolbarProps) {
  return (
    <div className="space-y-4">
      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search suggestions..."
            className="pl-9 bg-white border-border"
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
          {filters.map((f) => (
            <button
              key={f.label}
              onClick={() => setActiveFilter(f.label)}
              className={cn(
                "whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium transition-colors border",
                activeFilter === f.label
                  ? "bg-primary/10 text-primary border-primary/20"
                  : "bg-white text-muted-foreground border-border hover:bg-muted/50"
              )}
            >
              {f.label}
              {f.count !== null && (
                <span className="ml-1.5 opacity-60">({f.count})</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Advanced Filters and View Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-4 py-2 border-t border-b border-border/50">
        <div className="flex flex-wrap items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 text-xs bg-white">
                Group <ChevronDown className="ml-1 w-3 h-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuLabel>Filter by Group</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Engineering</DropdownMenuItem>
              <DropdownMenuItem>Product</DropdownMenuItem>
              <DropdownMenuItem>Design</DropdownMenuItem>
              <DropdownMenuItem>Marketing</DropdownMenuItem>
              <DropdownMenuItem>Finance</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 text-xs bg-white">
                Assigned Reviewer <ChevronDown className="ml-1 w-3 h-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuLabel>Filter by Reviewer</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sarah Chen</DropdownMenuItem>
              <DropdownMenuItem>James Park</DropdownMenuItem>
              <DropdownMenuItem>David Lee</DropdownMenuItem>
              <DropdownMenuItem>Maria Santos</DropdownMenuItem>
              <DropdownMenuItem>Unassigned</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 text-xs bg-white">
                Created By <ChevronDown className="ml-1 w-3 h-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem>My Suggestions</DropdownMenuItem>
              <DropdownMenuItem>Everyone</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="sm"
            className="h-8 text-xs px-2 text-muted-foreground hover:text-foreground"
          >
            Watching
          </Button>

          <div className="h-4 w-px bg-border mx-1" />

          <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground/60 px-1">
            Sort by
          </span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 text-xs font-medium">
                Recently Updated <ChevronDown className="ml-1 w-3 h-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>Recently Updated</DropdownMenuItem>
              <DropdownMenuItem>Newest</DropdownMenuItem>
              <DropdownMenuItem>Oldest</DropdownMenuItem>
              <DropdownMenuItem>Most Comments</DropdownMenuItem>
              <DropdownMenuItem>Highest Progress</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center gap-1 bg-muted/50 p-1 rounded-lg border border-border">
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-7 w-7",
              view === "grid" ? "bg-white shadow-sm border border-border" : "text-muted-foreground"
            )}
            onClick={() => setView("grid")}
          >
            <Grid className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-7 w-7",
              view === "table" ? "bg-white shadow-sm border border-border" : "text-muted-foreground"
            )}
            onClick={() => setView("table")}
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}