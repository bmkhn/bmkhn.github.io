export default function ProjectCard({ project, onClick }) {
  return (
    <article
      className="group relative rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden transition-all duration-300 hover:border-[var(--color-border-secondary)] cursor-pointer"
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick() }}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.title}`}
    >
      {/* Content */}
      <div className="p-6 sm:p-8">
        {/* Top row: category + status */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-medium tracking-wider uppercase text-[var(--color-text-tertiary)]">
            {project.type || project.category}
          </span>
          {project.status && (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {project.status}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors">
          {project.title}
        </h3>

        {/* Organization + Date */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[var(--color-text-tertiary)] mb-4">
          {project.organization && <span>{project.organization}</span>}
          {project.organization && project.date && <span>·</span>}
          <span>{project.date}</span>
        </div>

        {/* Description */}
        <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-5 max-w-2xl">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-pill text-xs">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3" onClick={(e) => e.stopPropagation()}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-primary)] text-white text-sm font-medium hover:bg-[var(--color-primary-hover)] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live Website
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-surface-secondary)] text-[var(--color-text-primary)] text-sm font-medium border border-[var(--color-border)] hover:border-[var(--color-border-secondary)] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Source Code
            </a>
          )}
          <button
            onClick={() => onClick()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            View Details →
          </button>
        </div>
      </div>
    </article>
  )
}
