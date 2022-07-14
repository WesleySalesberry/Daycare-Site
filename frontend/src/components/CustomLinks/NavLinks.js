import { Link, useMatch, useResolvedPath } from "react-router-dom"

export const NavLink = ({ children, to }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true })
  return (
    <li className="nav-item">
      <Link
        to={to}
        className={`nav-link ${match ? "text-primary bg-dark border-bottom" : ""}`}
      >
        { children }
      </Link>
    </li>
  )
}