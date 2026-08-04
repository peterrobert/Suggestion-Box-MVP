import { FileText, Pencil, ArrowUp, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import WorkflowBadge from "@/components/WorkflowBadge";
import { cn } from "@/lib/utils";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export interface Draft {
  id: string;
  title: string;
  lastEdited: string;
  visibility: string;
  visibilityType: "General" | "Group";
  progress: number;
}

interface DraftCardProps {
  draft: Draft;
  isSelected: boolean;
  onSelect: (id: string, selected: boolean) => void;
  onEdit: (id: string) => void;
  onSubmit: (id: string) => void;
  onDelete: (id: string) => void;
}

export function DraftCard({ 
  draft, 
  isSelected, 
  onSelect, 
  onEdit, 
  onSubmit, 
  onDelete 
}: DraftCardProps) {
  return (
    <Card className={cn(
      "p-4 flex items-center gap-4 transition-all duration-200 border-border hover:border-primary/30",
      isSelected && "bg-accent/30 border-primary/50"
    )}>
      <Checkbox 
        checked={isSelected} 
        onCheckedChange={(checked) => onSelect(draft.id, !!checked)}
        className="h-5 w-5"
      />
      
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-muted flex items-center justify-center">
        <FileText className="w-6 h-6 text-muted-foreground" />
      </div>

      <div className="flex-1 min-w-0 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <WorkflowBadge stage="Draft" />
          <h3 className="font-semibold text-foreground truncate">{draft.title}</h3>
        </div>
        
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span>Last edited {draft.lastEdited}</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span className={cn(
            "px-2 py-0.5 rounded text-[11px] font-medium border",
            draft.visibilityType === "General" 
              ? "bg-blue-50 text-blue-600 border-blue-100" 
              : "bg-purple-50 text-purple-600 border-purple-100"
          )}>
            {draft.visibility}
          </span>
        </div>

        <div className="flex items-center gap-3 mt-1 max-w-[240px]">
          <Progress value={draft.progress} className="h-1.5 flex-1" />
          <span className="text-xs font-medium text-muted-foreground min-w-[32px]">{draft.progress}%</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="hidden sm:flex gap-2"
          onClick={() => onEdit(draft.id)}
        >
          <Pencil className="w-4 h-4" />
          Continue Editing
        </Button>
        <Button 
          size="sm" 
          className="bg-[hsl(var(--brand-primary))] hover:bg-[hsl(var(--brand-hover))] text-white gap-2"
          onClick={() => onSubmit(draft.id)}
        >
          <ArrowUp className="w-4 h-4" />
          <span className="hidden sm:inline">Submit</span>
        </Button>
        
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive hover:bg-destructive/10">
              <Trash2 className="w-4 h-4" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Draft?</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete "{draft.title}"? This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction 
                onClick={() => onDelete(draft.id)}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </Card>
  );
}