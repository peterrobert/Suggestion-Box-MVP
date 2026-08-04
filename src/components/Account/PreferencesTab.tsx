import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Monitor, Moon, Sun, Layout, List, Calendar, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export function PreferencesTab() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Theme</CardTitle>
          <CardDescription>
            Choose how the application looks to you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup defaultValue="system" className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <RadioGroupItem value="light" id="theme-light" className="sr-only" />
              <Label
                htmlFor="theme-light"
                className={cn(
                  "flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer",
                  "has-[:checked]:border-primary"
                )}
              >
                <Sun className="mb-3 h-6 w-6" />
                <span className="text-sm font-medium">Light</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="dark" id="theme-dark" className="sr-only" />
              <Label
                htmlFor="theme-dark"
                className={cn(
                  "flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer",
                  "has-[:checked]:border-primary"
                )}
              >
                <Moon className="mb-3 h-6 w-6" />
                <span className="text-sm font-medium">Dark</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="system" id="theme-system" className="sr-only" />
              <Label
                htmlFor="theme-system"
                className={cn(
                  "flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer",
                  "has-[:checked]:border-primary"
                )}
              >
                <Monitor className="mb-3 h-6 w-6" />
                <span className="text-sm font-medium">System</span>
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Display Density</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup defaultValue="comfortable" className="space-y-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="density-comfortable" />
                <Label htmlFor="density-comfortable">Comfortable</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="density-compact" />
                <Label htmlFor="density-compact">Compact</Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Default Landing Page</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup defaultValue="dashboard" className="space-y-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dashboard" id="landing-dashboard" />
                <Label htmlFor="landing-dashboard">Dashboard</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="suggestions" id="landing-suggestions" />
                <Label htmlFor="landing-suggestions">Suggestions</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="notifications" id="landing-notifications" />
                <Label htmlFor="landing-notifications">Notifications</Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Layout className="h-4 w-4" /> Suggestion View
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup defaultValue="card" className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="card" id="view-card" />
                <Label htmlFor="view-card" className="flex items-center gap-2">
                  <Layout className="h-3 w-3" /> Card View
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="table" id="view-table" />
                <Label htmlFor="view-table" className="flex items-center gap-2">
                  <List className="h-3 w-3" /> Table View
                </Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Calendar className="h-4 w-4" /> Date Format
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Select defaultValue="mm-dd-yyyy">
              <SelectTrigger>
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Globe className="h-4 w-4" /> Language & Regional
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="max-w-xs space-y-2">
            <Label htmlFor="pref-language">Default Language</Label>
            <Select defaultValue="en">
              <SelectTrigger id="pref-language">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English (United States)</SelectItem>
                <SelectItem value="en-gb">English (United Kingdom)</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between pt-4 border-t">
        <Button variant="link" className="text-muted-foreground p-0 h-auto font-normal hover:text-foreground">
          Reset to Defaults
        </Button>
        <Button>Save Preferences</Button>
      </div>
    </div>
  );
}