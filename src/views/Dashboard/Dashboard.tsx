import React, {
  Suspense, lazy, useEffect, useState,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '@/views/Dashboard/Dashboard.module.scss';
import { handleForm } from '../../assets/js/util/helpers.ts';
import { setComponentSettings, setIsModalActive } from '../../assets/js/lib/redux/modules/app.ts';
import { formData as componentFormData } from '../../assets/js/formData';
import PageTitle from '@/components/PageTitle/PageTitle.tsx';

// Lazy load components
//@ts-ignore
const DashboardCard = lazy(() => import('@/components/DashboardCard/DashboardCard.tsx'));
// @ts-ignore
const Modal = lazy(() => import('@/components/Modal/Modal.tsx'));
// @ts-ignore
const AppForm = lazy(() => import('@/components/AppForm/AppForm.tsx'));
// @ts-ignore
const User = lazy(() => import('@/components/User/User.tsx'));

function Dashboard() {
  // Redux
  const dispatch = useDispatch();
  const { components, isModalActive, isDarkMode } = useSelector((state: any) => state.app);

  // Local State
  const [componentId, setComponentId] = useState<number>(0);
  const [formData, setFormData] = useState<{}[]>([]);
  const dashboardFormData = componentFormData['/dashboard'];

  useEffect(() => {
    if (!dashboardFormData || Array.isArray(dashboardFormData)) return;

    const selectedFields = dashboardFormData[componentId] ?? [];
    const selectedSettings = components[componentId]?.settings ?? {};
    setFormData(selectedFields.map((field) => ({
      ...field,
      inputVal: selectedSettings[field.name] ?? field.inputVal ?? '',
      change: updateSettings,
    })));
  }, [components, componentId, dashboardFormData]);

  const updateSettings = (event: any) => {
    const formObj = handleForm(event);

    dispatch(setComponentSettings({
      ...components[componentId].settings,
      ...formObj,
    }));
  };

  const toggleModal = () => {
    dispatch(setIsModalActive(!isModalActive));
  };

  const editSettings = (id: number) => {
    setComponentId(id);
    dispatch(setIsModalActive(true));
  };

  const handleSettingsSave = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(setComponentSettings({
      ...components[componentId].settings,
    }));

    dispatch(setIsModalActive(false));
  };

  let cards;
  if (components) {
    cards = components.map((component: any) => (
      <DashboardCard key={component.id} component={component} editSettings={editSettings} isDarkMode={isDarkMode} />
    ));
  } else {
    cards = null;
  }

  return (
    <div className={`${styles.Dashboard} ${isDarkMode ? styles.Dark : ''}`}>
      <Suspense fallback="<div>Loading...</div>">
        <Modal isModalActive={isModalActive} click={toggleModal} isDarkMode={isDarkMode}>
          <AppForm click={handleSettingsSave} formData={formData} isDarkMode={isDarkMode} />
        </Modal>
      </Suspense>
      <div className='mb-12'>
        <PageTitle title="Dashboard" />
      </div>
      <div className='grid md:grid-cols-[25%_minmax(0,1fr)] gap-5'>
        <div className='w-full relative'>
          <User />
        </div>
        <div className='w-full'>
          <div className='grid lg:grid-cols-2 gap-4'>
            {cards}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
