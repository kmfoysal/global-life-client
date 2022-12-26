import React, { useState } from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import useStepFormContext from '../../hooks/useStepFormContext';

const StepFour = ({ currentData }) => {

    const [startDate, setStartDate] = useState(currentData?.startDate);
    const [endDate, setEndDate] = useState(currentData?.endDate);
    const [startTime, setStartTime] = useState(currentData?.startTime);
    const [endTime, setEndTime] = useState(currentData?.endTime);
    const [cost, setCost] = useState(currentData?.cost);

    const { formData, handleChange, updateMode } = useStepFormContext();

    return (
        <div className="step-four">
            <h2 className="text-clr-dark-1fs-48">Date, Time and Costs</h2>
            <p className="fs-18 text-clr-dark-3 ff-inter mb-5">Tell event-goers when your event starts and ends so they can make plans to attend.</p>

            <Row className="g-4">
                <Col md>
                    <FloatingLabel controlId="eventStart" label="Event Starts">
                        <Form.Control
                            type="date"
                            placeholder="Event Starts"
                            name="startDate"
                            value={formData?.startDate}
                            onChange={updateMode ? (e) => setStartDate(e.target.value) : handleChange}
                            required
                        />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="eventEnd" label="Event End">
                        <Form.Control
                            type="date"
                            placeholder="Event End"
                            name="endDate"
                            value={updateMode ? endDate : formData?.endDate}
                            onChange={updateMode ? (e) => setEndDate(e.target.value) : handleChange}
                            required
                        />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="startTime" label="Start Time">
                        <Form.Control
                            type="time"
                            placeholder="Start Time"
                            name="startTime"
                            value={updateMode ? startTime : formData?.startTime}
                            onChange={updateMode ? (e) => setStartTime(e.target.value) : handleChange}
                            required
                        />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="endTime" label="Event End">
                        <Form.Control
                            type="time"
                            placeholder="Event End"
                            name="endTime"
                            value={updateMode ? endTime : formData?.endTime}
                            onChange={updateMode ? (e) => setEndTime(e.target.value) : handleChange}
                            required
                        />
                    </FloatingLabel>
                </Col>
                <FloatingLabel controlId="cost" label="Individual Cost">
                    <Form.Control
                        type="number"
                        placeholder="Individual Cost"
                        name="cost"
                        value={updateMode ? cost : formData?.cost}
                        onChange={updateMode ? (e) => setCost(e.target.value) : handleChange}
                    />
                </FloatingLabel>
            </Row>
        </div>
    );
};

export default StepFour;