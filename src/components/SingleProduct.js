import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";

const SingleProduct = ({ product }) => {
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
          <Button variant="danger">Remove from Cart</Button>
          <Button variant="primary" disabled={!product.inStock}>
            { !product.inStock ? "Out of Stock" : "Add to Cart" }
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
