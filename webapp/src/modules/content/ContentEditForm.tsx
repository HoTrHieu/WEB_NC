import React from "react";
import { Checkbox, Form, Input, InputNumber } from "antd";
import { IContent } from "../../shared/entities/IContent";
import { Uploader } from "../uploader/Uploader";
import { FileType } from "../../shared/enums/FileType";
import { FdmEditor } from "../../shared/components/FdmEditor";
import { ContentEditFormRules } from "./ContentEditFormRules";

interface IContentEditFormProps {
  content?: IContent;
}

export function ContentEditForm(props: IContentEditFormProps) {
  const [form] = Form.useForm();
  return (
    <>
      <Form form={form} initialValues={props.content}>
        <div className="flex">
          <div className="w-1/5 pr-2">
            <label className="block mb-2">
              Order
            </label>
            <Form.Item name="order">
              <InputNumber disabled min={1} placeholder="Order..." className="w-fulli" />
            </Form.Item>
          </div>
          <div className="w-4/5">
            <label className="block mb-2">
              Title <b className="text-red-400">*</b>
            </label>
            <Form.Item name="title" rules={ContentEditFormRules.title}>
              <Input placeholder="Title..." />
            </Form.Item>
          </div>
        </div>
        <Form.Item name="preview">
          <Checkbox>Preview</Checkbox>
        </Form.Item>
        <label className="block mb-2">
          Description
        </label>
        <Form.Item name="description">
          <FdmEditor />
        </Form.Item>
      </Form>
      <label className="block mb-2">Video <b className="text-red-400">*</b></label>
      <Uploader fileType={FileType.VIDEO} />
    </>
  );
}
