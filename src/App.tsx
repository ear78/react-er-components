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
import Footer from './components/Footer/Footer';
import Spinner from './components/Spinner/Spinner';
import BackToTopButton from './components/BackToTopButton/BackToTopButton';

/* Views */
//@ts-ignore
const Home = lazy(() => import('@/views/Home/Home.tsx'));
//@ts-ignore
const Eslider = lazy(() => import('@/views/Eslider/EsliderView.tsx'));
//@ts-ignore
const HappyDotsView = lazy(() => import('@/views/HappyDots/HappyDotsView.tsx'));
//@ts-ignore
const HoverPodsView = lazy(() => import('@/views/HoverPods/HoverPodsView.tsx'));
//@ts-ignore
const BannerView = lazy(() => import('@/views/Banner/BannerView.tsx'));
//@ts-ignore
const TeamBuilding = lazy(() => import('@/views/TeamBuilding/TeamBuilding.tsx'));
//@ts-ignore
const DropperParent = lazy(() => import('@/views/Dropper/DropperView.tsx'));
//@ts-ignore
const Dashboard = lazy(() => import('@/views/Dashboard/Dashboard.tsx'));

/** Css */
import styles from './App.module.scss';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

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
                <DropperParent />
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
