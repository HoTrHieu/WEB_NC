import React, { useState } from 'react';

const ListCourse = () => {
    const [showNav, setShowNav] = useState(false);
    const handleOut = () => {
        showNav && setShowNav(false);
    }

    const render = () => {
        return (
            <>
                <div onClick={() => handleOut()}>
                    <div className="page-section">
                        <div className="container page__container">
                            <div className="d-flex flex-column flex-sm-row align-items-sm-center mb-24pt" style={{ whiteSpace: 'nowrap' }}>
                                <small className="flex text-muted text-headings text-uppercase mr-3 mb-2 mb-sm-0">Displaying 4 out of 10 courses</small>
                                <div className="w-auto ml-sm-auto table d-flex align-items-center mb-2 mb-sm-0">
                                    <small className="text-muted text-headings text-uppercase mr-3 d-none d-sm-block">Sort by</small>
                                    <button className="sort desc small text-headings text-uppercase">Newest</button>
                                    <button className="sort small text-headings text-uppercase ml-2">Popularity</button>
                                </div>
                                <button onClick={() => setShowNav(true)} className="btn btn-sm btn-white ml-sm-16pt">
                                    <i className="material-icons icon--left">tune</i> Filters
                                </button>
                            </div>
                            <div className="page-separator">
                                <div className="page-separator__text">Popular Courses</div>
                            </div>
                            <div className="row card-group-row">
                                <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                                    <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay mdk-reveal js-mdk-reveal card-group-row__card" data-overlay-onload-show data-popover-onload-show data-force-reveal data-partial-height={44} data-toggle="popover" data-trigger="click">
                                        <a href="student-course.html" className="js-image" data-position>
                                            <img src="assets/images/paths/mailchimp_430x168.png" alt="course" />
                                            <span className="overlay__content align-items-start justify-content-start">
                                                <span className="overlay__action card-body d-flex align-items-center">
                                                    <i className="material-icons mr-4pt">play_circle_outline</i>
                                                    <span className="card-title text-white">Preview</span>
                                                </span>
                                            </span>
                                        </a>
                                        <div className="mdk-reveal__content">
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <div className="flex">
                                                        <a className="card-title" href="student-course.html">Newsletter Design</a>
                                                        <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                                    </div>
                                                    <a href="student-course.html" data-toggle="tooltip" data-title="Remove Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite</a>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="rating flex">
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                                                    </div>
                                                    <small className="text-50">6 hours</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popoverContainer d-none">
                                        <div className="media">
                                            <div className="media-left mr-12pt">
                                                <img src="assets/images/paths/mailchimp_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                            </div>
                                            <div className="media-body">
                                                <div className="card-title mb-0">Newsletter Design</div>
                                                <p className="lh-1 mb-0">
                                                    <span className="text-black-50 small">with</span>
                                                    <span className="text-black-50 small font-weight-bold">Elijah Murray</span>
                                                </p>
                                            </div>
                                        </div>
                                        <p className="my-16pt text-black-70">Learn the fundamentals of working with Angular and how to create basic applications.</p>
                                        <div className="mb-16pt">
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Fundamentals of working with Angular</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Create complete Angular applications</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Working with the Angular CLI</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Understanding Dependency Injection</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Testing with Angular</small></p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                                </div>
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">assessment</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>Beginner</small></p>
                                                </div>
                                            </div>
                                            <div className="col text-right">
                                                <a href="student-course.html" className="btn btn-primary">Watch trailer</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                                    <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay mdk-reveal js-mdk-reveal card-group-row__card" data-partial-height={44} data-toggle="popover" data-trigger="click">
                                        <a href="student-course.html" className="js-image" data-position>
                                            <img src="assets/images/paths/xd_430x168.png" alt="course" />
                                            <span className="overlay__content align-items-start justify-content-start">
                                                <span className="overlay__action card-body d-flex align-items-center">
                                                    <i className="material-icons mr-4pt">play_circle_outline</i>
                                                    <span className="card-title text-white">Preview</span>
                                                </span>
                                            </span>
                                        </a>
                                        <div className="mdk-reveal__content">
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <div className="flex">
                                                        <a className="card-title" href="student-course.html">Adobe XD</a>
                                                        <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                                    </div>
                                                    <a href="student-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="rating flex">
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                                                    </div>
                                                    <small className="text-50">6 hours</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popoverContainer d-none">
                                        <div className="media">
                                            <div className="media-left mr-12pt">
                                                <img src="assets/images/paths/xd_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                            </div>
                                            <div className="media-body">
                                                <div className="card-title mb-0">Adobe XD</div>
                                                <p className="lh-1 mb-0">
                                                    <span className="text-black-50 small">with</span>
                                                    <span className="text-black-50 small font-weight-bold">Elijah Murray</span>
                                                </p>
                                            </div>
                                        </div>
                                        <p className="my-16pt text-black-70">Learn the fundamentals of working with Angular and how to create basic applications.</p>
                                        <div className="mb-16pt">
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Fundamentals of working with Angular</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Create complete Angular applications</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Working with the Angular CLI</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Understanding Dependency Injection</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Testing with Angular</small></p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                                </div>
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">assessment</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>Beginner</small></p>
                                                </div>
                                            </div>
                                            <div className="col text-right">
                                                <a href="student-course.html" className="btn btn-primary">Watch trailer</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                                    <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay mdk-reveal js-mdk-reveal card-group-row__card" data-partial-height={44} data-toggle="popover" data-trigger="click">
                                        <a href="student-course.html" className="js-image" data-position>
                                            <img src="assets/images/paths/invision_430x168.png" alt="course" />
                                            <span className="overlay__content align-items-start justify-content-start">
                                                <span className="overlay__action card-body d-flex align-items-center">
                                                    <i className="material-icons mr-4pt">play_circle_outline</i>
                                                    <span className="card-title text-white">Preview</span>
                                                </span>
                                            </span>
                                        </a>
                                        <div className="mdk-reveal__content">
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <div className="flex">
                                                        <a className="card-title" href="student-course.html">inVision App</a>
                                                        <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                                    </div>
                                                    <a href="student-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="rating flex">
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                                                    </div>
                                                    <small className="text-50">6 hours</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popoverContainer d-none">
                                        <div className="media">
                                            <div className="media-left mr-12pt">
                                                <img src="assets/images/paths/invision_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                            </div>
                                            <div className="media-body">
                                                <div className="card-title mb-0">inVision App</div>
                                                <p className="lh-1 mb-0">
                                                    <span className="text-black-50 small">with</span>
                                                    <span className="text-black-50 small font-weight-bold">Elijah Murray</span>
                                                </p>
                                            </div>
                                        </div>
                                        <p className="my-16pt text-black-70">Learn the fundamentals of working with Angular and how to create basic applications.</p>
                                        <div className="mb-16pt">
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Fundamentals of working with Angular</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Create complete Angular applications</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Working with the Angular CLI</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Understanding Dependency Injection</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Testing with Angular</small></p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                                </div>
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">assessment</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>Beginner</small></p>
                                                </div>
                                            </div>
                                            <div className="col text-right">
                                                <a href="student-course.html" className="btn btn-primary">Watch trailer</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                                    <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay mdk-reveal js-mdk-reveal card-group-row__card" data-partial-height={44} data-toggle="popover" data-trigger="click">
                                        <a href="student-course.html" className="js-image" data-position>
                                            <img src="assets/images/paths/craft_430x168.png" alt="course" />
                                            <span className="overlay__content align-items-start justify-content-start">
                                                <span className="overlay__action card-body d-flex align-items-center">
                                                    <i className="material-icons mr-4pt">play_circle_outline</i>
                                                    <span className="card-title text-white">Preview</span>
                                                </span>
                                            </span>
                                        </a>
                                        <div className="mdk-reveal__content">
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <div className="flex">
                                                        <a className="card-title" href="student-course.html">Craft by inVision</a>
                                                        <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                                    </div>
                                                    <a href="student-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="rating flex">
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                                                    </div>
                                                    <small className="text-50">6 hours</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popoverContainer d-none">
                                        <div className="media">
                                            <div className="media-left mr-12pt">
                                                <img src="assets/images/paths/craft_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                            </div>
                                            <div className="media-body">
                                                <div className="card-title mb-0">Craft by inVision</div>
                                                <p className="lh-1 mb-0">
                                                    <span className="text-black-50 small">with</span>
                                                    <span className="text-black-50 small font-weight-bold">Elijah Murray</span>
                                                </p>
                                            </div>
                                        </div>
                                        <p className="my-16pt text-black-70">Learn the fundamentals of working with Angular and how to create basic applications.</p>
                                        <div className="mb-16pt">
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Fundamentals of working with Angular</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Create complete Angular applications</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Working with the Angular CLI</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Understanding Dependency Injection</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Testing with Angular</small></p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                                </div>
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">assessment</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>Beginner</small></p>
                                                </div>
                                            </div>
                                            <div className="col text-right">
                                                <a href="student-course.html" className="btn btn-primary">Watch trailer</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-32pt">
                                <ul className="pagination justify-content-start pagination-xsm m-0">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="!#" aria-label="Previous">
                                            <span aria-hidden="true" className="material-icons">chevron_left</span>
                                            <span>Prev</span>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="!#" aria-label="Page 1">
                                            <span>1</span>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="!#" aria-label="Page 2">
                                            <span>2</span>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="!#" aria-label="Next">
                                            <span>Next</span>
                                            <span aria-hidden="true" className="material-icons">chevron_right</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="page-separator">
                                <div className="page-separator__text">Development Courses</div>
                            </div>
                            <div className="row card-group-row">
                                <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                                    <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-toggle="popover" data-trigger="click">
                                        <a href="student-course.html" className="card-img-top js-image" data-position data-height={140}>
                                            <img src="assets/images/paths/angular_430x168.png" alt="course" />
                                            <span className="overlay__content">
                                                <span className="overlay__action d-flex flex-column text-center">
                                                    <i className="material-icons icon-32pt">play_circle_outline</i>
                                                    <span className="card-title text-white">Preview</span>
                                                </span>
                                            </span>
                                        </a>
                                        <div className="card-body flex">
                                            <div className="d-flex">
                                                <div className="flex">
                                                    <a className="card-title" href="student-course.html">Learn Angular fundamentals</a>
                                                    <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                                </div>
                                                <a href="student-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
                                            </div>
                                            <div className="d-flex">
                                                <div className="rating flex">
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star_border</span></span>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="row justify-content-between">
                                                <div className="col-auto d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                                </div>
                                                <div className="col-auto d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popoverContainer d-none">
                                        <div className="media">
                                            <div className="media-left mr-12pt">
                                                <img src="assets/images/paths/angular_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                            </div>
                                            <div className="media-body">
                                                <div className="card-title mb-0">Learn Angular fundamentals</div>
                                                <p className="lh-1 mb-0">
                                                    <span className="text-black-50 small">with</span>
                                                    <span className="text-black-50 small font-weight-bold">Elijah Murray</span>
                                                </p>
                                            </div>
                                        </div>
                                        <p className="my-16pt text-black-70">Learn the fundamentals of working with Angular and how to create basic applications.</p>
                                        <div className="mb-16pt">
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Fundamentals of working with Angular</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Create complete Angular applications</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Working with the Angular CLI</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Understanding Dependency Injection</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Testing with Angular</small></p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                                </div>
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">assessment</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>Beginner</small></p>
                                                </div>
                                            </div>
                                            <div className="col text-right">
                                                <a href="student-course.html" className="btn btn-primary">Watch trailer</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                                    <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-toggle="popover" data-trigger="click">
                                        <a href="student-course.html" className="card-img-top js-image" data-position data-height={140}>
                                            <img src="assets/images/paths/swift_430x168.png" alt="course" />
                                            <span className="overlay__content">
                                                <span className="overlay__action d-flex flex-column text-center">
                                                    <i className="material-icons icon-32pt">play_circle_outline</i>
                                                    <span className="card-title text-white">Preview</span>
                                                </span>
                                            </span>
                                        </a>
                                        <div className="card-body flex">
                                            <div className="d-flex">
                                                <div className="flex">
                                                    <a className="card-title" href="student-course.html">Build an iOS Application in Swift</a>
                                                    <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                                </div>
                                                <a href="student-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
                                            </div>
                                            <div className="d-flex">
                                                <div className="rating flex">
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star_border</span></span>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="row justify-content-between">
                                                <div className="col-auto d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                                </div>
                                                <div className="col-auto d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popoverContainer d-none">
                                        <div className="media">
                                            <div className="media-left mr-12pt">
                                                <img src="assets/images/paths/swift_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                            </div>
                                            <div className="media-body">
                                                <div className="card-title mb-0">Build an iOS Application in Swift</div>
                                                <p className="lh-1 mb-0">
                                                    <span className="text-black-50 small">with</span>
                                                    <span className="text-black-50 small font-weight-bold">Elijah Murray</span>
                                                </p>
                                            </div>
                                        </div>
                                        <p className="my-16pt text-black-70">Learn the fundamentals of working with Angular and how to create basic applications.</p>
                                        <div className="mb-16pt">
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Fundamentals of working with Angular</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Create complete Angular applications</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Working with the Angular CLI</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Understanding Dependency Injection</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Testing with Angular</small></p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                                </div>
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">assessment</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>Beginner</small></p>
                                                </div>
                                            </div>
                                            <div className="col text-right">
                                                <a href="student-course.html" className="btn btn-primary">Watch trailer</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                                    <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-toggle="popover" data-trigger="click">
                                        <a href="student-course.html" className="card-img-top js-image" data-position data-height={140}>
                                            <img src="assets/images/paths/wordpress_430x168.png" alt="course" />
                                            <span className="overlay__content">
                                                <span className="overlay__action d-flex flex-column text-center">
                                                    <i className="material-icons icon-32pt">play_circle_outline</i>
                                                    <span className="card-title text-white">Preview</span>
                                                </span>
                                            </span>
                                        </a>
                                        <div className="card-body flex">
                                            <div className="d-flex">
                                                <div className="flex">
                                                    <a className="card-title" href="student-course.html">Build a WordPress Website</a>
                                                    <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                                </div>
                                                <a href="student-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
                                            </div>
                                            <div className="d-flex">
                                                <div className="rating flex">
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star_border</span></span>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="row justify-content-between">
                                                <div className="col-auto d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                                </div>
                                                <div className="col-auto d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popoverContainer d-none">
                                        <div className="media">
                                            <div className="media-left mr-12pt">
                                                <img src="assets/images/paths/wordpress_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                            </div>
                                            <div className="media-body">
                                                <div className="card-title mb-0">Build a WordPress Website</div>
                                                <p className="lh-1 mb-0">
                                                    <span className="text-black-50 small">with</span>
                                                    <span className="text-black-50 small font-weight-bold">Elijah Murray</span>
                                                </p>
                                            </div>
                                        </div>
                                        <p className="my-16pt text-black-70">Learn the fundamentals of working with Angular and how to create basic applications.</p>
                                        <div className="mb-16pt">
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Fundamentals of working with Angular</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Create complete Angular applications</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Working with the Angular CLI</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Understanding Dependency Injection</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Testing with Angular</small></p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                                </div>
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">assessment</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>Beginner</small></p>
                                                </div>
                                            </div>
                                            <div className="col text-right">
                                                <a href="student-course.html" className="btn btn-primary">Watch trailer</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                                    <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-toggle="popover" data-trigger="click">
                                        <a href="student-course.html" className="card-img-top js-image" data-position="left" data-height={140}>
                                            <img src="assets/images/paths/react_430x168.png" alt="course" />
                                            <span className="overlay__content">
                                                <span className="overlay__action d-flex flex-column text-center">
                                                    <i className="material-icons icon-32pt">play_circle_outline</i>
                                                    <span className="card-title text-white">Preview</span>
                                                </span>
                                            </span>
                                        </a>
                                        <div className="card-body flex">
                                            <div className="d-flex">
                                                <div className="flex">
                                                    <a className="card-title" href="student-course.html">Become a React Native Developer</a>
                                                    <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                                </div>
                                                <a href="student-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
                                            </div>
                                            <div className="d-flex">
                                                <div className="rating flex">
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star_border</span></span>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="row justify-content-between">
                                                <div className="col-auto d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                                </div>
                                                <div className="col-auto d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popoverContainer d-none">
                                        <div className="media">
                                            <div className="media-left mr-12pt">
                                                <img src="assets/images/paths/react_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                            </div>
                                            <div className="media-body">
                                                <div className="card-title mb-0">Become a React Native Developer</div>
                                                <p className="lh-1 mb-0">
                                                    <span className="text-black-50 small">with</span>
                                                    <span className="text-black-50 small font-weight-bold">Elijah Murray</span>
                                                </p>
                                            </div>
                                        </div>
                                        <p className="my-16pt text-black-70">Learn the fundamentals of working with Angular and how to create basic applications.</p>
                                        <div className="mb-16pt">
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Fundamentals of working with Angular</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Create complete Angular applications</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Working with the Angular CLI</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Understanding Dependency Injection</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Testing with Angular</small></p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                                </div>
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">assessment</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>Beginner</small></p>
                                                </div>
                                            </div>
                                            <div className="col text-right">
                                                <a href="student-course.html" className="btn btn-primary">Watch trailer</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-32pt">
                                <ul className="pagination justify-content-start pagination-xsm m-0">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="!#" aria-label="Previous">
                                            <span aria-hidden="true" className="material-icons">chevron_left</span>
                                            <span>Prev</span>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="!#" aria-label="Page 1">
                                            <span>1</span>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="!#" aria-label="Page 2">
                                            <span>2</span>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="!#" aria-label="Next">
                                            <span>Next</span>
                                            <span aria-hidden="true" className="material-icons">chevron_right</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="page-separator">
                                <div className="page-separator__text">Design Courses</div>
                            </div>
                            <div className="row card-group-row">
                                <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                                    <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-toggle="popover" data-trigger="click">
                                        <a href="student-course.html" className="card-img-top js-image" data-position data-height={140}>
                                            <img src="assets/images/paths/sketch_430x168.png" alt="course" />
                                            <span className="overlay__content">
                                                <span className="overlay__action d-flex flex-column text-center">
                                                    <i className="material-icons icon-32pt">play_circle_outline</i>
                                                    <span className="card-title text-white">Preview</span>
                                                </span>
                                            </span>
                                        </a>
                                        <div className="card-body flex">
                                            <div className="d-flex">
                                                <div className="flex">
                                                    <a className="card-title" href="student-course.html">Learn Sketch</a>
                                                    <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                                </div>
                                                <a href="student-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
                                            </div>
                                            <div className="d-flex">
                                                <div className="rating flex">
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star_border</span></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="row justify-content-between">
                                                <div className="col-auto d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                                </div>
                                                <div className="col-auto d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popoverContainer d-none">
                                        <div className="media">
                                            <div className="media-left mr-12pt">
                                                <img src="assets/images/paths/sketch_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                            </div>
                                            <div className="media-body">
                                                <div className="card-title mb-0">Learn Sketch</div>
                                                <p className="lh-1 mb-0">
                                                    <span className="text-black-50 small">with</span>
                                                    <span className="text-black-50 small font-weight-bold">Elijah Murray</span>
                                                </p>
                                            </div>
                                        </div>
                                        <p className="my-16pt text-black-70">Learn the fundamentals of working with Angular and how to create basic applications.</p>
                                        <div className="mb-16pt">
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Fundamentals of working with Angular</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Create complete Angular applications</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Working with the Angular CLI</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Understanding Dependency Injection</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Testing with Angular</small></p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                                </div>
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">assessment</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>Beginner</small></p>
                                                </div>
                                            </div>
                                            <div className="col text-right">
                                                <a href="student-course.html" className="btn btn-primary">Watch trailer</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                                    <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-toggle="popover" data-trigger="click">
                                        <a href="student-course.html" className="card-img-top js-image" data-position data-height={140}>
                                            <img src="assets/images/paths/flinto_430x168.png" alt="course" />
                                            <span className="overlay__content">
                                                <span className="overlay__action d-flex flex-column text-center">
                                                    <i className="material-icons icon-32pt">play_circle_outline</i>
                                                    <span className="card-title text-white">Preview</span>
                                                </span>
                                            </span>
                                        </a>
                                        <div className="card-body flex">
                                            <div className="d-flex">
                                                <div className="flex">
                                                    <a className="card-title" href="student-course.html">Learn Flinto</a>
                                                    <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                                </div>
                                                <a href="student-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
                                            </div>
                                            <div className="d-flex">
                                                <div className="rating flex">
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star_border</span></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="row justify-content-between">
                                                <div className="col-auto d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                                </div>
                                                <div className="col-auto d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popoverContainer d-none">
                                        <div className="media">
                                            <div className="media-left mr-12pt">
                                                <img src="assets/images/paths/flinto_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                            </div>
                                            <div className="media-body">
                                                <div className="card-title mb-0">Learn Flinto</div>
                                                <p className="lh-1 mb-0">
                                                    <span className="text-black-50 small">with</span>
                                                    <span className="text-black-50 small font-weight-bold">Elijah Murray</span>
                                                </p>
                                            </div>
                                        </div>
                                        <p className="my-16pt text-black-70">Learn the fundamentals of working with Angular and how to create basic applications.</p>
                                        <div className="mb-16pt">
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Fundamentals of working with Angular</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Create complete Angular applications</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Working with the Angular CLI</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Understanding Dependency Injection</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Testing with Angular</small></p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                                </div>
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">assessment</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>Beginner</small></p>
                                                </div>
                                            </div>
                                            <div className="col text-right">
                                                <a href="student-course.html" className="btn btn-primary">Watch trailer</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                                    <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-toggle="popover" data-trigger="click">
                                        <a href="student-course.html" className="card-img-top js-image" data-position data-height={140}>
                                            <img src="assets/images/paths/photoshop_430x168.png" alt="course" />
                                            <span className="overlay__content">
                                                <span className="overlay__action d-flex flex-column text-center">
                                                    <i className="material-icons icon-32pt">play_circle_outline</i>
                                                    <span className="card-title text-white">Preview</span>
                                                </span>
                                            </span>
                                        </a>
                                        <div className="card-body flex">
                                            <div className="d-flex">
                                                <div className="flex">
                                                    <a className="card-title" href="student-course.html">Learn Photoshop</a>
                                                    <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                                </div>
                                                <a href="student-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
                                            </div>
                                            <div className="d-flex">
                                                <div className="rating flex">
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star_border</span></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="row justify-content-between">
                                                <div className="col-auto d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                                </div>
                                                <div className="col-auto d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popoverContainer d-none">
                                        <div className="media">
                                            <div className="media-left mr-12pt">
                                                <img src="assets/images/paths/photoshop_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                            </div>
                                            <div className="media-body">
                                                <div className="card-title mb-0">Learn Photoshop</div>
                                                <p className="lh-1 mb-0">
                                                    <span className="text-black-50 small">with</span>
                                                    <span className="text-black-50 small font-weight-bold">Elijah Murray</span>
                                                </p>
                                            </div>
                                        </div>
                                        <p className="my-16pt text-black-70">Learn the fundamentals of working with Angular and how to create basic applications.</p>
                                        <div className="mb-16pt">
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Fundamentals of working with Angular</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Create complete Angular applications</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Working with the Angular CLI</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Understanding Dependency Injection</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Testing with Angular</small></p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                                </div>
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">assessment</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>Beginner</small></p>
                                                </div>
                                            </div>
                                            <div className="col text-right">
                                                <a href="student-course.html" className="btn btn-primary">Watch trailer</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                                    <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-toggle="popover" data-trigger="click">
                                        <a href="student-course.html" className="card-img-top js-image" data-position data-height={140}>
                                            <img src="assets/images/paths/figma_430x168.png" alt="course" />
                                            <span className="overlay__content">
                                                <span className="overlay__action d-flex flex-column text-center">
                                                    <i className="material-icons icon-32pt">play_circle_outline</i>
                                                    <span className="card-title text-white">Preview</span>
                                                </span>
                                            </span>
                                        </a>
                                        <div className="card-body flex">
                                            <div className="d-flex">
                                                <div className="flex">
                                                    <a className="card-title" href="student-course.html">Learn Figma</a>
                                                    <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                                </div>
                                                <a href="student-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
                                            </div>
                                            <div className="d-flex">
                                                <div className="rating flex">
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star</span></span>
                                                    <span className="rating__item"><span className="material-icons">star_border</span></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="row justify-content-between">
                                                <div className="col-auto d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                                </div>
                                                <div className="col-auto d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popoverContainer d-none">
                                        <div className="media">
                                            <div className="media-left mr-12pt">
                                                <img src="assets/images/paths/figma_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                            </div>
                                            <div className="media-body">
                                                <div className="card-title mb-0">Learn Figma</div>
                                                <p className="lh-1 mb-0">
                                                    <span className="text-black-50 small">with</span>
                                                    <span className="text-black-50 small font-weight-bold">Elijah Murray</span>
                                                </p>
                                            </div>
                                        </div>
                                        <p className="my-16pt text-black-70">Learn the fundamentals of working with Angular and how to create basic applications.</p>
                                        <div className="mb-16pt">
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Fundamentals of working with Angular</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Create complete Angular applications</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Working with the Angular CLI</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Understanding Dependency Injection</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Testing with Angular</small></p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                                </div>
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">assessment</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>Beginner</small></p>
                                                </div>
                                            </div>
                                            <div className="col text-right">
                                                <a href="student-course.html" className="btn btn-primary">Watch trailer</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="pagination justify-content-start pagination-xsm m-0">
                                <li className="page-item disabled">
                                    <a className="page-link" href="!#" aria-label="Previous">
                                        <span aria-hidden="true" className="material-icons">chevron_left</span>
                                        <span>Prev</span>
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="!#" aria-label="Page 1">
                                        <span>1</span>
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="!#" aria-label="Page 2">
                                        <span>2</span>
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="!#" aria-label="Next">
                                        <span>Next</span>
                                        <span aria-hidden="true" className="material-icons">chevron_right</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {
                    showNav &&
                    <div data-opened>
                        <div className="mdk-drawer__content" style={{ right: 0, left: "unset", zIndex: 100 }} >
                            <div className="sidebar sidebar-light sidebar-right py-16pt" data-perfect-scrollbar data-perfect-scrollbar-wheel-propagation="true">

                                <div className="sidebar-heading">Category</div>
                                <ul className="sidebar-menu">
                                    <li className="sidebar-menu-item active">
                                        <a href="!#" className="sidebar-menu-button">
                                            <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">code</span>
                                            <span className="sidebar-menu-text">Web Development</span>
                                        </a>
                                    </li>
                                    <li className="sidebar-menu-item">
                                        <a href="!#" className="sidebar-menu-button">
                                            <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">brush</span>
                                            <span className="sidebar-menu-text">Design</span>
                                        </a>
                                    </li>
                                    <li className="sidebar-menu-item">
                                        <a href="!#" className="sidebar-menu-button">
                                            <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">settings_cell</span>
                                            <span className="sidebar-menu-text">iOS &amp; Swift</span>
                                        </a>
                                    </li>
                                    <li className="sidebar-menu-item">
                                        <a href="!#" className="sidebar-menu-button">
                                            <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">android</span>
                                            <span className="sidebar-menu-text">Android</span>
                                        </a>
                                    </li>
                                    <li className="sidebar-menu-item">
                                        <a href="!#" className="sidebar-menu-button">
                                            <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">business_center</span>
                                            <span className="sidebar-menu-text">Business</span>
                                        </a>
                                    </li>
                                    <li className="sidebar-menu-item">
                                        <a href="!#" className="sidebar-menu-button">
                                            <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">crop_original</span>
                                            <span className="sidebar-menu-text">Photography</span>
                                        </a>
                                    </li>
                                    <li className="sidebar-menu-item">
                                        <a href="!#" className="sidebar-menu-button">
                                            <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">payment</span>
                                            <span className="sidebar-menu-text">Marketing</span>
                                        </a>
                                    </li>
                                    <li className="sidebar-menu-item">
                                        <a href="!#" className="sidebar-menu-button">
                                            <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">store</span>
                                            <span className="sidebar-menu-text">eCommerce</span>
                                        </a>
                                    </li>
                                    <li className="sidebar-menu-item">
                                        <a href="!#" className="sidebar-menu-button">
                                            <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">redeem</span>
                                            <span className="sidebar-menu-text">Health &amp; Fitness</span>
                                        </a>
                                    </li>
                                    <li className="sidebar-menu-item">
                                        <a href="!#" className="sidebar-menu-button">
                                            <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">music_note</span>
                                            <span className="sidebar-menu-text">Music</span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="sidebar-heading">Platform</div>
                                <div className="sidebar-block">
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" type="checkbox" defaultValue id="filtersCheck01" defaultChecked />
                                            <label className="custom-control-label" htmlFor="filtersCheck01">All</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" type="checkbox" defaultValue id="filtersCheck02" />
                                            <label className="custom-control-label" htmlFor="filtersCheck02">Archive</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" type="checkbox" defaultValue id="filtersCheck06" />
                                            <label className="custom-control-label" htmlFor="filtersCheck06">Unity</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" type="checkbox" defaultValue id="filtersCheck03" />
                                            <label className="custom-control-label" htmlFor="filtersCheck03">Web</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" type="checkbox" defaultValue id="filtersCheck04" />
                                            <label className="custom-control-label" htmlFor="filtersCheck04">iOS &amp; Swift</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" type="checkbox" defaultValue id="filtersCheck05" />
                                            <label className="custom-control-label" htmlFor="filtersCheck05">Android</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-heading">Subscription</div>
                                <div className="sidebar-block">
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" type="checkbox" defaultValue id="filtersCheck07" defaultChecked />
                                            <label className="custom-control-label" htmlFor="filtersCheck07">All</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" type="checkbox" defaultValue id="filtersCheck08" />
                                            <label className="custom-control-label" htmlFor="filtersCheck08">Free</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" type="checkbox" defaultValue id="filtersCheck09" />
                                            <label className="custom-control-label" htmlFor="filtersCheck09">Beginner</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" type="checkbox" defaultValue id="filtersCheck10" />
                                            <label className="custom-control-label" htmlFor="filtersCheck10">Advanced</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-heading">Content type</div>
                                <div className="sidebar-block">
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" type="checkbox" defaultValue id="filtersCheck11" defaultChecked />
                                            <label className="custom-control-label" htmlFor="filtersCheck11">All</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" type="checkbox" defaultValue id="filtersCheck12" />
                                            <label className="custom-control-label" htmlFor="filtersCheck12">Episode</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" type="checkbox" defaultValue id="filtersCheck13" />
                                            <label className="custom-control-label" htmlFor="filtersCheck13">Video</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" type="checkbox" defaultValue id="filtersCheck14" />
                                            <label className="custom-control-label" htmlFor="filtersCheck14">Article</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" type="checkbox" defaultValue id="filtersCheck15" />
                                            <label className="custom-control-label" htmlFor="filtersCheck15">Book</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" type="checkbox" defaultValue id="filtersCheck16" />
                                            <label className="custom-control-label" htmlFor="filtersCheck16">Screencast</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </>
        );
    }
    return render();
};

export default ListCourse;