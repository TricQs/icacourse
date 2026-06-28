"use client";

import React from "react";
import { FiHome, FiTarget, FiBarChart2, FiBookOpen, FiUsers, FiMessageSquare, FiInfo } from "react-icons/fi";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Sidebar Overlay */}
      <div
        id="sidebar-overlay"
        className={`fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={onClose}
      />

      {/* Sidebar Drawer */}
      <aside
        id="sidebar"
        className={`fixed top-0 left-0 h-dvh w-72 bg-[#062A42] text-white z-[70] shadow-2xl flex flex-col transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="text-3xl font-extrabold tracking-tight">
              ICA Course
            </div>
            <p className="text-sky-250 text-sm mt-1">
              Bimbingan Belajar Privat
            </p>
          </div>
          <button
            className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center text-white hover:text-red-400 transition-all duration-200 focus:outline-none cursor-pointer"
            onClick={onClose}
            aria-label="Tutup Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <nav className="flex-1 flex flex-col gap-1 p-6 overflow-y-auto">
          <a
            href="#home"
            className="px-5 py-4 rounded-2xl hover:bg-white/10 transition-all duration-200 flex items-center gap-3"
            onClick={onClose}
          >
            <FiHome className="text-xl" /> Home
          </a>
          <a
            href="#courses"
            className="px-5 py-4 rounded-2xl hover:bg-white/10 transition-all duration-200 flex items-center gap-3"
            onClick={onClose}
          >
            <FiTarget className="text-xl" /> Kenapa ICA
          </a>
          <a
            href="#stats"
            className="px-5 py-4 rounded-2xl hover:bg-white/10 transition-all duration-200 flex items-center gap-3"
            onClick={onClose}
          >
            <FiBarChart2 className="text-xl" /> Statistik
          </a>
          <a
            href="#programs"
            className="px-5 py-4 rounded-2xl hover:bg-white/10 transition-all duration-200 flex items-center gap-3"
            onClick={onClose}
          >
            <FiBookOpen className="text-xl" /> Program
          </a>
          <a
            href="#mentors"
            className="px-5 py-4 rounded-2xl hover:bg-white/10 transition-all duration-200 flex items-center gap-3"
            onClick={onClose}
          >
            <FiUsers className="text-xl" /> Mentor
          </a>
          <a
            href="#testimonials"
            className="px-5 py-4 rounded-2xl hover:bg-white/10 transition-all duration-200 flex items-center gap-3"
            onClick={onClose}
          >
            <FiMessageSquare className="text-xl" /> Testimonials
          </a>
          <a
            href="#tentang"
            className="px-5 py-4 rounded-2xl hover:bg-white/10 transition-all duration-200 flex items-center gap-3"
            onClick={onClose}
          >
            <FiInfo className="text-xl" /> Tentang ICA
          </a>
        </nav>

        <div
          className="p-6 border-t border-white/10"
          style={{ paddingBottom: 'calc(1.5rem + env(safe-area-inset-bottom))' }}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-sky hover:bg-sky-hover text-navy font-bold py-4 rounded-2xl text-center transition-all duration-200 shadow-md shadow-sky/20"
            href="https://wa.me/6281513092400"
          >
            Hubungi Kami
          </a>
        </div>
      </aside>
    </>
  );
}