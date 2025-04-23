import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './Header.module.css';

const Header = () => {
  const setActiveClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <div className={s.navwrapper}>
      <nav className={s.nav}>
        <NavLink to="/" className={setActiveClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={setActiveClass}>
          Movies
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
