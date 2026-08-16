import { createFileRoute } from "@tanstack/react-router";

import { CommandBar } from "@/components/command-bar";
import { DashboardShell } from "@/components/dashboard-shell";
import { MetricCards } from "@/components/metric-cards";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Command Center — Vescio Node" },
      {
        name: "description",
        content: "Command Center dashboard for Vescio Node.",
      },
      { property: "og:title", content: "Command Center — Vescio Node" },
      {
        property: "og:description",
        content: "Command Center dashboard for Vescio Node.",
      },
    ],
  }),
  component: CommandCenter,
});

function CommandCenter() {
  return (
    <DashboardShell>
      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="border-b border-slate-800 px-6 py-4">
          <h1 className="text-lg font-semibold text-slate-100">Command Center</h1>
          <p className="text-xs text-slate-500">
            Unified operations overview for Acme Corp
          </p>
        </div>
        <div className="flex-1 overflow-auto p-6">
          <div className="mx-auto max-w-6xl space-y-6">
            <CommandBar />
            <MetricCards />
            <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-sm font-semibold text-slate-200">
                Operational Summary
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                All AI agents and human workflows are operating within normal
                parameters. No critical approvals pending.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
