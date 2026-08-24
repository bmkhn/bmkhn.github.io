import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectDetail from './ProjectDetail'

export default function Projects() {
  const [selected, setSelected] = useState(null)

  const featured = projects.filter(p => p.category !== 'Personal Project')
  const personal = projects.filter(p => p.category === 'Personal Project')

  return (
    <section id="projects" className="py-24 border-t border-[var(--color-border)]">
      <div className="max-w-portfolio mx-auto px-6">
        {/* Section Header */}
        <div className="section-reveal mb-12">
          <h2 className="text-xs font-medium tracking-widest uppercase text-[var(--color-text-tertiary)] mb-3">
            Featured Work
          </h2>
          <p className="text-2xl sm:text-3xl font-bold tracking-tight">
            Selected Projects
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-6 mb-16">
          {featured.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelected(project)}
              featured={project.id === 'membership-system'}
            />
          ))}
        </div>

        {/* Personal Projects */}
        {personal.length > 0 && (
          <>
            <div className="section-reveal mb-8">
              <h2 className="text-xs font-medium tracking-widest uppercase text-[var(--color-text-tertiary)] mb-3">
                Personal Projects
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)]">
                Side projects and experiments
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personal.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelected(project)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Detail Modal */}
      {selected && (
        <ProjectDetail
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  )
}
