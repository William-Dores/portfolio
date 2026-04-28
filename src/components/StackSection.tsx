import { stacks } from '../data/portfolioData'

export function StackSection() {
  return (
    <section
      id="stacks"
      className="max-w-7xl mx-auto px-6 py-20"
    >
      <h2 className="text-5xl font-bold mb-12">
        Stacks
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stacks.map((stack) => (
          <div
            key={stack}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center"
          >
            {stack}
          </div>
        ))}
      </div>
    </section>
  )
}