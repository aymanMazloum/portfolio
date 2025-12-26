import React, { useContext } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { ThemeContext } from "../../ThemeContext";

const MyNavbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Navbar expand="lg" bg={theme === "light" ? "light" : "dark"} variant={theme} sticky="top">
      <Container>
        <Navbar.Brand href="#home">Ayman Ali Mazloum</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Button variant={theme === "light" ? "outline-dark" : "outline-light"} onClick={toggleTheme}>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </Button>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
