import React from "react";

function RejectReason() {
  return (
    <div className="flex items-center justify-center mt-8">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h3 className="text-center text-white bg-orange-600 py-2 rounded-md">
          Reject Reason
        </h3>
        <div className="mt-6 p-4 border-2 border-gray-400 rounded-lg">
          <h4 className="text-lg font-semibold">Remark</h4>
          <div className="mt-4">
            <input
              type="text"
              className="w-full sm:w-2/3 h-12 px-4 border border-gray-300 rounded-md text-lg"
              placeholder="Enter your remark here"
            />
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
          >
            जतन करा
          </button>
        </div>
      </div>
    </div>
  );
}

export default RejectReason;
