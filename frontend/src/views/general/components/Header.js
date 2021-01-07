export default function Header() {
    return (
        <div>
            <header id="mu-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="mu-header-area">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                        <div className="mu-header-top-left">
                                            <div className="mu-top-email">
                                                <i className="fa fa-envelope"></i>
                                                <span>info@markups.io</span>
                                            </div>
                                            <div className="mu-top-phone">
                                                <i className="fa fa-phone"></i>
                                                <span>(568) 986 652</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                        <div className="mu-header-top-right">
                                            <nav>
                                                <ul className="mu-top-social-nav">
                                                    <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                                                    <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                                                    <li><a href="#"><span className="fa fa-google-plus"></span></a></li>
                                                    <li><a href="#"><span className="fa fa-linkedin"></span></a></li>
                                                    <li><a href="#"><span className="fa fa-youtube"></span></a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
