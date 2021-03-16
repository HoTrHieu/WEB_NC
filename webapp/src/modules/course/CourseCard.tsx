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
      className="rounded"
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
        description={(
          <>
            <p className="my-0">{course.creator?.lastName} {course.creator?.firstName}</p>
            <p className="my-0"><Rate disabled defaultValue={course.avgStar} /> ({course.avgStar})</p>
          </>
        )} />
    </Card>
  );
}