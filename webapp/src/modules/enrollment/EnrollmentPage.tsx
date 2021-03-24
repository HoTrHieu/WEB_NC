import { BookFilled } from "@ant-design/icons";
import React, { useCallback } from "react";
import { CourseList } from "../course/CourseList";
import { CourseService } from "../course/CourseService";
import { ICourseSearchRequest } from "../course/types/CourseSearchRequest";

export function EnrollmentPage() {
  const fetchSource = useCallback((request: ICourseSearchRequest) => {
    return CourseService.search({
      ...request,
      onlyEnrollment: true,
    });
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-blue-400 flex items-center">
        <BookFilled className="mr-2" /> Your enrollment
      </h1>
      <CourseList fetchSource={fetchSource} />
    </div>
  );
}
