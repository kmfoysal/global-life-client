import React from "react";
import { Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import EventDetailsContent from "../../components/eventDetailsContent/EventDetailsContent";
import EventDetailsHeroArea from "../../components/eventDetailsHeroArea/EventDetailsHeroArea";
import EventReview from "../../components/eventReview/EventReview";
import EventSideBar from "../../components/eventSideBar/EventSideBar";
import HappingNext from "../../components/happingNext/HappingNext";
import useFetch from "../../hooks/useFetch";
import "./eventDetails.scss";

const EventDetails = () => {
    const { eventId } = useParams();

    const { data, loading } = useFetch(`https://global-life-api.onrender.com/api/events/allevents?limit=4&sort=createdAt&asc=-1`);

    const singleDetails = data?.events?.find((event) => event?._id === eventId);

    return (
        <div>
            <EventDetailsHeroArea singleDetails={singleDetails} />

            <div className="blog-details-main bg-gray3 py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 ff-inter">
                            <EventDetailsContent singleDetails={singleDetails} />
                            <EventReview />
                        </div>
                        <div className="col-lg-3 offset-1">
                            <EventSideBar singleDetails={singleDetails} />
                        </div>
                    </div>
                </div>
            </div>
            <section className="heppeningNext sectionPadding">
                <div className="container">
                    <div className="commonTitle">
                        <h2 className="m-0 py-4 text-center fs-36 fw-medium text-dark1">You might also like...</h2>
                    </div>

                    <div className="happeningNextWrapper mt-5">
                        <div className="row">
                            <div className="d-flex justify-content-center align-items-center h-50">{loading && <Spinner animation="grow" variant="warning" />}</div>

                            <div className="d-flex justify-content-center align-items-center h-50">
                                {loading && (
                                    <div>
                                        <Spinner animation="grow" variant="warning" />
                                    </div>
                                )}
                            </div>

                            {!loading && data?.events?.map((event) => <HappingNext key={event?._id} event={event} />)}

                            {data?.events?.length === 0 && <p className="text-clr-dark-4 ff-inter text-center">No Events Available</p>}

                            <div className="d-flex justify-content-center mt-5">
                                <Link
                                    to="/allevents"
                                    className="commonBtn ff-inter bg-green discoverBtn text-uppercase ls-1 d-flex align-items-center justify-content-center text-white fs-12 text-decoration-none"
                                >
                                    <span>SEE ALL</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventDetails;
