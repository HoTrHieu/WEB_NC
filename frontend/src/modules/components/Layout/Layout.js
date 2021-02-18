import React, {useState} from 'react';
import { Footer, Header, NavBar } from '../index';

const Layout = (props) => {
    const [showNavBar, setShowNavBar] = useState(false);
 
    const handleHideSideBar = () => {
        setShowNavBar(!showNavBar)
    }

    const render = () => {
        return (
            <>
                <div className="mdk-header-layout js-mdk-header-layout">
                    <Header setShowNavBar={setShowNavBar}/>
                    {props.children}
                    <Footer/>
                </div>
                
                {
                    showNavBar && <NavBar setShowNavBar={setShowNavBar}></NavBar>
                }
                
            </>
        )
    }

    return render();
}

export default Layout;