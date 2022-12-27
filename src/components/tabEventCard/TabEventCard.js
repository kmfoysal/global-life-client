import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import useFetch from "../../hooks/useFetch";
import DeleteModal from "../deleteModal/DeleteModal";
import StepFormModal from "../stepFormModal/StepFormModal";
import "./tabEventCard.scss";

const TabEventCard = () => {

    const {user} = useAuth()

    const PF = "http://localhost:5000/images/";

    const { data, loading, error } = useFetch(`http://localhost:5000/api/events/allevents/${user?.username}`);

    const [loadedData, setLoadedData] = useState();

    useEffect(() => {
      setLoadedData(data);
    }, [data]);


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
                                        {i?.startDate} at {i?.startTime}
                                    </span>{" "}
                                    | <span>480 Followers</span>
                                </p>
                                <h4 className="title">{i?.title}</h4>
                                <p className="address">{i?.streetAddress}</p>
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
