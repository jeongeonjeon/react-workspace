import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {NavLink as NL, Link} from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <Nav tabs>
                <NavItem>
                    {/* <NavLink><NL to="/">HOME</NL></NavLink> */}
                    <Link className="nav-link" exact to="/">HOME</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" exact to="/board"  activeClassName="active">BOARD</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" exact to="/mypage">MYPAGE</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" exact to="/login">LOGIN</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" exact to="/logout">LOGOUT</Link>
                </NavItem>
            </Nav>
        </div>
    );
};

export default Menu;