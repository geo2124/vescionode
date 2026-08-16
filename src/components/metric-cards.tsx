import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const metrics = [
  {
    label: "Revenue",
    value: "$1.24M",
    change: "+12.5%",
    period: "vs last month",
  },
  {
    label: "Active Leads",
    value: "3,842",
    change: "+8.2%",
    period: "vs last month",
  },
  {
    label: "Pipeline Value",
    value: "$4.8M",
    change: "+4.1%",
    period: "vs last month",
  },
  {
    label: "AI Tasks Completed",
    value: "28,491",
    change: "+23.7%",
    period: "vs last month",
  },
];

export function MetricCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => (
        <Card
          key={metric.label}
          className="border-slate-800 bg-slate-900 shadow-sm"
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-slate-400">
              {metric.label}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold tracking-tight text-slate-50">
              {metric.value}
            </div>
            <div className="mt-1 flex items-center gap-1.5 text-xs">
              <span className="font-medium text-emerald-500">
                {metric.change}
              </span>
              <span className="text-slate-500">{metric.period}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
