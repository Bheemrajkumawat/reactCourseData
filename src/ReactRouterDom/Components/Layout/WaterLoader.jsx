// WaterLoader.jsx
import React from "react";

export default function WaterLoader({ fullScreen = true, text = "Loading..." }) {
  return (
    <div
      className={`${
        fullScreen
          ? "fixed inset-0 z-50 flex items-center justify-center bg-black/20"
          : "flex items-center justify-center"
      }`}
    >
      <div className="flex flex-col items-center gap-3">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Text (optional) */}
        {text && (
          <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
            {text}
          </p>
        )}
      </div>
    </div>
  );
}
