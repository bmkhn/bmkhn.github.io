import { education } from '../data/education'

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-[var(--color-border)]">
      <div className="max-w-portfolio mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 md:gap-16">
          {/* Label */}
          <div className="section-reveal">
            <h2 className="text-xs font-medium tracking-widest uppercase text-[var(--color-text-tertiary)]">
              Education
            </h2>
          </div>

          {/* Content */}
          <div className="section-reveal">
            {education.map((edu, i) => (
              <div key={i} className="space-y-3">
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <p className="text-[var(--color-text-secondary)]">{edu.institution}</p>
                <div className="flex items-center gap-3 text-sm text-[var(--color-text-tertiary)]">
                  <span>{edu.date}</span>
                  {edu.gwa && (
                    <>
                      <span>·</span>
                      <span>GWA: <strong className="text-[var(--color-text-primary)]">{edu.gwa}</strong></span>
                    </>
                  )}
                </div>
                {edu.description && (
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mt-2">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
