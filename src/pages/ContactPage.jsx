import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import PillBadge from '../components/PillBadge'

const serviceOptions = [
  'AVEVA E3D',
  'SPPID / SPF',
  'AVEVA Engineering',
  '2D / 3D Modeling',
  'Automation',
  'Training',
  'Other',
]

export default function ContactPage() {
  useScrollReveal()

  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', company: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <PillBadge className="mb-4">Contact</PillBadge>
          <h1 className="font-urbanist font-bold text-4xl md:text-5xl lg:text-[56px] leading-[1.1] text-text-primary mb-4">
            Let's Talk About Your Project
          </h1>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you need engineering software services, training, or automation solutions, we're here to help.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3 fade-up">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-border-color rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-border-color rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:outline-none transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-1.5">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full border border-border-color rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-text-primary mb-1.5">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-border-color rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-border-color rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full rotating-border-btn rotating-border-btn-filled flex items-center justify-center gap-2 px-[26px] py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary-hover transition-colors duration-200 disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {status === 'success' && (
                  <p className="text-primary text-sm font-medium text-center mt-3">
                    ✓ Message sent! We'll be in touch shortly.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-red-500 text-sm font-medium text-center mt-3">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>

            {/* Info Cards */}
            <div className="lg:col-span-2 space-y-6 fade-up" style={{ transitionDelay: '120ms' }}>
              {/* India Office */}
              <div className="border border-border-color rounded-xl p-6 bg-white">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-urbanist font-semibold text-text-primary mb-1">INDIA</h3>
                <p className="text-text-secondary text-sm leading-relaxed font-semibold">
                  CataSoft consultancy Pvt. Ltd.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Office 615, Gera Imperium Alpha,<br />
                  Kharadi, Pune, INDIA.
                </p>
                <p className="mt-2 text-sm text-primary">
                  Email: <a href="mailto:contactus@catasoft.com" className="hover:underline font-medium">contactus@catasoft.com</a>
                </p>
              </div>

              {/* UAE Office */}
              <div className="border border-border-color rounded-xl p-6 bg-white">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-urbanist font-semibold text-text-primary mb-1">UAE</h3>
                <p className="text-text-secondary text-sm leading-relaxed font-semibold">
                  CataSoft Solutions FZCO
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Dubai Silicon Oasis, DDP, Building A2,<br />
                  Dubai, United Arab Emirates.
                </p>
                <p className="mt-2 text-sm text-primary">
                  Email: <a href="mailto:contactus@catasoft.com" className="hover:underline font-medium">contactus@catasoft.com</a>
                </p>
              </div>

              {/* Connect */}
              <div className="border border-border-color rounded-xl p-6 bg-white">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <h3 className="font-urbanist font-semibold text-text-primary mb-1">Connect</h3>
                <a
                  href="https://www.linkedin.com/company/catasoft/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-medium hover:underline"
                >
                  Follow us on LinkedIn →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
