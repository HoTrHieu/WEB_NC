import React, { useCallback } from "react";
import { CourseList } from "../course/CourseList";
import { CourseService } from "../course/CourseService";

export function ManageCoursePage() {
  const fetchCourses = useCallback((request: any) => {
    return CourseService.search({
      ...request,
      all: true,
    });
  }, []);

  return (
    <div>
      <CourseList fetchSource={fetchCourses} removeable={true} />
    </div>
  );
}
