"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Stats from "./components/Stats";
import Programs from "./components/Programs";
import ProgramModal from "./components/ProgramModal";
import Mentors from "./components/Mentors";
import Testimonials from "./components/Testimonials";
import Tentang from "./components/Tentang";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<
    "snbt" | "reguler" | "tka" | "intl" | null
  >(null);
  const [panduanOpen, setPanduanOpen] = useState(false);
  const [selectedTestiImage, setSelectedTestiImage] = useState<string | null>(
    null
  );

  // Synchronize theme state with document class and localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const initialDark = savedTheme === "dark";

    setIsDark(initialDark);
    if (initialDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleDark = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  };

  // Intercept hash link clicks to scroll smoothly without updating URL hash in the browser address bar
  useEffect(() => {
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const targetId = href.substring(1);
          if (!targetId || targetId === "home") {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          } else {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              const headerOffset = 80; // height of the navbar (h-20)
              const elementPosition = targetElement.getBoundingClientRect().top;
              const offsetPosition = elementPosition + (window.scrollY || window.pageYOffset) - headerOffset;

              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              });
            }
          }
        }
      }
    };

    document.addEventListener("click", handleHashClick);
    return () => {
      document.removeEventListener("click", handleHashClick);
    };
  }, []);

  // Disable body scroll when sidebar or any modal is open
  useEffect(() => {
    const anyModalOpen =
      sidebarOpen ||
      selectedProgram !== null ||
      panduanOpen ||
      selectedTestiImage !== null;
    if (anyModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [sidebarOpen, selectedProgram, panduanOpen, selectedTestiImage]);

  return (
    <div className="bg-gray-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 flex flex-col min-h-full font-sans transition-colors duration-300 overflow-x-hidden">
      {/* Navigation */}
      <Navbar
        toggleSidebar={() => setSidebarOpen((prev) => !prev)}
        isDark={isDark}
        toggleDark={toggleDark}
      />

      {/* Sidebar — mobile drawer + desktop collapsible */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        isExpanded={sidebarExpanded}
        onToggle={() => setSidebarExpanded((prev) => !prev)}
      />

      {/* Main Content sections matching HTML layout */}
      <main
        className={`flex-1 pt-20 transition-all duration-300 ease-in-out ${
          sidebarExpanded ? "lg:ml-64" : "lg:ml-16"
        }`}
      >
        <Hero />
        <Courses />
        <Stats />
        <Programs onOpenProgram={setSelectedProgram} />
        <Mentors />
        <Testimonials onOpenImage={setSelectedTestiImage} />
        <Tentang onOpenPanduan={() => setPanduanOpen(true)} />
        <CallToAction />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp — mobile only */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <div className="relative flex items-center justify-center">
          <div className="absolute pulse-ring w-16 h-16 bg-green-500 rounded-full"></div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer"
            href="https://wa.me/6281513092400"
            aria-label="Chat WhatsApp Admin"
          >
            <svg
              className="w-7 h-7 fill-white"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.4-11.3 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.5-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Program and general Modals */}
      <ProgramModal
        selectedProgram={selectedProgram}
        setSelectedProgram={setSelectedProgram}
        panduanOpen={panduanOpen}
        setPanduanOpen={setPanduanOpen}
        selectedTestiImage={selectedTestiImage}
        setSelectedTestiImage={setSelectedTestiImage}
      />
    </div>
  );
}
