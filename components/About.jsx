"use client";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-16 md:py-20 px-4 md:px-8">
      <div className="w-full max-w-screen-lg mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="h-px w-16 md:w-24 bg-sky-300/70" />
          <span className="text-sky-300 font-bold mr-2 text-xl md:text-2xl">02.</span>
          <h2 className="text-xl md:text-2xl font-semibold whitespace-nowrap">About Me</h2>
          <span className="h-px w-16 md:w-24 bg-sky-300/70" />
        </div>

        {/* Content - Vertical layout for all screens */}
        <div className="flex flex-col items-center gap-8 lg:gap-12">
          {/* Profile Image - Centered */}
          <div className="flex justify-center">
            <div className="h-40 w-40 md:h-48 md:w-48 lg:h-52 lg:w-52 rounded-full overflow-hidden ring-2 ring-sky-300/20 shadow-lg">
              <img
                src="/seharprofile.jpg"
                alt="Sehar Sitara profile"
                className="h-full w-full object-cover rounded-full"
                style={{ borderRadius: '50%' }}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-start max-w-3xl">
            <p className="font-bold text-2xl md:text-3xl lg:text-4xl text-sky-300 mb-6">
              Hey, I'm Sehar.
            </p>
            <div className="space-y-4 text-white/85 leading-relaxed text-base md:text-lg">
              <p>
                I'm a <b className="text-sky-300">frontend developer</b> passionate about creating clean, responsive, and accessible user interfaces that combine thoughtful design with reliable performance. I enjoy exploring where design and code meet, transforming ideas into seamless, visually appealing web experiences that feel intuitive for every user.
              </p>
              <p>
                Currently, I'm in my fourth year at University of Education, pursuing a <b className="text-sky-300">Bachelor's degree in Computer Science</b>. I'm sharpening my technical skills and design sensibilities through academic projects and personal work. My goal is to craft interfaces that not only look great but also follow best practices in usability, performance, and accessibility to provide an inclusive experience for all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


