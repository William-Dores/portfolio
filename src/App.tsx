import { useState } from 'react'

const skills = [
  'React',
  'TypeScript',
  'Django',
  'AWS',
  'Linux',
  'PostgreSQL',
  'Cybersecurity',
  'Docker'
]

const projects = [
  {
    title: 'Sistema de Controle Pessoal',
    description:
      'Aplicação full stack para controle financeiro, treinos e gerenciamento pessoal.',
    stack: 'React • Django • PostgreSQL • AWS'
  },
  {
    title: 'Infraestrutura & Cloud',
    description:
      'Projetos envolvendo Linux, redes, cloud computing e segurança.',
    stack: 'Linux • AWS • Docker'
  },
  {
    title: 'Frontend Moderno',
    description:
      'Interfaces responsivas com foco em performance e experiência do usuário.',
    stack: 'React • Tailwind • TypeScript'
  }
]

function Header() {
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

function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-20 items-center">
      <div>
        <p className="text-cyan-400 text-lg mb-5 font-medium">
          Desenvolvedor Full Stack
        </p>

        <h2 className="text-6xl md:text-7xl font-black leading-tight mb-8">
          Construindo soluções modernas para web e cloud.
        </h2>

        <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mb-10">
          Desenvolvedor focado em React, Django, AWS e infraestrutura.
          Apaixonado por tecnologia, cloud computing e desenvolvimento de
          aplicações escaláveis.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-7 py-4 rounded-2xl transition duration-300 shadow-lg shadow-cyan-500/20"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="border border-white/15 hover:border-cyan-400 hover:bg-cyan-400/10 px-7 py-4 rounded-2xl transition duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>

        <div className="relative bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-xl shadow-2xl">
          <div className="space-y-8">
            <div>
              <p className="text-gray-400 mb-2">Experiência</p>
              <h3 className="text-3xl font-bold">+10 anos em TI</h3>
            </div>

            <div>
              <p className="text-gray-400 mb-2">Especialidades</p>
              <h3 className="text-2xl font-semibold leading-relaxed">
                Desenvolvimento Web • Cloud • Infraestrutura • Segurança
              </h3>
            </div>

            <div>
              <p className="text-gray-400 mb-2">Localização</p>
              <h3 className="text-2xl font-semibold">
                Florianópolis - SC
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-white/5 border border-white/10 rounded-[32px] p-12 backdrop-blur-xl">
        <h2 className="text-5xl font-bold mb-8">
          Sobre Mim
        </h2>

        <p className="text-gray-300 text-xl leading-relaxed max-w-4xl">
          Trabalho com tecnologia desde os 15 anos e desenvolvi experiência
          em desenvolvimento, Linux, infraestrutura, banco de dados,
          segurança da informação e cloud computing. Atualmente foco meus
          estudos em aplicações modernas utilizando React, TypeScript,
          Django e AWS.
        </p>
      </div>
    </section>
  )
}

function SkillsSection() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-5xl font-bold">
          Skills
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-400/5 rounded-3xl p-8 text-center transition duration-300"
          >
            <p className="font-semibold text-lg">
              {skill}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function ProjectsCarousel() {
  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const previousProject = () => {
    setCurrentProject((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    )
  }

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-center justify-between mb-14">
        <h2 className="text-5xl font-bold">
          Projetos
        </h2>

        <div className="flex gap-3">
          <button
            onClick={previousProject}
            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 hover:bg-cyan-400 hover:text-black transition"
          >
            ←
          </button>

          <button
            onClick={nextProject}
            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 hover:bg-cyan-400 hover:text-black transition"
          >
            →
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="bg-white/5 border border-white/10 hover:border-cyan-400/30 rounded-[32px] p-10 transition duration-300 backdrop-blur-xl min-h-[320px] flex flex-col justify-between">
          <div>
            <div className="text-cyan-400 mb-4 text-sm font-medium">
              Projeto {currentProject + 1}
            </div>

            <h3 className="text-4xl font-bold mb-6">
              {projects[currentProject].title}
            </h3>

            <p className="text-gray-300 leading-relaxed text-xl mb-10 max-w-3xl">
              {projects[currentProject].description}
            </p>
          </div>

          <div className="flex items-center justify-between gap-6 flex-wrap">
            <div className="text-cyan-400 font-medium text-lg">
              {projects[currentProject].stack}
            </div>

            <div className="flex gap-2">
              {projects.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentProject === index
                      ? 'w-10 bg-cyan-400'
                      : 'w-2 bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[32px] p-12 text-black shadow-2xl shadow-cyan-500/10">
        <h2 className="text-5xl font-black mb-5">
          Vamos conversar.
        </h2>

        <p className="text-xl mb-10 max-w-2xl">
          Aberto para oportunidades, networking e novos desafios na área de
          desenvolvimento e cloud.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:seuemail@email.com"
            className="bg-black hover:bg-slate-900 text-white px-8 py-4 rounded-2xl font-semibold transition"
          >
            Entrar em contato
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            className="bg-white hover:bg-slate-200 px-8 py-4 rounded-2xl font-semibold transition"
          >
            Ver GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 mt-10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-center text-gray-400 text-sm">
        <p>
          © 2026 William Dores. Todos os direitos reservados.
        </p>

       
      </div>
    </footer>
  )
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.15),transparent_40%)]"></div>

      <Header />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsCarousel />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
