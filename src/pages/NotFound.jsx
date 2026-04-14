import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center justify-center flex-1 px-4 py-20 text-center">
      <h1 className="text-8xl font-extrabold text-[#2D5A1B] mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Page not found</h2>
      <p className="text-gray-500 text-sm mb-8 max-w-xs">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="inline-flex items-center gap-2 bg-[#2D5A1B] text-white px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-[#1e3a0f] transition-colors"
      >
        <i className="fa-solid fa-house"></i>
        Go back home
      </button>
    </main>
  );
}
