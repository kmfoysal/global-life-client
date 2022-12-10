import React from 'react';
import TextEditor from '../textEditor/TextEditor';
import './step.scss';

const StepOne = () => {
    return (
        <form className="step-one">
            <h2 className="text-clr-dark-1fs-48">Description</h2>
            <div className="mt-5">
                <h5 className="fs-18 ff-inter fw-semibold text-clr-dark-1">Title</h5>
                <p className="text-clr-dark-3 ff-inter mb-4">Let’s give your event a name</p>
                <div className="title-input-box">
                    <label>TITLE</label>
                    <input type="text" class="custom-form" placeholder="Title goes here" max={10} />
                </div>
                <p className="fs-12 ff-inter text-clr-dark-4 mt-1">0/60</p>
            </div>
            <div className="mt-5">
                <h5 className="fs-18 ff-inter fw-semibold text-clr-dark-1">Description</h5>
                <p className="text-clr-dark-3 ff-inter mb-4">Add more details to your event.</p>
                <TextEditor />
            </div>
        </form>
    );
};

export default StepOne;