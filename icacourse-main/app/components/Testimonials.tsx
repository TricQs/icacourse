"use client";

import React, { useEffect, useRef } from "react";

const posters = [
  "/Testimonials/image 1.png",
  "/Testimonials/image 2.png",
  "/Testimonials/image 3.png",
  "/Testimonials/image 4.png",
  "/Testimonials/image 5.png",
  "/Testimonials/image 6.png",
  "/Testimonials/image 7.png",
  "/Testimonials/image 8.png",
  "/Testimonials/image 9.png",
  "/Testimonials/image 10.png",
  "/Testimonials/image 11.png",
  "/Testimonials/image 12.png",
  "/Testimonials/image 13.png",
];

interface TestimonialsProps {
  onOpenImage: (imgSrc: string) => void;
}

export default function Testimonials({ onOpenImage }: TestimonialsProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<{
    pause: () => void;
    resume: () => void;
  } | null>(null);
  const speed = -0.65; // negative speed to scroll in reverse direction

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number | null = null;
    let resumeTimer: NodeJS.Timeout | null = null;
    let isInteracting = false;
    let scrollPos = track.scrollLeft;
    let lastTime = performance.now();
    let loopLimit = 0;
    const originalCount = posters.length;

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

      if (speed > 0) {
        if (loopLimit > 0 && scrollPos >= loopLimit) {
          scrollPos -= loopLimit;
        }
      } else {
        if (loopLimit > 0 && scrollPos <= 0) {
          scrollPos += loopLimit;
        }
      }

      track.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(updateScroll);
    }

    function startLoop() {
      if (!track) return;
      isInteracting = false;

      // If scrolling left and we are at the start, reset position to loopLimit
      if (speed < 0 && track.scrollLeft <= 0) {
        track.scrollLeft = loopLimit;
      }

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
    let step = card.offsetWidth + 20;
    if (secondCard) {
      step =
        secondCard.getBoundingClientRect().left -
        card.getBoundingClientRect().left;
    }
    track.scrollBy({ left: step * dir * 2, behavior: "smooth" });
  };

  // Double the list to support seamless infinite scroll
  const doublePosters = [...posters, ...posters];

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy dark:text-white tracking-tight">
            Testimoni Murid
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
            Pengalaman nyata para alumni belajar bersama para mentor ICA Course
          </p>
        </div>

        {/* Poster Carousel */}
        <div className="relative flex items-center mb-16">
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
            id="testiTrack"
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-4 px-4 sm:px-6 md:px-8 scrollbar-hide w-full"
          >
            {doublePosters.map((posterSrc, index) => (
              <div
                key={index}
                className="testi-poster snap-item-card shrink-0 w-[240px] rounded-2xl overflow-hidden shadow-md cursor-pointer"
                onClick={() => onOpenImage(posterSrc)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={posterSrc}
                  alt="Testimoni Siswa ICA Course Bimbel Privat"
                  className="w-full h-auto object-cover aspect-[9/14]"
                />
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div className="bg-white dark:bg-slate-800 border border-slate-205 dark:border-slate-750 p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="text-yellow-500 font-bold text-lg">★★★★★</div>
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                  <svg className="w-3.5 h-3.5 fill-current text-pink-600 dark:text-pink-400" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                  <span>Instagram</span>
                </div>
              </div>
              <p className="text-slate-650 dark:text-slate-300 text-sm leading-relaxed italic mb-8">
                &quot;Keren sih, aku baru kali ini dengan cepat paham kimia.
                Usually belibet memahaminya, tapi kemarin itu literally cepet
                banget paham karena rumus kak Amel ngajarinnya simple dan mudah
                diingat.&quot;
              </p>
            </div>
            <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100 dark:border-slate-700">
              <div className="w-10 h-10 rounded-full bg-sky-light text-navy dark:bg-slate-700 dark:text-sky flex items-center justify-center font-bold text-sm">
                👤
              </div>
              <div>
                <h4 className="font-bold text-sm text-navy dark:text-white">
                  Oktaviani Putri
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Kelas 12 SMA
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 border border-slate-205 dark:border-slate-750 p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="text-yellow-500 font-bold text-lg">★★★★★</div>
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                  <svg className="w-3.5 h-3.5 fill-current text-pink-600 dark:text-pink-400" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                  <span>Instagram</span>
                </div>
              </div>
              <p className="text-slate-650 dark:text-slate-300 text-sm leading-relaxed italic mb-8">
                &quot;Bagus banget pengajarnya, langsung nangkep materinya.
                Penjelasannya jelas, to the point, dan tidak
                bertele-tele.&quot;
              </p>
            </div>
            <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100 dark:border-slate-700">
              <div className="w-10 h-10 rounded-full bg-sky-light text-navy dark:bg-slate-700 dark:text-sky flex items-center justify-center font-bold text-sm">
                👤
              </div>
              <div>
                <h4 className="font-bold text-sm text-navy dark:text-white">
                  Ica
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Kuliah — Jurusan Akuntansi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
