export default function Logo({ className = '' }) {
  return (
    <a href="#home" className={`brand ${className}`.trim()} aria-label="home">
      <span className="logo-text">AM</span>
      <span className="logo-dot">.</span>
    </a>
  )
}
