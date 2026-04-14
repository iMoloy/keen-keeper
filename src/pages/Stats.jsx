import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import { useApp } from "../context/AppContext";

const COLORS = ["#7c3aed", "#1e3d1a", "#22c55e"];

export default function Stats() {
  const { timeline } = useApp();

  const counts = { Text: 0, Call: 0, Video: 0 };
  timeline.forEach((t) => {
    if (counts[t.type] !== undefined) counts[t.type]++;
  });

  const total = counts.Text + counts.Call + counts.Video;

  const chartData = [
    { name: "Text", value: counts.Text },
    { name: "Call", value: counts.Call },
    { name: "Video", value: counts.Video },
  ].filter((d) => d.value > 0);

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
        Friendship Analytics
      </h1>

      <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center">
        <h2 className="text-sm font-semibold text-gray-700 mb-6 self-start">
          By Interaction Type
        </h2>

        {total === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <i className="fa-solid fa-chart-pie text-gray-400 text-2xl"></i>
            </div>
            <h3 className="text-base font-semibold text-gray-700 mb-1">
              No data yet
            </h3>
            <p className="text-sm text-gray-400 max-w-xs">
              Log a call, text, or video from a friend's page to see your
              interaction stats here.
            </p>
          </div>
        ) : (
          <PieChart width={400} height={350}>
            <Pie
              data={chartData}
              cx={200}
              cy={160}
              innerRadius={80}
              outerRadius={130}
              paddingAngle={4}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => [value, name]}
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                fontSize: "12px",
              }}
            />
            <Legend
              iconType="circle"
              iconSize={8}
              formatter={(value) => (
                <span style={{ fontSize: "13px", color: "#4b5563" }}>
                  {value}
                </span>
              )}
            />
          </PieChart>
        )}
      </div>
    </main>
  );
}
