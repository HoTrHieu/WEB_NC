import React, { useCallback } from "react";
import {
  YoutubeOutlined,
  SafetyOutlined,
  ClockCircleOutlined,
  CodeOutlined,
  CopyOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { useQuery } from "../../shared/hooks/useQuery.hook";
import { CourseService } from "../course/CourseService";
import { CourseCard } from "../course/CourseCard";
import { CategoryService } from "../category/CategoryService";
import { ICategoryTotalEnrollment } from "../../shared/entities/ICategoryTotalEnrollment";
import { NavLink } from "react-router-dom";
import Slider from 'react-slick';
import { CrudService } from "../../shared/services/CrudService";
import { CourseTopType } from "../course/enums/CourseTopType";

const features = [
  {
    icon: <YoutubeOutlined />,
    title: "1,000+ Courses",
    subTitle: "Explore a wide range of skills.",
  },
  {
    icon: <SafetyOutlined />,
    title: "By Industry Experts",
    subTitle: "Professional development from the best people.",
  },
  {
    icon: <ClockCircleOutlined />,
    title: "Unlimited Access",
    subTitle: "Unlock Library and learn any topic with one subscription.",
  },
  {
    icon: <CodeOutlined />,
    title: "Lesson Source Files",
    subTitle: "Explore a wide range of skills.",
  },
  {
    icon: <CopyOutlined />,
    title: "Printed Diploma",
    subTitle: "Professional development from the best people.",
  },
  {
    icon: <TeamOutlined />,
    title: "Premium Support",
    subTitle: "Unlock Library and learn any topic with one subscription.",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5
}

export function HomePage() {
  const topCoursesOfWeek = useQuery(CourseService.topOfWeeks);
  const topCategoriesOfWeek = useQuery(CategoryService.topOfWeeks);
  const top10Viewed = useQuery(useCallback(() => CourseService.top(CourseTopType.VIEW), []));
  const top10New = useQuery(useCallback(() => CourseService.top(CourseTopType.NEW), []));
  return (
    <div className="mt-8 mb-16">
      <div>
        <h1 className="text-center text-blue-400 text-3xl">
          Welcome to Fademy
        </h1>
        <p className="text-center text-xl text-gray-500">
          What other students turned professionals have to say about us after
          learning with us and reaching their goals.
        </p>
        <div className="flex flex-wrap mt-12">
          {features.map((feature) => (
            <div className="flex items-center w-1/3 mb-2">
              <div className="rounded-full h-16 w-16 flex items-center justify-center bg-blue-400 text-white text-2xl mb-4">
                {feature.icon}
              </div>
              <div className="ml-2 flex flex-col justify-center">
                <h1 className="text-gray-500">
                  <b>{feature.title}</b>
                </h1>
                <p className="text-gray-500">{feature.subTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-center text-blue-400 text-3xl mt-16 mb-8">
          Top courses of week
        </h1>
        <Slider {...sliderSettings}>
          {[...(Array(5).keys() as any)].map((_, idx) => (
            <div className="px-2">
              <CourseCard
                className="w-full"
                course={topCoursesOfWeek.data ? topCoursesOfWeek.data[idx] : {}}
                loading={!topCoursesOfWeek.data}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div>
        <h1 className="text-center text-blue-400 text-3xl mt-16 mb-8">
          Top categories of week
        </h1>
        <div className="flex flex-wrap">
          {topCategoriesOfWeek.data &&
            topCategoriesOfWeek.data.map((tc: ICategoryTotalEnrollment) => (
              <div className="w-1/5 p-2">
                <NavLink
                  to={`/courses/${tc.categoryId}`}
                  className="text-gray-500 block border rounded-lg p-5 cursor-pointer hover:shadow"
                >
                  {tc.category.name}
                </NavLink>
              </div>
            ))}
        </div>
      </div>

      <div>
        <h1 className="text-center text-blue-400 text-3xl mt-16 mb-8">
          Most viewed courses
        </h1>
        <Slider {...sliderSettings}>
          {[...(Array(10).keys() as any)].map((_, idx) => (
            <div className="px-2">
              <CourseCard
                className="w-full"
                course={top10Viewed.data ? top10Viewed.data[idx] : {}}
                loading={!top10Viewed.data}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div>
        <h1 className="text-center text-blue-400 text-3xl mt-16 mb-8">
          Newest courses
        </h1>
        <Slider {...sliderSettings}>
          {[...(Array(10).keys() as any)].map((_, idx) => (
            <div className="px-2">
              <CourseCard
                className="w-full"
                course={top10New.data ? top10New.data[idx] : {}}
                loading={!top10New.data}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
