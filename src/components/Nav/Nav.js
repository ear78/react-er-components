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
    this.setState( state => ( {
      isMenuActive: !state.isMenuActive
    } ) )
  }

  render() {
    let isActive = this.state.isMenuActive ? styles.isActive : ''

    const navMenu = [ {
        route: '/',
        text: 'Home'
      },
      {
        route: '/page-banner',
        text: 'Page Banner'
      },
      {
        route: '/hover-pods',
        text: 'Hover Pods'
      },
      {
        route: '/team-building',
        text: 'Team Building'
      },
      {
        route: '/happy-dots',
        text: 'Happy Dots'
      }
    ]

    let navPrint = navMenu.map( ( item, i ) => {
      return <li key={i} style={{transitionDelay: 100 * i + 'ms'}}>
                <NavLink exact to={item.route}
                  activeClassName={styles.selected}>{item.text}</NavLink>
              </li>
    } )

    let mobileNavPrint = navMenu.map( ( item, i ) => {
      return <li key={i} className={`${isActive}`} style={{transitionDelay: 100 * i + 'ms'}}>
                     <NavLink exact to={item.route}
                       activeClassName={styles.selected}>{item.text}</NavLink>
                   </li>
    } )

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
            {navPrint}
          </ul>
        </nav>

        <nav className={`${styles.NavMobile} ${isActive}`}>
          <ul>
            {mobileNavPrint}
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav
