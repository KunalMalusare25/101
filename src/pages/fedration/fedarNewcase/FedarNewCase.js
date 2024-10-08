import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function FedarNewCase() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const navigate = useNavigate();

  const [tableData, setTableData] = useState([
    {
      caseNumber: "472",
      branch: "मुख्य",
      name: "जाधव संजय विठ्ठल",
      address: "शंकर नगर तहसील ऑफिस जानवी किराणा दुकान जुना जालना",
      mobile: "7774037519",
      status: "Open",
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
    {
      caseNumber: "474",
      branch: "मुख्य",
      name: "राठोड रमेश जगन्नाथ",
      address: "पुणे स्टेशन, सिविल लाईन्स",
      mobile: "9898989898",
      status: "Closed",
    },
    // Add more rows as needed
  ]);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setOpenDropdownIndex(null); // Close dropdown after navigation
  };

  const handleDelete = (index) => {
    const updatedTableData = tableData.filter((_, i) => i !== index);
    setTableData(updatedTableData);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".new-dropdown-container")) {
        setOpenDropdownIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="flex flex-col py-10 px-4 lg:px-0">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl mx-auto">
        <p className="text-orange-600 font-bold mb-4">
          नवीन केस यादी
          <hr className="my-4" />
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg">
            Print
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
          <div className="flex items-center mb-2 sm:mb-0">
            <p className="mr-2">Show</p>
            <input
              type="search"
              className="p-1 w-24 rounded border border-gray-300"
              placeholder="Search"
            />
            <p className="ml-2">Entries</p>
          </div>
          <div className="flex items-center">
            <p className="mr-2">Search:</p>
            <input
              type="search"
              className="p-1 w-48 rounded border border-gray-300"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Responsive Table */}
        <div className="block md:hidden">
          {tableData.map((row, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 mb-4 bg-white shadow"
            >
              <div className="font-bold text-lg mb-2">
                Case Number: {row.caseNumber}
              </div>
              <p>
                <span className="font-semibold">Branch:</span> {row.branch}
              </p>
              <p>
                <span className="font-semibold">Name:</span> {row.name}
              </p>
              <p>
                <span className="font-semibold">Address:</span> {row.address}
              </p>
              <p>
                <span className="font-semibold">Mobile:</span> {row.mobile}
              </p>
              <p>
                <span className="font-semibold">Status:</span> {row.status}
              </p>
              <div className="relative new-dropdown-container mt-4">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-2"
                >
                  प्रक्रिया
                </button>
                {openDropdownIndex === index && (
                  <div className="absolute bg-white border rounded shadow-lg mt-2 w-48">
                    <ul className="text-sm text-gray-700">
                      <li
                        onClick={() => handleNavigate("/addcase")}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        ACCECPT
                      </li>
                      <li
                        onClick={() => handleNavigate("/addcase")}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        REJECT
                      </li>
                      <li
                        onClick={() => handleNavigate("/makereport")}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        SEE
                      </li>

                      <li
                        onClick={() => handleNavigate("/uploadDoc")}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        दस्तऐवज
                      </li>
                      <li
                        onClick={() => handleDelete(index)}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                      >
                        हटवा
                      </li>
                    </ul>
                  </div>
                )}
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
                    {row.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="relative new-dropdown-container">
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
                              ACCECPT
                            </li>
                            <li
                              onClick={() => handleNavigate("/addcase")}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                              REJECT
                            </li>
                            <li
                              onClick={() => handleNavigate("/makereport")}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                              SEE
                            </li>

                            <li
                              onClick={() => handleNavigate("/uploadDoc")}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                              दस्तऐवज
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

export default FedarNewCase;
