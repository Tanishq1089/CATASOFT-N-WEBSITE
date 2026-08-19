import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import PillBadge from '../components/PillBadge'
import SectionHeading from '../components/SectionHeading'

const courses = [
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
    title: 'AVEVA E3D Fundamentals',
    desc: 'Master the fundamentals of 3D plant design including equipment, piping, structural, and cable tray modeling in AVEVA E3D.',
  },
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>,
    title: 'SPPID & P&ID Development',
    desc: 'Learn to create intelligent, data-driven P&IDs with full synchronization to engineering data and 3D models.',
  },
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    title: 'MicroStation & AutoCAD Drafting',
    desc: 'Develop proficiency in 2D drafting and 3D modeling workflows across MicroStation and AutoCAD platforms.',
  },
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    title: 'Software Customization Track',
    desc: 'Advanced training in macro development, plugin creation, catalogue building, and workflow automation.',
  },
]

const steps = [
  { num: '01', title: 'Reach Out', desc: 'Contact us with your training requirements and team size to get started.' },
  { num: '02', title: 'Custom Curriculum', desc: 'We design a tailored curriculum based on your team\'s skill level and project needs.' },
  { num: '03', title: 'Hands-On Training', desc: 'Your team learns by doing, with real-world exercises and project-based assignments.' },
]

export default function TrainingPage() {
  useScrollReveal()

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <PillBadge className="mb-4">Training</PillBadge>
          <h1 className="font-urbanist font-bold text-4xl md:text-5xl lg:text-[56px] leading-[1.1] text-text-primary mb-4">
            Build Real-World Engineering Software Skills
          </h1>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Hands-on training programs designed for engineers who build real projects, covering AVEVA, MicroStation, AutoCAD, and automation.
          </p>
        </div>
      </section>

      {/* Training Cards */}
      <section className="pb-20 bg-transparent">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((c, i) => (
              <div
                key={c.title}
                className="fade-up border border-border-color rounded-xl p-8 hover:border-primary bg-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white mb-4">
                  {c.icon}
                </div>
                <h3 className="font-urbanist font-semibold text-lg text-text-primary mb-2">{c.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-transparent">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading badge="Process" title="How It Works" />
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dashed connecting line (desktop only) */}
            <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-px border-t-2 border-dashed border-primary/30 z-0" />
            {steps.map((s, i) => (
              <div key={s.num} className="fade-up relative z-10 text-center" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center font-urbanist font-bold text-2xl mx-auto mb-4">
                  {s.num}
                </div>
                <h3 className="font-urbanist font-semibold text-lg text-text-primary mb-2">{s.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center fade-up">
          <h2 className="font-urbanist font-semibold text-3xl md:text-[40px] leading-tight text-text-primary mb-4">
            Interested in training your team?
          </h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Let us design a custom training program that matches your team's needs and project goals.
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
