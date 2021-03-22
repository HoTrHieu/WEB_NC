import React, { useCallback } from "react";
import { RouteComponentProps } from "react-router";
import { FdmLoading } from "../../shared/components/FdmLoading";
import { useQuery } from "../../shared/hooks/useQuery.hook";
import { CourseDetail } from "./CourseDetail";
import { CourseService } from "./CourseService";

export function CourseDetailPage(props: RouteComponentProps) {
  const courseId = Number((props.match.params as any).courseId);
  const courseResponse = useQuery(
    useCallback(() => {
      return CourseService.getDetail(courseId);
    }, [courseId])
  );

  if (!courseResponse.data) {
    return (
      <div className="flex justify-center items-center">
        <FdmLoading />
      </div>
    );
  }

  return (
    <CourseDetail
      course={courseResponse.data}
      onRefreshNeeded={courseResponse.reFetch}
    />
  );
}
