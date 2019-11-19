import React from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap';
export default function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#documentation">Documentation</Nav.Link>
            </Nav>
                <a href="https://github.com/agnenevulyte">
                    <Image src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" roundedCircle className="githubIcon" />
                </a>
     
        </Navbar>
    )
}