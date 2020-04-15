import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styles from './App.module.scss'

/* Global Layout Components */
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Spinner from './components/Spinner/Spinner'
import Layout from './components/Layout/Layout'

/* Views */
import Home from './views/Home/Home'
import BannerParent from './views/Banner/BannerParent'
import HoverPodsParent from './views/HoverPods/HoverPodsParent'
import TeamBuildingParent from './views/TeamBuilding/TeamBuildingParent'
import HappyDotsParent from './views/HappyDots/HappyDotsParent'

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add( fab )

function App() {
  return (
    <Router forceRefresh={true}>
      <Spinner />

      <Layout>
        <Nav/>

        <Switch>
          <Route path="/happy-dots">
            <HappyDotsParent/>
          </Route>
          <Route path="/hover-pods">
            <HoverPodsParent/>
          </Route>
          <Route path="/page-banner">
            <BannerParent/>
          </Route>
          <Route path="/team-building">
            <TeamBuildingParent/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Layout>

    </Router>
  )
}

export default App
