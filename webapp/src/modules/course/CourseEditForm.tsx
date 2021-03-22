import React, { useCallback, useRef, useState } from "react";
import { Button, Divider, Form, Input, InputNumber, Tooltip } from "antd";
import { useForm } from "antd/lib/form/Form";
import { ICourse } from "../../shared/entities/ICourse";
import { FileType } from "../../shared/enums/FileType";
import { CategorySelect } from "../category/CategorySelect";
import { Uploader } from "../uploader/Uploader";
import { IContent } from "../../shared/entities/IContent";
import { ContentEditForm } from "../content/ContentEditForm";
import { CloseCircleFilled, PlusCircleOutlined } from "@ant-design/icons";
import { FdmEditor } from "../../shared/components/FdmEditor";
import { CourseEditFormRules } from "./CourseEditFormRules";
import { v4 as uuidv4 } from 'uuid';

interface ICourseEditFormProps {
  course?: ICourse;
}

export function CourseEditForm(props: ICourseEditFormProps) {
  const [form] = useForm();
  const [contents, setContents] = useState<IContent[]>([]);
  const addContent = useCallback(() => {
    setContents([
      ...contents,
      {
        order: contents.length + 1,
        key: uuidv4()
      } as any,
    ]);
  }, [contents]);

  const createCourse = useCallback(() => {

  }, []);

  const uploadCountRef = useRef(0);
  const onUpLoadSuccessHandler = useCallback(() => {
    if (++uploadCountRef.current === 2) {

    }
  }, []);

  return (
    <>
      <h1 className="text-xl">
        <b>Course information</b>
      </h1>
      <Divider />
      <Form form={form} initialValues={props.course}>
        <div className="flex">
          <div className="w-1/2 pr-2">
            <label className="block mb-2">
              Category <b className="text-red-400">*</b>
            </label>
            <Form.Item name="categoryId" rules={CourseEditFormRules.categoryId}>
              <CategorySelect onlyChildren={true} />
            </Form.Item>
          </div>
          <div className="w-1/2">
            <label className="block mb-2">
              Title <b className="text-red-400">*</b>
            </label>
            <Form.Item name="title" rules={CourseEditFormRules.title}>
              <Input placeholder="Title..." />
            </Form.Item>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 pr-2">
            <label className="block mb-2">
              Price ($) <b className="text-red-400">*</b>
            </label>
            <Form.Item name="price" rules={CourseEditFormRules.price}>
              <InputNumber
                className="w-fulli"
                min={0}
                max={500}
                placeholder="Price..."
              />
            </Form.Item>
          </div>
          <div className="w-1/2">
            <label className="block mb-2">Discount ($)</label>
            <Form.Item name="discount" rules={CourseEditFormRules.discount}>
              <InputNumber
                className="w-fulli"
                min={0}
                max={500}
                placeholder="Discount..."
              />
            </Form.Item>
          </div>
        </div>
        <label className="block mb-2">
          Sub-description <b className="text-red-400">*</b>
        </label>
        <Form.Item name="subDescription" rules={CourseEditFormRules.subDescription}>
          <Input placeholder="Sub-description..." />
        </Form.Item>
        <label className="block mb-2">
          Description
        </label>
        <Form.Item name="description">
          <FdmEditor />
        </Form.Item>
      </Form>
      <div>
        <label className="block mb-2">
          Avatar <b className="text-red-400">*</b>
        </label>
        <Uploader fileType={FileType.IMAGE} />
      </div>

      <div>
        <label className="block mb-2">Cover</label>
        <Uploader fileType={FileType.IMAGE} />
      </div>

      <h1 className="text-xl mt-8">
        <b>Contents</b>
      </h1>
      <Divider />
      <div className="flex flex-wrap">
        {contents.map((content, idx: number) => (
          <div className="w-1/2 pr-2 mb-2" key={(content as any).key}>
            <div className="rounded-lg p-3 border relative">
              <div
                className="absolute text-red-400 cursor-pointer"
                style={{ top: ".3rem", right: ".3rem" }}
              >
                <Tooltip title="Remove">
                  <CloseCircleFilled className="text-xl" onClick={() => {
                    contents.splice(idx, 1);
                    setContents([...contents]);
                  }} />
                </Tooltip>
              </div>
              <ContentEditForm content={content} />
            </div>
          </div>
        ))}
      </div>
      <Button type="primary" shape="round" onClick={addContent}>
        <div className="flex items-center">
          <PlusCircleOutlined className="mr-2" /> Add content
        </div>
      </Button>
      <Divider />
      <Button danger type="primary" shape="round" className="w-full">
        Create course
      </Button>
    </>
  );
}
