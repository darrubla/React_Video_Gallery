import React from "react";
import "../assets/styles/components/Header.scss";
import Header_logo from "../assets/images/logo-platzi-video-BW2.png";
import Header_icon from "../assets/images/user-icon.png";

const Header = () => {
  return (
    <React.Fragment>
      <header className="header">
        <img className="header__img" src={Header_logo} alt="Logo" />
        <div className="header__menu">
          <div className="header__menu--profile">
            <img src={Header_icon} alt="User_Icon" />
            <p>Perfil</p>
          </div>
          <ul>
            <li>
              <a href="/">Cuenta</a>
            </li>
            <li>
              <a href="/">Cerrar Sesión</a>
            </li>
          </ul>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
