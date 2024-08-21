import React from "react";

const CasetoAr = () => {
  return (
    <div className=" max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-8">
      <div className="bg-teal-600 text-white text-lg font-bold p-2 rounded-t-md">
        केस A R ला हस्तांतरित करा
      </div>
      <form className="space-y-4 mt-5">
        <div>
          <label
            className="block text-gray-700 font-semibold mb-1"
            htmlFor="branch"
          >
            शाखा निवडा <span className="text-red-500">*</span>
          </label>
          <select
            id="branch"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            <option>Select</option>
            <option>मुख्य </option>
            {/* Add your options here */}
          </select>
        </div>

        <div>
          <label
            className="block text-gray-700 font-semibold mb-1"
            htmlFor="case"
          >
            केस निवडा <span className="text-red-500">*</span>
          </label>
          <select
            id="case"
            className="w-full p-2 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-teal-400"
            multiple
          >
            <option>Select</option>
            <option>472 जाधव संजय विठ्ठल</option>
            <option>473 पाटील महेश राजेंद्र</option>

            {/* Add your options here */}
          </select>
          <p className="text-gray-600 mt-1">Multi Selection of Cases allowed</p>
        </div>

        <div>
          <label
            className="block text-gray-700 font-semibold mb-1"
            htmlFor="ar"
          >
            A R निवडा <span className="text-red-500">*</span>
          </label>
          <select
            id="ar"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            <option>Select</option>
            <option>हवेली TestAR </option>
            {/* Add your options here */}
          </select>
        </div>

        <button
          type="submit"
          className="w-32 bg-teal-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-700"
        >
          जतन करा
        </button>
      </form>
    </div>
  );
};

export default CasetoAr;
