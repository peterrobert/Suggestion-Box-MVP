import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Plus, MoreVertical, Users, MessageSquare, User, ExternalLink, Settings2, Archive } from "lucide-react";

const groups = [
  {
    name: "Marketing",
    description: "External communications, social media, and brand strategy team.",
    members: 8,
    suggestions: 5,
    reviewer: "Sarah Chen",
    color: "bg-blue-100 text-blue-700",
    initial: "M",
  },
  {
    name: "Product",
    description: "Product roadmap, feature definition, and user experience research.",
    members: 6,
    suggestions: 8,
    reviewer: "Maria Santos",
    color: "bg-purple-100 text-purple-700",
    initial: "P",
  },
  {
    name: "Engineering",
    description: "Core platform development, infrastructure, and technical architecture.",
    members: 5,
    suggestions: 3,
    reviewer: "James Park",
    color: "bg-amber-100 text-amber-700",
    initial: "E",
  },
  {
    name: "Design",
    description: "Visual identity, UI components, and design system maintenance.",
    members: 4,
    suggestions: 2,
    reviewer: "Alex Johnson",
    color: "bg-pink-100 text-pink-700",
    initial: "D",
  },
  {
    name: "Finance",
    description: "Budgeting, financial reporting, and payroll management.",
    members: 3,
    suggestions: 1,
    reviewer: "David Lee",
    color: "bg-emerald-100 text-emerald-700",
    initial: "F",
  },
  {
    name: "Customer Success",
    description: "User onboarding, support tickets, and client relationship management.",
    members: 12,
    suggestions: 14,
    reviewer: "Sarah Chen",
    color: "bg-indigo-100 text-indigo-700",
    initial: "C",
  },
];

export function GroupsTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">User Groups</h2>
          <p className="text-sm text-muted-foreground">Manage departments and functional teams.</p>
        </div>
        <Button className="bg-[#00a396] hover:bg-[#008f84]">
          <Plus className="w-4 h-4 mr-2" /> Create Group
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <Card key={group.name} className="overflow-hidden hover:border-primary/50 transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className={`w-10 h-10 rounded-lg ${group.color} flex items-center justify-center font-bold text-lg`}>
                  {group.initial}
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <ExternalLink className="w-4 h-4 mr-2" /> Open Group
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings2 className="w-4 h-4 mr-2" /> Edit Details
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Archive className="w-4 h-4 mr-2" /> Archive Group
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <CardTitle className="mt-4">{group.name}</CardTitle>
              <p className="text-sm text-muted-foreground line-clamp-2 min-h-[40px]">
                {group.description}
              </p>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{group.members} members</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{group.suggestions} topics</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-3 border-t bg-muted/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center">
                  <User className="w-3 h-3 text-slate-600" />
                </div>
                <span className="text-xs text-muted-foreground">Lead: {group.reviewer}</span>
              </div>
              <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-wider">Active</Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}