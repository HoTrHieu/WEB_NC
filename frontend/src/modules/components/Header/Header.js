import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {

    
    return (
        <>
            <div className="mdk-header mdk-header--bg-dark bg-dark js-mdk-header mb-0" style={{zIndex: 100}} data-effects="parallax-background waterfall" data-fixed data-condenses>
                <div className="mdk-header__content justify-content-center">
                    <div className="navbar navbar-expand navbar-dark-dodger-blue bg-transparent will-fade-background" id="default-navbar" data-primary>
                    
                        <a href="fixed-index.html" className="navbar-brand mr-16pt">
                        {/* <img class="navbar-brand-icon" src="assets/images/logo/white-100@2x.png" width="30" alt="Luma"> */}
                        <span className="avatar avatar-sm navbar-brand-icon mr-0 mr-lg-8pt">
                            <span className="avatar-title rounded bg-primary"><img src="assets/images/illustration/student/128/white.svg" alt="logo" className="img-fluid" /></span>
                        </span>
                        <span className="d-none d-lg-block">Luma</span>
                        </a>
                        <ul className="nav navbar-nav d-none d-sm-flex flex justify-content-start ml-8pt">
                            <li className="nav-item active">
                                <a href="fixed-index.html" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" data-caret="false">Courses</a>
                                <div className="dropdown-menu">
                                <a href="fixed-courses.html" className="dropdown-item">Browse Courses</a>
                                <a href="fixed-student-course.html" className="dropdown-item">Preview Course</a>
                                <a href="fixed-student-lesson.html" className="dropdown-item">Preview Lesson</a>
                                <a href="fixed-student-take-course.html" className="dropdown-item"><span className="mr-16pt">Take Course</span> <span className="badge badge-notifications badge-accent text-uppercase ml-auto">Pro</span></a>
                                <a href="fixed-student-take-lesson.html" className="dropdown-item">Take Lesson</a>
                                <a href="fixed-student-take-quiz.html" className="dropdown-item">Take Quiz</a>
                                <a href="fixed-student-quiz-result-details.html" className="dropdown-item">Quiz Result</a>
                                <a href="fixed-student-dashboard.html" className="dropdown-item">Student Dashboard</a>
                                <a href="fixed-student-my-courses.html" className="dropdown-item">My Courses</a>
                                <a href="fixed-student-quiz-results.html" className="dropdown-item">My Quizzes</a>
                                <a href="fixed-help-center.html" className="dropdown-item">Help Center</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" data-caret="false">Paths</a>
                                <div className="dropdown-menu">
                                <a href="fixed-paths.html" className="dropdown-item">Browse Paths</a>
                                <a href="fixed-student-path.html" className="dropdown-item">Path Details</a>
                                <a href="fixed-student-path-assessment.html" className="dropdown-item">Skill Assessment</a>
                                <a href="fixed-student-path-assessment-result.html" className="dropdown-item">Skill Result</a>
                                <a href="fixed-student-paths.html" className="dropdown-item">My Paths</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a href="fixed-pricing.html" className="nav-link">Pricing</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" data-caret="false">Teachers</a>
                                <div className="dropdown-menu">
                                <a href="fixed-instructor-dashboard.html" className="dropdown-item">Instructor Dashboard</a>
                                <a href="fixed-instructor-courses.html" className="dropdown-item">Manage Courses</a>
                                <a href="fixed-instructor-quizzes.html" className="dropdown-item">Manage Quizzes</a>
                                <a href="fixed-instructor-earnings.html" className="dropdown-item">Earnings</a>
                                <a href="fixed-instructor-statement.html" className="dropdown-item">Statement</a>
                                <a href="fixed-instructor-edit-course.html" className="dropdown-item">Edit Course</a>
                                <a href="fixed-instructor-edit-quiz.html" className="dropdown-item">Edit Quiz</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown" data-toggle="tooltip" data-title="Community" data-placement="bottom" data-boundary="window">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" data-caret="false">
                            <i className="material-icons">people_outline</i>
                            </a>
                            <div className="dropdown-menu">
                            <a href="fixed-teachers.html" className="dropdown-item">Browse Teachers</a>
                            <a href="fixed-student-profile.html" className="dropdown-item">Student Profile</a>
                            <a href="fixed-teacher-profile.html" className="dropdown-item">Instructor Profile</a>
                            <a href="fixed-blog.html" className="dropdown-item">Blog</a>
                            <a href="fixed-blog-post.html" className="dropdown-item">Blog Post</a>
                            <a href="fixed-faq.html" className="dropdown-item">FAQ</a>
                            <a href="fixed-help-center.html" className="dropdown-item">Help Center</a>
                            <a href="fixed-discussions.html" className="dropdown-item">Discussions</a>
                            <a href="fixed-discussion.html" className="dropdown-item">Discussion Details</a>
                            <a href="fixed-discussions-ask.html" className="dropdown-item">Ask Question</a>
                            </div>
                        </li>
                        </ul>
                        <ul className="nav navbar-nav ml-auto mr-0">
                            <li className="nav-item">
                                <a href="fixed-login.html" className="nav-link" data-toggle="tooltip" data-title="Login" data-placement="bottom" data-boundary="window"><i className="material-icons">lock_open</i></a>
                            </li>
                            <li className="nav-item">
                                <a href="fixed-signup.html" className="btn btn-outline-white">Get Started</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {
                window.location.pathname === '/' &&   
                <div className="mdk-header mdk-header--bg-dark bg-dark js-mdk-header mb-0" data-effects="parallax-background waterfall" data-fixed data-condenses>
                    <div className="mdk-header__bg">
                        <div className="mdk-header__bg-front" style={{backgroundImage: 'url(./assets/images/photodune-4161018-group-of-students-m.jpg)'}} />
                    </div>
                    <div className="mdk-header__content justify-content-center">
                        <div className="hero container page__container text-center text-md-left py-112pt">
                            <h1 className="text-white text-shadow">Learn to Code</h1>
                            <p className="lead measure-hero-lead mx-auto mx-md-0 text-white text-shadow mb-48pt">Business, Technology and Creative Skills taught by industry experts. Explore a wide range of skills with our professional tutorials.</p>
                            <a href="fixed-courses.html" className="btn btn-lg btn-white btn--raised mb-16pt">Browse Courses</a>
                            <p className="mb-0"><a href="#" className="text-white text-shadow"><strong>Are you a teacher?</strong></a></p>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

Header.propTypes = {
    
};

export default Header;
