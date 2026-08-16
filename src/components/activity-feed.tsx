import {
  CheckCircle2,
  FileText,
  Mail,
  MoreHorizontal,
  RefreshCw,
  Search,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const activities = [
  {
    id: 1,
    icon: Search,
    text: "Research Agent qualified lead",
    target: "Nexus Analytics",
    time: "Just now",
  },
  {
    id: 2,
    icon: Mail,
    text: "Sales Agent drafted email",
    target: "Prospect follow-up sequence",
    time: "1 min ago",
  },
  {
    id: 3,
    icon: CheckCircle2,
    text: "AI Task completed",
    target: "Contract review #4821",
    time: "2 min ago",
  },
  {
    id: 4,
    icon: UserCheck,
    text: "Human approval requested",
    target: "Q3 budget forecast",
    time: "4 min ago",
  },
  {
    id: 5,
    icon: FileText,
    text: "Finance Agent reconciled report",
    target: "Monthly close checklist",
    time: "6 min ago",
  },
  {
    id: 6,
    icon: ShieldCheck,
    text: "Compliance scan passed",
    target: "Data retention policy",
    time: "8 min ago",
  },
  {
    id: 7,
    icon: RefreshCw,
    text: "Pipeline sync completed",
    target: "CRM integration",
    time: "12 min ago",
  },
  {
    id: 8,
    icon: MoreHorizontal,
    text: "Workflow automation triggered",
    target: "New client onboarding",
    time: "15 min ago",
  },
  {
    id: 9,
    icon: Mail,
    text: "Sales Agent drafted email",
    target: "Renewal outreach",
    time: "18 min ago",
  },
  {
    id: 10,
    icon: Search,
    text: "Research Agent enriched account",
    target: "Stratus Ventures",
    time: "21 min ago",
  },
];

export function ActivityFeed() {
  return (
    <div className="flex h-full flex-col border-l border-slate-800 bg-slate-900">
      <div className="border-b border-slate-800 px-5 py-4">
        <h2 className="text-sm font-semibold text-slate-200">
          Live Activity Feed
        </h2>
        <p className="text-xs text-slate-500">Real-time system events</p>
      </div>
      <ScrollArea className="flex-1">
        <div className="px-4 py-3">
          {activities.map((activity, index) => (
            <div key={activity.id}>
              <div className="flex gap-3 py-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-slate-950">
                  <activity.icon className="h-3.5 w-3.5 text-emerald-500" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm leading-snug text-slate-300">
                    {activity.text}
                  </p>
                  <p className="text-xs text-slate-500">{activity.target}</p>
                  <p className="mt-1 text-[11px] font-medium text-slate-600">
                    {activity.time}
                  </p>
                </div>
              </div>
              {index < activities.length - 1 && (
                <Separator className="bg-slate-800/60" />
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
