import React, { Component } from 'react'
import "./NavbarCompStyles.css"
import { Link } from 'react-router-dom'
import { Nav,Navbar,NavDropdown,Form,FormControl,Container,Button } from 'react-bootstrap'
export default class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark "  variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><h2>TicketeFY</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link to="/">Home</Nav.Link> */}
            <Nav.Link to="/Concerts">Concerts</Nav.Link>
            <Nav.Link href="/Movies">Movies</Nav.Link>
            <Nav.Link href="/">Sports</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="Signin">Signin</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link   img    className="Login" href="Login">
              Login
            </Nav.Link>
          </Nav>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              />
            <Button variant="outline-secondary">Search</Button>
          </Form>
              </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    )
          
  }
}
