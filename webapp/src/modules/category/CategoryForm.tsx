import { Button, Form, Input, notification } from "antd";
import React, { useCallback, useState } from "react";
import { ICategory } from "../../shared/entities/ICategory";
import { NotificationUtils } from "../../shared/utils/NotificationUtils";
import { CategoryFormRules } from "./CategoryFormRules";
import { CategorySelect } from "./CategorySelect";
import { CategoryService } from "./CategoryService";

interface ICategoryFormProps {
  category?: ICategory;
}

export function CategoryForm(props: ICategoryFormProps) {
  const { category: propsCategory } = props;
  const [form] = Form.useForm();
  const [submitLoading, setSubmitLoading] = useState(false);
  const submit = useCallback(
    async (category: ICategory) => {
      setSubmitLoading(true);
      try {
        if (propsCategory) {
          category.id = propsCategory.id;
          await CategoryService.update(category);
        } else {
          await CategoryService.add(category);
          form.resetFields();
        }
        notification.success({
          message: "Success",
          description: "Save category success",
        });
      } catch (err) {
        console.error(err);
        NotificationUtils.error(err.message);
      }
      setSubmitLoading(false);
    },
    [form, propsCategory]
  );

  return (
    <Form form={form} onFinish={submit} initialValues={propsCategory}>
      <label className="block mb-2">
        Parent category
      </label>
      <Form.Item name="parentId">
        <CategorySelect onlyParent={true} />
      </Form.Item>
      <label className="block mb-2">
        Name <b className="text-red-400">*</b>
      </label>
      <Form.Item name="name" rules={CategoryFormRules.name}>
        <Input placeholder="Name..." />
      </Form.Item>
      <Form.Item>
        <Button type="primary" shape="round" loading={submitLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
