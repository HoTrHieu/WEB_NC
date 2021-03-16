import { Input, Pagination } from "antd";
import React, { useCallback, useState } from "react";
import { FdmLoading } from "../../shared/components/FdmLoading";
import { FdmOrderDirectionSelect } from "../../shared/components/FdmOrderDirectionSelect";
import { ICourse } from "../../shared/entities/ICourse";
import { OrderDirection } from "../../shared/enums/OrderDirection";
import { useQuery } from "../../shared/hooks/useQuery.hook";
import { IPagingResponse } from "../../types/IPagingResponse";
import { CourseCard } from "./CourseCard";
import { CourseOrderBySelect } from "./CourseSortTypeSelect";
import { CourseOrderBy } from "./enums/CourseOrderBy";
import { IContentSearchRequest } from "./types/ContentSearchRequest";

interface ICourseListProps {
  fetchSource: (
    request: IContentSearchRequest
  ) => Promise<IPagingResponse<ICourse>>;
}

export function CourseList(props: ICourseListProps) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] = useState<CourseOrderBy | null>(null);
  const [orderDirection, setOrderDirection] = useState<OrderDirection | null>(
    null
  );
  const propsFetchSource = props.fetchSource;
  const fetchSource = useCallback(() => {
    return propsFetchSource({
      page,
      pageSize,
      searchTerm: searchTerm || undefined,
      orderBy: orderBy as any,
      orderDirection: orderDirection as any,
    });
  }, [propsFetchSource, page, pageSize, searchTerm, orderBy, orderDirection]);

  const coursesResponse = useQuery(fetchSource);
  const pagingResponse: IPagingResponse<ICourse> = coursesResponse.data;
  return (
    <div>
      <div className="flex mb-4">
        <div>
          Showing page <b>{page}</b> with page size <b>{pageSize}</b> of total{" "}
          <b>{pagingResponse?.total || 0}</b> courses
        </div>
        <div className="ml-auto flex">
          <div className="flex items-center">
            <span className="mr-2">Order by:</span>
            <CourseOrderBySelect
              value={orderBy as any}
              onChange={(val) => {
                setOrderBy(val);
                if (!orderDirection) {
                  setOrderDirection(OrderDirection.ASC);
                }
              }}
            />
          </div>
          <div className="flex items-center ml-4">
            <span className="mr-2">Order direction:</span>
            <FdmOrderDirectionSelect
              disabled={!orderBy}
              value={orderDirection as any}
              onChange={setOrderDirection}
            />
          </div>
        </div>
      </div>
      <Input.Search
        allowClear
        className="w-full mb-4"
        placeholder="Search courses..."
        defaultValue={searchTerm}
        onSearch={setSearchTerm as any}
      />
      {!pagingResponse ? (
        <FdmLoading />
      ) : (
        <div className="flex flex-wrap">
          {pagingResponse.items.map((course: ICourse) => (
            <div className="w-1/5 px-2">
              <CourseCard course={course} key={course.id} />
            </div>
          ))}
        </div>
      )}
      <div className="mt-4 flex justify-center">
        <Pagination
          current={page}
          pageSize={pageSize}
          total={pagingResponse?.total || 0}
          showSizeChanger
          pageSizeOptions={["20", "50"]}
          onChange={(page, pageSize) => {
            setPage(page);
            setPageSize(pageSize || 20);
          }}
        />
      </div>
    </div>
  );
}
