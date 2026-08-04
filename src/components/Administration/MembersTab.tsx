import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, UserPlus, MoreHorizontal, Filter, Mail, Shield, UserCog, UserMinus, RotateCw } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const members = [
  {
    id: "1",
    name: "Peter Kim",
    email: "peter@acme.com",
    role: "Admin",
    groups: "—",
    status: "Active",
    lastActive: "2 min ago",
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
  },
  {
    id: "2",
    name: "Sarah Chen",
    email: "sarah@acme.com",
    role: "Reviewer",
    groups: "Marketing",
    status: "Active",
    lastActive: "1h ago",
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
  },
  {
    id: "3",
    name: "James Park",
    email: "james@acme.com",
    role: "Reviewer",
    groups: "Engineering",
    status: "Active",
    lastActive: "3h ago",
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
  },
  {
    id: "4",
    name: "Maria Santos",
    email: "maria@acme.com",
    role: "Member",
    groups: "Product",
    status: "Active",
    lastActive: "1d ago",
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
  },
  {
    id: "5",
    name: "Alex Johnson",
    email: "alex@acme.com",
    role: "Member",
    groups: "Design",
    status: "Pending",
    lastActive: "Never",
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
  },
  {
    id: "6",
    name: "David Lee",
    email: "david@acme.com",
    role: "Member",
    groups: "Finance",
    status: "Active",
    lastActive: "2d ago",
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
  },
];

interface MembersTabProps {
  onMemberClick: (member: any) => void;
}

export function MembersTab({ onMemberClick }: MembersTabProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input className="pl-9" placeholder="Search members..." />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" /> Filters
          </Button>
          <Button size="sm" className="bg-[#00a396] hover:bg-[#008f84]">
            <UserPlus className="w-4 h-4 mr-2" /> Invite Member
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="bg-transparent border-b rounded-none w-full justify-start h-auto p-0 gap-6">
          <TabsTrigger value="all" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-1 pb-2">All</TabsTrigger>
          <TabsTrigger value="admin" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-1 pb-2">Admin</TabsTrigger>
          <TabsTrigger value="reviewer" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-1 pb-2">Reviewer</TabsTrigger>
          <TabsTrigger value="member" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-1 pb-2">Member</TabsTrigger>
          <TabsTrigger value="pending" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-1 pb-2">Pending</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Groups</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Active</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((member) => (
              <TableRow 
                key={member.id} 
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => onMemberClick(member)}
              >
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{member.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">{member.email}</TableCell>
                <TableCell>
                  <Badge variant={member.role === 'Admin' ? 'default' : 'secondary'} className="font-normal">
                    {member.role}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{member.groups}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${member.status === 'Active' ? 'bg-green-500' : 'bg-amber-500'}`} />
                    <span className="text-sm">{member.status}</span>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">{member.lastActive}</TableCell>
                <TableCell onClick={(e) => e.stopPropagation()}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <UserCog className="w-4 h-4 mr-2" /> Change Role
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Mail className="w-4 h-4 mr-2" /> Resend Invitation
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-amber-600">
                        <Shield className="w-4 h-4 mr-2" /> Suspend Member
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <UserMinus className="w-4 h-4 mr-2" /> Remove Member
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}