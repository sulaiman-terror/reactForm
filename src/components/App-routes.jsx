import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";
import ABOUT from './Pages/ABOUT';
import BLOGS from './Pages/BLOGS';
import CONTACT from './Pages/CONTACT';
import HOME from './Pages/HOME';
import SHOP from './Pages/SHOP';

const Navigation = () => {

    return (
        <>
            <ul>
                <li>
                   <NavLink to="/" style={({isActive})=>({
                    color: isActive ? "text-red-200" : "text-green-800"
                   })}>
                    <HOME/>
                    </NavLink> 
                </li>
            </ul>
        </>
    );
}

export default Navigation;
