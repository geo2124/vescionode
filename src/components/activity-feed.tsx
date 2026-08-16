import {
  CheckCircle2,
  FileText,
  Mail,
  RefreshCw,
  Search,
  ShieldCheck,
  UserCheck,
  Workflow,
} from "lucide-react";

import { ScrollArea } from "@/components/ui/scroll-area";

const activities = [
  { id: 1, icon: Search, actor: "Research Agent", text: "qualified", target: "Acme Corp", time: "09:12", tone: "primary" },
  { id: 2, icon: Mail, actor: "Sales Agent", text: "drafted outreach", target: "Follow-up sequence", time: "09:04", tone: "primary" },
  { id: 3, icon: CheckCircle2, actor: "Ops Agent", text: "completed task", target: "Contract review #4821", time: "02:38", tone: "positive" },
  { id: 4, icon: UserCheck, actor: "System", text: "requested approval", target: "Q3 budget forecast", time: "04:11", tone: "warning" },
  { id: 5, icon: FileText, actor: "Finance Agent", text: "reconciled report", target: "Monthly close", time: "06:25", tone: "primary" },
  { id: 6, icon: ShieldCheck, actor: "Compliance Agent", text: "passed scan", target: "Data retention policy", time: "08:02", tone: "positive" },
  { id: 7, icon: RefreshCw, actor: "Integration", text: "synced pipeline", target: "CRM connector", time: "12:47", tone: "primary" },
  { id: 8, icon: Workflow, actor: "Automation", text: "triggered workflow", target: "Client onboarding", time: "15:30", tone: "primary" },
  { id: 9, icon: Mail, actor: "Sales Agent", text: "drafted email", target: "Renewal outreach", time: "18:09", tone: "primary" },
  { id: 10, icon: Search, actor: "Research Agent", text: "enriched account", target: "Stratus Ventures", time: "21:55", tone: "primary" },
];

const toneMap: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  positive: "bg-positive/12 text-positive",
  warning: "bg-warning/15 text-warning",
};

export function ActivityFeed() {
  return (
    <div className="flex h-full flex-col border-l border-hairline bg-surface">
      <div className="flex items-center justify-between border-b border-hairline px-5 py-[18px]">
        <div>
          <h2 className="font-display text-sm font-semibold text-foreground">
            Live Activity Log
          </h2>
          <p className="text-[11px] text-muted-foreground">System event stream</p>
        </div>
        <span className="flex items-center gap-1.5 rounded-full border border-hairline px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-positive">
          <span className="h-1.5 w-1.5 rounded-full bg-positive" />
          Live
        </span>
      </div>
      <ScrollArea className="flex-1">
        <ol className="relative px-5 py-4">
          <span className="absolute bottom-6 left-[31px] top-8 w-px bg-hairline" />
          {activities.map((activity) => (
            <li key={activity.id} className="relative flex gap-3 py-2.5">
              <span
                className={`z-10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md ring-4 ring-surface ${toneMap[activity.tone]}`}
              >
                <activity.icon className="h-3 w-3" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[13px] leading-snug text-foreground">
                  <span className="font-semibold">{activity.actor}</span>{" "}
                  <span className="text-muted-foreground">{activity.text}</span>
                </p>
                <p className="truncate text-xs text-muted-foreground">{activity.target}</p>
              </div>
              <span className="text-numeric shrink-0 text-[10px] text-muted-foreground/70">
                {activity.time}
              </span>
            </li>
          ))}
        </ol>
      </ScrollArea>
      <div className="border-t border-hairline px-5 py-3">
        <button className="w-full rounded-lg border border-hairline py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
          Open full audit log
        </button>
      </div>
    </div>
  );
}
