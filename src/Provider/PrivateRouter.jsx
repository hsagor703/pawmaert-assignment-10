import React, { use, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRouter = ({ children }) => {
  const { user,loading } = use(AuthContext);
  const location = useLocation();
  if (loading) {
    return <p>loading...</p>
  }
  if (user && user?.email) {
    return children;
  } else {
    return <Navigate state={location.pathname} to='/login'></Navigate>
  }
};

export default PrivateRouter;
