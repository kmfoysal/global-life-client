import React, { useState } from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import useStepFormContext from "../../hooks/useStepFormContext";

const StepThree = ({ currentData }) => {
    const [streetAddress, setStreetAddress] = useState(currentData?.streetAddress);
    const [apartment, setApartment] = useState(currentData?.apartment);
    const [city, setCity] = useState(currentData?.city);
    const [countryState, setCountryState] = useState(currentData?.countryState);
    const [postalCode, setPostalCode] = useState(currentData?.postalCode);
    const [country, setCountry] = useState(currentData?.country);

    const { formData, handleChange, updateMode } = useStepFormContext();
   

    return (
        <div className="step-three">
            <h2 className="text-clr-dark-1fs-48">Location</h2>
            <p className="fs-18 text-clr-dark-3 ff-inter mb-5">Help people in the area discover your event.</p>

            <Row className="g-4">
                <FloatingLabel controlId="streetAddress" label="Street Address">
                    <Form.Control
                        type="text"
                        placeholder="Street Address"
                        name="streetAddress"
                        value={updateMode ? streetAddress : formData?.streetAddress}
                        onChange={updateMode ? (e) => setStreetAddress(e.target.value) : handleChange}
                        required
                    />
                </FloatingLabel>

                <FloatingLabel controlId="apartment" label="Apt, Suite, Bldg (optional)">
                    <Form.Control
                        type="text"
                        placeholder="Apt, Suite, Bldg"
                        name="apartment"
                        value={updateMode ? apartment : formData?.apartment}
                        onChange={updateMode ? (e) => setApartment(e.target.value) : handleChange}
                    />
                </FloatingLabel>

                <FloatingLabel controlId="city" label="City">
                    <Form.Control
                        type="text"
                        placeholder="City"
                        name="city"
                        value={updateMode ? city : formData?.city}
                        onChange={updateMode ? (e) => setCity(e.target.value) : handleChange}
                        required
                    />
                </FloatingLabel>
                <Col md>
                    <FloatingLabel controlId="state" label="State">
                        <Form.Control
                            type="text"
                            placeholder="State"
                            name="countryState"
                            value={updateMode ? countryState : formData?.countryState}
                            onChange={updateMode ? (e) => setCountryState(e.target.value) : handleChange}
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
                            value={updateMode ? postalCode : formData?.postalCode}
                            onChange={updateMode ? (e) => setPostalCode(e.target.value) : handleChange}
                        />
                    </FloatingLabel>
                </Col>
                <FloatingLabel controlId="country" label="Country">
                    <Form.Control
                        type="text"
                        placeholder="Country"
                        name="country"
                        value={updateMode ? country : formData?.country}
                        onChange={updateMode ? (e) => setCountry(e.target.value) : handleChange}
                        required
                    />
                </FloatingLabel>
            </Row>
        </div>
    );
};

export default StepThree;
