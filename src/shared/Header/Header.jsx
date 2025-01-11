import React from 'react'
import "./Header.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


function Header({ background, homeTextDecoration, aboutTextDecoration, projectTextDecoration, skillTextDecoration, contactTextDecoration }) {

    const homeLinkStyle= {
        textDecoration: homeTextDecoration,
    };
    const aboutLinkStyle= {
        textDecoration: aboutTextDecoration,
    };
    const projectLinkStyle= {
        textDecoration: projectTextDecoration,
    };
    const skillLinkStyle= {
        textDecoration: skillTextDecoration,
    };
    const contactLinkStyle= {
        textDecoration: contactTextDecoration,
    };
    const navbarStyle = {
        background: background,
    };
    return (
        <div>
            <Navbar expand="lg" fixed="top" className="portfolioHeader w-100 px-3" style={navbarStyle}>
                <div>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="gap-4"
                        >
                            <Link style={homeLinkStyle} to="/">
                                Home
                            </Link>
                            <Link style={aboutLinkStyle} to="/About">
                                About
                            </Link>
                            <Link style={projectLinkStyle} to="/Projects">
                                Projects
                            </Link>
                            <Link style={skillLinkStyle} to="/Skills">
                                Skills
                            </Link>
                            <Link style={contactLinkStyle} to="/Contact">
                                Contact me
                            </Link>

                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default Header