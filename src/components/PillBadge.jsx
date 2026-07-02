export default function PillBadge({ children, className = '' }) {
  return (
    <span
      className={`inline-block bg-primary-light text-primary text-xs font-semibold uppercase tracking-[0.05em] rounded-full px-[14px] py-[6px] ${className}`}
    >
      {children}
    </span>
  )
}
