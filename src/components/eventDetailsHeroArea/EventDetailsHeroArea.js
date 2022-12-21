import React from 'react';
import Eye from "../../assets/images/Eye.svg";
import Follower1 from '../../assets/images/reader1.png';
import Follower2 from "../../assets/images/reader2.png";
import Follower3 from "../../assets/images/reader3.png";
import Follower4 from "../../assets/images/reader4.png";
import Follower5 from "../../assets/images/reader6.png";
import Star from "../../assets/images/Star6.svg";
import './eventDetailsHeroArea.scss';


const EventDetailsHeroArea = ({ singleDetails }) => {

        const PF = "https://globallife-api.onrender.com/images/";

    
  return (
    <div>
      <div class="event-details-banner">
        <div class="container">
          <div class="event-details align-items-center py-3">
            <div class="event-details-left ">
              <div class="d-flex gap-2 mb-3">
                <div class="event-yellow bg-pale-goldenrod d-flex align-items-center justify-content-center">
                  <p class="mb-0 ls-1 text-dark1 px-1 fw-semiBold ff-inter fs-12">
                    {singleDetails?.postType}
                  </p>
                </div>
                <div class="event-gray bg-gray-2 d-flex align-items-center justify-content-center">
                  <p class=" text-dark2 fw-semiBold px-1 fs-12 mb-0 ff-inter ls-1">
                    {singleDetails?.tags.map((i) => i)}
                  </p>
                </div>
              </div>
              <div class="event-heading">
                <h2 class="fs-48 lh-58 text-dark1 mb-4">
                  {singleDetails?.title}
                </h2>
              </div>
              <div class="event-information">
                <div class="d-flex align-items-center gap-2">
                  <div class=" d-flex align-items-center gap-2">
                    <div class="d-flex align-items-center gap-1">
                      <p class="mb-0 text-dark2 fs-14 fw-medium ff-inter">
                        Organiser:
                      </p>
                      <a
                        href="#"
                        class="text-dark1 fs-14 fw-medium ff-inter text-decoration-underline"
                      >
                        {singleDetails?.username}
                      </a>
                    </div>
                    <div class="follow-btn d-flex align-items-center justify-content-center">
                      <p class=" ff-inter text-clr-egyptian-green  p-1 bg-egyptian-green-light mb-0 ls-1">
                        Follow
                      </p>
                    </div>
                    <div class="line"></div>
                  </div>
                  <div class="view d-flex align-items-center">
                    <p class=" text-dark2 fs-14 fw-medium ff-inter mb-0">
                      €{singleDetails?.cost} Per Person
                    </p>
                  </div>
                  <div class="line"></div>
                  <div class="review d-flex align-items-center gap-2">
                    <img src={Star} class="img-fluid" alt="star" />
                    <p class=" text-dark2 fs-14 fw-medium ff-inter mb-0">
                      4.8/5 (230 reviews)
                    </p>
                  </div>
                  <div class="line"></div>
                  <div class="review d-flex align-items-center gap-3">
                    <div class="card__content-body-users">
                      <div class="image">
                        <img src={Follower1} class="img-fluid" alt="reader" />
                        <img src={Follower2} class="img-fluid" alt="reader" />
                        <img src={Follower3} class="img-fluid" alt="reader" />
                        <img src={Follower4} class="img-fluid" alt="reader" />
                        <img src={Follower5} class="img-fluid" alt="reader" />
                      </div>
                    </div>

                    <p class=" text-dark2 fs-14 fw-medium ff-inter mb-0">
                      480 Followers
                    </p>
                  </div>
                  <div class="line"></div>
                  <div class="view d-flex align-items-center gap-2">
                    <img src={Eye} class="img-fluid" alt="eye" />
                    <p class=" text-dark2 fs-14 fw-medium ff-inter mb-0">
                      3.4K
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="event-details-right ms-auto ">
              <div>
                <button
                  class="btn-green ls-1 fs-12 text-uppercase fw-semiBold text-white d-flex justify-content-center mb-3 align-items-center border-0 bg-green ff-inter"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#create-event"
                >
                  Follow This Event
                </button>
                <button
                  class="single-border-btn ls-1 fs-12 text-uppercase d-flex align-items-center fw-semiBold ff-inter justify-content-center mb-3"
                  data-bs-target="#share-model"
                  data-bs-toggle="modal"
                  type="button"
                >
                  Share this event
                </button>
              </div>
            </div>
          </div>

          <div class="blog-details-wrapper mt-5 d-flex align-items-center justify-content-center gap-3">
            <div class="blog-details-img">
              <img
                src={PF + singleDetails?.photos}
                class="img-fluid"
                alt="blog-details"
              />
            </div>
            <div class="blog-details-img">
              <img
                src={PF + singleDetails?.photos}
                class="img-fluid"
                alt="blog-details"
              />
            </div>
            <div class="blog-details-img">
              <img
                src={PF + singleDetails?.photos}
                class="img-fluid"
                alt="blog-details"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsHeroArea;