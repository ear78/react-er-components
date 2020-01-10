import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.scss'

import logo from '../../assets/img/er-logo.svg'

function nav() {

  return (
    <div className={styles.NavContainer}>
      <div>
        <img  src={logo} alt="ER Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/page-banner'>Page Banner</NavLink>
          </li>
          <li>
            <NavLink to='/hover-pods'>Hover Pods</NavLink>
          </li>
          <li>
            <NavLink to='/team-building'>Team Building</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default nav
