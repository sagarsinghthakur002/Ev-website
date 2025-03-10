import './Navbar.css'
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div className="all">
    <div className='nav'>
      <div className='nav-logo'><img src={logo}/></div>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>About</li>
        <li>Explore</li>
        <li className='nac-contact'> Contact </li>
      </ul>
      
    </div>
    </div>
  )
}

export default Navbar
