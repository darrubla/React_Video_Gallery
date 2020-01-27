import React from "react";
import "../assets/styles/components/Header.scss";

const Header = () => {
  return (
    <React.Fragment>
      <header className="header">
        <img
          className="header__img"
          src="../assets/logo-platzi-video-BW2.png"
          alt="Logo"
        />
        <div className="header__menu">
          <img src="../assets/user-icon.png" alt="User_Icon" />
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
      </header>
    </React.Fragment>
  );
};

export default Header;
