import React, { useState } from 'react';
import useStepFormContext from '../../hooks/useStepFormContext';
import CategoryModal from '../categoryModal/CategoryModal';
import './step.scss';

const StepTwo = ({currentData}) => {

    const [showCategory, setShowCategory] = useState(false);

    // For Updating Value 
    const [category, setCategory] = useState(currentData?.category);
// ---------------------------------------------------------------

    // const handleClose = () => setShowCategory(false);

    // const handleShow = () => {
    //     setShowCategory(true);
    // };

    const { formData, updateMode, handleChange } = useStepFormContext();


    return (
        <div className="step-two">
            <h2 className="text-clr-dark-1fs-48">Category</h2>
            <p className="fs-18 text-clr-dark-3 ff-inter mb-5">What will your event focus on?</p>

            <div className="category-modal">
                <CategoryModal setCategory={setCategory} currentData={currentData} />
            </div>

            <div>
                <input
                    type="text"
                    className="form-control ps-0 mt-4"
                    placeholder="Add an Additional category (Optional)"
                    name="addCategory"
                    defaultValue={formData?.category }
                    // onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default StepTwo;