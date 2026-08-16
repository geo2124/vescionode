import { Link, useRouterState } from "@tanstack/react-router";
import {
  Building2,
  ChevronDown,
  Command,
  Cpu,
  Hexagon,
  Layers,
  Settings,
  ShieldCheck,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { title: "Command Center", url: "/", icon: Command },
  { title: "Departments", url: "/departments", icon: Layers },
  { title: "AI Workforce", url: "/ai-workforce", icon: Cpu },
  { title: "Human Approvals", url: "/human-approvals", icon: ShieldCheck },
  { title: "Settings", url: "/settings", icon: Settings },
];

const organizations = ["Acme Corp", "Vescio Industries", "Forge Labs"];

export function AppSidebar() {
  const currentPath = useRouterState({
    select: (router) => router.location.pathname,
  });

  return (
    <aside className="flex h-full w-64 flex-col border-r border-slate-800 bg-slate-900">
      <div className="flex items-center gap-2 px-5 py-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500 text-slate-950">
          <Hexagon className="h-5 w-5 fill-current" />
        </div>
        <span className="text-lg font-semibold tracking-tight text-slate-50">
          Vescio Node
        </span>
      </div>

      <div className="px-4 pb-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex w-full items-center justify-between rounded-md border border-slate-800 bg-slate-950/50 px-3 py-2 text-left text-sm text-slate-200 outline-none ring-emerald-500 hover:border-slate-700 focus-visible:ring-2">
            <span className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-slate-500" />
              <span className="truncate">Acme Corp</span>
            </span>
            <ChevronDown className="h-4 w-4 text-slate-500" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="w-56 border-slate-800 bg-slate-900 text-slate-200"
          >
            {organizations.map((org) => (
              <DropdownMenuItem
                key={org}
                className="cursor-pointer hover:bg-slate-800 focus:bg-slate-800"
              >
                {org}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-2">
        {navItems.map((item) => {
          const isActive = currentPath === item.url;
          return (
            <Link
              key={item.title}
              to={item.url}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-emerald-500/10 text-emerald-500"
                  : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-slate-800 p-4">
        <div className="flex items-center gap-3 rounded-md bg-slate-950/50 px-3 py-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-xs font-medium text-slate-400">
            System Operational
          </span>
        </div>
      </div>
    </aside>
  );
}
