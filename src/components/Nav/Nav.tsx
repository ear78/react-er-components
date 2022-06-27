import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Nav.module.scss';
import Hamburger from '../Hamburger/Hamburger';
import logo from '../../assets/img/er-logo.svg';
import useResetApploading from '../../assets/js/hooks/useResetAppLoading';

function Nav() {
  const resetAppLoading = useResetApploading();
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleToggle = () => {
    setIsMenuActive(!isMenuActive);
  };

  const resetPageLoad = () => {
    resetAppLoading();
    setIsMenuActive(false);
  };

  const isActive = isMenuActive ? styles.isActive : '';

  const navMenu = [
    {
      route: '/',
      text: 'Home',
    }, {
      route: '/page-banner',
      text: 'Page Banner',
    }, {
      route: '/hover-pods',
      text: 'Hover Pods',
    }, {
      route: '/team-building',
      text: 'Team Building',
    }, {
      route: '/happy-dots',
      text: 'Happy Dots',
    }, {
      route: '/dropper',
      text: 'Dropper',
    }, {
      route: '/e-slider',
      text: 'E-Slider',
    },
    {
      route: '/dashboard',
      text: 'Dashboard',
    },
  ];

  const navPrint = navMenu.map((item, i) => (
    <li
      key={item.text}
      style={{
        transitionDelay: `${100 * i}ms`,
      }}
    >
      <NavLink
        exact
        to={item.route}
        activeClassName={styles.selected}
        onClick={resetPageLoad}
      >
        {item.text}

      </NavLink>
    </li>
  ));

  const mobileNavPrint = navMenu.map((item, i) => (
    <li
      key={item.text}
      className={`${isActive}`}
      style={{
        transitionDelay: `${100 * i}ms`,
      }}
    >
      <NavLink
        exact
        to={item.route}
        activeClassName={styles.selected}
        onClick={resetPageLoad}
      >
        {item.text}
      </NavLink>
    </li>
  ));

  return (
    <div className={styles.NavContainer}>
      <Link
        className={styles.ImgWrapper}
        to="/"
        onClick={resetPageLoad}
      >
        <img src={logo} alt="ER Logo" />
      </Link>
      <Hamburger
        isActive={isMenuActive}
        click={handleToggle}
      />
      <nav className={styles.NavDesktop}>
        <ul>
          {navPrint}
        </ul>
      </nav>

      <nav className={`${styles.NavMobile} ${isActive}`}>
        <ul>
          {mobileNavPrint}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
