"use client";

import React from "react";

interface NavbarProps {
  toggleSidebar: () => void;
  isDark: boolean;
  toggleDark: () => void;
}

export default function Navbar({
  toggleSidebar,
  isDark,
  toggleDark,
}: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#062A42] text-white shadow-md">
      <div className="h-20 max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
        <button
          id="menu-toggle-btn"
          className="hidden lg:flex hover:bg-white/10 p-2.5 rounded-xl transition-all duration-200 focus:outline-none min-w-[48px] min-h-[48px] items-center justify-center cursor-pointer"
          onClick={toggleSidebar}
          aria-label="Buka Menu"
        >
          <svg
            className="w-7 h-7"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <div className="text-2xl lg:text-3xl font-extrabold tracking-tight">
          ICA Course
        </div>

        <button
          id="theme-toggle-btn"
          className="hover:bg-white/10 p-2.5 rounded-xl transition-all duration-200 focus:outline-none min-w-[48px] min-h-[48px] flex items-center justify-center cursor-pointer"
          onClick={toggleDark}
          aria-label="Ubah Tema"
        >
          {isDark ? (
            /* Sun icon */
            <svg
              id="sun-icon"
              className="w-6 h-6 text-yellow-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z"
              />
            </svg>
          ) : (
            /* Moon icon */
            <svg
              id="moon-icon"
              className="w-6 h-6 text-sky-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
