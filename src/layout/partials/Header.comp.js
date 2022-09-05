import React from 'react'
import {Navbar,Nav} from 'react-bootstrap';

import logo from '../../assets/img/logo.png'
export const Header = () => {
  return (<div className='header'>
        <Navbar
        collapseOnSelect
        bg="info"
        variant="dark"
        expand="md"
        >
            <Navbar.Brand>
                <img src={logo} alt="logo" width="80px"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end ml-auto">
                    <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
                    <Nav.Link href='/Tickets'>Tickets</Nav.Link>
                    <Nav.Link href='/Logout'>Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  )
}
