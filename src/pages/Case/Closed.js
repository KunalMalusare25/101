import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Closed() {
  const [tableData] = useState([
    {
      caseNumber: "472",
      branch: "मुख्य",
      name: "जाधव संजय विठ्ठल",
      address: "शंकर नगर तहसील ऑफिस जानवी किराणा दुकान जुना जालना",
      mobile: "7774037519",
      ArName: "TestAR हवेली",
      status: "Closed",
    },
    {
      caseNumber: "472",
      branch: "मुख्य",
      name: "जाधव संजय विठ्ठल",
      address: "शंकर नगर तहसील ऑफिस जानवी किराणा दुकान जुना जालना",
      mobile: "7774037519",
      ArName: "TestAR हवेली",
      status: "Closed",
    },
    // Add more case objects as needed
  ]);

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const navigate = useNavigate();

  const handleDropdownClick = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const handleNavigate = (path) => {
    setOpenDropdownIndex(null); // Close the dropdown
    navigate(path); // Navigate to the desired path
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".closed-dropdown-container")) {
        setOpenDropdownIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-center mt-8 px-4 ">
      <div className="bg-white rounded-lg shadow-lg p-5 md:p-8 w-full max-w-4xl lg:max-w-7xl">
        <p className="text-orange-500 text-center font-semibold mb-4">
          <span className="block mb-2">बंद केस यादी</span>
          <hr />
        </p>
        <div className="flex items-center mb-2">
          <p className="mr-3 text-gray-700">Search:</p>
          <input
            type="search"
            className="p-1 border border-gray-300 rounded-md w-36 focus:outline-none focus:ring-2 focus:ring-orange-300"
            placeholder="Search..."
          />
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
                    row.status === "Closed"
                      ? "bg-red-200 text-red-800"
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
              <p className="text-gray-700 mb-1">
                <strong>AR Name:</strong> {row.ArName}
              </p>
              <div className="relative closed-dropdown-container mt-2">
                <button
                  className="text-white bg-orange-500 hover:bg-orange-600 transition duration-200 px-3 py-1 rounded-md w-full text-center"
                  onClick={() => handleDropdownClick(index)}
                >
                  प्रक्रिया
                </button>
                <ul
                  className={`absolute bg-white border border-gray-300 rounded-md shadow-md mt-1 transition-transform duration-200 transform ${
                    openDropdownIndex === index
                      ? "scale-100 opacity-100 z-50"
                      : "scale-90 opacity-0 pointer-events-none"
                  }`}
                  style={{ top: "100%" }}
                >
                  <li
                    onClick={() => handleNavigate("/addcase")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    पाहा
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Table for larger screens */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Case Number
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Branch
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mobile
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  AR Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  प्रक्रिया
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {row.caseNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.branch}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.address}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.mobile}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.ArName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="relative closed-dropdown-container">
                      <button
                        onClick={() => handleDropdownClick(index)}
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                      >
                        प्रक्रिया
                      </button>
                      {openDropdownIndex === index && (
                        <div className="absolute right-0 bg-white border rounded shadow-lg mt-2 w-48 z-50">
                          <ul className="text-sm text-gray-700">
                            <li
                              onClick={() => handleNavigate("/addcase")}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                              पाहा
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Closed;
