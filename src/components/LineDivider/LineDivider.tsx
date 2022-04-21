import React from 'react';

type LineDividerProps = {
  lineWidth: string;
};

function LineDivider({ lineWidth = '80%' }: LineDividerProps) {
  const LineDividerStyle = {
    height: '1px',
    width: lineWidth,
    backgroundColor: '#ebebeb',
  };
  return <div style={LineDividerStyle} />;
}

export default LineDivider;
