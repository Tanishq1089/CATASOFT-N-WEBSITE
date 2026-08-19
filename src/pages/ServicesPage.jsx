import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import PillBadge from '../components/PillBadge'

const services = [
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    title: 'IT Solutions',
    desc: 'Comprehensive IT services and consulting tailored for industrial and engineering enterprises. Our expertise covers software integration, server management, databases, and secure data storage solutions.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
    title: 'Detail Engineering & Design Services',
    desc: 'End-to-end detail engineering using industry-leading 3D plant design and 2D drafting systems. We deliver complete structural modeling, piping layouts, HVAC layouts, and clash-free designs.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H18.5" /></svg>,
    title: 'Conversion Services',
    desc: 'Specialized services for legacy drawing digitization, format conversion, and migration between different design databases. We convert PDF drawings, paper sketches, and 2D layouts into intelligent 3D models.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    title: 'Automation & Customization',
    desc: 'Bespoke software automation, custom macro development, plugin development, and workflow optimizations for AVEVA, MicroStation, and AutoCAD to accelerate design speed and eliminate human error.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
    title: 'Animation & Design',
    desc: 'High-fidelity 3D rendering, walkthrough animations, structural visualizations, and interactive engineering fly-throughs for project presentations, safety reviews, and client approvals.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-7.824-3.058 12.08 12.08 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>,
    title: 'Training Services',
    desc: 'Professional, hands-on training courses led by certified engineers for AVEVA E3D, SPPID, MicroStation, and custom macro development to upgrade your engineering team\'s design capabilities.',
  },
]

export default function ServicesPage() {
  useScrollReveal()

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <PillBadge className="mb-4">Our Services</PillBadge>
          <h1 className="font-urbanist font-bold text-4xl md:text-5xl lg:text-[56px] leading-[1.1] text-text-primary mb-4">
            Industrial Engineering Software Expertise
          </h1>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Comprehensive engineering software services covering the full project lifecycle — from concept design to as-built documentation.
          </p>
        </div>
      </section>

      {/* Service Rows - 2 Columns Layout */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="fade-up border border-border-color rounded-xl p-8 flex gap-6 hover:border-primary transition-all duration-300 hover:-translate-y-0.5 bg-white"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center text-white">
                    {s.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-urbanist font-semibold text-xl text-text-primary mb-3">{s.title}</h3>
                  <p className="text-text-secondary leading-relaxed text-sm md:text-base">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-off-white">
        <div className="max-w-4xl mx-auto px-6 text-center fade-up">
          <h2 className="font-urbanist font-semibold text-3xl md:text-[40px] leading-tight text-text-primary mb-4">
            Have a project in mind?
          </h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Let us discuss how our engineering expertise can support your next project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-[26px] py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary-hover transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
