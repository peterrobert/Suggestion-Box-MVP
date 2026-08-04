import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, Download, Filter } from "lucide-react";

const auditEvents = [
  {
    user: { name: "Peter Kim", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" },
    action: "Verdict Published",
    object: "SSO Integration",
    timestamp: "Feb 15, 14:23",
    ip: "192.168.1.42",
    status: "Success",
  },
  {
    user: { name: "Sarah Chen", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" },
    action: "Member Invited",
    object: "alex@acme.com",
    timestamp: "Feb 14, 09:10",
    ip: "172.16.0.15",
    status: "Success",
  },
  {
    user: { name: "James Park", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" },
    action: "Review Started",
    object: "Onboarding Flow",
    timestamp: "Feb 10, 11:30",
    ip: "10.0.0.8",
    status: "Success",
  },
  {
    user: { name: "Peter Kim", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" },
    action: "Role Changed",
    object: "Maria Santos → Member",
    timestamp: "Feb 8, 16:45",
    ip: "192.168.1.42",
    status: "Success",
  },
  {
    user: { name: "Peter Kim", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" },
    action: "Group Created",
    object: "Marketing",
    timestamp: "Feb 5, 10:12",
    ip: "192.168.1.42",
    status: "Success",
  },
  {
    user: { name: "Sarah Chen", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" },
    action: "Suggestion Submitted",
    object: "Dark Mode",
    timestamp: "Feb 3, 15:20",
    ip: "172.16.0.15",
    status: "Success",
  },
  {
    user: { name: "James Park", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" },
    action: "Evidence Confirmed",
    object: "Customer Analysis",
    timestamp: "Feb 1, 08:55",
    ip: "10.0.0.8",
    status: "Success",
  },
  {
    user: { name: "Peter Kim", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" },
    action: "Settings Updated",
    object: "Org Preferences",
    timestamp: "Jan 30, 11:15",
    ip: "192.168.1.42",
    status: "Success",
  },
];

export function AuditLogTab() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-1 items-center gap-2 max-w-xl">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input className="pl-9" placeholder="Search events, users or objects..." />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Action Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Actions</SelectItem>
              <SelectItem value="member">Member Actions</SelectItem>
              <SelectItem value="suggestion">Suggestions</SelectItem>
              <SelectItem value="verdict">Verdicts</SelectItem>
              <SelectItem value="settings">Settings</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" /> Date Range
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" /> Export
          </Button>
        </div>
      </div>

      <div className="rounded-md border bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Object</TableHead>
              <TableHead>Timestamp</TableHead>
              <TableHead>IP Address</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {auditEvents.map((event, idx) => (
              <TableRow key={idx}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={event.user.avatar} />
                      <AvatarFallback className="text-[10px]">{event.user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{event.user.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{event.action}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm text-muted-foreground">{event.object}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm text-muted-foreground">{event.timestamp}</span>
                </TableCell>
                <TableCell>
                  <span className="text-xs font-mono text-muted-foreground">{event.ip}</span>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-[10px] py-0">
                    {event.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-center pt-4">
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          Load more events
        </Button>
      </div>
    </div>
  );
}