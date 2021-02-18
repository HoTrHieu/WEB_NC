import React from 'react';

const Footer = () => {

    const render = () => {
        return (
            <div className="js-fix-footer2 bg-white border-top-2">
                <div className="container page__container page-section d-flex flex-column">
                    <p className="text-70 brand mb-24pt">
                    <img className="brand-icon" src="assets/images/logo/black-70@2x.png" width={30} alt="Luma" /> Luma
                    </p>
                    <p className="measure-lead-max text-50 small mr-8pt">Luma is a beautifully crafted user interface for modern Education Platforms, including Courses &amp; Tutorials, Video Lessons, Student and Teacher Dashboard, Curriculum Management, Earnings and Reporting, ERP, HR, CMS, Tasks, Projects, eCommerce and more.</p>
                    <p className="mb-8pt d-flex">
                    <a href="#" className="text-70 text-underline mr-8pt small">Terms</a>
                    <a href="#" className="text-70 text-underline small">Privacy policy</a>
                    </p>
                    <p className="text-50 small mt-n1 mb-0">Copyright 2019 © All rights reserved.</p>
                </div>
            </div>
        )
    }
    
    return render();
}

export default Footer;