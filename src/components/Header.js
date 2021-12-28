import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Container, Form, FormControl, Nav, Navbar, Dropdown, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand><Link to="/">LOGO</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Nav
            className="my-2 my-lg-0"
            navbarScroll
          >
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <FaShoppingCart color="white" fontSize="25px"/>
              <Badge>{10}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
