import React from "react";
import { useNavigate } from "react-router";

const ErrorPage2 = () => {
    const navigate = useNavigate()
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-linear-to-br from-gray-100 to-gray-300 text-center px-4 mb-10">
        <h1 className="text-[120px] font-extrabold text-transparent bg-clip-text bg-linear-to-r from-red-500 to-blue-600 animate-pulse">
          404
        </h1>
        <p className="text-2xl font-semibold text-gray-700 mt-2">
          Oops! Page Not Found 😢
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage2;
