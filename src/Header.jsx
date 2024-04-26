import './HeaderStyle.css'
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
import Logo from './assets/Logo4.svg'

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
            <div className="rounded-circle bg-light">
          <img
              alt=""
              src={Logo}
              // radius="50%"
              width="50"
              height="50"
              className="d-inline-block m-auto"
            />
            </div>
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