const approvals = [
  {
    title: "Q3 budget forecast",
    meta: "Finance Agent · $184K allocation change",
  },
  {
    title: "Enterprise renewal — Stratus",
    meta: "Sales Agent · 12% discount requested",
  },
];

export function PendingApprovals() {
  return (
    <section className="panel flex flex-col p-5">
      <h2 className="font-display text-sm font-semibold text-foreground">
        Pending Approvals
      </h2>
      <p className="mt-1 text-xs text-muted-foreground">
        Items requiring human review
      </p>
      <ul className="mt-4 flex-1 space-y-3">
        {approvals.map((item) => (
          <li
            key={item.title}
            className="rounded-lg border border-hairline bg-surface-sunken p-3"
          >
            <div className="text-[13px] font-medium text-foreground">{item.title}</div>
            <div className="mt-0.5 text-[11px] text-muted-foreground">{item.meta}</div>
            <div className="mt-3 flex gap-2">
              <button className="rounded-md bg-primary px-2.5 py-1.5 text-[11px] font-semibold text-primary-foreground transition-opacity hover:opacity-90">
                Approve
              </button>
              <button className="rounded-md border border-hairline px-2.5 py-1.5 text-[11px] font-semibold text-muted-foreground transition-colors hover:border-destructive/40 hover:text-destructive">
                Reject
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}