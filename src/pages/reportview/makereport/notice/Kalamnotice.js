import React from "react";

function Kalamnotice() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white  mt-5 print:mt-0 print:p-4">
      {/* Header Section */}
      <div className="flex justify-end p-4 print:p-0">
        <button
          onClick={handlePrint}
          className="print:hidden w-32 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          Print
        </button>
      </div>
      <div className="text-center mb-4 print:mb-2">
        <h1 className="text-2xl font-bold print:text-xl">
          स्वामी विवेकानंद नागरी सहकारी पतसंस्था मर्यादित
        </h1>
        <p className="text-sm print:text-xs">
          मुख्य , बी. 2/3, उद्यान कॉम्प्लेक्स, ससराल
        </p>
      </div>
      <hr className="print:hidden" />

      {/* Notice Details */}
      <div className="mb-6 font-bold print:mb-2">
        <p className="text-center print:text-sm mt-2">कर्ज मागणी नोटीस</p>
        <p className="text-center print:text-xs">
          ( महाराष्ट्र सहकारी संस्था अधिनियम 1960 व नियम 1961 चे नियम 46 अन्वये
          नोटीस )
        </p>
        <p className="mt-5 print:mt-3">जावक क्रमांक:-</p>
        <div className="flex justify-between mt-4 print:mt-2">
          <p>दिनांक:- / /20</p>
          <p className="text-right">
            संदर्भ - कर्ज खाते क्रमांक : <u>185/110</u>
          </p>
        </div>
      </div>
      <p>प्रति,</p>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6 font-bold print:mb-4 print:text-xs">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-4 py-2 border">क्र.</th>
              <th className="px-4 py-2 border">नाव</th>
              <th className="px-4 py-2 border">पत्ता</th>
              <th className="px-4 py-2 border">भूमिका</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">जाबक संजय विठ्ठल</td>
              <td className="border px-4 py-2">
                शंकर नगर तहसिलीत ऑफिस जवळच किराणा दुकान जुन जालना, ता. जालना,
                जि. जालना
              </td>
              <td className="border px-4 py-2">कर्जदार</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">2</td>
              <td className="border px-4 py-2">जाबक विठ्ठल विठ्ठल</td>
              <td className="border px-4 py-2">
                सोर्टी नगर अंबड रोड जुन जालना, ता. जालना, जि. जालना पिन 431203
              </td>
              <td className="border px-4 py-2">जामीनदार</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">2</td>
              <td className="border px-4 py-2">साठे सुनीता कारभारी</td>
              <td className="border px-4 py-2">
                सरस्वती भवन शाखा जवळ नवर नगर जुन जालना, ता. जालना, जि. जालना पिन
                431203
              </td>
              <td className="border px-4 py-2">जामीनदार</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Content Section */}
      <div className="text-justify text-sm mb-8 print:text-xs print:mb-4">
        <p>
          या नोटीसी द्वारे आपणांस कळविण्यात येते कि , कर्जदार-
          <b>जाधव संजय विठ्ठल</b>- यांचेकडे येणे असलेले कर्जाबाबत अनेक वेळी लेखी
          व तोंडी सूचना देऊनही कर्जदार यांनी त्यांच्याकडे थकित असलेल्या
          कर्जरकमेचा भरणा केलेला नाही. ज्या कारणासाठी सदर कर्ज तात्कालीन वेळी
          उपरोक्त कर्जदार यांना वितरीत करण्यात आले होते, त्या कारणासाठी त्याचा
          वापर झालेला नाही. या बाबत मा. संचालक मंडळाच्या मिटिंग मध्ये चर्चा होऊन
          निर्णय घेण्यात आला की थकबाकीदार <b>जाधव संजय विठ्ठल</b>- व त्यांचे
          उपरोक्त जामिनदार यांचे विरुद्ध महाराष्ट्र सहकारी संस्था अधिनियम १९६० व
          नियम १९६१ चे नियम ४६ अन्वये नोटीस देऊन पूर्ण कर्ज , व्याज व खर्च मागणी
          करण्यात यावी असे दिनांक <u>11/09/2021</u> चे मा. संचालक मंडळाचे मिटिंग
          मध्ये ठरलेले आहे. सबब आपणांस या नोटीसीद्वारे कळविण्यात येते की,
          आपणाकडे येणे असलेले कर्ज रुपये <u>45399.00</u> + व्याज + इतर खर्च ही
          नोटीस मिळालेपासून ८ दिवसाचे आत भरणा करावा. अन्यथा
        </p>
        <div className="font-bold mt-3 print:mt-2">
          मा. सहा.निबंधक सह.संस्था (परसेवा), म.राज्य सह. पतसंस्था फेडरेशन मर्या.
          <br />
          ता. पुणे शहर, जि. पुणे
        </div>
        <p className="mt-10 print:mt-4">
          यांचेकडे महाराष्ट्र सहकारी संस्था अधिनियम १९६० चे कलम १०१ अन्वये वसुली
          दाखला मिळणेकामी प्रस्ताव दाखल करणेत येईल याची नोंद घ्यावी.
        </p>
      </div>

      {/* Footer Section */}
      <div className="text-right mt-8 print:mt-28">
        <p>अधिकृत प्रतिनिधी</p>
        <p className="font-bold">
          स्वामी विवेकानंद नागरी सहकारी पतसंस्था मर्यादित
        </p>
      </div>
    </div>
  );
}

export default Kalamnotice;
