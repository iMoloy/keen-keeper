import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";

const statusConfig = {
  overdue: { label: "Overdue", bg: "bg-red-500", text: "text-white" },
  "almost due": {
    label: "Almost Due",
    bg: "bg-yellow-400",
    text: "text-gray-900",
  },
  "on-track": { label: "On-Track", bg: "bg-[#2D5A1B]", text: "text-white" },
};

const iconMap = {
  Call: callIcon,
  Text: textIcon,
  Video: videoIcon,
  Meetup: null,
};

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function FriendDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { friends, timeline, addTimelineEntry, showToast } = useApp();

  const friend = friends.find((f) => f.id === parseInt(id));

  if (!friend) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <p className="text-gray-500 text-lg">Friend not found.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 text-[#2D5A1B] underline"
        >
          Go back home
        </button>
      </div>
    );
  }

  const status = statusConfig[friend.status] || statusConfig["on-track"];

  const recentInteractions = timeline
    .filter((t) => t.friendName === friend.name)
    .slice(0, 4);

  const handleCheckIn = (type) => {
    addTimelineEntry(type, friend.name);
    showToast(`${type} with ${friend.name} successful!`);
  };

  const checkInButtons = [
    { type: "Call", img: callIcon },
    { type: "Text", img: textIcon },
    { type: "Video", img: videoIcon },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-20 h-20 rounded-full object-cover mx-auto mb-3 ring-2 ring-gray-100"
            />
            <h2 className="font-bold text-gray-900 text-lg mb-2">
              {friend.name}
            </h2>
            <div className="flex flex-wrap justify-center gap-2 mb-3">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${status.bg} ${status.text}`}
              >
                {status.label}
              </span>
              {friend.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-500 italic mb-1">
              "
              {friend.bio.length > 70
                ? friend.bio.slice(0, 70) + "…"
                : friend.bio}
              "
            </p>
            <p className="text-xs text-gray-400 mt-1">Preferred: email</p>
          </div>

          <button className="bg-white rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
            <i className="fa-solid fa-bell text-gray-500"></i>
            Snooze 2 Weeks
          </button>
          <button className="bg-white rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
            <i className="fa-solid fa-box-archive text-gray-500"></i>
            Archive
          </button>
          <button className="bg-white rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50 transition-colors flex items-center justify-center gap-2">
            <i className="fa-solid fa-trash text-red-400"></i>
            Delete
          </button>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
              <p className="text-3xl font-bold text-gray-900 mb-1">
                {friend.days_since_contact}
              </p>
              <p className="text-xs text-gray-500">Days Since Contact</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
              <p className="text-3xl font-bold text-gray-900 mb-1">
                {friend.goal}
              </p>
              <p className="text-xs text-gray-500">Goal (Days)</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
              <p className="text-lg font-bold text-gray-900 mb-1">
                {formatDate(friend.next_due_date)}
              </p>
              <p className="text-xs text-gray-500">Next Due</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold text-gray-900 text-sm">
                Relationship Goal
              </h3>
              <button className="px-3 py-1 border border-gray-200 rounded text-xs text-gray-600 hover:bg-gray-50 transition-colors">
                Edit
              </button>
            </div>
            <p className="text-sm text-gray-600">
              Connect every <strong>{friend.goal} days</strong>
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900 text-sm mb-3">
              Quick Check-In
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {checkInButtons.map(({ type, img }) => (
                <button
                  key={type}
                  onClick={() => handleCheckIn(type)}
                  className="flex flex-col items-center gap-2 py-4 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-[#2D5A1B] transition-all"
                >
                  <img
                    src={img}
                    alt={type}
                    className="w-7 h-7 object-contain"
                  />
                  <span className="text-xs font-medium text-gray-700">
                    {type}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900 text-sm">
                Recent Interactions
              </h3>
              <button
                onClick={() => navigate("/timeline")}
                className="text-xs text-gray-500 hover:text-[#2D5A1B] flex items-center gap-1 transition-colors"
              >
                <i className="fa-solid fa-clock-rotate-left text-xs"></i>
                Full History
              </button>
            </div>

            {recentInteractions.length === 0 ? (
              <div className="text-center py-6">
                <i className="fa-solid fa-clock-rotate-left text-gray-300 text-2xl mb-2 block"></i>
                <p className="text-xs text-gray-400">No interactions yet.</p>
                <p className="text-xs text-gray-400">
                  Use Quick Check-In above to log one!
                </p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {recentInteractions.map((entry) => {
                  const imgSrc = iconMap[entry.type];
                  return (
                    <div
                      key={entry.id}
                      className="flex items-center gap-3 py-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                        {imgSrc ? (
                          <img
                            src={imgSrc}
                            alt={entry.type}
                            className="w-4 h-4 object-contain"
                          />
                        ) : (
                          <i className="fa-solid fa-handshake text-gray-600 text-xs"></i>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800">
                          {entry.type}
                        </p>
                        {entry.notes && (
                          <p className="text-xs text-gray-400">{entry.notes}</p>
                        )}
                      </div>
                      <span className="text-xs text-gray-400 flex-shrink-0">
                        {formatDate(entry.date)}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
