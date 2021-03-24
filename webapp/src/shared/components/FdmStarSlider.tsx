import { Slider } from 'antd';
import { SliderRangeProps } from 'antd/lib/slider';
import React from 'react';

const marks = {
  0: '0',
  5: '5'
}

export function FdmStarSlider(props: SliderRangeProps) {
  return (
    <Slider marks={marks} {...props} range min={0} max={5} />
  )
}