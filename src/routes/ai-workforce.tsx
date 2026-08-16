import { createFileRoute } from "@tanstack/react-router";

import { DashboardShell } from "@/components/dashboard-shell";

export const Route = createFileRoute("/ai-workforce")({
  head: () => ({
    meta: [
      { title: "AI Workforce — Vescio Node" },
      { name: "description", content: "Deploy, monitor and govern the autonomous agents running your business." },
      { property: "og:title", content: "AI Workforce — Vescio Node" },
      { property: "og:description", content: "Deploy, monitor and govern the autonomous agents running your business." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <DashboardShell eyebrow="Agents" title="AI Workforce" description="Deploy, monitor and govern the autonomous agents running your business.">
      <div className="panel flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-sm font-semibold text-primary">
          VN
        </div>
        <h2 className="mt-4 font-display text-base font-semibold text-foreground">
          Agent management is being provisioned
        </h2>
        <p className="mt-1.5 max-w-sm text-sm text-muted-foreground">
          This module is part of the next release wave. Your data and agents are already connected.
        </p>
        <button className="mt-5 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90">
          Request early access
        </button>
      </div>
    </DashboardShell>
  );
}
