import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Reject() {
  const tableData = [
    {
      caseNo: 1,
      branch: "uttamnagr",
      name: "kunal",
      address: "pune",
      mobile: "8888474692",
      ArName: "TestAR हवेली",
      status: "reject",
    },
    {
      caseNo: 2,
      branch: "shivajinagar",
      name: "raj",
      address: "mumbai",
      mobile: "9999999999",
      ArName: "TestAR हवेली",
      status: "reject",
    },
    {
      caseNo: 3,
      branch: "viman nagar",
      name: "sita",
      address: "pune",
      mobile: "7777777777",
      ArName: "TestAR हवेली",
      status: "reject",
    },
  ];

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const navigate = useNavigate();

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const handleNavigate = (path) => {
    setOpenDropdownIndex(null); // Close dropdown after navigation
    navigate(path);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".reject-dropdown-container")) {
        setOpenDropdownIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-center mt-8 px-4">
      <div className="bg-white rounded-lg shadow-lg p-5 md:p-8 w-full max-w-4xl lg:max-w-7xl">
        <p className="text-orange-500 text-center font-semibold mb-4">
          <span className="block mb-2">Reject केस यादी</span>
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
              {tableData.map((data, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {data.caseNo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {data.branch}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {data.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {data.address}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {data.mobile}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {data.ArName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {data.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="relative reject-dropdown-container">
                      <button
                        onClick={() => toggleDropdown(index)}
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
                            <li
                              onClick={() => handleNavigate("/addcase")}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                              सुधारणे
                            </li>
                            <li
                              onClick={() => handleNavigate("/rejectreason")}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                              केस Reject Reason
                            </li>
                            <li
                              onClick={() => handleNavigate("/tranferar")}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                              A R ला हस्तांतरित करा
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
        {/* Card view for mobile devices */}
        <div className="md:hidden">
          {tableData.map((data, index) => (
            <div
              key={data.caseNo}
              className="border border-gray-300 rounded-lg mb-4 p-4 shadow-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold text-lg">
                  केस नं.: {data.caseNo}
                </h2>
                <span
                  className={`text-sm font-semibold px-2 py-1 rounded ${
                    data.status === "reject"
                      ? "bg-red-200 text-red-800"
                      : "bg-green-200 text-green-800"
                  }`}
                >
                  {data.status}
                </span>
              </div>
              <p className="text-gray-700 mb-1">
                <strong>शाखा:</strong> {data.branch}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>नाव:</strong> {data.name}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>पत्ता:</strong> {data.address}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>मोबाईल नं:</strong> {data.mobile}
              </p>
              <div className="relative reject-dropdown-container mt-2">
                <button
                  className="text-white bg-orange-500 hover:bg-orange-600 transition duration-200 px-3 py-1 rounded-md w-full text-center"
                  onClick={() => toggleDropdown(index)}
                >
                  Process
                </button>
                {openDropdownIndex === index && (
                  <ul className="absolute left-0 right-0 bg-white border border-gray-300 rounded-md shadow-md mt-1 w-full z-50">
                    <li
                      onClick={() => handleNavigate("/addcase")}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      See
                    </li>
                    <li
                      onClick={() => handleNavigate("/addcase")}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Improve
                    </li>
                    <li
                      onClick={() => handleNavigate("/rejectreason")}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Case Reject Reason
                    </li>
                    <li
                      onClick={() => handleNavigate("/tranferar")}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Transfer to AR
                    </li>
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reject;
