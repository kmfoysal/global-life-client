import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import StepCompletedIcon from '../../assets/images/step-completed.png';
import useStepFormContext from "../../hooks/useStepFormContext";
import StepFive from "../step/StepFive";
import StepFour from "../step/StepFour";
import StepOne from "../step/StepOne";
import StepSix from "../step/StepSix";
import StepThree from "../step/StepThree";
import StepTwo from "../step/StepTwo";




import "./stepFormModal.scss";

const StepFormModal = ({
  showForm,
  setShowForm,
  handleCloseForm,
  handleShowForm,
}) => {

  const [stepNumber, setStepNumber] = useState(1);
  
  const { formData, canSubmit } = useStepFormContext();

    const backBtn = () => {
        let step = stepNumber;
        setStepNumber(step-1)
    }

    const nextBtn = () => {
        let step = stepNumber;
        setStepNumber(step + 1);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

    const steps = [
        {
            step: 1,
            title: "Description",
        },
        {
            step: 2,
            title: "Category",
        },
        {
            step: 3,
            title: "Location",
        },
        {
            step: 4,
            title: "Date, Time and Costs",
        },
        {
            step: 5,
            title: "Photos",
        },
        {
            step: 6,
            title: "Tags",
        },
    ];
    
  return (
    <div>
      <Modal
        show={showForm}
        onHide={handleCloseForm}
        centered
        className="form-modal"
      >
        <button
          className="close-btn border-0 bg-transparent"
          onClick={handleCloseForm}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.21425 8L15.3666 0.666406C15.4697 0.544531 15.383 0.359375 15.2236 0.359375H13.3533C13.2432 0.359375 13.1377 0.408594 13.065 0.492969L7.99081 6.54219L2.91659 0.492969C2.84628 0.408594 2.74081 0.359375 2.62831 0.359375H0.758C0.598625 0.359375 0.511906 0.544531 0.615031 0.666406L6.76738 8L0.615031 15.3336C0.591931 15.3608 0.57711 15.394 0.57233 15.4293C0.56755 15.4647 0.57301 15.5006 0.588063 15.533C0.603116 15.5653 0.627129 15.5926 0.657252 15.6117C0.687375 15.6308 0.722341 15.6408 0.758 15.6406H2.62831C2.73847 15.6406 2.84394 15.5914 2.91659 15.507L7.99081 9.45781L13.065 15.507C13.1353 15.5914 13.2408 15.6406 13.3533 15.6406H15.2236C15.383 15.6406 15.4697 15.4555 15.3666 15.3336L9.21425 8Z"
              fill="white"
            />
          </svg>
        </button>
        <div className="step-form">
          <div className="step-side-bar">
            <button className="border-0 bg-transparent d-flex align-items-center gap-2">
              <span>
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7728 4.94336H2.20205L7.33193 0.490234C7.41396 0.418457 7.36416 0.285156 7.25576 0.285156H5.95937C5.90224 0.285156 5.84804 0.305664 5.80556 0.342285L0.269917 5.14551C0.219217 5.18946 0.178555 5.24379 0.150688 5.30482C0.122821 5.36586 0.108398 5.43217 0.108398 5.49927C0.108398 5.56636 0.122821 5.63268 0.150688 5.69371C0.178555 5.75475 0.219217 5.80908 0.269917 5.85303L5.83779 10.6855C5.85976 10.7046 5.88613 10.7148 5.91396 10.7148H7.25429C7.36269 10.7148 7.41249 10.5801 7.33046 10.5098L2.20205 6.05664H10.7728C10.8373 6.05664 10.89 6.00391 10.89 5.93945V5.06055C10.89 4.99609 10.8373 4.94336 10.7728 4.94336Z"
                    fill="#0A8270"
                  />
                </svg>
              </span>
              Save and Exit
            </button>
            <h4 className="fs-4 ff-inter fw-medium mb-4">
              Create/Submit event
            </h4>

            <h5>{stepNumber}/6</h5>
            <div>
              {/* <!--begin::Nav--> */}
              <div class="stepper-nav flex-cente">
                {steps.map((item) => {
                  return (
                    <div
                      class={`stepper-item ${
                        item.step === stepNumber && "active"
                      } ${item.step < stepNumber && "completed"}`}
                      key={item.step}
                    >
                      <div class="stepper-line w-40px"></div>
                      <div class="stepper-icon w-40px h-40px">
                        {item.step < stepNumber && (
                          <img
                            src={StepCompletedIcon}
                            alt="icon"
                            className="img-fluid"
                          />
                        )}
                        {item.step >= stepNumber && (
                          <span class="stepper-number">{item?.step}</span>
                        )}
                      </div>
                      <div class="stepper-label ms-3">
                        <h3 class="stepper-title">{item?.title}</h3>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* <!--end::Nav--> */}
            </div>
          </div>
          <form className="step-info" onSubmit={handleSubmit}>
            <div className="step-info-details">
              {stepNumber === 1 && <StepOne />}
              {stepNumber === 2 && <StepTwo />}
              {stepNumber === 3 && <StepThree />}
              {stepNumber === 4 && <StepFour />}
              {stepNumber === 5 && <StepFive />}
              {stepNumber === 6 && <StepSix />}
            </div>
            <div className="step-info-footer">
              {stepNumber > 1 && (
                <Link onClick={backBtn} className="minimalBtn">
                  Back
                </Link>
              )}
              {stepNumber < 6 ? (
                <Link className="fillBtn" onClick={nextBtn}>
                  Continue
                  <span>
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.7295 5.14551L5.19531 0.342285C5.15283 0.305664 5.09863 0.285156 5.0415 0.285156H3.74512C3.63672 0.285156 3.58691 0.419922 3.66895 0.490234L8.79883 4.94336H0.226562C0.162109 4.94336 0.109375 4.99609 0.109375 5.06055V5.93945C0.109375 6.00391 0.162109 6.05664 0.226562 6.05664H8.79736L3.66748 10.5098C3.58545 10.5815 3.63525 10.7148 3.74365 10.7148H5.08398C5.11182 10.7148 5.13965 10.7046 5.16016 10.6855L10.7295 5.85449C10.7802 5.8104 10.8209 5.75593 10.8487 5.69478C10.8766 5.63362 10.891 5.5672 10.891 5.5C10.891 5.4328 10.8766 5.36638 10.8487 5.30522C10.8209 5.24407 10.7802 5.1896 10.7295 5.14551Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </Link>
              ) : (
                <button type="submit" className="fillBtn" disabled={!canSubmit}>
                  Create an Event
                  <span>
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.7295 5.14551L5.19531 0.342285C5.15283 0.305664 5.09863 0.285156 5.0415 0.285156H3.74512C3.63672 0.285156 3.58691 0.419922 3.66895 0.490234L8.79883 4.94336H0.226562C0.162109 4.94336 0.109375 4.99609 0.109375 5.06055V5.93945C0.109375 6.00391 0.162109 6.05664 0.226562 6.05664H8.79736L3.66748 10.5098C3.58545 10.5815 3.63525 10.7148 3.74365 10.7148H5.08398C5.11182 10.7148 5.13965 10.7046 5.16016 10.6855L10.7295 5.85449C10.7802 5.8104 10.8209 5.75593 10.8487 5.69478C10.8766 5.63362 10.891 5.5672 10.891 5.5C10.891 5.4328 10.8766 5.36638 10.8487 5.30522C10.8209 5.24407 10.7802 5.1896 10.7295 5.14551Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </button>
              )}
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default StepFormModal;
