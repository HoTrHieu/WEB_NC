import {
  ClockCircleOutlined,
  HeartFilled,
  HeartOutlined,
  MobileOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";
import { Button, Divider, Rate, Tag } from "antd";
import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import { ICourse } from "../../shared/entities/ICourse";

interface ICourseDetailProps {
  course: ICourse;
}

export function CourseDetail(props: ICourseDetailProps) {
  return (
    <>
      <div className="flex">
        <div
          className="absolute bg-gray-900 w-full left-0"
          style={{ zIndex: 1, height: "400px", marginTop: "-2rem" }}
        ></div>
        <div className="w-3/4 pr-4" style={{ zIndex: 2 }}>
          <p className="text-white">
            <Link
              to={`/courses/${props.course.category.parent.id}`}
              className="text-blue-400 "
            >
              {props.course.category.parent.name}
            </Link>{" "}
            &gt;{" "}
            <Link
              to={`/courses/${props.course.category.id}`}
              className="text-blue-400"
            >
              {props.course.category.name}
            </Link>
          </p>
          <h1 className="text-3xl text-white">
            <b>{props.course.title}</b>
          </h1>
          <h3 className="text-lg text-white">{props.course.subDescription}</h3>
          <p className="mb-2 text-white">
            <span className="text-yellow-300 mr-1">{props.course.avgStar}</span>{" "}
            <Rate disabled value={props.course.avgStar} /> (
            {props.course.totalReview})
          </p>
          <div className="mt-1 mb-4">
            {props.course.totalEnrollment >= 400 && (
              <Tag color="gold">Best seller</Tag>
            )}
            {moment().diff(moment(props.course.createdDate), "day") <= 7 && (
              <Tag color="green">New</Tag>
            )}
          </div>
          <p className="mb-2 text-white">
            Created by{" "}
            <i className="text-blue-400">
              {props.course.creator.firstName} {props.course.creator.lastName}
            </i>
          </p>
          <p className="text-white">
            Last updated:{" "}
            <i className="text-blue-400">
              {moment(props.course.updatedDate).format("DD/MM/YYYY HH:mm")}
            </i>
          </p>
          <div>
            <Button type="primary" danger>
              <div className="flex items-center">
                Watch list <HeartOutlined className="ml-2" />
              </div>
            </Button>
          </div>
          <div className="mt-16">
            <h3 className="text-xl"><b>Description</b></h3>
            <div>
              {props.course.description}
            </div>
            <h3 className="mt-5 text-xl"><b>Course contents</b></h3>
            <h3 className="mt-5 text-xl"><b>Student feedbacks</b></h3>
          </div>
        </div>
        <div className="w-1/4 relative" style={{ zIndex: 2 }}>
          <div className="p-5 border rounded-lg w-full bg-white">
            <h1 className="mb-2">
              <b className="text-red-400 text-xl">
                ${" "}
                {Math.round(
                  (props.course.price - props.course.discount) * 100
                ) / 100}
              </b>{" "}
              <span className="line-through ml-1 text-gray-400">
                {props.course.discount ? `(${props.course.price})` : ""}
              </span>
            </h1>
            <Button className="w-full" type="primary">
              Buy now
            </Button>
            <Divider />
            <div>
              <h3 className="mb-4">
                <b>This course includes:</b>
              </h3>
              <p className="flex items-center">
                <SnippetsOutlined className="mr-2" />{" "}
                {props.course.contents?.length || 0} articles
              </p>
              <p className="flex items-center">
                <ClockCircleOutlined className="mr-2" /> Full lifetime access
              </p>
              <p className="flex items-center">
                <MobileOutlined className="mr-2" /> Access on mobile and TV
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
