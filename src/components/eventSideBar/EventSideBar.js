/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import ClockCircle from '../../assets/images/ClockCircle.svg';
import location from "../../assets/images/location.svg";
import ArrowRight from "../../assets/images/ArrowRight.svg";
import Follower1 from "../../assets/images/follower1.png";
import './eventSideBar.scss'


const EventSideBar = () => {
    return (
        <div>
            <div class="bg-white p-4 mb-4">
                <div>
                    <div class="d-flex align-items-start gap-3 mb-4">
                        <img src={ClockCircle} class="img-fluid" alt="clock circle" />
                        <div>
                            <h4 class="fs-6 fw-bold text-clr-dark-1">Date and time</h4>
                            <p class=" text-dark2 fs-14 ff-inter lh-22">Tomorrow at 18:00 WEST</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-start gap-3">
                        <img src={location} class="img-fluid" alt="clock circle" />
                        <div>
                            <h4 class="fs-6 fw-bold text-clr-dark-1">Location</h4>
                            <p class=" text-dark2 fs-14 ff-inter lh-22">Persnickety Crane Cafe R. de Oitavos, 2750-374 Cascais, Portugal</p>
                            <a href="#" class="text-clr-egyptian-green fs-12 fw-semiBold ls-1 ff-inter text-decoration-none" rel="noreferrer">
                                View Map
                            </a>
                        </div>
                    </div>

                    <div class="mapouter mt-5">
                        <div class="gmap_canvas">
                            <iframe
                                width="100%"
                                height="120"
                                id="gmap_canvas"
                                src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                frameborder="0"
                                scrolling="no"
                                marginheight="0"
                                marginwidth="0"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white p-4 mb-4">
                <div class="follower">
                    <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                        <p class="fs-18 fw-semiBold ff-inter lh-22 mb-0">Followers (480)</p>
                        <div>
                            <a href="" class="text-clr-egyptian-green fs-12 fw-semiBold text-uppercase ff-inter ls-1 text-decoration-none">
                                See all
                                <span>
                                    <img src={ArrowRight} alt="icon" />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div class="followerImg mt-5 d-flex justify-content-center gap-2 align-items-center flex-wrap">
                        <img src={Follower1} class="img-fluid mb-3" alt="follower" />
                        <img src={Follower1} class="img-fluid mb-3" alt="follower" />
                        <img src={Follower1} class="img-fluid mb-3" alt="follower" />
                        <img src={Follower1} class="img-fluid mb-3" alt="follower" />
                        <img src={Follower1} class="img-fluid mb-3" alt="follower" />
                        <img src={Follower1} class="img-fluid mb-3" alt="follower" />
                        <img src={Follower1} class="img-fluid mb-3" alt="follower" />
                        <img src={Follower1} class="img-fluid mb-3" alt="follower" />
                    </div>
                </div>
            </div>
            <div class="wedged-area p-4 mb-4 ff-inter bg-white">
                <div class="d-flex align-items-center justify-content-between mb-4">
                    <h4 class="fs-18 text-dark1 fw-semiBold mb-0 ">Related Tags</h4>
                </div>
                <div class="category-tags">
                    <a href="#" class="single-category fs-12 lh-15 text-uppercase ls-1 text-dark3 fw-semiBold d-inline-block">
                        Art and Culture
                    </a>
                    <a href="#" class="single-category fs-12 lh-15 text-uppercase ls-1 text-dark3 fw-semiBold d-inline-block">
                        Career and Business
                    </a>
                    <a href="#" class="single-category fs-12 lh-15 text-uppercase ls-1 text-dark3 fw-semiBold d-inline-block">
                        Community and environment
                    </a>
                    <a href="#" class="single-category fs-12 lh-15 text-uppercase ls-1 text-dark3 fw-semiBold d-inline-block">
                        Dancing
                    </a>
                    <a href="#" class="single-category fs-12 lh-15 text-uppercase ls-1 text-dark3 fw-semiBold d-inline-block">
                        Games
                    </a>
                    <a href="#" class="single-category fs-12 lh-15 text-uppercase ls-1 text-dark3 fw-semiBold d-inline-block">
                        Health and Wellbeing
                    </a>
                    <a href="#" class="single-category fs-12 lh-15 text-uppercase ls-1 text-dark3 fw-semiBold d-inline-block">
                        Hobbies & Passion
                    </a>
                    <a href="#" class="single-category fs-12 lh-15 text-uppercase ls-1 text-dark3 fw-semiBold d-inline-block">
                        Identity and Language
                    </a>
                    <a href="#" class="single-category fs-12 lh-15 text-uppercase ls-1 text-dark3 fw-semiBold d-inline-block">
                        Movement and Politics
                    </a>
                    <a href="#" class="single-category fs-12 lh-15 text-uppercase ls-1 text-dark3 fw-semiBold d-inline-block">
                        Music
                    </a>
                    <a href="#" class="single-category fs-12 lh-15 text-uppercase ls-1 text-dark3 fw-semiBold d-inline-block">
                        Parents and Family
                    </a>
                    <a href="#" class="single-category fs-12 lh-15 text-uppercase ls-1 text-dark3 fw-semiBold d-inline-block">
                        Pets and Animals
                    </a>
                </div>
            </div>
        </div>
    );
};

export default EventSideBar;
