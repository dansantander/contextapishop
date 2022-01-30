import React, { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((p) => (
            <ListGroup.Item key={p.id}>
              <Row>
                <Col md={2}>
                  <Image src={p.image} alt={p.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{p.name}</span>
                </Col>
                <Col md={2}>
                  <span>{p.price}</span>
                </Col>
                <Col md={2}>
                  <Rating rating={p.ratings} />
                </Col>
                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={p.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: p.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(p.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: p,
                      })
                    }
                  >
                    <AiFillDelete fontSize={"20px"} style={{color: "red"}} />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filterContainer summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: $ {total}</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
