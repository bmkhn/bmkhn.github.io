import { site } from '../data/site'

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-[var(--color-border)]">
      <div className="max-w-portfolio mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 md:gap-16">
          {/* Label */}
          <div className="section-reveal">
            <h2 className="text-xs font-medium tracking-widest uppercase text-[var(--color-text-tertiary)]">
              About
            </h2>
          </div>

          {/* Content */}
          <div className="section-reveal">
            <div className="max-w-2xl space-y-5">
              {site.about.map((paragraph, i) => (
                <p key={i} className="text-[var(--color-text-secondary)] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Focus Areas */}
            <div className="mt-10 pt-8 border-t border-[var(--color-border)]">
              <h3 className="text-xs font-medium tracking-widest uppercase text-[var(--color-text-tertiary)] mb-4">
                Focus
              </h3>
              <div className="flex flex-wrap gap-3">
                {site.focusAreas.map((area) => (
                  <span key={area} className="tech-pill">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
