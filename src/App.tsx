export default function App() {
  const skills = [
    'React',
    'TypeScript',
    'Django',
    'AWS',
    'Linux',
    'PostgreSQL',
    'Cybersecurity',
    'Redes'
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-cyan-400 text-lg mb-4">
          Desenvolvedor Full Stack
        </p>

        <h1 className="text-6xl font-bold leading-tight mb-6">
          William Dores
        </h1>

        <p className="text-gray-300 text-xl max-w-3xl leading-relaxed mb-10">
         Colocar aqui uma breve descrição sobre mim, minhas paixões e o que me motiva como desenvolvedor.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="https://github.com/William-Dores"
            target="_blank"
            className="bg-cyan-500 text-black px-6 py-3 rounded-2xl font-semibold hover:opacity-90 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/williamdorestkd/"
            target="_blank"
            className="border border-white/20 px-6 py-3 rounded-2xl hover:bg-white/10 transition"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-cyan-500 text-black rounded-3xl p-10">
          <h2 className="text-4xl font-bold mb-4">
            Contato
          </h2>

          <p className="text-lg mb-6">
            Aberto para oportunidades e networking.
          </p>

          <a
            href="mailto:williamdores.s132@gmail.com"
            className="bg-black text-white px-6 py-3 rounded-2xl inline-block"
          >
            Enviar Email
          </a>
        </div>
      </section>
    </div>
  )
}