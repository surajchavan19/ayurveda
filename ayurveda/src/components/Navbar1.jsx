import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

const Navbar1 = () => {
  return (
    <Navbar
      expand="lg"
      className=" pt-2 pb-2"
      style={{
        background: "green",
        color: "white",
       
      }}
    >
      <Container style={{background: "green"}}>
        <Navbar.Brand href="#home" style={{fontWeight: "500",color: "white", fontFamily: "monospace"}}>Prakriti</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto"  >
            <Nav.Link href="#home" style={{ paddingLeft: "-20%",marginLeft: "-20%",color:"white"}}>Home</Nav.Link>
            <Nav.Link href="http://127.0.0.1:5500/maps.html" style={{color:"white"}}>Maps</Nav.Link>
            <Nav.Link href="#" style={{color: "white"}}>Research</Nav.Link>
            <Nav.Link href="https://surveaditya.github.io/quiz/" style={{color: "white"}}>Quiz</Nav.Link>
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
