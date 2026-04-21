function About() {
  return (
    <section id="about" className=" flex items-center relative">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-10">
        {/* Title */}
<<<<<<< HEAD
        <h2 className="font-nabla text-2xl sm:text-3xl text-center">
=======
        <h2 className="font-display text-2xl sm:text-3xl text-center">
>>>>>>> fix-font
          A little bit about me...
        </h2>

        {/* Card */}
        <div className="mt-10 rounded-3xl  p-6 sm:p-10">
          <div className="max-w-prose mx-auto text-center">
            <div className="space-y-5 text-[var(--text-muted)] text-base sm:text-lg leading-relaxed">
              <p className="text-stone-800 font-medium">
                I’m a full-stack developer who enjoys building software that’s
                both <span className="text-stone-900">well-structured</span>{" "}
                and <span className="text-stone-900">pleasant to use</span>.
              </p>

              <p>
                I work across the stack using{" "}
                <span className="text-stone-900 font-medium">
                  React, TypeScript, Node.js, and PostgreSQL
                </span>
                , and I enjoy thinking about how technical decisions impact real
                users.
              </p>

              <p>
                From data modeling to UI details, I like seeing a product come
                together as a complete system. I recently graduated and am
                excited to keep learning, contribute meaningfully, and grow
                alongside a collaborative engineering team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
