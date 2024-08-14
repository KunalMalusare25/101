import React from "react";
import { useNavigate } from "react-router-dom";

function MakeReport() {
  const navigate = useNavigate();

  const handleButtonClick = (url) => {
    // If you are using external links
    // window.location.href = url;

    // If you are using internal routing with React Router
    navigate(url);
  };

  return (
    <div className="font-sans p-5 max-w-4xl mx-auto border-black">
      {/* Header Section */}
      <div className="bg-teal-500 text-white flex items-center p-3 rounded mb-5">
        <h1 className="text-xl">रिपोर्ट</h1>
      </div>

      {/* Report Options Section */}
      <div className="mb-5">
        <h4 className="text-lg mb-3">
          वसुली दाखला देणाऱ्या अधिकाऱ्याचे पद / हुद्दा निवडावा:
        </h4>
        <div className="flex flex-col space-y-2">
          {[
            { id: "option1", text: "उपनिबंधक, सहकारी संस्था" },
            { id: "option2", text: "उपनिबंधक, सहकारी संस्था (परसेवा)" },
            {
              id: "option3",
              text: "साहा.निबंधक सह.संस्था (परसेवा), म.राज्य सह. पतसंस्था फेडरेशन मर्या.",
            },
            { id: "option4", text: "सहाय्यक निबंधक, सहकारी संस्था" },
            { id: "option5", text: "सहाय्यक निबंधक, सहकारी संस्था (परसेवा)" },
            {
              id: "option6",
              text: "सहाय्यक निबंधक (परसेवा), अहमदनगर जिल्हा पतसंस्थांचे सहकारी फेडरेशन मर्या. अहमदनगर",
            },
          ].map((option) => (
            <div key={option.id} className="flex items-center space-x-2">
              <input
                type="radio"
                id={option.id}
                name="reportOption"
                className="form-radio"
              />
              <label htmlFor={option.id} className="text-sm">
                {option.text}
              </label>
            </div>
          ))}
        </div>
      </div>
      <hr />

      {/* Form Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
        <div className="flex flex-col">
          <label className="font-bold text-sm mb-1">
            वसुली दाखला देणाऱ्या कार्यालयाचा पत्ता (पत्त्या मध्ये जिल्हा व
            तालुका लिहू नये.)
          </label>
          <input
            type="text"
            placeholder="वसूली दाखला देणार्‍या कार्यालयाचा पत्ता"
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-bold text-sm mb-1">
            वसुली दाखला देणाऱ्या कार्यालयाचा जिल्हा
          </label>
          <select className="p-2 border border-gray-300 rounded">
            <option>जिल्हा निवडा / Select Jilha</option>
            {/* Add options dynamically if needed */}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="font-bold text-sm mb-1">
            वसुली दाखला देणाऱ्या कार्यालयाचा तालुका
          </label>
          <select className="p-2 border border-gray-300 rounded">
            <option>तालुका निवडा / Select Taluka</option>
            {/* Add options dynamically if needed */}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="font-bold text-sm mb-1">
            सुनावणीसाठी हजर राहण्याचे ठिकाण
          </label>
          <input
            type="text"
            placeholder="सुनावणीसाठी हजर राहण्याचे ठिकाण"
            className="p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <hr />

      {/* Search Section */}
      <div className="my-8">
        <label className="text-sm">Search</label>
        <input
          type="text"
          placeholder="थकबाकीदार यादी Search..."
          className="ml-2 p-2 w-full border border-gray-300 rounded"
        />
      </div>
      <hr />

      {/* Button Section */}
      <div className="flex flex-wrap gap-2 mt-5">
        {[
          { text: "पहिली नोटीस", color: "bg-blue-500", url: "/FirstNotice" },
          { text: "अंतिम नोटीस", color: "bg-blue-500", url: "/Antim-notice" },

          { text: "कलम ४६", color: "bg-blue-500", url: "/kalam" },
          { text: "ऍफिडेव्हिट", color: "bg-blue-500", url: "/affidavit" },
          { text: "चलन", color: "bg-orange-500", url: "/challan" },
          {
            text: "दाखल केलेल्या प्रस्तावाची एकत्रित यादी",
            color: "bg-yellow-500 text-black",
            url: "/dakhal",
          },
          {
            text: "पत्त्यांचे लेबल प्रिंट करा ",
            color: "bg-yellow-500 text-black",
            url: "/labelprint",
          },
          { text: "101 सेट - पूर्ण सेट", color: "bg-red-500", url: "/ekset" },
          {
            text: "101 सेट - नमुना यु",
            color: "bg-blue-500",
            url: "/namuna-u",
          },
          {
            text: "रजिस्टर पोच पावतीसह समन्स",
            color: "bg-blue-500",
            url: "/registerpavti",
          },
          {
            text: "101 सेट - नमुना व्ही",
            color: "bg-blue-500",
            url: "/Namuna_V",
          },
          { text: "101 सेट - रोजनामा", color: "bg-blue-500", url: "/Roznama" },
          {
            text: "101 सेट - रोजनामा एक्स पार्टी",
            color: "bg-blue-500",
            url: "/RojnamaX",
          },
          { text: "101 सेट - जबाब", color: "bg-blue-500", url: "/Jawab" },
          { text: "101 सेट - ठराव", color: "bg-blue-500", url: "/Tharav" },
          {
            text: "मागणी नोटीस (प्रकार १)",
            color: "bg-red-500",
            url: "/Magni-Notice-Prakar1",
          },
          {
            text: "मागणी नोटीस (प्रकार 2)",
            color: "bg-red-500",
            url: "/Magni-Notice-Prakar2",
          },
          {
            text: "एक हप्ता थकित विनंती पत्र ",
            color: "bg-green-500",
            url: "/First-Hafta",
          },
          {
            text: "दोन हप्ता थकित विनंती पत्र ",
            color: "bg-green-500",
            url: "/Second-Hafta",
          },
          {
            text: "तीन हप्ता थकित विनंती पत्र",
            color: "bg-green-500",
            url: "/Third-Hafta",
          },
          { text: "N1", color: "bg-yellow-200", url: "/notice-1" },
          { text: "N2", color: "bg-yellow-200" },
          { text: "N3", color: "bg-yellow-200" },
        ].map((btn, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(btn.url)}
            className={`p-2 text-white rounded cursor-pointer transition-opacity hover:opacity-80 ${btn.color}`}
          >
            {btn.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MakeReport;
