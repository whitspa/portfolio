import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'

const Header = (props)=>{
        return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Whit Spaulding</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" onClick={()=>props.getCurrentComponent("home")}>Home</Nav.Link>
              <Nav.Link href="#aboutme"onClick={()=>props.getCurrentComponent("aboutme")}>aboutme</Nav.Link>
              <Nav.Link href="#portfolio"onClick={()=>props.getCurrentComponent("portfolio")}>portfolio</Nav.Link>
              <Nav.Link href="#contact"onClick={()=>props.getCurrentComponent("contact")}>contact</Nav.Link>
              <Nav.Link href="#resume"onClick={()=>props.getCurrentComponent("resume")}>resume</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>no
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    )
}


export default Header;
