import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link, animateScroll as scroll } from 'react-scroll';

const AppNavbar = () => {
    const scrollToTop = () => {
        scroll.scrollToTop({ duration: 500 });
    };

    return (
        <Navbar fixed="top" expand='md' bg='light' variant="light" className="p-3 px-4">
            <Navbar.Brand  onClick={scrollToTop} style={{ cursor: 'default', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }} className="font-monospace">
                Shree Investments and Financial Solutions
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ right: '4%',position: 'fixed', backgroundColor: '#fff', borderColor: '#fff'}}/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="text-lg text-hover-dark ms-auto">
                    <Nav.Link onClick={scrollToTop} style={{ fontWeight: 'bold'}}>Home</Nav.Link>
                    <Nav.Link as={Link} to='about' smooth duration={500} style={{ fontWeight: 'bold', cursor: 'pointer'}}>
                        About me
                    </Nav.Link>
                    <Nav.Link as={Link} to='product' smooth duration={500} style={{ fontWeight: 'bold', cursor: 'pointer'}}>
                        Products
                    </Nav.Link>
                    <Nav.Link as={Link} to='reviews' smooth duration={500} style={{ fontWeight: 'bold', cursor: 'pointer'}}>
                        Reviews
                    </Nav.Link>
                    <Nav.Link as={Link} to='contact' smooth duration={500} style={{ fontWeight: 'bold', cursor: 'pointer'}}>
                        Contact Us
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default AppNavbar;