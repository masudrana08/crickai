import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../../assets/logo.png";
import "./mynavbar.css";
export default function MyNavbar() {
  return (
    <div>
      <Container>
      <Navbar expand="lg" className="navbarCont">
        <div className="toogleSection">
          <div>
            <img style={{ width: "80px" }} src={Logo} alt="" />
          </div>
          <div style={{marginLeft:'auto'}}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
        </div>
        <div className='itemSection'>
          <div >
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#">Live Stream</Nav.Link>
                <Nav.Link href="#">Game Highlights</Nav.Link>
                <Nav.Link href="#">Reviews</Nav.Link>
                <Nav.Link href="#">Support</Nav.Link>
                <Nav.Link href="#">Login</Nav.Link>
                <button>Signup</button>
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
      </Container>
      
    </div>
  );
}
