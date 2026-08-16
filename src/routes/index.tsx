import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { AgentRoster } from "@/components/agent-roster";
import { DashboardShell } from "@/components/dashboard-shell";
import { MetricCards } from "@/components/metric-cards";
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

const priorities = [
  { title: "Q3 budget forecast", meta: "Finance Agent · awaiting approval" },
  { title: "Enterprise renewal — Stratus", meta: "Sales Agent · draft ready" },
  { title: "Vendor compliance review", meta: "Compliance Agent · 2 flags" },
];

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
          <button className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90">
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
            <ThroughputPanel />
          </div>
          <section className="panel flex flex-col p-5">
            <h2 className="font-display text-sm font-semibold text-foreground">
              Priority Queue
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Items requiring an operator decision
            </p>
            <ul className="mt-4 flex-1 space-y-2.5">
              {priorities.map((item) => (
                <li
                  key={item.title}
                  className="group flex items-start justify-between gap-3 rounded-lg border border-hairline bg-surface-sunken p-3 transition-colors hover:border-primary/40"
                >
                  <div className="min-w-0">
                    <div className="truncate text-[13px] font-medium text-foreground">
                      {item.title}
                    </div>
                    <div className="mt-0.5 truncate text-[11px] text-muted-foreground">
                      {item.meta}
                    </div>
                  </div>
                  <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </li>
              ))}
            </ul>
            <button className="mt-4 rounded-lg border border-hairline py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
              Review all approvals
            </button>
          </section>
        </div>

        <AgentRoster />
      </div>
    </DashboardShell>
  );
}
