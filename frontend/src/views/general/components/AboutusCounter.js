import React, { Component } from 'react';

class AbountusCounter extends Component {
    render() {
        return (
            <div>
                <section id="mu-abtus-counter">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="mu-abtus-counter-area">
                                    <div className="row">

                                        <div className="col-lg-3 col-md-3 col-sm-3">
                                            <div className="mu-abtus-counter-single">
                                                <span className="fa fa-book"></span>
                                                <h4 className="counter">568</h4>
                                                <p>Subjects</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-3 col-sm-3">
                                            <div className="mu-abtus-counter-single">
                                                <span className="fa fa-users"></span>
                                                <h4 className="counter">3500</h4>
                                                <p>Students</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-3 col-sm-3">
                                            <div className="mu-abtus-counter-single">
                                                <span className="fa fa-flask"></span>
                                                <h4 className="counter">65</h4>
                                                <p>Modern Lab</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-3 col-sm-3">
                                            <div className="mu-abtus-counter-single no-border">
                                                <span className="fa fa-user-secret"></span>
                                                <h4 className="counter">250</h4>
                                                <p>Teachers</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default AbountusCounter;