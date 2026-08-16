const bars = [
  { day: "Mon", ai: 62, human: 18 },
  { day: "Tue", ai: 71, human: 22 },
  { day: "Wed", ai: 58, human: 16 },
  { day: "Thu", ai: 84, human: 24 },
  { day: "Fri", ai: 92, human: 20 },
  { day: "Sat", ai: 47, human: 9 },
  { day: "Sun", ai: 39, human: 7 },
];

export function ThroughputPanel() {
  const max = Math.max(...bars.map((b) => b.ai + b.human));

  return (
    <section className="panel p-5">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="font-display text-sm font-semibold text-foreground">
            Execution Throughput
          </h2>
          <p className="mt-1 text-xs text-muted-foreground">
            Tasks executed per day, last 7 days
          </p>
        </div>
        <div className="flex items-center gap-4 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-sm bg-primary" /> Autonomous
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-sm bg-border" /> Human-reviewed
          </span>
        </div>
      </div>

      <div className="mt-7 flex h-44 items-end gap-3">
        {bars.map((bar) => (
          <div key={bar.day} className="flex flex-1 flex-col items-center gap-2">
            <div className="flex w-full flex-1 flex-col justify-end gap-1">
              <div
                className="w-full rounded-t-sm bg-border"
                style={{ height: `${(bar.human / max) * 100}%` }}
              />
              <div
                className="w-full rounded-b-sm bg-primary/80 transition-colors hover:bg-primary"
                style={{ height: `${(bar.ai / max) * 100}%` }}
              />
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              {bar.day}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
