import React from 'react';

const Signup = () => {
    return (
        <>
            <div className="py-32pt navbar-submenu">
            <div className="container-fluid page__container">
                <div className="progression-bar progression-bar--active-accent">
                <a href="pricing.html" className="progression-bar__item progression-bar__item--complete">
                    <span className="progression-bar__item-content">
                    <i className="material-icons progression-bar__item-icon">done</i>
                    <span className="progression-bar__item-text h5 mb-0 text-uppercase">Pricing</span>
                    </span>
                </a>
                <a href="boxed-signup.html" className="progression-bar__item progression-bar__item--complete progression-bar__item--active">
                    <span className="progression-bar__item-content">
                    <i className="material-icons progression-bar__item-icon" />
                    <span className="progression-bar__item-text h5 mb-0 text-uppercase">Account details</span>
                    </span>
                </a>
                <a href="boxed-signup-payment.html" className="progression-bar__item">
                    <span className="progression-bar__item-content">
                    <i className="material-icons progression-bar__item-icon" />
                    <span className="progression-bar__item-text h5 mb-0 text-uppercase">Payment details</span>
                    </span>
                </a>
                </div>
            </div>
            </div>
            <div className="page-section container-fluid page__container">
            <div className="col-lg-10 p-0 mx-auto">
                <div className="row">
                <div className="col-md-6 mb-24pt mb-md-0">
                    <form action="boxed-signup-payment.html">
                    <div className="form-group">
                        <label className="form-label" htmlFor="name">Your first and last name:</label>
                        <input id="name" type="text" className="form-control" placeholder="Your first and last name ..." />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Your email:</label>
                        <input id="email" type="email" className="form-control" placeholder="Your email address ..." />
                    </div>
                    <div className="form-group mb-24pt">
                        <label className="form-label" htmlFor="password">Password:</label>
                        <input id="password" type="password" className="form-control" placeholder="Your password ..." />
                    </div>
                    <button className="btn btn-primary">Create account</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <div className="card mb-0">
                    <div className="card-body">
                        <h5>Purchase summary</h5>
                        <div className="d-flex mb-8pt">
                        <div className="flex"><strong className="text-70">Subscription</strong></div>
                        <strong>Student</strong>
                        </div>
                        <div className="alert alert-soft-warning">
                        <div className="d-flex flex-wrap align-items-start">
                            <div className="mr-8pt">
                            <i className="material-icons">check</i>
                            </div>
                            <div className="flex" style={{minWidth: '180px'}}>
                            <small className="text-black-100">
                                Access to over 1.000 high quality courses. <strong>For individuals.</strong>
                            </small>
                            </div>
                        </div>
                        </div>
                        <div className="d-flex mb-16pt pb-16pt border-bottom">
                        <div className="flex"><strong className="text-70">Price</strong></div>
                        <strong>US $9 per month</strong>
                        </div>
                        <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" defaultChecked id="topic-all" />
                        <label className="custom-control-label">Terms and conditions</label>
                        <small className="form-text text-muted">By checking here and continuing, I agree to the Luma Terms of Use</small>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="page-separator justify-content-center m-0">
            <div className="page-separator__text">or sign-in with</div>
            </div>
            <div className="page-section text-center">
            <div className="container-fluid page__container">
                <a href="boxed-signup-payment.html" className="btn btn-secondary btn-block-xs">Facebook</a>
                <a href="boxed-signup-payment.html" className="btn btn-secondary btn-block-xs">Twitter</a>
                <a href="boxed-signup-payment.html" className="btn btn-secondary btn-block-xs">Google+</a>
            </div>
            </div>
        </>
      
    );
};

export default Signup;