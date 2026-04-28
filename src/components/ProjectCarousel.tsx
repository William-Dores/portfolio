import { useState } from 'react'
import { projects } from '../data/portfolioData'

export function ProjectCarousel() {
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
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-20"
    >
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-5xl font-bold">
          Projetos
        </h2>

        <div className="flex gap-3">
          <button
            onClick={previousProject}
            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10"
          >
            ←
          </button>

          <button
            onClick={nextProject}
            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10"
          >
            →
          </button>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-[32px] p-10">
        <h3 className="text-4xl font-bold mb-6">
          {projects[currentProject].title}
        </h3>

        <p className="text-gray-300 text-xl leading-relaxed mb-8">
          {projects[currentProject].description}
        </p>

        <div className="text-cyan-400">
          {projects[currentProject].stack}
        </div>
      </div>
    </section>
  )
}