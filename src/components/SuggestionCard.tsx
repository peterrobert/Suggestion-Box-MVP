import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageSquare, FileText, Eye, Share2, Clock, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import WorkflowBadge from "./WorkflowBadge";
import { cn } from "@/lib/utils";

export interface SuggestionData {
  id: string;
  title: string;
  purpose: string;
  primaryGoal: string;
  stage: string;
  progress: number;
  assignedReviewer?: { name: string; avatar?: string };
  group?: string;
  comments: number;
  evidence: number;
  lastUpdated: string;
  createdBy: { name: string; avatar?: string };
}

interface SuggestionCardProps {
  suggestion: SuggestionData;
  className?: string;
}

export default function SuggestionCard({ suggestion, className }: SuggestionCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/suggestions/${suggestion.id}`}
      className={cn(
        "block bg-white border border-border rounded-xl p-4 transition-all duration-150",
        "hover:shadow-card-hover hover:border-primary/20",
        className
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1.5">
            <WorkflowBadge stage={suggestion.stage} />
            {suggestion.group && (
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-accent text-accent-foreground border border-accent font-medium">
                {suggestion.group}
              </span>
            )}
          </div>
          <h3 className="text-sm font-semibold text-foreground line-clamp-1">{suggestion.title}</h3>
          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{suggestion.purpose}</p>
        </div>

        {hovered && (
          <div className="flex items-center gap-1 flex-shrink-0">
            <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
              <Eye className="w-3.5 h-3.5 mr-1" /> Watch
            </Button>
            <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
              <Share2 className="w-3.5 h-3.5 mr-1" /> Share
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7">
              <ChevronRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        )}
      </div>

      {/* Progress */}
      <div className="mt-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] text-muted-foreground">Progress</span>
          <span className="text-[10px] font-medium text-foreground">{suggestion.progress}%</span>
        </div>
        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all"
            style={{ width: `${suggestion.progress}%` }}
          />
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {suggestion.assignedReviewer && (
            <div className="flex items-center gap-1.5">
              <Avatar className="w-5 h-5">
                <AvatarImage src={suggestion.assignedReviewer.avatar} />
                <AvatarFallback className="text-[9px]">
                  {suggestion.assignedReviewer.name[0]}
                </AvatarFallback>
              </Avatar>
              <span className="text-[11px] text-muted-foreground">{suggestion.assignedReviewer.name}</span>
            </div>
          )}
          <div className="flex items-center gap-1 text-muted-foreground">
            <MessageSquare className="w-3 h-3" />
            <span className="text-[11px]">{suggestion.comments}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <FileText className="w-3 h-3" />
            <span className="text-[11px]">{suggestion.evidence}</span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground">
          <Clock className="w-3 h-3" />
          <span className="text-[11px]">{suggestion.lastUpdated}</span>
        </div>
      </div>
    </Link>
  );
}