export function ContactSection() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-20"
    >
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[32px] p-12 text-black">
        <h2 className="text-5xl font-black mb-5">
          Vamos conversar.
        </h2>

        <p className="text-xl mb-10">
          Aberto para oportunidades e networking.
        </p>

        <a
          href="mailto:williamdores.s132@outlook.com"
          className="bg-black text-white px-8 py-4 rounded-2xl inline-block"
        >
          Entrar em contato
        </a>
      </div>
    </section>
  )
}