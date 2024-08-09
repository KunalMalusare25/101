import React from "react";

function TransferAR() {
  // Sample data for the table
  const cases = [
    {
      caseNo: "101",
      branch: "Main",
      name: "John Doe",
      address: "123 Main St, City, State",
      mobileNo: "123-456-7890",
      arName: "Jane Smith",
      condition: "Pending",
    },
    {
      caseNo: "102",
      branch: "Sub",
      name: "Alice Brown",
      address: "456 Elm St, City, State",
      mobileNo: "987-654-3210",
      arName: "Bob Johnson",
      condition: "Approved",
    },
    // Add more cases as needed
  ];

  return (
    <div className="flex items-center justify-center mt-8 md:mt-12 lg:mt-16 p-4 md:p-8">
      <div className="bg-white rounded-lg shadow-lg p-5 md:p-8 w-full max-w-4xl lg:max-w-6xl">
        <p className="mt-2 text-orange-500 p-3 font-semibold text-center">
          <span className="block mb-3">A R ला हस्तांतरित केस यादी</span>
          <hr />
        </p>
        <div className="flex flex-wrap justify-between mb-5">
          <div className="flex items-center mb-3 md:mb-0">
            <p className="mr-3 text-gray-700">Show</p>
            <input
              type="number"
              className="p-1 border border-gray-300 rounded-md w-20 focus:outline-none focus:ring-2 focus:ring-orange-300"
              placeholder="10"
            />
            <p className="ml-3 text-gray-700">Entries</p>
          </div>
          <div className="flex items-center">
            <p className="mr-3 text-gray-700">Search:</p>
            <input
              type="search"
              className="p-1 border border-gray-300 rounded-md w-36 focus:outline-none focus:ring-2 focus:ring-orange-300"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2 text-left font-medium">
                  Case No
                </th>
                <th className="border border-gray-300 p-2 text-left font-medium">
                  Branch
                </th>
                <th className="border border-gray-300 p-2 text-left font-medium">
                  Name
                </th>
                <th className="border border-gray-300 p-2 text-left font-medium">
                  Address
                </th>
                <th className="border border-gray-300 p-2 text-left font-medium">
                  Mobile No
                </th>
                <th className="border border-gray-300 p-2 text-left font-medium">
                  AR Name
                </th>
                <th className="border border-gray-300 p-2 text-left font-medium">
                  Condition
                </th>
              </tr>
            </thead>
            <tbody>
              {cases.map((caseItem, index) => (
                <tr key={index} className="hover:bg-gray-100 even:bg-gray-50">
                  <td className="border border-gray-300 p-3">
                    {caseItem.caseNo}
                  </td>
                  <td className="border border-gray-300 p-3">
                    {caseItem.branch}
                  </td>
                  <td className="border border-gray-300 p-3">
                    {caseItem.name}
                  </td>
                  <td className="border border-gray-300 p-3">
                    {caseItem.address}
                  </td>
                  <td className="border border-gray-300 p-3">
                    {caseItem.mobileNo}
                  </td>
                  <td className="border border-gray-300 p-3">
                    {caseItem.arName}
                  </td>
                  <td className="border border-gray-300 p-3">
                    {caseItem.condition}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Mobile Responsive Cards */}
        <div className="md:hidden">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg mb-4 p-4 shadow-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold text-lg">
                  Case No: {caseItem.caseNo}
                </h2>
                <span
                  className={`text-sm font-semibold px-2 py-1 rounded ${
                    caseItem.condition === "Approved"
                      ? "bg-green-400 text-green-800"
                      : "bg-red-500 text-white-800"
                  }`}
                >
                  {caseItem.condition}
                </span>
              </div>
              <p className="text-gray-700 mb-1">
                <strong>Branch:</strong> {caseItem.branch}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Name:</strong> {caseItem.name}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Address:</strong> {caseItem.address}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Mobile No:</strong> {caseItem.mobileNo}
              </p>
              <p className="text-gray-700">
                <strong>AR Name:</strong> {caseItem.arName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TransferAR;
