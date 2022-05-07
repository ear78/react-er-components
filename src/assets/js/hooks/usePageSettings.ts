import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setComponentSettings } from '../lib/redux/modules/app';
import { handleForm } from '../util/helpers';

function usePageSettings(viewFormData: any, pageSetting: number) {
  // Redux
  const dispatch = useDispatch();
  const { components } = useSelector((state: any) => state.app);
  const { settings } = components[pageSetting];

  // Local State
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [formData, setFormData] = useState([{}]);
  const mergedFormData = viewFormData[pageSetting].map((data: any) => {
    const formObj = {
      ...data,
      change: updateSettings,
      inputVal: settings[data.name],
    };
    return formObj;
  });
  // console.log(mergedFormData, viewFormData);

  useEffect(() => {
    setFormData(mergedFormData);
  }, [settings]);

  function updateSettings(event: any) {
    const formObj = handleForm(event);

    dispatch(setComponentSettings({
      ...settings,
      ...formObj,
    }));
  }

  const handleSettingsSave = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(setComponentSettings({
      ...settings,
    }));

    setIsMenuActive(false);
  };

  const toggleAdjusterMenu = () => {
    setIsMenuActive(() => (!isMenuActive));
  };

  return {
    toggleAdjusterMenu,
    handleSettingsSave,
    updateSettings,
    isMenuActive,
    formData,
    settings,
  };
}

export default usePageSettings;
