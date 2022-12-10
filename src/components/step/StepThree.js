import React from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";

const StepThree = () => {
  return (
    <form className="step-three">
      <h2 className="text-clr-dark-1fs-48">Location</h2>
      <p className="fs-18 text-clr-dark-3 ff-inter mb-5">
        Help people in the area discover your event.
      </p>

      <Row className="g-4">
        <FloatingLabel
          controlId="streetAddress"
          label="Street Address"
        >
          <Form.Control type="text" placeholder="Street Address" />
        </FloatingLabel>

        <FloatingLabel
          controlId="apartment"
          label="Apt, Suite, Bldg (optional)"
        >
          <Form.Control type="text" placeholder="Apt, Suite, Bldg" />
        </FloatingLabel>

        <FloatingLabel controlId="city" label="City">
          <Form.Control type="text" placeholder="City" />
        </FloatingLabel>
        <Col md>
          <FloatingLabel controlId="state" label="State">
            <Form.Control type="text" placeholder="State" />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel
            controlId="postalCode"
            label="Postal Code"
          >
            <Form.Control type="text" placeholder="Postal Code" />
          </FloatingLabel>
        </Col>
        <FloatingLabel controlId="country" label="Country">
          <Form.Control type="text" placeholder="Country" />
        </FloatingLabel>
      </Row>
    </form>
  );
};

export default StepThree;
