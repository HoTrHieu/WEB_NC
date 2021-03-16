import { Card, Rate } from "antd";
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
  const { course, loading, ...restProps } = props;
  console.log(course);
  return (
    <Card
      className="rounded border"
      hoverable
      loading={loading}
      cover={
        course.avatarPath && (
          <FdmImage
            alt={course.title}
            className="w-full"
            src={`${ASSETS_URL}/images/${course.avatarPath}`}
          />
        )
      }
      {...restProps}
    >
      <Card.Meta
        title={course.title}
        description={
          <>
            <p className="my-0">
              <span className="text-yellow-300 mr-1">{course.avgStar}</span>{" "}
              <Rate disabled defaultValue={course.avgStar} /> (
              {course.totalReview})
            </p>
            <p className="my-0">{course.category?.name}</p>
            <p className="my-0 text-blue-400">
              {course.creator?.lastName} {course.creator?.firstName}
            </p>
            <p className="my-0">
              <b className="text-red-400">$ {Math.round((course.price - course.discount) * 100) / 100}</b>{" "}
              <span className="line-through ml-1 text-gray-400">
                {course.discount ? `(${course.price})` : ""}
              </span>
            </p>
          </>
        }
      />
    </Card>
  );
}
