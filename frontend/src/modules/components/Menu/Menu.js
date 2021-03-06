import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {
    const render = () => {
        return (
            <section id="mu-menu">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="index.html"><i className="fa fa-university"></i><span>Varsity</span></a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul id="top-menu" className="nav navbar-nav navbar-right main-nav">
                                <li className="active"><Link to='/'>Home</Link></li>
                                <li className="dropdown">
                                    <a href="!#" className="dropdown-toggle" data-toggle="dropdown">Course <span className="fa fa-angle-down"></span></a>
                                    <ul className="dropdown-menu" role="menu">
                                        <li><a href="course.html">Course Archive</a></li>
                                        <li><Link to='/detailcourse'>Course Detail</Link></li>
                                    </ul>
                                </li>
                                <li><a href="gallery.html">Gallery</a></li>
                                <li className="dropdown">
                                    <a href="!#" className="dropdown-toggle" data-toggle="dropdown">Blog <span className="fa fa-angle-down"></span></a>
                                    <ul className="dropdown-menu" role="menu">
                                        <li><a href="blog-archive.html">Blog Archive</a></li>
                                        <li><a href="blog-single.html">Blog Single</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">Contact</a></li>
                                <li><a href="404.html">404 Page</a></li>
                                <li><a href="!#" id="mu-search-icon"><i className="fa fa-search"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        )
    }
    return render();
}

export default Menu;