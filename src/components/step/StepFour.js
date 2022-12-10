import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';

const StepFour = () => {
    return (
      <form className="step-four">
        <h2 className="text-clr-dark-1fs-48">Date, Time and Costs</h2>
        <p className="fs-18 text-clr-dark-3 ff-inter mb-5">
          Tell event-goers when your event starts and ends so they can make
          plans to attend.
        </p>

        <Row className="g-4">
          <Col md>
            <FloatingLabel controlId="eventStart" label="Event Starts">
              <Form.Control type="date" placeholder="Event Starts" />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel controlId="eventEnd" label="Event End">
              <Form.Control type="date" placeholder="Event End" />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel controlId="startTime" label="Start Time">
              <Form.Control type="time" placeholder="Start Time" />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel controlId="endTime" label="Event End">
              <Form.Control type="time" placeholder="Event End" />
            </FloatingLabel>
          </Col>
        </Row>
      </form>
    );
};

export default StepFour;