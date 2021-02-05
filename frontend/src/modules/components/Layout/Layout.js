import React from 'react';
import { Menu, Search, Footer, Header } from '../index';

const Layout = (props) => {
    
    const render = () => {
        return (
            <div>
                <Menu />
                <Search />
                {props.children}
                <Footer/>
            </div>
        )
    }

    return render();
}

export default Layout;