import { Pagination, Rate } from "antd";
import moment from "moment";
import React, { useCallback, useState } from "react";
import { FdmLoading } from "../../shared/components/FdmLoading";
import { IReview } from "../../shared/entities/IReview";
import { useQuery } from "../../shared/hooks/useQuery.hook";
import { ReviewService } from "./ReviewService";

interface IReviewListProps {
  courseId: number;
}

const PAGE_SIZE = 10;

export function ReviewList(props: IReviewListProps) {
  const { courseId } = props;
  const [page, setPage] = useState(1);
  const fetchReviews = useCallback(() => {
    return ReviewService.paginate(courseId, {
      page,
      pageSize: PAGE_SIZE,
    });
  }, [page, courseId]);
  const reviewsResponse = useQuery(fetchReviews);
  return (
    <div>
      <div>
        {!reviewsResponse.data ? (
          <div className="flex justify-center items-center">
            <FdmLoading />
          </div>
        ) : (
          <>
            <div className="mb-2">Total: {reviewsResponse.data.total} reviews</div>
            <div className="flex flex-wrap">
              {reviewsResponse.data.items.map((rv: IReview) => (
                <div className="rounded-lg border py-3 px-5 mb-2 w-1/2">
                  <p className="mb-0"><b>{rv.user.firstName} {rv.user.lastName} ({rv.user.username})</b></p>
                  <p className="flex mb-2 items-center">
                    <Rate disabled value={rv.star} />{" "}
                    <i className="ml-4 inline-block mt-1">{moment(rv.createdDate).format('DD/MM/YYYY HH:mm')}</i>
                  </p>
                  <p className="mb-0">{rv.feedback}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="flex justify-center mt-4">
        <Pagination
          current={page}
          pageSize={PAGE_SIZE}
          total={reviewsResponse.data?.total || 0}
          onChange={(page) => setPage(page)}
        />
      </div>
    </div>
  );
}
