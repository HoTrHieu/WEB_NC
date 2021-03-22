import React, { useCallback, useState } from "react";
import { Button, Divider, Form, Input, InputNumber, Tooltip } from "antd";
import { useForm } from "antd/lib/form/Form";
import { ICourse } from "../../shared/entities/ICourse";
import { FileType } from "../../shared/enums/FileType";
import { CategorySelect } from "../category/CategorySelect";
import { Uploader } from "../uploader/Uploader";
import { IContent } from "../../shared/entities/IContent";
import { ContentEditForm } from "../content/ContentEditForm";
import { CloseCircleFilled, PlusCircleOutlined } from "@ant-design/icons";
import { Editor, EditorState } from "draft-js";

interface ICourseEditFormProps {
  course?: ICourse;
}

export function CourseEditForm(props: ICourseEditFormProps) {
  const [form] = useForm();
  const [contents, setContents] = useState<IContent[]>([]);
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const editor = React.useRef(null);

  const addContent = useCallback(() => {
    setContents([
      ...contents,
      {
        order: contents.length + 1,
      } as any,
    ]);
  }, [contents]);

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
            <Form.Item name="categoryId">
              <CategorySelect onlyChildren={true} />
            </Form.Item>
          </div>
          <div className="w-1/2">
            <label className="block mb-2">
              Title <b className="text-red-400">*</b>
            </label>
            <Form.Item name="title">
              <Input placeholder="Title..." />
            </Form.Item>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 pr-2">
            <label className="block mb-2">
              Price <b className="text-red-400">*</b>
            </label>
            <Form.Item name="price">
              <InputNumber
                className="w-fulli"
                min={0}
                max={500}
                placeholder="Price..."
              />
            </Form.Item>
          </div>
          <div className="w-1/2">
            <label className="block mb-2">Discount</label>
            <Form.Item name="discount">
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
        <Form.Item name="subDescription">
          <Input placeholder="Sub-description..." />
        </Form.Item>
        <label className="block mb-2">
          Description <b className="text-red-400">*</b>
        </label>
        <Form.Item name="description">
          <Editor
            ref={editor}
            editorState={editorState}
            onChange={setEditorState}
            placeholder="Write something!"
          />
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
        {contents.map((content) => (
          <div className="w-1/2 pr-2 mb-2">
            <div className="rounded-lg p-3 border relative">
              <div
                className="absolute text-red-400 cursor-pointer"
                style={{ top: ".3rem", right: ".3rem" }}
              >
                <Tooltip title="Remove">
                  <CloseCircleFilled className="text-xl" />
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
    </>
  );
}
