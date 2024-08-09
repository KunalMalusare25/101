import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Closed() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const dropdownRefs = useRef([]);
  const navigate = useNavigate();

  const handleDropdownClick = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setOpenDropdownIndex(null);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRefs.current.every((ref) => ref && !ref.contains(event.target))
    ) {
      setOpenDropdownIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const options = ["See"];
  const tableData = [
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
      caseNumber: "473",
      branch: "उपमुख्य",
      name: "पाटील महेश राजेंद्र",
      address: "नगर पालिका, तिलक रोड, मुंबई",
      mobile: "8888899999",
      ArName: "TestAR हवेली",
      status: "Closed",
    },
    // Add more case objects as needed
  ];

  return (
    <div className="flex items-center justify-center mt-8 px-4">
      <div className="bg-white rounded-lg shadow-lg p-5 md:p-8 w-full max-w-4xl lg:max-w-6xl">
        <p className="text-orange-500 text-center font-semibold mb-4">
          <span className="block mb-2">बंद केस यादी</span>
          <hr />
        </p>
        <table className="hidden md:table w-full border-collapse border border-gray-300 mb-4">
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
                AR नाव
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
            {tableData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-100 even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  {row.caseNumber}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.branch}
                </td>
                <td className="border border-gray-300 px-4 py-2">{row.name}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.address}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.mobile}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.ArName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.status}
                </td>
                <td className="border border-gray-300 px-4 py-2 relative">
                  <button
                    onClick={() => handleDropdownClick(index)}
                    className="text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md"
                  >
                    Process
                  </button>
                  {openDropdownIndex === index && (
                    <div
                      className="absolute right-0 bg-white border border-gray-300 rounded-md shadow-md mt-1 z-10"
                      ref={(el) => (dropdownRefs.current[index] = el)}
                    >
                      {options.map((option, optIndex) => (
                        <div
                          key={optIndex}
                          onClick={() => handleNavigate("/addcase")}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="md:hidden">
          {tableData.map((row, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg mb-4 p-4 shadow-sm relative"
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
                <strong>AR नाव:</strong> {row.ArName}
              </p>
              <button
                onClick={() => handleDropdownClick(index)}
                className="text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md w-full mt-2"
              >
                Process
              </button>
              {openDropdownIndex === index && (
                <div
                  className="absolute left-0 right-0 bg-white border border-gray-300 rounded-md shadow-md mt-1 z-10"
                  ref={(el) => (dropdownRefs.current[index] = el)}
                >
                  {options.map((option, optIndex) => (
                    <div
                      key={optIndex}
                      onClick={() => handleNavigate("/addcase")}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Closed;
