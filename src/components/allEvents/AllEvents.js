import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useFetch from '../../hooks/useFetch';
import CommonFilterHeader from '../commonFilterHeader/CommonFilterHeader';
import CommonSideBar from '../commonSideBar/CommonSideBar';
import CommonSubBanner from '../commonSubBanner/CommonSubBanner';
import HappingNext from '../happingNext/HappingNext';

const AllEvents = () => {

    const [limit, setLimit] = useState(4);

    const { data, loading } = useFetch(`http://localhost:5000/api/events/allevents?limit=${limit}&sort=createdAt&asc=-1`);

    const handleLoadMore = () => {
        setLimit((pre) => pre + 4);
    };


    return (
        <div>
            <CommonSubBanner />
            <section className="event-content-wrapper section-padding-72">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3">
                            <CommonSideBar />
                        </div>
                        <div className="col-xl-9">
                            <CommonFilterHeader />
                            <div className="events-post-area">
                                <div className="happeningNextWrapper mt-4">
                                    <div className="row">
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
                                            {!(data?.limit > data?.events?.length) && (
                                                <button
                                                    onClick={handleLoadMore}
                                                    className="commonBtn ff-inter bg-green discoverBtn text-uppercase ls-1 d-flex align-items-center justify-content-center text-white fs-12"
                                                >
                                                    <span>Load More</span>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllEvents;