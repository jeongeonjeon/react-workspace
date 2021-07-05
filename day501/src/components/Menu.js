import React from 'react'; 
import { Link, NavLink } from 'react-router-dom'; 

const Menu = () => {
    
    const activeStyle = {
        color : "red"
    }
    return (
        <ul>
            <li><Link to="/">홈</Link></li>
            <li><Link to="/page1">PAGE</Link></li>
            <li><NavLink to="/" activeStyle={activeStyle}>홈</NavLink></li>
            <li><NavLink to="/page1" activeStyle={activeStyle}>PAGE</NavLink></li>
        </ul>
    );
};

export default Menu;