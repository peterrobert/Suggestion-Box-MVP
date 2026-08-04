import { ArrowLeft, Share2, Printer, Link, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link as RouterLink } from "react-router-dom";

interface VerdictHeaderProps {
  id: string;
}

export function VerdictHeader({ id }: VerdictHeaderProps) {
  return (
    <div className="space-y-4 mb-8">
      <RouterLink 
        to={`/suggestions/${id}`}
        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Suggestion Details
      </RouterLink>
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <p className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">Verdict Record</p>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Redesign Customer Onboarding Flow
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-muted-foreground">
            <p>Published by <span className="font-medium text-foreground">James Park</span></p>
            <span className="hidden md:block text-muted-foreground/30">|</span>
            <p>Published on <span className="font-medium text-foreground">February 15, 2025</span></p>
            <span className="hidden md:block text-muted-foreground/30">|</span>
            <p>Organization: <span className="font-medium text-foreground">Acme Corp</span></p>
          </div>
        </div>
        
        <div className="flex flex-col items-start md:items-end gap-3">
          <Badge className="bg-brand-success text-white px-4 py-1 text-sm font-bold border-none">
            APPROVED
          </Badge>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 text-xs">
              <Share2 className="w-3.5 h-3.5 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm" className="h-8 text-xs">
              <Printer className="w-3.5 h-3.5 mr-2" />
              Print
            </Button>
            <Button variant="outline" size="sm" className="h-8 text-xs">
              <Link className="w-3.5 h-3.5 mr-2" />
              Copy Link
            </Button>
            <Button variant="outline" size="sm" className="h-8 text-xs">
              <FileDown className="w-3.5 h-3.5 mr-2" />
              Export PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}