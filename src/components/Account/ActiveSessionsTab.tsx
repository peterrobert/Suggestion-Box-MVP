import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Smartphone, Laptop, LogOut, MapPin, Globe } from "lucide-react";

const sessions = [
  {
    id: 1,
    isCurrent: true,
    device: "Chrome 121 on macOS",
    location: "San Francisco, CA",
    ip: "192.168.1.xxx",
    lastActive: "Active now",
    icon: Laptop,
  },
  {
    id: 2,
    isCurrent: false,
    device: "Safari on iPhone 15",
    location: "San Francisco, CA",
    ip: "192.168.x.x",
    lastActive: "3 hours ago",
    icon: Smartphone,
  },
  {
    id: 3,
    isCurrent: false,
    device: "Firefox 122 on Windows 11",
    location: "New York, NY",
    ip: "10.0.x.x",
    lastActive: "2 days ago",
    icon: Monitor,
  },
];

export function ActiveSessionsTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Active Sessions</h2>
          <p className="text-sm text-muted-foreground">
            View and manage your active login sessions across different devices.
          </p>
        </div>
        <Badge variant="secondary" className="px-3 py-1 font-semibold">
          {sessions.length} sessions active
        </Badge>
      </div>

      <div className="grid gap-4">
        {sessions.map((session) => (
          <Card key={session.id} className={session.isCurrent ? "border-primary/50 bg-primary/5" : ""}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-background rounded-lg border shadow-sm">
                    <session.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{session.device}</span>
                      {session.isCurrent && (
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 uppercase text-[10px] tracking-wider">
                          Current Session
                        </Badge>
                      )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {session.location}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Globe className="h-3.5 w-3.5" />
                        IP: {session.ip}
                      </div>
                      <div className="col-span-1 sm:col-span-2">
                        Last active: <span className={session.isCurrent ? "text-green-600 font-medium" : ""}>{session.lastActive}</span>
                      </div>
                    </div>
                  </div>
                </div>
                {!session.isCurrent && (
                  <Button variant="outline" size="sm" className="text-destructive hover:bg-destructive hover:text-destructive-foreground">
                    Sign Out
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="pt-6 border-t">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-muted/30 p-6 rounded-xl border border-dashed">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-semibold">Sign out everywhere else</h4>
            <p className="text-sm text-muted-foreground max-w-md">
              If you noticed any suspicious activity or just want to be safe, you can sign out of all other sessions except this one.
            </p>
          </div>
          <Button variant="destructive" className="gap-2">
            <LogOut className="h-4 w-4" />
            Sign Out All Other Sessions
          </Button>
        </div>
      </div>
    </div>
  );
}