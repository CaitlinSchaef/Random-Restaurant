import './HeaderStyle.css'
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'

function Header() {
  let location = useLocation();
  console.log('location:', location.pathname)
  return (
      <>
    <Navbar className="">
      <Container>
        <Navbar.Collapse className="justify-content-start">
        <Navbar.Brand>
          <Link className="nav-link" to='/'>
          <img
              alt=""
              src="./src/assets/_Logo4.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
        </Link>
        </Navbar.Brand>

        <Navbar.Text className="nav-link">
        <Link className="nav-link" to='/menu'>MENU</Link> 
        </Navbar.Text>


        <Navbar.Text className="nav-link">
        <Link className="nav-link" to='/about'>ABOUT</Link>
        </Navbar.Text>

        <Navbar.Text className="nav-link">
        <Link className="nav-link" to='/contact'>CONTACT</Link>
        </Navbar.Text>

      </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  )
}

export default Header