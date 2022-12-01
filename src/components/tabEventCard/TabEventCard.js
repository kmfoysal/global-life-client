import React from 'react';
import EventImg1 from '../../assets/images/event-img-1.png';
import './tabEventCard.scss';

const TabEventCard = () => {
    return (
        <div className="tabEventCard">
            <div className="content">
                <div className="info">
                    <p className="event-category">Event</p>
                    <p className='status'>
                        <span>€48.30</span> | <span>Tomorrow at 18:00</span> | <span>480 Followers</span>
                    </p>
                    <h4 className='title'>International exchange (Only Japanese language)</h4>
                    <p className='address'>642, R. Marquês Minas 3, Cascais, Portugal</p>
                </div>
                <div className="img-box">
                    <img src={EventImg1} alt="img" />
                </div>
            </div>

            <div>
                <button className="card-footer-btn me-3">
                    <span>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.29568 3.73769L11.2599 5.69801M10.129 2.906C10.6714 2.36467 11.5508 2.36467 12.0932 2.906C12.6356 3.44732 12.6356 4.32499 12.0932 4.86632L4.44445 12.5H2.5V10.52L10.129 2.906Z"
                                stroke="#4D585F"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </span>
                    EDIT
                </button>

                <button className="card-footer-btn">
                    <span>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.27344 2.69531H5.15625C5.2207 2.69531 5.27344 2.64258 5.27344 2.57812V2.69531H9.72656V2.57812C9.72656 2.64258 9.7793 2.69531 9.84375 2.69531H9.72656V3.75H10.7812V2.57812C10.7812 2.06104 10.3608 1.64062 9.84375 1.64062H5.15625C4.63916 1.64062 4.21875 2.06104 4.21875 2.57812V3.75H5.27344V2.69531ZM12.6562 3.75H2.34375C2.08447 3.75 1.875 3.95947 1.875 4.21875V4.6875C1.875 4.75195 1.92773 4.80469 1.99219 4.80469H2.87695L3.23877 12.4658C3.26221 12.9653 3.67529 13.3594 4.1748 13.3594H10.8252C11.3262 13.3594 11.7378 12.9668 11.7612 12.4658L12.123 4.80469H13.0078C13.0723 4.80469 13.125 4.75195 13.125 4.6875V4.21875C13.125 3.95947 12.9155 3.75 12.6562 3.75ZM10.7124 12.3047H4.2876L3.93311 4.80469H11.0669L10.7124 12.3047Z"
                                fill="#4D585F"
                            />
                        </svg>
                    </span>
                    DELETE
                </button>
            </div>
        </div>
    );
};

export default TabEventCard;