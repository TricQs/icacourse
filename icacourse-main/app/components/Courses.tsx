"use client";

import React from "react";

export default function Courses() {
  return (
    <section
      id="courses"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy dark:text-white tracking-tight">
            Kenapa Memilih ICA Course?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
            Tiga pilar yang membuat pengalaman belajar di ICA berbeda dan lebih
            berdampak
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="feature-card cursor-pointer bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="feat-icon w-14 h-14 rounded-2xl bg-sky/15 dark:bg-sky/10 flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-navy dark:text-sky"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy dark:text-white mb-3">
              Personalized Learning
            </h3>
            <p className="text-slate-650 dark:text-slate-300 text-sm leading-relaxed">
              Kurikulum dirancang khusus untuk setiap siswa menyesuaikan gaya
              belajar, target akademik, dan jadwal belajar yang nyaman.
            </p>
          </div>
          {/* Card 2 */}
          <div className="feature-card cursor-pointer bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="feat-icon w-14 h-14 rounded-2xl bg-sky/15 dark:bg-sky/10 flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-navy dark:text-sky"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy dark:text-white mb-3">
              Pendampingan Intensif
            </h3>
            <p className="text-slate-650 dark:text-slate-300 text-sm leading-relaxed">
              Sesi belajar 1-on-1 atau kelompok kecil (small group) bersama
              mentor terpilih yang interaktif, sabar, dan terarah.
            </p>
          </div>
          {/* Card 3 */}
          <div className="feature-card cursor-pointer bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="feat-icon w-14 h-14 rounded-2xl bg-sky/15 dark:bg-sky/10 flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-navy dark:text-sky"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy dark:text-white mb-3">
              Terbukti Berdampak
            </h3>
            <p className="text-slate-650 dark:text-slate-300 text-sm leading-relaxed">
              Lebih dari 1.000 siswa di seluruh Indonesia telah berhasil
              meningkatkan pemahaman materi dan masuk perguruan tinggi favorit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}