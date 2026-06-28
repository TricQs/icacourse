"use client";

import React from "react";

interface TentangProps {
  onOpenPanduan: () => void;
}

export default function Tentang({ onOpenPanduan }: TentangProps) {
  return (
    <section
      id="tentang"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center">
            <div className="relative max-w-sm w-full aspect-square rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800 shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-tr from-sky/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://drive.google.com/thumbnail?id=1YPCSYAPrEfr9QGTOY4N6N-f5fno3vyix&sz=w400"
                alt="Logo Bimbel Privat ICA Course"
                className="w-full h-full object-contain rounded-2xl relative z-10"
              />
            </div>
          </div>
          <div className="text-center lg:text-left">
            <span className="inline-block bg-sky-light dark:bg-sky/10 text-navy-light dark:text-sky px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
              Tentang Kami
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy dark:text-white tracking-tight mb-6">
              Tentang ICA Course
            </h2>
            <div className="text-slate-650 dark:text-slate-300 space-y-5 text-sm md:text-base leading-relaxed">
              <p>
                ICA Course bermula sebagai bimbingan belajar privat independen
                yang sejak awal memiliki fokus utama untuk mendampingi murid
                belajar secara personal, relevan, dan nyaman.
              </p>
              <p>
                Respons positif dari para siswa dan orang tua terus mendorong
                kami untuk bertumbuh dan beralih dari sekadar bimbingan belajar
                biasa menjadi partner akademik yang dapat diandalkan.
              </p>
              <p>
                Kami percaya setiap siswa unik. Oleh karena itu, kami bertekad
                memberikan pendampingan yang rapi, penuh kepedulian, dan
                terbukti berdampak positif demi masa depan pendidikan Indonesia.
              </p>
            </div>
            <button
              className="mt-8 bg-navy hover:bg-navy-light text-white dark:bg-sky dark:hover:bg-sky-hover dark:text-navy px-8 py-3.5 rounded-2xl font-bold transition-all duration-200 shadow-md shadow-navy/10 transform active:scale-95 text-sm min-h-[48px] cursor-pointer"
              onClick={onOpenPanduan}
            >
              Pelajari Cara Bergabung
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
