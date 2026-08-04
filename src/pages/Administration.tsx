import { useState } from "react";
import AppShell from "@/components/AppShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OrganizationTab } from "@/components/Administration/OrganizationTab";
import { MembersTab } from "@/components/Administration/MembersTab";
import { GroupsTab } from "@/components/Administration/GroupsTab";
import { BillingTab } from "@/components/Administration/BillingTab";
import { AuditLogTab } from "@/components/Administration/AuditLogTab";
import { MemberDetailsDrawer } from "@/components/Administration/MemberDetailsDrawer";
import { Building2, Badge } from "lucide-react";

export default function Administration() {
  const [selectedMember, setSelectedMember] = useState<any | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleMemberClick = (member: any) => {
    setSelectedMember(member);
    setIsDrawerOpen(true);
  };

  return (
    <AppShell pageTitle="Administration" breadcrumb="Organization">
      <div className="flex flex-col h-full">
        {/* Org Header Info */}
        <div className="bg-white border-b px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Administration</h1>
                <p className="text-muted-foreground max-w-2xl">
                  Manage your organization, members, permissions and workspace settings.
                </p>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 bg-muted/30 p-4 rounded-xl border">
                <div className="flex items-center gap-3 pr-4 border-r">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Acme Corporation</p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Active Workspace</p>
                  </div>
                </div>
                <div className="space-y-1 px-2">
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Plan</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Basic Plan</span>
                    <span className="bg-slate-200 text-slate-700 text-[10px] px-1.5 py-0.5 rounded font-bold">FREE</span>
                  </div>
                </div>
                <div className="space-y-1 px-2">
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Members</p>
                  <p className="text-sm font-medium">4 / 5 seats</p>
                </div>
                <div className="space-y-1 pl-2">
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Status</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-sm font-medium">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10 bg-slate-50/50">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="organization" className="space-y-8">
              <TabsList className="bg-white p-1 border h-11">
                <TabsTrigger value="organization" className="px-6">Organization</TabsTrigger>
                <TabsTrigger value="members" className="px-6">Members</TabsTrigger>
                <TabsTrigger value="groups" className="px-6">Groups</TabsTrigger>
                <TabsTrigger value="billing" className="px-6">Billing</TabsTrigger>
                <TabsTrigger value="audit" className="px-6">Audit Log</TabsTrigger>
              </TabsList>

              <TabsContent value="organization" className="mt-0 focus-visible:outline-none">
                <OrganizationTab />
              </TabsContent>
              
              <TabsContent value="members" className="mt-0 focus-visible:outline-none">
                <MembersTab onMemberClick={handleMemberClick} />
              </TabsContent>

              <TabsContent value="groups" className="mt-0 focus-visible:outline-none">
                <GroupsTab />
              </TabsContent>

              <TabsContent value="billing" className="mt-0 focus-visible:outline-none">
                <BillingTab />
              </TabsContent>

              <TabsContent value="audit" className="mt-0 focus-visible:outline-none">
                <AuditLogTab />
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Member Drawer */}
        <MemberDetailsDrawer 
          member={selectedMember} 
          isOpen={isDrawerOpen} 
          onClose={() => setIsDrawerOpen(false)} 
        />
      </div>
    </AppShell>
  );
}