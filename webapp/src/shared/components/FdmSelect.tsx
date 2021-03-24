import { Select, SelectProps } from "antd";
import React from "react";

type Getter = (item: any) => any;

interface IFdmSelectProps extends SelectProps<any> {
  items: any[];
  getLabel?: Getter;
  getValue?: Getter;
}

export function FdmSelect(props: IFdmSelectProps) {
  const { items, getValue, getLabel, ...restProps } = props;
  return (
    <Select className="w-full" loading={!items} {...restProps}>
      {items && items.map((item) => (
        <Select.Option
          value={getValue ? getValue(item) : item.id}
          key={getValue ? getValue(item) : item.id}
        >
          {getLabel ? getLabel(item) : item.name}
        </Select.Option>
      ))}
    </Select>
  );
}
