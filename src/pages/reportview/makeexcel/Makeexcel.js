import React, { useState } from "react";

function Makeexcel() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showTable, setShowTable] = useState(false);

  const handleSubmit = () => {
    if (startDate && endDate) {
      setShowTable(true);
    }
  };

  return (
    <div className="font-sans p-5 max-w-md mx-auto">
      <div className="bg-white shadow-md rounded-lg p-5">
        <h2 className="text-2xl font-bold mb-5">एक्सेल रिपोर्ट प्रिंट करा</h2>
        <hr className="mb-5" />

        <div className="grid grid-cols-1 gap-4 mb-5">
          <div className="flex flex-col">
            <label className="font-semibold text-sm mb-1">तारखेपासून</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-sm mb-1">तारखेपर्यंत</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-5">
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            तारखेपासून
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            पूर्ण रिपोर्ट
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Download Excel
          </button>
        </div>

        {showTable && (
          <div className="mt-5 p-4 bg-gray-100 border border-gray-300 rounded">
            <h3 className="text-lg font-semibold mb-3">Report Details</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-b px-4 py-2">Date Range</th>
                  <th className="border-b px-4 py-2">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b px-4 py-2">{`${startDate} to ${endDate}`}</td>
                  <td className="border-b px-4 py-2">Sample details for the given date range.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Makeexcel;
