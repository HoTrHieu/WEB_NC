import { HeartFilled } from "@ant-design/icons";
import React, { useCallback } from "react";
import { CourseList } from "../course/CourseList";
import { CourseService } from "../course/CourseService";
import { ICourseSearchRequest } from "../course/types/CourseSearchRequest";

export function WatchListPage() {
  const fetchSource = useCallback((request: ICourseSearchRequest) => {
    return CourseService.search({
      ...request,
      onlyWatchList: true,
    });
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-red-400 flex items-center">
        <HeartFilled className="mr-2" /> Your watch list
      </h1>
      <CourseList fetchSource={fetchSource} />
    </div>
  );
}
