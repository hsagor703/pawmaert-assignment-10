import React from "react";
import { useNavigate } from "react-router";
// import { useNavigate } from "react-router-dom";

const ErrorPage1 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4 mb-10">
      <h1 className="text-9xl font-extrabold text-red-500">404</h1>
      <h2 className="text-3xl font-semibold mt-4 text-gray-800">No User Found</h2>
      <p className="text-gray-600 mt-2 max-w-md">
        Oops! The page you’re looking for doesn’t exist or may have been moved.
      </p>

      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Go Back Home
      </button>
      <p>or</p>
      <button
        onClick={() => navigate("/login")}
        className=" bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Login
      </button>
    </div>
  );
};

export default ErrorPage1;
