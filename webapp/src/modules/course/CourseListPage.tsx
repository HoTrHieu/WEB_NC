import React, { useCallback } from "react";
import { RouteComponentProps } from "react-router";
import { CourseList } from "./CourseList";
import { CourseService } from "./CourseService";
import { IContentSearchRequest } from "./types/ContentSearchRequest";
import { useFdmStore } from "../../shared/store/useFdmStore";

export function CourseListPage(props: RouteComponentProps) {
  const categoryId = Number((props.match.params as any).categoryId);
  const [globalState, dispatch] = useFdmStore();

  const fetchSource = useCallback(
    (req: IContentSearchRequest) => {
      dispatch("SET_SEARCH_TERM", req.searchTerm || "");
      return CourseService.search(req);
    },
    [dispatch]
  );

  return (
    <div>
      <CourseList
        categoryId={categoryId}
        fetchSource={fetchSource}
        searchTerm={globalState.searchTerm}
      />
    </div>
  );
}
