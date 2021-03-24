import { notification, Switch, SwitchProps } from 'antd';
import React, { useCallback } from 'react';
import { EntityStatus } from '../enums/EntityStatus';
import { NotificationUtils } from '../utils/NotificationUtils';

interface IFdmStatusSwitchProps extends SwitchProps {
  id: number;
  status: EntityStatus;
  onUpdateStatus: (id: number, status: EntityStatus) => any;
  succesMessage?: string;
}

export function FdmStatusSwitch(props: IFdmStatusSwitchProps) {
  const { id, status, onUpdateStatus, succesMessage, ...restProps } = props;
  const isActive = status === EntityStatus.ACTIVE;
  
  const switchStatus = useCallback(async (status: boolean) => {
    try {
      await onUpdateStatus(id, status ? EntityStatus.ACTIVE : EntityStatus.DISABLED);
      notification.success({
        message: 'Success',
        description: succesMessage || "Update status success"
      })
    } catch (err) {
      console.error(err);
      NotificationUtils.error(err.message);
    }
  }, [id, onUpdateStatus, succesMessage]);

  return (
    <Switch defaultChecked={isActive} onChange={switchStatus} {...restProps} />
  )
}