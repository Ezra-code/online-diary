import './App.css'
import {NavLink} from 'react-router-dom'
const NavBar = () => {
  return (
    <nav className='navbar'>
      <h2 className="header">My Diary</h2>
      <ul>
        <li>Home</li>
        <li>Compose</li>
        <li><NavLink to='about'>About</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;
