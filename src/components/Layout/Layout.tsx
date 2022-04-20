import React from 'react';
import styles from './Layout.module.scss';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <main className={styles.Layout}>{children}</main>
  );
}

export default Layout;
