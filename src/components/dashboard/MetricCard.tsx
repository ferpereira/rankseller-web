type MetricCardProps = {
  title: string;
  value: string;
  description: string;
  icon?: string;
  highlight?: boolean;
};

export function MetricCard({
  title,
  value,
  description,
  icon = "📈",
  highlight = false,
}: MetricCardProps) {
  return (
    <div
      className={`rounded-3xl border p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
        highlight
          ? "border-slate-900 bg-slate-950 text-white"
          : "border-slate-200 bg-white text-slate-900"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p
            className={`text-sm ${
              highlight ? "text-slate-300" : "text-slate-500"
            }`}
          >
            {title}
          </p>

          <strong className="mt-3 block text-3xl font-bold tracking-tight">
            {value}
          </strong>
        </div>

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-2xl text-xl ${
            highlight ? "bg-white/10" : "bg-slate-100"
          }`}
        >
          {icon}
        </div>
      </div>

      <p
        className={`mt-4 text-sm leading-6 ${
          highlight ? "text-slate-300" : "text-slate-500"
        }`}
      >
        {description}
      </p>
    </div>
  );
}