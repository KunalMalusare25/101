import React from "react";

function Roznama() {
  return (
    <div className="flex flex-col p-5 w-full max-w-4xl mx-auto box-border">
      <div className="border border-gray-300 p-5 mb-5 bg-white shadow-md rounded-lg">
        <div className="flex flex-wrap justify-between mb-5">
          <div className="flex-1 mr-5 min-w-[250px]">
            <h4 className="text-lg font-bold">अर्जदार संस्थेचे नांव - मुख्य</h4>
            <p className="text-base font-semibold">
              अर्जदार संस्थेचा पत्ता - बी.2/3, उढाण कॉम्प्लेक्स, मस्तगड
            </p>
          </div>
          <div className="flex-1 mt-5 md:mt-0 min-w-[250px]">
            <h3 className="text-xl font-bold">विरुद्ध:</h3>
            <ul className="list-none ml-12">
              <li>1 थकबाकीदार : पवार सार्थक शिवाजी</li>
              <li>1 जामिनदार : शेडुते नरेंद्र रवींद्र</li>
              <li>2 जामिनदार : भुतेकर शिवाजी गणपत</li>
            </ul>
          </div>
        </div>
        <form className="flex flex-col">
          <div className="mb-4">
            <label className="block mb-2 font-bold text-gray-700">
              रोजनामा टेम्पलेट
            </label>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              <option>Select</option>
              <option>पहिली सुनावणी</option>
              <option>पुढील सुनावणी</option>
              <option>नमुना व्ही बजावणी</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold text-gray-700">
              संस्था तरफे हजर राहणेरे मानसाचे नाव :
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4 font-bold text-gray-700">
            <input type="checkbox" className="mr-2" />
            <u>गैरहजर</u>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold text-gray-700">
              जाब देनार्या तरफे हजर रहनारे मानसाचे नाव :
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4 font-bold text-gray-700">
            <input type="checkbox" className="mr-2" />
            <u>गैरहजर</u>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold text-gray-700">दिनांक</label>
            <input
              type="date"
              defaultValue="2024-06-12"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold text-gray-700">तपशील</label>
            <textarea className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold text-gray-700">
              पुढील दिनांक:
            </label>
            <input
              type="date"
              defaultValue="2024-06-13"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            जतन करा
          </button>
        </form>
      </div>
      <div className="border border-gray-300 p-5 bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 text-left">दिनांक</th>
              <th className="p-2 text-left">तपशील</th>
              <th className="p-2 text-left">संस्था तरफे हजर माणूस</th>
              <th className="p-2 text-left">जाब देनार्या तरफे हजर माणूस</th>
              <th className="p-2 text-left">पुढील दिनांक</th>
              <th className="p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td colSpan="6" className="p-2">
                No data available in table
              </td>
            </tr>
          </tbody>
        </table>
        {/* Card layout for mobile view */}
        <div className="block md:hidden">
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <p className="text-sm">
              <b>दिनांक:</b> 2024-06-12
            </p>
            <p className="text-sm">
              <b>तपशील:</b> तपशील नाही
            </p>
            <p className="text-sm">
              <b>संस्था तरफे हजर माणूस:</b> व्यक्ती नाही
            </p>
            <p className="text-sm">
              <b>जाब देनार्या तरफे हजर माणूस:</b> व्यक्ती नाही
            </p>
            <p className="text-sm">
              <b>पुढील दिनांक:</b> 2024-06-13
            </p>
            <button className="mt-2 bg-blue-600 text-white p-2 rounded-md">
              Action
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roznama;
