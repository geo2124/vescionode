const agents = [
  { name: "Research Agent", dept: "Growth", load: 82, status: "Active", tasks: "1,204" },
  { name: "Sales Agent", dept: "Revenue", load: 67, status: "Active", tasks: "986" },
  { name: "Finance Agent", dept: "Operations", load: 41, status: "Idle", tasks: "512" },
  { name: "Compliance Agent", dept: "Legal", load: 55, status: "Review", tasks: "377" },
];

const statusStyles: Record<string, string> = {
  Active: "bg-positive/12 text-positive",
  Idle: "bg-muted text-muted-foreground",
  Review: "bg-warning/15 text-warning",
};

export function AgentRoster() {
  return (
    <section className="panel overflow-hidden">
      <div className="flex items-center justify-between border-b border-hairline px-5 py-4">
        <div>
          <h2 className="font-display text-sm font-semibold text-foreground">
            AI Workforce
          </h2>
          <p className="mt-1 text-xs text-muted-foreground">
            Deployed agents and current utilization
          </p>
        </div>
        <button className="rounded-md border border-hairline px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
          View all
        </button>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-hairline text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            <th className="px-5 py-2.5 font-semibold">Agent</th>
            <th className="hidden px-5 py-2.5 font-semibold sm:table-cell">Department</th>
            <th className="px-5 py-2.5 font-semibold">Load</th>
            <th className="hidden px-5 py-2.5 text-right font-semibold md:table-cell">Tasks</th>
            <th className="px-5 py-2.5 text-right font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent) => (
            <tr
              key={agent.name}
              className="border-b border-hairline/70 last:border-0 transition-colors hover:bg-accent/40"
            >
              <td className="px-5 py-3.5 text-sm font-medium text-foreground">{agent.name}</td>
              <td className="hidden px-5 py-3.5 text-sm text-muted-foreground sm:table-cell">
                {agent.dept}
              </td>
              <td className="px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-20 overflow-hidden rounded-full bg-border">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${agent.load}%` }} />
                  </div>
                  <span className="text-numeric text-xs text-muted-foreground">{agent.load}%</span>
                </div>
              </td>
              <td className="hidden px-5 py-3.5 text-right text-numeric text-xs text-muted-foreground md:table-cell">
                {agent.tasks}
              </td>
              <td className="px-5 py-3.5 text-right">
                <span
                  className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold ${statusStyles[agent.status]}`}
                >
                  {agent.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
