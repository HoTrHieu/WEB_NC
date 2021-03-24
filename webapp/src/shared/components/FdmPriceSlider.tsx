import { Slider } from 'antd';
import { SliderRangeProps } from 'antd/lib/slider';
import React from 'react';

const marks = {
  0: '$0',
  500: '$500'
}

export function FdmPriceSlider(props: SliderRangeProps) {
  return (
    <Slider marks={marks} {...props} range min={0} max={500} />
  )
}