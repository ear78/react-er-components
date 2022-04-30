import React from 'react';
import { useSelector } from 'react-redux';

/**
 * ReduxPass allows us to setup two way binding between redux and react.
 * It uses the concept of using controlled components within react but uses
 * redux to control the component instead of the local component state. This is purely
 * for demonstration purposes [wip]
 */
type MyProps = {
  children: React.ReactNode;
};

function ReduxPass({ children }: MyProps) {
  const stateProps = useSelector((state: any) => state.app);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, stateProps);
        }
        return child;
      })}
    </>
  );
}

export default ReduxPass;
