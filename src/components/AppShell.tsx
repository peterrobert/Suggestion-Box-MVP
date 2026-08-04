import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Lightbulb,
  Bell,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
  Search,
  HelpCircle,
  Building2,
  LogOut,
  User,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Suggestions", href: "/suggestions", icon: Lightbulb },
  { label: "Notifications", href: "/notifications", icon: Bell, badge: 4 },
  { label: "Groups", href: "/admin", icon: Users },
  { label: "Settings", href: "/account", icon: Settings },
];

interface AppShellProps {
  children: React.ReactNode;
  pageTitle?: string;
  breadcrumb?: string;
}

export default function AppShell({ children, pageTitle, breadcrumb }: AppShellProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:relative z-50 flex flex-col bg-white border-r border-border transition-all duration-200 h-full",
          collapsed ? "w-16" : "w-60",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Logo */}
        <div className={cn("flex items-center h-14 border-b border-border px-3", collapsed ? "justify-center" : "gap-3 px-4")}>
          <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
            <Lightbulb className="w-4 h-4 text-white" />
          </div>
          {!collapsed && (
            <span className="font-semibold text-sm text-foreground tracking-tight">Suggestion Box</span>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 py-3 px-2 space-y-0.5 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href || location.pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm font-medium transition-all duration-150",
                  isActive
                    ? "bg-accent text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  collapsed && "justify-center px-2"
                )}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                {!collapsed && (
                  <span className="flex-1">{item.label}</span>
                )}
                {!collapsed && item.badge && (
                  <Badge className="h-4 w-4 p-0 flex items-center justify-center text-[10px] bg-primary text-white">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="border-t border-border p-2 space-y-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={cn(
                  "flex items-center gap-3 w-full rounded-lg px-2.5 py-2 text-sm hover:bg-muted transition-colors",
                  collapsed && "justify-center"
                )}
              >
                <Avatar className="w-7 h-7 flex-shrink-0">
                  <AvatarImage src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" />
                  <AvatarFallback className="text-xs">PK</AvatarFallback>
                </Avatar>
                {!collapsed && (
                  <div className="flex-1 text-left min-w-0">
                    <p className="text-xs font-medium text-foreground truncate">Peter Kim</p>
                    <p className="text-[10px] text-muted-foreground truncate">Admin</p>
                  </div>
                )}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-52">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/account"><User className="w-4 h-4 mr-2" />Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/admin"><Building2 className="w-4 h-4 mr-2" />Organization</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/login" className="text-destructive focus:text-destructive">
                  <LogOut className="w-4 h-4 mr-2" />Sign Out
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Collapse toggle */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={cn(
              "hidden lg:flex items-center gap-2 w-full rounded-lg px-2.5 py-2 text-xs text-muted-foreground hover:bg-muted transition-colors",
              collapsed && "justify-center"
            )}
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <><ChevronLeft className="w-4 h-4" /><span>Collapse</span></>}
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar */}
        <header className="h-14 flex items-center gap-4 border-b border-border bg-white px-4 flex-shrink-0">
          <button
            className="lg:hidden p-1.5 rounded-md hover:bg-muted"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Left: breadcrumb */}
          <div className="flex items-center gap-2 min-w-0">
            {breadcrumb && (
              <>
                <span className="text-xs text-muted-foreground truncate">{breadcrumb}</span>
                <span className="text-muted-foreground">/</span>
              </>
            )}
            {pageTitle && (
              <span className="text-sm font-semibold text-foreground truncate">{pageTitle}</span>
            )}
          </div>

          {/* Center: search */}
          <div className="flex-1 max-w-sm mx-auto hidden md:flex">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
              <input
                className="w-full pl-9 pr-3 py-1.5 text-sm bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground"
                placeholder="Search suggestions..."
              />
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2 ml-auto">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground" asChild>
              <Link to="/notifications">
                <Bell className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
              <HelpCircle className="w-4 h-4" />
            </Button>
            <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-border">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs text-muted-foreground font-medium">Acme Corp</span>
              </div>
            </div>
            <Avatar className="w-7 h-7">
              <AvatarImage src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" />
              <AvatarFallback className="text-xs">PK</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}