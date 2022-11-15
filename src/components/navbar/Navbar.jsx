import React from 'react'; 
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
      <div className = "menubar center">
        <img src="logo.png" alt=''></img>
        <ul className="menu">
          <li><NavLink to="/">Главная</NavLink></li>
          <li><NavLink to="/courses">Все курсы</NavLink></li>
          <li><NavLink to="/aboutTeam">О нас</NavLink></li>
        </ul>
      </div>
    )
}

export default Navbar;