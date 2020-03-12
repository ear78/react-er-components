import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from './Nav.module.scss'

import Hamburger from '../Hamburger/Hamburger'
import logo from '../../assets/img/er-logo.svg'

class Nav extends React.Component {
  state = {
    isMenuActive: false
  }

  handleToggle() {
    this.setState(state => ({
      isMenuActive: !state.isMenuActive
    }))
  }

  render() {
    let isActive = this.state.isMenuActive ? styles.isActive : ''

    return (
      <div className={styles.NavContainer}>
        <Link className={styles.ImgWrapper} to="/">
          <img  src={logo} alt="ER Logo" />
        </Link>
        <Hamburger
          isActive={this.state.isMenuActive}
          click={this.handleToggle.bind(this)}/>
        <nav className={styles.NavDesktop}>
          <ul>
            <li>
              <NavLink exact to='/'
                activeClassName={styles.selected}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/page-banner'
                activeClassName={styles.selected}>Page Banner</NavLink>
            </li>
            <li>
              <NavLink to='/hover-pods'
                activeClassName={styles.selected}>Hover Pods</NavLink>
            </li>
            <li>
              <NavLink to='/team-building'
                activeClassName={styles.selected}>Team Building</NavLink>
            </li>
            <li>
              <NavLink to='/happy-dots'
                activeClassName={styles.selected}>Happy Dots</NavLink>
            </li>
          </ul>
        </nav>

        <nav className={`${styles.NavMobile} ${isActive}`}>
          <ul>
            <li>
              <NavLink exact to='/'
                activeClassName={styles.selected}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/page-banner'
                activeClassName={styles.selected}>Page Banner</NavLink>
            </li>
            <li>
              <NavLink to='/hover-pods'
                activeClassName={styles.selected}>Hover Pods</NavLink>
            </li>
            <li>
              <NavLink to='/team-building'
                activeClassName={styles.selected}>Team Building</NavLink>
            </li>
            <li>
              <NavLink to='/happy-dots'
                activeClassName={styles.selected}>Happy Dots</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav
