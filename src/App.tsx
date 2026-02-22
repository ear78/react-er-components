import React, { lazy, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

/* Icons */
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fas, faChevronDown, faAngleDown, faAngleUp,
} from '@fortawesome/free-solid-svg-icons';
import { fab, faElementor } from '@fortawesome/free-brands-svg-icons';
import { far, faCompass } from '@fortawesome/free-regular-svg-icons';

/* Redux */
import { setAppLoading } from './assets/js/lib/redux/modules/app';

/* Data */
import { esliderData } from './assets/js/data';

/* Global Layout Components */
import Nav from './components/Nav/Nav';
import Spinner from './components/Spinner/Spinner';

//@ts-ignore
const Footer = lazy(() => import('./components/Footer/Footer.tsx'));
//@ts-ignore
const ScrollToTop = lazy(() => import('./components/ScrollToTop/ScrollToTop.tsx'));
//@ts-ignore
const BackToTopButton = lazy(() => import('./components/BackToTopButton/BackToTopButton.tsx'));

/* Views */
import Home from '@/views/Home/Home.tsx';
import Eslider from '@/views/Eslider/EsliderView.tsx';
import HappyDotsView from '@/views/HappyDots/HappyDotsView.tsx';
import HoverPodsView from '@/views/HoverPods/HoverPodsView.tsx';
import BannerView from '@/views/Banner/BannerView.tsx';
import TeamBuilding from '@/views/TeamBuilding/TeamBuilding.tsx';
import DropperView from '@/views/Dropper/DropperView.tsx';
import Dashboard from '@/views/Dashboard/Dashboard.tsx';

/** Css */
import styles from './App.module.scss';

/* Font Awesome */
library.add(fas, fab, far, faAngleDown, faAngleUp, faCompass, faElementor, faChevronDown);

function App() {
  const dispatch = useDispatch();
  const { appLoading, isModalActive, isDarkMode } = useSelector((state: any) => state.app);

  useEffect(() => {
    // Fake data delay
    setTimeout(() => {
      dispatch(setAppLoading(false));
    }, 900);
  }, [appLoading]);

  return (
    <div data-testid="app-component" className={`site-wrapper ${isDarkMode ? 'dark' : ''}`}>
      <Router>
        <Spinner mounted={appLoading} isDarkMode={isDarkMode} />
        <ScrollToTop />

        <main className={`${styles.Main} ${isModalActive ? styles.OverflowHidden : ''} max-w-7xl mx-auto px-4`}>
          <Nav />

          <section className={styles.Content}>
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
                <DropperView />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </section>
          <Footer />
          <BackToTopButton />
        </main>

      </Router>
    </div>
  );
}

export default App;
