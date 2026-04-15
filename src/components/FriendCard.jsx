import React from "react";
import { useNavigate } from "react-router-dom";

const statusConfig = {
  overdue: { label: "Overdue", bg: "bg-red-500", text: "text-white" },
  "almost due": {
    label: "Almost Due",
    bg: "bg-yellow-400",
    text: "text-gray-900",
  },
  "on-track": { label: "On-Track", bg: "bg-[#2D5A1B]", text: "text-white" },
};

export default function FriendCard({ friend }) {
  const navigate = useNavigate();
  const status = statusConfig[friend.status] || statusConfig["on-track"];

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col items-center text-center cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
    >
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-16 h-16 rounded-full object-cover mb-3 ring-2 ring-gray-100"
      />
      <h3 className="font-semibold text-gray-900 text-sm mb-1">
        {friend.name}
      </h3>
      <p className="text-xs text-gray-500 mb-2">
        {friend.days_since_contact}d ago
      </p>

      <div className="flex flex-wrap justify-center gap-1 mb-3">
        {friend.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-medium uppercase tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>

      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold ${status.bg} ${status.text}`}
      >
        {status.label}
      </span>
    </div>
  );
}
