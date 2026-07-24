export default function Badge({ children }) {
  return (
    <div className="badge margin-bottom-30">
      <div className="badge-text">
        <span className="shape-label">&nbsp;&nbsp;&nbsp;</span>
        {children}
      </div>
    </div>
  )
}
