import { skillCategories } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-[var(--color-border)]">
      <div className="max-w-portfolio mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 md:gap-16">
          {/* Label */}
          <div className="section-reveal">
            <h2 className="text-xs font-medium tracking-widest uppercase text-[var(--color-text-tertiary)]">
              Skills
            </h2>
          </div>

          {/* Content */}
          <div className="section-reveal">
            <div className="space-y-8">
              {skillCategories.map((category) => (
                <div key={category.name}>
                  <h3 className="text-sm font-medium text-[var(--color-text-primary)] mb-3">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`tech-pill ${
                          skill.featured ? 'font-semibold text-[var(--color-text-primary)] border-[var(--color-border-secondary)]' : ''
                        }`}
                      >
                        {skill.featured && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mr-1.5 inline-block" />
                        )}
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
