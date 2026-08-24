import { certifications } from '../data/certifications'

export default function Certifications() {
  if (!certifications || certifications.length === 0) return null

  return (
    <section id="certifications" className="py-24 border-t border-[var(--color-border)]">
      <div className="max-w-portfolio mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 md:gap-16">
          {/* Label */}
          <div className="section-reveal">
            <h2 className="text-xs font-medium tracking-widest uppercase text-[var(--color-text-tertiary)]">
              Certifications
            </h2>
          </div>

          {/* Content */}
          <div className="section-reveal">
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] ${
                    cert.credentialUrl ? 'hover:border-[var(--color-border-secondary)] transition-colors' : ''
                  }`}
                >
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <CertContent cert={cert} />
                    </a>
                  ) : (
                    <CertContent cert={cert} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CertContent({ cert }) {
  return (
    <div>
      <h3 className="text-sm font-semibold">{cert.name}</h3>
      <p className="text-sm text-[var(--color-text-secondary)] mt-0.5">
        {cert.issuer} · {cert.date}
      </p>
    </div>
  )
}
