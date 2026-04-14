import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";

const typeConfig = {
  Call: { img: callIcon, bg: "bg-gray-100" },
  Text: { img: textIcon, bg: "bg-gray-100" },
  Video: { img: videoIcon, bg: "bg-gray-100" },
  Meetup: {
    img: null,
    bg: "bg-yellow-50",
    icon: "fa-handshake",
    color: "text-yellow-600",
  },
};

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function Timeline() {
  const { timeline } = useApp();
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Call", "Text", "Video"];

  const filtered =
    filter === "All" ? timeline : timeline.filter((t) => t.type === filter);

  const sorted = [...filtered].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Timeline</h1>

      <div className="mb-6">
        <div className="relative inline-block w-56">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2.5 pr-8 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2D5A1B] cursor-pointer"
          >
            <option value="All">Filter timeline</option>
            {filters.slice(1).map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <i className="fa-solid fa-chevron-down text-gray-400 text-xs"></i>
          </div>
        </div>
      </div>

      {sorted.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <i className="fa-solid fa-clock-rotate-left text-gray-400 text-2xl"></i>
          </div>
          <h3 className="text-base font-semibold text-gray-700 mb-1">
            No interactions yet
          </h3>
          <p className="text-sm text-gray-400 max-w-xs">
            {filter === "All"
              ? "Go to a friend's page and use Quick Check-In to log a call, text, or video."
              : `No ${filter} interactions logged yet.`}
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-2 max-w-3xl">
          {sorted.map((entry) => {
            const config = typeConfig[entry.type] || typeConfig["Call"];
            return (
              <div
                key={entry.id}
                className="bg-white border border-gray-100 rounded-xl px-5 py-4 flex items-center gap-4 hover:shadow-sm transition-shadow"
              >
                <div
                  className={`w-10 h-10 rounded-full ${config.bg} flex items-center justify-center flex-shrink-0`}
                >
                  {config.img ? (
                    <img
                      src={config.img}
                      alt={entry.type}
                      className="w-5 h-5 object-contain"
                    />
                  ) : (
                    <i
                      className={`fa-solid ${config.icon} ${config.color} text-sm`}
                    ></i>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-800">
                    <span className="font-bold">{entry.type}</span>
                    <span className="text-gray-500">
                      {" "}
                      with {entry.friendName}
                    </span>
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {formatDate(entry.date)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
