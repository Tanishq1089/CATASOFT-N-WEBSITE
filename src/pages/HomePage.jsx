import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import PillBadge from '../components/PillBadge'
import SectionHeading from '../components/SectionHeading'

/* ── service card data ── */
const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    ),
    title: 'AVEVA E3D',
    desc: '3D plant design with integrated structural, piping, equipment, and HVAC modeling for complex facilities.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>
    ),
    title: 'SPPID & SPF',
    desc: 'Intelligent P&ID creation synchronized with 3D models and engineering registers.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
    title: 'AVEVA Engineering & E&I',
    desc: 'Tag registers, cable schedules, instrument indexes, and equipment lists with full traceability.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
    ),
    title: '2D Drafting & 3D Modeling',
    desc: 'Layout drawings, isometrics, GA drawings, and as-built documentation.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    ),
    title: 'Automation & Customization',
    desc: 'Macro development, custom catalogues, plugin development, and workflow automation.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
    title: 'MicroStation & AutoCAD',
    desc: 'Civil layouts and mechanical drawings compatible across global engineering teams.',
  },
]

const tickerItems = [
  'AVEVA E3D', 'SPPID', 'SPF', 'AVEVA Engineering', 'MicroStation',
  'AutoCAD', 'AVEVA E&I', '2D Drafting', '3D Modeling', 'Automation',
]

export default function HomePage() {
  useScrollReveal()

  /* typewriter state */
  const fullText = '3D Engineering & Design Software Solutions for Process, Power & Marine'
  const [typed, setTyped] = useState('')
  const [showSub, setShowSub] = useState(false)
  const typingDone = typed.length >= fullText.length

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i++
      setTyped(fullText.slice(0, i))
      if (i >= fullText.length) {
        clearInterval(interval)
        setTimeout(() => setShowSub(true), 200)
      }
    }, 35)
    return () => clearInterval(interval)
  }, [])

  /* render typed heading with color split */
  const renderTypedHeading = () => {
    return (
      <>
        <span className="text-white">{typed}</span>
        {!typingDone && <span className="typewriter-cursor" />}
      </>
    )
  }

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative bg-dark-bg overflow-hidden flex items-center pt-16">
        <div className="max-w-5xl mx-auto px-6 w-full py-20 md:py-28 lg:py-32">
          {/* Centered hero content */}
          <div className="max-w-3xl mx-auto text-center fade-up visible">
            <PillBadge className="mb-6">Industrial Engineering Solutions</PillBadge>

            <h1 className="font-urbanist font-semibold text-3xl md:text-4xl lg:text-[48px] leading-[1.15] mb-6">
              {renderTypedHeading()}
            </h1>

            <p
              className={`text-[#94a3b8] text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8 transition-all duration-700 ${
                showSub ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              We deliver world-class detail engineering, drafting, and 3D modeling services using AVEVA, MicroStation, and AutoCAD, on time, within budget.
            </p>

            <div className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-200 ${
              showSub ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <Link
                to="/services"
                className="rotating-border-btn rotating-border-btn-outline inline-flex items-center px-[26px] py-3 rounded-full text-white font-semibold text-sm hover:text-primary transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TRUST TICKER ═══════════ */}
      <section className="bg-white py-5 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="ticker-track flex items-center gap-8 w-max">
          {[...Array(4)].map((_, rep) =>
            tickerItems.map((item, i) => (
              <span
                key={`${rep}-${i}`}
                className="flex-shrink-0 inline-flex items-center gap-2 text-text-secondary text-sm font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {item}
              </span>
            ))
          )}
        </div>
      </section>

      {/* ═══════════ SERVICES PREVIEW ═══════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge="Our Services"
            title="Engineering Software Expertise"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="fade-up group border border-border-color rounded-xl p-8 hover:border-primary transition-all duration-300 hover:-translate-y-0.5"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white mb-4">
                  {s.icon}
                </div>
                <h3 className="font-urbanist font-semibold text-lg text-text-primary mb-2">
                  {s.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ VISION / MISSION ═══════════ */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision */}
            <div className="fade-up border border-border-color rounded-xl p-8 bg-white">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-urbanist font-semibold text-xl text-text-primary mb-3">Our Vision</h3>
              <p className="text-text-secondary leading-relaxed">
                To be a globally recognized leader in industrial engineering software services, enabling smarter, faster, and safer project delivery for the process, power, and marine industries.
              </p>
            </div>
            {/* Mission */}
            <div className="fade-up border border-border-color rounded-xl p-8 bg-white" style={{ transitionDelay: '80ms' }}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-urbanist font-semibold text-xl text-text-primary mb-3">Our Mission</h3>
              <p className="text-text-secondary leading-relaxed">
                To provide cost-effective, high-quality engineering design and drafting solutions by leveraging cutting-edge AVEVA platforms and deep domain expertise, ensuring every project meets the highest standards of precision and compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TRAINING TEASER ═══════════ */}
      <section className="py-20 bg-primary-light">
        <div className="max-w-4xl mx-auto px-6 text-center fade-up">
          <PillBadge className="mb-4">Training</PillBadge>
          <h2 className="font-urbanist font-semibold text-3xl md:text-[40px] leading-tight text-text-primary mb-4">
            Build Real-World Engineering Software Skills
          </h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Hands-on training programs in AVEVA E3D, SPPID, MicroStation, AutoCAD, and more, designed for engineers who build real projects.
          </p>
          <Link
            to="/training"
            className="inline-flex items-center px-[26px] py-3 rounded-full border border-border-color text-text-primary font-semibold text-sm hover:border-primary hover:text-primary transition-all duration-200"
          >
            Explore Training
          </Link>
        </div>
      </section>
    </>
  )
}
