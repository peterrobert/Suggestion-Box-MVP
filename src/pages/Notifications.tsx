import React, { useState, useMemo } from "react";
import AppShell from "@/components/AppShell";
import {
  Bell,
  UserCheck,
  MessageSquare,
  AlertCircle,
  CheckCircle,
  GitBranch,
  UserPlus,
  FileText,
  Search,
  Settings,
  Filter,
  CheckCircle2,
  Trash2,
  MoreVertical,
  ChevronDown,
  Inbox
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { NotificationItem } from "@/components/Notifications/NotificationItem";
import type { Notification } from "@/components/Notifications/NotificationItem";
import { NotificationPreview } from "@/components/Notifications/NotificationPreview";
import { NotificationSettings } from "@/components/Notifications/NotificationSettings";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const INITIAL_NOTIFICATIONS: Notification[] = [
  {
    id: "1",
    type: "verdict",
    icon: <Bell className="h-4 w-4" />,
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
    user: "James Park",
    title: "Verdict Published on SSO Integration",
    description: "James Park published a verdict: Approved. The SSO Integration suggestion has been approved.",
    suggestionTitle: "SSO Integration",
    timestamp: "30m ago",
    priority: "High",
    isRead: false,
    category: "Verdicts"
  },
  {
    id: "2",
    type: "assignment",
    icon: <UserCheck className="h-4 w-4" />,
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
    user: "Sarah Chen",
    title: "You were assigned as a reviewer",
    description: "Sarah Chen assigned you to review the Customer Onboarding Flow suggestion.",
    suggestionTitle: "Customer Onboarding",
    timestamp: "1h ago",
    isRead: false,
    category: "Assigned to Me"
  },
  {
    id: "3",
    type: "comment",
    icon: <MessageSquare className="h-4 w-4" />,
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
    user: "Maria Santos",
    title: "New comment on your suggestion",
    description: "Maria Santos added a comment mentioning you in Dark Mode Support.",
    suggestionTitle: "Dark Mode Support",
    timestamp: "2h ago",
    isRead: false,
    category: "Mentions"
  },
  {
    id: "4",
    type: "system",
    icon: <AlertCircle className="h-4 w-4" />,
    title: "Seat limit approaching",
    description: "You are using 4 of 5 seats. Upgrade your plan to add more members.",
    timestamp: "3h ago",
    priority: "High",
    isRead: false,
    category: "Organization"
  },
  {
    id: "5",
    type: "evidence",
    icon: <CheckCircle className="h-4 w-4" />,
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
    user: "James Park",
    title: "Evidence confirmed",
    description: "James Park confirmed the customer analysis evidence.",
    suggestionTitle: "Customer Analysis",
    timestamp: "1d ago",
    isRead: true,
    category: "Activity"
  },
  {
    id: "6",
    type: "activity",
    icon: <GitBranch className="h-4 w-4" />,
    title: "Suggestion entered In Resolution",
    description: "Redesign Customer Onboarding entered the resolution phase.",
    suggestionTitle: "Redesign Customer Onboarding",
    timestamp: "1d ago",
    isRead: true,
    category: "Suggestions"
  },
  {
    id: "7",
    type: "invite",
    icon: <UserPlus className="h-4 w-4" />,
    user: "Admin",
    title: "New member joined",
    description: "Alex Johnson accepted their invitation and joined Acme Corp.",
    timestamp: "2d ago",
    isRead: true,
    category: "Organization"
  },
  {
    id: "8",
    type: "evidence",
    icon: <FileText className="h-4 w-4" />,
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
    user: "Sarah Chen",
    title: "Evidence submitted",
    description: "Sarah Chen submitted new evidence: Drop-off Rate Analysis 2024.",
    suggestionTitle: "Drop-off Rate Analysis",
    timestamp: "2d ago",
    isRead: true,
    category: "Suggestions"
  },
  {
    id: "9",
    type: "system",
    icon: <AlertCircle className="h-4 w-4" />,
    title: "Maintenance scheduled",
    description: "System maintenance scheduled for this Sunday at 2 AM UTC.",
    timestamp: "3d ago",
    isRead: true,
    category: "System"
  },
  {
    id: "10",
    type: "assignment",
    icon: <UserCheck className="h-4 w-4" />,
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
    user: "Robert Wilson",
    title: "Review completed",
    description: "Robert Wilson completed the review of API Documentation updates.",
    suggestionTitle: "API Documentation",
    timestamp: "4d ago",
    isRead: true,
    category: "Reviews"
  },
  {
    id: "11",
    type: "comment",
    icon: <MessageSquare className="h-4 w-4" />,
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
    user: "Peter Kim",
    title: "Mention in Security Audit",
    description: "You were mentioned in a comment on the Security Audit suggestion.",
    suggestionTitle: "Security Audit",
    timestamp: "5d ago",
    isRead: true,
    category: "Mentions"
  },
  {
    id: "12",
    type: "activity",
    icon: <Bell className="h-4 w-4" />,
    title: "New Suggestion Created",
    description: "A new suggestion 'Mobile App v2' was created by Emily Blunt.",
    suggestionTitle: "Mobile App v2",
    timestamp: "1w ago",
    isRead: true,
    category: "Suggestions"
  }
];

const CATEGORIES = [
  { id: "All", label: "All", icon: Bell, count: 14 },
  { id: "Unread", label: "Unread", icon: Inbox, count: 4, bold: true },
  { id: "Mentions", label: "Mentions", icon: MessageSquare, count: 2 },
  { id: "Assigned to Me", label: "Assigned to Me", icon: UserCheck, count: 3 },
  { id: "Reviews", label: "Reviews", icon: FileText, count: 4 },
  { id: "Verdicts", label: "Verdicts", icon: CheckCircle2, count: 1 },
  { id: "Suggestions", label: "Suggestions", icon: GitBranch, count: 6 },
  { id: "Organization", label: "Organization", icon: UserPlus, count: 2 },
  { id: "System", label: "System", icon: AlertCircle, count: 1 },
];

export function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>(INITIAL_NOTIFICATIONS);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const unreadCount = useMemo(() => notifications.filter(n => !n.isRead).length, [notifications]);

  const filteredNotifications = useMemo(() => {
    return notifications.filter(n => {
      const matchesSearch = n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          n.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          n.suggestionTitle?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === "All" ||
                             (selectedCategory === "Unread" ? !n.isRead : n.category === selectedCategory);

      const matchesPriority = priorityFilter === "All" || n.priority === priorityFilter;

      const matchesStatus = statusFilter === "All" ||
                          (statusFilter === "Unread" ? !n.isRead : n.isRead);

      return matchesSearch && matchesCategory && matchesPriority && matchesStatus;
    });
  }, [notifications, searchQuery, selectedCategory, priorityFilter, statusFilter]);

  const selectedNotification = useMemo(() =>
    notifications.find(n => n.id === selectedId) || null,
  [notifications, selectedId]);

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })));
  };

  const handleNotificationClick = (n: Notification) => {
    setSelectedId(n.id);
    if (!n.isRead) {
      setNotifications(notifications.map(item =>
        item.id === n.id ? { ...item, isRead: true } : item
      ));
    }
  };

  const groupedNotifications = useMemo(() => {
    const today: Notification[] = [];
    const earlier: Notification[] = [];

    filteredNotifications.forEach(n => {
      if (n.timestamp.includes("m ago") || n.timestamp.includes("h ago")) {
        today.push(n);
      } else {
        earlier.push(n);
      }
    });

    return { today, earlier };
  }, [filteredNotifications]);

  return (
    <AppShell pageTitle="Notifications" breadcrumb="Acme Corp">
      <div className="flex h-full overflow-hidden bg-background">
        {/* Left Sidebar */}
        <aside className="w-60 border-r border-border bg-white flex flex-col hidden lg:flex">
          <div className="p-4 border-b border-border">
            <h2 className="text-sm font-bold text-foreground uppercase tracking-wider">Categories</h2>
          </div>
          <nav className="flex-1 overflow-y-auto p-2 space-y-0.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors group",
                  selectedCategory === cat.id
                    ? "bg-accent text-primary font-medium"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  cat.bold && "font-semibold"
                )}
              >
                <div className="flex items-center gap-2.5">
                  <cat.icon className={cn(
                    "h-4 w-4",
                    selectedCategory === cat.id ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                  )} />
                  <span>{cat.label}</span>
                </div>
                {cat.count > 0 && (
                  <Badge variant="secondary" className={cn(
                    "h-5 min-w-5 px-1 flex items-center justify-center text-[10px] rounded-full",
                    selectedCategory === cat.id ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                  )}>
                    {cat.count}
                  </Badge>
                )}
              </button>
            ))}
          </nav>
        </aside>

        {/* Center Feed */}
        <div className="flex-1 flex flex-col min-w-0 bg-white">
          {/* Header Action Bar */}
          <header className="p-4 border-b border-border space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <div className="flex items-center gap-3">
                  <h1 className="text-xl font-bold text-foreground">Notifications</h1>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none px-2 py-0.5 text-xs font-semibold">
                    {unreadCount} unread
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">Stay up to date with activity that matters to you.</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={handleMarkAllAsRead} className="h-9 hidden sm:flex border-border text-xs font-medium hover:bg-muted">
                  Mark All as Read
                </Button>
                <NotificationSettings
                  trigger={
                    <Button variant="outline" size="icon" className="h-9 w-9 border-border text-muted-foreground hover:text-foreground">
                      <Settings className="h-4 w-4" />
                    </Button>
                  }
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search in notifications..."
                  className="pl-9 h-9 border-border bg-muted/30 focus:bg-white transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-9 text-xs border-border gap-2 font-medium">
                      <Filter className="h-3.5 w-3.5" />
                      Priority: {priorityFilter}
                      <ChevronDown className="h-3 w-3 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setPriorityFilter("All")}>All Priorities</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setPriorityFilter("High")}>High Priority</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setPriorityFilter("Normal")}>Normal Priority</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setPriorityFilter("Low")}>Low Priority</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-9 text-xs border-border gap-2 font-medium">
                      Status: {statusFilter}
                      <ChevronDown className="h-3 w-3 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setStatusFilter("All")}>All Status</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setStatusFilter("Unread")}>Unread Only</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setStatusFilter("Read")}>Read Only</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>

          {/* Feed Content */}
          <div className="flex-1 overflow-y-auto">
            {filteredNotifications.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
                  <Inbox className="h-10 w-10 text-muted-foreground/60" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">You're all caught up!</h3>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  No notifications found for this category or filter. Relax and enjoy your day!
                </p>
                <Button
                  variant="link"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                    setPriorityFilter("All");
                    setStatusFilter("All");
                  }}
                  className="mt-4 text-primary"
                >
                  Clear all filters
                </Button>
              </div>
            ) : (
              <div className="divide-y divide-border">
                {groupedNotifications.today.length > 0 && (
                  <>
                    <div className="bg-muted/30 px-4 py-2 sticky top-0 z-10 border-y border-border">
                      <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Today</span>
                    </div>
                    {groupedNotifications.today.map((n) => (
                      <NotificationItem
                        key={n.id}
                        notification={n}
                        isActive={selectedId === n.id}
                        onClick={handleNotificationClick}
                      />
                    ))}
                  </>
                )}

                {groupedNotifications.earlier.length > 0 && (
                  <>
                    <div className="bg-muted/30 px-4 py-2 sticky top-0 z-10 border-y border-border">
                      <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Earlier</span>
                    </div>
                    {groupedNotifications.earlier.map((n) => (
                      <NotificationItem
                        key={n.id}
                        notification={n}
                        isActive={selectedId === n.id}
                        onClick={handleNotificationClick}
                      />
                    ))}
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Preview Panel */}
        {selectedId && (
          <aside className="hidden xl:block w-[320px] h-full flex-shrink-0">
            <NotificationPreview
              notification={selectedNotification}
              onClose={() => setSelectedId(null)}
            />
          </aside>
        )}
      </div>
    </AppShell>
  );
}

export default Notifications;