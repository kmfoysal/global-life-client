import React from 'react';
import { Link } from 'react-router-dom';
import Reply from "../../assets/images/Forward.png";
import Love from "../../assets/images/love.png";
import userImg from '../../assets/images/r-person-img.png';
import ShareIcon from "../../assets/images/share-icon.png";
import StarGreen from "../../assets/images/star-green.png";
import StarSmall from "../../assets/images/star-smallpng.png";
import Star from '../../assets/images/star.png';
import AddReviewModal from '../addReviewModal/AddReviewModal';



const EventReview = ({ singleDetails }) => {
  return (
    <div className="blog-review-wrapper py-5">
      <div className="review-header bg-white p-4 d-flex justify-content-between align-items-center mb-4">
        <div className="review-header-left d-flex align-items-center gap-4">
          <div className="person-img">
            <img src={userImg} alt="img" className="img-fluid" />
          </div>
          {/* <Link className="text-clr-green fw-normal border-bottom border-success" data-bs-toggle="modal" data-bs-target="#SubmitReview">
                        Write a review
                    </Link> */}
          <AddReviewModal singleDetails={singleDetails} />
        </div>
        <div className="review-ratting">
          <ul className="ratting-list d-flex align-items-center gap-2 list-unstyled mb-0">
            <li className="bg-gray-1 p-2">
              <img src={Star} alt="icon" />
            </li>
            <li className="bg-gray-1 p-2">
              <img src={Star} alt="icon" />
            </li>
            <li className="bg-gray-1 p-2">
              <img src={Star} alt="icon" />
            </li>
            <li className="bg-gray-1 p-2">
              <img src={Star} alt="icon" />
            </li>
            <li className="bg-gray-1 p-2">
              <img src={Star} alt="icon" />
            </li>
          </ul>
        </div>
      </div>
      <div className="progress-wrapper bg-white p-4  mb-4">
        <div className="review-header d-flex justify-content-between align-items-center mb-4 pb-4 border-bottom">
          <div className="review-header-left d-flex align-items-center gap-3">
            <div className="person-img">
              <img src={StarGreen} alt="img" />
            </div>
            <h3 className="fs-4 fw-semiBold mb-0">4.8 (230 reviews)</h3>
          </div>
          <div className="short d-flex align-items-center gap-4">
            <div style={{ width: "90px" }}>
              <p className="fw-medium fs-14 mb-0">Short by</p>
            </div>
            <select
              className="form-select fw-semiBold"
              aria-label="Default select example"
            >
              <option selected>Recommended</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        {/* <div className="review-progress">
                    <div className="single-progress mb-4">
                        <div className="form-check d-flex align-items-center gap-2">
                            <div className="">
                                <input className="form-check-input rounded-0" name="check" type="checkbox" value="" id="progress-check1" checked />
                            </div>
                            <label className="form-check-label text-clr-dark-2 fs-14" htmlFor="progress-check1">
                                Excellent
                            </label>
                        </div>
                        <div className="progressbar bg-gray-2 position-relative">
                            <div className="progressbar-normal-width w-62 is-check position-absolute top-0 start-0 h-100 bg-dark-4"></div>
                        </div>
                        <div className="progress-counter">
                            <p className="count mb-0 fw-medium text-clr-dark-2">62%</p>
                        </div>
                    </div>
                    <div className="single-progress mb-4">
                        <div className="form-check d-flex align-items-center gap-2">
                            <div className="">
                                <input className="form-check-input rounded-0" name="check" type="checkbox" value="" id="progress-check2" />
                            </div>
                            <label className="form-check-label text-clr-dark-2 fs-14" htmlFor="progress-check2">
                                Great
                            </label>
                        </div>
                        <div className="progressbar bg-gray-2 position-relative">
                            <div className="progressbar-normal-width w-26 position-absolute top-0 start-0 h-100 bg-dark-4"></div>
                        </div>
                        <div className="progress-counter">
                            <p className="count mb-0 fw-medium text-clr-dark-2">26%</p>
                        </div>
                    </div>
                    <div className="single-progress mb-4">
                        <div className="form-check d-flex align-items-center gap-2">
                            <div className="">
                                <input className="form-check-input rounded-0" name="check" type="checkbox" value="" id="progress-check3" />
                            </div>
                            <label className="form-check-label text-clr-dark-2 fs-14" htmlFor="progress-check4">
                                Average
                            </label>
                        </div>
                        <div className="progressbar bg-gray-2 position-relative">
                            <div className="progressbar-normal-width w-12 position-absolute top-0 start-0 h-100 bg-dark-4"></div>
                        </div>
                        <div className="progress-counter">
                            <p className="count mb-0 fw-medium text-clr-dark-2">12%</p>
                        </div>
                    </div>
                    <div className="single-progress mb-4">
                        <div className="form-check d-flex align-items-center gap-2">
                            <div className="">
                                <input className="form-check-input rounded-0" name="check" type="checkbox" value="" id="progress-check4" />
                            </div>
                            <label className="form-check-label text-clr-dark-2 fs-14" htmlFor="progress-check4">
                                Poor
                            </label>
                        </div>
                        <div className="progressbar bg-gray-2 position-relative">
                            <div className="progressbar-normal-width w-6 position-absolute top-0 start-0 h-100 bg-dark-4"></div>
                        </div>
                        <div className="progress-counter">
                            <p className="count mb-0 fw-medium text-clr-dark-2">06%</p>
                        </div>
                    </div>
                    <div className="single-progress mb-4">
                        <div className="form-check d-flex align-items-center gap-2">
                            <div className="">
                                <input className="form-check-input rounded-0" name="check" type="checkbox" value="" id="progress-check4" />
                            </div>
                            <label className="form-check-label text-clr-dark-2 fs-14" htmlFor="progress-check4">
                                Bad
                            </label>
                        </div>
                        <div className="progressbar bg-gray-2 position-relative">
                            <div className="progressbar-normal-width w-2 position-absolute top-0 start-0 h-100 bg-dark-4"></div>
                        </div>
                        <div className="progress-counter">
                            <p className="count mb-0 fw-medium text-clr-dark-2">02%</p>
                        </div>
                    </div>
                </div>
                <div className="searchBar">
                    <input type="text" className="form-control border py-2 px-5" placeholder="Search.." />
                </div> */}
      </div>
      <div className="review-wrapper">
        <div className="inner-wrapper bg-white p-4 mb-4">
          <div className="review-header d-flex justify-content-between border-bottom pb-4 mb-4">
            <div className="review-header-left d-flex gap-4">
              <div className="person-img">
                <img src={userImg} alt="img" />
              </div>
              <div>
                <Link className="fw-semiBold text-clr-dark-2 d-block mb-2">
                  Vivien Lokossou
                </Link>
                <p className="fw-medium country text-clr-dark-2 mb-0 fs-12">
                  France
                </p>
              </div>
            </div>
            <div className="meta-date">
              <p className="text-clr-dark-2 fw-medium mb-0">Aug 19, 2022</p>
            </div>
          </div>
          <div className="review-ratting mb-3">
            <ul className="innerRatting ratting-list d-flex align-items-center gap-1 list-unstyled mb-0">
              <li className="bg-green">
                <img src={StarSmall} alt="icon" />
              </li>
              <li className="bg-green">
                <img src={StarSmall} alt="icon" />
              </li>
              <li className="bg-green">
                <img src={StarSmall} alt="icon" />
              </li>
              <li className="bg-green">
                <img src={StarSmall} alt="icon" />
              </li>
              <li className="bg-green">
                <img src={StarSmall} alt="icon" />
              </li>
            </ul>
          </div>
          <div className="review-info pb-4 border-bottom">
            <h5 className="review-caption fs-18 text-clr-dark-2 mb-3">
              Fermentum Venenatis Tortor
            </h5>
            <p className="mb-0 text-clr-dark-2">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="share-and-like py-3">
            <ul className="d-flex align-items-center gap-1 list-unstyled mb-0">
              <li className="border-end pe-3">
                <Link className="fw-medium d-flex gap-2 fs-12 text-clr-dark-2 fw-semiBold text-uppercase">
                  Reply
                </Link>
              </li>
              <li className="border-end px-3">
                <Link className="fw-medium d-flex align-items-center justify-content-center gap-2 fs-12 text-clr-dark-2 fw-semiBold text-uppercase text-decoration-none">
                  <img src={Love} alt="icon" className="flex-shirnk-0" />
                  Like
                </Link>
              </li>
              <li className="px-3">
                <Link
                  className="fw-medium d-flex align-items-center justify-content-center gap-2 fs-12 text-clr-dark-2 fw-semiBold text-uppercase"
                  text-decoration-none
                >
                  <img src={ShareIcon} alt="icon" className="flex-shirnk-0" />
                  Share
                </Link>
              </li>
            </ul>
          </div>
          <div className="is-reply-massage p-3 border-start border-2 border-info">
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-4">
                <div className="person-img">
                  <img src={Reply} alt="img" />
                </div>
                <div className="">
                  <Link
                    className="fw-semiBold text-clr-dark-2 d-block mb-2 fs-14"
                    text-decoration-none
                  >
                    Reply from Satoshi Nakamoto
                  </Link>
                  <p className="fw-medium text-clr-dark-2 mb-0 fs-14">
                    Hearing from happy customers like you makes us feel great.{" "}
                    <br className="d-none d-xl-inline" /> Thank you for sharing
                    your experience! If you need further help, reach out any
                    time!
                  </p>
                </div>
              </div>
              <div className="meta-date">
                <p className="text-clr-dark-2 fw-medium mb-0 fs-14">
                  Aug 19, 2022
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="inner-wrapper bg-white p-4 mb-4">
          <div className="review-header d-flex justify-content-between border-bottom pb-4 mb-4">
            <div className="review-header-left d-flex gap-4">
              <div className="person-img">
                <img src={userImg} alt="img" />
              </div>
              <div className="">
                <Link className="fw-semiBold text-clr-dark-2 d-block mb-2 text-decoration-none">
                  Vivien Lokossou
                </Link>
                <p className="fw-medium country text-clr-dark-2 mb-0 fs-12">
                  Australia
                </p>
              </div>
            </div>
            <div className="meta-date">
              <p className="text-clr-dark-2 fw-medium mb-0">Aug 19, 2022</p>
            </div>
          </div>
          <div className="review-ratting mb-3">
            <ul className="innerRatting ratting-list d-flex align-items-center gap-1 list-unstyled mb-0">
              <li className="bg-yellow">
                <img src={StarSmall} alt="icon" />
              </li>
              <li className="bg-yellow">
                <img src={StarSmall} alt="icon" />
              </li>
              <li className="bg-yellow">
                <img src={StarSmall} alt="icon" />
              </li>
              <li className="bg-gray-2">
                <img src={StarSmall} alt="icon" />
              </li>
              <li className="bg-gray-2">
                <img src={StarSmall} alt="icon" />
              </li>
            </ul>
          </div>
          <div className="review-info pb-4 border-bottom">
            <h5 className="review-caption fs-18 text-clr-dark-2 mb-3">
              Fermentum Venenatis Tortor
            </h5>
            <p className="mb-0 text-clr-dark-2">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="share-and-like pt-3">
            <ul className="d-flex align-items-center gap-1 list-unstyled mb-0">
              <li className="border-end pe-3">
                <Link className="fw-medium d-flex gap-2 fs-12 text-clr-dark-2 fw-semiBold text-uppercase text-decoration-none">
                  Reply
                </Link>
              </li>
              <li className="border-end px-3">
                <Link className="fw-medium d-flex align-items-center justify-content-center gap-2 fs-12 text-clr-dark-2 fw-semiBold text-uppercase text-decoration-none">
                  <img src={Love} alt="icon" className="flex-shirnk-0" />
                  Like
                </Link>
              </li>
              <li className="px-3">
                <Link className="fw-medium d-flex align-items-center justify-content-center gap-2 fs-12 text-clr-dark-2 fw-semiBold text-uppercase text-decoration-none">
                  <img src={ShareIcon} alt="icon" className="flex-shirnk-0" />
                  Share
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="inner-wrapper bg-white p-4 mb-4">
          <div className="review-header d-flex justify-content-between border-bottom pb-4 mb-4">
            <div className="review-header-left d-flex gap-4">
              <div className="person-img">
                <img src={userImg} alt="img" />
              </div>
              <div className="">
                <Link className="fw-semiBold text-clr-dark-2 d-block mb-2">
                  Vivien Lokossou
                </Link>
                <p className="fw-medium country text-clr-dark-2 mb-0 fs-12">
                  Australia
                </p>
              </div>
            </div>
            <div className="meta-date">
              <p className="text-clr-dark-2 fw-medium mb-0">Aug 19, 2022</p>
            </div>
          </div>
          <div className="review-ratting mb-3">
            <ul className="innerRatting ratting-list d-flex align-items-center gap-1 list-unstyled mb-0">
              <li className="bg-red">
                <img src={StarSmall} alt="icon" />
              </li>
              <li className="bg-gray-2">
                <img src={StarSmall} alt="icon" />
              </li>
              <li className="bg-gray-2">
                <img src={StarSmall} alt="icon" />
              </li>
              <li className="bg-gray-2">
                <img src={StarSmall} alt="icon" />
              </li>
              <li className="bg-gray-2">
                <img src={StarSmall} alt="icon" />
              </li>
            </ul>
          </div>
          <div className="review-info pb-4 border-bottom">
            <h5 className="review-caption fs-18 text-clr-dark-2 mb-3">
              Inceptos
            </h5>
            <p className="mb-0 text-clr-dark-2">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="share-and-like pt-3">
            <ul className="d-flex align-items-center gap-1 list-unstyled mb-0">
              <li className="border-end pe-3">
                <Link className="fw-medium d-flex gap-2 fs-12 text-clr-dark-2 fw-semiBold text-uppercase text-decoration-none">
                  Reply
                </Link>
              </li>
              <li className="border-end px-3">
                <Link className="fw-medium d-flex align-items-center justify-content-center gap-2 fs-12 text-clr-dark-2 fw-semiBold text-uppercase text-decoration-none">
                  <img src={Love} alt="icon" className="flex-shirnk-0" />
                  Like
                </Link>
              </li>
              <li className="px-3">
                <Link className="fw-medium d-flex align-items-center justify-content-center gap-2 fs-12 text-clr-dark-2 fw-semiBold text-uppercase text-decoration-none">
                  <img src={ShareIcon} alt="icon" className="flex-shirnk-0" />
                  Share
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="event-details-right d-flex justify-content-center mt-5">
        <button
          className="btn btn-green ls-1 fs-12 text-uppercase rounded-0 fw-normal text-white mb-3 border-0 bg-green ff-inter w-auto px-5"
          type="button"
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default EventReview;