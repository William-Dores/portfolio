import { skills } from '../data/portfolioData'

export function SkillSection() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-20"
    >
      <h2 className="text-5xl font-bold mb-12">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}