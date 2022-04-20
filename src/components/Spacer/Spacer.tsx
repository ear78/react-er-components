import React from 'react';

type SpacerProps = {
  height: string | number;
};

function Spacer({ height }: SpacerProps) {
  return <div style={{ height: `${height}px`, width: '100%' }} />;
}

export default Spacer;
