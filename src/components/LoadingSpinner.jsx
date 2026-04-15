import React from "react";

function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col items-center gap-3 animate-pulse">
      <div className="w-16 h-16 rounded-full bg-gray-200"></div>
      <div className="h-3 w-24 bg-gray-200 rounded-full"></div>
      <div className="h-2.5 w-16 bg-gray-100 rounded-full"></div>
      <div className="h-5 w-20 bg-gray-200 rounded-full"></div>
    </div>
  );
}

export default function LoadingSpinner() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
