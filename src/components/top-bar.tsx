import { Bell, ChevronRight, Plus } from "lucide-react";

import { CommandBar } from "@/components/command-bar";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function TopBar() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-4 border-b border-hairline bg-surface/70 px-6 backdrop-blur sm:px-8">
      <nav className="hidden shrink-0 items-center gap-1.5 whitespace-nowrap text-xs text-muted-foreground lg:flex">
        <span>Acme Corp</span>
        <ChevronRight className="h-3 w-3" />
        <span className="font-medium text-foreground">Workspace</span>
      </nav>

      <div className="mx-auto w-full max-w-md">
        <CommandBar />
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <button className="hidden items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:flex">
          <Plus className="h-3.5 w-3.5" />
          Deploy Agent
        </button>
        <button
          aria-label="Notifications"
          className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-hairline text-muted-foreground transition-colors hover:text-foreground"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-primary" />
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 rounded-lg border border-hairline py-1 pl-1 pr-2.5 outline-none transition-colors hover:border-primary/40">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/12 text-[11px] font-semibold text-primary">
              KA
            </span>
            <span className="hidden text-left leading-tight sm:block">
              <span className="block text-xs font-medium text-foreground">Khaled A.</span>
              <span className="block text-[10px] text-muted-foreground">Operator</span>
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuLabel className="text-xs">Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-sm">Profile</DropdownMenuItem>
            <DropdownMenuItem className="text-sm">Preferences</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-sm">Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
