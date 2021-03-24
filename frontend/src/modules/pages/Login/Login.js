import React from 'react';

const Login = (props) => {
    return (
        <>
            <div className="pt-32pt pt-sm-64pt pb-32pt">
            <div className="container-fluid page__container">
                <form action="boxed-index.html" className="col-md-5 p-0 mx-auto">
                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email:</label>
                    <input id="email" type="text" className="form-control" placeholder="Your email address ..." />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="password">Password:</label>
                    <input id="password" type="password" className="form-control" placeholder="Your first and last name ..." />
                    <p className="text-right"><a href="boxed-reset-password.html" className="small">Forgot your password?</a></p>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary">Login</button>
                </div>
                </form>
            </div>
            </div>
            <div className="page-separator justify-content-center m-0">
            <div className="page-separator__text">or sign-in with</div>
            </div>
            <div className="bg-body pt-32pt pb-32pt pb-md-64pt text-center">
            <div className="container-fluid page__container">
                <a href="boxed-index.html" className="btn btn-secondary btn-block-xs">Facebook</a>
                <a href="boxed-index.html" className="btn btn-secondary btn-block-xs">Twitter</a>
                <a href="boxed-index.html" className="btn btn-secondary btn-block-xs">Google+</a>
            </div>
            </div>
      </>
    );
};

export default Login;