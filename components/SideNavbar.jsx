"use client";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function SideNavbar() {
  const navItems = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const [activeId, setActiveId] = useState(navItems[0]?.id ?? "about");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = useCallback((sectionId) => {
    setActiveId(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const homeEl = document.getElementById("home");
        const homeBottom = homeEl
          ? homeEl.getBoundingClientRect().bottom
          : Number.POSITIVE_INFINITY;

        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          if (!id) return;

          // Special handling for About: only activate when past Home and 80% in view
          if (id === "about") {
            const isPastHome = homeBottom <= 0;
            if (isPastHome && entry.intersectionRatio >= 0.8) {
              setActiveId("about");
            } else if (!isPastHome) {
              // Keep Home active while not fully past it
              setActiveId("home");
            }
            return;
          }

          // For skills: require more visibility to avoid showing overlap with about
          if (id === "skills") {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
              setActiveId("skills");
            }
            return;
          }

          // Keep Home active only while it's still on screen
          if (id === "home") {
            if (entry.isIntersecting && homeBottom > 0) {
              setActiveId("home");
            }
            return;
          }

          // Default behavior for other sections
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            setActiveId(id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.4, 0.8, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navItems]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalBodyOverflow = document.body.style.overflow;
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      return () => {
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.overflow = originalBodyOverflow;
      };
    }
    return undefined;
  }, [mobileOpen]);

  const baseItemClass =
    "block py-2 text-md transition-opacity hover:opacity-100";

  return (
    <>
      {/* Desktop logo (top-left) */}
      <div className="hidden lg:flex fixed top-4 left-12 z-[80] items-center gap-2">
        <a href="#home" className="flex items-center gap-2">
          <img src="/seharlogo%20(2).png" alt="Logo" className="h-12 w-12 rounded-full object-cover" />
        </a>
      </div>

      {/* Desktop Resume button (top-right) */}
      <div className="hidden lg:flex fixed top-6 right-12 z-[80]">
        <a
          href="/sehar-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View full resume (opens in new tab)"
          className="inline-flex items-center justify-center rounded-md border border-sky-300 text-sky-300 px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-sky-300/10 focus:outline-none focus:ring-2 focus:ring-sky-300/50 focus:ring-offset-2"
        >
          Resume
        </a>
      </div>
      {/* Mobile/Tablet top bar with logo + menu button */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-[90]">
        <div className="flex items-center justify-between px-4 py-3">
          <a href="#home" className="flex items-center gap-2">
            <img src="/seharlogo%20(2).png" alt="Logo" className="h-8 w-8 rounded-full object-cover" />
          </a>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-controls="mobile-nav"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className="p-2 rounded hover:bg-white/10"
          >
            {/* Hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 text-white"
            >
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div id="mobile-nav" className="fixed inset-0 z-[95] bg-black/90">
            <div className="flex items-center justify-between px-4 py-4">
              <a href="#home" className="flex items-center gap-2">
                <img src="/seharlogo%20(2).png" alt="Logo" className="h-8 w-8 rounded-full object-cover" />
              </a>
              <button
                type="button"
                aria-label="Close navigation"
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded hover:bg-white/10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white">
                  <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <ul className="mt-8 flex flex-col items-center gap-6 px-6">
              {navItems.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id} className="group">
                    <button
                      type="button"
                      onClick={() => {
                        handleClick(item.id);
                        setMobileOpen(false);
                      }}
                      className={[
                        baseItemClass,
                        "text-2xl font-medium",
                        isActive ? "text-sky-300 opacity-100" : "opacity-80",
                      ].join(" ")}
                    >
                      {item.label}
                    </button>
                    <div
                      className={[
                        "mt-2 h-px w-24 transition-colors",
                        isActive ? "bg-sky-300/80" : "bg-white/40 group-hover:bg-sky-300/70",
                      ].join(" ")}
                    />
                  </li>
                );
              })}
            </ul>
            <div className="mt-8 flex justify-center px-6">
              <a
                href="/sehar-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View full resume (opens in new tab)"
                className="inline-flex items-center justify-center rounded-md border border-sky-300 text-sky-300 px-5 py-2.5 text-base font-medium transition-colors duration-200 hover:bg-sky-300/10 focus:outline-none focus:ring-2 focus:ring-sky-300/50 focus:ring-offset-2"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Desktop left vertical nav (lg and above) */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 p-8 md:ml-8">
        <nav className="w-full h-full flex flex-col justify-center bg-transparent">
          <ul className="w-full space-y-3">
            {navItems.map((item, index) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id} className="group font-medium pb-2">
                  <button
                    type="button"
                    onClick={() => handleClick(item.id)}
                    className="w-full text-left flex items-center"
                  >
                    <span className="w-6 text-sky-300 font-bold text-sm">{index + 1}.</span>
                    <span className={[
                      "transition-colors",
                      isActive ? "text-sky-300" : "text-white hover:text-sky-300",
                    ].join(" ")}>{item.label}</span>
                  </button>
                  <div
                    className={[
                      "mt-1 h-px w-24 md:w-36 transition-colors",
                      isActive ? "bg-sky-300/80" : "bg-white/30 group-hover:bg-sky-300/60",
                    ].join(" ")}
                  />
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
