function Home() {
  return (
    <section
      id="home"
      className="min-h-svh md:min-h-screen scroll-mt-24 flex items-center relative"
    >
      <div className="mx-auto flex flex-col gap-5 px-6 text-white relative">
        <p className="text-neutral-400">Hi! I'm</p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-semibold mb-4 font-nabla animate-bounce">
          Melissa Chow
        </h1>

        <h2 className="text-neutral-300 font-bold">
          Full-Stack Web Developer.
        </h2>
        <p className="text-neutral-400">
          focused on scalable systems, clean UX, and real-world business tools.
        </p>
      </div>
    </section>
  );
}

export default Home;
