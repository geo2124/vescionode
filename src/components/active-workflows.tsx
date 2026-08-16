import { Bot, Briefcase, LineChart, ShieldCheck } from "lucide-react";

const workflows = [
  { task: "Enrich inbound leads", agent: "Research Agent", icon: Bot, status: "Running" },
  { task: "Draft renewal outreach", agent: "Sales Agent", icon: Briefcase, status: "Running" },
  { task: "Reconcile Q3 ledger", agent: "Finance Agent", icon: LineChart, status: "Pending" },
  { task: "Vendor compliance scan", agent: "Compliance Agent", icon: ShieldCheck, status: "Pending" },
];

const statusStyles: Record<string, string> = {
  Running: "border-positive/30 bg-positive/10 text-positive",
  Pending: "border-warning/30 bg-warning/10 text-warning",
};

export function ActiveWorkflows() {
  return (
    <section className="panel flex flex-col p-5">
      <h2 className="font-display text-sm font-semibold text-foreground">
        Active Workflows
      </h2>
      <p className="mt-1 text-xs text-muted-foreground">
        Tasks currently executing across the workforce
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-hairline text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              <th className="pb-2 font-semibold">Task</th>
              <th className="pb-2 font-semibold">Assigned Agent</th>
              <th className="pb-2 text-right font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {workflows.map((row) => (
              <tr key={row.task} className="border-b border-hairline/60 last:border-0">
                <td className="py-3 pr-3 text-[13px] font-medium text-foreground">
                  {row.task}
                </td>
                <td className="py-3 pr-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <row.icon className="h-3 w-3" />
                    </span>
                    <span className="text-xs text-muted-foreground">{row.agent}</span>
                  </div>
                </td>
                <td className="py-3 text-right">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${statusStyles[row.status]}`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}