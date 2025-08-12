"use client";
import Link from "next/link";
import SideNavbar from "./SideNavbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <SideNavbar />

      {/* Right Content */}
      <main className="w-full max-w-screen-lg mx-auto px-4 md:px-8 lg:ml-64">
        <section id="home" aria-labelledby="hero" className="min-h-screen flex flex-col justify-center  md:justify-center md:px-8 px-4">
          <h1 id="hero" className="text-4xl md:text-5xl font-semibold tracking-tight">
            Sehar Sitara
          </h1>
          <p className="mt-2 text-base md:text-lg font-bold text-sky-300/90 opacity-90">
            Junior Frontend developer
          </p>
          <p className="mt-4 max-w-2xl  font-extralight opacity-80
            md:text-lg text-white/90">
            I’m a passionate frontend developer who creates clean, user-friendly web experiences, turning ideas into engaging digital products through modern tools and thoughtful design.
          </p>

       {/*  <div className="mt-8">
            <a
              href="/sehar-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View full resume (opens in new tab)"
              className="mx-auto block md:inline-block inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-base font-medium text-white/90 hover:bg-[#FDF5AA] hover:text-black transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2"
            >
              View full resume
            </a>
          </div>*/}
        </section>

        <About />
        <Skills />
        <Projects />
        <section id="contact" className="mt-24"></section>
      </main>
    </div>
  );
}


