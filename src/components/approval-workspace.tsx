import { useState } from "react";
import { Clock, FileText, Mail, Send, User } from "lucide-react";

export interface ApprovalItem {
  id: string;
  agent: string;
  action: string;
  target: string;
  targetDetail: string;
  timestamp: string;
  campaign: string;
  draft: string;
}

export const approvals: ApprovalItem[] = [
  {
    id: "1",
    agent: "Outreach Copywriter",
    action: "Drafted Cold Email",
    target: "Acme Corp",
    targetDetail: "Dubai logistics lead",
    timestamp: "2 hours ago",
    campaign: "Q3 Dubai Logistics Lead Gen",
    draft: `Subject: Streamlining Dubai-bound logistics for Acme Corp

Hi Sarah,

I noticed Acme Corp is expanding its Gulf operations, and wanted to reach out. Vescio Node helps logistics teams like yours reduce freight cost variance by 23% and automate customs documentation.

Worth a brief conversation? I can share how a similar Dubai-based operator cut their lead time by 31%.

Best,
Vescio Node AI Workforce`,
  },
  {
    id: "2",
    agent: "Pricing Analyst",
    action: "Proposed Discount",
    target: "Stratus Ltd",
    targetDetail: "Enterprise renewal",
    timestamp: "4 hours ago",
    campaign: "Stratus Renewal — Q3",
    draft: `Subject: Proposed renewal terms for Stratus Ltd

Hi Mark,

Based on your current usage and expansion plan, I have prepared a renewal proposal with an 8% annual discount and a 30-day implementation credit.

Annual platform fee: $184,000
Applied discount: $14,720
Net renewal: $169,280

Please let me know if you would like to review the full terms.

Best,
Vescio Node Finance`,
  },
  {
    id: "3",
    agent: "Campaign Strategist",
    action: "Ad Copy Variant",
    target: "Northwind Group",
    targetDetail: "LinkedIn sponsored campaign",
    timestamp: "5 hours ago",
    campaign: "Northwind ABM — Q3",
    draft: `Headline: Eliminate the logistics blind spot
Body: Your supply chain is too complex to manage in spreadsheets. Vescio Node gives your ops team a real-time operating picture, from inventory to freight.
CTA: See the platform in action

Variant B (more direct): Reduce freight variance by 23% in 90 days.`,
  },
];

interface ApprovalQueueProps {
  selectedId: string;
  onSelect: (id: string) => void;
}

export function ApprovalQueue({ selectedId, onSelect }: ApprovalQueueProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="font-display text-sm font-semibold text-foreground">Approval Queue</h2>
          <p className="mt-0.5 text-xs text-muted-foreground">3 items awaiting human review</p>
        </div>
        <span className="rounded-full border border-warning/30 bg-warning/10 px-2 py-0.5 text-[10px] font-semibold text-warning">
          3 pending
        </span>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto pr-1">
        {approvals.map((item) => {
          const isSelected = item.id === selectedId;
          return (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={`w-full rounded-xl border p-4 text-left transition-all ${
                isSelected
                  ? "border-primary/50 bg-primary/[0.06] shadow-[0_0_0_1px_var(--color-primary)_inset]"
                  : "border-hairline bg-surface hover:border-primary/30 hover:bg-surface-elevated"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <User className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <div className="truncate text-[13px] font-semibold text-foreground">
                      {item.agent}
                    </div>
                    <div className="truncate text-[11px] text-muted-foreground">
                      {item.action}
                    </div>
                  </div>
                </div>
                <span className="flex shrink-0 items-center gap-1 text-[10px] text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {item.timestamp}
                </span>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-surface-sunken text-muted-foreground">
                  <FileText className="h-3 w-3" />
                </span>
                <span className="min-w-0 truncate text-xs text-foreground">{item.target}</span>
                <span className="shrink-0 text-[10px] text-muted-foreground">· {item.targetDetail}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function ApprovalReview({ item }: { item: ApprovalItem }) {
  const [draft, setDraft] = useState(item.draft);

  useEffect(() => setDraft(item.draft), [item.draft, item.id]);

  return (
    <div className="flex h-full flex-col">
      <div className="mb-5">
        <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
          {item.campaign}
        </div>
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">
              {item.action}
            </h2>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {item.agent} · {item.target} · {item.targetDetail}
            </p>
          </div>
          <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-hairline bg-surface-sunken px-2.5 py-1 text-[10px] font-medium text-muted-foreground">
            <Clock className="h-3 w-3" />
            {item.timestamp}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col overflow-hidden rounded-xl border border-hairline bg-surface">
        <div className="flex items-center justify-between border-b border-hairline px-4 py-2.5">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Mail className="h-3.5 w-3.5" />
            AI-generated draft
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-destructive/70" />
            <div className="h-2 w-2 rounded-full bg-warning/70" />
            <div className="h-2 w-2 rounded-full bg-positive/70" />
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          <div className="select-none border-r border-hairline bg-surface-sunken py-4 pr-3 pl-3 text-right text-[11px] font-mono leading-6 text-muted-foreground/60">
            {item.draft.split("\n").map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <textarea
            key={item.id}
            defaultValue={item.draft}
            className="flex-1 resize-none bg-surface p-4 text-[13px] leading-6 text-foreground outline-none placeholder:text-muted-foreground"
            spellCheck={false}
          />
        </div>

        <div className="flex items-center justify-between border-t border-hairline bg-surface-sunken px-4 py-3">
          <span className="text-[11px] text-muted-foreground">
            This content will be sent once approved.
          </span>
          <div className="flex items-center gap-2">
            <button className="rounded-lg border border-hairline px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:border-destructive/40 hover:text-destructive">
              Reject
            </button>
            <button className="rounded-lg border border-hairline bg-surface px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-surface-elevated">
              Edit Draft
            </button>
            <button className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90">
              <Send className="h-3.5 w-3.5" />
              Approve & Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
