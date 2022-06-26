import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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

/* Redux */
import { setAppLoading } from './assets/js/lib/redux/modules/app';

/* Global Layout Components */
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Spinner from './components/Spinner/Spinner';

/* Views */
import Home from './views/Home/Home';
import BannerView from './views/Banner/BannerView';
import HoverPodsView from './views/HoverPods/HoverPodsView';
import TeamBuilding from './views/TeamBuilding/TeamBuilding';
import HappyDotsView from './views/HappyDots/HappyDotsView';
import DropperParent from './views/Dropper/DropperView';
import Eslider from './views/Eslider/Eslider';
import Dashboard from './views/Dashboard/Dashboard';

/** Css */
import styles from './App.module.scss';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

/* Font Awesome */
library.add(fas, fab, far, faAngleDown, faAngleUp, faCompass, faElementor, faChevronDown);

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: any) => state.app.appLoading);

  useEffect(() => {
    // window.addEventListener('load', () => {
    //   dispatch(setAppLoading(false));
    // });

    // Fake data delay
    setTimeout(() => {
      dispatch(setAppLoading(false));
    }, 900);
  }, [isLoading]);

  return (
    <Router>
      <Spinner mounted={isLoading} />
      <ScrollToTop />

      <Container component="main" maxWidth="lg">
        <Nav />

        <Grid component="section" className={styles.Content}>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/e-slider">
              <Eslider data={esliderData} />
            </Route>
            <Route path="/happy-dots">
              <HappyDotsView />
            </Route>
            <Route path="/hover-pods">
              <HoverPodsView />
            </Route>
            <Route path="/page-banner">
              <BannerView />
            </Route>
            <Route path="/team-building">
              <TeamBuilding />
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
