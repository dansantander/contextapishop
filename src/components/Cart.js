import React, { useEffect, useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { CartState } from "../context/Context";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) =>  acc + Number(curr.price)*curr.qty, 0))
  }, [cart])

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((p) => (
            <span>{p.name}</span>
          ))}
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
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
