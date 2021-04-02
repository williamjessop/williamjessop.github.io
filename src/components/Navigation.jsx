import React from "react";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
class Navigation extends React.Component {
    render() {
        return (
            <div>
                <Navbar expand="lg" sticky="top">
                    <Navbar.Brand href="/">Will J</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <Nav.Link href="/#/about">About Me</Nav.Link>
                            <Nav.Link href="/#/projects">Projects</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    
                </Navbar>
            </div>
        );
      }
  }

export default Navigation;