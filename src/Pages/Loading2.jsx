import React from "react";

const Loading2 = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-4">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>

        {/* Text */}
        <p className="mt-4 text-gray-600 text-lg font-medium">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default Loading2;
