export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a className="brand" href="#home" aria-label="AG Markets home">
      <span className="brand-mark" aria-hidden="true">AG</span>
      <span className="brand-copy">
        <strong>AG MARKETS</strong>
        {!compact && <small>AI FINANCIAL INTELLIGENCE</small>}
      </span>
    </a>
  )
}
