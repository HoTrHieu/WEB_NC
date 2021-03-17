import React, { useCallback } from "react";
import { RouteComponentProps } from "react-router";
import { CourseList } from "./CourseList";
import { CourseService } from "./CourseService";
import { IContentSearchRequest } from "./types/ContentSearchRequest";
import { useFdmStore } from "../../shared/store/useFdmStore";

export function CourseListPage(props: RouteComponentProps) {
  const { categoryId } = props.match.params as any;
  const [globalState, dispatch] = useFdmStore();

  const fetchSource = useCallback(
    (req: IContentSearchRequest) => {
      let categoryIds;
      if (categoryId > 0) {
        categoryIds = [categoryId];
      }

      dispatch('SET_SEARCH_TERM', req.searchTerm || '');

      return CourseService.search({
        ...req,
        categoryIds,
      });
    },
    [categoryId, dispatch]
  );

  return (
    <div>
      <CourseList fetchSource={fetchSource} searchTerm={globalState.searchTerm} />
    </div>
  );
}
