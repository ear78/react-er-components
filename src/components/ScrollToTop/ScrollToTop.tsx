import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { appLoading } = useSelector((state: any) => state.app);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [appLoading, pathname]);

  return null;
}

export default ScrollToTop;
