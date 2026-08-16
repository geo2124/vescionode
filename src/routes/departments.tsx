import { createFileRoute } from "@tanstack/react-router";

import { DashboardShell } from "@/components/dashboard-shell";

export const Route = createFileRoute("/departments")({
  head: () => ({
    meta: [
      { title: "Departments — Vescio Node" },
      { name: "description", content: "Organizational structure, ownership and resource allocation across the node." },
      { property: "og:title", content: "Departments — Vescio Node" },
      { property: "og:description", content: "Organizational structure, ownership and resource allocation across the node." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <DashboardShell eyebrow="Structure" title="Departments" description="Organizational structure, ownership and resource allocation across the node.">
      <div className="panel flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-sm font-semibold text-primary">
          VN
        </div>
        <h2 className="mt-4 font-display text-base font-semibold text-foreground">
          Department configuration is being provisioned
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
