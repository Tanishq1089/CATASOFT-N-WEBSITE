import PillBadge from './PillBadge'

export default function SectionHeading({ badge, title, subtitle, center = true, light = false }) {
  return (
    <div className={`${center ? 'text-center' : ''} mb-12`}>
      {badge && <PillBadge className="mb-4">{badge}</PillBadge>}
      <h2 className={`font-urbanist font-semibold text-3xl md:text-[40px] leading-tight ${
        light ? 'text-white' : 'text-text-primary'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed max-w-2xl ${
          center ? 'mx-auto' : ''
        } ${light ? 'text-gray-400' : 'text-text-secondary'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
