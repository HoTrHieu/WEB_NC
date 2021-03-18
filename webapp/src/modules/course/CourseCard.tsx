import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Rate, Tag, Tooltip } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FdmImage } from "../../shared/components/FdmImage";
import { ASSETS_URL } from "../../shared/constants/constants";
import { ICourse } from "../../shared/entities/ICourse";
import { EntityStatus } from "../../shared/enums/EntityStatus";
import { AuthService } from "../auth/AuthService";
import { WatchListService } from "../watch-list/WatchListService";

interface ICourseCardProps {
  course: ICourse;
  loading?: boolean;
  className?: string;
}

export function CourseCard(props: ICourseCardProps) {
  const { course } = props;
  const [isWatchList, setIsWatchList] = useState(course.isWatchList);
  return (
    <Link
      to={`/courses/detail/${course.id}`}
      className="block rounded-lg p-5 border shadow hover:shadow-lg h-auto cursor-pointer"
    >
      <div className="flex justify-center mb-5">
        <FdmImage
          alt={course.title}
          className="w-full rounded-lg"
          style={{ height: "135px" }}
          src={`${ASSETS_URL}/images/${course.avatarPath}`}
        />
      </div>
      <div className="flex items-start">
        <h1>{course.title}</h1>
        {AuthService.isAuthed && (
          <Tooltip placement="left" title={isWatchList ? "Un-love" : "Love"}>
            <div
              className={"ml-2 text-xl " + (isWatchList ? "text-red-400" : "text-gray-700")}
            >
              {isWatchList ? (
                <HeartFilled
                  className="text-red-400"
                  onClick={async () => {
                    const success = await WatchListService.updateStatusWithNotify(
                      course.id,
                      EntityStatus.DISABLED
                    );
                    if (success) {
                      setIsWatchList(false);
                    }
                  }}
                />
              ) : (
                <HeartOutlined
                  onClick={async () => {
                    const success = await WatchListService.updateStatusWithNotify(
                      course.id,
                      EntityStatus.ACTIVE
                    );
                    if (success) {
                      setIsWatchList(true);
                    }
                  }}
                />
              )}
            </div>
          </Tooltip>
        )}
      </div>
      <p className="my-0 text-gray-700">
        <span className="text-yellow-300 mr-1">{course.avgStar}</span>{" "}
        <Rate disabled value={course.avgStar} /> ({course.totalReview})
      </p>
      <p className="my-0 text-gray-700">{course.category?.name}</p>
      <p className="my-0 text-blue-400">
        {course.creator?.firstName} {course.creator?.lastName}
      </p>
      <p className="my-0">
        <b className="text-red-400">
          $ {Math.round((course.price - course.discount) * 100) / 100}
        </b>{" "}
        <span className="line-through ml-1 text-gray-400">
          {course.discount ? `(${course.price})` : ""}
        </span>
      </p>

      <div className="mt-1">
        {course.totalEnrollment >= 400 && <Tag color="gold">Best seller</Tag>}
        {moment().diff(moment(course.createdDate), "day") <= 7 && (
          <Tag color="green">New</Tag>
        )}
      </div>
    </Link>
  );
}
