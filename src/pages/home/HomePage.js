import React from "react";
import { Spinner } from "react-bootstrap";
import bannerImg from "../../assets/images/banner.png";
import Banner from "../../components/Banner/Banner";
import HappingNext from "../../components/happingNext/HappingNext";
import useFetch from "../../hooks/useFetch";
const HomePage = () => {

    const { data, loading } = useFetch("http://localhost:5000/api/events/allevents");


    return (
        <div>
            <Banner
                bannerBg={bannerImg}
                bannerTitle={"Shared local knowledge for relocated families in Portugal."}
                bannerIntro={"Global Life is the one stop shop for expats to find all the information they need to make their new move more enjoyable, easier and less hassle free."}
                inputText={"Find what’s happening, recomendation and more... "}
            />

            {/* <div className="p-5">{data[1]?.desc.replace(/(<([^>]+)>)/gi, "")}</div> (Text Editor) */}

            <section className="heppeningNext sectionPadding">
                <div className="container">
                    <div className="commonTitle">
                        <h2 className="m-0 py-4 text-center fs-36 fw-medium text-dark1">What's Happening Next?</h2>
                    </div>

                    <div className="happeningNextWrapper mt-5">
                        <div className="row">
                            <div className="d-flex justify-content-center align-items-center h-50">{loading && <Spinner animation="grow" variant="warning" />}</div>

                            {!loading && data.map((event) => <HappingNext key={event._id} event={event} />)}
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

export default HomePage;
