const LinkArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" /><path d="M7 7h10v10" />
  </svg>
)

export default function ButtonLink({ href, children, external, className = '' }) {
  return (
    <a
      href={href}
      className={`button-link w-inline-block ${className}`.trim()}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <div>{children}</div>
      <LinkArrow />
    </a>
  )
}

export { LinkArrow }
