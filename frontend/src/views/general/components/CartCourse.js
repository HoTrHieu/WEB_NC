import React from "react";

export default function CartCourse() {

    return (
        <div className="col-lg-4 col-md-4 col-xs-12">
            <div className="mu-latest-course-single">
                <figure className="mu-latest-course-img">
                    <a href="!#"><img src="assets/img/courses/1.jpg" alt="img" /></a>
                    <figcaption className="mu-latest-course-imgcaption">
                        <a href="!#">Drawing</a>
                        <span><i className="fa fa-clock-o"></i>90Days</span>
                    </figcaption>
                </figure>
                <div className="mu-latest-course-single-content">
                    <h4><a href="!#">Lorem ipsum dolor sit amet.</a></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quod nisi quisquam modi dolore, dicta obcaecati architecto quidem ullam quia.</p>
                    <div className="mu-latest-course-single-contbottom">
                        <a className="mu-course-details" href="!#">Details</a>
                        <span className="mu-course-price" href="!#">$165.00</span>
                    </div>
                </div>
            </div>
        </div>
    );
}