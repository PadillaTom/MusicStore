import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar-container show-sidebar'>
      <ul className='side-links'>
        <li className='side-link'>
          <Link to='/'>Home</Link>
        </li>
        <li className='side-link'>
          <Link to='/'>Guitars</Link>
        </li>
        <li className='side-link'>
          <Link to='/'>Basses</Link>
        </li>
        <li className='side-link'>
          <Link to='/'>Articles</Link>
        </li>
        <li className='side-link'>
          <Link to='/'>About</Link>
        </li>
        <li className='side-link'>
          <Link to='/'>Contact</Link>
        </li>
      </ul>
      <div className='sidebar-division'></div>
      <ul className='user-side-links'>
        <li className='side-link'>
          <Link to='/'>Login</Link>
        </li>
        <li className='side-link'>
          <Link to='/'>Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
