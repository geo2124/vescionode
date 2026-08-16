import { Link, useRouterState } from "@tanstack/react-router";
import {
  Building2,
  ChevronsUpDown,
  Command,
  Cpu,
  Layers,
  LifeBuoy,
  Settings,
  ShieldCheck,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BrandMark } from "@/components/brand-mark";

const navSections = [
  {
    label: "Operate",
    items: [
      { title: "Command Center", url: "/", icon: Command },
      { title: "Departments", url: "/departments", icon: Layers },
    ],
  },
  {
    label: "Govern",
    items: [
      { title: "AI Workforce", url: "/ai-workforce", icon: Cpu },
      { title: "Human Approvals", url: "/human-approvals", icon: ShieldCheck, badge: "3" },
    ],
  },
  {
    label: "System",
    items: [{ title: "Settings", url: "/settings", icon: Settings }],
  },
];

const organizations = ["Acme Corp", "Vescio Industries", "Northwind Group"];

export function AppSidebar() {
  const currentPath = useRouterState({
    select: (router) => router.location.pathname,
  });

  return (
    <aside className="hidden h-full w-[272px] shrink-0 flex-col border-r border-hairline bg-surface md:flex">
      <div className="flex items-center gap-3 px-5 py-5">
        <BrandMark />
        <div className="leading-tight">
          <div className="font-display text-[15px] font-semibold tracking-tight text-foreground">
            Vescio Node
          </div>
          <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Business OS
          </div>
        </div>
      </div>

      <div className="px-4 pb-5">
        <DropdownMenu>
          <DropdownMenuTrigger className="group flex w-full items-center justify-between rounded-lg border border-hairline bg-surface-sunken px-3 py-2.5 text-left outline-none transition-colors hover:border-primary/40 focus-visible:ring-2 focus-visible:ring-ring/40">
            <span className="flex min-w-0 items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Building2 className="h-3.5 w-3.5" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium text-foreground">
                  Acme Corp
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-muted-foreground">
                  Enterprise
                </span>
              </span>
            </span>
            <ChevronsUpDown className="h-3.5 w-3.5 text-muted-foreground" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-60">
            <DropdownMenuLabel className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Organizations
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {organizations.map((org) => (
              <DropdownMenuItem key={org} className="cursor-pointer text-sm">
                {org}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <nav className="flex-1 space-y-6 overflow-y-auto px-3">
        {navSections.map((section) => (
          <div key={section.label}>
            <div className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground/70">
              {section.label}
            </div>
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = currentPath === item.url;
                return (
                  <Link
                    key={item.title}
                    to={item.url}
                    className={`group relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? "bg-primary/10 font-semibold text-foreground"
                        : "font-medium text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-primary" />
                    )}
                    <item.icon
                      className={`h-4 w-4 ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`}
                    />
                    <span className="flex-1 truncate">{item.title}</span>
                    {item.badge && (
                      <span className="rounded-full bg-warning/15 px-1.5 py-0.5 text-[10px] font-semibold text-warning">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="space-y-3 border-t border-hairline p-4">
        <div className="rounded-lg border border-hairline bg-surface-sunken p-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
              Node Health
            </span>
            <span className="flex items-center gap-1.5 text-[11px] font-medium text-positive">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-positive opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-positive" />
              </span>
              Optimal
            </span>
          </div>
          <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-border">
            <div className="h-full w-[94%] rounded-full bg-primary" />
          </div>
          <div className="mt-2 text-[11px] text-muted-foreground">
            94% capacity available
          </div>
        </div>
        <button className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
          <LifeBuoy className="h-3.5 w-3.5" />
          Support & documentation
        </button>
      </div>
    </aside>
  );
}
