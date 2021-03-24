import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


const Header = props => {
    const [valueInput, setValueInput] = useState("");


    const handleSearch = () => {
        console.log('input: ', valueInput)
    }

    return (
        <>
            <div className="mdk-header mdk-header--bg-dark bg-dark js-mdk-header mb-0" style={{ zIndex: 100 }} data-effects="parallax-background waterfall" data-fixed data-condenses>
                <div className="mdk-header__content justify-content-center">
                    <div className="navbar navbar-expand navbar-dark-dodger-blue bg-transparent will-fade-background" id="default-navbar" data-primary>

                        <Link to="/" className="navbar-brand mr-16pt">
                            {/* <img class="navbar-brand-icon" src="assets/images/logo/white-100@2x.png" width="30" alt="Luma"> */}
                            <span className="avatar avatar-sm navbar-brand-icon mr-0 mr-lg-8pt">
                                <span className="avatar-title rounded bg-primary"><img src="assets/images/illustration/student/128/white.svg" alt="logo" className="img-fluid" /></span>
                            </span>
                            <span className="d-none d-lg-block">Luma</span>
                        </Link>
                        <ul className="nav navbar-nav d-none d-sm-flex flex justify-content-start ml-8pt">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="!#" className="nav-link dropdown-toggle" data-toggle="dropdown" data-caret="false">Courses</a>
                                <div className="dropdown-menu">
                                    <Link to="/list-course" className="dropdown-item">Browse Courses</Link>
                                    <Link to="/list-course?category=website" className="dropdown-item">Website</Link>
                                    <Link to="/list-course?category=mobile" className="dropdown-item">Mobile</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a href="fixed-pricing.html" className="nav-link">Pricing</a>
                            </li>
                            <li className="nav-item dropdown" data-toggle="tooltip" data-title="Community" data-placement="bottom" data-boundary="window">
                                <a href="!#" className="nav-link dropdown-toggle" data-toggle="dropdown" data-caret="false">
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
                        <div className="search-form navbar-search d-none d-lg-flex mr-16pt" style={{maxWidth: "230px"}}>
                            <button onClick={()=>handleSearch()} className="btn" type="submit"><i className="material-icons">search</i></button>
                            <input value={valueInput} onChange={(event) => setValueInput(event.target.value)} type="text" className="form-control" placeholder="Search ..."/>
                        </div>
                        <ul className="nav navbar-nav ml-auto mr-0">
                            <li className="nav-item">
                                <Link to="/login" className="nav-link" data-toggle="tooltip" data-title="Login" data-placement="bottom" data-boundary="window"><i className="material-icons">lock_open</i></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/signup" className="btn btn-outline-white">Get Started</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {
                window.location.pathname === '/' &&
                <div className="mdk-header mdk-header--bg-dark bg-dark js-mdk-header mb-0" data-effects="parallax-background waterfall" data-fixed data-condenses>
                    <div className="mdk-header__bg">
                        <div className="mdk-header__bg-front" style={{ backgroundImage: 'url(./assets/images/photodune-4161018-group-of-students-m.jpg)' }} />
                    </div>
                    <div className="mdk-header__content justify-content-center">
                        <div className="hero container page__container text-center text-md-left py-112pt">
                            <h1 className="text-white text-shadow">Learn to Code</h1>
                            <p className="lead measure-hero-lead mx-auto mx-md-0 text-white text-shadow mb-48pt">Business, Technology and Creative Skills taught by industry experts. Explore a wide range of skills with our professional tutorials.</p>
                            <Link to="/list-course" className="btn btn-lg btn-white btn--raised mb-16pt">Browse Courses</Link>
                            <p className="mb-0"><a href="!#" className="text-white text-shadow"><strong>Are you a teacher?</strong></a></p>
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
