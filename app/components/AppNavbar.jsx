import React from 'react';
import {  Navbar, Nav, NavItem, Panel, NavDropdown, MenuItem  } from 'react-bootstrap';
export default class AppNavbar extends React.Component {
    render() {
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">TimeKeeper</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavDropdown eventKey={3} title="User" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Logout</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
}