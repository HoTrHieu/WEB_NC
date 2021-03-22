import { Divider, Input, Pagination } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { FdmLoading } from "../../shared/components/FdmLoading";
import { FdmOrderDirectionSelect } from "../../shared/components/FdmOrderDirectionSelect";
import { FdmPriceSlider } from "../../shared/components/FdmPriceSlider";
import { FdmStarSlider } from "../../shared/components/FdmStarSlider";
import { ICourse } from "../../shared/entities/ICourse";
import { OrderDirection } from "../../shared/enums/OrderDirection";
import { useCompKey } from "../../shared/hooks/useCompKey";
import { useQuery } from "../../shared/hooks/useQuery.hook";
import { IPagingResponse } from "../../types/IPagingResponse";
import { CategorySelect } from "../category/CategorySelect";
import { CourseCard } from "./CourseCard";
import { CourseOrderBySelect } from "./CourseSortTypeSelect";
import { CourseOrderBy } from "./enums/CourseOrderBy";
import { ICourseSearchRequest } from "./types/CourseSearchRequest";

interface ICourseListProps {
  categoryId?: number;
  searchTerm?: string;
  fetchSource: (
    request: ICourseSearchRequest
  ) => Promise<IPagingResponse<ICourse>>;
}

export function CourseList(props: ICourseListProps) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [searchTerm, setSearchTerm] = useState(props.searchTerm || "");
  const [orderBy, setOrderBy] = useState<CourseOrderBy | null>(null);
  const [orderDirection, setOrderDirection] = useState<OrderDirection | null>(
    null
  );
  const [filters, setFilters] = useState<any>({
    categoryIds: (() => {
      return props.categoryId &&
        !isNaN(props.categoryId) &&
        props.categoryId > 0
        ? [props.categoryId]
        : [];
    })(),
  });
  const searchTermCompKey = useCompKey();
  const renewSearchTermCompKey = searchTermCompKey.renewCompKey;

  const updateFilters = useCallback(
    (newFilters: any) => {
      setFilters({ ...filters, ...newFilters });
      setPage(1);
    },
    [filters]
  );

  useEffect(() => {
    setSearchTerm(props.searchTerm || "");
    renewSearchTermCompKey();
  }, [props.searchTerm, renewSearchTermCompKey]);

  const propsFetchSource = props.fetchSource;
  const fetchSource = useCallback(() => {
    return propsFetchSource({
      page,
      pageSize,
      searchTerm: searchTerm || undefined,
      orderBy: orderBy as any,
      orderDirection: orderDirection as any,
      ...filters,
    });
  }, [
    propsFetchSource,
    page,
    pageSize,
    searchTerm,
    orderBy,
    orderDirection,
    filters,
  ]);

  const coursesResponse = useQuery(fetchSource);
  const pagingResponse: IPagingResponse<ICourse> = coursesResponse.data;
  return (
    <div className="mb-4 flex">
      <div className="w-5/6">
        <div className="flex items-center mb-4">
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
                    setOrderDirection(OrderDirection.DESC);
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
          key={searchTermCompKey.compKey}
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
            {pagingResponse.items.map((course: ICourse, idx: number) => (
              <div className="w-1/4 px-2 mb-4">
                <CourseCard course={course} key={idx} />
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
      <div className="w-1/6 ml-5">
        <div className="rounded-lg shadow p-3">
          <label className="block mb-4">
            <b>Category</b>
          </label>
          <CategorySelect
            defaultValue={filters.categoryIds}
            mode="multiple"
            onChange={(categoryIds) => updateFilters({ categoryIds })}
          />
          <Divider />
          <label className="block my-4">
            <b>Price</b>
          </label>
          <FdmPriceSlider
            range
            defaultValue={[0, 500]}
            onAfterChange={([fromPrice, toPrice]) => {
              updateFilters({ fromPrice, toPrice });
            }}
          />
          <Divider />
          <label className="block my-4">
            <b>Star</b>
          </label>
          <FdmStarSlider
            range
            defaultValue={[0, 5]}
            onAfterChange={([fromStar, toStar]) => {
              updateFilters({ fromStar, toStar });
            }}
          />
        </div>
      </div>
    </div>
  );
}
