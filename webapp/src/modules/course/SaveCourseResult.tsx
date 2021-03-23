import { Button, Result } from "antd";
import React from "react";
import { RouteComponentProps, useHistory } from "react-router";

export function SaveCourseResult(props: RouteComponentProps) {
  const courseId = (props.match.params as any)?.courseId;
  const history = useHistory();
  return (
    <Result
      status="success"
      title="Save course success"
      subTitle="Your course is successfully saved, and ready to show"
      extra={[
        <Button
          type="primary"
          shape="round"
          onClick={() => history.push(`/courses/detail/${courseId}`)}
        >
          View course
        </Button>,
      ]}
    />
  );
}
