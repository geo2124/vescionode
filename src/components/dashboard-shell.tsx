import type { ReactNode } from "react";

import { AppSidebar } from "@/components/app-sidebar";
import { ActivityFeed } from "@/components/activity-feed";
import { TopBar } from "@/components/top-bar";

export function DashboardShell({
  title,
  description,
  eyebrow,
  actions,
  children,
}: {
  title: string;
  description?: string;
  eyebrow?: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground">
      <AppSidebar />
      <main className="flex min-w-0 flex-1 flex-col">
        <TopBar />
        <div className="flex-1 overflow-y-auto">
          <div className="ambient-grid border-b border-hairline">
            <div className="mx-auto flex max-w-[1180px] flex-wrap items-end justify-between gap-4 px-6 py-7 sm:px-8">
              <div>
                {eyebrow && (
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                    {eyebrow}
                  </div>
                )}
                <h1 className="font-display text-2xl font-semibold text-foreground">
                  {title}
                </h1>
                {description && (
                  <p className="mt-1.5 max-w-xl text-sm text-muted-foreground">
                    {description}
                  </p>
                )}
              </div>
              {actions && <div className="flex items-center gap-2">{actions}</div>}
            </div>
          </div>
          <div className="mx-auto max-w-[1180px] px-6 py-7 sm:px-8">{children}</div>
        </div>
      </main>
      <div className="hidden w-[340px] shrink-0 xl:block">
        <ActivityFeed />
      </div>
    </div>
  );
}
