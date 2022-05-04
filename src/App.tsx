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
import ReduxPass from './components/ReduxPass/ReduxPass';
import { setAppLoading } from './assets/js/lib/redux/modules/app';

/* Global Layout Components */
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Spinner from './components/Spinner/Spinner';

/* Views */
import Home from './views/Home/Home';
import BannerParent from './views/Banner/BannerView';
import HoverPodsParent from './views/HoverPods/HoverPodsView';
import TeamBuilding from './views/TeamBuilding/TeamBuilding';
import HappyDotsParent from './views/HappyDots/HappyDotsParent';
import DropperParent from './views/Dropper/DropperView';
import Eslider from './views/Eslider/Eslider';
import Dashboard from './views/Dashboard/Dashboard';

/** Css */
import styles from './App.module.scss';

/* Font Awesome */
library.add(fas, fab, far, faAngleDown, faAngleUp, faCompass, faElementor, faChevronDown);

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: any) => state.app.appLoading);

  useEffect(() => {
    // Fake data delay
    setTimeout(() => {
      dispatch(setAppLoading(false));
    }, 900);
  }, [isLoading]);

  return (
    <Router>
      <Spinner mounted={isLoading} />

      <Container component="main" maxWidth="lg">
        <Nav />

        <Grid component="section" className={styles.Content}>
          <Switch>
            <Route path="/dashboard">
              <ReduxPass>
                <Dashboard />
              </ReduxPass>
            </Route>
            <Route path="/e-slider">
              <Eslider data={esliderData} />
            </Route>
            <Route path="/happy-dots">
              <HappyDotsParent />
            </Route>
            <Route path="/hover-pods">
              <ReduxPass>
                <HoverPodsParent />
              </ReduxPass>
            </Route>
            <Route path="/page-banner">
              <ReduxPass>
                <BannerParent />
              </ReduxPass>
            </Route>
            <Route path="/team-building">
              <ReduxPass>
                <TeamBuilding />
              </ReduxPass>
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
