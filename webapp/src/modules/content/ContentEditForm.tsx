import React, { useCallback, useEffect, useRef, useState } from "react";
import { Checkbox, Form, Input, InputNumber, notification } from "antd";
import { IContent } from "../../shared/entities/IContent";
import { Uploader } from "../uploader/Uploader";
import { FileType } from "../../shared/enums/FileType";
import { FdmEditor } from "../../shared/components/FdmEditor";
import { ContentEditFormRules } from "./ContentEditFormRules";
import { ASSETS_URL } from "../../shared/constants/constants";

interface IContentEditFormProps {
  content?: IContent;
  formRef?: any;
}

export function ContentEditForm(props: IContentEditFormProps) {
  const [form] = Form.useForm();
  const { formRef, content: propsContent } = props;
  const callbackRef = useRef<any>();
  const videoRef = useRef<any>();
  const editorRef = useRef<any>();

  const validate = useCallback(async () => {
    let content;
    try {
      content = await form.validateFields();
    } catch {
      return false;
    }

    if (!videoRef.current.getFile()) {
      notification.error({
        message: "Error",
        description: `Content ${content.order} must have video`,
      });
      return false;
    }

    return content;
  }, [form]);

  const startProcess = useCallback(async () => {
    const content = await validate();
    if (!!videoRef.current.getFile()) {
      videoRef.current.processFile();
    }
    return content;
  }, [validate]);

  const onUpLoadSuccessHandler = useCallback((result) => {
    callbackRef.current(result.filePath);
  }, []);

  useEffect(() => {
    if (formRef) {
      formRef.current = {
        validate,
        getContent() {
          return new Promise(async (resolve, reject) => {
            let content = await startProcess();
            if (!!content) {
              callbackRef.current = (videoPath: string) => {
                content = {
                  ...content,
                  description: editorRef.current.getHtmlContent(),
                  videoPath,
                };
                if (propsContent) {
                  content.id = propsContent.id;
                }
                resolve(content);
              };
            } else {
              reject();
            }
          });
        },
      };
    }
  }, [formRef, startProcess, validate, propsContent]);

  const [videos] = useState(() => {
    if (propsContent && propsContent.videoPath) {
      return [
        {
          source: `${ASSETS_URL}/${propsContent.videoPath}`,
          options: { type: "local" },
        },
      ];
    }
    return null;
  });


  let uploaderProps: any = {};
  if (propsContent && propsContent.videoPath) {
    uploaderProps.files = videos;
  }

  return (
    <>
      <Form form={form} initialValues={props.content}>
        <div className="flex">
          <div className="w-1/5 pr-2">
            <label className="block mb-2">Order</label>
            <Form.Item name="order">
              <InputNumber min={1} placeholder="Order..." className="w-fulli" />
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
        <Form.Item name="preview" valuePropName="checked">
          <Checkbox>Preview</Checkbox>
        </Form.Item>
        <label className="block mb-2">Description</label>
        <Form.Item name="description">
          <FdmEditor editorRef={editorRef} html={props.content?.description} />
        </Form.Item>
      </Form>
      <label className="block mb-2">
        Video <b className="text-red-400">*</b>
      </label>
      <Uploader
        fileType={FileType.VIDEO}
        state="videoPath"
        pondRef={videoRef}
        onUploadSuccess={onUpLoadSuccessHandler}
        {...uploaderProps}
      />
    </>
  );
}
