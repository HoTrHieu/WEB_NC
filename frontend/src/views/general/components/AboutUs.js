import React, { Component } from 'react';

class AboutUs extends Component {
    render() {
        return (
            <div>
                <section id="mu-about-us">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="mu-about-us-area">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="mu-about-us-left">
                                                <div className="mu-title">
                                                    <h2>About Us</h2>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum pariatur fuga eveniet soluta aspernatur rem, nam voluptatibus voluptate voluptates sapiente, inventore. Voluptatem, maiores esse molestiae.</p>
                                                <ul>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                                                    <li>Saepe a minima quod iste libero rerum dicta!</li>
                                                    <li>Voluptas obcaecati, iste porro fugit soluta consequuntur. Veritatis?</li>
                                                    <li>Ipsam deserunt numquam ad error rem unde, omnis.</li>
                                                    <li>Repellat assumenda adipisci pariatur ipsam eos similique, explicabo.</li>
                                                </ul>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quaerat harum facilis excepturi et? Mollitia!</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="mu-about-us-right">
                                                <a id="mu-abtus-video" href="https://www.youtube.com/embed/HN3pm9qYAUs" target="mutube-video">
                                                    <img src="./assets/img/about-us.jpg" alt="img" />
                                                </a>
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

export default AboutUs