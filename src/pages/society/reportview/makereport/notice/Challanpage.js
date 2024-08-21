import React from "react";

const Challanpage = () => {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="container mx-auto p-4 text-sm max-w-7xl border border-black mt-5">
      <div className="flex justify-end p-4 print:p-0">
        <button
          onClick={handlePrint}
          className="print:hidden w-32 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          Print
        </button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-bold">चलन नंबर –</h2>
          <p>बँकेचे नाव : ________________________________________</p>
          <p>मध्ये भरलेल्या रोख रकमेचे चलन</p>
        </div>
        <div className="text-right">
          <p>दिनांक :- ______ / _____ /20___</p>
          <p>गाव / शाखा : ____________________</p>
        </div>
      </div>

      <div className="mb-4">
        <p>
          १) रक्कम कोणी आणून दिली त्याचे नाव व हुद्दा –
          ________________________________________
        </p>
        <p>
          २) ज्याच्या वतीने भरणा केला जात आहे त्याचे नाव –
          <u>स्वामी विवेकानंद नागरी सहकारी पतसंस्था मर्यादित (मुख्य )</u>
        </p>
      </div>

      <div className="mb-4 border border-gray-300">
        <div className="p-2">
          <p className="text-center font-semibold">
            कलम १०१ अन्वये चौकशी फी – ०४२५ सहकार व वस्त्रोद्योग विभाग कलम १०१
            चौकशी फी
          </p>
        </div>

        <table className="w-full border-collapse border border-gray-300 text-center">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2" colSpan={2}>
                पाठविलेल्या रकमेचा व अधिकार पत्र असल्यास पूर्ण तपशिल
              </th>
              <th className="border border-gray-300 p-2" colSpan={2}>
                रक्कम
                <th className="border border-gray-300 p-2 ">रुपये /पैसे </th>
              </th>

              <th className="border border-gray-300 p-2">
                (संकेतांक ०४२५०१३४०१) हिशोबाचा तपशिल
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-1">1</td>
              <td className="border border-gray-300 p-2">जाधव संजय विठ्ठल</td>
              <td className="border border-gray-300 p-2"> 826.00</td>
              <td className="border border-gray-300 p-2">0.0</td>
              <td className="border border-gray-300 p-2"></td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2"></td>
              <td className="border border-gray-300 p-2">
                अक्षरी रुपये :- आठ शे सव्वीस रुपये फक्त
              </td>
              <td className="border border-gray-300 p-2"> 826.00</td>
              <td className="border border-gray-300 p-2">0.0</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-40">
        <div className="text-center">
          <p>_________________</p>
          <p>भरणा करणाऱ्याची स्वाक्षरी</p>
        </div>
        <div className="text-center">
          <p>_________________</p>
          <p>ट्रेजरर</p>
        </div>
        <div className="text-center">
          <p>_________________</p>
          <p>अकौन्टट</p>
        </div>
        <div className="text-center">
          <p> बँकेचा शिक्का</p>
        </div>
      </div>
    </div>
  );
};

export default Challanpage;
