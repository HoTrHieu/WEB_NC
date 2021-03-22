import React from "react";
import { Checkbox, Form, Input, InputNumber } from "antd";
import { IContent } from "../../shared/entities/IContent";
import { Uploader } from "../uploader/Uploader";
import { FileType } from "../../shared/enums/FileType";

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
              Order <b className="text-red-400">*</b>
            </label>
            <Form.Item name="order">
              <InputNumber min={1} placeholder="Order..." className="w-fulli" />
            </Form.Item>
          </div>
          <div className="w-4/5">
            <label className="block mb-2">
              Title <b className="text-red-400">*</b>
            </label>
            <Form.Item name="title">
              <Input placeholder="Title..." />
            </Form.Item>
          </div>
        </div>
        <label className="block mb-2">
          Description <b className="text-red-400">*</b>
        </label>
        <Form.Item name="description">
          <Input.TextArea rows={5} placeholder="Description..." />
        </Form.Item>
        <Form.Item name="preview">
          <Checkbox>Preview <b className="text-red-400">*</b></Checkbox>
        </Form.Item>
      </Form>
      <Uploader fileType={FileType.VIDEO} />
    </>
  );
}
