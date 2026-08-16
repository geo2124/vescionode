import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

import { ActiveWorkflows } from "@/components/active-workflows";
import { AgentRoster } from "@/components/agent-roster";
import { DashboardShell } from "@/components/dashboard-shell";
import { MetricCards } from "@/components/metric-cards";
import { PendingApprovals } from "@/components/pending-approvals";
import { ThroughputPanel } from "@/components/throughput-panel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Command Center — Vescio Node" },
      {
        name: "description",
        content:
          "Unified command center for Vescio Node: revenue, pipeline, AI workforce and live operations in one view.",
      },
      { property: "og:title", content: "Command Center — Vescio Node" },
      {
        property: "og:description",
        content:
          "Unified command center for Vescio Node: revenue, pipeline, AI workforce and live operations in one view.",
      },
    ],
  }),
  component: CommandCenter,
});

function CommandCenter() {
  return (
    <DashboardShell
      eyebrow="Acme Corp · Production"
      title="Command Center"
      description="Real-time operating picture across every department, agent and revenue motion."
      actions={
        <>
          <button className="rounded-lg border border-hairline px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
            Last 30 days
          </button>
          <button className="inline-flex items-center gap-1.5 rounded-lg border border-primary/25 bg-primary/10 px-3 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary/15">
            <Sparkles className="h-3.5 w-3.5" />
            Run Briefing
          </button>
        </>
      }
    >
      <div className="space-y-5">
        <MetricCards />

        <div className="grid gap-5 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ActiveWorkflows />
          </div>
          <PendingApprovals />
        </div>

        <ThroughputPanel />
        <AgentRoster />
      </div>
    </DashboardShell>
  );
}
