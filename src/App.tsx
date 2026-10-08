import React, { lazy, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* Icons */
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fas,
  faChevronDown,
  faAngleDown,
  faAngleUp,
  faBars,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { fab, faElementor } from '@fortawesome/free-brands-svg-icons';
import { far, faCompass } from '@fortawesome/free-regular-svg-icons';

/* Redux */
import {
  setAppLoading,
  setIsDrawerOpen,
} from './assets/js/lib/redux/modules/app';

/* Data */
import { esliderData } from './assets/js/data';
import { formData as componentFormData } from './assets/js/formData';

/* Global Layout Components */
import Nav from './components/Nav/Nav';
import Spinner from './components/Spinner/Spinner';
import Drawer from './components/Drawer/Drawer';
import ComponentSettings from './components/ComponentSettings/ComponentSettings';

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
library.add(
  fas,
  fab,
  far,
  faAngleDown,
  faAngleUp,
  faCompass,
  faElementor,
  faChevronDown,
  faChevronLeft,
);

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { appLoading, isModalActive, isDarkMode, isDrawerOpen } = useSelector(
    (state: any) => state.app,
  );
  const selectedFormData = componentFormData[location.pathname] ?? null;
  const drawerFormData = Array.isArray(selectedFormData) ? selectedFormData : null;
  const shouldShowSettingsButton =
    Array.isArray(drawerFormData) && drawerFormData.length > 0;

  useEffect(() => {
    // Fake data delay
    setTimeout(() => {
      dispatch(setAppLoading(false));
    }, 900);
  }, [appLoading]);

  return (
    <div
      data-testid='app-component'
      className={`site-wrapper relative ${isDarkMode ? 'dark' : ''}`}
    >
      <Spinner mounted={appLoading} isDarkMode={isDarkMode} />
      <ScrollToTop />
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => dispatch(setIsDrawerOpen(false))}
        placement='right'
      >
        <ComponentSettings formData={drawerFormData} />
      </Drawer>

      <main
        className={`${styles.Main} ${isModalActive ? styles.OverflowHidden : ''} max-w-7xl mx-auto px-4`}
      >
        <Nav />
        <section className={styles.Content}>
        {shouldShowSettingsButton && (
          <button
            type='button'
            aria-label={
              isDrawerOpen ? 'Close settings drawer' : 'Open settings drawer'
            }
            aria-expanded={isDrawerOpen}
            onClick={() => dispatch(setIsDrawerOpen(!isDrawerOpen))}
            className='top-27 z-10 flex ml-auto -mt-10 mb-2 items-center gap-2 rounded-full bg-black px-4 py-2 text-white cursor-pointer shadow-lg transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
          >
            <FontAwesomeIcon
              icon={faBars}
              className='h-4 w-4'
              aria-hidden='true'
            />
            {/* <span className="whitespace-nowrap text-sm font-medium">Settings</span> */}
          </button>
        )}
          <Switch>
            <Route path='/dashboard'>
              <Dashboard />
            </Route>
            <Route path='/e-slider'>
              <Eslider data={esliderData} />
            </Route>
            <Route path='/happy-dots'>
              <HappyDotsView />
            </Route>
            <Route path='/hover-pods'>
              <HoverPodsView />
            </Route>
            <Route path='/page-banner'>
              <BannerView />
            </Route>
            <Route path='/team-building'>
              <TeamBuilding />
            </Route>
            <Route path='/dropper'>
              <DropperView />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </section>
        <Footer />
        <BackToTopButton />
      </main>
    </div>
  );
}

export default App;
