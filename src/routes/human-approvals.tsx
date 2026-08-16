import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { DashboardShell } from "@/components/dashboard-shell";
import { ApprovalQueue, ApprovalReview, approvals } from "@/components/approval-workspace";

export const Route = createFileRoute("/human-approvals")({
  head: () => ({
    meta: [
      { title: "Human Approvals — Vescio Node" },
      { name: "description", content: "Decisions escalated by agents that require an accountable human sign-off." },
      { property: "og:title", content: "Human Approvals — Vescio Node" },
      { property: "og:description", content: "Decisions escalated by agents that require an accountable human sign-off." },
    ],
  }),
  component: Page,
});

function Page() {
  const [selectedId, setSelectedId] = useState(approvals[0].id);
  const selectedItem = approvals.find((a) => a.id === selectedId);
  const item = selectedItem ?? approvals[0];

  return (
    <DashboardShell
      eyebrow="Govern"
      title="Human Approvals"
      description="Decisions escalated by agents that require an accountable human sign-off."
    >
      <div className="grid h-[calc(100vh-220px)] min-h-[540px] gap-5 lg:grid-cols-[360px_1fr] xl:grid-cols-[380px_1fr]">
        <div className="panel overflow-hidden p-4">
          <ApprovalQueue selectedId={selectedId} onSelect={setSelectedId} />
        </div>
        <div className="panel overflow-hidden p-5">
          <ApprovalReview item={selectedItem} />
        </div>
      </div>
    </DashboardShell>
  );
}
