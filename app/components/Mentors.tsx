"use client";

import React, { useEffect, useRef } from "react";

const mentors = [
  {
    name: "Kak Ai",
    subject: "Mata Pelajaran SD",
    degree: "S-1 PGSD",
    university: "Universitas Negeri Jakarta",
    image: "/Mentors/Kak Ai.png",
  },
  {
    name: "Kak Angel",
    subject: "Matematika & TKA SD",
    degree: "S-1 Pend. Matematika",
    university: "UNIMED",
    image: "/Mentors/Kak Angel.png",
  },
  {
    name: "Kak Ardi",
    subject: "Matematika",
    degree: "S-1 Matematika",
    university: "Universitas Sanata Dharma",
    image: "/Mentors/Kak Ardi.png",
  },
  {
    name: "Kak Aryo",
    subject: "Matematika & Fisika",
    degree: "S-1 Teknik Kimia",
    university: "Universitas Diponegoro",
    image: "/Mentors/Kak Aryo.png",
  },
  {
    name: "Kak Bagas",
    subject: "Matematika",
    degree: "S-1 Statistika Ekonomi",
    university: "Politeknik Statistika STIS",
    image: "/Mentors/Kak Bagas.png",
  },
  {
    name: "Kak Cindy",
    subject: "IPA & TKA Kimia",
    degree: "S-1 Teknik Kimia Ind.",
    university: "ITS Surabaya",
    image: "/Mentors/Kak Cindy.png",
  },
  {
    name: "Kak Dinar",
    subject: "Matematika & Kimia",
    degree: "S-1 Kimia",
    university: "Universitas Brawijaya",
    image: "/Mentors/Kak Dinar.png",
  },
  {
    name: "Kak Fanny",
    subject: "Fisika & Matematika",
    degree: "S-1 Teknologi Ind. Pert.",
    university: "Universitas Udayana",
    image: "/Mentors/Kak Fanny.png",
  },
  {
    name: "Kak Hani",
    subject: "Matematika & UTBK",
    degree: "S-1 Matematika",
    university: "UIN Sunan Gunung Djati",
    image: "/Mentors/Kak Hani.png",
  },
  {
    name: "Kak Jes",
    subject: "Matematika & Biologi",
    degree: "S-1 Teknologi Pangan",
    university: "Universitas Pelita Harapan",
    image: "/Mentors/Kak Jes.png",
  },
  {
    name: "Kak Nurul",
    subject: "Matematika & TKA",
    degree: "S-1 Pend. Matematika",
    university: "Universitas Syiah Kuala",
    image: "/Mentors/Kak Nurul.png",
  },
  {
    name: "Kak Ando",
    subject: "Ekonomi & Akuntansi",
    degree: "S-1 Akuntansi",
    university: "Universitas Gadjah Mada",
    image: "/Mentors/Kak Ando.png",
  },
  {
    name: "Kak Ramdani",
    subject: "IPS & Akuntansi",
    degree: "S-1 Sains Data",
    university: "Universitas Sebelas Maret",
    image: "/Mentors/Kak Ramdani.png",
  },
  {
    name: "Kak Risan",
    subject: "Biologi & Ind.",
    degree: "S-1 Kebidanan",
    university: "Universitas Brawijaya",
    image: "/Mentors/Kak Risan.png",
  },
  {
    name: "Kak Shafa",
    subject: "IPS",
    degree: "S-1 Pend. Ekonomi",
    university: "Universitas Negeri Yogyakarta",
    image: "/Mentors/Kak Shafa.png",
  },
];

export default function Mentors() {
  const trackRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<{
    pause: () => void;
    resume: () => void;
  } | null>(null);
  const speed = 0.75; // speed in px/frame

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number | null = null;
    let resumeTimer: NodeJS.Timeout | null = null;
    let isInteracting = false;
    let scrollPos = track.scrollLeft;
    let lastTime = performance.now();
    let loopLimit = 0;
    const originalCount = mentors.length;

    function calculateLimit() {
      if (!track) return;
      const cards = track.children;
      if (cards.length <= originalCount) {
        loopLimit = 0;
        return;
      }
      const firstClonedCard = cards[originalCount] as HTMLElement;
      const firstCard = cards[0] as HTMLElement;
      loopLimit = firstClonedCard.offsetLeft - firstCard.offsetLeft;
    }

    calculateLimit();
    window.addEventListener("resize", calculateLimit, { passive: true });

    function updateScroll(timestamp: number) {
      if (isInteracting || !track) return;

      const delta = timestamp - lastTime;
      lastTime = timestamp;

      const dt = Math.min(delta, 100);
      const pxPerMs = speed / 16.667;
      scrollPos += pxPerMs * dt;

      if (loopLimit > 0 && scrollPos >= loopLimit) {
        scrollPos -= loopLimit;
      }

      track.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(updateScroll);
    }

    function startLoop() {
      if (!track) return;
      isInteracting = false;
      scrollPos = track.scrollLeft;
      lastTime = performance.now();

      track.style.scrollBehavior = "auto";
      track.style.scrollSnapType = "none";

      if (animationId) cancelAnimationFrame(animationId);
      animationId = requestAnimationFrame(updateScroll);
    }

    function pauseLoop() {
      if (!track) return;
      isInteracting = true;
      track.style.scrollBehavior = "";
      track.style.scrollSnapType = "";

      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
      if (resumeTimer) {
        clearTimeout(resumeTimer);
        resumeTimer = null;
      }
    }

    function handleInteractionStart() {
      pauseLoop();
    }

    function handleInteractionEnd() {
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        startLoop();
      }, 5000);
    }

    track.addEventListener("pointerdown", handleInteractionStart, {
      passive: true,
    });
    track.addEventListener("pointerup", handleInteractionEnd, {
      passive: true,
    });
    track.addEventListener("pointercancel", handleInteractionEnd, {
      passive: true,
    });

    track.addEventListener("wheel", () => {
      handleInteractionStart();
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        startLoop();
      }, 5000);
    }, { passive: true });

    controlsRef.current = {
      pause: pauseLoop,
      resume: handleInteractionEnd,
    };

    startLoop();

    return () => {
      window.removeEventListener("resize", calculateLimit);
      if (animationId) cancelAnimationFrame(animationId);
      if (resumeTimer) clearTimeout(resumeTimer);
      track.removeEventListener("pointerdown", handleInteractionStart);
      track.removeEventListener("pointerup", handleInteractionEnd);
      track.removeEventListener("pointercancel", handleInteractionEnd);
      controlsRef.current = null;
    };
  }, []);

  const handleArrowScroll = (dir: number) => {
    const track = trackRef.current;
    if (!track) return;

    if (controlsRef.current) {
      controlsRef.current.pause();
      controlsRef.current.resume();
    }

    const card = track.firstElementChild as HTMLElement;
    if (!card) return;

    const secondCard = card.nextElementSibling as HTMLElement;
    let step = card.offsetWidth + 24;
    if (secondCard) {
      step =
        secondCard.getBoundingClientRect().left -
        card.getBoundingClientRect().left;
    }
    track.scrollBy({ left: step * dir * 2, behavior: "smooth" });
  };

  // Double the list to support seamless infinite scroll
  const doubleMentors = [...mentors, ...mentors];

  return (
    <section
      id="mentors"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy dark:text-white tracking-tight">
            Profil Mentor ICA Course
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
            Tim pengajar terbaik dan berpengalaman lulusan kampus ternama di
            Indonesia
          </p>
        </div>

        <div className="relative flex items-center">
          <button
            className="absolute -left-2 xl:-left-12 z-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-navy dark:hover:bg-sky hover:text-white dark:hover:text-navy transition-all duration-200 focus:outline-none cursor-pointer"
            onClick={() => handleArrowScroll(-1)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div
            ref={trackRef}
            id="mentorTrack"
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-4 px-4 sm:px-6 md:px-8 scrollbar-hide w-full"
          >
            {doubleMentors.map((mentor, index) => (
              <div
                key={index}
                className="snap-item-card shrink-0 w-[260px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm flex flex-col mentor-card"
              >
                <div className="mentor-img-container bg-slate-200 dark:bg-slate-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-navy dark:text-white leading-snug">
                      {mentor.name}
                    </h3>
                    <div className="text-sky-hover dark:text-sky text-xs font-bold mt-1.5 uppercase tracking-wide">
                      {mentor.subject}
                    </div>
                    <div className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                      {mentor.degree}
                    </div>
                  </div>
                  <div className="text-navy dark:text-slate-300 font-bold text-xs mt-3 border-t border-slate-200 dark:border-slate-800 pt-2.5">
                    {mentor.university}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="absolute -right-2 xl:-right-12 z-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-navy dark:hover:bg-sky hover:text-white dark:hover:text-navy transition-all duration-200 focus:outline-none cursor-pointer"
            onClick={() => handleArrowScroll(1)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
