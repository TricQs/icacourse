"use client";

import React, { useState, useEffect } from "react";
import {
  FiHome,
  FiTarget,
  FiBarChart2,
  FiBookOpen,
  FiUsers,
  FiMessageSquare,
  FiInfo,
} from "react-icons/fi";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  isExpanded?: boolean;
  onToggle?: () => void;
}

const navItems = [
  { href: "#home", icon: FiHome, label: "Beranda" },
  { href: "#courses", icon: FiTarget, label: "Kenapa ICA" },
  { href: "#stats", icon: FiBarChart2, label: "Statistik" },
  { href: "#programs", icon: FiBookOpen, label: "Program" },
  { href: "#mentors", icon: FiUsers, label: "Mentor" },
  { href: "#testimonials", icon: FiMessageSquare, label: "Testimonials" },
  { href: "#tentang", icon: FiInfo, label: "Tentang ICA" },
];

export default function Sidebar({ isOpen, onClose, isExpanded, onToggle }: SidebarProps) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPos = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const targetId = href.slice(1);
    if (!targetId || targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
    onClose?.();
  };

  return (
    <>
      {/* MOBILE DRAWER — visible only on mobile */}
      <div className="lg:hidden">
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={onClose}
        />
        {/* Drawer */}
        <aside
          className={`fixed top-0 left-0 h-dvh w-72 bg-[#062A42] text-white z-[70] shadow-2xl flex flex-col transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div>
              <div className="text-3xl font-extrabold tracking-tight">ICA Course</div>
              <p className="text-sky-250 text-sm mt-1">Bimbingan Belajar Privat</p>
            </div>
            <button
              className="px-5 py-4 rounded-2xl hover:bg-white/10 flex items-center justify-center text-white hover:text-red-400 transition-all duration-200 focus:outline-none cursor-pointer"
              onClick={onClose}
              aria-label="Tutup Menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 flex flex-col gap-1 p-6 overflow-y-auto">
            {navItems.map(({ href, icon: Icon, label }) => {
              const isActive = activeSection === href.slice(1);
              return (
                <button
                  key={href}
                  onClick={() => scrollToSection(href)}
                  className={`px-5 py-4 rounded-2xl transition-all duration-200 flex items-center gap-3 text-left cursor-pointer ${
                    isActive
                      ? "bg-white/15 text-white font-medium"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon className="text-xl shrink-0" />
                  {label}
                </button>
              );
            })}
          </nav>

          <div className="p-6 border-t border-white/10" style={{ paddingBottom: 'calc(1.5rem + env(safe-area-inset-bottom))' }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl text-center transition-all duration-200 cursor-pointer"
              href="https://wa.me/6281513092400"
            >
              <svg className="w-6 h-6 fill-white" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.4-11.3 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.5-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              Hubungi Kami
            </a>
          </div>
        </aside>
      </div>

      {/* DESKTOP SIDEBAR — visible only on lg+ */}
      <aside
        className={`hidden lg:flex fixed left-0 top-20 h-[calc(100dvh-5rem)] bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-700 z-30 flex-col transition-all duration-300 ease-in-out shadow-sm ${
          isExpanded ? "w-64" : "w-16"
        }`}
      >
        <div className="flex items-center h-14 px-2 border-b border-gray-200 dark:border-slate-700">
          <button
            onClick={onToggle}
            className={`rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 flex items-center justify-center text-gray-500 dark:text-gray-400 transition-colors cursor-pointer ${
              isExpanded ? "w-full px-3 py-2.5" : "w-9 h-9 mx-auto"
            }`}
            aria-label={isExpanded ? "Persempit sidebar" : "Perluas sidebar"}
            title={isExpanded ? "Tutup sidebar" : "Buka sidebar"}
          >
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "" : "rotate-180"}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 flex flex-col gap-0.5 p-2 overflow-y-auto">
          {navItems.map(({ href, icon: Icon, label }) => {
            const isActive = activeSection === href.slice(1);
            return (
              <button
                key={href}
                onClick={() => scrollToSection(href)}
                className={`relative flex items-center rounded-xl transition-all duration-200 cursor-pointer outline-none ${
                  isExpanded ? "gap-3 px-3 py-2.5" : "gap-0 px-0 py-2.5 justify-center"
                } ${
                  isActive
                    ? "bg-[#062A42]/10 dark:bg-sky-500/20 text-[#062A42] dark:text-sky-300 font-medium"
                    : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-gray-800 dark:hover:text-gray-200"
                }`}
                title={!isExpanded ? label : undefined}
              >
                <Icon className="w-5 h-5 shrink-0" />
                <span
                  className={`text-sm whitespace-nowrap overflow-hidden transition-all duration-300 ${
                    isExpanded ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"
                  }`}
                >
                  {label}
                </span>
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-[#062A42] dark:bg-sky-400 rounded-r-full" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="p-2 border-t border-gray-200 dark:border-slate-700">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/6281513092400"
            className={`flex items-center rounded-xl transition-all duration-200 text-white bg-green-500 hover:bg-green-600 cursor-pointer ${
              isExpanded ? "gap-3 px-3 py-2.5" : "gap-0 px-0 py-2.5 justify-center"
            }`}
            title={!isExpanded ? "Hubungi Kami" : undefined}
          >
            <svg className="w-5 h-5 shrink-0 fill-white" viewBox="0 0 448 512">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.4-11.3 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.5-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
            <span
              className={`text-sm font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${
                isExpanded ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"
              }`}
            >
              Hubungi Kami
            </span>
          </a>
        </div>
      </aside>
    </>
  );
}
