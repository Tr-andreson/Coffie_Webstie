// import "./navbar.css"
import { NavLink } from 'react-router-dom'
import { Logo } from './Logo'

export const Navbar = () => {
  return (
    <div className='bg-black flex items-center justify-between'>
      <Logo />
      <div className="text-red-400">
        <ul>
          <a href=""><NavLink to="/">Home</NavLink></a>
          <a href=""><NavLink to="/about">About</NavLink></a>
          <a href=""><NavLink to="/menu">Menu</NavLink></a>
          <a href=""><NavLink to="/contact">Contact</NavLink></a>
        </ul>
      </div>
    </div>
  )
}
