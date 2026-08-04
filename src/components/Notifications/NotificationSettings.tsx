import React from "react";
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger,
  SheetFooter
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Settings, 
  Bell, 
  Mail, 
  Monitor, 
  MessageSquare, 
  UserPlus, 
  CheckCircle2,
  AlertCircle
} from "lucide-react";

interface NotificationSettingsProps {
  trigger?: React.ReactNode;
}

export function NotificationSettings({ trigger }: NotificationSettingsProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {trigger || (
          <Button variant="outline" size="icon" className="h-9 w-9">
            <Settings className="h-4 w-4" />
          </Button>
        )}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col gap-0 p-0">
        <SheetHeader className="p-6 border-b border-border bg-white sticky top-0 z-10">
          <div className="flex items-center gap-2 text-primary mb-1">
            <Settings className="h-5 w-5" />
            <SheetTitle>Notification Settings</SheetTitle>
          </div>
          <SheetDescription>
            Manage how and when you receive activity updates.
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
          {/* Channel Preferences */}
          <section className="space-y-4">
            <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Delivery Channels</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-muted/30">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-white border border-border shadow-sm">
                    <Monitor className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <Label className="text-sm font-semibold">In-app notifications</Label>
                    <p className="text-[11px] text-muted-foreground leading-tight">Shown in the notification center</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-muted/30">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-white border border-border shadow-sm">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <Label className="text-sm font-semibold">Email notifications</Label>
                    <p className="text-[11px] text-muted-foreground leading-tight">Sent to peter.kim@acme.corp</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </section>

          <Separator />

          {/* Activity Alerts */}
          <section className="space-y-4">
            <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Activity Alerts</h4>
            <div className="space-y-5">
              {[
                { icon: MessageSquare, label: "Comments & Mentions", desc: "When someone mentions you or comments on your post" },
                { icon: UserPlus, label: "Assignments", desc: "When you are assigned to a review or task" },
                { icon: CheckCircle2, label: "Verdicts", desc: "When a verdict is published on your suggestion" },
                { icon: AlertCircle, label: "System Updates", desc: "Critical system and organization alerts" },
              ].map((item, i) => (
                <div key={i} className="flex items-start justify-between gap-4">
                  <div className="flex gap-3">
                    <item.icon className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <Label className="text-sm font-medium">{item.label}</Label>
                      <p className="text-xs text-muted-foreground leading-snug">{item.desc}</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
              ))}
            </div>
          </section>

          <Separator />

          {/* Digest Options */}
          <section className="space-y-4 pb-4">
            <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Email Digest</h4>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground mb-4">Receive a summary of activity instead of individual emails.</p>
              <div className="flex items-center space-x-2">
                <input type="radio" name="digest" id="off" className="text-primary focus:ring-primary h-4 w-4 border-gray-300" />
                <Label htmlFor="off" className="text-sm">Off (individual emails)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" name="digest" id="daily" defaultChecked className="text-primary focus:ring-primary h-4 w-4 border-gray-300" />
                <Label htmlFor="daily" className="text-sm">Daily summary</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" name="digest" id="weekly" className="text-primary focus:ring-primary h-4 w-4 border-gray-300" />
                <Label htmlFor="weekly" className="text-sm">Weekly digest</Label>
              </div>
            </div>
          </section>
        </div>

        <SheetFooter className="p-6 border-t border-border bg-muted/20">
          <Button className="w-full h-11 bg-primary hover:bg-brand-hover text-white">Save Preferences</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}