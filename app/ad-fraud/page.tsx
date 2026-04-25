"use client";

import MetricCard from "@/components/shared/MetricCard";
import FraudFilters from "@/components/fraud/FraudFilters";
import {
  FraudTrendChart,
  FraudTypeChart,
  FraudSourcePie,
  FraudHotspotMap,
} from "@/components/fraud/FraudCharts";
import FraudIncidentsTable from "@/components/fraud/FraudIncidentsTable";

export default function AdFraudPage() {
  return (
    <div
      className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6"
      suppressHydrationWarning
    >
      <h1
        className="text-lg font-bold tracking-tight sm:text-xl"
        style={{ color: "var(--text)" }}
      >
        Ad Fraud Detection Dashboard
      </h1>
      <p
        className="mb-5 mt-1 text-[13px]"
        style={{ color: "var(--text-muted)" }}
      >
        Oct 1 – Oct 25, 2024 · Real-time monitoring
      </p>

      <div className="flex items-start gap-5">
        <div className="hidden lg:flex">
          <FraudFilters />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            <MetricCard
              label="Overall Fraud Rate"
              value="8.4%"
              valueColor="var(--red)"
              sub="▼ -0.5%"
              subColor="var(--green)"
            />
            <MetricCard label="Total Traffic" value="1,245,678" sub="clicks" />
            <MetricCard
              label="Valid Traffic"
              value="1,141,010"
              valueColor="var(--green)"
              sub="91.6% of total"
              subColor="var(--green)"
            />
            <MetricCard
              label="Invalid Traffic (IVT)"
              value="104,668"
              sub="clicks"
            />
            <MetricCard
              label="Revenue Saved"
              value="$3,240"
              valueColor="var(--green)"
              sub="from blocked fraud"
              subColor="var(--green)"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FraudTrendChart />
            <FraudTypeChart />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_1.6fr]">
            <FraudSourcePie />
            <FraudHotspotMap />
          </div>

          <FraudIncidentsTable />
        </div>
      </div>
    </div>
  );
}
