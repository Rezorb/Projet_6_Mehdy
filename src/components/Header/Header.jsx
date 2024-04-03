import React from 'react';
import "./Header.css"
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <header className='header_container'>
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
