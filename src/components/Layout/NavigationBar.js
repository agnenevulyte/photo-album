import React from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'
export default function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
               <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/docs">Documentation</Link>
            </Nav>
                <a href="https://github.com/agnenevulyte">
                    <Image src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" roundedCircle className="githubIcon" />
                </a>
     
        </Navbar>
    )
}