import './App.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  let linkStyle=({ isActive }) => ({
                            color: isActive ? 'blueviolet' : 'white',
                            background: isActive ? 'white' : 'blueviolet',
                        })
  return (
    <nav className="navbar">
      <h2 className="header">My Diary</h2>
      <ul>
        <li>
          <NavLink to="/" style={linkStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="compose" style={linkStyle}>
            Compose
          </NavLink>
        </li>
        <li>
          <NavLink to="about" style={linkStyle}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
