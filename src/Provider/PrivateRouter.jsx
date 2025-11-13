import React, { use, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../Pages/Loading";

const PrivateRouter = ({ children }) => {
  const { user,loading } = use(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>
  }
  if (user && user?.email) {
    return children;
  } else {
    return <Navigate state={location.pathname} to='/login'></Navigate>
  }
};

export default PrivateRouter;
