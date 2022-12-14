import React from "react";
import bannerImg from "../../assets/images/banner.png";
import Banner from "../../components/Banner/Banner";
import HappingNext from "../../components/happingNext/HappingNext";
import useFetch from "../../hooks/useFetch";
const HomePage = () => {
    const { data, loading } = useFetch("http://localhost:5000/api/events/allevents");

    console.log(data[1]?.desc);
    console.log(loading);

    return (
        <div>
            <Banner
                bannerBg={bannerImg}
                bannerTitle={"Shared local knowledge for relocated families in Portugal."}
                bannerIntro={"Global Life is the one stop shop for expats to find all the information they need to make their new move more enjoyable, easier and less hassle free."}
                inputText={"Find what’s happening, recomendation and more... "}
            />

            <div className="p-5">{data[1]?.desc.replace(/(<([^>]+)>)/gi, "")}</div>

            <section class="heppeningNext sectionPadding">
                <div class="container">
                    <div class="commonTitle">
                        <h2 class="m-0 py-4 text-center fs-36 fw-medium text-dark1">What's Happening Next?</h2>
                    </div>

                    <div class="happeningNextWrapper mt-5">
                        <div class="row">
                            {data.map((event) => (
                                <HappingNext key={event._id} event={event} />
                            ))}
                            <div class="d-flex justify-content-center mt-5">
                                <button class="commonBtn ff-inter bg-green discoverBtn text-uppercase ls-1 d-flex align-items-center justify-content-center text-white fs-12">
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
