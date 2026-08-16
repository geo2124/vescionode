import { AppSidebar } from "@/components/app-sidebar";
import { ActivityFeed } from "@/components/activity-feed";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-950 text-slate-50">
      <AppSidebar />
      <main className="flex min-w-0 flex-1 flex-col">{children}</main>
      <div className="hidden w-80 lg:block">
        <ActivityFeed />
      </div>
    </div>
  );
}
