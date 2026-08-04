import { ShieldCheck, ShieldAlert } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface EvidenceCardProps {
  title: string;
  type: string;
  quality: "Strong" | "Medium";
  verified: boolean;
}

export function EvidenceCard({ title, type, quality, verified }: EvidenceCardProps) {
  return (
    <div className="p-3 rounded-lg border border-border bg-card hover:bg-accent/5 transition-colors">
      <div className="flex items-start justify-between mb-2">
        <h4 className="text-sm font-semibold text-foreground leading-tight">{title}</h4>
        {verified ? (
          <ShieldCheck className="w-4 h-4 text-brand-success flex-shrink-0" />
        ) : (
          <ShieldAlert className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        )}
      </div>
      <div className="flex items-center gap-2 mt-auto">
        <span className="text-[10px] text-muted-foreground uppercase font-medium tracking-wider">{type}</span>
        <Badge 
          variant="secondary" 
          className={`text-[9px] px-1.5 py-0 font-bold uppercase ${
            quality === "Strong" 
              ? "bg-emerald-50 text-emerald-700 border-emerald-100" 
              : "bg-amber-50 text-amber-700 border-amber-100"
          }`}
        >
          {quality}
        </Badge>
      </div>
    </div>
  );
}