import React, { lazy } from 'react';
import PageTitle from '@/components/PageTitle/PageTitle.tsx';

//@ts-ignore
const Eslider = lazy(() => import('@/components/Eslider/Eslider.tsx'));

type EsliderViewProps = {
  data: {
    id: number;
    image: string;
    text: string;
  }[];
};

export default function EsliderView({ data }: EsliderViewProps) {
  return (
    <section>
      <div className="mb-12">
        <PageTitle title="EasySlider" />
      </div>
      <div>
        <Eslider data={data} />
      </div>
    </section>
  );
}
