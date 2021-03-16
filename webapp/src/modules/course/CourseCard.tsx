import { Rate, Tag } from "antd";
import moment from "moment";
import React from "react";
import { FdmImage } from "../../shared/components/FdmImage";
import { ASSETS_URL } from "../../shared/constants/constants";
import { ICourse } from "../../shared/entities/ICourse";

interface ICourseCardProps {
  course: ICourse;
  loading?: boolean;
  className?: string;
}

export function CourseCard(props: ICourseCardProps) {
  const { course } = props;
  return (
    <div className="rounded-lg p-5 hover:shadow-lg h-auto cursor-pointer">
      <div className="flex justify-center mb-5">
        <FdmImage
          alt={course.title}
          className="w-full rounded-lg"
          style={{ height: '135px' }}
          src={`${ASSETS_URL}/images/${course.avatarPath}`}
        />
      </div>
      <h1>{course.title}</h1>
      <p className="my-0">
        <span className="text-yellow-300 mr-1">{course.avgStar}</span>{" "}
        <Rate disabled value={course.avgStar} /> ({course.totalReview})
      </p>
      <p className="my-0">{course.category?.name}</p>
      <p className="my-0 text-blue-400">
        {course.creator?.lastName} {course.creator?.firstName}
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
        {course.totalEnrollment >= 400 && (
          <Tag color="gold">Best seller</Tag>
        )}
        {moment().diff(moment(course.createdDate), 'day') <= 7 && (
          <Tag color="green">New</Tag>
        )}
      </div>
    </div>
  );
}
