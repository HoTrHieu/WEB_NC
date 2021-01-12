import React from "react";

import CartCourse from './CartCourse';

export default function RecommendedCourse(props) {

  return (
    <section id="mu-latest-courses">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="mu-latest-courses-area">
              <div className="mu-title">
                <h2>{props.RecommendedCourse}</h2>
              </div>
              <div id="mu-latest-course-slide" className="mu-latest-courses-content">
                <CartCourse />
                <CartCourse />
                <CartCourse />
                <CartCourse />
                <CartCourse />
                <CartCourse />
                <CartCourse />
                <CartCourse />
                <CartCourse />
                <CartCourse />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


