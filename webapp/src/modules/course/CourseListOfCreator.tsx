import React, { useCallback } from "react";
import { RouteComponentProps } from "react-router";
import { CourseList } from "./CourseList";
import { CourseService } from "./CourseService";
import { ICourseSearchRequest } from "./types/CourseSearchRequest";

export function CourseListOfCreator(props: RouteComponentProps) {
  const creatorId = Number((props.match.params as any).creatorId);
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
