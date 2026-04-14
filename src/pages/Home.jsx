import React from "react";
import { useApp } from "../context/AppContext";
import FriendCard from "../components/FriendCard";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Home() {
  const { friends, loading, timeline } = useApp();

  const totalFriends = friends.length;
  const onTrack = friends.filter((f) => f.status === "on-track").length;
  const needAttention = friends.filter(
    (f) => f.status === "overdue" || f.status === "almost due",
  ).length;

  const now = new Date();
  const thisMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  const interactionsThisMonth = timeline.filter(
    (t) => t.date && t.date.startsWith(thisMonth),
  ).length;

  const summaryCards = [
    { label: "Total Friends", value: totalFriends },
    { label: "On Track", value: onTrack },
    { label: "Need Attention", value: needAttention },
    { label: "Interactions This Month", value: interactionsThisMonth },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-500 mb-6 max-w-lg mx-auto text-sm sm:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="inline-flex items-center gap-2 bg-[#2D5A1B] text-white px-5 py-2.5 rounded-sm font-semibold text-sm hover:bg-[#1e3a0f] transition-colors">
          <i className="fa-solid fa-plus"></i>
          Add a Friend
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {summaryCards.map(({ label, value }) => (
          <div
            key={label}
            className="bg-white rounded-xl border border-gray-200 p-5 text-center"
          >
            <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
            <p className="text-sm text-gray-500">{label}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-5">Your Friends</h2>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {friends.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
