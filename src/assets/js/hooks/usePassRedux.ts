import { useSelector } from 'react-redux';

function useReduxPass() {
  const stateProps = useSelector((state: any) => state.app);

  return stateProps;
}

export default useReduxPass;
