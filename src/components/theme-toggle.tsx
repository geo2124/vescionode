import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className={cn(
        "relative flex h-9 w-16 shrink-0 items-center rounded-lg border border-hairline bg-surface-sunken p-1 transition-colors hover:border-primary/40",
        className,
      )}
    >
      <span
        className={cn(
          "absolute h-7 w-7 rounded-md bg-primary/15 ring-1 ring-primary/30 transition-transform duration-300 ease-out",
          isDark ? "translate-x-7" : "translate-x-0",
        )}
      />
      <span className="relative z-10 flex h-7 w-7 items-center justify-center">
        <Sun className={cn("h-3.5 w-3.5 transition-colors", isDark ? "text-muted-foreground" : "text-primary")} />
      </span>
      <span className="relative z-10 flex h-7 w-7 items-center justify-center">
        <Moon className={cn("h-3.5 w-3.5 transition-colors", isDark ? "text-primary" : "text-muted-foreground")} />
      </span>
    </button>
  );
}
