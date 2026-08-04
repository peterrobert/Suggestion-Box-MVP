import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Building2, Globe, ShieldAlert, Archive } from "lucide-react";

export function OrganizationTab() {
  return (
    <div className="space-y-6 pb-20">
      <Card>
        <CardHeader>
          <CardTitle>General Information</CardTitle>
          <CardDescription>
            Update your organization's public profile and basic settings.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-start">
            <div className="flex flex-col items-center gap-4">
              <div className="relative group">
                <div className="w-32 h-32 rounded-lg border-2 border-dashed border-border flex flex-col items-center justify-center bg-muted transition-colors hover:bg-accent cursor-pointer">
                  <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                  <span className="text-xs text-muted-foreground">Upload Logo</span>
                </div>
              </div>
              <p className="text-[10px] text-muted-foreground text-center">
                JPG, PNG or SVG.<br />Max size 2MB.
              </p>
            </div>

            <div className="flex-1 grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="org-name">Organization Name</Label>
                <Input id="org-name" defaultValue="Acme Corporation" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="org-slug">Workspace Slug</Label>
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <Input id="org-slug" defaultValue="acme-corp" />
                  </div>
                </div>
                <p className="text-[10px] text-muted-foreground">
                  https://app.suggestionbox.io/acme-corp
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Select defaultValue="technology">
                  <SelectTrigger id="industry">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Select defaultValue="us">
                  <SelectTrigger id="country">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="de">Germany</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="utc">
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc">UTC (Coordinated Universal Time)</SelectItem>
                    <SelectItem value="est">EST (Eastern Standard Time)</SelectItem>
                    <SelectItem value="pst">PST (Pacific Standard Time)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Tell us a bit about your organization..." 
                  className="min-h-[100px]"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Workspace Preferences</CardTitle>
          <CardDescription>
            Configure how your workspace functions and interacts with members.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between space-x-2">
            <div className="flex flex-col space-y-1">
              <Label>Default Visibility</Label>
              <p className="text-xs text-muted-foreground">
                Set if new suggestions are public to the org or restricted by default.
              </p>
            </div>
            <Select defaultValue="general">
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General (Org-wide)</SelectItem>
                <SelectItem value="group">Group-restricted</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between space-x-2 border-t pt-6">
            <div className="flex flex-col space-y-1">
              <Label>Review Workflow</Label>
              <p className="text-xs text-muted-foreground">
                Choose the approval process for new suggestions.
              </p>
            </div>
            <Select defaultValue="standard">
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard (1 Reviewer)</SelectItem>
                <SelectItem value="multi">Multi-stage</SelectItem>
                <SelectItem value="consensus">Consensus-based</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between space-x-2 border-t pt-6">
            <div className="flex flex-col space-y-1">
              <Label>Email Notifications</Label>
              <p className="text-xs text-muted-foreground">
                Receive digests and activity alerts via email.
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between space-x-2 border-t pt-6">
            <div className="flex flex-col space-y-1">
              <Label>Organization Branding</Label>
              <p className="text-xs text-muted-foreground">
                Apply custom colors and logo to the interface.
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive/50 bg-destructive/5">
        <CardHeader>
          <CardTitle className="text-destructive flex items-center gap-2">
            <ShieldAlert className="w-5 h-5" /> Danger Zone
          </CardTitle>
          <CardDescription>
            Irreversible actions that affect the entire organization.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-destructive/10 pb-4">
            <div className="space-y-0.5">
              <p className="text-sm font-medium">Archive Organization</p>
              <p className="text-xs text-muted-foreground">
                Make this workspace read-only. No new suggestions can be made.
              </p>
            </div>
            <Button variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-500/10">
              <Archive className="w-4 h-4 mr-2" /> Archive
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-0.5">
              <p className="text-sm font-medium">Delete Organization</p>
              <p className="text-xs text-muted-foreground">
                Permanently remove all data, members, and suggestions.
              </p>
            </div>
            <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive/10">
              <ShieldAlert className="w-4 h-4 mr-2" /> Delete Org
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="fixed bottom-6 right-6 lg:right-10 z-10">
        <Button className="bg-[#00a396] hover:bg-[#008f84] text-white shadow-lg px-8">
          Save Changes
        </Button>
      </div>
    </div>
  );
}