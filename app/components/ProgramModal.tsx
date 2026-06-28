"use client";

import React from "react";

// Program details datasets matching my_static_ui.html
const programsData = {
  snbt: {
    title: "Digital Pack PK & PM SNBT 2026 ✨",
    image: "/Programs/Group 1.png",
    checklist: [
      "Video recording materi fundamental PK & PM lengkap",
      "Latihan soal latihan interaktif di setiap sesi",
      "PDF pembahasan materi mendalam agar makin paham konsep dasar",
      "Try Out simulasi ujian SNBT berkala",
      "Video pembahasan try out menjelaskan logika pengerjaan",
      "Akses eksklusif komunitas SNBT 100k member",
    ],
    priceBox: (
      <>
        <span className="text-red-500 dark:text-red-400 font-bold text-xs uppercase block tracking-wider mb-1">
          🔥 BONUS EARLY ACCESS!
        </span>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-extrabold text-navy dark:text-white">
            Rp 29.000
          </span>
          <span className="line-through text-slate-400 text-xs font-semibold">
            Rp 199.000
          </span>
        </div>
      </>
    ),
    ctaLink:
      "https://wa.me/6281513092400?text=Halo+ICA+Course,+saya+tertarik+Digital+Pack+PK+PM+SNBT+2026",
    ctaText: "Beli Program Sekarang",
  },
  reguler: {
    title: "Kelas Private Reguler (SD–SMA)",
    image: "/Programs/Group 2.png",
    checklist: [
      "Pendampingan belajar privat harian 1-on-1 (online / offline)",
      "Menyediakan semua mata pelajaran sekolah (Matematika, IPA, IPS, dll.)",
      "Waktu belajar fleksibel menyesuaikan jadwal siswa",
      "Laporan perkembangan belajar mingguan ke orang tua",
      "Bebas berkonsultasi PR dan tugas di luar jam mengajar",
      "Konsultasi akademik gratis bersama tim konselor",
    ],
    priceBox: (
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-extrabold text-navy dark:text-white">
          start from 57k
        </span>
      </div>
    ),
    ctaLink:
      "https://wa.me/6281513092400?text=Halo+ICA+Course,+saya+tertarik+Kelas+Private+Reguler+SD+SMA",
    ctaText: "Daftar Bimbel Sekarang",
  },
  tka: {
    title: "Persiapan TKA (Fokus Akademik)",
    image: "/Programs/Group 3.png",
    checklist: [
      "Pendampingan belajar fokus materi akademik UTBK/SNBT",
      "Pembahasan mendalam soal seleksi mandiri PTN unggulan",
      "Latihan intensif (drilling) materi TKA (Fisika, Kimia, Biologi, Geografi, dll.)",
      "Strategi taktis menjawab soal-soal tingkat tinggi (HOTS)",
      "Akses berkala ke Try Out premium",
      "Konsultasi khusus penentuan jurusan kuliah impian",
    ],
    priceBox: (
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-extrabold text-navy dark:text-white">
          start from 120k
        </span>
      </div>
    ),
    ctaLink:
      "https://wa.me/6281513092400?text=Halo+ICA+Course,+saya+tertarik+Persiapan+TKA+Fokus+Akademik",
    ctaText: "Ambil Promo Sekarang",
  },
  intl: {
    title: "Kelas International Curriculum",
    image: "/Programs/Group 4.png",
    checklist: [
      "Pendampingan materi kurikulum Cambridge (IGCSE, A-Level) & IB",
      "Pengantar materi secara bilingual maupun full English",
      "Mengasah pemahaman materi berbekal lembar Past Papers",
      "Mentor berkualifikasi tinggi di bidang kurikulum asing",
      "Jadwal fleksibel (online 1-on-1 tutoring)",
      "Konsultasi & portofolio aplikasi universitas luar negeri",
    ],
    priceBox: (
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-extrabold text-navy dark:text-white">
          start from 90k
        </span>
      </div>
    ),
    ctaLink:
      "https://wa.me/6281513092400?text=Halo+ICA+Course,+saya+tertarik+Kelas+International+Curriculum",
    ctaText: "Hubungi Admin Program",
  },
};

interface ProgramModalProps {
  selectedProgram: "snbt" | "reguler" | "tka" | "intl" | null;
  setSelectedProgram: (val: "snbt" | "reguler" | "tka" | "intl" | null) => void;
  panduanOpen: boolean;
  setPanduanOpen: (val: boolean) => void;
  selectedTestiImage: string | null;
  setSelectedTestiImage: (val: string | null) => void;
}

export default function ProgramModal({
  selectedProgram,
  setSelectedProgram,
  panduanOpen,
  setPanduanOpen,
  selectedTestiImage,
  setSelectedTestiImage,
}: ProgramModalProps) {
  // Get active data if a program is selected
  const activeProgramData = selectedProgram ? programsData[selectedProgram] : null;

  return (
    <>
      {/* 1. Dynamic Program Detail Modal */}
      <div
        id="progDetailModal"
        className={`fixed inset-0 bg-black/60 z-50 flex justify-center items-end sm:items-center p-0 sm:p-4 transition-opacity duration-300 backdrop-blur-sm ${
          selectedProgram
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelectedProgram(null);
        }}
      >
        <div
          className={`bg-white dark:bg-slate-800 w-full sm:max-w-lg md:max-w-xl rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col transition-all duration-300 ${
            selectedProgram
              ? "translate-y-0 sm:scale-100"
              : "translate-y-20 sm:translate-y-0 sm:scale-95"
          }`}
        >
          <div className="p-6 border-b border-slate-100 dark:border-slate-700/60 flex items-center justify-between sticky top-0 bg-white dark:bg-slate-800 z-10">
            <h3 className="text-lg font-bold text-navy dark:text-white">
              Detail Program
            </h3>
            <button
              className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-red-50 dark:hover:bg-red-950/40 hover:text-red-500 dark:hover:text-red-400 flex items-center justify-center transition-colors duration-200 focus:outline-none cursor-pointer"
              onClick={() => setSelectedProgram(null)}
              aria-label="Tutup Detail Program"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          {activeProgramData && (
            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              <div className="h-44 w-full rounded-2xl overflow-hidden relative shadow-inner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeProgramData.image}
                  alt={activeProgramData.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-extrabold text-navy dark:text-white leading-tight">
                {activeProgramData.title}
              </h2>
              <div>
                <h4 className="text-xs font-bold text-slate-400 dark:text-slate-450 tracking-wider uppercase mb-3">
                  Yang Akan Kamu Dapatkan:
                </h4>
                <ul className="space-y-2.5">
                  {activeProgramData.checklist.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-slate-650 dark:text-slate-300"
                    >
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-900/60">
                {activeProgramData.priceBox}
              </div>
            </div>
          )}
          {activeProgramData && (
            <div className="p-6 border-t border-slate-100 dark:border-slate-700/60 sticky bottom-0 bg-white dark:bg-slate-800 z-10">
              <a
                href={activeProgramData.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl text-center text-sm transition-all duration-200 shadow-md shadow-green-500/10 min-h-[48px] flex items-center justify-center cursor-pointer"
              >
                {activeProgramData.ctaText}
              </a>
            </div>
          )}
        </div>
      </div>

      {/* 2. Panduan Modal */}
      <div
        id="panduanModal"
        className={`fixed inset-0 bg-black/60 z-50 flex justify-center items-end sm:items-center p-0 sm:p-4 transition-opacity duration-300 backdrop-blur-sm ${
          panduanOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setPanduanOpen(false);
        }}
      >
        <div
          className={`bg-white dark:bg-slate-800 w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col transition-all duration-300 ${
            panduanOpen
              ? "translate-y-0 sm:scale-100"
              : "translate-y-20 sm:translate-y-0 sm:scale-95"
          }`}
        >
          <div className="p-6 border-b border-slate-100 dark:border-slate-700/60 flex items-center justify-between sticky top-0 bg-white dark:bg-slate-800 z-10">
            <h3 className="text-lg font-bold text-navy dark:text-white">
              Panduan Pendaftaran
            </h3>
            <button
              className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-red-50 dark:hover:bg-red-950/40 hover:text-red-500 dark:hover:text-red-400 flex items-center justify-center transition-colors duration-200 focus:outline-none cursor-pointer"
              onClick={() => setPanduanOpen(false)}
              aria-label="Tutup Panduan"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="p-6 overflow-y-auto space-y-6 flex-1">
            <div className="text-center">
              <h2 className="text-xl font-extrabold text-navy dark:text-white">
                3 Langkah Mudah Memulai Belajar
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                Kami akan memandu dan memberikan konsultasi gratis di awal
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60">
                <div className="text-2xl">📋</div>
                <div>
                  <h4 className="font-bold text-sm text-navy dark:text-white">
                    1. Pilih Program &amp; Jenjang
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">
                    Tentukan program yang sesuai dengan tingkat kelas dan tujuan
                    belajarmu.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60">
                <div className="text-2xl">💬</div>
                <div>
                  <h4 className="font-bold text-sm text-navy dark:text-white">
                    2. Konsultasi via WhatsApp
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">
                    Admin kami akan membantumu menjadwalkan kelas perdana dan
                    memilih mentor terbaik.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60">
                <div className="text-2xl">🎓</div>
                <div>
                  <h4 className="font-bold text-sm text-navy dark:text-white">
                    3. Mulai Kelas Perdana!
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">
                    Kamu siap bertemu dengan mentor terpilih dan mulai belajar
                    secara interaktif.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 border-t border-slate-100 dark:border-slate-700/60 sticky bottom-0 bg-white dark:bg-slate-800 z-10">
            <a
              href="https://wa.me/6281513092400"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl text-center text-sm transition-all duration-200 shadow-md min-h-[48px] flex items-center justify-center cursor-pointer"
            >
              Hubungi WhatsApp Admin
            </a>
          </div>
        </div>
      </div>

      {/* 3. Testimonial Poster Image Overlay Modal */}
      <div
        id="testiImageModal"
        className={`fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4 transition-opacity duration-300 backdrop-blur-sm ${
          selectedTestiImage
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelectedTestiImage(null);
        }}
      >
        <div
          className={`relative max-w-md w-full flex flex-col items-center transition-transform duration-300 ${
            selectedTestiImage ? "scale-100" : "scale-95"
          }`}
        >
          <button
            className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors duration-200 focus:outline-none cursor-pointer"
            onClick={() => setSelectedTestiImage(null)}
            aria-label="Tutup Gambar"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          {selectedTestiImage && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={selectedTestiImage}
              alt="Testimoni Siswa ICA Course Bimbel Privat Fullscreen"
              className="w-full max-h-[80vh] object-contain rounded-2xl bg-slate-900 shadow-2xl"
            />
          )}
        </div>
      </div>
    </>
  );
}