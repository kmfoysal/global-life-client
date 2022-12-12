import React, { useState } from 'react';
import useStepFormContext from '../../hooks/useStepFormContext';
import CategoryModal from '../categoryModal/CategoryModal';
import './step.scss';

const StepTwo = () => {

    const [showCategory, setShowCategory] = useState(false);

    const handleClose = () => setShowCategory(false);

    const handleShow = () => {
        setShowCategory(true);
    };

    const { formData, handleChange } = useStepFormContext();


    return (
        <div className="step-two">
            <h2 className="text-clr-dark-1fs-48">Category</h2>
            <p className="fs-18 text-clr-dark-3 ff-inter mb-5">What will your event focus on?</p>
            <button type="button" className="category-btn" onClick={handleShow}>
                Select Category
            </button>

            <div>
                <input
                    type="text"
                    className="form-control ps-0 mt-4"
                    placeholder="Add an Additional category (Optional)"
                    name="addCategory"
                    value={formData?.catRadio}
                    // onChange={handleChange}
                />
            </div>

            <div className="category-modal">
                <CategoryModal showCategory={showCategory} handleClose={handleClose} />
            </div>
        </div>
    );
};

export default StepTwo;