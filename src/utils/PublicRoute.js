import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PublicRoute = ({ children }) => {
    
      const { user } = useContext(AuthContext);

    return !user?.email ? children : <Navigate to="/" />;
};

export default PublicRoute;
