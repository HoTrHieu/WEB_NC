import React, { useCallback } from "react";
import { useAuthedUser } from "../../shared/hooks/useAuthedUser";
import { CourseList } from "../course/CourseList";
import { CourseService } from "../course/CourseService";
import { ICourseSearchRequest } from "../course/types/CourseSearchRequest";

export function TeacherDashboardPage() {
  const { authedUser } = useAuthedUser();
  const { id: creatorId } = authedUser;
  const fetchSource = useCallback(
    (req: ICourseSearchRequest) => {
      return CourseService.search({ ...req, creatorId });
    },
    [creatorId]
  );

  return (
    <div>
      <CourseList fetchSource={fetchSource} />
    </div>
  );
}
