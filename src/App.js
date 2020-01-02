import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import styles from './App.module.scss'

import building from './assets/img/pinkBuilding.jpg'
import Nav from './components/Nav/Nav'
import Home from './Home/Home'
import Banner from './Banner/Banner'
import HoverPods from './HoverPods/HoverPods'

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Nav/>

        <Switch>
          <Route path="/hover-pods">
            <HoverPods />
          </Route>
          <Route path="/page-banner">
            <Banner
              bgImage={building}
              preTitle="Welcome to Page Banner"
              title="Page Banner"
              subTitle="Banners to help your site look great!"
              btnText="Kontakt"
              cta="https://www.elliotrichardson.com"/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
