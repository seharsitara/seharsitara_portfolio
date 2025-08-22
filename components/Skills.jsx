"use client";
import {
  Code2,
  Palette,
  Braces,
  Atom,
  Wind,
  Layers,
  Type,
  Database,
  GitBranch,
  Github,
} from "lucide-react";

const skills = [
  { name: "HTML", Icon: Code2 },
  { name: "CSS", Icon: Palette },
  { name: "JavaScript", Icon: Braces },
  { name: "React", Icon: Atom },
  { name: "Tailwind CSS", Icon: Wind },
  { name: "Next.js", Icon: Layers },
  { name: "TypeScript", Icon: Type },
  { name: "Supabase", Icon: Database },
  { name: "Git", Icon: GitBranch },
  { name: "GitHub", Icon: Github },
];

export default function Skills() {
  return (
    <section id="skills" className="px-4 md:px-8 min-h-screen flex flex-col items-center justify-center md:pb-24 lg:pb-12">
      <div className="w-full max-w-screen-lg mx-auto">
        {/* Heading styled like About */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="h-px w-16 md:w-24 bg-sky-300/70" />
          <span className="text-sky-300 font-bold mr-2 text-xl md:text-2xl">03.</span>
          <h2 className="text-xl md:text-2xl font-semibold whitespace-nowrap">Skills</h2>
          <span className="h-px w-16 md:w-24 bg-sky-300/70" />
        </div>

        <p className="text-white/85 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto mb-10">
          Here are the technologies and tools I work with to design and develop modern, responsive, and efficient web applications.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 sm:gap-6 md:gap-8">
          {skills.map(({ name, Icon }) => (
            <div key={name} className="flex flex-col items-center">
              <Icon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-sky-300 mb-3" aria-hidden />
              <span className="text-sm sm:text-base md:text-lg text-white/90 text-center">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


