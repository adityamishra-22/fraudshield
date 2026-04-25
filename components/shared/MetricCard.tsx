"use client";

interface Props {
  label: string;
  value: string;
  sub?: string;
  subColor?: string;
  valueColor?: string;
}

export default function MetricCard({
  label,
  value,
  sub,
  subColor,
  valueColor,
}: Props) {
  return (
    <div
      className="flex flex-col rounded-xl border p-4"
      style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
    >
      <span
        className="mb-2 text-[11px] font-semibold uppercase tracking-wide"
        style={{ color: "var(--text-muted)" }}
      >
        {label}
      </span>
      <span
        className="text-xl font-bold leading-tight tracking-tight sm:text-2xl"
        style={{ color: valueColor ?? "var(--text)" }}
      >
        {value}
      </span>
      {sub && (
        <span
          className="mt-1 text-xs font-medium"
          style={{ color: subColor ?? "var(--text-muted)" }}
        >
          {sub}
        </span>
      )}
    </div>
  );
}
