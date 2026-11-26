import { Link } from 'react-router-dom'

export function Brand() {
  return (
    <Link className="brand" to="/">
      <img className="brand-logo" src="/ag-markets-logo.png" alt="AG Markets – AI Financial Intelligence" />
    </Link>
  )
}
