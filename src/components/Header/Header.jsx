import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
// import logo from 'logo.png';



const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={process.env.PUBLIC_URL + '/images/logo.png'} /> 
      </div>
 
      <nav className="header__nav">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contacts'>Contacts</Link></li>
        </ul>
      </nav>

      {/* <div className="header__contacts"> 
        <a href="tel:80291224029">+375281224029</a>
        <a href="mailto:shot.aleks@gmail.com">shot.aleks@gmail.com</a>
      </div> */}
    </header>
  );
};

export default Header;


// exact

