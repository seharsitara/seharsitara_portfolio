"use client";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "Github Finder",
    description:
      "A React + Tailwind web app to search GitHub users and view their profiles, repos, and stats using the GitHub API.",
    tech: ["React", "Tailwind", "Github API"],
    imageSrc: "/project11.png",
    githubUrl: "https://github.com/seharsitara/Github-Finder",
    externalUrl: "https://github-finder-bwik.vercel.app/",
  },
  {
    title: "Movie App",
    description:
      " A movie management app where users can save, search, delete, and filter movies by genre. Built with React using local state management, reusable components, and a responsive Tailwind CSS UI",
    tech: ["React", "Tailwind", "Vite"],
    imageSrc: "/project2.png",
    githubUrl: "https://github.com/seharsitara/MovieApp-using-react",
    externalUrl: "https://movie-app-using-react-uko9.vercel.app/movies",
  },
  {
    title: "Food App",
    description:
      "Interactive dashboard with charts and metrics, supporting dark mode and smooth transitions for a better user experience.",
    tech: ["Next.js", "React.js", "Tailwind", "Supabase"],
    imageSrc: "/project3.png",
    githubUrl: "#",
    externalUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-16 md:py-20 px-4 md:px-8">
      <div className="w-full max-w-screen-lg mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="h-px w-16 md:w-24 bg-sky-300/70" />
          <h2 className="text-xl md:text-2xl font-semibold whitespace-nowrap">
            <span className="text-sky-300 font-bold mr-2">04.</span>
            <span className="text-white">Some Things I've Built</span>
          </h2>
          <span className="h-px w-16 md:w-24 bg-sky-300/70" />
        </div>
        
        {/* Section Description */}
        <p className="text-white/85 text-base md:text-lg text-center max-w-3xl mx-auto mb-16">
          Here are some of the applications I've built. Each project is fully responsive, ensuring a seamless experience on all devices.
        </p>

        {/* Projects Grid */}
        <div className="space-y-20 md:space-y-24">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 1;
            return (
              <article
                key={project.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Project Image */}
                <div
                  className={[
                    "group overflow-hidden rounded-lg shadow-lg shadow-black/30",
                    isEven ? "lg:col-span-6 lg:order-2" : "lg:col-span-6 lg:order-1",
                  ].join(" ")}
                >
                  {project.imageSrc.endsWith(".svg") ? (
                    <img
                      src={project.imageSrc}
                      alt={project.title}
                      className="w-full h-auto max-h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      width={1200}
                      height={800}
                      className="w-full h-auto max-h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>

                {/* Project Content */}
                <div
                  className={[
                    "lg:col-span-6",
                    isEven ? "lg:order-1" : "lg:order-2",
                    "text-center lg:text-left",
                  ].join(" ")}
                >
                  <p className="text-sky-300 text-xs md:text-sm uppercase tracking-wide mb-3">
                    Featured Project
                  </p>
                  <h3 className="text-white font-semibold text-xl md:text-2xl lg:text-3xl mb-4">
                    {project.title}
                  </h3>
                  <div className="bg-white/5 rounded-lg shadow-sm p-6 text-white/85 text-sm md:text-base mb-6">
                    {project.description}
                  </div>
                  <ul className="flex flex-wrap justify-center lg:justify-start gap-3 text-sky-300 text-xs md:text-sm mb-6">
                    {project.tech.map((tech) => (
                      <li key={tech} className="bg-sky-300/10 px-3 py-1 rounded-full">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4 justify-center lg:justify-start">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub`}
                        className="text-white/80 hover:text-sky-300 transition-colors p-2 hover:bg-white/5 rounded-lg"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.externalUrl && (
                      <a
                        href={project.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} External link`}
                        className="text-white/80 hover:text-sky-300 transition-colors p-2 hover:bg-white/5 rounded-lg"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}


