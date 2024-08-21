import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Inprocess() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const navigate = useNavigate();

  const tableData = [
    {
      caseNumber: "472",
      branch: "मुख्य",
      name: "जाधव संजय विठ्ठल",
      address: "शंकर नगर तहसील ऑफिस जानवी किराणा दुकान जुना जालना",
      mobile: "7774037519",
      status: "In Progress",
    },
    {
      caseNumber: "473",
      branch: "उपमुख्य",
      name: "पाटील महेश राजेंद्र",
      address: "नगर पालिका, तिलक रोड, मुंबई",
      mobile: "8888899999",
      status: "In Progress",
    },
    {
      caseNumber: "473",
      branch: "उपमुख्य",
      name: "पाटील महेश राजेंद्र",
      address: "नगर पालिका, तिलक रोड, मुंबई",
      mobile: "8888899999",
      status: "In Progress",
    },
    {
      caseNumber: "473",
      branch: "उपमुख्य",
      name: "पाटील महेश राजेंद्र",
      address: "नगर पालिका, तिलक रोड, मुंबई",
      mobile: "8888899999",
      status: "In Progress",
    },
    {
      caseNumber: "473",
      branch: "उपमुख्य",
      name: "पाटील महेश राजेंद्र",
      address: "नगर पालिका, तिलक रोड, मुंबई",
      mobile: "8888899999",
      status: "In Progress",
    },
    {
      caseNumber: "473",
      branch: "उपमुख्य",
      name: "पाटील महेश राजेंद्र",
      address: "नगर पालिका, तिलक रोड, मुंबई",
      mobile: "8888899999",
      status: "In Progress",
    },
    // Add more case objects as needed
  ];

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setOpenDropdownIndex(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".inprocess-dropdown-container")) {
        setOpenDropdownIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-center mt-8 md:mt-10 lg:mt-12 px-4 md:px-6">
      <div className="bg-white rounded-lg shadow-lg p-5 md:p-8 w-full max-w-4xl lg:max-w-7xl">
        <p className="mt-2 text-orange-500 p-3 font-semibold text-center">
          <span className="block mb-3">प्रगतीपथावर केस यादी</span>
          <hr />
        </p>
        <div className="flex flex-wrap justify-between mb-5">
          <button
            onClick={() => handleNavigate("/addcase")}
            className="text-white bg-green-600 hover:bg-green-700 transition duration-200 px-4 py-2 rounded-md mb-3 md:mb-0"
          >
            नवीन केस भरा / ADD New Case +
          </button>
        </div>
        <div className="flex items-center">
          <p className="mr-3 text-gray-700">Search:</p>
          <input
            type="search"
            className="p-1 border border-gray-300 rounded-md w-36 focus:outline-none focus:ring-2 focus:ring-orange-300"
            placeholder="Search..."
          />
        </div>
        {/* Table for larger screens */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left font-medium">
                  केस नं.
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-medium">
                  शाखा
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-medium">
                  नाव
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-medium">
                  पत्ता (जिल्हा, तालुका, गाव)
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-medium">
                  मोबाईल नं
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-medium">
                  स्थिती
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-medium">
                  प्रक्रिया
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-100 even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    {row.caseNumber}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {row.branch}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {row.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {row.address}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {row.mobile}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {row.status}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="relative inprocess-dropdown-container">
                      <button
                        className="inprocess-case-btn text-white bg-orange-500 hover:bg-orange-600 transition duration-200 px-4 py-2 rounded-md"
                        onClick={() => toggleDropdown(index)}
                      >
                        प्रक्रिया
                      </button>
                      <ul
                        className={`absolute right-0 bg-white border border-gray-300 rounded-md shadow-md mt-1 transition-transform duration-200 transform  ${
                          openDropdownIndex === index
                            ? "scale-100 opacity-100 z-50"
                            : "scale-90 opacity-0 pointer-events-none"
                        }`}
                        style={{
                          top: "100%",
                          backgroundColor: "grey",
                          width: "200px",
                        }}
                      >
                        <li
                          onClick={() => handleNavigate("/addcase")}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          See
                        </li>
                        <li
                          onClick={() => handleNavigate("/makereport")}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          Create a Report
                        </li>
                        <li
                          onClick={() => handleNavigate("/uploadDoc")}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          Upload the Document
                        </li>
                        <li
                          onClick={() => handleNavigate("/roz")}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          Daily Name
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Card view for mobile devices */}
        <div className="md:hidden">
          {tableData.map((row, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg mb-4 p-4 shadow-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold text-lg">
                  केस नं.: {row.caseNumber}
                </h2>
                <span
                  className={`text-sm font-semibold px-2 py-1 rounded ${
                    row.status === "In Progress"
                      ? "bg-yellow-200 text-yellow-800"
                      : "bg-green-200 text-green-800"
                  }`}
                >
                  {row.status}
                </span>
              </div>
              <p className="text-gray-700 mb-1">
                <strong>शाखा:</strong> {row.branch}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>नाव:</strong> {row.name}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>पत्ता:</strong> {row.address}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>मोबाईल नं:</strong> {row.mobile}
              </p>
              <div className="relative inprocess-dropdown-container mt-2">
                <button
                  className="text-white bg-orange-500 hover:bg-orange-600 transition duration-200 px-3 py-1 rounded-md w-full text-center"
                  onClick={() => toggleDropdown(index)}
                >
                  प्रक्रिया
                </button>
                <ul
                  className={`absolute bg-white border border-gray-300 rounded-md shadow-md mt-1 transition-transform duration-200 transform ${
                    openDropdownIndex === index
                      ? "scale-100 opacity-100 z-50 "
                      : "scale-90 opacity-0 pointer-events-none"
                  }`}
                  style={{ top: "100%" }}
                >
                  <li
                    onClick={() => handleNavigate("/addcase")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    See
                  </li>
                  <li
                    onClick={() => handleNavigate("/makereport")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Create a Report
                  </li>
                  <li
                    onClick={() => handleNavigate("/uploadDoc")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Upload the Document
                  </li>
                  <li
                    onClick={() => handleNavigate("/roz")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Daily Name
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Inprocess;
