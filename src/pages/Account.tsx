import AppShell from "@/components/AppShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, Shield, Settings, Activity } from "lucide-react";
import { ProfileTab } from "@/components/Account/ProfileTab";
import { SecurityTab } from "@/components/Account/SecurityTab";
import { PreferencesTab } from "@/components/Account/PreferencesTab";
import { ActiveSessionsTab } from "@/components/Account/ActiveSessionsTab";

export function Account() {
  return (
    <AppShell pageTitle="My Account" breadcrumb="User Settings">
      <div className="max-w-5xl mx-auto p-4 md:p-8 space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b">
          <div className="space-y-4">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold tracking-tight">My Account</h1>
              <p className="text-muted-foreground">
                Manage your personal profile, security and preferences.
              </p>
            </div>
            
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border shadow-sm">
              <Avatar className="h-16 w-16 border-2 border-background shadow-sm">
                <AvatarImage src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" alt="Peter Kim" />
                <AvatarFallback>PK</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold">Peter Kim</h2>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 font-medium">
                    Admin
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">peter@acme.com</p>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  Acme Corporation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="profile" className="space-y-6">
          <div className="overflow-x-auto pb-1">
            <TabsList className="w-full justify-start h-auto p-1 bg-muted/50">
              <TabsTrigger value="profile" className="flex gap-2 py-2 px-4 data-[state=active]:bg-background">
                <User className="h-4 w-4" />
                <span>Profile</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="flex gap-2 py-2 px-4 data-[state=active]:bg-background">
                <Shield className="h-4 w-4" />
                <span>Security</span>
              </TabsTrigger>
              <TabsTrigger value="preferences" className="flex gap-2 py-2 px-4 data-[state=active]:bg-background">
                <Settings className="h-4 w-4" />
                <span>Preferences</span>
              </TabsTrigger>
              <TabsTrigger value="sessions" className="flex gap-2 py-2 px-4 data-[state=active]:bg-background">
                <Activity className="h-4 w-4" />
                <span>Active Sessions</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="mt-6">
            <TabsContent value="profile" className="space-y-6 focus-visible:outline-none">
              <ProfileTab />
            </TabsContent>
            <TabsContent value="security" className="space-y-6 focus-visible:outline-none">
              <SecurityTab />
            </TabsContent>
            <TabsContent value="preferences" className="space-y-6 focus-visible:outline-none">
              <PreferencesTab />
            </TabsContent>
            <TabsContent value="sessions" className="space-y-6 focus-visible:outline-none">
              <ActiveSessionsTab />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </AppShell>
  );
}

export default Account;