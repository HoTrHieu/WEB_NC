import React, { useCallback, useState } from 'react';
import { Button } from 'antd';

interface IProfileActionButtonGroupProps {
  onCancel: any;
  onEdit: any;
  onSave: any;
  edit: boolean;
  saveBtnTitle?: string;
  editBtnTitle?: string;
}


export function ProfileActionButtonGroup(props: IProfileActionButtonGroupProps) {
  const [saveLoading, setSaveLoading] = useState(false);
  const { onSave } = props;
  const save = useCallback(async () => {
    setSaveLoading(true);
    await onSave();
    setSaveLoading(false);
  }, [onSave]);

  return props.edit ? (
    <div>
      <Button
        type="primary"
        shape="round"
        className="mb-2 w-full"
        loading={saveLoading}
        onClick={save}
      >
        {props.saveBtnTitle ? props.saveBtnTitle : "Save"}
      </Button>
      <Button
        className="w-full"
        shape="round"
        onClick={() => props.onCancel(false)}
      >
        Cancel
      </Button>
    </div>
  ) : (
    <Button
      className="w-full"
      type="primary"
      shape="round"
      onClick={() => props.onEdit(true)}
    >
      {props.editBtnTitle ? props.editBtnTitle : "Edit"}
    </Button>
  );
}