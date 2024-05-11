import { Spinner } from "flowbite-react";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useUserContext from "../../hooks/useUserContext";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { loading, user } = useUserContext();
  if (loading) {
    return (
      <div className="flex justify-center mt-14">
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
