import React from 'react';
import { FloatingLabel, Form, Row } from 'react-bootstrap';
import useStepFormContext from '../../hooks/useStepFormContext';

const StepSix = () => {

  const { formData, handleChange } = useStepFormContext();

  const handleAdd = () => {

  }

    return (
      <div className="step-six">
        <h2 className="text-clr-dark-1fs-48">Tags</h2>
        <p className="fs-18 text-clr-dark-3 ff-inter mb-5">
          Improve discoverability of your event by adding tags relevant to the
          subject matter.
        </p>

        <Row className="g-4">
          <FloatingLabel controlId="addTag" label="Add Tag">
            <Form.Control
              type="text"
              placeholder="Add Tag"
              name="tags"
              value={formData?.tags}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
        </Row>
        <button className='mt-4 btn btn-success' type='button' onClick={handleAdd}>ADD</button>
      </div>
    );
};

export default StepSix;