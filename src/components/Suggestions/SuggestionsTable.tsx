import { Link } from "react-router-dom";
import { MessageSquare, FileText, MoreHorizontal } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import WorkflowBadge from "@/components/WorkflowBadge";
import type { SuggestionData } from "@/components/SuggestionCard";

interface SuggestionsTableProps {
  suggestions: SuggestionData[];
}

export default function SuggestionsTable({ suggestions }: SuggestionsTableProps) {
  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/30">
            <TableHead className="w-[300px]">Title</TableHead>
            <TableHead>Stage</TableHead>
            <TableHead>Group</TableHead>
            <TableHead>Reviewer</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead className="text-center">Activity</TableHead>
            <TableHead>Last Updated</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {suggestions.map((s) => (
            <TableRow key={s.id} className="cursor-pointer group">
              <TableCell className="font-medium">
                <Link to={`/suggestions/${s.id}`} className="hover:text-primary transition-colors">
                  {s.title}
                  <p className="text-xs font-normal text-muted-foreground mt-0.5 line-clamp-1">
                    {s.purpose}
                  </p>
                </Link>
              </TableCell>
              <TableCell>
                <WorkflowBadge stage={s.stage} />
              </TableCell>
              <TableCell>
                {s.group && (
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-accent text-accent-foreground border border-accent font-medium whitespace-nowrap">
                    {s.group}
                  </span>
                )}
              </TableCell>
              <TableCell>
                {s.assignedReviewer ? (
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={s.assignedReviewer.avatar} />
                      <AvatarFallback className="text-[10px]">
                        {s.assignedReviewer.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-foreground">{s.assignedReviewer.name}</span>
                  </div>
                ) : (
                  <span className="text-xs text-muted-foreground italic">Unassigned</span>
                )}
              </TableCell>
              <TableCell>
                <div className="w-[100px]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-medium text-foreground">{s.progress}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${s.progress}%` }}
                    />
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-center gap-3">
                  <div className="flex items-center gap-1 text-muted-foreground" title="Comments">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span className="text-xs">{s.comments}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground" title="Evidence">
                    <FileText className="w-3.5 h-3.5" />
                    <span className="text-xs">{s.evidence}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {s.lastUpdated}
                </span>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}