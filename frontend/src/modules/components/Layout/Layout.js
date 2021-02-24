import React, {useState} from 'react';
import { Footer, Header, NavBar } from '../index';

const Layout = (props) => {

    const render = () => {
        return (
            <div  className="mdk-header-layout js-mdk-header-layout">
                <Header/>
                {props.children}
                <Footer/>
            </div>
        )
    }

    return render();
}

export default Layout;