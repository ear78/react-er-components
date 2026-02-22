import React from 'react';
import Edit from '@mui/icons-material/Edit';
import styles from '@/components/DashboardCard/DashboardCard.module.scss';
import logo from '@/assets/img/er-logo.svg';

interface DashboardCardProps {
  component: { id: number, component: string, description: string, settings: {} };
  editSettings: (id: number) => void;
  isDarkMode: boolean;
};

export default function DashboardCard({ component, editSettings, isDarkMode }: Readonly<DashboardCardProps>) {
  const truncate = (str: any, maxLength = 30) => {
    const truncated = str.length > maxLength ? `${str.slice(0, maxLength - 1)}...` : str;
    return truncated;
  };

  return (
    <div key={component.id} className={`${styles.Card} h-auto ${isDarkMode ? styles.Dark : ''}`}>
      <p className={styles.Header}>
        <img src={logo} alt="logo" />
        {component.component}
      </p>
      <p className={styles.Description}>
        {component.description}
        {Object.keys(component.settings).length > 1
          ? Object.entries(component.settings).map(([key, value]: any) => (
            <span key={key} className={styles.SettingsPill}>
              <b>{`${key}:`}</b>
              &nbsp;
              {typeof value === 'boolean' && value ? 'True'
                : typeof value === 'boolean' && !value ? 'False'
                  : truncate(value)}
            </span>
          ))
          : <span className={styles.SettingsPill}>Default Settings</span>}
      </p>
      <p className={styles.Footer}>
        <span className={styles.Circle} />
        {component.component}
        &nbsp; settings
        <button type="button" aria-label={`Edit settings for ${component.component}`} onClick={() => editSettings(component.id)} className={styles.EditBtn}>
          <Edit fontSize="inherit">edit</Edit>
        </button>
      </p>
    </div>
  );
}