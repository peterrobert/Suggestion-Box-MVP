import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Calendar, Shield, MapPin, History, UserCog, Ban, Trash2 } from "lucide-react";

interface MemberDetailsDrawerProps {
  member: any | null;
  isOpen: boolean;
  onClose: () => void;
}

export function MemberDetailsDrawer({ member, isOpen, onClose }: MemberDetailsDrawerProps) {
  if (!member) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader className="text-left">
          <SheetTitle>Member Details</SheetTitle>
          <SheetDescription>
            Detailed information and activity for {member.name}.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-8 space-y-8">
          {/* Profile Header */}
          <div className="flex flex-col items-center text-center space-y-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={member.avatar} />
              <AvatarFallback className="text-2xl">{member.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.email}</p>
            </div>
            <div className="flex gap-2">
              <Badge variant={member.role === 'Admin' ? 'default' : 'secondary'}>{member.role}</Badge>
              <Badge variant="outline" className={member.status === 'Active' ? 'text-green-600 border-green-200 bg-green-50' : 'text-amber-600 border-amber-200 bg-amber-50'}>
                {member.status}
              </Badge>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <MapPin className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-muted-foreground">Department</p>
                <p className="font-medium">{member.groups !== '—' ? member.groups : 'Not assigned'}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <Calendar className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-muted-foreground">Joined Organization</p>
                <p className="font-medium">January 12, 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <History className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-muted-foreground">Last Active</p>
                <p className="font-medium">{member.lastActive}</p>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Account Actions</h4>
            <div className="grid gap-2">
              <Button variant="outline" className="justify-start">
                <UserCog className="w-4 h-4 mr-2" /> Change Permissions
              </Button>
              <Button variant="outline" className="justify-start">
                <Mail className="w-4 h-4 mr-2" /> Send Message
              </Button>
              <Button variant="outline" className="justify-start text-amber-600 hover:text-amber-600 hover:bg-amber-50 border-amber-200">
                <Ban className="w-4 h-4 mr-2" /> Suspend Access
              </Button>
              <Button variant="outline" className="justify-start text-destructive hover:text-destructive hover:bg-destructive/5 border-destructive/20">
                <Trash2 className="w-4 h-4 mr-2" /> Remove from Workspace
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Recent Activity</h4>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                  <div className="space-y-1">
                    <p className="font-medium">Submitted a suggestion</p>
                    <p className="text-xs text-muted-foreground">"Improve office lighting" • 2 days ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}