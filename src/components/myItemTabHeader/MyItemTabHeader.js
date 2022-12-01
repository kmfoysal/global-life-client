import React from 'react';
import { Link } from 'react-router-dom';
import './myItemTabHeader.scss';

const MyItemTabHeader = () => {
    return (
        <div>
            <div class="events-area-header">
                <div class="d-flex align-items-center justify-content-between flex-wrap pb-2">
                    <h4 class="fs-24 lh-34 fw-medium text-dark1 mb-0">What's happening?</h4>
                    <button class="yellow-btn fs-12 lh-15 fw-semiBold text-uppercase ls-1 text-dark1 bg-yellow ff-inter d-flex align-items-center gap-2 border-0">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.06055 2.22656H7.93945C8.01758 2.22656 8.05664 2.26562 8.05664 2.34375V12.6562C8.05664 12.7344 8.01758 12.7734 7.93945 12.7734H7.06055C6.98242 12.7734 6.94336 12.7344 6.94336 12.6562V2.34375C6.94336 2.26562 6.98242 2.22656 7.06055 2.22656Z"
                                fill="#1A2227"
                            />
                            <path
                                d="M2.57812 6.94336H12.4219C12.5 6.94336 12.5391 6.98242 12.5391 7.06055V7.93945C12.5391 8.01758 12.5 8.05664 12.4219 8.05664H2.57812C2.5 8.05664 2.46094 8.01758 2.46094 7.93945V7.06055C2.46094 6.98242 2.5 6.94336 2.57812 6.94336Z"
                                fill="#1A2227"
                            />
                        </svg>

                        <span>Create an event/experience</span>
                    </button>
                </div>
                <div class="events-filter-area d-flex align-items-center justify-content-between mt-3 pb-4">
                    <div class="d-flex align-items-center gap-2">
                        <div class="header event-filter-all-btn">
                            <div class="grid-item d-flex align-items-center justify-content-start">
                                <div class="header-right-catalog me-sm-2">
                                    <div class="dropdown">
                                        <Link
                                            class="menu-item btn btn-authInfo is-dropdown-toggle dropdown-toggle d-flex align-items-center text-start gap-1 gap-xxl-1 position-relative"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <span class="fw-semiBold fs-12 ff-inter d-none d-lg-block mb-0 text-uppercase text-dark2">Any Rating</span>
                                            <span class="user-img flex-shrink-0 mb-1">
                                                <img src="assets/img/user-1.png" alt="" class="img-fluid" />
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.9494 3.75H11.8508C11.7761 3.75 11.7058 3.78662 11.6618 3.84668L7.50019 9.58301L3.33856 3.84668C3.29462 3.78662 3.22431 3.75 3.1496 3.75H2.05097C1.95575 3.75 1.90009 3.8584 1.95575 3.93604L7.12079 11.0566C7.30829 11.3145 7.69208 11.3145 7.87812 11.0566L13.0432 3.93604C13.1003 3.8584 13.0446 3.75 12.9494 3.75V3.75Z"
                                                        fill="#1A2227"
                                                    />
                                                </svg>
                                            </span>
                                        </Link>

                                        <div class="notify-dropdown-menu dropdown-menu px-0 py-0 position-absolute">
                                            <ul class="dropdown-list-group list-group list-group-flush px-0 py-0 list-unstyled">
                                                <li class="list-group-item">
                                                    <Link class="list-group-item-linkable text-dark2 ff-inter fs-12 fw-medium text-uppercase ls-2">
                                                        All
                                                    </Link>
                                                </li>
                                                <li class="list-group-item">
                                                    <Link class="list-group-item-linkable text-dark2 ff-inter fs-12 fw-medium text-uppercase ls-2">
                                                        Experience
                                                    </Link>
                                                </li>
                                                <li class="list-group-item">
                                                    <Link class="list-group-item-linkable text-dark2 ff-inter fs-12 fw-medium text-uppercase ls-2 d-block">
                                                        Events
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="reset-filters-btn">
                            <button class="fs-12 lh-15 text-green ff-inter ls-1 fw-semiBold text-uppercase p-2 hover-color border-0 bg-transparent">Reset filters</button>
                        </div>
                    </div>

                    <div class="">
                        <div class="header event-filter-all-btn relevance-btn">
                            <div class="grid-item d-flex align-items-center justify-content-start">
                                <div class="header-right-catalog me-sm-2">
                                    <div class="dropdown">
                                        <Link
                                            class="menu-item btn btn-authInfo is-dropdown-toggle dropdown-toggle d-flex align-items-center text-start gap-1 gap-xxl-1 position-relative bg-gray-2"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <span class="fw-semiBold fs-12 ff-inter d-none d-lg-block mb-0 text-uppercase text-dark2">Relevance</span>
                                            <span class="user-img flex-shrink-0 mb-1">
                                                <img src="assets/img/user-1.png" alt="" class="img-fluid" />
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.9494 3.75H11.8508C11.7761 3.75 11.7058 3.78662 11.6618 3.84668L7.50019 9.58301L3.33856 3.84668C3.29462 3.78662 3.22431 3.75 3.1496 3.75H2.05097C1.95575 3.75 1.90009 3.8584 1.95575 3.93604L7.12079 11.0566C7.30829 11.3145 7.69208 11.3145 7.87812 11.0566L13.0432 3.93604C13.1003 3.8584 13.0446 3.75 12.9494 3.75V3.75Z"
                                                        fill="#1A2227"
                                                    />
                                                </svg>
                                            </span>
                                        </Link>

                                        <div class="notify-dropdown-menu dropdown-menu px-0 py-0 position-absolute">
                                            <ul class="dropdown-list-group list-group list-group-flush px-0 py-0 list-unstyled">
                                                <li class="list-group-item">
                                                    <Link class="list-group-item-linkable text-dark2 ff-inter fs-12 fw-medium text-uppercase ls-2 d-block">Date</Link>
                                                </li>
                                                <li class="list-group-item">
                                                    <Link class="list-group-item-linkable text-dark2 ff-inter fs-12 fw-medium text-uppercase ls-2 d-block">Relevance</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyItemTabHeader;