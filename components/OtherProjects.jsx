"use client";
import { Github, ExternalLink } from "lucide-react";

const OTHER_PROJECTS = [
  {
    title: "Weather Widget",
    description:
      "A simple application where users can enter a city name to view its current weather, including temperature, humidity, and wind speed.",
    tech: ["HTML", "CSS", "JS"],
    githubUrl: "https://github.com/seharsitara/weather-app",
    liveUrl: "https://weather-app-js-blush.vercel.app/",
  },
  {
    title: "ToDo-List App",
    description:
      "A simple task manager that lets users add, edit, and delete tasks to stay organized and productive.",
    tech: ["HTML", "CSS", "JS"] ,
    githubUrl: "https://github.com/seharsitara/todolist-app",
    liveUrl: "https://todolist-app-five-pi.vercel.app/",
  },
  {
    title: "QuizApp",
    description:
      "A basic quiz application that asks question to the user, records their answers, and shows the final result at the end.",
    tech: ["HTML", "CSS", "JS"],
    githubUrl: "https://github.com/seharsitara/quiz-app",
    liveUrl: "https://quiz-app-seven-alpha-13.vercel.app/",
  },
  
  
  
];

export default function OtherProjects() {
  return (
    <section id="other-projects" className="mt-24 px-4 md:px-8 scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-16">
      {/* Heading styled like Projects/About */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <span className="h-px w-16 md:w-24 bg-sky-300/70" />
        <h2 className="text-xl md:text-2xl font-semibold whitespace-nowrap text-white">
          Other Projects
        </h2>
        <span className="h-px w-16 md:w-24 bg-sky-300/70" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {OTHER_PROJECTS.map((proj) => (
          <article
            key={proj.title}
            className="border border-sky-300 rounded-md  p-5 shadow-sm transition-transform duration-200 hover:scale-[1.02]"
          >
            <h3 className="text-white font-semibold text-lg md:text-xl">
              {proj.title}
            </h3>
            <p className="mt-2 text-white/85 text-sm md:text-base">
              {proj.description}
            </p>

            <div className="mt-4 flex items-center gap-5">
              {proj.githubUrl && (
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-sky-300 transition-colors text-sm"
                >
                  <Github className="h-4 w-4" /> 
                </a>
              )}
              {proj.liveUrl && (
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-sky-300 transition-colors text-sm"
                >
                  <ExternalLink className="h-4 w-4" /> 
                </a>
              )}
            </div>

            <ul className="mt-4 flex flex-wrap gap-3 text-sky-300 text-xs">
              {proj.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}


