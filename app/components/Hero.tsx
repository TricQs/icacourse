"use client";

import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[#E3F1FC] dark:bg-slate-900/60 py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-14">
        {/* Text Side */}
        <div className="flex-1 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-5">
            <div className="w-3 h-3 bg-navy dark:bg-sky rounded-full"></div>
            <p className="font-bold tracking-wider text-xs md:text-sm text-navy-light dark:text-sky-mid">
              BIMBINGAN BELAJAR PRIVAT
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-navy via-[#0F58BF] to-navy dark:from-sky-light dark:via-sky dark:to-sky-light bg-clip-text text-transparent pb-1">
            Belajar Lebih Personal,
            <br />
            Raih Impian Akademikmu
          </h1>
          <p className="text-slate-650 dark:text-slate-300 text-base md:text-lg mt-6 max-w-2xl leading-relaxed">
            Sejak 2021, ICA Course telah mendampingi +1.000 siswa/i di seluruh
            Indonesia dengan metode 1-on-1 yang fleksibel, terstruktur, dan
            terbukti efektif secara akademis.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              className="inline-flex bg-navy hover:bg-navy-light text-white dark:bg-sky dark:hover:bg-sky-hover dark:text-navy px-8 py-4 rounded-2xl font-bold transition-all duration-200 shadow-lg shadow-navy/10 dark:shadow-sky/10 transform active:scale-95 text-sm md:text-base min-h-[48px] items-center justify-center cursor-pointer"
              href="#programs"
            >
              Lihat Program
            </a>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-10">
            <div className="flex items-center gap-2 rounded-full border border-sky-mid dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 shadow-sm">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-navy dark:text-slate-200 font-semibold text-sm">
                Online & Offline
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-sky-mid dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 shadow-sm">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-navy dark:text-slate-200 font-semibold text-sm">
                SD - Kuliah
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-sky-mid dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 shadow-sm">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-navy dark:text-slate-200 font-semibold text-sm">
                Mulai Rp 29.000
              </span>
            </div>
          </div>
        </div>

        {/* Visual Side */}
        <div className="flex-1 flex justify-center relative w-full">
          <div className="relative group w-full max-w-md lg:max-w-xl">
            <div className="absolute -inset-2 bg-gradient-to-r from-sky to-blue-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-45 transition duration-500"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Bimbingan Belajar Privat ICA Course"
              loading="lazy"
              width="600"
              height="500"
              className="relative w-full h-auto rounded-3xl shadow-2xl border-4 border-white dark:border-slate-800 object-cover aspect-video lg:aspect-[4/3]"
              src="https://drive.google.com/thumbnail?id=18GBDnDBlRS2mjSMC3tT4eoYNSh-qIcOk&sz=w1000"
            />
          </div>
          <div className="absolute bottom-6 left-6 md:left-2 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl flex items-center gap-3 hidden sm:flex transform hover:scale-105 transition-transform duration-300">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border border-white dark:border-slate-800 bg-sky flex items-center justify-center text-xs font-bold text-navy">
                🎓
              </div>
              <div className="w-8 h-8 rounded-full border border-white dark:border-slate-800 bg-yellow-400 flex items-center justify-center text-xs font-bold text-navy">
                ⭐
              </div>
              <div className="w-8 h-8 rounded-full border border-white dark:border-slate-800 bg-green-400 flex items-center justify-center text-xs font-bold text-navy">
                📚
              </div>
            </div>
            <div>
              <div className="font-bold text-sm text-navy dark:text-white">
                +1.000 Siswa
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-xs font-medium">
                Bergabung sejak 2021
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}