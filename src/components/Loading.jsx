import React from "react";

const Loading = () => {
  // Check if dark mode is active on document element

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-gray-800"
    >
      <div
        className="text-2xl animate-plus"
      >
        Loading ......{" "}
      </div>
    </div>
  );
};

export default Loading;
