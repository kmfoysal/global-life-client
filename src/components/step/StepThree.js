import React from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import useStepFormContext from "../../hooks/useStepFormContext";

const StepThree = () => {
  
    const { formData, handleChange } = useStepFormContext();


  return (
    <div className="step-three">
      <h2 className="text-clr-dark-1fs-48">Location</h2>
      <p className="fs-18 text-clr-dark-3 ff-inter mb-5">
        Help people in the area discover your event.
      </p>

      <Row className="g-4">
        <FloatingLabel controlId="streetAddress" label="Street Address">
          <Form.Control
            type="text"
            placeholder="Street Address"
            name="streetAddress"
            value={formData?.streetAddress}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="apartment"
          label="Apt, Suite, Bldg (optional)"
        >
          <Form.Control
            type="text"
            placeholder="Apt, Suite, Bldg"
            name="apartment"
            value={formData?.apartment}
            onChange={handleChange}
          />
        </FloatingLabel>

        <FloatingLabel controlId="city" label="City">
          <Form.Control
            type="text"
            placeholder="City"
            name="city"
            value={formData?.city}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <Col md>
          <FloatingLabel controlId="state" label="State">
            <Form.Control
              type="text"
              placeholder="State"
              name="countryState"
              value={formData?.countryState}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="postalCode" label="Postal Code">
            <Form.Control
              type="text"
              placeholder="Postal Code"
              name="postalCode"
              value={formData?.postalCode}
              onChange={handleChange}
            />
          </FloatingLabel>
        </Col>
        <FloatingLabel controlId="country" label="Country">
          <Form.Control
            type="text"
            placeholder="Country"
            name="country"
            value={formData?.country}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
      </Row>
    </div>
  );
};

export default StepThree;
