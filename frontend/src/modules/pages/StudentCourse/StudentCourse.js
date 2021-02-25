import React from 'react';

const StudentCourse = () => {
    return (
      <div className="mdk-drawer-layout js-mdk-drawer-layout" data-push data-responsive-width="992px">
        <div className="mdk-drawer-layout__content page-content">
          <div className="pt-32pt">
            <div className="container page__container d-flex flex-column flex-md-row align-items-center text-center text-sm-left">
              <div className="flex d-flex flex-column flex-sm-row align-items-center mb-24pt mb-md-0">
                <div className="mb-24pt mb-sm-0 mr-sm-24pt">
                  <h2 className="mb-0">Courses</h2>
                  <ol className="breadcrumb p-0 m-0">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active">
                      Courses
                    </li>
                  </ol>
                </div>
              </div>
              <div className="row" role="tablist">
                <div className="col-auto">
                  <a href="student-paths.html" className="btn btn-outline-secondary">Learning Paths</a>
                </div>
              </div>
            </div>
          </div>
          <div className="page-section border-bottom-2">
            <div className="container page__container">
              <div className="card">
                <img src="assets/images/paths/typescript_892x286.png" alt="TypeScript" className="card-img" style={{maxHeight: '100%', width: 'initial'}} />
                <div className="fullbleed bg-primary" style={{opacity: '.5'}} />
                <img src="assets/images/paths/typescript_64x64.svg" width={64} alt="Instruduction to TypeScript" className="rounded position-absolute" style={{right: '1rem', top: '1rem'}} />
                <div className="card-body d-flex align-items-center justify-content-center fullbleed">
                  <div>
                    <h2 className="text-white mb-16pt">Introduction to TypeScript</h2>
                    <div className="d-flex align-items-center mb-16pt justify-content-center">
                      <div className="d-flex align-items-center mr-16pt">
                        <span className="material-icons icon-16pt text-white-50 mr-4pt">access_time</span>
                        <p className="flex text-white-50 lh-1 mb-0">50 minutes left</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="material-icons icon-16pt text-white-50 mr-4pt">play_circle_outline</span>
                        <p className="flex text-white-50 lh-1 mb-0">12 lessons</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                      <a href="student-take-lesson.html" className="btn btn-white mr-8pt">Resume</a>
                      <a href="student-take-course.html" className="btn btn-outline-white ml-0">Start over</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-wrap align-items-start">
                <div className="d-flex align-items-center mr-24pt">
                  <a href="student-take-course.html" className="mr-12pt">
                    <img src="assets/images/paths/angular_64x64.svg" width={40} alt="Angular" className="rounded" />
                  </a>
                  <div className="flex">
                    <a className="card-title" href="student-take-course.html">Angular Fundamentals</a>
                    <p className="lh-1 mb-0">
                      <span className="text-50 small">with</span>
                      <span className="text-50 small">Elijah Murray</span>
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center py-4pt" style={{whiteSpace: 'nowrap'}}>
                  <small className="text-50 mr-8pt">Your rating</small>
                  <div className="rating mr-8pt">
                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                    <span className="rating__item"><span className="material-icons text-primary">star_border</span></span>
                  </div>
                  <small className="text-50">4/5</small>
                </div>
              </div>
            </div>
          </div>
          <div className="container page__container">
            <div className="page-section">
              <div className="page-separator">
                <div className="page-separator__text">Learning Paths</div>
              </div>
            
              <div className="row card-group-row mb-lg-8pt">
                <div className="col-sm-4 card-group-row__col">
                  <div className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card" data-toggle="popover" data-trigger="click">
                    <div className="card-body d-flex flex-column">
                      <div className="d-flex align-items-center">
                        <div className="flex">
                          <div className="d-flex align-items-center">
                            <div className="rounded mr-12pt z-0 o-hidden">
                              <div className="overlay">
                                <img src="assets/images/paths/angular_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                <span className="overlay__content overlay__content-transparent">
                                  <span className="overlay__action d-flex flex-column text-center lh-1">
                                    <small className="h6 small text-white mb-0" style={{fontWeight: 500}}>80%</small>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="flex">
                              <div className="card-title">Angular</div>
                              <p className="flex text-black-50 lh-1 mb-0"><small>18 courses</small></p>
                            </div>
                          </div>
                        </div>
                        <a href="undefinedstudent-path.html" className="ml-4pt btn btn-sm btn-link text-secondary border-1 border-secondary">Resume</a>
                      </div>
                    </div>
                  </div>
                  <div className="popoverContainer d-none">
                    <div className="media">
                      <div className="media-left mr-12pt">
                        <img src="assets/images/paths/angular_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                      </div>
                      <div className="media-body">
                        <div className="card-title">Angular</div>
                        <p className="text-black-50 d-flex lh-1 mb-0 small">18 courses</p>
                      </div>
                    </div>
                    <p className="mt-16pt text-black-70">Angular is a platform for building mobile and desktop web applications.</p>
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
                        <a href="undefinedstudent-path.html" className="btn btn-primary mr-8pt">Resume</a>
                        <a href="undefinedstudent-path.html" className="btn btn-outline-secondary ml-0">Start over</a>
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
                                <img src="assets/images/paths/swift_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                <span className="overlay__content overlay__content-transparent">
                                  <span className="overlay__action d-flex flex-column text-center lh-1">
                                    <small className="h6 small text-white mb-0" style={{fontWeight: 500}}>80%</small>
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
                        <a href="undefinedstudent-path.html" className="ml-4pt btn btn-sm btn-link text-secondary">Resume</a>
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
                    <p className="mt-16pt text-black-70">Swift is a powerful and intuitive programming language for macOS, iOS, watchOS, tvOS and beyond.</p>
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
                        <a href="undefinedstudent-path.html" className="btn btn-primary mr-8pt">Resume</a>
                        <a href="undefinedstudent-path.html" className="btn btn-outline-secondary ml-0">Start over</a>
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
                                <img src="assets/images/paths/react_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                <span className="overlay__content overlay__content-transparent">
                                  <span className="overlay__action d-flex flex-column text-center lh-1">
                                    <small className="h6 small text-white mb-0" style={{fontWeight: 500}}>80%</small>
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
                        <a href="undefinedstudent-path.html" className="ml-4pt btn btn-sm btn-link text-secondary">Resume</a>
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
                        <a href="undefinedstudent-path.html" className="btn btn-primary mr-8pt">Resume</a>
                        <a href="undefinedstudent-path.html" className="btn btn-outline-secondary ml-0">Start over</a>
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
                                <img src="assets/images/paths/wordpress_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                <span className="overlay__content overlay__content-transparent">
                                  <span className="overlay__action d-flex flex-column text-center lh-1">
                                    <small className="h6 small text-white mb-0" style={{fontWeight: 500}}>80%</small>
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
                        <a href="undefinedstudent-path.html" className="ml-4pt btn btn-sm btn-link text-secondary">Resume</a>
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
                    <p className="mt-16pt text-black-70">WordPress is open source software you can use to create a beautiful website, blog, or app.</p>
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
                        <a href="undefinedstudent-path.html" className="btn btn-primary mr-8pt">Resume</a>
                        <a href="undefinedstudent-path.html" className="btn btn-outline-secondary ml-0">Start over</a>
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
                                    <small className="h6 small text-white mb-0" style={{fontWeight: 500}}>80%</small>
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
                        <a href="undefinedstudent-path.html" className="ml-4pt btn btn-sm btn-link text-secondary">Resume</a>
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
                        <a href="undefinedstudent-path.html" className="btn btn-primary mr-8pt">Resume</a>
                        <a href="undefinedstudent-path.html" className="btn btn-outline-secondary ml-0">Start over</a>
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
                                    <small className="h6 small text-white mb-0" style={{fontWeight: 500}}>80%</small>
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
                        <a href="undefinedstudent-path.html" className="ml-4pt btn btn-sm btn-link text-secondary">Resume</a>
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
                        <a href="undefinedstudent-path.html" className="btn btn-primary mr-8pt">Resume</a>
                        <a href="undefinedstudent-path.html" className="btn btn-outline-secondary ml-0">Start over</a>
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
                <div className="col-lg-3 card-group-row__col">
                  <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-toggle="popover" data-trigger="click">
                    <a href="student-take-course.html" className="card-img-top js-image" data-position data-height={140}>
                      <img src="assets/images/paths/angular_430x168.png" alt="course" />
                      <span className="overlay__content">
                        <span className="overlay__action d-flex flex-column text-center">
                          <i className="material-icons icon-32pt">play_circle_outline</i>
                          <span className="card-title text-white">Resume</span>
                        </span>
                      </span>
                    </a>
                    <span className="corner-ribbon corner-ribbon--default-right-top corner-ribbon--shadow bg-accent text-white">NEW</span>
                    <div className="card-body flex">
                      <div className="d-flex">
                        <div className="flex">
                          <a className="card-title" href="student-take-course.html">Learn Angular fundamentals</a>
                          <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                        </div>
                        <a href="student-take-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
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
                        <a href="student-take-lesson.html" className="btn btn-primary mr-8pt">Resume</a>
                        <a href="student-take-course.html" className="btn btn-outline-secondary ml-0">Start over</a>
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
                <div className="col-lg-3 card-group-row__col">
                  <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-toggle="popover" data-trigger="click">
                    <a href="student-take-course.html" className="card-img-top js-image" data-position data-height={140}>
                      <img src="assets/images/paths/swift_430x168.png" alt="course" />
                      <span className="overlay__content">
                        <span className="overlay__action d-flex flex-column text-center">
                          <i className="material-icons icon-32pt">play_circle_outline</i>
                          <span className="card-title text-white">Resume</span>
                        </span>
                      </span>
                    </a>
                    <div className="card-body flex">
                      <div className="d-flex">
                        <div className="flex">
                          <a className="card-title" href="student-take-course.html">Build an iOS Application in Swift</a>
                          <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                        </div>
                        <a href="student-take-course.html" data-toggle="tooltip" data-title="Remove Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite</a>
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
                        <a href="student-take-lesson.html" className="btn btn-primary mr-8pt">Resume</a>
                        <a href="student-take-course.html" className="btn btn-outline-secondary ml-0">Start over</a>
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
                <div className="col-lg-3 card-group-row__col">
                  <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-toggle="popover" data-trigger="click">
                    <a href="student-take-course.html" className="card-img-top js-image" data-position data-height={140}>
                      <img src="assets/images/paths/wordpress_430x168.png" alt="course" />
                      <span className="overlay__content">
                        <span className="overlay__action d-flex flex-column text-center">
                          <i className="material-icons icon-32pt">play_circle_outline</i>
                          <span className="card-title text-white">Resume</span>
                        </span>
                      </span>
                    </a>
                    <div className="card-body flex">
                      <div className="d-flex">
                        <div className="flex">
                          <a className="card-title" href="student-take-course.html">Build a WordPress Website</a>
                          <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                        </div>
                        <a href="student-take-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
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
                        <a href="student-take-lesson.html" className="btn btn-primary mr-8pt">Resume</a>
                        <a href="student-take-course.html" className="btn btn-outline-secondary ml-0">Start over</a>
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
                <div className="col-lg-3 card-group-row__col">
                  <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-toggle="popover" data-trigger="click">
                    <a href="student-take-course.html" className="card-img-top js-image" data-position="left" data-height={140}>
                      <img src="assets/images/paths/react_430x168.png" alt="course" />
                      <span className="overlay__content">
                        <span className="overlay__action d-flex flex-column text-center">
                          <i className="material-icons icon-32pt">play_circle_outline</i>
                          <span className="card-title text-white">Resume</span>
                        </span>
                      </span>
                    </a>
                    <div className="card-body flex">
                      <div className="d-flex">
                        <div className="flex">
                          <a className="card-title" href="student-take-course.html">Become a React Native Developer</a>
                          <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                        </div>
                        <a href="student-take-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
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
                        <a href="student-take-lesson.html" className="btn btn-primary mr-8pt">Resume</a>
                        <a href="student-take-course.html" className="btn btn-outline-secondary ml-0">Start over</a>
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
                <div className="col-lg-3 card-group-row__col">
                  <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-overlay-onload-show data-popover-onload-show data-toggle="popover" data-trigger="click">
                    <a href="student-take-course.html" className="card-img-top js-image" data-position data-height={140}>
                      <img src="assets/images/paths/sketch_430x168.png" alt="course" />
                      <span className="overlay__content">
                        <span className="overlay__action d-flex flex-column text-center">
                          <i className="material-icons icon-32pt">play_circle_outline</i>
                          <span className="card-title text-white">Resume</span>
                        </span>
                      </span>
                    </a>
                    <div className="card-body flex">
                      <div className="d-flex">
                        <div className="flex">
                          <a className="card-title" href="student-take-course.html">Learn Sketch</a>
                          <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                        </div>
                        <a href="student-take-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
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
                        <a href="student-take-lesson.html" className="btn btn-primary mr-8pt">Resume</a>
                        <a href="student-take-course.html" className="btn btn-outline-secondary ml-0">Start over</a>
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
                <div className="col-lg-3 card-group-row__col">
                  <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-toggle="popover" data-trigger="click">
                    <a href="student-take-course.html" className="card-img-top js-image" data-position data-height={140}>
                      <img src="assets/images/paths/flinto_430x168.png" alt="course" />
                      <span className="overlay__content">
                        <span className="overlay__action d-flex flex-column text-center">
                          <i className="material-icons icon-32pt">play_circle_outline</i>
                          <span className="card-title text-white">Resume</span>
                        </span>
                      </span>
                    </a>
                    <div className="card-body flex">
                      <div className="d-flex">
                        <div className="flex">
                          <a className="card-title" href="student-take-course.html">Learn Flinto</a>
                          <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                        </div>
                        <a href="student-take-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
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
                        <a href="student-take-lesson.html" className="btn btn-primary mr-8pt">Resume</a>
                        <a href="student-take-course.html" className="btn btn-outline-secondary ml-0">Start over</a>
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
                <div className="col-lg-3 card-group-row__col">
                  <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-toggle="popover" data-trigger="click">
                    <a href="student-take-course.html" className="card-img-top js-image" data-position data-height={140}>
                      <img src="assets/images/paths/photoshop_430x168.png" alt="course" />
                      <span className="overlay__content">
                        <span className="overlay__action d-flex flex-column text-center">
                          <i className="material-icons icon-32pt">play_circle_outline</i>
                          <span className="card-title text-white">Resume</span>
                        </span>
                      </span>
                    </a>
                    <div className="card-body flex">
                      <div className="d-flex">
                        <div className="flex">
                          <a className="card-title" href="student-take-course.html">Learn Photoshop</a>
                          <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                        </div>
                        <a href="student-take-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
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
                        <a href="student-take-lesson.html" className="btn btn-primary mr-8pt">Resume</a>
                        <a href="student-take-course.html" className="btn btn-outline-secondary ml-0">Start over</a>
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
                <div className="col-lg-3 card-group-row__col">
                  <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-toggle="popover" data-trigger="click">
                    <a href="student-take-course.html" className="card-img-top js-image" data-position data-height={140}>
                      <img src="assets/images/paths/mailchimp_430x168.png" alt="course" />
                      <span className="overlay__content">
                        <span className="overlay__action d-flex flex-column text-center">
                          <i className="material-icons icon-32pt">play_circle_outline</i>
                          <span className="card-title text-white">Resume</span>
                        </span>
                      </span>
                    </a>
                    <div className="card-body flex">
                      <div className="d-flex">
                        <div className="flex">
                          <a className="card-title" href="student-take-course.html">Newsletter Design</a>
                          <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                        </div>
                        <a href="student-take-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
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
                        <a href="student-take-lesson.html" className="btn btn-primary mr-8pt">Resume</a>
                        <a href="student-take-course.html" className="btn btn-outline-secondary ml-0">Start over</a>
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
                <div className="page-separator__text">Lessons</div>
              </div>
              <div className="mb-lg-8pt">
                <div className="position-relative carousel-card">
                  <div className="js-mdk-carousel row d-block" id="carousel-courses1">
                    <a className="carousel-control-next js-mdk-carousel-control mt-n24pt" href="#carousel-courses1" role="button" data-slide="next">
                      <span className="carousel-control-icon material-icons" aria-hidden="true">keyboard_arrow_right</span>
                      <span className="sr-only">Next</span>
                    </a>
                    <div className="mdk-carousel__content">
                      <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                        <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay mdk-reveal js-mdk-reveal " data-partial-height={44} data-toggle="popover" data-trigger="click">
                          <a href="student-take-course.html" className="js-image" data-position="left">
                            <img src="assets/images/paths/angular_testing_430x168.png" alt="course" />
                            <span className="overlay__content align-items-start justify-content-start">
                              <span className="overlay__action card-body d-flex align-items-center">
                                <i className="material-icons mr-4pt">play_circle_outline</i>
                                <span className="card-title text-white">Resume</span>
                              </span>
                            </span>
                          </a>
                          <div className="mdk-reveal__content">
                            <div className="card-body">
                              <div className="d-flex">
                                <div className="flex">
                                  <a className="card-title" href="student-take-course.html">Angular Unit Testing</a>
                                  <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                </div>
                                <a href="student-take-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
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
                              <img src="assets/images/paths/angular_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                            </div>
                            <div className="media-body">
                              <div className="card-title mb-0">Angular Unit Testing</div>
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
                              <a href="student-take-lesson.html" className="btn btn-primary mr-8pt">Resume</a>
                              <a href="student-take-course.html" className="btn btn-outline-secondary ml-0">Start over</a>
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
                      <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                        <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay mdk-reveal js-mdk-reveal " data-partial-height={44} data-toggle="popover" data-trigger="click">
                          <a href="student-take-course.html" className="js-image" data-position="left">
                            <img src="assets/images/paths/angular_routing_430x168.png" alt="course" />
                            <span className="overlay__content align-items-start justify-content-start">
                              <span className="overlay__action card-body d-flex align-items-center">
                                <i className="material-icons mr-4pt">play_circle_outline</i>
                                <span className="card-title text-white">Resume</span>
                              </span>
                            </span>
                          </a>
                          <div className="mdk-reveal__content">
                            <div className="card-body">
                              <div className="d-flex">
                                <div className="flex">
                                  <a className="card-title" href="student-take-course.html">Angular Routing In-Depth</a>
                                  <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                </div>
                                <a href="student-take-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
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
                              <img src="assets/images/paths/angular_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                            </div>
                            <div className="media-body">
                              <div className="card-title mb-0">Angular Routing In-Depth</div>
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
                              <a href="student-take-lesson.html" className="btn btn-primary mr-8pt">Resume</a>
                              <a href="student-take-course.html" className="btn btn-outline-secondary ml-0">Start over</a>
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
                      <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                        <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay mdk-reveal js-mdk-reveal " data-partial-height={44} data-toggle="popover" data-trigger="click">
                          <a href="student-take-course.html" className="js-image" data-position="left">
                            <img src="assets/images/paths/angular_services_430x168.png" alt="course" />
                            <span className="overlay__content align-items-start justify-content-start">
                              <span className="overlay__action card-body d-flex align-items-center">
                                <i className="material-icons mr-4pt">play_circle_outline</i>
                                <span className="card-title text-white">Resume</span>
                              </span>
                            </span>
                          </a>
                          <div className="mdk-reveal__content">
                            <div className="card-body">
                              <div className="d-flex">
                                <div className="flex">
                                  <a className="card-title" href="student-take-course.html">Angular Services</a>
                                  <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                </div>
                                <a href="student-take-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
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
                              <img src="assets/images/paths/angular_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                            </div>
                            <div className="media-body">
                              <div className="card-title mb-0">Angular Services</div>
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
                              <a href="student-take-lesson.html" className="btn btn-primary mr-8pt">Resume</a>
                              <a href="student-take-course.html" className="btn btn-outline-secondary ml-0">Start over</a>
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
                      <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                        <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay mdk-reveal js-mdk-reveal " data-partial-height={44} data-toggle="popover" data-trigger="click">
                          <a href="student-take-course.html" className="js-image" data-position>
                            <img src="assets/images/paths/angular_patterns_430x168.png" alt="course" />
                            <span className="overlay__content align-items-start justify-content-start">
                              <span className="overlay__action card-body d-flex align-items-center">
                                <i className="material-icons mr-4pt">play_circle_outline</i>
                                <span className="card-title text-white">Resume</span>
                              </span>
                            </span>
                          </a>
                          <div className="mdk-reveal__content">
                            <div className="card-body">
                              <div className="d-flex">
                                <div className="flex">
                                  <a className="card-title" href="student-take-course.html">Angular Patterns</a>
                                  <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                </div>
                                <a href="student-take-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
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
                              <img src="assets/images/paths/angular_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                            </div>
                            <div className="media-body">
                              <div className="card-title mb-0">Angular Patterns</div>
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
                              <a href="student-take-lesson.html" className="btn btn-primary mr-8pt">Resume</a>
                              <a href="student-take-course.html" className="btn btn-outline-secondary ml-0">Start over</a>
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
              </div>
              <div className="page-separator">
                <div className="page-separator__text">Achievements</div>
              </div>
              
              <div className="position-relative carousel-card">
                <div className="js-mdk-carousel row d-block" id="carousel-achievements">
                  <a className="carousel-control-next js-mdk-carousel-control" href="#carousel-achievements" role="button" data-slide="next">
                    <span className="carousel-control-icon material-icons" aria-hidden="true">keyboard_arrow_right</span>
                    <span className="sr-only">Next</span>
                  </a>
                  <div className="mdk-carousel__content">
                    <div className="col-12 col-sm-6">
                      <a className="card border-0 mb-0" href="!#">
                        <img src="assets/images/achievements/flinto.png" alt="Flinto" className="card-img" style={{maxHeight: '100%', width: 'initial'}} />
                        <div className="fullbleed bg-primary" style={{opacity: '.5'}} />
                        <span className="card-body d-flex flex-column align-items-center justify-content-center fullbleed">
                          <span className="row flex-nowrap">
                            <span className="col-auto text-center d-flex flex-column justify-content-center align-items-center">
                              <span className="h5 text-white text-uppercase font-weight-normal m-0 d-block">Achievement</span>
                              <span className="text-white-60 d-block mb-24pt">Jun 5, 2018</span>
                            </span>
                            <span className="col d-flex flex-column">
                              <span className="text-right flex mb-16pt">
                                <img src="assets/images/paths/flinto_40x40@2x.png" width={64} alt="Flinto" className="rounded" />
                              </span>
                            </span>
                          </span>
                          <span className="row flex-nowrap">
                            <span className="col-auto text-center d-flex flex-column justify-content-center align-items-center">
                              <img src="assets/images/illustration/achievement/128/white.png" width={64} alt="achievement" />
                            </span>
                            <span className="col d-flex flex-column">
                              <span>
                                <span className="card-title text-white mb-4pt d-block">Flinto</span>
                                <span className="text-white-60">Introduction to The App Design Application</span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="col-12 col-sm-6">
                      <a className="card border-0 mb-0" href="!#">
                        <img src="assets/images/achievements/angular.png" alt="Angular fundamentals" className="card-img" style={{maxHeight: '100%', width: 'initial'}} />
                        <div className="fullbleed bg-primary" style={{opacity: '.5'}} />
                        <span className="card-body d-flex flex-column align-items-center justify-content-center fullbleed">
                          <span className="row flex-nowrap">
                            <span className="col-auto text-center d-flex flex-column justify-content-center align-items-center">
                              <span className="h5 text-white text-uppercase font-weight-normal m-0 d-block">Achievement</span>
                              <span className="text-white-60 d-block mb-24pt">Jun 5, 2018</span>
                            </span>
                            <span className="col d-flex flex-column">
                              <span className="text-right flex mb-16pt">
                                <img src="assets/images/paths/angular_64x64.png" width={64} alt="Angular fundamentals" className="rounded" />
                              </span>
                            </span>
                          </span>
                          <span className="row flex-nowrap">
                            <span className="col-auto text-center d-flex flex-column justify-content-center align-items-center">
                              <img src="assets/images/illustration/achievement/128/white.png" width={64} alt="achievement" />
                            </span>
                            <span className="col d-flex flex-column">
                              <span>
                                <span className="card-title text-white mb-4pt d-block">Angular fundamentals</span>
                                <span className="text-white-60">Creating and Communicating Between Angular Components</span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
      
    );
};

export default StudentCourse;