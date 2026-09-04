import { site } from '../data/site'

function Portrait({ name }) {
  return (
    <div className="section-reveal hidden md:block">
      <div className="relative">
        <div className="w-56 h-64 lg:w-64 lg:h-72 rounded-xl bg-[var(--color-surface-secondary)] border border-[var(--color-border)] overflow-hidden">
          <picture>
            <source srcSet="/images/profile/me.webp" type="image/webp" />
            <img
              src="/images/profile/me.jpg"
              alt={`${name} — portrait`}
              width="600"
              height="600"
              fetchpriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.parentElement.style.display = 'none' }}
            />
          </picture>
        </div>
        <div className="absolute -bottom-2 -right-2 w-full h-full rounded-xl border border-[var(--color-primary)]/20 -z-10" />
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Subtle grid texture */}
      <div className="absolute inset-0 grid-texture pointer-events-none" />
      
      <div className="max-w-portfolio mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
          {/* Left - Content */}
          <div className="section-reveal">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium tracking-widest uppercase text-[var(--color-text-tertiary)]">
                {site.title}
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4">
              {site.name}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] mb-6 font-medium">
              {site.subtitle}
            </p>

            {/* Description */}
            <p className="text-[var(--color-text-secondary)] max-w-lg mb-8 leading-relaxed">
              {site.heroDescription}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-primary)] text-white text-sm font-medium hover:bg-[var(--color-primary-hover)] transition-colors"
              >
                View Projects
              </a>
              {site.github && (
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-surface-secondary)] text-[var(--color-text-primary)] text-sm font-medium border border-[var(--color-border)] hover:border-[var(--color-border-secondary)] transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              )}
              {site.cvUrl && (
                <a
                  href={site.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-surface-secondary)] text-[var(--color-text-primary)] text-sm font-medium border border-[var(--color-border)] hover:border-[var(--color-border-secondary)] transition-colors"
                >
                  Download CV
                </a>
              )}
            </div>
          </div>

          {/* Right - Portrait (only shows if image exists) */}
          <Portrait name={site.name} />
        </div>
      </div>
    </section>
  )
}
