import { createFileRoute } from "@tanstack/react-router";

import { DashboardShell } from "@/components/dashboard-shell";

export const Route = createFileRoute("/ai-workforce")({
  head: () => ({
    meta: [
      { title: "AI Workforce — Vescio Node" },
      {
        name: "description",
        content: "Manage your AI workforce and agents.",
      },
    ],
  }),
  component: AIWorkforce,
});

function AIWorkforce() {
  return (
    <DashboardShell>
      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="border-b border-slate-800 px-6 py-4">
          <h1 className="text-lg font-semibold text-slate-100">AI Workforce</h1>
          <p className="text-xs text-slate-500">
            Agent roster, performance, and task assignment
          </p>
        </div>
        <div className="flex-1 overflow-auto p-6">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-lg border border-slate-800 bg-slate-900 p-8">
              <p className="text-sm text-slate-400">
                AI workforce management is coming soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
