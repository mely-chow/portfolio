function Home() {
  return (
    <section
      id="home"
      className="min-h-svh md:min-h-screen scroll-mt-24 flex items-center relative"
    >
      <div className="mx-auto flex flex-col gap-5 px-6 text-(--text) relative">
        <p className="text-(--text-muted)">Hi! I'm</p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl mb-4 font-display hero-name-accent hero-name-bounce">
          MELISSA CHOW
        </h1>

        <h2 className="text-stone-800 font-semibold">
          Full-Stack Web Developer.
        </h2>
        <p className="text-(--text-muted) max-w-lg">
          focused on scalable systems, clean UX, and real-world business tools.
        </p>
      </div>
    </section>
  );
}

export default Home;
