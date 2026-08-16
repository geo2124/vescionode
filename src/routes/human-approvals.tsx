import { createFileRoute } from "@tanstack/react-router";

import { DashboardShell } from "@/components/dashboard-shell";

export const Route = createFileRoute("/human-approvals")({
  head: () => ({
    meta: [
      { title: "Human Approvals — Vescio Node" },
      {
        name: "description",
        content: "Review and approve AI-driven decisions.",
      },
    ],
  }),
  component: HumanApprovals,
});

function HumanApprovals() {
  return (
    <DashboardShell>
      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="border-b border-slate-800 px-6 py-4">
          <h1 className="text-lg font-semibold text-slate-100">
            Human Approvals
          </h1>
          <p className="text-xs text-slate-500">
            Pending decisions requiring human oversight
          </p>
        </div>
        <div className="flex-1 overflow-auto p-6">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-lg border border-slate-800 bg-slate-900 p-8">
              <p className="text-sm text-slate-400">
                No approvals pending. The human approval queue is empty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
