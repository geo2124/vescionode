import { ArrowUpRight, Bot, Coins, Target, Users } from "lucide-react";

const metrics = [
  {
    label: "Revenue",
    value: "$1.24M",
    change: "+12.5%",
    period: "vs last month",
    icon: Coins,
    series: [18, 24, 21, 30, 28, 36, 34, 44, 48],
  },
  {
    label: "Active Leads",
    value: "3,842",
    change: "+8.2%",
    period: "vs last month",
    icon: Users,
    series: [22, 20, 26, 25, 31, 29, 36, 38, 42],
  },
  {
    label: "Pipeline Value",
    value: "$4.8M",
    change: "+4.1%",
    period: "vs last month",
    icon: Target,
    series: [30, 32, 29, 34, 33, 36, 35, 38, 40],
  },
  {
    label: "AI Tasks Completed",
    value: "28,491",
    change: "+23.7%",
    period: "vs last month",
    icon: Bot,
    series: [10, 14, 19, 18, 26, 30, 33, 41, 50],
  },
];

function Sparkline({ series }: { series: number[] }) {
  const max = Math.max(...series);
  const min = Math.min(...series);
  const points = series
    .map((v, i) => {
      const x = (i / (series.length - 1)) * 100;
      const y = 28 - ((v - min) / (max - min || 1)) * 24;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="h-8 w-full">
      <polyline
        points={points}
        fill="none"
        stroke="var(--primary)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function MetricCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-4">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="panel group relative overflow-hidden p-5 transition-colors hover:border-primary/30"
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {metric.label}
              </div>
              <div className="mt-3 text-numeric text-[26px] font-semibold leading-none text-foreground">
                {metric.value}
              </div>
            </div>
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <metric.icon className="h-4 w-4" />
            </span>
          </div>

          <div className="mt-4 -mx-1 opacity-80">
            <Sparkline series={metric.series} />
          </div>

          <div className="mt-3 flex items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-0.5 rounded-md bg-positive/12 px-1.5 py-0.5 font-semibold text-positive">
              <ArrowUpRight className="h-3 w-3" />
              {metric.change}
            </span>
            <span className="text-muted-foreground">{metric.period}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
