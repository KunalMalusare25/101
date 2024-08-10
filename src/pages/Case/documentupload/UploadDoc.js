import React from "react";

function UploadDoc() {
  return (
    <div className="max-w-6xl mx-auto p-5 border border-gray-300 rounded-lg bg-gray-100 mt-5">
      <h2 className="mb-5 text-teal-700 text-2xl font-semibold text-center">
        दस्तऐवज अपलोड करा
      </h2>
      <hr className="mb-5" />
      <form>
        {[
          ["कर्ज अर्जाची सत्य प्रत", "अकाउंट स्टेटमेंट"],
          ["थकित रकमेचे प्रमाणपत्र", "सभासद असल्यास त्याचा पुरावा"],
          ["वचन चिट्ठी", "करारनामा / तारण गहाण कागद पत्र"],
          ["मागणी नोटीस - अ", "मागणी नोटीस - ब"],
          ["ररजिस्टर्ड पोस्ट नोटीस पोहोच पावती", "अधिकारी पत्र - ठराव"],
          ["चौकशी फी बँक चलन", "स्टॅम्प ड्यूटीची पावती"],
          ["नमुना यु", "१०० रुपयांचा कोर्ट फी स्टॅम्प"],
          ["रजिस्टर्ड पोस्ट पावतीसह समन्स", "रोजनामा - २"],
        ].map((pair, index) => (
          <div className="md:flex justify-between mb-4" key={index}>
            <div className="flex-1 mb-4 md:mb-0 md:mr-2">
              <label className="block mb-2">{pair[0]}</label>
              <input
                type="file"
                className="w-full p-2 border border-gray-400 rounded-md"
              />
            </div>
            <div className="flex-1 md:ml-2">
              <label className="block mb-2">{pair[1]}</label>
              <input
                type="file"
                className="w-full p-2 border border-gray-400 rounded-md"
              />
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="w-full p-3 bg-teal-700 text-white rounded-md hover:bg-teal-800"
        >
          जतन करा
        </button>
      </form>
    </div>
  );
}

export default UploadDoc;
