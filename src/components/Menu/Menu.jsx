import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Menu.module.scss'
import { Logo } from '../Logo/Logo';

export const Menu = () => {
  
  const setActive = ({ isActive }) => isActive ? classes.link  + ' ' + classes.active : classes.link
  
  return (
    <>
    <div className={classes.wrapper}>
      <Logo />
      <nav className={classes.menu}>
        <ul>
          <li className={classes.link_wrapper}>
            <NavLink
              to="/"
              end="true"
              className={setActive}
            >
              profile
            </NavLink>
          </li>
          <li className={classes.link_wrapper}>
            <NavLink
              to="search"
              className={setActive}
            >
              # search
            </NavLink>
          </li>
          <li className={classes.link_wrapper}>
            <NavLink
              to="news"
              className={setActive}
            >
              news
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    </>
  )
}