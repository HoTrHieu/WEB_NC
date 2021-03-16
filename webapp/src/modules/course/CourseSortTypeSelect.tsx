import { Select, SelectProps } from 'antd';
import React from 'react';
import { CourseOrderBy, CourseOrderByDisplay } from './enums/CourseOrderBy';

export function CourseOrderBySelect(props: SelectProps<CourseOrderBy>) {
  return (
    <Select placeholder="Order by" {...props}>
      {Object.values(CourseOrderBy).map(val => (
        <Select.Option key={val} value={val}>{CourseOrderByDisplay[val]}</Select.Option>
      ))}
    </Select>
  )
}