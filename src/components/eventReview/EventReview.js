/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DemoAvator from "../../assets/images/demo-profile-avatar.png";
import Reply from "../../assets/images/Forward.png";
import Love from "../../assets/images/love.png";
import ShareIcon from "../../assets/images/share-icon.png";
import StarGreen from "../../assets/images/star-green.png";
import Star from "../../assets/images/star.png";
import useFetch from "../../hooks/useFetch";
import AddReviewModal from "../addReviewModal/AddReviewModal";
import ReplyReviewModal from "../replyReviewModal/ReplyReviewModal";

const EventReview = ({ singleDetails }) => {
  const { data, loading, reFetch } = useFetch(
    `https://global-life-api.onrender.com/api/reviews/${singleDetails?._id}`
  );


  const stars = Array(5).fill(0);


  return (
    <div className="blog-review-wrapper py-5">
      <div className="review-header bg-white p-4 d-flex justify-content-between align-items-center mb-4">
        <div className="review-header-left d-flex align-items-center gap-4">
          <div className="person-img">
            <img src={DemoAvator} alt="img" className="img-fluid" />
          </div>
          {/* <Link className="text-clr-green fw-normal border-bottom border-success" data-bs-toggle="modal" data-bs-target="#SubmitReview">
                        Write a review
                    </Link> */}
          <AddReviewModal singleDetails={singleDetails} reFetch={reFetch} />
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
      </div>
      {
        loading && 'Loading'
      }
      { !loading && 
        <div className="review-wrapper">
        {data?.map((review) => (
          <div className="inner-wrapper bg-white p-4 mb-4" key={review._id}>
            <div className="review-header d-flex justify-content-between border-bottom pb-4 mb-4">
              <div className="review-header-left d-flex gap-4">
                <div className="person-img">
                  <img
                    src={review?.profilePic ? review?.profilePic : DemoAvator}
                    alt="img"
                  />
                </div>
                <div>
                  <Link className="fw-semiBold text-clr-dark-2 d-block mb-2 text-decoration-none">
                    {review?.name}
                  </Link>
                  <p className="fw-medium country text-clr-dark-2 mb-0 fs-12">
                    France
                  </p>
                </div>
              </div>
              <div className="meta-date">
                <p className="text-clr-dark-2 fw-medium mb-0">
                  {review?.createdAt}
                </p>
              </div>
            </div>
            <div className="review-ratting mb-3">
              <div className="innerRatting ratting-list d-flex align-items-center gap-1 list-unstyled mb-0">
                {stars.map((star, index) => (
                  <svg
                    key={index}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    // onclick={()=>handleChange(index + 1)}
                  >
                    <rect
                      width="20"
                      height="20"
                      fill={`${
                        review.rating > index && review.rating === 5
                          ? "#0A8270"
                          : review.rating > index && review.rating === 4
                          ? "#17BD8D"
                          : review.rating > index && review.rating === 3
                          ? "#FDE90A"
                          : review.rating > index && review.rating === 2
                          ? "#FFA114"
                          : review.rating > index && review.rating === 1
                          ? "#FF4E3E"
                          : review.rating === 0
                          ? "#E3E8EB"
                          : "#E3E8EB"
                      } `}
                    />
                    <path
                      d="M9.99967 3.33337L11.4964 7.93993H16.3401L12.4215 10.7869L13.9182 15.3935L9.99967 12.5465L6.08111 15.3935L7.57787 10.7869L3.6593 7.93993H8.50291L9.99967 3.33337Z"
                      fill="white"
                    />
                  </svg>
                ))}
              </div>
            </div>
            <div className="review-info pb-4 border-bottom">
              <h5 className="review-caption fs-18 text-clr-dark-2 mb-3">
                {review?.reviewTitle}
              </h5>
              <p className="mb-0 text-clr-dark-2">{review?.reviewDesc}</p>
            </div>
            <div className="share-and-like py-3">
              <ul className="d-flex align-items-center gap-1 list-unstyled mb-0">
                <li className="border-end pe-3">
                  <ReplyReviewModal review={review} reFetch={reFetch} />
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
                      <br className="d-none d-xl-inline" /> Thank you for
                      sharing your experience! If you need further help, reach
                      out any time!
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
            {loading && 'Loading'}
          </div>
        ))}
        </div>
      }

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
