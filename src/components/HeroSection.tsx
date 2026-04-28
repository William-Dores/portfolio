export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <p className="text-cyan-400 text-lg mb-5 font-medium">
        Desenvolvedor Full Stack
      </p>

      <h2 className="text-6xl md:text-7xl font-black leading-tight mb-8">
        Construindo soluções modernas para web.
      </h2>

      <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mb-10">
        Desenvolvedor focado em criar soluções WEB.
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href="https://github.com/William-Dores"
          target="_blank"
          className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-7 py-4 rounded-2xl transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/williamdorestkd/"
          target="_blank"
          className="border border-white/15 hover:border-cyan-400 px-7 py-4 rounded-2xl transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}