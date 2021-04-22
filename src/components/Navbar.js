import React from 'react';
import Logo from './Logo';
import Menu from './Menu';

function Navbar() {
  return (
    <nav id="navbar">
      <Logo />
      <Menu />
    </nav>
  );
}

export default Navbar;