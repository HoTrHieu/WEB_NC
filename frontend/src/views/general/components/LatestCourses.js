import React, { Component } from "react";

import CartCourse from './CartCourse';

class LatestCourses extends Component {
  render() {
    return (
      <section id="mu-latest-courses">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="mu-latest-courses-area">
                <div className="mu-title">
                  <h2>Latest Courses</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ipsa ea maxime mollitia, vitae voluptates, quod at, saepe reprehenderit totam aliquam architecto fugiat sunt animi!</p>
                </div>
                <div id="mu-latest-course-slide" className="mu-latest-courses-content">
                  <CartCourse/>
                  <CartCourse/>
                  <CartCourse/>
                  <CartCourse/>
                  <CartCourse/>
                  <CartCourse/>
                  <CartCourse/>
                  <CartCourse/>
                  <CartCourse/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default LatestCourses;