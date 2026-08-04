import { useState } from "react";
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  MessageSquare, 
  Paperclip, 
  ChevronDown, 
  ChevronRight,
  ShieldAlert,
  HelpCircle,
  Construction,
  AlertTriangle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface ReviewItem {
  id: string;
  status: "Confirmed" | "Pending" | "Needs Evidence" | "Contested";
  priority: "High" | "Medium" | "Low";
  type: "Risk" | "Evidence Request" | "Assumption" | "Constraint";
  title: string;
  description: string;
  dueDate: string;
}

const mockItems: ReviewItem[] = [
  {
    id: "1",
    status: "Pending",
    priority: "High",
    type: "Risk",
    title: "Customer drop-off analysis needed",
    description: "Initial data suggests a 40% drop-off at the email verification step. We need to verify if this is due to technical friction or interest lag.",
    dueDate: "March 12, 2025"
  },
  {
    id: "2",
    status: "Needs Evidence",
    priority: "Medium",
    type: "Evidence Request",
    title: "SLA compliance for external webhooks",
    description: "The proposal mentions 3rd party integrations. We need documented SLAs for the 'Zapier-like' workflow components.",
    dueDate: "March 14, 2025"
  },
  {
    id: "3",
    status: "Confirmed",
    priority: "High",
    type: "Assumption",
    title: "Mobile-first approach for emerging markets",
    description: "Assuming 80% of new users in SEA region will access via mobile. Validated by regional sales reports.",
    dueDate: "March 10, 2025"
  },
  {
    id: "4",
    status: "Contested",
    priority: "High",
    type: "Risk",
    title: "Data residency in EU clusters",
    description: "Proposed architecture might violate GDPR data localization requirements for certain financial entities.",
    dueDate: "March 11, 2025"
  },
  {
    id: "5",
    status: "Pending",
    priority: "Low",
    type: "Constraint",
    title: "Legacy API Support",
    description: "Must maintain backward compatibility with v1.2 endpoints until Q4 migration.",
    dueDate: "March 18, 2025"
  }
];

export function ResolvePhase() {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const getStatusColor = (status: ReviewItem["status"]) => {
    switch (status) {
      case "Confirmed": return "bg-green-50 text-green-700 border-green-200";
      case "Pending": return "bg-gray-50 text-gray-700 border-gray-200";
      case "Needs Evidence": return "bg-amber-50 text-amber-700 border-amber-200";
      case "Contested": return "bg-red-50 text-red-700 border-red-200";
    }
  };

  const getTypeIcon = (type: ReviewItem["type"]) => {
    switch (type) {
      case "Risk": return <ShieldAlert className="w-4 h-4 text-red-500" />;
      case "Evidence Request": return <HelpCircle className="w-4 h-4 text-amber-500" />;
      case "Assumption": return <Construction className="w-4 h-4 text-blue-500" />;
      case "Constraint": return <AlertTriangle className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6 pb-20">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold text-foreground">Resolve Phase</h2>
        <p className="text-sm text-muted-foreground">Work through each review item to move towards a final verdict.</p>
      </div>

      <div className="space-y-4">
        {mockItems.map((item) => (
          <Card key={item.id} className="overflow-hidden border-border shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-0">
              <div className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <button 
                      onClick={() => toggleExpand(item.id)}
                      className="mt-1 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {expandedItems.includes(item.id) ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </button>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="outline" className={cn("px-1.5 py-0 text-[10px] uppercase font-bold", getStatusColor(item.status))}>
                          {item.status}
                        </Badge>
                        <Badge variant="secondary" className="px-1.5 py-0 text-[10px] uppercase font-bold bg-slate-100">
                          {item.priority} Priority
                        </Badge>
                        <div className="flex items-center gap-1 ml-1">
                          {getTypeIcon(item.type)}
                          <span className="text-[10px] font-bold text-muted-foreground uppercase">{item.type}</span>
                        </div>
                      </div>
                      <h3 className="font-semibold text-base text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-4 mt-3 pt-3 border-t border-dashed border-border">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Clock className="w-3.5 h-3.5" />
                          <span>Due {item.dueDate}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>3 comments</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Paperclip className="w-3.5 h-3.5" />
                          <span>2 files</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 min-w-[140px]">
                    <Button size="sm" className="bg-brand-success hover:bg-brand-success/90 h-8 text-xs font-bold">
                      Confirm
                    </Button>
                    <Button variant="outline" size="sm" className="border-amber-200 bg-amber-50/30 text-amber-700 hover:bg-amber-50 h-8 text-xs font-bold">
                      Request Evidence
                    </Button>
                    <Button variant="outline" size="sm" className="border-red-200 bg-red-50/30 text-red-700 hover:bg-red-50 h-8 text-xs font-bold">
                      Challenge
                    </Button>
                    <Button variant="outline" size="sm" className="border-teal-200 bg-teal-50/30 text-teal-700 hover:bg-teal-50 h-8 text-xs font-bold">
                      Resolve
                    </Button>
                  </div>
                </div>
              </div>

              {expandedItems.includes(item.id) && (
                <div className="bg-muted/30 border-t border-border p-4 animate-in slide-in-from-top-2">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0" />
                      <div className="bg-white p-3 rounded-lg border border-border shadow-sm text-sm">
                        <p className="font-semibold text-xs mb-1">Alex Rivera <span className="text-muted-foreground font-normal ml-2">2 hours ago</span></p>
                        <p>I've uploaded the latest telemetry data from the beta group. It seems the drop-off is localized to Android users on older versions.</p>
                      </div>
                    </div>
                    <div className="pl-11 space-y-2">
                      <div className="flex items-center gap-2 p-2 bg-white rounded border border-border text-xs">
                        <Paperclip className="w-3.5 h-3.5 text-blue-500" />
                        <span className="font-medium">android-telemetry-v4.csv</span>
                        <span className="text-muted-foreground ml-auto">1.2MB</span>
                      </div>
                    </div>
                    <div className="pl-11 flex gap-2">
                      <Textarea placeholder="Reply or add evidence..." className="min-h-[60px] text-sm bg-white" />
                      <Button size="icon" className="h-auto aspect-square">
                        <MessageSquare className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-2 border-primary/20 bg-primary/5">
        <CardContent className="p-6 space-y-6">
          <div className="flex items-center gap-2 text-primary font-bold">
            <CheckCircle2 className="w-5 h-5" />
            <h3 className="text-lg">Primary Goal Evaluation</h3>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-medium">Goal: <span className="text-foreground italic">"Improve customer activation rate by 30%"</span></p>
            
            <RadioGroup defaultValue="partially" className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex items-center space-x-2 border rounded-lg p-3 bg-white hover:border-primary transition-colors cursor-pointer">
                <RadioGroupItem value="supported" id="supported" />
                <Label htmlFor="supported" className="text-sm font-medium cursor-pointer">Supported</Label>
              </div>
              <div className="flex items-center space-x-2 border rounded-lg p-3 bg-white hover:border-primary transition-colors cursor-pointer">
                <RadioGroupItem value="partially" id="partially" />
                <Label htmlFor="partially" className="text-sm font-medium cursor-pointer">Partially Supported</Label>
              </div>
              <div className="flex items-center space-x-2 border rounded-lg p-3 bg-white hover:border-primary transition-colors cursor-pointer">
                <RadioGroupItem value="unsupported" id="unsupported" />
                <Label htmlFor="unsupported" className="text-sm font-medium cursor-pointer">Unsupported</Label>
              </div>
              <div className="flex items-center space-x-2 border rounded-lg p-3 bg-white hover:border-primary transition-colors cursor-pointer">
                <RadioGroupItem value="inconclusive" id="inconclusive" />
                <Label htmlFor="inconclusive" className="text-sm font-medium cursor-pointer">Inconclusive</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase text-muted-foreground flex items-center gap-1">
              Reasoning <span className="text-destructive">*</span>
            </Label>
            <Textarea 
              placeholder="Provide evidence-based reasoning for this evaluation..." 
              className="min-h-[100px] bg-white"
            />
          </div>

          <div className="flex justify-end">
            <Button className="bg-primary hover:bg-primary/90 font-bold px-8">
              Save Evaluation
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}