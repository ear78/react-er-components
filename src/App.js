import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styles from './App.module.scss'

/* Components */
import Nav from './components/Nav/Nav'
import Spinner from './components/Spinner/Spinner'
import Home from './Home/Home'
import Banner from './Banner/Banner'
import HoverPods from './HoverPods/HoverPods'
import TeamBuilding from './TeamBuilding/TeamBuilding'
import HappyDots from './HappyDots/HappyDots'

/* Utilities && Data */
import building from './assets/img/pinkBuilding.jpg'
import { podData, happyData } from './assets/js/data'

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

function App() {
  return (
    <Router>
      <Spinner />
      <div className={styles.App}>
        <Nav/>

        <Switch>
          <Route path="/happy-dots">
            <HappyDots data={happyData} textColor='#fff'/>
          </Route>
          <Route path="/hover-pods">
            <HoverPods podData={podData}/>
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
          <Route path="/team-building">
            <TeamBuilding
              delay={150}/>
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
