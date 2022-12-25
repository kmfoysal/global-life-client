import React from 'react';
import userImg from '../../assets/images/r-person-img.png'
import Star from '../../assets/images/star.png'
import StarGreen from "../../assets/images/star-green.png";
import StarSmall from "../../assets/images/star-smallpng.png";
import Love from "../../assets/images/love.png";
import ShareIcon from "../../assets/images/share-icon.png";
import Reply from "../../assets/images/Forward.png";
import { Link } from 'react-router-dom';



const EventReview = () => {
    return (
        <div class="blog-review-wrapper py-5">
            <div class="review-header bg-white p-4 d-flex justify-content-between align-items-center mb-4">
                <div class="review-header-left d-flex align-items-center gap-4">
                    <div class="person-img">
                        <img src={userImg} alt="img" className="img-fluid" />
                    </div>
                    <Link class="text-clr-green fw-normal border-bottom border-success" data-bs-toggle="modal" data-bs-target="#SubmitReview">
                        Write a review
                    </Link>
                </div>
                <div class="review-ratting">
                    <ul class="ratting-list d-flex align-items-center gap-2 list-unstyled mb-0">
                        <li class="bg-gray-1 p-2">
                            <img src={Star} alt="icon" />
                        </li>
                        <li class="bg-gray-1 p-2">
                            <img src={Star} alt="icon" />
                        </li>
                        <li class="bg-gray-1 p-2">
                            <img src={Star} alt="icon" />
                        </li>
                        <li class="bg-gray-1 p-2">
                            <img src={Star} alt="icon" />
                        </li>
                        <li class="bg-gray-1 p-2">
                            <img src={Star} alt="icon" />
                        </li>
                    </ul>
                </div>
            </div>
            <div class="progress-wrapper bg-white p-4  mb-4">
                <div class="review-header d-flex justify-content-between align-items-center mb-4 pb-4 border-bottom">
                    <div class="review-header-left d-flex align-items-center gap-3">
                        <div class="person-img">
                            <img src={StarGreen} alt="img" />
                        </div>
                        <h3 class="fs-4 fw-semiBold mb-0">4.8 (230 reviews)</h3>
                    </div>
                    <div class="short d-flex align-items-center gap-4">
                        <div style={{ width: "90px" }}>
                            <p class="fw-medium fs-14 mb-0">Short by</p>
                        </div>
                        <select class="form-select fw-semiBold" aria-label="Default select example">
                            <option selected>Recommended</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                {/* <div class="review-progress">
                    <div class="single-progress mb-4">
                        <div class="form-check d-flex align-items-center gap-2">
                            <div class="">
                                <input class="form-check-input rounded-0" name="check" type="checkbox" value="" id="progress-check1" checked />
                            </div>
                            <label class="form-check-label text-clr-dark-2 fs-14" for="progress-check1">
                                Excellent
                            </label>
                        </div>
                        <div class="progressbar bg-gray-2 position-relative">
                            <div class="progressbar-normal-width w-62 is-check position-absolute top-0 start-0 h-100 bg-dark-4"></div>
                        </div>
                        <div class="progress-counter">
                            <p class="count mb-0 fw-medium text-clr-dark-2">62%</p>
                        </div>
                    </div>
                    <div class="single-progress mb-4">
                        <div class="form-check d-flex align-items-center gap-2">
                            <div class="">
                                <input class="form-check-input rounded-0" name="check" type="checkbox" value="" id="progress-check2" />
                            </div>
                            <label class="form-check-label text-clr-dark-2 fs-14" for="progress-check2">
                                Great
                            </label>
                        </div>
                        <div class="progressbar bg-gray-2 position-relative">
                            <div class="progressbar-normal-width w-26 position-absolute top-0 start-0 h-100 bg-dark-4"></div>
                        </div>
                        <div class="progress-counter">
                            <p class="count mb-0 fw-medium text-clr-dark-2">26%</p>
                        </div>
                    </div>
                    <div class="single-progress mb-4">
                        <div class="form-check d-flex align-items-center gap-2">
                            <div class="">
                                <input class="form-check-input rounded-0" name="check" type="checkbox" value="" id="progress-check3" />
                            </div>
                            <label class="form-check-label text-clr-dark-2 fs-14" for="progress-check4">
                                Average
                            </label>
                        </div>
                        <div class="progressbar bg-gray-2 position-relative">
                            <div class="progressbar-normal-width w-12 position-absolute top-0 start-0 h-100 bg-dark-4"></div>
                        </div>
                        <div class="progress-counter">
                            <p class="count mb-0 fw-medium text-clr-dark-2">12%</p>
                        </div>
                    </div>
                    <div class="single-progress mb-4">
                        <div class="form-check d-flex align-items-center gap-2">
                            <div class="">
                                <input class="form-check-input rounded-0" name="check" type="checkbox" value="" id="progress-check4" />
                            </div>
                            <label class="form-check-label text-clr-dark-2 fs-14" for="progress-check4">
                                Poor
                            </label>
                        </div>
                        <div class="progressbar bg-gray-2 position-relative">
                            <div class="progressbar-normal-width w-6 position-absolute top-0 start-0 h-100 bg-dark-4"></div>
                        </div>
                        <div class="progress-counter">
                            <p class="count mb-0 fw-medium text-clr-dark-2">06%</p>
                        </div>
                    </div>
                    <div class="single-progress mb-4">
                        <div class="form-check d-flex align-items-center gap-2">
                            <div class="">
                                <input class="form-check-input rounded-0" name="check" type="checkbox" value="" id="progress-check4" />
                            </div>
                            <label class="form-check-label text-clr-dark-2 fs-14" for="progress-check4">
                                Bad
                            </label>
                        </div>
                        <div class="progressbar bg-gray-2 position-relative">
                            <div class="progressbar-normal-width w-2 position-absolute top-0 start-0 h-100 bg-dark-4"></div>
                        </div>
                        <div class="progress-counter">
                            <p class="count mb-0 fw-medium text-clr-dark-2">02%</p>
                        </div>
                    </div>
                </div>
                <div class="searchBar">
                    <input type="text" class="form-control border py-2 px-5" placeholder="Search.." />
                </div> */}
            </div>
            <div class="review-wrapper">
                <div class="inner-wrapper bg-white p-4 mb-4">
                    <div class="review-header d-flex justify-content-between border-bottom pb-4 mb-4">
                        <div class="review-header-left d-flex gap-4">
                            <div class="person-img">
                                <img src={userImg} alt="img" />
                            </div>
                            <div>
                                <Link class="fw-semiBold text-clr-dark-2 d-block mb-2">
                                    Vivien Lokossou
                                </Link>
                                <p class="fw-medium country text-clr-dark-2 mb-0 fs-12">France</p>
                            </div>
                        </div>
                        <div class="meta-date">
                            <p class="text-clr-dark-2 fw-medium mb-0">Aug 19, 2022</p>
                        </div>
                    </div>
                    <div class="review-ratting mb-3">
                        <ul class="innerRatting ratting-list d-flex align-items-center gap-1 list-unstyled mb-0">
                            <li class="bg-green">
                                <img src={StarSmall} alt="icon" />
                            </li>
                            <li class="bg-green">
                                <img src={StarSmall} alt="icon" />
                            </li>
                            <li class="bg-green">
                                <img src={StarSmall} alt="icon" />
                            </li>
                            <li class="bg-green">
                                <img src={StarSmall} alt="icon" />
                            </li>
                            <li class="bg-green">
                                <img src={StarSmall} alt="icon" />
                            </li>
                        </ul>
                    </div>
                    <div class="review-info pb-4 border-bottom">
                        <h5 class="review-caption fs-18 text-clr-dark-2 mb-3">Fermentum Venenatis Tortor</h5>
                        <p class="mb-0 text-clr-dark-2">
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div class="share-and-like py-3">
                        <ul class="d-flex align-items-center gap-1 list-unstyled mb-0">
                            <li class="border-end pe-3">
                                <Link class="fw-medium d-flex gap-2 fs-12 text-clr-dark-2 fw-semiBold text-uppercase">
                                    Reply
                                </Link>
                            </li>
                            <li class="border-end px-3">
                                <Link class="fw-medium d-flex align-items-center justify-content-center gap-2 fs-12 text-clr-dark-2 fw-semiBold text-uppercase text-decoration-none">
                                    <img src={Love} alt="icon" class="flex-shirnk-0" />
                                    Like
                                </Link>
                            </li>
                            <li class="px-3">
                                <Link class="fw-medium d-flex align-items-center justify-content-center gap-2 fs-12 text-clr-dark-2 fw-semiBold text-uppercase" text-decoration-none>
                                    <img src={ShareIcon} alt="icon" class="flex-shirnk-0" />
                                    Share
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div class="is-reply-massage p-3 border-start border-2 border-info">
                        <div class="d-flex justify-content-between">
                            <div class="d-flex gap-4">
                                <div class="person-img">
                                    <img src={Reply} alt="img" />
                                </div>
                                <div class="">
                                    <Link class="fw-semiBold text-clr-dark-2 d-block mb-2 fs-14" text-decoration-none>
                                        Reply from Satoshi Nakamoto
                                    </Link>
                                    <p class="fw-medium text-clr-dark-2 mb-0 fs-14">
                                        Hearing from happy customers like you makes us feel great. <br class="d-none d-xl-inline" /> Thank you for sharing your experience! If you need further help,
                                        reach out any time!
                                    </p>
                                </div>
                            </div>
                            <div class="meta-date">
                                <p class="text-clr-dark-2 fw-medium mb-0 fs-14">Aug 19, 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="inner-wrapper bg-white p-4 mb-4">
                    <div class="review-header d-flex justify-content-between border-bottom pb-4 mb-4">
                        <div class="review-header-left d-flex gap-4">
                            <div class="person-img">
                                <img src={userImg} alt="img" />
                            </div>
                            <div class="">
                                <Link class="fw-semiBold text-clr-dark-2 d-block mb-2 text-decoration-none">
                                    Vivien Lokossou
                                </Link>
                                <p class="fw-medium country text-clr-dark-2 mb-0 fs-12">Australia</p>
                            </div>
                        </div>
                        <div class="meta-date">
                            <p class="text-clr-dark-2 fw-medium mb-0">Aug 19, 2022</p>
                        </div>
                    </div>
                    <div class="review-ratting mb-3">
                        <ul class="innerRatting ratting-list d-flex align-items-center gap-1 list-unstyled mb-0">
                            <li class="bg-yellow">
                                <img src={StarSmall} alt="icon" />
                            </li>
                            <li class="bg-yellow">
                                <img src={StarSmall} alt="icon" />
                            </li>
                            <li class="bg-yellow">
                                <img src={StarSmall} alt="icon" />
                            </li>
                            <li class="bg-gray-2">
                                <img src={StarSmall} alt="icon" />
                            </li>
                            <li class="bg-gray-2">
                                <img src={StarSmall} alt="icon" />
                            </li>
                        </ul>
                    </div>
                    <div class="review-info pb-4 border-bottom">
                        <h5 class="review-caption fs-18 text-clr-dark-2 mb-3">Fermentum Venenatis Tortor</h5>
                        <p class="mb-0 text-clr-dark-2">
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div class="share-and-like pt-3">
                        <ul class="d-flex align-items-center gap-1 list-unstyled mb-0">
                            <li class="border-end pe-3">
                                <Link class="fw-medium d-flex gap-2 fs-12 text-clr-dark-2 fw-semiBold text-uppercase text-decoration-none">
                                    Reply
                                </Link>
                            </li>
                            <li class="border-end px-3">
                                <Link class="fw-medium d-flex align-items-center justify-content-center gap-2 fs-12 text-clr-dark-2 fw-semiBold text-uppercase text-decoration-none">
                                    <img src={Love} alt="icon" class="flex-shirnk-0" />
                                    Like
                                </Link>
                            </li>
                            <li class="px-3">
                                <Link class="fw-medium d-flex align-items-center justify-content-center gap-2 fs-12 text-clr-dark-2 fw-semiBold text-uppercase text-decoration-none">
                                    <img src={ShareIcon} alt="icon" class="flex-shirnk-0" />
                                    Share
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="inner-wrapper bg-white p-4 mb-4">
                    <div class="review-header d-flex justify-content-between border-bottom pb-4 mb-4">
                        <div class="review-header-left d-flex gap-4">
                            <div class="person-img">
                                <img src={userImg} alt="img" />
                            </div>
                            <div class="">
                                <Link class="fw-semiBold text-clr-dark-2 d-block mb-2">
                                    Vivien Lokossou
                                </Link>
                                <p class="fw-medium country text-clr-dark-2 mb-0 fs-12">Australia</p>
                            </div>
                        </div>
                        <div class="meta-date">
                            <p class="text-clr-dark-2 fw-medium mb-0">Aug 19, 2022</p>
                        </div>
                    </div>
                    <div class="review-ratting mb-3">
                        <ul class="innerRatting ratting-list d-flex align-items-center gap-1 list-unstyled mb-0">
                            <li class="bg-red">
                                <img src={StarSmall} alt="icon" />
                            </li>
                            <li class="bg-gray-2">
                                <img src={StarSmall} alt="icon" />
                            </li>
                            <li class="bg-gray-2">
                                <img src={StarSmall} alt="icon" />
                            </li>
                            <li class="bg-gray-2">
                                <img src={StarSmall} alt="icon" />
                            </li>
                            <li class="bg-gray-2">
                                <img src={StarSmall} alt="icon" />
                            </li>
                        </ul>
                    </div>
                    <div class="review-info pb-4 border-bottom">
                        <h5 class="review-caption fs-18 text-clr-dark-2 mb-3">Inceptos</h5>
                        <p class="mb-0 text-clr-dark-2">
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div class="share-and-like pt-3">
                        <ul class="d-flex align-items-center gap-1 list-unstyled mb-0">
                            <li class="border-end pe-3">
                                <Link class="fw-medium d-flex gap-2 fs-12 text-clr-dark-2 fw-semiBold text-uppercase text-decoration-none">
                                    Reply
                                </Link>
                            </li>
                            <li class="border-end px-3">
                                <Link class="fw-medium d-flex align-items-center justify-content-center gap-2 fs-12 text-clr-dark-2 fw-semiBold text-uppercase text-decoration-none">
                                    <img src={Love} alt="icon" class="flex-shirnk-0" />
                                    Like
                                </Link>
                            </li>
                            <li class="px-3">
                                <Link class="fw-medium d-flex align-items-center justify-content-center gap-2 fs-12 text-clr-dark-2 fw-semiBold text-uppercase text-decoration-none">
                                    <img src={ShareIcon} alt="icon" class="flex-shirnk-0" />
                                    Share
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="event-details-right d-flex justify-content-center mt-5">
                <button class="btn btn-green ls-1 fs-12 text-uppercase rounded-0 fw-normal text-white mb-3 border-0 bg-green ff-inter w-auto px-5" type="button">
                    Read more
                </button>
            </div>
        </div>
    );
};

export default EventReview;