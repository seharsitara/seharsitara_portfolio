"use client";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center md:items-center px-4 md:px-8 pb-16">
      <div className="w-full">
        <div className="flex items-center justify-center gap-4 mb-12 pt-24 md:pt-26 lg:pt-30 ">
          <span className="h-px w-16 md:w-24 bg-sky-300/70" />
          <span className="text-sky-300 font-bold mr-2 text-xl md:text-2xl">02.</span>
          <h2 className="text-xl md:text-2xl font-semibold whitespace-nowrap">About Me</h2>
          <span className="h-px w-16 md:w-24 bg-sky-300/70" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8 items-start md:items-start">
        <div className="mx-auto md:mx-auto">
          <div className="h-32 w-32 md:h-42 md:w-42 rounded-full overflow-hidden ring-1 ring-white/20 shadow-sm">
            <img
              src="/seharprofile.jpg"
              alt="Sehar Sitara profile"
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <p className="mt-2 font-bold text-xl md:text-2xl text-sky-300"> Hey, I'm Sehar.</p>
        <p className="text-white/85 leading-relaxed text-base md:text-lg text-start md:text-left">
         I’m a <b className="text-sky-300">frontend developer</b> passionate about creating clean, responsive, and accessible user interfaces that combine thoughtful design with reliable performance. I enjoy exploring where design and code meet, transforming ideas into seamless, visually appealing web experiences that feel intuitive for every user.
        <br></br>
         Currently, I’m in my fourth year at University of Education, pursuing a <b className="text-sky-300">Bachelor’s degree in Computer Science</b>. sharpening my technical skills and design sensibilities through academic projects and personal work. My goal is to craft interfaces that not only look great but also follow best practices in usability, performance, and accessibility to provide an inclusive experience for all.
        </p>
        </div>
      </div>
    </section>
  );
}


