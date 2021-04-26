import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import Button from './Button';

function Navbar() {
  return (
    <nav id="navbar">
      <Logo />
      <Menu />
      <Button />
    </nav>
  );
}

export default Navbar;