"use client";

import React from "react";
import Counter from "./Counter";

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative overflow-hidden bg-navy dark:bg-slate-900 py-16 md:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl md:text-5xl font-extrabold tracking-tight">
            ICA Course dalam Angka
          </h2>
          <p className="text-sky-200 text-lg mt-4 max-w-2xl mx-auto">
            Bukti nyata dedikasi dan dampak yang kami hadirkan sejak 2021
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-3xl border border-white/10 overflow-hidden bg-white/5 divide-y md:divide-y-0 lg:divide-x divide-white/10">
          {/* Stat 1 */}
          <div className="p-8 sm:p-10 flex flex-col items-center justify-center text-center">
            <div className="text-white text-5xl md:text-6xl font-extrabold mb-3">
              <Counter end={1000} suffix="+" />
            </div>
            <p className="text-slate-200 text-sm font-semibold max-w-[200px]">
              Siswa yang Pernah Didampingi
            </p>
          </div>
          {/* Stat 2 */}
          <div className="p-8 sm:p-10 flex flex-col items-center justify-center text-center">
            <div className="text-white text-5xl md:text-6xl font-extrabold mb-3">
              <Counter end={17} suffix="+" />
            </div>
            <p className="text-slate-200 text-sm font-semibold max-w-[200px]">
              Mentor Aktif Berpengalaman
            </p>
          </div>
          {/* Stat 3 */}
          <div className="p-8 sm:p-10 flex flex-col items-center justify-center text-center">
            <div className="text-white text-5xl md:text-6xl font-extrabold mb-3">
              <Counter end={4} suffix="+" />
            </div>
            <p className="text-slate-200 text-sm font-semibold max-w-[200px]">
              Tahun Eksistensi Sejak 2021
            </p>
          </div>
          {/* Stat 4 */}
          <div className="p-8 sm:p-10 flex flex-col items-center justify-center text-center">
            <div className="text-white text-5xl md:text-6xl font-extrabold mb-3">
              <span>4.9</span>
              <span className="text-orange-400 font-bold"> ★</span>
            </div>
            <p className="text-slate-200 text-sm font-semibold max-w-[200px]">
              Rating Rata-Rata Murid
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
