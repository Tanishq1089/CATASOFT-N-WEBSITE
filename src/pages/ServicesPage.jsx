import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import PillBadge from '../components/PillBadge'

const services = [
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
    title: 'AVEVA E3D & AIM',
    desc: 'Our AVEVA E3D services cover the full spectrum of 3D plant design including structural modeling, piping layout, equipment placement, HVAC systems, and cable tray routing. We create clash-free, fully coordinated 3D models that integrate seamlessly with your project data, ensuring accuracy from concept through to construction. Our team leverages AVEVA Information Management (AIM) for centralized data governance and document control.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>,
    title: 'SPPID & SPF (Smart P&ID)',
    desc: 'We create intelligent, data-driven Process & Instrumentation Diagrams using AVEVA SPPID and Smart PFD. Our diagrams are fully synchronized with 3D models and engineering data registers, ensuring consistency across all project deliverables. From process flow diagrams to detailed P&IDs, we maintain complete data integrity and traceability throughout the project lifecycle.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: 'AVEVA Engineering & E&I',
    desc: 'We manage comprehensive engineering data using AVEVA Engineering and AVEVA Electrical & Instrumentation platforms. Our services include creating and maintaining tag registers, cable schedules, instrument indexes, equipment lists, and signal lists — all with full traceability and audit compliance. We ensure your engineering data is structured, accurate, and accessible across disciplines.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>,
    title: '2D Drafting & 3D Modeling',
    desc: 'Our drafting team produces high-quality layout drawings, piping isometrics, general arrangement drawings, structural details, and as-built documentation. We work in both 2D and 3D environments, delivering precise engineering drawings that meet international standards and client specifications. Every deliverable undergoes rigorous quality checks before submission.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    title: 'Automation & Customization',
    desc: 'We develop custom macros, automated workflows, bespoke catalogues, and specialized plugins to accelerate your engineering processes. Whether it is automating repetitive tasks in AVEVA E3D, creating custom report generators, or building tailored tools for your specific workflow, our automation services help your team work faster and with fewer errors.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    title: 'MicroStation & AutoCAD',
    desc: 'We provide comprehensive civil layout drafting and mechanical drawing services using Bentley MicroStation and Autodesk AutoCAD. Our deliverables are compatible across global engineering teams and adhere to client-specific CAD standards. From site plans to detailed mechanical assemblies, we ensure consistency and precision in every drawing.',
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

      {/* Service Rows */}
      <section className="pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="fade-up border border-border-color rounded-xl p-8 md:p-10 flex flex-col md:flex-row gap-6 hover:border-primary transition-all duration-300 hover:-translate-y-0.5"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center text-white">
                  {s.icon}
                </div>
              </div>
              <div>
                <h3 className="font-urbanist font-semibold text-xl text-text-primary mb-3">{s.title}</h3>
                <p className="text-text-secondary leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
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
