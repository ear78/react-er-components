import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

/* Data */
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fas, faChevronDown, faAngleDown, faAngleUp,
} from '@fortawesome/free-solid-svg-icons';
import { fab, faElementor } from '@fortawesome/free-brands-svg-icons';
import { far, faCompass } from '@fortawesome/free-regular-svg-icons';
import { esliderData } from './assets/js/data';

/* Global Layout Components */
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Spinner from './components/Spinner/Spinner';

/* Views */
import Home from './views/Home/Home';
import BannerParent from './views/Banner/BannerParent';
import HoverPodsParent from './views/HoverPods/HoverPodsParent';
import TeamBuilding from './views/TeamBuilding/TeamBuilding';
import HappyDotsParent from './views/HappyDots/HappyDotsParent';
import DropperParent from './views/Dropper/DropperParent';
import Eslider from './views/Eslider/Eslider';
import Dashboard from './views/Dashboard/Dashboard';

/** Css */
import styles from './App.module.scss';

/* Font Awesome */
library.add(fas, fab, far, faAngleDown, faAngleUp, faCompass, faElementor, faChevronDown);

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        setMounted(!mounted);
      }, 900);
    });
  });

  return (
    <Router forceRefresh>
      <Spinner mounted={mounted} />

      <Container component="main" maxWidth="lg">
        <Nav />

        <Grid component="section" className={styles.Content}>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/e-slider">
              <Eslider mounted={mounted} data={esliderData} />
            </Route>
            <Route path="/happy-dots">
              <HappyDotsParent />
            </Route>
            <Route path="/hover-pods">
              <HoverPodsParent
                mounted={mounted}
              />
            </Route>
            <Route path="/page-banner">
              <BannerParent />
            </Route>
            <Route path="/team-building">
              <TeamBuilding mounted={mounted} />
            </Route>
            <Route path="/dropper">
              <DropperParent />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Grid>
        <Footer />
      </Container>

    </Router>
  );
}

export default App;
