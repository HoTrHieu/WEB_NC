import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Button,
  Checkbox,
  Divider,
  Form,
  Input,
  InputNumber,
  notification,
  Tooltip,
} from "antd";
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
import { v4 as uuidv4 } from "uuid";
import { CourseService } from "./CourseService";
import { NotificationUtils } from "../../shared/utils/NotificationUtils";
import { ASSETS_URL } from "../../shared/constants/constants";
import { useHistory } from "react-router";

interface ICourseEditFormProps {
  course?: ICourse;
}

export function CourseEditForm(props: ICourseEditFormProps) {
  const { course: propsCourse } = props;
  const isUpdate = !!propsCourse;
  const history = useHistory();
  const [form] = useForm();
  const [submitLoading, setSubmitLoading] = useState(false);
  const [contents, setContents] = useState<IContent[]>([]);
  const addContent = useCallback(() => {
    setContents([
      ...contents,
      {
        preview: false,
        order: contents.length + 1,
        key: uuidv4(),
        formRef: { current: null },
      } as any,
    ]);
  }, [contents]);

  useEffect(() => {
    if (propsCourse && propsCourse.contents) {
      setContents(propsCourse.contents.map(content => ({
        ...content,
        key: uuidv4(),
        formRef: { current: null }
      })));
    }
  }, [propsCourse]);

  const avatarRef = useRef<any>();
  const coverRef = useRef<any>();
  const startProcess = useCallback(async () => {
    try {
      await form.validateFields();
    } catch {
      return notification.error({
        message: "Error",
        description: "Please correct all error fields before submit",
      });
    }

    if (!avatarRef.current.getFile()) {
      return notification.error({
        message: "Error",
        description: "Course's avatar is empty",
      });
    }

    if (!coverRef.current.getFile()) {
      return notification.error({
        message: "Error",
        description: "Course's cover is empty",
      });
    }

    if (contents.length === 0) {
      return notification.error({
        message: "Error",
        description: "There must be at least 1 content",
      });
    }

    let isContentsValid = true;
    for (const content of contents) {
      const isContentValid = await (content as any).formRef.current.validate();
      isContentsValid = isContentsValid && isContentValid;
    }

    if (!isContentsValid) {
      return notification.error({
        message: "Error",
        description: "Please correct all error fields before submit",
      });
    }

    setSubmitLoading(true);
    avatarRef.current.processFile();
    coverRef.current.processFile();
  }, [form, contents]);

  const editorRef = useRef<any>();
  const createCourse = useCallback(async () => {
    const course: ICourse = await form.getFieldsValue();
    course.contents = [];
    for (const content of contents) {
      course.contents.push(await (content as any).formRef.current.getContent());
    }
    course.description = editorRef.current.getHtmlContent();
    course.coverPath = uploadResultRef.current.coverPath;
    course.avatarPath = uploadResultRef.current.avatarPath;
    try {
      let courseId;
      if (isUpdate) {
        course.id = propsCourse?.id as any;
        courseId = course.id;
        await CourseService.update(course);
      } else {
        courseId = await CourseService.add(course);
      }
      notification.success({
        message: "Success",
        description: "Save course success!"
      });
      history.push(`/courses/save-result/${courseId}`);
    } catch (err) {
      console.error(err);
      NotificationUtils.error(err.message);
    }
    setSubmitLoading(false);
  }, [form, contents, isUpdate, history, propsCourse]);

  const uploadResultRef = useRef<any>({});
  const onUpLoadSuccessHandler = useCallback(
    (result) => {
      uploadResultRef.current[result.state] = result.filePath;
      if (Object.keys(uploadResultRef.current).length === 2) {
        createCourse();
      }
    },
    [createCourse]
  );

  const [avatar] = useState(() => {
    if (!!propsCourse && propsCourse.avatarPath) {
      return [
        {
          source: `${ASSETS_URL}/${propsCourse.avatarPath}`,
          options: { type: "local" }   
        }
      ];
    }
  });

  const [cover] = useState(() => {
    if (!!propsCourse && propsCourse.coverPath) {
      return [
        {
          source: `${ASSETS_URL}/${propsCourse.coverPath}`,
          options: { type: "local" }
        }
      ]
    }
  });

  let avatarProps: any = {};
  let coverProps: any = {};
  if (propsCourse) {
    if (propsCourse.avatarPath) {
      avatarProps.files = avatar;
    }

    if (propsCourse.coverPath) {
      coverProps.files = cover;
    }
  }

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
        <Form.Item
          name="subDescription"
          rules={CourseEditFormRules.subDescription}
        >
          <Input placeholder="Sub-description..." />
        </Form.Item>
        <label className="block mb-2">Description</label>
        <Form.Item name="description">
          <FdmEditor html={propsCourse?.description} editorRef={editorRef} />
        </Form.Item>
        <Form.Item name="complete" valuePropName="checked">
          <Checkbox>Complete</Checkbox>
        </Form.Item>
      </Form>
      <div>
        <label className="block mb-2">
          Avatar <b className="text-red-400">*</b>
        </label>
        <Uploader
          fileType={FileType.IMAGE}
          state="avatarPath"
          onUploadSuccess={onUpLoadSuccessHandler}
          pondRef={avatarRef}
          {...avatarProps}
        />
      </div>

      <div>
        <label className="block mb-2">Cover</label>
        <Uploader
          fileType={FileType.IMAGE}
          state="coverPath"
          onUploadSuccess={onUpLoadSuccessHandler}
          pondRef={coverRef}
          {...coverProps}
        />
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
                  <CloseCircleFilled
                    className="text-xl"
                    onClick={() => {
                      contents.splice(idx, 1);
                      setContents([...contents]);
                    }}
                  />
                </Tooltip>
              </div>
              <ContentEditForm
                content={content}
                formRef={(content as any).formRef}
              />
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
      <Button
        loading={submitLoading}
        danger
        type="primary"
        shape="round"
        className="w-full"
        onClick={startProcess}
      >
        Save course
      </Button>
    </>
  );
}
