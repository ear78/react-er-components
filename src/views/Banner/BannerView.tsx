import React, { lazy } from 'react';
import { useSelector } from 'react-redux';
import styles from '@/views/Banner/BannerView.module.scss';
import { bannerImgWebp, bannerImgWebpSm } from '../../assets/js/data';

// Lazy load components
// @ts-ignore
const Banner = lazy(() => import('@/components/Banner/Banner.tsx'));
function BannerParent() {
  const { components, appLoading } = useSelector((state: any) => state.app);

  const { settings } = components[0];

  return (
    <div className={styles.BannerParent}>
      <div className={styles.Content}>
        <Banner
          preTitle={settings.preTitle}
          title={settings.title}
          subTitle={settings.subTitle}
          btnText={settings.btnText}
          ctaUrl={settings.ctaUrl}
          btnColor={settings.btnColor}
          overlay={settings.overlay}
          overlayDark={settings.overlayDark}
          overlayFull={settings.overlayFull}
          textAlign={settings.textAlign}
          showBtn={settings.showBtn}
          target
          webpSizes={{ lgWebp: bannerImgWebp, smWebp: bannerImgWebpSm }}
          isLoading={appLoading}
        />
      </div>
    </div>
  );
}

export default BannerParent;
