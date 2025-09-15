import React from "react";
import { Link, useNavigate } from "react-router-dom";
import video from "../../video/video.mp4";

function ErrorPage() {
  const navigate = useNavigate();

  const handelGOback = () => {
    navigate(-1);
  };
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      {/* Video */}
      <div className="w-full max-w-md">
        <video autoPlay loop muted className="w-full h-auto rounded-lg">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Text */}
      <h1 className="text-5xl font-bold mt-6">404</h1>
      <p className="text-lg text-gray-300 mt-2">
        Oops! The page you are looking for does not exist.
      </p>

      {/* Button */}
      <div className="flex justify-center items-center gap-3.5">
        <button
          onClick={handelGOback}
          className="mt-6 px-6 py-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-red-700 transition"
        >
          Go Back
        </button>
        <Link
          to="/"
          className="mt-6 px-6 py-3 bg-red-600 rounded-lg text-white font-semibold hover:bg-red-700 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
