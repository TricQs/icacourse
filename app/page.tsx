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
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
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

  // Disable body scroll when any modal is open
  useEffect(() => {
    const anyModalOpen =
      selectedProgram !== null ||
      panduanOpen ||
      selectedTestiImage !== null;
    if (anyModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [selectedProgram, panduanOpen, selectedTestiImage]);

  return (
    <div className="bg-gray-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 flex flex-col min-h-full font-sans transition-colors duration-300 overflow-x-hidden">
      {/* Navigation */}
      <Navbar
        toggleSidebar={() => setSidebarExpanded((prev) => !prev)}
        isDark={isDark}
        toggleDark={toggleDark}
      />

      {/* Desktop Sidebar (hidden on mobile) */}
      <div className="hidden lg:block">
        <Sidebar isExpanded={sidebarExpanded} onToggle={() => setSidebarExpanded((prev) => !prev)} />
      </div>

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
