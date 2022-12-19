import React from 'react';
import { FloatingLabel, Form, Row } from 'react-bootstrap';
import useStepFormContext from '../../hooks/useStepFormContext';

const StepFive = () => {

  const { formData, handleChange } = useStepFormContext();

    return (
        <div className="step-five">
            <h2 className="text-clr-dark-1fs-48">Photos</h2>
            <p className="fs-18 text-clr-dark-3 ff-inter mb-5">We’ll review every photo before it goes live on your event page.</p>

            <Row className="g-4">
                <FloatingLabel controlId="uploadImg" label="Upload Image">
                    <Form.Control type="file" name="photos" placeholder="Upload Image" onChange={handleChange} multiple />
                </FloatingLabel>
                <FloatingLabel controlId="videoLink" label="Video Link">
                    <Form.Control type="text" placeholder="Video Link" name="videoLink" value={formData?.videoLink} onChange={handleChange} />
                </FloatingLabel>
            </Row>
        </div>
    );
};

export default StepFive;