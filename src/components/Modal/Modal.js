"use client"

import React from "react";

export default function Modal({ isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-md mx-auto">
        <button
          className="absolute top-0 right-0 m-2 text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <div className="text-blue-500 text-6xl mb-4">✔️</div>
          <h2 className="text-xl font-semibold mb-2">
            Your application is accepted
          </h2>
          <p className="text-gray-600">We will contact you soon</p>
        </div>
      </div>
    </div>
  );
}
