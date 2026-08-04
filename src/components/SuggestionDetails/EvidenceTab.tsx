import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Link, Image, Download, MoreVertical, Plus } from "lucide-react";

const evidence = [
  {
    id: 1,
    title: "Current User Journey Map.pdf",
    type: "Document",
    status: "Verified",
    contributor: "Sarah Chen",
    date: "Jan 12, 2025",
    icon: FileText,
  },
  {
    id: 2,
    title: "Q4 Drop-off Analytics.csv",
    type: "Data",
    status: "Pending Review",
    contributor: "James Park",
    date: "Jan 15, 2025",
    icon: FileText,
  },
  {
    id: 3,
    title: "Figma Redesign Prototype",
    type: "Link",
    status: "Verified",
    contributor: "Maria Garcia",
    date: "Jan 20, 2025",
    icon: Link,
  },
];

export function EvidenceTab() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Supporting Evidence (3)</h3>
        <Button size="sm" className="gap-2">
          <Plus className="w-4 h-4" />
          Add Evidence
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {evidence.map((item) => (
          <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow group">
            <CardContent className="p-0">
              <div className="p-4 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                  <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold truncate pr-6">{item.title}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.type} • {item.contributor}</p>
                  <div className="flex items-center justify-between mt-3">
                    <Badge 
                      variant="secondary" 
                      className={item.status === 'Verified' ? 'bg-green-50 text-green-700 border-green-100' : 'bg-amber-50 text-amber-700 border-amber-100'}
                    >
                      {item.status}
                    </Badge>
                    <span className="text-[10px] text-muted-foreground font-medium">{item.date}</span>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>
              <div className="px-4 py-2 bg-muted/30 border-t flex justify-between items-center">
                <Button variant="ghost" size="sm" className="h-7 text-xs gap-1.5 px-2">
                  <Download className="w-3.5 h-3.5" />
                  Download
                </Button>
                <Button variant="ghost" size="sm" className="h-7 text-xs px-2">View Full</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}