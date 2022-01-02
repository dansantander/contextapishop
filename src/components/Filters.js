import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Filters = () => {
  return (
    <div className="filterContainer">
      <span>Filter Products</span>
      <span>
        <Form.Check 
          inline
          label="Ascending"
          name="group1"
          type = "radio"
          id={`inline-1`}
        />
      </span>
      <span>
        <Form.Check 
          inline
          label="Descending"
          name="group1"
          type = "radio"
          id={`inline-2`}
        />
      </span>
      <span>
        <Form.Check 
          inline
          label="Inlcude out of stock"
          name="group1"
          type = "checkbox"
          id={`inline-3`}
        />
      </span>
      <span>
        <Form.Check 
          inline
          label="Fast delivery only"
          name="group1"
          type = "checkbox"
          id={`inline-4`}
        />
      </span>
      <Button variant="light">Clear Filters</Button>
      
    </div>
  )
}

export default Filters;
