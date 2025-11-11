import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { useLocation, useNavigate } from "react-router";

const PrivateRouter = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  if (loading) {
    <p>loading...</p>
  }
  if (user && user?.email) {
    return children;
  } else {
    return navigate("/");
  }
};

export default PrivateRouter;
