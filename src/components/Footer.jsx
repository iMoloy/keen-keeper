import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#2D4A1E] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-4">
          <h2 className="text-4xl font-extrabold tracking-tight text-white">
            <span>Keen</span>
            <span className="font-extrabold">Keeper</span>
          </h2>
          <p className="text-gray-300 mt-2 text-sm max-w-md mx-auto">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>

        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-gray-300 mb-3">
            Social Links
          </p>
          <div className="flex justify-center gap-3">
            <a
              href="#"
              className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <i className="fa-brands fa-instagram text-black text-sm"></i>
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <i className="fa-brands fa-facebook text-black text-sm"></i>
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <i className="fa-brands fa-x-twitter text-black text-sm"></i>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
