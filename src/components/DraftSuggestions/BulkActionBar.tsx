import { Trash2, ArrowUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BulkActionBarProps {
  selectedCount: number;
  onClear: () => void;
  onDelete: () => void;
  onSubmit: () => void;
}

export function BulkActionBar({ selectedCount, onClear, onDelete, onSubmit }: BulkActionBarProps) {
  if (selectedCount === 0) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="bg-foreground text-background rounded-full px-6 py-3 shadow-2xl flex items-center gap-6 border border-border/50 backdrop-blur-md">
        <div className="flex items-center gap-3 pr-6 border-r border-background/20 font-medium">
          <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs">
            {selectedCount}
          </span>
          <span>{selectedCount === 1 ? 'draft' : 'drafts'} selected</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-destructive hover:bg-destructive hover:text-destructive-foreground gap-2 rounded-full"
            onClick={onDelete}
          >
            <Trash2 className="w-4 h-4" />
            Delete Selected
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-[hsl(var(--brand-primary))] hover:bg-[hsl(var(--brand-primary))] hover:text-white gap-2 rounded-full"
            onClick={onSubmit}
          >
            <ArrowUp className="w-4 h-4" />
            Submit All
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="w-8 h-8 rounded-full hover:bg-background/10 ml-2"
            onClick={onClear}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}