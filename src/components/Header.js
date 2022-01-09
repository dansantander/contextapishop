import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Container, Form, FormControl, Nav, Navbar, Dropdown, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';

const Header = () => {

  const {
    state: { cart },
    dispatch
  } = CartState();

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
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success" >
              <FaShoppingCart color="white" fontSize="25px"/>
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              { cart.length > 0 ? (
              <>
              {
                cart.map((p) => (
                  <span className="cartItem" key={p.id}>
                    <img
                      src={p.image}
                      className="cartItemImg"
                      alt={p.name}  
                    />
                    <div className="cartItemDetail">
                      <span>{p.name}</span>
                      <span>$ {p.price}</span>
                    </div>
                    <AiFillDelete
                      fontSize="20px"
                      style={{cursor:"pointer"}}
                      onClick={()=>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: p
                        })
                      }
                    />
                  </span>
                ))
              }
              <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
              </>):(
                <Dropdown.Item>Cart is Empty</Dropdown.Item>) }
            </Dropdown.Menu>
          </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
