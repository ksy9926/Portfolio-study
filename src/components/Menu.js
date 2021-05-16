import React from 'react';
import Project from './Project';

function Menu() {
  const onChangeMenu = () =>{
    Project.projectRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <ul className="navbar__menu">
      <li className="navbar__menu__item active">Home</li>
      <li className="navbar__menu__item">About</li>
      <li className="navbar__menu__item">Skills</li>
      <li className="navbar__menu__item" onClick={onChangeMenu}>Project</li>
      <li className="navbar__menu__item">Education</li>
      <li className="navbar__menu__item">Contact</li>
    </ul>
  );
}

export default Menu;