import { Button, Form, Input, notification, Rate } from "antd";
import React, { useCallback, useState } from "react";
import { NotificationUtils } from "../../shared/utils/NotificationUtils";
import { ReviewService } from "../review/ReviewService";
import { CourseReviewFormRules } from "./CourseReviewFormRules";

interface ICourseReviewFormProps {
  courseId: number;
  onReviewSuccess: Function;
}

const starText = [
  "Add your rate",
  "Hate",
  "Don't like",
  "Ok",
  "Like",
  "Great like",
];

export function CourseReviewForm(props: ICourseReviewFormProps) {
  const [submitLoading, setSubmitLoading] = useState(false);
  const [hoverStar, setHoverStar] = useState(0);
  const [star, setStar] = useState(0);
  const [form] = Form.useForm();

  const { courseId, onReviewSuccess } = props;
  const submit = useCallback(
    async (values: any) => {
      setSubmitLoading(true);
      try {
        await ReviewService.review(courseId, values);
        form.resetFields();
        setHoverStar(0);
        setStar(0);
        notification.success({
          message: "Success",
          description: "Thank you for your feedback",
        });
        onReviewSuccess();
      } catch (err) {
        console.error(err);
        NotificationUtils.error(err.message);
      }
      setSubmitLoading(false);
    },
    [courseId, onReviewSuccess, form]
  );

  return (
    <Form form={form} onFinish={submit}>
      <Form.Item
        name="feedback"
        style={{ marginBottom: ".5rem" }}
        rules={CourseReviewFormRules.feedback}
      >
        <Input.TextArea
          placeholder="Add your feedback..."
          rows={4}
          maxLength={1000}
          showCount
        />
      </Form.Item>
      <div className="relative flex items-center">
        <Form.Item
          name="star"
          style={{ marginBottom: ".5rem" }}
          rules={CourseReviewFormRules.star}
        >
          <Rate onHoverChange={setHoverStar} onChange={setStar} />
        </Form.Item>
        <span
          className="text-red-400 absolute"
          style={{ left: "145px", top: "7px" }}
        >
          {starText[hoverStar || star] || "Add your rate"}
        </span>
      </div>
      <Form.Item>
        <Button
          loading={submitLoading}
          type="primary"
          shape="round"
          htmlType="submit"
        >
          Submit feedback
        </Button>
      </Form.Item>
    </Form>
  );
}
