import React from 'react';
import Eslider from '../../components/Eslider/Eslider';
import PageTitle from '@/components/PageTitle/PageTitle';

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
