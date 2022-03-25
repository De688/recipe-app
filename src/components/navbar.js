import React from 'react';
import logo from '../logo.png';
import '../style/navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
 

  return (
    <section className='main-navbar'>
      <div className='navbar-logo'>
         <img src={logo} alt='logo'/>
      </div>
      <div className='navlinks'>
            <ul className='navlinks-ul'>
              <li className='navlinks-a'>
              <Link to='/'>Home</Link>
              </li>
              <li>
              <Link to='#' href='#'>Contact</Link>
              </li>
              <li>
              <Link to='#'>About</Link>
              </li>
            </ul>
      </div>
      
    </section>
    
  )

}

export default Navbar;