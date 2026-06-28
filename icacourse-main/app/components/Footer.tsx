"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-extrabold text-navy dark:text-white">
            ICA Course
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-xs mt-2 max-w-sm">
            Bimbingan belajar privat yang berfokus mendampingi siswa dengan cara
            yang lebih personal, rapi, dan relevan sejak 2021.
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href="https://x.com/icacourse"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-sky-light dark:hover:bg-slate-700 rounded-xl flex items-center justify-center transition-colors duration-200 cursor-pointer"
            aria-label="Twitter/X"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/icacourse"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-sky-light dark:hover:bg-slate-700 rounded-xl flex items-center justify-center transition-colors duration-200 cursor-pointer"
            aria-label="Instagram"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=icacoursebimbel@gmail.com&su=Tanya%20Program%20Bimbel&body=Halo%20ICA%20Course,%20saya%20ingin%20bertanya%20tentang%20Program%20Bimbel%20Online."
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-sky-light dark:hover:bg-slate-700 rounded-xl flex items-center justify-center transition-colors duration-200 cursor-pointer"
            aria-label="Email"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@icacourse"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-sky-light dark:hover:bg-slate-700 rounded-xl flex items-center justify-center transition-colors duration-200 cursor-pointer"
            aria-label="TikTok"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512">
              <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 border-t border-slate-100 dark:border-slate-900 mt-8 pt-6 text-center text-xs text-slate-400">
        &copy; 2026 ICA Course. Hak Cipta Dilindungi Undang-Undang.
      </div>
    </footer>
  );
}
