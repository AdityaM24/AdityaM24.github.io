const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
)

export default function Button({ href, onClick, type = 'button', center, children, className = '', disabled, external, arrow = true }) {
  const Tag = href ? 'a' : 'button'
  const props = {
    className: `button${center ? ' cc-center' : ''} ${className}`.trim(),
    ...(href ? { href } : { type, onClick, disabled }),
    ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
  }

  return (
    <Tag {...props}>
      <div className="button-front">
        <div className="button-text">
          <div>{children}</div>
          {arrow && href && !disabled && <ArrowIcon />}
        </div>
      </div>
      <div className="button-edge" />
    </Tag>
  )
}
