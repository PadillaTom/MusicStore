import React from 'react';
import { Link } from 'react-router-dom';
// Icons:
import { HiMenuAlt2 } from 'react-icons/hi';
import { BsBag } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className='mobile-nav'>
      <div className='mobile-nav-container'>
        {/* Hamburg */}

        <HiMenuAlt2 className='ham-icon'></HiMenuAlt2>

        {/* End Hamburg */}
        {/* Logo */}
        <div className='logo-container'>
          <Link to='/'>
            <h2 className='main-logo'>Music Store</h2>
          </Link>
        </div>
        {/* End Logo */}
        {/* Cart */}
        <div className='cart-container'>
          <BsBag className='cart-bag'></BsBag>
          <p className='bag-amount'>1</p>
        </div>
        {/* End Cart */}
      </div>
    </nav>
  );
};

export default Navbar;
