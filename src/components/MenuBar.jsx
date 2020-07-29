import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {NavLink} from "react-router-dom";

function MenuBar() {
    return (
        <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link className="navLink" href="/home">Home</Nav.Link>
                    <Nav.Link className="navLink" href="/stiri">Stiri si noutati</Nav.Link>
                    <Nav.Link className="navLink" href="/educatie">Educatie</Nav.Link>
                    <Nav.Link className="navLink" href="/materiale">Materiale didactice</Nav.Link>
                    <Nav.Link className="navLink" href="/cercetare">Cercetare</Nav.Link>
                    <Nav.Link className="navLink" href="/personal">Personal</Nav.Link>
                    <Nav.Link className="navLink" href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MenuBar;