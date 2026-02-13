import React from 'react';
import styles from '@/components/ErImage/ErImage.module.scss';

interface ErImageProps {
  src: string;
  width: number;
  height?: number;
  lazyLoad?: boolean;
  aspectRatio?: string;
}

export default function ErImage({
  src,
  width,
  height,
  lazyLoad = true,
  aspectRatio,
}: ErImageProps) {
  return (
    <img
      src={src}
      style={{ ...(aspectRatio && { aspectRatio }) }}
      className={styles.Image}
      loading={lazyLoad ? 'lazy' : undefined}
      width={width}
      height={height}
    />
  );
}
