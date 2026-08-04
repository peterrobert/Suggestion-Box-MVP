import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Shield, Smartphone, Monitor, Smartphone as MobileIcon, Laptop, Key, RefreshCcw } from "lucide-react";
import { useState } from "react";

const loginActivity = [
  { device: "Chrome on macOS", location: "San Francisco, CA", date: "Oct 24, 2023 10:24 AM", status: "Success", icon: Laptop },
  { device: "Safari on iPhone 15", location: "San Francisco, CA", date: "Oct 23, 2023 04:15 PM", status: "Success", icon: MobileIcon },
  { device: "Firefox on Windows 11", location: "New York, NY", date: "Oct 22, 2023 09:30 AM", status: "Success", icon: Monitor },
  { device: "Chrome on macOS", location: "London, UK", date: "Oct 21, 2023 11:50 PM", status: "Failed", icon: Laptop },
  { device: "Safari on iPad Pro", location: "San Francisco, CA", date: "Oct 20, 2023 02:45 PM", status: "Success", icon: Smartphone },
];

export function SecurityTab() {
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="space-y-1">
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Last changed 3 months ago
            </CardDescription>
          </div>
          <Key className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          {!showPasswordForm ? (
            <div className="flex items-center justify-between">
              <div className="text-lg font-mono tracking-widest text-muted-foreground">••••••••••••</div>
              <Button onClick={() => setShowPasswordForm(true)} variant="outline">Change Password</Button>
            </div>
          ) : (
            <div className="space-y-4 pt-4 border-t">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="ghost" onClick={() => setShowPasswordForm(false)}>Cancel</Button>
                <Button>Update Password</Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="space-y-1">
            <CardTitle>Multi-Factor Authentication</CardTitle>
            <CardDescription>
              Add an extra layer of security to your account.
            </CardDescription>
          </div>
          <Shield className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-medium">Authenticator App</span>
                <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">Not Enabled</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Use an app like Google Authenticator or Authy to generate verification codes.
              </p>
            </div>
            <Button>Enable MFA</Button>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Recovery Codes</h4>
            <p className="text-sm text-muted-foreground">
              Recovery codes can be used to access your account if you lose your phone.
            </p>
            <Button variant="outline" size="sm" className="gap-2">
              <RefreshCcw className="h-3 w-3" />
              Generate New Codes
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Logins</CardTitle>
          <CardDescription>
            Check where and when you've logged in to your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">Device</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loginActivity.map((login, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <login.icon className="h-4 w-4 text-muted-foreground" />
                      {login.device}
                    </div>
                  </TableCell>
                  <TableCell>{login.location}</TableCell>
                  <TableCell>{login.date}</TableCell>
                  <TableCell className="text-right">
                    <Badge variant={login.status === "Success" ? "secondary" : "destructive"} className="font-normal">
                      {login.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="flex justify-end pt-4">
        <Button variant="outline" className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground transition-colors">
          Sign Out of All Devices
        </Button>
      </div>
    </div>
  );
}