import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="mt-2">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Navbar.Brand as={Link} to="/">
            <h1>SIAN | PORTFOLIO</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto px-4 py-2">
            <Nav.Link
              as={NavLink}
              to="/about"
              className="ms-md-lg-auto"
              activeClassName="active"
              style={{
                letterSpacing: "3px",
                marginRight: "20px",
                marginBottom: "0px"
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/portfolio"
              activeClassName="active"
              style={{
                letterSpacing: "3px",
                marginRight: "20px",
                marginBottom: "0px"
              }}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/resume"
              activeClassName="active"
              style={{
                letterSpacing: "3px",
                marginRight: "20px",
                marginBottom: "0px"
              }}
            >
              Resume
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              activeClassName="active"
              style={{ letterSpacing: "3px", marginRight: "20px", marginBottom: "0px" }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
