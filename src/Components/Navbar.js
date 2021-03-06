import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Icons:
import { HiMenuAlt2 } from 'react-icons/hi';
import { BsBag } from 'react-icons/bs';
import { AiOutlineClose, AiOutlineUser } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import { FcAddressBook, FcPhoneAndroid } from 'react-icons/fc';
// Context:
import { CartContext } from '../Context/CartContext';
import { auth } from '../firebase';

const Navbar = ({ value }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Amount form CartReducer / Context, etc:
  const { amount } = React.useContext(CartContext);

  // Logout Function:
  const logoutUser = () => {
    auth.signOut();
    alert('You Logged Out.');
  };

  // Main:
  return (
    <React.Fragment>
      <nav className={`mobile-nav ${isOpen && 'fixed-nav'}`}>
        <div className='mobile-nav-container'>
          {/* Hamburg */}
          {!isOpen ? (
            <HiMenuAlt2
              className='ham-icon'
              onClick={() => setIsOpen(!isOpen)}
            ></HiMenuAlt2>
          ) : (
            <AiOutlineClose
              className='ham-icon-close'
              onClick={() => setIsOpen(!isOpen)}
            ></AiOutlineClose>
          )}

          {/* End Hamburg */}
          {/* Logo */}
          <div className='logo-container'>
            <Link to='/'>
              <h2 className='main-logo'>Music Store</h2>
            </Link>
          </div>
          {/* End Logo */}
          {/* Cart */}
          <Link to='/cart'>
            <div className='cart-container'>
              <BsBag className='cart-bag'></BsBag>
              <p className='bag-amount'>{amount}</p>
            </div>
          </Link>
          {/* End Cart */}
        </div>
      </nav>
      {/* Sidebar */}
      {isOpen && (
        <div className={`sidebar-container ${isOpen && 'show-sidebar'}`}>
          <ul className='side-links' onClick={() => setIsOpen(!isOpen)}>
            <li className='side-link'>
              <Link to='/'>Home</Link>
            </li>
            <li className='side-link'>
              <Link to='/instruments'>Musical Instruments</Link>
              <AiOutlineRight className='side-arrow'></AiOutlineRight>
            </li>
            <li className='side-link'>
              <Link to='/about'>About</Link>
              <AiOutlineRight className='side-arrow'></AiOutlineRight>
            </li>
            <li className='side-link'>
              <Link to='/contact'>Contact</Link>
              <AiOutlineRight className='side-arrow'></AiOutlineRight>
            </li>
            <div className='sidebar-division'></div>
            {!value ? (
              <li className='side-link'>
                <Link to='/login'>Login</Link>
                <AiOutlineRight className='side-arrow'></AiOutlineRight>
              </li>
            ) : (
              <li
                className='side-link'
                onClick={() => {
                  logoutUser();
                }}
              >
                <Link to='/login'>Logout</Link>
                <AiOutlineRight className='side-arrow'></AiOutlineRight>
              </li>
            )}

            <li className='side-link'>
              <Link to='/cart'>Cart</Link>
              <AiOutlineRight className='side-arrow'></AiOutlineRight>
            </li>
          </ul>
          <div className='sidebar-contact-info'>
            <div className='contact-single-sidebar'>
              <FcAddressBook></FcAddressBook>
              <p>musicstore@store.com</p>
            </div>
            <div className='contact-single-sidebar'>
              <FcPhoneAndroid></FcPhoneAndroid>
              <p>+41 111 222 33 33</p>
            </div>
          </div>
        </div>
      )}
      {/* End Sidebar */}
      {/* Desktop Nav */}
      <nav className='desktop-nav'>
        <div className='desk-container'>
          <div className='desk-top'>
            <div className='desk-logo-container'>
              <Link to='/'>
                <h2 className='main-logo desk-logo'>Music Store</h2>
              </Link>
            </div>
            <div className='desk-user'>
              {!value ? (
                <div className='user-logo'>
                  <p className='user-logo-text'>
                    <Link to='/login'>Login</Link>
                  </p>
                  <AiOutlineUser></AiOutlineUser>
                </div>
              ) : (
                <div
                  className='user-logo'
                  onClick={() => {
                    logoutUser();
                  }}
                >
                  <p className='user-logo-text'>Logout</p>
                  <AiOutlineUser></AiOutlineUser>
                </div>
              )}

              <div className='desk-user-cart'>
                <Link to='/cart'>
                  <BsBag className='desk-cart-bag'></BsBag>
                  <p className='desk-bag-amount'>{amount}</p>
                </Link>
              </div>
            </div>
          </div>
          <div className='desk-bot'>
            <ul className='desk-links'>
              <li className='single-desk-link'>
                <Link to='/'>
                  <p>Home</p>
                </Link>
              </li>
              <li className='single-desk-link'>
                <Link to='/about'>
                  <p>About</p>
                </Link>
              </li>
              <li className='single-desk-link'>
                <Link to='/contact'>
                  <p>Contact</p>
                </Link>
              </li>
              <li className='single-desk-link'>
                <Link to='/instruments'>
                  <p>Instruments</p>
                </Link>
              </li>
              <li className='single-desk-link'>
                <Link to='/'>
                  <p>Artists</p>
                </Link>
              </li>
              <li className='single-desk-link'>
                <Link to='/'>
                  <p>Articles</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Desktop */}
    </React.Fragment>
  );
};

export default Navbar;
