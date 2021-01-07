import { React } from "react";
import Slider from '../components/Slider';
import Service from '../components/Service';
import AboutUs from '../components/AboutUs';
import AbountusCounter from '../components/AboutusCounter';
import PopularFields from '../components/PopularFields';
import LatestCourses from '../components/LatestCourses';
import Dev_Member from '../components/Dev_Member';

export default function Home(){
    return (
        <div>
            <Slider/>
            <Service/>
            <PopularFields/>
            <LatestCourses/>
            <Dev_Member/>
        </div>
    );
}