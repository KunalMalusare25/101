import React from "react";

function RegisterPavti() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container max-w-4xl mx-auto p-4 border border-black mt-5 print:mt-0 print:p-2 print:max-w-full">
      {/* Header Section */}
      <div className="flex justify-end p-4 print:p-0">
        <button
          onClick={handlePrint}
          className="print:hidden w-32 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          Print
        </button>
      </div>

      <div className="text-center border-b p-4 h-full border border-black print:text-sm print:border-none">
        <div className="flex print:flex-col">
          <div className="bg-gray-300 h-40 w-60 border border-black print:h-20 print:w-40 print:text-xs">
            <h2 className="font-bold text-xl mt-14 print:mt-5 print:text-lg">
              रजिस्टर पोस्ट पावतीसह समन्स
            </h2>
          </div>
          <div className="text-left border border-black w-full ml-1 print:ml-0 print:text-xs">
            <p>
              सहा.निबंधक सह.संस्था (परसेवा), म.राज्य सह. पतसंस्था फेडरेशन
              मर्या.,
            </p>
            <p>यांचे कार्यालय</p>
            <p>
              प्रमिला अपार्टमेंट, ३ रा मजला, लकाकी रोड, मॉंडेल कॉलनी, पुणे., ता.
              पुणे शहर, जि. पुणे
            </p>
            <div className="mt-10 flex justify-between print:mt-5 print:text-xs">
              <p>जा.क्र. वसुली दाखला / १०१ /    / २०</p>
              <p> अर्ज क्रमांक : </p>
              <p className="mr-16">
                दिनांक - <input type="date" className="print:w-20 print:h-4" />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Address Section */}
      <div className="mt-4 print:mt-2 print:text-xs">
        <div className="flex justify-between border p-4 print:p-2 print:border-none">
          <div>
            <p>प्रति, मॅनेजर / वसुली विभाग प्रमुख</p>
          </div>
        </div>

        <table className="w-full border-collapse border border-gray-300 text-center font-bold print:text-xs">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 print:p-1"></th>
              <th className="border border-gray-300 p-2 print:p-1">नांव:-</th>
              <th className="border border-gray-300 p-2 print:p-1">पत्ता:-</th>
              <th className="border border-gray-300 p-2 print:p-1"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 print:p-1">संस्था</td>
              <td className="border border-gray-300 p-2 print:p-1">
                स्वामी विवेकानंद नागरी सहकारी पतसंस्था मर्यादित (मुख्य )
              </td>
              <td className="border border-gray-300 p-2 print:p-1">
                बी 2/3, उढाण कॉम्प्लेक्स, मस्तगड
              </td>
              <td className="border border-gray-300 p-2 print:p-1">अर्जदार</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table Section */}
      <div className="mt-2 text-center font-bold text-lg mb-2 print:mt-1 print:mb-1 print:text-base">
        <u>विरुद्ध</u>
      </div>

      <table className="w-full border-collapse border border-gray-300 text-center print:text-xs">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 print:p-1">सं.</th>
            <th className="border border-gray-300 p-2 print:p-1">नांव:-</th>
            <th className="border border-gray-300 p-2 print:p-1">पत्ता:-</th>
            <th className="border border-gray-300 p-2 print:p-1">वय:- </th>
            <th className="border border-gray-300 p-2 print:p-1">व्यवसाय:- </th>
            <th className="border border-gray-300 p-2 print:p-1">जबाब देणार</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2 print:p-1">1</td>
            <td className="border border-gray-300 p-2 print:p-1">
              थकबाकीदार:- जाधव संजय विठ्ठल
            </td>
            <td className="border border-gray-300 p-2 print:p-1">
              शंकर नगर तहसील ऑफिस जानवी किराणा दुकान जुना
              जालना,ता.जालना,जि.जालना
            </td>
            <td className="border border-gray-300 p-2 print:p-1">42</td>
            <td className="border border-gray-300 p-2 print:p-1">
              जनरल स्टोअर्स
            </td>
            <td className="border border-gray-300 p-2 print:p-1">जबाब देणार</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 print:p-1">2</td>
            <td className="border border-gray-300 p-2 print:p-1">
              जामिनदार:- जाधव विष्णू विठ्ठल
            </td>
            <td className="border border-gray-300 p-2 print:p-1">
              सोरटी नगर अंबड रोड जुना जालना ,ता.जालना,जि.जालना
            </td>
            <td className="border border-gray-300 p-2 print:p-1">42</td>
            <td className="border border-gray-300 p-2 print:p-1"> नोकरी</td>
            <td className="border border-gray-300 p-2 print:p-1">जबाब देणार</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 print:p-1">3</td>
            <td className="border border-gray-300 p-2 print:p-1">
              जामिनदार:- सावळे सुनील काशीनाथ
            </td>
            <td className="border border-gray-300 p-2 print:p-1">
              सरस्वती भुवन शाळा जवळ घायल नगर जुना जालना,ता.जालना,जि.जालना
            </td>
            <td className="border border-gray-300 p-2 print:p-1">42</td>
            <td className="border border-gray-300 p-2 print:p-1">
              पाव भाजी विक्री
            </td>
            <td className="border border-gray-300 p-2 print:p-1">जबाब देणार</td>
          </tr>
        </tbody>
      </table>

      {/* Notice Section */}
      <div className="mt-5 print:mt-2 print:text-xs">
        <table>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 print:p-1">1</td>
              <td className="border border-gray-300 p-2 print:p-1">
                तुम्हास नोटिस देण्यात येते की, ज्या अर्थी{" "}
                <b>स्वामी विवेकानंद नागरी सहकारी पतसंस्था मर्यादित (मुख्य ) </b>
                यांनी दिनांक ____/____/२०____ रोजी तुमच्या विरुद्ध महाराष्ट्र
                सहकारी संस्था अधिनियम, १९६० कलम १०१ प्रमाणे{" "}
                <b>'वसुलीचा दाखला'</b> मिळण्याबाबत रीतसर अर्ज या कार्यालयाकडे
                दाखल केलेला आहे. आणि.....
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 print:p-1">2</td>
              <td className="border border-gray-300 p-2 print:p-1">
                ज्या अर्थी सदर अर्जामध्ये तुम्हा सर्व जाब देणार्‍यांच्या विरुद्ध
                रक्कम रुपये <b>52372.00</b> बाबत वसुलीचा दाखला मिळवा म्हणून
                विनंती केली आहे. आणि .......
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 print:p-1">3</td>
              <td className="border border-gray-300 p-2 print:p-1">
                त्याअर्थी तुम्हास नोटिस देण्यात येते की, दिनांक____/____/२०____
                रोजी दिवसाचे ____ वाजता तुम्ही / अधिकृत प्रतिनिधी सहा.निबंधक
                <b>
                  सह.संस्था (परसेवा), म.राज्य सह. पतसंस्था फेडरेशन मर्या., पुणे
                  शहर, यांचे समोर महालक्ष्मी नागरी सह. पतसंस्था, मस्तगड,जालना.
                </b>
                येथे स्वत: हजर रहावे व अर्जदार पतसंस्थेने/बँकेने दाखल केलेल्या
                अर्जाबाबत तुमचे म्हणणे सादर करावे.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 print:p-1">4</td>
              <td className="border border-gray-300 p-2 print:p-1">
                तुम्हास अशी नोटिस देण्यात येते की, सदर अर्जाबाबत सदर दिवशी पूर्ण
                चौकशी करण्यात येईल व सदर अर्जाचा निकालही करण्यात येईल.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 print:p-1">5</td>
              <td className="border border-gray-300 p-2 print:p-1">
                याकामी तुम्ही गैरहजर राहिल्यास तुमच्या गैरहजेरीत अर्जाची चौकशी
                करण्यात येईल व योग्य तो निर्णय केला जाईल. या नोटीशीबाबत अर्जदार
                यांनी दाखल केलेल्या अर्जाची नक्कल जोडली आहे. (पान 1 ते   ) ही
                नोटिस आज दिनांक ____/____/२०____ रोजी माझे सही व कार्यालयाच्या
                मुद्रेसह दिली आहे.
                <div className="font-bold">
                  <p className="mt-20 text-end print:mt-10">
                    मा.सहा.निबंधक सह.संस्था (परसेवा), म.राज्य सह. पतसंस्था
                    फेडरेशन मर्या.
                  </p>
                  <p className="text-end print:text-xs">
                    ता. पुणे शहर, जि. पुणे.
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer Section */}
      <div className="mt-3 justify-center border border-black w-full h-full print:text-xs print:mt-1">
        <p className="justify-center bg-gray-300 border border-black font-bold print:p-1">
          विशेष टीप – आज दिनांक :{" "}
          <input type="date" className="print:w-20 print:h-4" /> रोजी माझे सही व
          कार्यालयाच्या मुद्रेसह दिली आहे.
        </p>
        <p className="border border-black print:text-xs">
          ही नोटिस <b>स्वामी विवेकानंद नागरी सहकारी पतसंस्था मर्यादित</b> यांनी
          जाब देणार सभासद यांचेवर बजावण्याबाबत त्यांना महाराष्ट्र सहकारी संस्था
          नियम १९६१ चा नियम ७८ अन्वये अधिकार दिलेले आहेत.
        </p>
      </div>
    </div>
  );
}

export default RegisterPavti;
