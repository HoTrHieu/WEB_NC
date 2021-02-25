import React, {useState} from 'react';
import { Footer, Header, NavBar } from '../index';

const Layout = (props) => {

    const render = () => {
        return (
            <div  className="mdk-header-layout js-mdk-header-layout">
                <Header/>
                <div className="mdk-header-layout__content page-content ">
                    {props.children}
                </div>
                <Footer/>
            </div>
        )
    }

    return render();
}

export default Layout;