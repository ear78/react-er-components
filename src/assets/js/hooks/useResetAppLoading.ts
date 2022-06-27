import { useDispatch } from 'react-redux';
import { setAppLoading } from '../lib/redux/modules/app';

/**
 * Custom hook to manage loading mechanism from any component
 * @function
 * @returns callback to fire the dispatch setting setAppLoading
 */
function useResetApploading() {
  const dispatch = useDispatch();
  const fireDispatch = () => dispatch(setAppLoading(true));
  return fireDispatch;
}

export default useResetApploading;
