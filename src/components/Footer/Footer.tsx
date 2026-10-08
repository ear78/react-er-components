import React, {lazy} from 'react';
import { useSelector } from 'react-redux';
import styles from './Footer.module.scss';
import { socialItems } from '../../assets/js/data';

//@ts-ignore
const Copyright = lazy(()=> import('@/components/Copyright/Copyright.tsx'));
//@ts-ignore
const SocialComp = lazy(() => import('@/components/SocialComp/SocialComp.tsx'));

function Footer() {
  const { isDarkMode } = useSelector((state: any) => state.app);
  return (
    <footer className={styles.Footer}>
      <SocialComp
        data={socialItems}
        isDarkMode={isDarkMode}
      />
      <Copyright />
    </footer>
  );
}

export default Footer;
