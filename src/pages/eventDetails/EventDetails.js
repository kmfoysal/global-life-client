import React from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import EventDetailsContent from "../../components/eventDetailsContent/EventDetailsContent";
import EventDetailsHeroArea from "../../components/eventDetailsHeroArea/EventDetailsHeroArea";
import EventReview from "../../components/eventReview/EventReview";
import EventSideBar from "../../components/eventSideBar/EventSideBar";
import HappingNext from "../../components/happingNext/HappingNext";
import useFetch from "../../hooks/useFetch";
import "./eventDetails.scss";

const EventDetails = () => {
    
  const { eventId } = useParams();

  const { data, loading } = useFetch(
    "https://globallife-api.onrender.com/api/events/allevents"
  );

    const singleDetails = data?.find((event) => event?._id === (eventId));
    
    console.log(singleDetails);

  return (
    <div>
      <EventDetailsHeroArea singleDetails={singleDetails} />

      <div class="blog-details-main bg-gray3 py-4">
        <div className="container">
          <div className="row">
            <div class="col-lg-8 ff-inter">
              <EventDetailsContent singleDetails={singleDetails} />
              <EventReview />
            </div>
            <div class="col-lg-3 offset-1">
              <EventSideBar singleDetails={singleDetails} />
            </div>
          </div>
        </div>
      </div>
      <section className="heppeningNext sectionPadding">
        <div className="container">
          <div className="commonTitle">
            <h2 className="m-0 py-4 text-center fs-36 fw-medium text-dark1">
              You might also like...
            </h2>
          </div>

          <div className="happeningNextWrapper mt-5">
            <div className="row">
              <div className="d-flex justify-content-center align-items-center h-50">
                {loading && <Spinner animation="grow" variant="warning" />}
              </div>

              {!loading &&
                data.map((event) => (
                  <HappingNext key={event._id} event={event} />
                ))}
              <div className="d-flex justify-content-center mt-5">
                <button className="commonBtn ff-inter bg-green discoverBtn text-uppercase ls-1 d-flex align-items-center justify-content-center text-white fs-12">
                  <span>Discover More</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetails;
