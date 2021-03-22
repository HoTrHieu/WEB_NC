import {
  ClockCircleOutlined,
  HeartOutlined,
  MobileOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";
import { Button, Divider, notification, Popconfirm, Rate, Tag } from "antd";
import moment from "moment";
import React, { useCallback, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FdmImage } from "../../shared/components/FdmImage";
import { ASSETS_URL } from "../../shared/constants/constants";
import { ICourse } from "../../shared/entities/ICourse";
import { EntityStatus } from "../../shared/enums/EntityStatus";
import { useQuery } from "../../shared/hooks/useQuery.hook";
import { NotificationUtils } from "../../shared/utils/NotificationUtils";
import { AuthService } from "../auth/AuthService";
import { EnrollmentService } from "../enrollment/EnrollmentService";
import { ReviewList } from "../review/ReviewList";
import { WatchListService } from "../watch-list/WatchListService";
import { CourseReviewForm } from "./CourseReviewForm";

interface ICourseDetailProps {
  course: ICourse;
  onRefreshNeeded: Function
}

export function CourseDetail(props: ICourseDetailProps) {
  const history = useHistory();
  const [enrollLoading, setEnrollLoading] = useState(false);
  const [watchListLoading, setWatchListLoading] = useState(false);
  const [isWatchList, setIsWatchList] = useState(props.course.isWatchList);
  const updateWatchList = useCallback(async () => {
    if (!AuthService.isAuthed) {
      return history.push("/auth/login");
    }
    setWatchListLoading(true);
    const success = await WatchListService.updateStatusWithNotify(
      props.course.id,
      props.course.isWatchList ? EntityStatus.DISABLED : EntityStatus.ACTIVE
    );
    if (success) {
      setIsWatchList(!props.course.isWatchList);
    }
    setWatchListLoading(false);
  }, [history, props.course]);

  const { onRefreshNeeded } = props;
  const enroll = useCallback(async () => {
    if (!AuthService.isAuthed) {
      return history.push("/auth/login");
    }

    setEnrollLoading(true);
    try {
      await EnrollmentService.enroll(props.course.id);
      notification.success({
        message: "Success",
        description: "Enroll success, hope that you will have valuable lessons",
        style: {
          zIndex: 10,
        },
      });
      onRefreshNeeded();
    } catch (err) {
      console.error(err);
      NotificationUtils.error(err.message);
    }
    setEnrollLoading(false);
  }, [history, props.course, onRefreshNeeded]);

  const fetchEnrollmentDetail = useCallback(() => {
    if (AuthService.isAuthed) {
      return EnrollmentService.getDetail(props.course.id);
    }
    return null;
  }, [props.course.id]);
  const enrollmentDetailResponse = useQuery(fetchEnrollmentDetail);
  const isEnrolled = AuthService.isAuthed && !!enrollmentDetailResponse.data;
  return (
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
          <Button
            loading={watchListLoading}
            type="primary"
            danger
            onClick={updateWatchList}
          >
            <div className="flex items-center">
              {isWatchList ? "Remove" : "Add"} watch list{" "}
              <HeartOutlined className="ml-2" />
            </div>
          </Button>
        </div>
        <div className="mt-24">
          <h3 className="text-xl">
            <b>Description</b>
          </h3>
          <div dangerouslySetInnerHTML={{ __html: props.course.description }}></div>
          <h3 className="mt-8 text-xl">
            <b>Course contents</b>
          </h3>
          <h3 className="mt-8 text-xl">
            <b>About the creator</b>
          </h3>
          <div className="border py-2 px-6 rounded-lg" style={{ borderLeftColor: 'rgb(96, 165, 250)', borderLeftWidth: '.2rem' }}>
            <h4 className="text-red-500 text-xl mb-1">{props.course.creator?.firstName} {props.course.creator?.lastName}</h4>
            <p className="text-gray-500">{props.course.creator.bio}</p>
            <p className="mb-0">{props.course.creator.introduction}</p>
          </div>
          <h3 className="mt-8 text-xl mb-4">
            <b>Student feedbacks</b>
          </h3>
          {isEnrolled && (
            <CourseReviewForm
              courseId={props.course.id}
              onReviewSuccess={props.onRefreshNeeded}
            />
          )}
          <ReviewList courseId={props.course.id} />
        </div>
      </div>
      <div className="w-1/4 relative" style={{ zIndex: 2 }}>
        <div className="p-5 border rounded-lg w-full bg-white">
          <div className="flex justify-center mb-5">
            <FdmImage
              alt={props.course.title}
              className="w-full rounded-lg"
              src={`${ASSETS_URL}/images/${props.course.avatarPath}`}
            />
          </div>
          {!isEnrolled && (
            <>
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
              <Popconfirm
                placement="top"
                title="Are you sure to enroll this course?"
                onConfirm={enroll}
              >
                <Button
                  size="large"
                  danger
                  className="w-full"
                  type="primary"
                  loading={enrollLoading}
                >
                  Enroll now
                </Button>
              </Popconfirm>
            </>
          )}
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
  );
}
