import { Search } from "lucide-react";

export function CommandBar() {
  return (
    <div className="group flex items-center gap-2.5 rounded-lg border border-hairline bg-surface-sunken px-3 py-2 transition-colors focus-within:border-primary/50">
      <Search className="h-3.5 w-3.5 text-muted-foreground" />
      <input
        type="text"
        placeholder="Search or run a command…"
        className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
      />
      <span className="hidden items-center gap-1 text-[10px] text-muted-foreground sm:flex">
        <kbd className="rounded border border-hairline px-1.5 py-0.5 font-sans">⌘</kbd>
        <kbd className="rounded border border-hairline px-1.5 py-0.5 font-sans">K</kbd>
      </span>
    </div>
  );
}
