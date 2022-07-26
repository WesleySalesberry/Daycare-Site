import { Link } from 'react-router-dom'
import { NavLink } from '../CustomLinks/NavLinks'

export const BottomNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Sandcastles Child Care</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav ms-auto">
        <NavLink to='/about'> About </NavLink>
        <NavLink to='/contact'> Contact </NavLink>
        <NavLink to='/message'> Message </NavLink>
         <NavLink to='/login'> Login </NavLink> 
      </ul>
    </div>
  </div>
</nav>
  )
}