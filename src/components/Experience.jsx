import { experiences } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-[var(--color-border)]">
      <div className="max-w-portfolio mx-auto px-6">
        {/* Section Header */}
        <div className="section-reveal mb-12">
          <h2 className="text-xs font-medium tracking-widest uppercase text-[var(--color-text-tertiary)] mb-3">
            Experience
          </h2>
          <p className="text-2xl sm:text-3xl font-bold tracking-tight">
            Where I've Worked
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`section-reveal relative pl-8 pb-12 ${
                i < experiences.length - 1 ? '' : 'pb-0'
              } ${exp.minor ? 'opacity-60' : ''}`}
            >
              {/* Timeline dot + line */}
              {i < experiences.length - 1 && <div className="timeline-line" />}
              <div className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 ${
                exp.featured
                  ? 'bg-[var(--color-primary)] border-[var(--color-primary)]'
                  : 'bg-[var(--color-surface)] border-[var(--color-border-secondary)]'
              }`} />

              {/* Content */}
              <div>
                <h3 className={`font-semibold ${exp.minor ? 'text-base' : 'text-lg'}`}>
                  {exp.title}
                </h3>
                {exp.company && (
                  <p className="text-sm text-[var(--color-text-secondary)] mt-0.5">
                    {exp.company}
                  </p>
                )}
                <p className="text-sm text-[var(--color-text-tertiary)] mt-1">
                  {exp.date}
                </p>
                {exp.description && (
                  <p className="text-sm text-[var(--color-text-secondary)] mt-3 leading-relaxed max-w-2xl">
                    {exp.description}
                  </p>
                )}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <ul className="mt-4 space-y-1.5">
                    {exp.responsibilities.map((r, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--color-text-tertiary)] shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                )}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-pill text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
