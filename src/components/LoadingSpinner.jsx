import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-[#f3f6f3] z-40 flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-[#2D5A1B] rounded-full spinner"></div>
    </div>
  );
}
