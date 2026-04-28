export function Header() {
    return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/20">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide">
          William Dores
        </h1>

        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#about" className="hover:text-cyan-400 transition">
            Sobre
          </a>

          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Projetos
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contato
          </a>
        </nav>
      </div>
    </header>
  )
}