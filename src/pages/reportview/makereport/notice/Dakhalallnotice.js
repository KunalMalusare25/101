import React from "react";

function Dakhalallnotice() {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="p-6 bg-white max-w-7xl mx-auto border rounded-md  border-black mt-5">
      <div className="flex justify-end p-4 print:p-0">
        <button
          onClick={handlePrint}
          className="print:hidden w-32 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          Print
        </button>
      </div>
      <h2 className="text-xl font-bold mb-4 text-center border-b-2 border-gray-300">
        स्वामी विवेकानंद नागरी सहकारी पतसंस्था मर्यादित (मुख्य)
      </h2>
      <p className="text-left mb-4">
        <strong>प्रति:</strong> <br />
        मा. निबंधक / सहाय्यक निबंधक / परसेवा <br />
        सहकारी संस्था, <br />
        यांचे कार्यालय. <br />
      </p>
      <p className="text-center mb-4">
        <strong>कलम १०१ अंतर्गत दाखल केलेले एकूण दाव्यांची यादी</strong>
      </p>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 border px-4 text-left">अ. नं.</th>
            <th className="py-2 border px-4 text-left">कर्जदाराचे नाव</th>
            <th className="py-2 border px-4 text-left">खाते नंबर</th>
            <th className="py-2 border px-4 text-left">मुद्दल</th>
            <th className="py-2 border px-4 text-left">वसुलीस पात्र रक्कम</th>
            <th className="py-2 border px-4 text-left">चौकशी फी</th>
            <th className="py-2 border px-4 text-left">स्टॅम्पची रक्कम</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 border px-4">1</td>
            <td className="py-2 border px-4">जाधव संजय विठ्ठल</td>
            <td className="py-2 border px-4">185/110</td>
            <td className="py-2 border px-4">100,000.00</td>
            <td className="py-2 border px-4">52,372.00</td>
            <td className="py-2 border px-4">826.00</td>
            <td className="py-2 border px-4">1,047.00</td>
          </tr>
          <tr>
            <td colSpan="3" className="py-2 border px-4 text-right font-bold">
              एकूण रक्कम रुपये:
            </td>
            <td className="py-2 border px-4">100,000.00</td>
            <td className="py-2 border px-4">52,372.00</td>
            <td className="py-2 border px-4">826.00</td>
            <td className="py-2 border px-4">1,047.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Dakhalallnotice;
