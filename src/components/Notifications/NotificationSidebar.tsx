import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface CategoryItem {
  id: string;
  label: string;
  icon: LucideIcon;
  count: number;
  isBold?: boolean;
}

interface NotificationSidebarProps {
  categories: CategoryItem[];
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}

export function NotificationSidebar({ categories, activeCategory, onCategoryChange }: NotificationSidebarProps) {
  return (
    <div className="w-[240px] flex-shrink-0 border-r border-border h-full bg-muted/10 hidden lg:flex flex-col">
      <div className="p-4">
        <h3 className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-4">Categories</h3>
        <nav className="space-y-0.5">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                  isActive
                    ? "bg-accent text-primary font-medium"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
                  category.isBold && !isActive && "font-semibold text-foreground"
                )}
              >
                <Icon className={cn("w-4 h-4", isActive ? "text-primary" : "text-muted-foreground")} />
                <span className="flex-1 text-left">{category.label}</span>
                {category.count > 0 && (
                  <Badge
                    variant="secondary"
                    className={cn(
                      "h-5 min-w-[20px] px-1 justify-center text-[10px] border-none",
                      isActive ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                    )}
                  >
                    {category.count}
                  </Badge>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}