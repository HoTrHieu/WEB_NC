import React, { useState } from 'react';

const ListCourse = () => {
    const [showNav, setShowNav] = useState(false);
    const handleOut = () => {
        showNav && setShowNav(false);
    }
    // component cart-item
    const cart_item = () => {
        return (
            <>
                <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                    <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-toggle="popover" data-trigger="click">
                        <a href="fixed-student-course.html" className="js-image" data-position="">
                            <img src="assets/images/paths/photoshop_430x168.png" alt="course" />
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
                                    <span className="rating__item"><p className="flex text-black-50 lh-1 mb-0"><small>(123<small className="material-icons">speaker_notes</small>)</small></p></span>
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
            </>
        );
    }

    // hien thi items theo vong lap , hieen thi 14 cart-items.
    const for_showitems = () => {
        return (
            <>
                {Array.apply(0, Array(12)).map(function (x, i) {
                    return cart_item();
                })}
            </>
        )
    }


    const render = () => {
        return (
            <>
                <div className="mdk-header-layout__content page-content ">
                    <div data-push data-responsive-width="992px" className="mdk-drawer-layout js-mdk-drawer-layout">
                        <div className="mdk-drawer-layout__content">

                            <div className="page-section">
                                <div className="container page__container">
                                    <div className="d-flex flex-column flex-sm-row align-items-sm-center mb-24pt" style={{ whiteSpace: 'nowrap' }}>
                                        <small className="flex text-muted text-headings text-uppercase mr-3 mb-2 mb-sm-0">Displaying 12 out of 20 courses</small>
                                        <div className="w-auto ml-sm-auto table d-flex align-items-center mb-2 mb-sm-0">
                                            <small className="text-muted text-headings text-uppercase mr-3 d-none d-sm-block">Sort by</small>

                                            <button className="sort desc small text-headings text-uppercase">Newest</button>
                                            <button className="sort small text-headings text-uppercase ml-2">Popularity</button>
                                        </div>
                                        <button onClick={() => setShowNav(true)} className="btn btn-sm btn-white ml-sm-16pt">
                                            <i className="material-icons icon--left">tune</i> Filters
                                            </button>
                                        <button href="#" data-target="#library-drawer" data-toggle="sidebar" className="btn btn-sm btn-white ml-sm-16pt">
                                            <i className="material-icons icon--left">tune</i> Test
                                        </button>
                                    </div>
                                    <div className="page-separator">
                                        <div className="page-separator__text">List Courses</div>
                                    </div>
                                    <div className="row card-group-row">
                                        {for_showitems()}
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

                                </div>
                            </div>

                        </div>

                        <div className="mdk-drawer js-mdk-drawer" id="library-drawer" data-align="end" >
                            <div className="mdk-drawer__content top-navbar" >
                                <div className="sidebar sidebar-light sidebar-right py-16pt">

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
                    </div>

                </div>
            </>
        );
    }
    return render();
};

export default ListCourse;