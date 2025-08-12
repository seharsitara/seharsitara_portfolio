"use client";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className=" px-4 md:px-8 min-h-screen flex flex-col items-center justify-center "
    >
      {/* Heading styled like About/Projects */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <span className="h-px w-16 md:w-24 bg-sky-300/70" />
        <h2 className="text-xl md:text-2xl font-semibold whitespace-nowrap text-white">
          Get In Touch
        </h2>
        <span className="h-px w-16 md:w-24 bg-sky-300/70" />
      </div>

      <p className="text-white/85 text-base md:text-lg text-center max-w-2xl mx-auto">
        I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out through any of the links below — I’d be happy to connect.
      </p>

      <div className="mt-8 flex items-center justify-center gap-6 md:gap-8">
        <a
          href="https://www.linkedin.com/in/sehar-sitara-7ba876325/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-white/80 hover:text-sky-300 transition-colors"
        >
          <Linkedin className="h-7 w-7" />
        </a>
        <a
          href="https://github.com/seharsitara"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-white/80 hover:text-sky-300 transition-colors"
        >
          <Github className="h-7 w-7" />
        </a>
        <a
          href="mailto:seharsitara12@gmail.com"
          aria-label="Email"
          className="text-white/80 hover:text-sky-300 transition-colors"
        >
          <Mail className="h-7 w-7" />
        </a>
        <a
          href="https://www.instagram.com/_seharsitara_?igsh=MW00ejJjdWpveHc4NQ%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-white/80 hover:text-sky-300 transition-colors"
        >
          <Instagram className="h-7 w-7" />
        </a>
      </div>
    </section>
  );
}


