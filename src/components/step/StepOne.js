import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import useStepFormContext from '../../hooks/useStepFormContext';
import TextEditor from '../textEditor/TextEditor';
import './step.scss';

const StepOne = () => {

    const { formData, handleChange } = useStepFormContext();

    return (
        <div className="step-one">
            <h2 className="text-clr-dark-1fs-48">Description</h2>
            <div className="mt-5">
                <h5 className="fs-18 ff-inter fw-semibold text-clr-dark-1">Title</h5>
                <p className="text-clr-dark-3 ff-inter mb-4">Let’s give your event a name</p>
                <div className="title-input-box">
                    <label>TITLE</label>
                    <input type="text" class="custom-form" placeholder="Title goes here" max={10} name="title" value={formData?.title} onChange={handleChange} required />
                </div>
                <p className="fs-12 ff-inter text-clr-dark-4 mt-1">0/60</p>
            </div>
            <div className="mt-5">
                <h5 className="fs-18 ff-inter fw-semibold text-clr-dark-1">Description</h5>
                <p className="text-clr-dark-3 ff-inter mb-4">Add more details to your event.</p>

                <div className="mb-5">
                    <FloatingLabel controlId="floatingTextarea2" label="Write description here">
                        <Form.Control as="textarea" placeholder="Leave a comment here"  style={{ height: "200px" }} />
                    </FloatingLabel>
                </div>

                <TextEditor />
            </div>
        </div>
    );
};

export default StepOne;