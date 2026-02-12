import React, { useState } from 'react';
import styles from './Banner.module.scss';
import Button from '@/components/Button/Button';
import Heading from '@/components/Heading/Heading';

/**
 * Banner prop types
 */
interface BannerProps {
  /** URL of the background image */
  bgImage: string;
  /** Custom color of the button */
  btnColor?: string;
  /** Text displayed on the button */
  btnText: string;
  /** URL for the call to action */
  ctaUrl: string;
  /** Pre title text */
  preTitle?: string;
  /** Whether to show overlay */
  overlay?: boolean;
  /** Whether the overlay is dark */
  overlayDark?: boolean;
  /** Whether the overlay covers full height */
  overlayFull?: boolean;
  /** Whether to show the button */
  showBtn?: boolean;
  /** Subtitle text */
  subTitle?: string;
  /** Whether the link opens in a new tab */
  target?: boolean;
  /** Text alignment: 'left', 'center', 'right' */
  textAlign?: string;
  /** Text color: 'dark' or default */
  textColor?: string;
  /** Main title text */
  title: string;
  /** Optional WebP image sources for responsive images. { lgWebp: string; smWebp: string } */
  webpSizes?: { lgWebp: string; smWebp: string };
  /** Optional loading state for listening on a page load */
  isLoading?: boolean;
}

function Banner({
  bgImage, btnColor, btnText, ctaUrl, preTitle, overlay, overlayDark, overlayFull,
  showBtn = true, subTitle, target, textColor, title, textAlign, webpSizes, isLoading = false,
}: BannerProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const bannerBtnColor = btnColor || '';
  const bannerOverlay = overlay ? '' : styles.OverlayNone;
  const bannerOverlayDark = overlayDark ? styles.Dark : '';
  const bannerOverlayFull = overlayFull ? styles.Full : '';
  const bannerTextAlign = textAlign === 'center' ? styles.Center : textAlign === 'right' ? styles.Right : '';
  const bannerTextColor = textColor === 'dark' ? styles.DarkText : '';
  const bannerImg = bgImage.length ? bgImage : '';
  const bannerPreTitle = !preTitle ? 'Welcome to Page Banner' : preTitle;
  const bannerTitle = !title ? 'Page Banner' : title;
  const bannerSubTitle = !subTitle ? 'Banners to help your site look great!' : subTitle;
  const bannerBtnText = !btnText ? 'Kontakt' : btnText;

  return (
    <section
      className={`${styles.BackgroundImg} ${bannerTextAlign}`}
    >
      <picture>
        {webpSizes ? (
          <>
            <source srcSet={`${webpSizes.lgWebp}`} type="image/webp" media="(width >= 800px)" />
            <source srcSet={`${webpSizes.smWebp}`} type="image/webp" media="(width < 800px)" />
          </>
        ) : null}
        <img
          className={`${styles.Image} ${isImageLoaded && !isLoading ? styles.ImageLoaded : ''}`}
          src={`${bannerImg}`}
          alt={bannerTitle}
          onLoad={() => setIsImageLoaded(true)}
          loading="lazy"
          decoding="async"
        />
      </picture>
      <div className={`${styles.Overlay} ${bannerOverlayFull} ${bannerOverlayDark} ${bannerOverlay}`}>
        <p className={`${styles.PreTitle} ${bannerTextColor}`}>{bannerPreTitle}</p>
        <Heading variant="h1">{bannerTitle}</Heading>
        <p className={`${styles.SubTitle} ${bannerTextColor}`}>{bannerSubTitle}</p>
        {showBtn
          ? (
            <Button href={ctaUrl} target={target} secondary sx={{ background: `${bannerBtnColor}` }}>
              {bannerBtnText}
            </Button>
          )
          : null}
      </div>
    </section>
  );
}

export default Banner;
