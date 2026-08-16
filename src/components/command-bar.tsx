import { Search, Terminal } from "lucide-react";

export function CommandBar() {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 shadow-sm">
      <Terminal className="h-4 w-4 text-emerald-500" />
      <Search className="h-4 w-4 text-slate-500" />
      <input
        type="text"
        placeholder="Type a command or search across your organization..."
        className="flex-1 bg-transparent text-sm text-slate-200 outline-none placeholder:text-slate-500"
      />
      <div className="hidden items-center gap-1 text-xs text-slate-500 sm:flex">
        <span className="rounded border border-slate-700 px-1.5 py-0.5">⌘</span>
        <span className="rounded border border-slate-700 px-1.5 py-0.5">K</span>
      </div>
    </div>
  );
}
