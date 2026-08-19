import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import PillBadge from '../components/PillBadge'
import SectionHeading from '../components/SectionHeading'

const stats = [
  { value: 'Since 2019', label: 'Founded' },
  { value: 'Dubai, UAE', label: 'Headquarters' },
  { value: 'AVEVA Certified', label: 'Platform Expertise' },
]

const reasons = [
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: 'On Time Delivery',
    desc: 'We commit to strict deadlines and consistently deliver projects on schedule.',
  },
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: 'Budget Focused',
    desc: 'Cost-effective solutions without compromising on quality or precision.',
  },
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
    title: 'AVEVA Specialists',
    desc: 'Deep expertise across the full AVEVA platform suite including E3D, SPPID, and Engineering.',
  },
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: 'Marine & Process Experts',
    desc: 'Proven track record in offshore, onshore, and marine engineering projects worldwide.',
  },
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    title: 'Automation Ready',
    desc: 'Custom macros, plugins, and workflow automation to accelerate your engineering output.',
  },
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: 'Dubai Based',
    desc: 'Strategically located in Dubai, UAE to serve clients across the Middle East and globally.',
  },
]

export default function AboutPage() {
  useScrollReveal()

  return (
    <>
      {/* Story */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-text-secondary leading-relaxed text-base md:text-lg">
          <p className="fade-up">
            Catasoft Solutions FZCO was registered in Dubai, UAE in January 2019 with a clear mission: to provide world-class industrial engineering software services to the process, power, and marine industries.
          </p>
          <p className="fade-up" style={{ transitionDelay: '80ms' }}>
            As AVEVA specialists, we bring deep platform expertise across E3D, SPPID, SPF, AVEVA Engineering, and AVEVA E&I. Our team of experienced engineers delivers comprehensive detail engineering, 3D modeling, and drafting solutions that meet the highest standards of quality and compliance.
          </p>
          <p className="fade-up" style={{ transitionDelay: '160ms' }}>
            From concept to commissioning, we partner with EPC contractors and owner-operators to deliver projects that are on time, within budget, and built to last. Our commitment to continuous improvement and technology adoption ensures our clients always have access to the most efficient engineering workflows available.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-off-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="fade-up border border-border-color rounded-xl p-8 bg-white">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-urbanist font-semibold text-xl text-text-primary mb-3">Our Vision</h3>
              <p className="text-text-secondary leading-relaxed">
                To be a globally recognized leader in industrial engineering software services, enabling smarter, faster, and safer project delivery for the process, power, and marine industries. We envision a future where engineering design is seamlessly integrated, highly automated, and delivers exceptional value at every stage.
              </p>
            </div>
            <div className="fade-up border border-border-color rounded-xl p-8 bg-white" style={{ transitionDelay: '80ms' }}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-urbanist font-semibold text-xl text-text-primary mb-3">Our Mission</h3>
              <p className="text-text-secondary leading-relaxed">
                To provide cost-effective, high-quality engineering design and drafting solutions by leveraging cutting-edge AVEVA platforms and deep domain expertise. We are committed to ensuring every project meets the highest standards of precision, compliance, and safety while empowering our clients to achieve more with less.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading badge="Why Catasoft" title="Why Choose Us" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="fade-up border border-border-color rounded-xl p-8 hover:border-primary transition-all duration-300 hover:-translate-y-0.5"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {r.icon}
                </div>
                <h3 className="font-urbanist font-semibold text-lg text-text-primary mb-2">{r.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
