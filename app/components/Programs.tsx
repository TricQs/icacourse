"use client";

import React from "react";

interface ProgramsProps {
  onOpenProgram: (progId: "snbt" | "reguler" | "tka" | "intl") => void;
}

export default function Programs({ onOpenProgram }: ProgramsProps) {
  return (
    <section
      id="programs"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy dark:text-white tracking-tight">
            Program Belajar Pilihan
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
            Tersedia untuk jenjang TK, SD, SMP, SMA, Internasional, dan Kuliah
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Program Card 1 */}
          <div className="program-card bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-md flex flex-col">
            <div className="h-48 overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Programs/Group 1.png"
                alt="Digital Pack SNBT"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm">
                🔥 Promo
              </span>
            </div>
            <div className="p-5 sm:p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-navy dark:text-white leading-snug mb-3">
                Digital Pack PK &amp; PM SNBT 2026 ✨
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed flex-1 mb-6">
                Video materi, PDF pembahasan lengkap, Try Out simulasi, dan
                akses ke komunitas SNBT 100k member.
              </p>
              <div className="mb-4">
                <span className="text-green-600 dark:text-green-400 text-xl font-bold mr-2">
                  Rp 29.000
                </span>
                <span className="line-through text-slate-400 text-xs font-semibold">
                  Rp 199.000
                </span>
              </div>
              <button
                className="w-full bg-navy hover:bg-navy-light text-white dark:bg-sky dark:hover:bg-sky-hover dark:text-navy py-3 rounded-xl font-bold text-sm transition-all duration-200 shadow-sm min-h-[48px] flex items-center justify-center active:scale-95 cursor-pointer"
                onClick={() => onOpenProgram("snbt")}
              >
                Detail Program
              </button>
            </div>
          </div>

          {/* Program Card 2 */}
          <div className="program-card bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-md flex flex-col">
            <div className="h-48 overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Programs/Group 2.png"
                alt="Private Reguler"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm">
                Aktif
              </span>
            </div>
            <div className="p-5 sm:p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-navy dark:text-white leading-snug mb-3">
                Kelas Private Reguler (SD–SMA)
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed flex-1 mb-6">
                Pendampingan belajar harian untuk semua mata pelajaran sekolah
                dengan jadwal dan lokasi yang fleksibel.
              </p>
              <div className="mb-4">
                <span className="text-navy dark:text-sky-light text-xl font-bold mr-2">
                  start from 57k
                </span>
              </div>
              <button
                className="w-full bg-navy hover:bg-navy-light text-white dark:bg-sky dark:hover:bg-sky-hover dark:text-navy py-3 rounded-xl font-bold text-sm transition-all duration-200 shadow-sm min-h-[48px] flex items-center justify-center active:scale-95 cursor-pointer"
                onClick={() => onOpenProgram("reguler")}
              >
                Detail Program
              </button>
            </div>
          </div>

          {/* Program Card 3 */}
          <div className="program-card bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-md flex flex-col">
            <div className="h-48 overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Programs/Group 3.png"
                alt="TKA UTBK"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm">
                🔥 Promo
              </span>
            </div>
            <div className="p-5 sm:p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-navy dark:text-white leading-snug mb-3">
                Persiapan TKA (Fokus Akademik)
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed flex-1 mb-6">
                Penguasaan materi akademik mendalam dan strategi taktis untuk
                lolos ujian mandiri atau TKA UTBK/SNBT.
              </p>
              <div className="mb-4">
                <span className="text-green-600 dark:text-green-400 text-xl font-bold mr-2">
                  start from 120k
                </span>
              </div>
              <button
                className="w-full bg-navy hover:bg-navy-light text-white dark:bg-sky dark:hover:bg-sky-hover dark:text-navy py-3 rounded-xl font-bold text-sm transition-all duration-200 shadow-sm min-h-[48px] flex items-center justify-center active:scale-95 cursor-pointer"
                onClick={() => onOpenProgram("tka")}
              >
                Detail Program
              </button>
            </div>
          </div>

          {/* Program Card 4 */}
          <div className="program-card bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-md flex flex-col">
            <div className="h-48 overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Programs/Group 4.png"
                alt="International Curriculum"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm">
                Aktif
              </span>
            </div>
            <div className="p-5 sm:p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-navy dark:text-white leading-snug mb-3">
                Kelas International Curriculum
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed flex-1 mb-6">
                Pendampingan intensif Cambridge &amp; IB (International
                Baccalaureate) Curriculum untuk sekolah internasional.
              </p>
              <div className="mb-4">
                <span className="text-navy dark:text-sky-light text-xl font-bold mr-2">
                  start from 90k
                </span>
              </div>
              <button
                className="w-full bg-navy hover:bg-navy-light text-white dark:bg-sky dark:hover:bg-sky-hover dark:text-navy py-3 rounded-xl font-bold text-sm transition-all duration-200 shadow-sm min-h-[48px] flex items-center justify-center active:scale-95 cursor-pointer"
                onClick={() => onOpenProgram("intl")}
              >
                Detail Program
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}