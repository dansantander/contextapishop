import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const SingleProduct = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="product">
      <Card>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle>
            {product.name}
            <span>$ {product.price}</span>
            {product.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>Delivery in 4 days</div>
            )}
            <Rating rating={product.ratings}></Rating>
          </Card.Subtitle>
          {cart.some((c) => c.id === product.id) ? (
            <Button variant="danger">Remove from Cart</Button>
          ) : (
            <Button
              onClick={()=> {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: product
                })
              }}
              variant="primary" disabled={!product.inStock}>
              {!product.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;

// When using a comparison statement, in javascript, 0 gets converted to false (as it's falsey),
// but every other number is truthy. Now, disabled property for a button expects a boolean value,
// so by doing !number the one time disabled will be true is when !number = !0 = !false = true.
