import React from 'react'

export default function TaskList() {
    return (
        <>

            <div className="mdk-header-layout__content page-content ">



                <div className="pt-32pt">
                    <div className="container page__container d-flex flex-column flex-md-row align-items-center text-center text-sm-left">
                        <div className="flex d-flex flex-column flex-sm-row align-items-center mb-24pt mb-md-0">

                            <div className="mb-24pt mb-sm-0 mr-sm-24pt">
                                <h2 className="mb-0">Tasks</h2>

                                <ol className="breadcrumb p-0 m-0">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>

                                    <li className="breadcrumb-item active">

                                        Productivity

                                </li>

                                </ol>

                            </div>
                        </div>


                        <div className="row" role="tablist">
                            <div className="col-auto">
                                <a href="" className="btn btn-outline-secondary">New Task</a>
                            </div>
                        </div>

                    </div>
                </div>
















                <div className="container page__container">
                    <div className="page-section">

                        <div className="page-separator">
                            <div className="page-separator__text">Tasks</div>
                        </div>

                        <div className="card mb-lg-32pt">
                            <div className="card-header py-12pt d-flex align-items-center">
                                <strong>Open</strong>
                                <a href="#" className="d-inline-block mx-16pt"><i className="material-icons text-50">more_horiz</i></a>
                                <div className="text-50">4</div>
                                <div className="flex"></div>
                                <a href="#"><i className="material-icons text-20">keyboard_arrow_up</i></a>
                            </div>
                            <div className="progress rounded-0" >
                                <div className="progress-bar bg-accent" role="progressbar" aria-valuenow="14" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>


                            <div className="table-responsive" data-toggle="lists" data-lists-sort-by="js-lists-values-date" data-lists-sort-desc="false" data-lists-values='["js-lists-values-name", "js-lists-values-date"]'>




                                <table className="table mb-0 thead-border-top-0 table-nowrap">
                                    <thead>
                                        <tr>

                                            <th className="pr-0">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input js-toggle-check-all" data-target="#tasks" id="customCheckAll_tasks" />
                                                    <label className="custom-control-label" for="customCheckAll_tasks"><span className="text-hide">Toggle all</span></label>
                                                </div>
                                            </th>


                                        </tr>
                                    </thead>
                                    <tbody className="list" id="tasks">

                                        <tr className="selected">

                                            <td className="pr-0">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input js-check-selected-row" checked="" id="customCheck1_tasks_1" />
                                                    <label className="custom-control-label" for="customCheck1_tasks_1"><span className="text-hide">Check</span></label>
                                                </div>
                                            </td>

                                            <td>


                                                <div className="d-flex align-items-center">
                                                    <strong className="flex js-lists-values-name">Add Fluid Layout Featuring A Vertical Menu With Icons Only</strong>


                                                    <i className="material-icons icon-16pt text-20 mr-4pt">link</i>
                                                    <small className="text-50">2</small>



                                                </div>


                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">

                                                    <a href="" className="mr-4pt"><span className="indicator-line rounded bg-primary"></span></a>

                                                    <a href="" className="mr-4pt"><span className="indicator-line rounded bg-accent"></span></a>

                                                </div>
                                            </td>
                                            <td>
                                                <small className="js-lists-values-date text-50">02/01/20</small>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-group flex mr-8pt">

                                                        <div className="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="Janell D.">
                                                            <a href=""><img src="assets/images/256_luke-porter-261779-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" /></a>
                                                        </div>

                                                        <div className="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="Janell D.">
                                                            <a href=""><img src="assets/images/256_michael-dam-258165-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" /></a>
                                                        </div>

                                                        <div className="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="Janell D.">
                                                            <a href=""><img src="assets/images/256_rsz_1andy-lee-642320-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" /></a>
                                                        </div>



                                                    </div>
                                                    <a className="rounded-circle d-flex align-items-center border align-items-center text-50" href=""><i className="material-icons icon-16pt m-1">add</i></a>
                                                </div>
                                            </td>
                                            <td className="text-right">
                                                <a href="" className="text-50"><i className="material-icons">more_vert</i></a>
                                            </td>
                                        </tr>

                                        <tr>

                                            <td className="pr-0">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input js-check-selected-row" id="customCheck1_tasks_2" />
                                                    <label className="custom-control-label" for="customCheck1_tasks_2"><span className="text-hide">Check</span></label>
                                                </div>
                                            </td>

                                            <td>


                                                <div className="d-flex align-items-center">
                                                    <strong className="flex js-lists-values-name">Add Initial Documentation Covering Basic Features</strong>




                                                </div>


                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">

                                                    <a href="" className="mr-4pt"><span className="indicator-line rounded bg-warning"></span></a>

                                                </div>
                                            </td>
                                            <td>
                                                <small className="js-lists-values-date text-50">03/01/20</small>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-group flex mr-8pt">

                                                        <div className="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="Janell D.">
                                                            <a href=""><img src="assets/images/256_michael-dam-258165-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" /></a>
                                                        </div>

                                                        <div className="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="Janell D.">
                                                            <a href=""><img src="assets/images/256_luke-porter-261779-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" /></a>
                                                        </div>



                                                    </div>
                                                    <a className="rounded-circle d-flex align-items-center border align-items-center text-50" href=""><i className="material-icons icon-16pt m-1">add</i></a>
                                                </div>
                                            </td>
                                            <td className="text-right">
                                                <a href="" className="text-50"><i className="material-icons">more_vert</i></a>
                                            </td>
                                        </tr>

                                        <tr>

                                            <td className="pr-0">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input js-check-selected-row" id="customCheck1_tasks_3" />
                                                    <label className="custom-control-label" for="customCheck1_tasks_3"><span className="text-hide">Check</span></label>
                                                </div>
                                            </td>

                                            <td>


                                                <div className="d-flex align-items-center">
                                                    <strong className="flex js-lists-values-name">Refactor HTML Markup To Be More SEO Friendly</strong>




                                                    <i className="material-icons icon-16pt text-20 mr-4pt">comment</i>
                                                    <small className="text-50">1</small>

                                                </div>


                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">

                                                    <a href="" className="mr-4pt"><span className="indicator-line rounded bg-primary"></span></a>

                                                </div>
                                            </td>
                                            <td>
                                                <small className="js-lists-values-date text-50">03/01/20</small>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-group flex mr-8pt">



                                                        <div className="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="LB">
                                                            <a href=""><span className="avatar-title bg-white border text-black-100 rounded-circle">LB</span></a>
                                                        </div>

                                                        <div className="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="AD">
                                                            <a href=""><span className="avatar-title bg-white border text-black-100 rounded-circle">AD</span></a>
                                                        </div>

                                                    </div>
                                                    <a className="rounded-circle d-flex align-items-center border align-items-center text-50" href=""><i className="material-icons icon-16pt m-1">add</i></a>
                                                </div>
                                            </td>
                                            <td className="text-right">
                                                <a href="" className="text-50"><i className="material-icons">more_vert</i></a>
                                            </td>
                                        </tr>

                                        <tr>

                                            <td className="pr-0">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input js-check-selected-row" id="customCheck1_tasks_4" />
                                                    <label className="custom-control-label" for="customCheck1_tasks_4"><span className="text-hide">Check</span></label>
                                                </div>
                                            </td>

                                            <td>

                                                <div className="media flex-nowrap align-items-center" >
                                                    <div className="avatar avatar-sm mr-8pt">

                                                        <img src="assets/images/stories/256_rsz_jared-rice-388260-unsplash.jpg" alt="Avatar" className="avatar-img rounded" />


                                                    </div>
                                                    <div className="media-body">


                                                        <div className="d-flex align-items-center">
                                                            <strong className="flex js-lists-values-name">Add Layout Options</strong>




                                                        </div>


                                                    </div>
                                                </div>

                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">

                                                    <a href="" className="mr-4pt"><span className="indicator-line rounded bg-accent"></span></a>

                                                </div>
                                            </td>
                                            <td>
                                                <small className="js-lists-values-date text-50">04/01/20</small>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-group flex mr-8pt">

                                                        <div className="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="Janell D.">
                                                            <a href=""><img src="assets/images/256_rsz_1andy-lee-642320-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" /></a>
                                                        </div>

                                                        <div className="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="Janell D.">
                                                            <a href=""><img src="assets/images/256_michael-dam-258165-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" /></a>
                                                        </div>

                                                        <div className="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="Janell D.">
                                                            <a href=""><img src="assets/images/256_luke-porter-261779-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" /></a>
                                                        </div>



                                                    </div>
                                                    <a className="rounded-circle d-flex align-items-center border align-items-center text-50" href=""><i className="material-icons icon-16pt m-1">add</i></a>
                                                </div>
                                            </td>
                                            <td className="text-right">
                                                <a href="" className="text-50"><i className="material-icons">more_vert</i></a>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                            <div className="card-footer p-8pt">

                                <ul className="pagination justify-content-start pagination-xsm m-0">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true" className="material-icons">chevron_left</span>
                                            <span>Prev</span>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Page 1">
                                            <span>1</span>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Page 2">
                                            <span>2</span>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span>Next</span>
                                            <span aria-hidden="true" className="material-icons">chevron_right</span>
                                        </a>
                                    </li>
                                </ul>

                            </div>

                        </div>

                        <div className="card mb-lg-32pt">
                            <div className="card-header py-12pt d-flex align-items-center">
                                <strong>In Progress</strong>
                                <a href="#" className="d-inline-block mx-16pt"><i className="material-icons text-50">more_horiz</i></a>
                                <div className="text-50">10</div>
                                <div className="flex"></div>
                                <a href="#"><i className="material-icons text-20">keyboard_arrow_up</i></a>
                            </div>
                            <div className="progress rounded-0" >
                                <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>


                            <div className="table-responsive" data-toggle="lists" data-lists-sort-by="js-lists-values-date" data-lists-sort-desc="false" data-lists-values='["js-lists-values-name", "js-lists-values-date"]'>




                                <table className="table mb-0 thead-border-top-0 table-nowrap">
                                    <thead>
                                        <tr>

                                            <th className="pr-0">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input js-toggle-check-all" data-target="#tasks2" id="customCheckAll_tasks2" />
                                                    <label className="custom-control-label" for="customCheckAll_tasks2"><span className="text-hide">Toggle all</span></label>
                                                </div>
                                            </th>

                                            <th>
                                                <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-name">Task</a>
                                            </th>
                                            <th >Tags</th>
                                            <th >
                                                <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-date">Due</a>
                                            </th>
                                            <th >Assigned to</th>
                                            <th ></th>
                                        </tr>
                                    </thead>
                                    <tbody className="list" id="tasks2">

                                        <tr>

                                            <td className="pr-0">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input js-check-selected-row" id="customCheck1_tasks2_1" />
                                                    <label className="custom-control-label" for="customCheck1_tasks2_1"><span className="text-hide">Check</span></label>
                                                </div>
                                            </td>

                                            <td>


                                                <div className="d-flex align-items-center">
                                                    <strong className="flex js-lists-values-name">Add Initial Documentation Covering Basic Features</strong>




                                                </div>


                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">

                                                    <a href="" className="mr-4pt"><span className="indicator-line rounded bg-primary"></span></a>

                                                </div>
                                            </td>
                                            <td>
                                                <small className="js-lists-values-date text-50">02/01/20</small>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-group flex mr-8pt">

                                                        <div className="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="Janell D.">
                                                            <a href=""><img src="assets/images/256_michael-dam-258165-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" /></a>
                                                        </div>

                                                        <div className="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="Janell D.">
                                                            <a href=""><img src="assets/images/256_luke-porter-261779-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" /></a>
                                                        </div>



                                                    </div>
                                                    <a className="rounded-circle d-flex align-items-center border align-items-center text-50" href=""><i className="material-icons icon-16pt m-1">add</i></a>
                                                </div>
                                            </td>
                                            <td className="text-right">
                                                <a href="" className="text-50"><i className="material-icons">more_vert</i></a>
                                            </td>
                                        </tr>

                                        <tr>

                                            <td className="pr-0">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input js-check-selected-row" id="customCheck1_tasks2_2" />
                                                    <label className="custom-control-label" for="customCheck1_tasks2_2"><span className="text-hide">Check</span></label>
                                                </div>
                                            </td>

                                            <td>


                                                <div className="d-flex align-items-center">
                                                    <strong className="flex js-lists-values-name">Add Fluid Layout Featuring A Vertical Menu</strong>


                                                    <i className="material-icons icon-16pt text-20 mr-4pt">link</i>
                                                    <small className="text-50">2</small>



                                                </div>


                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">

                                                    <a href="" className="mr-4pt"><span className="indicator-line rounded bg-primary"></span></a>

                                                    <a href="" className="mr-4pt"><span className="indicator-line rounded bg-accent"></span></a>

                                                </div>
                                            </td>
                                            <td>
                                                <small className="js-lists-values-date text-50">03/01/20</small>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-group flex mr-8pt">

                                                        <div className="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="Janell D.">
                                                            <a href=""><img src="assets/images/256_luke-porter-261779-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" /></a>
                                                        </div>

                                                        <div className="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="Janell D.">
                                                            <a href=""><img src="assets/images/256_michael-dam-258165-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" /></a>
                                                        </div>

                                                        <div className="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="Janell D.">
                                                            <a href=""><img src="assets/images/256_rsz_1andy-lee-642320-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" /></a>
                                                        </div>



                                                    </div>
                                                    <a className="rounded-circle d-flex align-items-center border align-items-center text-50" href=""><i className="material-icons icon-16pt m-1">add</i></a>
                                                </div>
                                            </td>
                                            <td className="text-right">
                                                <a href="" className="text-50"><i className="material-icons">more_vert</i></a>
                                            </td>
                                        </tr>

                                        <tr>

                                            <td className="pr-0">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input js-check-selected-row" id="customCheck1_tasks2_3" />
                                                    <label className="custom-control-label" for="customCheck1_tasks2_3"><span className="text-hide">Check</span></label>
                                                </div>
                                            </td>

                                            <td>

                                                <div className="media flex-nowrap align-items-center" >
                                                    <div className="avatar avatar-sm mr-8pt">

                                                        <img src="assets/images/stories/256_rsz_dex-ezekiel-761373-unsplash.jpg" alt="Avatar" className="avatar-img rounded" />


                                                    </div>
                                                    <div className="media-body">


                                                        <div className="d-flex align-items-center">
                                                            <strong className="flex js-lists-values-name">Add Layout Options</strong>




                                                        </div>


                                                    </div>
                                                </div>

                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">

                                                    <a href="" className="mr-4pt"><span className="indicator-line rounded bg-primary"></span></a>

                                                </div>
                                            </td>
                                            <td>
                                                <small className="js-lists-values-date text-50">03/01/20</small>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-group flex mr-8pt">

                                                        <div className="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="Janell D.">
                                                            <a href=""><img src="assets/images/256_rsz_1andy-lee-642320-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" /></a>
                                                        </div>

                                                        <div className="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="Janell D.">
                                                            <a href=""><img src="assets/images/256_michael-dam-258165-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" /></a>
                                                        </div>

                                                        <div className="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="Janell D.">
                                                            <a href=""><img src="assets/images/256_luke-porter-261779-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" /></a>
                                                        </div>



                                                    </div>
                                                    <a className="rounded-circle d-flex align-items-center border align-items-center text-50" href=""><i className="material-icons icon-16pt m-1">add</i></a>
                                                </div>
                                            </td>
                                            <td className="text-right">
                                                <a href="" className="text-50"><i className="material-icons">more_vert</i></a>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                            <div className="card-footer p-8pt">

                                <ul className="pagination justify-content-start pagination-xsm m-0">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true" className="material-icons">chevron_left</span>
                                            <span>Prev</span>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Page 1">
                                            <span>1</span>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Page 2">
                                            <span>2</span>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span>Next</span>
                                            <span aria-hidden="true" className="material-icons">chevron_right</span>
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <div className="card mb-0 p-relative o-hidden">
                            <div className="card-header py-12pt d-flex align-items-center">
                                <strong>Closed</strong>
                                <a href="#" className="d-inline-block mx-16pt"><i className="material-icons text-50">more_horiz</i></a>
                                <div className="text-50">14</div>
                                <div className="flex"></div>
                                <a href="#"><i className="material-icons text-20">keyboard_arrow_down</i></a>
                            </div>
                            <div className="progress rounded-0" >
                                <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}