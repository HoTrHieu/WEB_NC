import { Button, Popconfirm } from "antd";
import React, { useCallback, useState } from "react";
import { ICourse } from "../../shared/entities/ICourse";
import { EntityStatus } from "../../shared/enums/EntityStatus";
import { NotificationUtils } from "../../shared/utils/NotificationUtils";
import { CourseService } from "./CourseService";

interface ICoureToggleButtonProps {
  course: ICourse;
  [key: string]: any;
}

export function CourseToggleButton(props: ICoureToggleButtonProps) {
  const { course, ...restProps } = props;
  const [status, setStatus] = useState(course.status);
  const [loading, setLoading] = useState(false);

  const toggleCourse = useCallback(async () => {
    setLoading(true);
    try {
      const newStatus =
        status === EntityStatus.ACTIVE
          ? EntityStatus.DISABLED
          : EntityStatus.ACTIVE;
      await CourseService.updateStatus(course.id, newStatus);
      setStatus(newStatus);
    } catch (err) {
      console.error(err);
      NotificationUtils.error(err.message);
    }
    setLoading(false);
  }, [course]);

  const isActive = status === EntityStatus.ACTIVE;

  return (
    <Popconfirm
      title={`Are you sure to ${isActive ? "disable" : "active"} this course?`}
      onConfirm={toggleCourse}
    >
      <Button
        danger={isActive}
        type="primary"
        shape="round"
        onChange={toggleCourse}
        loading={loading}
        {...restProps}
      >
        {isActive ? "Disable" : "Active"} course
      </Button>
    </Popconfirm>
  );
}
