import moment from "moment";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useFetch from "../../hooks/useFetch";
import DeleteModal from "../deleteModal/DeleteModal";
import StepFormModal from "../stepFormModal/StepFormModal";
import "./tabEventCard.scss";

const TabEventCard = () => {

    const {user} = useAuth()

    const PF = "http://localhost:5000/images/";

    const { data, loading, error } = useFetch(`http://localhost:5000/api/events/myevents/${user?.username}`);

    const [loadedData, setLoadedData] = useState();

    useEffect(() => {
      setLoadedData(data);
    }, [data]);

    console.log(loadedData);


    return (
        <div>
            <div className="d-flex justify-content-center align-items-center h-50">{loading && <Spinner animation="grow" variant="warning" />}</div>
            {!loading &&
                !error &&
                loadedData?.map((i) => (
                    <div className="tabEventCard mb-4" key={i?.createdAt}>
                        <div className="content">
                            <div className="info">
                                <p className={`event-category ${i?.postType === "Experience" ? "bg-sky-blue" : "bg-lemon-yellow"}`}>{i?.postType}</p>
                                <p className="status">
                                    <span>€{i?.cost}</span> |{" "}
                                    <span>
                                        {moment(i?.startDate).add(0, "days").calendar().slice(0, -12)} at {i?.startTime}
                                    </span>{" "}
                                    | <span>{i?.followers?.length} Followers</span>
                                </p>
                                <Link to={`/eventdetails/${i?._id}`} className="title text-decoration-none">
                                    {i?.title}
                                </Link>
                                <p className="address mt-2">{i?.streetAddress}</p>
                            </div>
                            <div className="img-box">
                                <img className="img-fluid" src={PF + i?.photos} alt="img" />
                            </div>
                        </div>

                        <div className="d-flex">
                            <StepFormModal currentData={i} />

                            <DeleteModal currentData={i} />
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default TabEventCard;
