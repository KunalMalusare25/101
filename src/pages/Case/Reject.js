import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Reject() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const dropdownRefs = useRef([]);
  const navigate = useNavigate();

  const tableData = [
    {
      caseNo: 1,
      branch: "uttamnagr",
      name: "kunal",
      address: "pune",
      mobile: "8888474692",
      status: "reject",
    },
    {
      caseNo: 2,
      branch: "shivajinagar",
      name: "raj",
      address: "mumbai",
      mobile: "9999999999",
      status: "reject",
    },
    {
      caseNo: 3,
      branch: "viman nagar",
      name: "sita",
      address: "pune",
      mobile: "7777777777",
      status: "reject",
    },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setOpenDropdownIndex(null); // Close dropdown after navigation
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRefs.current.every((ref) => ref && !ref.contains(event.target))
      ) {
        setOpenDropdownIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-8 px-4 md:px-6">
      <div className="bg-white rounded-lg shadow-lg p-5 w-full max-w-4xl md:max-w-6xl">
        <p className="text-orange-500 p-3 font-semibold text-center">
          <span className="block mb-3">नापसंत केस यादी</span>
          <hr />
        </p>
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
                  Process
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr
                  key={data.caseNo}
                  className="hover:bg-gray-100 even:bg-gray-50"
                >
                  <td className="border border-gray-300 px-4 py-2">
                    {data.caseNo}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {data.branch}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {data.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {data.address}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {data.mobile}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {data.status}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="relative">
                      <button
                        className="text-white bg-orange-500 hover:bg-orange-600 transition duration-200 px-4 py-2 rounded-md"
                        onClick={() => toggleDropdown(index)}
                      >
                        Process
                      </button>
                      {openDropdownIndex === index && (
                        <ul
                          className="absolute bg-white border border-gray-300 rounded-md shadow-md mt-1 w-48 z-50"
                          ref={(el) => (dropdownRefs.current[index] = el)}
                        >
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
              <div className="relative mt-2">
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
