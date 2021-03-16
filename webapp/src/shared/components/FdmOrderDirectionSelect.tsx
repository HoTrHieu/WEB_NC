import { Select, SelectProps } from 'antd';
import React from 'react';
import { OrderDirection, OrderDirectionDisplay } from '../enums/OrderDirection';

export function FdmOrderDirectionSelect(props: SelectProps<OrderDirection>) {
  return (
    <Select placeholder="Direction" {...props}>
      {Object.values(OrderDirection).map(val => (
        <Select.Option value={val}>{OrderDirectionDisplay[val]}</Select.Option>
      ))}
    </Select>
  )
}