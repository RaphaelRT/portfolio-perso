import React from 'react';
import CustomCursor from '../CustomCursor/CustomCursor';
import logo_white from '../../assets/images/logo-white.svg'

const Header: React.FC = () => {
  return (
    <header className={"header"}>
      <CustomCursor />
      <h1>ROBERT RAPHAËL</h1>
      <div className={"header__logo"}>
        <a href="/" className="hoverable">
          <img className="hoverable" src={logo_white} alt="logo" />
        </a>
      </div> 
    </header>
  );
};

export default Header;
