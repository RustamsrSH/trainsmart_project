import React, { useState } from 'react';
import "./Header.scss";
import Authorization from './../Authorization/Authorization';
import { NavLink } from 'react-router-dom';

function Header() {

  const [isVisible, setIsVisible] = useState(false);

  const showSignIn = () => {
    setIsVisible(true);
  }

  const hideAuth = (e) => {
    if (e.target.className === 'auth' || e.target.className === 'auth__close') {
      setIsVisible(false);
    }
  }

  return (
    <div className="header">
      <div className='container'>
        <div className="header__wrapper">
          <a className='header__logo' href="#">
            <img src="../images/trainsmart_logo.webp" alt="Logo" width="80px" />
          </a>
          <nav className='header__nav'>
            <ul className='header__nav-list nav'>
              <li className='nav__item'><NavLink to="/">Главная</NavLink></li>
              <li className='nav__item'><NavLink to="/registration">Регистрация</NavLink></li>
              <li className='nav__item'><NavLink onClick={showSignIn}>Войти</NavLink></li>
            </ul>
          </nav>
          <a className='header__mail' href="#">
            info@trainsmart.online
          </a>
        </div>
      </div>
      {isVisible ? <Authorization hide = {hideAuth}/> : null}
    </div>
  )
}

export default Header;