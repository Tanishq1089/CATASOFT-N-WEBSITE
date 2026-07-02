import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border-color">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo + tagline */}
          <div>
            <Link to="/" className="inline-block">
              <img src="/catasoft-logo.png" alt="Catasoft Solutions" className="h-9" />
            </Link>
            <p className="mt-3 text-text-secondary text-sm leading-relaxed max-w-xs">
              Industrial engineering software services for process, power &amp; marine industries.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-urbanist font-semibold text-sm uppercase tracking-wider text-text-muted mb-1">
              Navigation
            </h4>
            {['About', 'Services', 'Training', 'Contact'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-text-secondary text-sm hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <h4 className="font-urbanist font-semibold text-sm uppercase tracking-wider text-text-muted mb-1">
              Connect
            </h4>
            <a
              href="https://www.linkedin.com/company/catasoft/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text-secondary text-sm hover:text-primary transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-border-color text-center">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} Catasoft Solutions FZCO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
