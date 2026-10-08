import React, { lazy, useRef } from 'react';
import { useSelector } from 'react-redux';
import usePageSettings from '../../assets/js/hooks/usePageSettings.ts';
import PageTitle from '@/components/PageTitle/PageTitle.tsx';
import styles from './TeamBuilding.module.scss';
import { forms } from '../../assets/js/data.ts';

// Lazy Loaded Components
// @ts-ignore
const TeamCard = lazy(() => import('@/components/TeamCard/TeamCard.tsx'));

function TeamBuilding() {
  const { isDarkMode } = useSelector((state: any) => state.app);
  const pageSettings = usePageSettings(forms, 2);

  // Local State
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className={`${styles.TeamBuilding} ${isDarkMode ? styles.Dark : ''}`}>
      <PageTitle title="TeamBuilding" />
      <TeamCard delay={100} altLayout={pageSettings.settings.altLayout} isDarkMode={isDarkMode} />
    </div>
  );
}

export default TeamBuilding;
