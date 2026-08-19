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
    <div className="pt-24 min-h-screen bg-white">
      {/* Two Column Company Info & Vision/Mission */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Company */}
            <div className="fade-up">
              <h2 className="font-urbanist font-bold text-3xl md:text-4xl text-text-primary mb-6">
                Company
              </h2>
              <div className="space-y-6 text-text-secondary leading-relaxed text-[15px] md:text-base">
                <p>
                  Catasoft Solutions FZCO is a government registered company in Dubai, UAE founded in Jan 2019 with a goal to provide IT solutions and Engineering services. We are a group of skilled and experienced people having good knowledge and understanding of the industry requirement.
                </p>
                <p>
                  Catasoft offers a wide range of industrial softwar services for process, power, and marine industries. We are expertise in detail engineering, designing, and drafting. Our software skill includes 2D-3D engineering and information amanagement tools such as SPF,AVEVA AIM, SP3, E3D, SPPID, SPI, AVEVA Engineering, AVEVA E&I, MicroStation, AutoCAD etc. We have good experience in 2D drafting and 3D modeling for oil and gas projects. We also provide Administration, Customization and Automation services for the above software.
                </p>
              </div>
            </div>

            {/* Right Column: Vision & Mission */}
            <div className="space-y-8 fade-up" style={{ transitionDelay: '80ms' }}>
              <div>
                <h2 className="font-urbanist font-bold text-3xl md:text-4xl text-text-primary mb-4">
                  Our Vision
                </h2>
                <p className="text-text-secondary leading-relaxed text-[15px] md:text-base">
                  To achieve excellence by delivering world-class industrial software solutions that are on time, within budget, and of the highest quality.
                </p>
              </div>

              <hr className="border-t border-zinc-200" />

              <div>
                <h2 className="font-urbanist font-bold text-3xl md:text-4xl text-text-primary mb-4">
                  Our mission
                </h2>
                <p className="text-text-secondary leading-relaxed text-[15px] md:text-base">
                  Our mission is to harness the unique talents of individuals to deliver cutting-edge industrial software solutions. We strive to create a collaborative environment where expertise meets innovation, providing user-friendly and efficient solutions tailored to meet the diverse needs.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Workspace Image Section */}
      <section className="fade-up max-w-7xl mx-auto px-6 pb-20">
        <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=1200&q=80" 
            alt="Engineering Workstation" 
            className="w-full h-full object-cover grayscale opacity-90 contrast-125"
          />
        </div>
      </section>
    </div>
  )
}
