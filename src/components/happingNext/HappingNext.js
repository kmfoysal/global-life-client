import React from "react";
import { Link } from "react-router-dom";
import eventImg from "../../assets/images/event-img-1.png";
import "./happingNext.scss";

const HappingNext = ({event}) => {

    const PF = "https://globallife-api.onrender.com/images/";

    const { title, streetAddress, photos, cost, startDate, startTime, postType,desc } = event;


    return (
        <div className="col-xl-3">
            <Link className="card border-0 text-decoration-none">
                <img src={PF + photos} className="card-img-top img-fluid" alt="event-img" />
                <p className={`event-category category-position ${postType === "Experience" ? "bg-sky-blue" : "bg-lemon-yellow"}`}>{postType}</p>
                <div className="card-body">
                    <p className="ff-inter fs-13 text-clr-dark-2 fw-medium mt-4 mb-2">
                        <span>€{cost}</span>
                        <span className="mx-2 text-clr-dark-4">|</span>
                        <span>
                            {startDate} at {startTime}
                        </span>
                        <span className="mx-2 text-clr-dark-4">|</span>
                        <span>480 Followers</span>
                    </p>
                    <h5 className="card-title fs-24 fw-medium lh-34 mt-3">{title}</h5>
                    <p className="card-text fs-14 text-dark2 lh-22 ff-inter">{streetAddress}</p>
                    <div className="ff-inter readMore d-flex align-items-center justify-content-start text-dark3 text-decoration-none py-1 fs-12 fw-semiBold">
                        View Details
                        <span className="ps-1">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.7295 7.14551L7.19531 2.34229C7.15283 2.30566 7.09863 2.28516 7.0415 2.28516H5.74512C5.63672 2.28516 5.58691 2.41992 5.66895 2.49023L10.7988 6.94336H2.22656C2.16211 6.94336 2.10938 6.99609 2.10938 7.06055V7.93945C2.10938 8.00391 2.16211 8.05664 2.22656 8.05664H10.7974L5.66748 12.5098C5.58545 12.5815 5.63525 12.7148 5.74365 12.7148H7.08398C7.11182 12.7148 7.13965 12.7046 7.16016 12.6855L12.7295 7.85449C12.7802 7.8104 12.8209 7.75593 12.8487 7.69478C12.8766 7.63362 12.891 7.5672 12.891 7.5C12.891 7.4328 12.8766 7.36638 12.8487 7.30522C12.8209 7.24407 12.7802 7.1896 12.7295 7.14551Z"
                                    fill="#0A8270"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default HappingNext;
