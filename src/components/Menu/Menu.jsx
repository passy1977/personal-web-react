import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import PageService from '../../services/PageService';
import './Menu.css';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pages: PageService.pages};
    }

    render = () => 
    <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            {
                this.state.pages.map ((page, index) => <Nav.Link key={index} href={`#${page.title}`}>{page.title}</Nav.Link>)
            }
            </Nav>
        </Navbar.Collapse>
    </Navbar>
;
} 