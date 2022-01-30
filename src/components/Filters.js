import React /*, { useState }*/ from "react";
import { Button, Form } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const Filters = () => {
  // Initially we were setting the product's rating with this:
  // const [rate, setRate] = useState(0);
  // and using "rate" in line 61
  // but now we want that we created a proper state for the filters
  // we wanna use the default state for the rating which is also set to 0

  const {
    prodState: { sort, byStock, byFastDelivery, byRating },
    prodDispatch,
  } = CartState();

  console.log(sort, byStock, byFastDelivery, byRating )
  return (
    <div className="filterContainer">
      <span>Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            prodDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            prodDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Inlcude out of stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() =>
            prodDispatch({
              type: "FILTER_BY_STOCK",
            })
          }
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast delivery only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() =>
            prodDispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating:</label>
        {/* When using "rate" before, we were setting the rating with: onClick={(i) => setRate(i + 1)} */}
        <Rating
          rating={byRating}
          onClick={(i) =>
            prodDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button 
        variant="light"
        onClick={(i) =>
          prodDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >Clear Filters</Button>
    </div>
  );
};

export default Filters;
