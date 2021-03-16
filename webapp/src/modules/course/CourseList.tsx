import React from "react";
import { ICourse } from "../../shared/entities/ICourse";
import { IPagingResponse } from "../../types/IPagingResponse";
import { CourseCard } from "./CourseCard";

interface ICourseListProps {
  pagingResponse: IPagingResponse<ICourse>;
}

export function CourseList(props: ICourseListProps) {
  return (
    <>
      <div className="flex mb-4">
        <div>Showing page <b>{props.pagingResponse?.page || 0}</b> with page size <b>{props.pagingResponse?.pageSize || 0}</b> of total <b>{props.pagingResponse?.total || 0}</b> courses</div>
      </div>
      <div className="flex flex-wrap">
        {!props.pagingResponse?.items
          ? "Loading..."
          : props.pagingResponse?.items.map((course) => (
              <div className="w-1/5 px-2">
                <CourseCard course={course} key={course.id} />
              </div>
            ))}
      </div>
    </>
  );
}
