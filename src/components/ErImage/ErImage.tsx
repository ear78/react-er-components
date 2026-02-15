import React, { useState } from 'react';
import styles from '@/components/ErImage/ErImage.module.scss';

interface ErImageProps {
  src: string;
  width: number;
  height?: number;
  lazyLoad?: boolean;
  altText?: string;
  objectFit?: 'Cover' | 'Contain' | 'Fill';
  aspectRatio?: 'Square' | 'Video' | 'Landscape';
  isLoading?: boolean;
}

export default function ErImage({
  src,
  width,
  height,
  altText = '',
  lazyLoad = true,
  objectFit,
  aspectRatio,
  isLoading = false,
}: ErImageProps) {
  const [isImageLoaded, setImageLoaded] = useState(false);

  let objectFitClass = '';
  if (objectFit) {
    if (!['cover', 'contain', 'fill'].includes(objectFit)) {
      console.warn(`Invalid object fit "${objectFit}". Supported values are 'cover', 'contain', 'fill'.`);
    }
    const objectFitCapitalized = objectFit.split('')[0].toUpperCase() + objectFit.slice(1);
    objectFitClass = styles[`ObjectFit${objectFitCapitalized}`];
  }

  let ratioClass = '';
  if (aspectRatio) {
    if (!['Square', 'Video', 'Landscape'].includes(aspectRatio)) {
      console.warn(`Invalid aspect ratio "${aspectRatio}". Supported 'Square', 'Video', 'Landscape'`);
    }
    const aspectRatioCapitalized = aspectRatio.split('')[0].toUpperCase() + aspectRatio.slice(1);
    ratioClass = styles[`AspectRatio${aspectRatioCapitalized}`];
  }

  return (
    <img
      src={src}
      style={{ ...(aspectRatio && { aspectRatio }) }}
      className={`${styles.Image} ${isImageLoaded && !isLoading ? styles.ImageLoaded : ''} ${ratioClass} ${objectFitClass}`}
      loading={lazyLoad ? 'lazy' : undefined}
      alt={altText}
      width={width}
      height={height}
      onLoad={() => setImageLoaded(true)}
      decoding="async"
    />
  );
}
