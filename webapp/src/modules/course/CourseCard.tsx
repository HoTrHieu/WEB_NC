import {
  BookOutlined,
  HeartFilled,
  HeartOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { Button, Rate, Tag, Tooltip } from "antd";
import moment from "moment";
import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { FdmImage } from "../../shared/components/FdmImage";
import { ASSETS_URL } from "../../shared/constants/constants";
import { ICourse } from "../../shared/entities/ICourse";
import { EntityStatus } from "../../shared/enums/EntityStatus";
import { useAuthedUser } from "../../shared/hooks/useAuthedUser";
import { AuthService } from "../auth/AuthService";
import { WatchListService } from "../watch-list/WatchListService";
import { CourseToggleButton } from "./CourseToggleButton";

interface ICourseCardProps {
  course: ICourse;
  loading?: boolean;
  className?: string;
  removeable?: boolean;
}

export function CourseCard(props: ICourseCardProps) {
  const { course } = props;
  const { authedUser } = useAuthedUser();
  const [watchListLoading, setWatchListLoading] = useState(false);
  const [isWatchList, setIsWatchList] = useState(course.isWatchList);
  const updateWatchList = useCallback(
    async (status: EntityStatus) => {
      setWatchListLoading(true);
      const success = await WatchListService.updateStatusWithNotify(
        course.id,
        status
      );
      if (success) {
        setIsWatchList(status === EntityStatus.ACTIVE);
      }
      setWatchListLoading(false);
    },
    [course.id]
  );

  return (
    <div className="h-fulli block rounded-lg p-5 border shadow hover:shadow-lg h-auto">
      <Link
        to={`/courses/detail/${course.id}`}
        className="flex justify-center mb-5"
      >
        <FdmImage
          alt={course.title}
          className="w-full rounded-lg"
          style={{ height: "135px" }}
          src={`${ASSETS_URL}/${course.avatarPath}`}
        />
      </Link>
      <div className="flex items-start relative">
        <Link className="block pr-8" to={`/courses/detail/${course.id}`}>
          <h1>{course.title}</h1>
        </Link>
        <div>
          <div className="absolute" style={{ top: "-5px", right: "5px" }}>
            {AuthService.isAuthed &&
              (watchListLoading ? (
                <LoadingOutlined className="text-xl" />
              ) : (
                <Tooltip
                  placement="left"
                  title={isWatchList ? "Un-love" : "Love"}
                >
                  <div
                    className={
                      "text-xl " +
                      (isWatchList ? "text-red-400" : "text-gray-700")
                    }
                  >
                    {isWatchList ? (
                      <HeartFilled
                        className="text-red-400"
                        onClick={() => updateWatchList(EntityStatus.DISABLED)}
                      />
                    ) : (
                      <HeartOutlined
                        onClick={() => updateWatchList(EntityStatus.ACTIVE)}
                      />
                    )}
                  </div>
                </Tooltip>
              ))}
          </div>
        </div>
      </div>
      <p className="my-0 text-gray-700">
        <span className="text-yellow-300 mr-1">{course.avgStar}</span>{" "}
        <Rate disabled value={course.avgStar} /> ({course.totalReview})
      </p>
      <p className="my-0 text-gray-700">{course.category?.name}</p>
      <p className="my-0 text-blue-400">
        {course.creator?.firstName} {course.creator?.lastName}
      </p>
      {course.isEnrollment ? (
        <p className="my-0 text-red-400 flex items-center">
          <BookOutlined className="mr-1" /> You are studying this course
        </p>
      ) : (
        <p className="my-0">
          <b className="text-red-400">
            $ {Math.round((course.price - course.discount) * 100) / 100}
          </b>{" "}
          <span className="line-through ml-1 text-gray-400">
            {course.discount ? `(${course.price})` : ""}
          </span>
        </p>
      )}

      <div className="mt-1">
        {course.totalEnrollment >= 400 && <Tag color="gold">Best seller</Tag>}
        {moment().diff(moment(course.createdDate), "day") <= 7 && (
          <Tag color="green">New</Tag>
        )}
      </div>

      {!course.complete && (
        <p className="text-yellow-400 mt-2 mb-0 text-xs">
          This course is not completed yet
        </p>
      )}

      {course.creatorId === authedUser?.id && (
        <Link
          to={`/teacher/edit-course/${course.id}`}
          className="mt-3 block w-fulli"
        >
          <Button danger type="primary" shape="round" className="w-full">
            Edit course
          </Button>
        </Link>
      )}

      {props.removeable && (
        <CourseToggleButton course={course} className="w-full mt-3" />
      )}
    </div>
  );
}
