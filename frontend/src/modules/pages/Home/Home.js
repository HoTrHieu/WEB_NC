import React from "react";


export default function Home() {
    return (
        <>
            <div className="bg-white border-bottom-2 py-16pt ">
                <div className="container page__container">
                    <div className="row align-items-center">
                        <div className="d-flex col-md align-items-center border-bottom border-md-0 mb-16pt mb-md-0 pb-16pt pb-md-0">
                            <div className="rounded-circle bg-primary w-64 h-64 d-inline-flex align-items-center justify-content-center mr-16pt">
                                <i className="material-icons text-white">subscriptions</i>
                            </div>
                            <div className="flex">
                                <div className="card-title mb-4pt">8,000+ Courses</div>
                                <p className="card-subtitle text-black-70">Explore a wide range of skills.</p>
                            </div>
                        </div>
                        <div className="d-flex col-md align-items-center border-bottom border-md-0 mb-16pt mb-md-0 pb-16pt pb-md-0">
                            <div className="rounded-circle bg-primary w-64 h-64 d-inline-flex align-items-center justify-content-center mr-16pt">
                                <i className="material-icons text-white">verified_user</i>
                            </div>
                            <div className="flex">
                                <div className="card-title mb-4pt">By Industry Experts</div>
                                <p className="card-subtitle text-black-70">Professional development from the best people.</p>
                            </div>
                        </div>
                        <div className="d-flex col-md align-items-center">
                            <div className="rounded-circle bg-primary w-64 h-64 d-inline-flex align-items-center justify-content-center mr-16pt">
                                <i className="material-icons text-white">update</i>
                            </div>
                            <div className="flex">
                                <div className="card-title mb-4pt">Unlimited Access</div>
                                <p className="card-subtitle text-black-70">Unlock Library and learn any topic with one subscription.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-section border-bottom-2">
                <div className="container page__container">
                    <div className="page-separator">
                        <div className="page-separator__text">Hot Courses</div>
                    </div>
                    <div className="row card-group-row">
                        <div className="col-md-6 col-lg-4 card-group-row__col">
                            <div className="card card--elevated posts-card-popular overlay card-group-row__card">
                                <img src="assets/images/paths/sketch_430x168.png" alt="" className="card-img" />
                                <div className="fullbleed bg-primary" style={{ opacity: '.5' }} />
                                <div className="posts-card-popular__content">
                                    <div className="card-body d-flex align-items-center">
                                        <div className="avatar-group flex">
                                            <div className="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="Janell D.">
                                                <a href="!#"><img src="assets/images/256_luke-porter-261779-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" /></a>
                                            </div>
                                        </div>
                                        <a style={{ textDecoration: 'none' }} className="d-flex align-items-center" href="!#"><i className="material-icons mr-1" style={{ fontSize: 'inherit' }}>remove_red_eye</i> <small>327</small></a>
                                    </div>
                                    <div className="posts-card-popular__title card-body">
                                        <small className="text-muted text-uppercase">sketch</small>
                                        <a className="card-title" href="fixed-blog-post.html">Merge Duplicates Inconsistent Symbols</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 card-group-row__col">
                            <div className="card card--elevated posts-card-popular overlay card-group-row__card">
                                <img src="assets/images/paths/invision_430x168.png" alt="" className="card-img" />
                                <div className="fullbleed bg-primary" style={{ opacity: '.5' }} />
                                <div className="posts-card-popular__content">
                                    <div className="card-body d-flex align-items-center">
                                        <div className="avatar-group flex">
                                            <div className="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="Janell D.">
                                                <a href="!#"><img src="assets/images/256_michael-dam-258165-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" /></a>
                                            </div>
                                        </div>
                                        <a style={{ textDecoration: 'none' }} className="d-flex align-items-center" href="!#"><i className="material-icons mr-1" style={{ fontSize: 'inherit' }}>remove_red_eye</i> <small>327</small></a>
                                    </div>
                                    <div className="posts-card-popular__title card-body">
                                        <small className="text-muted text-uppercase">invision</small>
                                        <a className="card-title" href="fixed-blog-post.html">Design Systems Essentials</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 card-group-row__col">
                            <div className="card card--elevated posts-card-popular overlay card-group-row__card">
                                <img src="assets/images/paths/photoshop_430x168.png" alt="" className="card-img" />
                                <div className="fullbleed bg-primary" style={{ opacity: '.5' }} />
                                <div className="posts-card-popular__content">
                                    <div className="card-body d-flex align-items-center">
                                        <div className="avatar-group flex">
                                            <div className="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="Janell D.">
                                                <a href="!#"><img src="assets/images/256_rsz_1andy-lee-642320-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" /></a>
                                            </div>
                                        </div>
                                        <a style={{ textDecoration: 'none' }} className="d-flex align-items-center" href="!#"><i className="material-icons mr-1" style={{ fontSize: 'inherit' }}>remove_red_eye</i> <small>327</small></a>
                                    </div>
                                    <div className="posts-card-popular__title card-body">
                                        <small className="text-muted text-uppercase">photoshop</small>
                                        <a className="card-title" href="fixed-blog-post.html">Semantic Logo Design</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-section border-bottom-2">
                <div className="container page__container">
                    <div className="page-separator">
                        <div className="page-separator__text">The most popular categories of the week</div>
                    </div>
                    <div className="row card-group-row">
                        <div className="col-sm-4 card-group-row__col">
                            <div className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card" data-toggle="popover" data-trigger="click">
                                <div className="card-body d-flex flex-column">
                                    <div className="d-flex align-items-center">
                                        <div className="flex">
                                            <div className="d-flex align-items-center">
                                                <div className="rounded mr-12pt z-0 o-hidden">
                                                    <div className="overlay">
                                                        <img src="assets/images/paths/react_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                                        <span className="overlay__content overlay__content-transparent">
                                                            <span className="overlay__action d-flex flex-column text-center lh-1">
                                                                <small className="h6 small text-white mb-0" style={{ fontWeight: 500 }}>80%</small>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <div className="card-title">React Native</div>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>18 courses</small></p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="fixed-student-path.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
                                    </div>
                                </div>
                            </div>
                            <div className="popoverContainer d-none">
                                <div className="media">
                                    <div className="media-left mr-12pt">
                                        <img src="assets/images/paths/react_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                    </div>
                                    <div className="media-body">
                                        <div className="card-title">React Native</div>
                                        <p className="text-black-50 d-flex lh-1 mb-0 small">18 courses</p>
                                    </div>
                                </div>
                                <p className="mt-16pt text-black-70">Learn the fundamentals of working with React Native and how to create basic applications.</p>
                                <div className="my-32pt">
                                    <div className="d-flex align-items-center mb-8pt justify-content-center">
                                        <div className="d-flex align-items-center mr-8pt">
                                            <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>50 minutes left</small></p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <a href="fixed-student-path.html" className="btn btn-primary mr-8pt">Resume</a>
                                        <a href="fixed-student-path.html" className="btn btn-outline-secondary ml-0">Start over</a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <small className="text-black-50 mr-8pt">Your rating</small>
                                    <div className="rating mr-8pt">
                                        <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                        <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                        <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                        <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                        <span className="rating__item"><span className="material-icons text-primary">star_border</span></span>
                                    </div>
                                    <small className="text-black-50">4/5</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 card-group-row__col">
                            <div className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card" data-toggle="popover" data-trigger="click">
                                <div className="card-body d-flex flex-column">
                                    <div className="d-flex align-items-center">
                                        <div className="flex">
                                            <div className="d-flex align-items-center">
                                                <div className="rounded mr-12pt z-0 o-hidden">
                                                    <div className="overlay">
                                                        <img src="assets/images/paths/devops_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                                        <span className="overlay__content overlay__content-transparent">
                                                            <span className="overlay__action d-flex flex-column text-center lh-1">
                                                                <small className="h6 small text-white mb-0" style={{ fontWeight: 500 }}>80%</small>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <div className="card-title">Dev Ops</div>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>18 courses</small></p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="fixed-student-path.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
                                    </div>
                                </div>
                            </div>
                            <div className="popoverContainer d-none">
                                <div className="media">
                                    <div className="media-left mr-12pt">
                                        <img src="assets/images/paths/devops_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                    </div>
                                    <div className="media-body">
                                        <div className="card-title">Dev Ops</div>
                                        <p className="text-black-50 d-flex lh-1 mb-0 small">18 courses</p>
                                    </div>
                                </div>
                                <p className="mt-16pt text-black-70">Learn the fundamentals of working with Dev Ops and how to create basic applications.</p>
                                <div className="my-32pt">
                                    <div className="d-flex align-items-center mb-8pt justify-content-center">
                                        <div className="d-flex align-items-center mr-8pt">
                                            <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>50 minutes left</small></p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <a href="fixed-student-path.html" className="btn btn-primary mr-8pt">Resume</a>
                                        <a href="fixed-student-path.html" className="btn btn-outline-secondary ml-0">Start over</a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <small className="text-black-50 mr-8pt">Your rating</small>
                                    <div className="rating mr-8pt">
                                        <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                        <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                        <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                        <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                        <span className="rating__item"><span className="material-icons text-primary">star_border</span></span>
                                    </div>
                                    <small className="text-black-50">4/5</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 card-group-row__col">
                            <div className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card" data-toggle="popover" data-trigger="click">
                                <div className="card-body d-flex flex-column">
                                    <div className="d-flex align-items-center">
                                        <div className="flex">
                                            <div className="d-flex align-items-center">
                                                <div className="rounded mr-12pt z-0 o-hidden">
                                                    <div className="overlay">
                                                        <img src="assets/images/paths/redis_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                                        <span className="overlay__content overlay__content-transparent">
                                                            <span className="overlay__action d-flex flex-column text-center lh-1">
                                                                <small className="h6 small text-white mb-0" style={{ fontWeight: 500 }}>80%</small>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <div className="card-title">Redis</div>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>18 courses</small></p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="fixed-student-path.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
                                    </div>
                                </div>
                            </div>
                            <div className="popoverContainer d-none">
                                <div className="media">
                                    <div className="media-left mr-12pt">
                                        <img src="assets/images/paths/redis_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                    </div>
                                    <div className="media-body">
                                        <div className="card-title">Redis</div>
                                        <p className="text-black-50 d-flex lh-1 mb-0 small">18 courses</p>
                                    </div>
                                </div>
                                <p className="mt-16pt text-black-70">Learn the fundamentals of working with Redis and how to create basic applications.</p>
                                <div className="my-32pt">
                                    <div className="d-flex align-items-center mb-8pt justify-content-center">
                                        <div className="d-flex align-items-center mr-8pt">
                                            <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>50 minutes left</small></p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <a href="fixed-student-path.html" className="btn btn-primary mr-8pt">Resume</a>
                                        <a href="fixed-student-path.html" className="btn btn-outline-secondary ml-0">Start over</a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <small className="text-black-50 mr-8pt">Your rating</small>
                                    <div className="rating mr-8pt">
                                        <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                        <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                        <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                        <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                        <span className="rating__item"><span className="material-icons text-primary">star_border</span></span>
                                    </div>
                                    <small className="text-black-50">4/5</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row card-group-row mb-lg-8pt">
                        <div className="col-sm-4 card-group-row__col">
                            <div className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card mb-lg-0" data-toggle="popover" data-trigger="click">
                                <div className="card-body d-flex flex-column">
                                    <div className="d-flex align-items-center">
                                        <div className="flex">
                                            <div className="d-flex align-items-center">
                                                <div className="rounded mr-12pt z-0 o-hidden">
                                                    <div className="overlay">
                                                        <img src="assets/images/paths/mailchimp_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                                        <span className="overlay__content overlay__content-transparent">
                                                            <span className="overlay__action d-flex flex-column text-center lh-1">
                                                                <small className="h6 small text-white mb-0" style={{ fontWeight: 500 }}>80%</small>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <div className="card-title">MailChimp</div>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>18 courses</small></p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="fixed-student-path.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
                                    </div>
                                </div>
                            </div>
                            <div className="popoverContainer d-none">
                                <div className="media">
                                    <div className="media-left mr-12pt">
                                        <img src="assets/images/paths/mailchimp_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                    </div>
                                    <div className="media-body">
                                        <div className="card-title">MailChimp</div>
                                        <p className="text-black-50 d-flex lh-1 mb-0 small">18 courses</p>
                                    </div>
                                </div>
                                <p className="mt-16pt text-black-70">Learn the fundamentals of working with MailChimp and how to create basic applications.</p>
                                <div className="my-32pt">
                                    <div className="d-flex align-items-center mb-8pt justify-content-center">
                                        <div className="d-flex align-items-center mr-8pt">
                                            <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>50 minutes left</small></p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <a href="fixed-student-path.html" className="btn btn-primary mr-8pt">Resume</a>
                                        <a href="fixed-student-path.html" className="btn btn-outline-secondary ml-0">Start over</a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <small className="text-black-50 mr-8pt">Your rating</small>
                                    <div className="rating mr-8pt">
                                        <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                        <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                        <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                        <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                        <span className="rating__item"><span className="material-icons text-primary">star_border</span></span>
                                    </div>
                                    <small className="text-black-50">4/5</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 card-group-row__col">
                            <div className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card mb-lg-0" data-toggle="popover" data-trigger="click">
                                <div className="card-body d-flex flex-column">
                                    <div className="d-flex align-items-center">
                                        <div className="flex">
                                            <div className="d-flex align-items-center">
                                                <div className="rounded mr-12pt z-0 o-hidden">
                                                    <div className="overlay">
                                                        <img src="assets/images/paths/swift_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                                        <span className="overlay__content overlay__content-transparent">
                                                            <span className="overlay__action d-flex flex-column text-center lh-1">
                                                                <small className="h6 small text-white mb-0" style={{ fontWeight: 500 }}>80%</small>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <div className="card-title">Swift</div>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>18 courses</small></p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="fixed-student-path.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
                                    </div>
                                </div>
                            </div>
                            <div className="popoverContainer d-none">
                                <div className="media">
                                    <div className="media-left mr-12pt">
                                        <img src="assets/images/paths/swift_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                    </div>
                                    <div className="media-body">
                                        <div className="card-title">Swift</div>
                                        <p className="text-black-50 d-flex lh-1 mb-0 small">18 courses</p>
                                    </div>
                                </div>
                                <p className="mt-16pt text-black-70">Learn the fundamentals of working with Swift and how to create basic applications.</p>
                                <div className="my-32pt">
                                    <div className="d-flex align-items-center mb-8pt justify-content-center">
                                        <div className="d-flex align-items-center mr-8pt">
                                            <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>50 minutes left</small></p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <a href="fixed-student-path.html" className="btn btn-primary mr-8pt">Resume</a>
                                        <a href="fixed-student-path.html" className="btn btn-outline-secondary ml-0">Start over</a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <small className="text-black-50 mr-8pt">Your rating</small>
                                    <div className="rating mr-8pt">
                                        <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                        <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                        <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                        <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                        <span className="rating__item"><span className="material-icons text-primary">star_border</span></span>
                                    </div>
                                    <small className="text-black-50">4/5</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 card-group-row__col">
                            <div className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card mb-lg-0" data-toggle="popover" data-trigger="click">
                                <div className="card-body d-flex flex-column">
                                    <div className="d-flex align-items-center">
                                        <div className="flex">
                                            <div className="d-flex align-items-center">
                                                <div className="rounded mr-12pt z-0 o-hidden">
                                                    <div className="overlay">
                                                        <img src="assets/images/paths/wordpress_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                                        <span className="overlay__content overlay__content-transparent">
                                                            <span className="overlay__action d-flex flex-column text-center lh-1">
                                                                <small className="h6 small text-white mb-0" style={{ fontWeight: 500 }}>80%</small>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <div className="card-title">WordPress</div>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>18 courses</small></p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="fixed-student-path.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
                                    </div>
                                </div>
                            </div>
                            <div className="popoverContainer d-none">
                                <div className="media">
                                    <div className="media-left mr-12pt">
                                        <img src="assets/images/paths/wordpress_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                    </div>
                                    <div className="media-body">
                                        <div className="card-title">WordPress</div>
                                        <p className="text-black-50 d-flex lh-1 mb-0 small">18 courses</p>
                                    </div>
                                </div>
                                <p className="mt-16pt text-black-70">Learn the fundamentals of working with WordPress and how to create basic applications.</p>
                                <div className="my-32pt">
                                    <div className="d-flex align-items-center mb-8pt justify-content-center">
                                        <div className="d-flex align-items-center mr-8pt">
                                            <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>50 minutes left</small></p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <a href="fixed-student-path.html" className="btn btn-primary mr-8pt">Resume</a>
                                        <a href="fixed-student-path.html" className="btn btn-outline-secondary ml-0">Start over</a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <small className="text-black-50 mr-8pt">Your rating</small>
                                    <div className="rating mr-8pt">
                                        <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                        <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                        <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                        <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                        <span className="rating__item"><span className="material-icons text-primary">star_border</span></span>
                                    </div>
                                    <small className="text-black-50">4/5</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-section border-bottom-2">
                <div className="container page_container">
                    <div className="page-separator">
                        <div className="page-separator__text">Latest Courses</div>
                    </div>

                    <div className="mb-lg-8pt">

                        <div className="position-relative carousel-card">
                            <div className="js-mdk-carousel row d-block" id="carousel-courses1">

                                <a className="carousel-control-next js-mdk-carousel-control mt-n24pt" href="#carousel-courses1"
                                    role="button" data-slide="next">
                                    <span className="carousel-control-icon material-icons" aria-hidden="true">keyboard_arrow_right</span>
                                    <span className="sr-only">Next</span>
                                </a>
                                
                                <div className="mdk-carousel__content">

                                    <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                                        <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-toggle="popover" data-trigger="click">
                                            <a href="fixed-student-course.html" className="card-img-top js-image" data-position data-height={140}>
                                                <img src="assets/images/paths/sketch_430x168.png" alt="course" />
                                            </a>
                                            <div className="card-body flex">
                                                <div className="d-flex">
                                                    <div className="flex">
                                                        <a className="card-title" href="fixed-student-course.html">Name Course</a>
                                                        <p className="text-50 font-weight-bold mb-4pt mt-1">Teacher</p>
                                                        <p className="text-50 font-weight-bold mb-4pt">Category</p>
                                                    </div>
                                                    <a href="fixed-student-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="rating flex">
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                                                    </div>
                                                    {/* <small className="text-50">6 hours</small> */}
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <div className="row justify-content-between">
                                                    <div className="col-auto d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                        <p className="flex text-black-50 lh-1 mb-0"><small>96 hours</small></p>
                                                    </div>
                                                    <div className="col-auto d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-black-50 mr-4pt">attach_money</span>
                                                        <p className="flex text-black-50 lh-1 mb-0"><small>12.00</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                            
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                                        <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-toggle="popover" data-trigger="click">
                                            <a href="fixed-student-course.html" className="card-img-top js-image" data-position data-height={140}>
                                                <img src="assets/images/paths/sketch_430x168.png" alt="course" />
                                            </a>
                                            <div className="card-body flex">
                                                <div className="d-flex">
                                                    <div className="flex">
                                                        <a className="card-title" href="fixed-student-course.html">Name Course</a>
                                                        <p className="text-50 font-weight-bold mb-4pt mt-1">Teacher</p>
                                                        <p className="text-50 font-weight-bold mb-4pt">Category</p>
                                                    </div>
                                                    <a href="fixed-student-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="rating flex">
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                                                    </div>
                                                    {/* <small className="text-50">6 hours</small> */}
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <div className="row justify-content-between">
                                                    <div className="col-auto d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                        <p className="flex text-black-50 lh-1 mb-0"><small>96 hours</small></p>
                                                    </div>
                                                    <div className="col-auto d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-black-50 mr-4pt">attach_money</span>
                                                        <p className="flex text-black-50 lh-1 mb-0"><small>12.00</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                            
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                                        <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-toggle="popover" data-trigger="click">
                                            <a href="fixed-student-course.html" className="card-img-top js-image" data-position data-height={140}>
                                                <img src="assets/images/paths/sketch_430x168.png" alt="course" />
                                            </a>
                                            <div className="card-body flex">
                                                <div className="d-flex">
                                                    <div className="flex">
                                                        <a className="card-title" href="fixed-student-course.html">Name Course</a>
                                                        <p className="text-50 font-weight-bold mb-4pt mt-1">Teacher</p>
                                                        <p className="text-50 font-weight-bold mb-4pt">Category</p>
                                                    </div>
                                                    <a href="fixed-student-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="rating flex">
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                                                    </div>
                                                    {/* <small className="text-50">6 hours</small> */}
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <div className="row justify-content-between">
                                                    <div className="col-auto d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                        <p className="flex text-black-50 lh-1 mb-0"><small>96 hours</small></p>
                                                    </div>
                                                    <div className="col-auto d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-black-50 mr-4pt">attach_money</span>
                                                        <p className="flex text-black-50 lh-1 mb-0"><small>12.00</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                            
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                                        <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-toggle="popover" data-trigger="click">
                                            <a href="fixed-student-course.html" className="card-img-top js-image" data-position data-height={140}>
                                                <img src="assets/images/paths/sketch_430x168.png" alt="course" />
                                            </a>
                                            <div className="card-body flex">
                                                <div className="d-flex">
                                                    <div className="flex">
                                                        <a className="card-title" href="fixed-student-course.html">Name Course</a>
                                                        <p className="text-50 font-weight-bold mb-4pt mt-1">Teacher</p>
                                                        <p className="text-50 font-weight-bold mb-4pt">Category</p>
                                                    </div>
                                                    <a href="fixed-student-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="rating flex">
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                                                    </div>
                                                    {/* <small className="text-50">6 hours</small> */}
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <div className="row justify-content-between">
                                                    <div className="col-auto d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                        <p className="flex text-black-50 lh-1 mb-0"><small>96 hours</small></p>
                                                    </div>
                                                    <div className="col-auto d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-black-50 mr-4pt">attach_money</span>
                                                        <p className="flex text-black-50 lh-1 mb-0"><small>12.00</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                            
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                                        <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-toggle="popover" data-trigger="click">
                                            <a href="fixed-student-course.html" className="card-img-top js-image" data-position data-height={140}>
                                                <img src="assets/images/paths/sketch_430x168.png" alt="course" />
                                            </a>
                                            <div className="card-body flex">
                                                <div className="d-flex">
                                                    <div className="flex">
                                                        <a className="card-title" href="fixed-student-course.html">Name Course</a>
                                                        <p className="text-50 font-weight-bold mb-4pt mt-1">Teacher</p>
                                                        <p className="text-50 font-weight-bold mb-4pt">Category</p>
                                                    </div>
                                                    <a href="fixed-student-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="rating flex">
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                                                    </div>
                                                    {/* <small className="text-50">6 hours</small> */}
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <div className="row justify-content-between">
                                                    <div className="col-auto d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                        <p className="flex text-black-50 lh-1 mb-0"><small>96 hours</small></p>
                                                    </div>
                                                    <div className="col-auto d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-black-50 mr-4pt">attach_money</span>
                                                        <p className="flex text-black-50 lh-1 mb-0"><small>12.00</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                            
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className="page-section border-bottom-2">
                <div className="container page_container">
                    <div className="page-separator">
                        <div className="page-separator__text">POPULAR COURSES</div>
                    </div>

                    <div className="mb-lg-8pt">

                        <div className="position-relative carousel-card">
                            <div className="js-mdk-carousel row d-block" id="carousel-courses2">

                                <a className="carousel-control-next js-mdk-carousel-control mt-n24pt" href="#carousel-courses2"
                                    role="button" data-slide="next">
                                    <span className="carousel-control-icon material-icons" aria-hidden="true">keyboard_arrow_right</span>
                                    <span className="sr-only">Next</span>
                                </a>
                                
                                <div className="mdk-carousel__content">

                                    <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                                        <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-toggle="popover" data-trigger="click">
                                            <a href="fixed-student-course.html" className="card-img-top js-image" data-position data-height={140}>
                                                <img src="assets/images/paths/sketch_430x168.png" alt="course" />
                                            </a>
                                            <div className="card-body flex">
                                                <div className="d-flex">
                                                    <div className="flex">
                                                        <a className="card-title" href="fixed-student-course.html">Name Course</a>
                                                        <p className="text-50 font-weight-bold mb-4pt mt-1">Teacher</p>
                                                        <p className="text-50 font-weight-bold mb-4pt">Category</p>
                                                    </div>
                                                    <a href="fixed-student-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="rating flex">
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                                                    </div>
                                                    {/* <small className="text-50">6 hours</small> */}
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <div className="row justify-content-between">
                                                    <div className="col-auto d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                        <p className="flex text-black-50 lh-1 mb-0"><small>96 hours</small></p>
                                                    </div>
                                                    <div className="col-auto d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-black-50 mr-4pt">attach_money</span>
                                                        <p className="flex text-black-50 lh-1 mb-0"><small>12.00</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                            
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                                        <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-toggle="popover" data-trigger="click">
                                            <a href="fixed-student-course.html" className="card-img-top js-image" data-position data-height={140}>
                                                <img src="assets/images/paths/sketch_430x168.png" alt="course" />
                                            </a>
                                            <div className="card-body flex">
                                                <div className="d-flex">
                                                    <div className="flex">
                                                        <a className="card-title" href="fixed-student-course.html">Name Course</a>
                                                        <p className="text-50 font-weight-bold mb-4pt mt-1">Teacher</p>
                                                        <p className="text-50 font-weight-bold mb-4pt">Category</p>
                                                    </div>
                                                    <a href="fixed-student-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="rating flex">
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                                                    </div>
                                                    {/* <small className="text-50">6 hours</small> */}
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <div className="row justify-content-between">
                                                    <div className="col-auto d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                        <p className="flex text-black-50 lh-1 mb-0"><small>96 hours</small></p>
                                                    </div>
                                                    <div className="col-auto d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-black-50 mr-4pt">attach_money</span>
                                                        <p className="flex text-black-50 lh-1 mb-0"><small>12.00</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                            
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                                        <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-toggle="popover" data-trigger="click">
                                            <a href="fixed-student-course.html" className="card-img-top js-image" data-position data-height={140}>
                                                <img src="assets/images/paths/sketch_430x168.png" alt="course" />
                                            </a>
                                            <div className="card-body flex">
                                                <div className="d-flex">
                                                    <div className="flex">
                                                        <a className="card-title" href="fixed-student-course.html">Name Course</a>
                                                        <p className="text-50 font-weight-bold mb-4pt mt-1">Teacher</p>
                                                        <p className="text-50 font-weight-bold mb-4pt">Category</p>
                                                    </div>
                                                    <a href="fixed-student-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="rating flex">
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                                                    </div>
                                                    {/* <small className="text-50">6 hours</small> */}
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <div className="row justify-content-between">
                                                    <div className="col-auto d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                        <p className="flex text-black-50 lh-1 mb-0"><small>96 hours</small></p>
                                                    </div>
                                                    <div className="col-auto d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-black-50 mr-4pt">attach_money</span>
                                                        <p className="flex text-black-50 lh-1 mb-0"><small>12.00</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                            
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                                        <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-toggle="popover" data-trigger="click">
                                            <a href="fixed-student-course.html" className="card-img-top js-image" data-position data-height={140}>
                                                <img src="assets/images/paths/sketch_430x168.png" alt="course" />
                                            </a>
                                            <div className="card-body flex">
                                                <div className="d-flex">
                                                    <div className="flex">
                                                        <a className="card-title" href="fixed-student-course.html">Name Course</a>
                                                        <p className="text-50 font-weight-bold mb-4pt mt-1">Teacher</p>
                                                        <p className="text-50 font-weight-bold mb-4pt">Category</p>
                                                    </div>
                                                    <a href="fixed-student-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="rating flex">
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                                                    </div>
                                                    {/* <small className="text-50">6 hours</small> */}
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <div className="row justify-content-between">
                                                    <div className="col-auto d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                        <p className="flex text-black-50 lh-1 mb-0"><small>96 hours</small></p>
                                                    </div>
                                                    <div className="col-auto d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-black-50 mr-4pt">attach_money</span>
                                                        <p className="flex text-black-50 lh-1 mb-0"><small>12.00</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                            
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                                        <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-toggle="popover" data-trigger="click">
                                            <a href="fixed-student-course.html" className="card-img-top js-image" data-position data-height={140}>
                                                <img src="assets/images/paths/sketch_430x168.png" alt="course" />
                                            </a>
                                            <div className="card-body flex">
                                                <div className="d-flex">
                                                    <div className="flex">
                                                        <a className="card-title" href="fixed-student-course.html">Name Course</a>
                                                        <p className="text-50 font-weight-bold mb-4pt mt-1">Teacher</p>
                                                        <p className="text-50 font-weight-bold mb-4pt">Category</p>
                                                    </div>
                                                    <a href="fixed-student-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="rating flex">
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                                                    </div>
                                                    {/* <small className="text-50">6 hours</small> */}
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <div className="row justify-content-between">
                                                    <div className="col-auto d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                        <p className="flex text-black-50 lh-1 mb-0"><small>96 hours</small></p>
                                                    </div>
                                                    <div className="col-auto d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-black-50 mr-4pt">attach_money</span>
                                                        <p className="flex text-black-50 lh-1 mb-0"><small>12.00</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                            
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>




        </>
    );
}