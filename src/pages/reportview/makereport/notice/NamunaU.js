import React from "react";

function NamunaU() {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="p-4 max-w-7xl mx-auto  bg-white   text-sm print:text-xs">
      <style>{`@media print {
  @page {
    size: A4;
    margin: 10mm;
   
  }
  
  body {
    margin: 0;
    padding: 0;
  }
  
  

  .container {
    margin-top: 80px !important;
    padding-top: 0 !important;
  }
    .break-before{
    page-break-before: always;
    }
}`}</style>
      <div className="flex justify-end p-4 print:p-0 ">
        <button
          onClick={handlePrint}
          className="print:hidden w-32 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          Print
        </button>
      </div>

      {/* page1 */}

      <div className="text-center border border-dashed border-gray-400 pb-2 ">
        <h2 className="text-4xl font-semibold opacity-20">
          AFFIX COURT FEE STAMP
        </h2>
      </div>

      <div className="text-center  bg-gray-300 font-semibold">
        <br />
        <h2 className="text-xl  ">नमुना "यु"</h2>
        <br />
        <p>
          महाराष्ट्र सहकारी संस्था अधिनियम 1960 कलम 101 अन्वये दाखल करणेचा अर्ज
        </p>
        <p>(नियम 86 अं पध्यता)</p>
      </div>

      <div className="mb-1 border border-black p-2">
        <p className="font-bold">
          मा.सहा.निबंधक सह.संस्था (परसेवा), म.राज्य सह. पतसंस्था फेडरेशन मर्या.,
        </p>
        <p>प्रमिला अपार्टमेंट, ३ रा मजला, लकाकी रोड, मॉंडेल कॉलनी, पुणे.</p>
        <p>ता. पुणे शहर, जि. पुणे.</p>
        <p className="font-bold">यांचे समोर</p>
      </div>

      <div className=" border border-black p-2">
        <div className="flex justify-between">
          <p>
            अर्ज क्रमांक:- <input type="text" className="border" /> / कलम 101 /
            २०
            <input type="text" className="border w-10" />
            -२०
            <input type="text" className="border w-10" />
          </p>
        </div>
      </div>

      <div className="mb-4 border border-black p-2">
        <div className="flex justify-between">
          <p>मॅनेजर / अधिकृत प्रतिनिधी </p>
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
      <div className="mb-1 border p-2">
        <p className="font-bold">वसुलीस पात्र रक्कम रुपये - 52372.00</p>
        <p>
          अर्जदार:-
          <b>स्वामी विवेकानंद नागरी सहकारी पतसंस्था मर्यादित (मुख्य )</b>
        </p>
        <p>खालील प्रमाणे अर्ज करीत आहेत</p>
      </div>

      {/* second table */}
      <div className="mt-5 print:mt-2 print:text-xs">
        <table>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 print:p-1">1</td>
              <td className="border border-gray-300 p-2 print:p-1">
                <p className="font-semibold ">
                  अर्जदार:- स्वामी विवेकानंद नागरी सहकारी पतसंस्था मर्यादित
                  (मुख्य )
                </p>
                <p>
                  ही संस्था, महाराष्ट्र सहकारी संस्था अधिनियम 1960 मधील तरतुदीस
                  अनुसरून रजिस्टर करण्यात आलेली संस्था आहे.
                </p>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 print:p-1">2</td>
              <td className="border border-gray-300 p-2 print:p-1">
                <p>
                  वर नमूद केलेले जाब देणार क्रमांक <b>1 ते 3</b> सर्वजण संस्थेचे
                  सभासद / नाममात्र सभासद आहेत.
                </p>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 print:p-1">3</td>
              <td className="border border-gray-300 p-2 print:p-1">
                <p>
                  अर्जदार संस्थेचे <b>व्यवसाय वाढीकारिता</b> कर्ज मिळण्यासाठी
                  जाब देणार क्रमांक <b>1</b> ने / यांनी दिनांक <b>02/04/2019</b>
                  रोजी रीतसर अर्ज संस्थेकडे केला आहे. जाब देणार क्रमांक{" "}
                  <b>2 ते 3</b>
                  यांनी वरील कर्ज व्यवहारासह जामिनदार राहण्याचे कबुल केले आहे.
                </p>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 print:p-1">4</td>
              <td className="border border-gray-300 p-2 print:p-1">
                <p>
                  सदर कर्ज बँकेच्या / पतसंस्थेच्या संचालक मंडळाने / कर्ज समितीने
                  /शाखा अधिकाऱ्याने जाब देणार क्रमांक <b>1</b> यांनी दिलेल्या
                  कर्ज अर्जाचा विचार करून जाब देणार क्रमांक <b>1</b> यांस रक्कम
                  <b>रुपये - 100000.00 (अक्षरी रुपये - एक लाख रुपये फक्त)</b>
                  कर्ज म्हणून मंजूर केले आहे.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-right mt-4 text-sm print:text-sm print:mt-56 ">
        <p>पान क्र. 1</p>
      </div>

      <br />
      <hr className="border border-b-gray-950" />

      {/* page-2 */}
      <div className=" break-before border border-gray-300 mt-10 ">
        <div className="flex justify-between border-b border-gray-300 p-2 bg-gray-100">
          <p>5. सदर कर्ज व्यवहारात जाब देणार क्रमांक</p>
          <p>व त्यांनी खाली नमूद केलेले तारण दिले आहे.</p>
        </div>
        {/* table-1 */}
        <div className="border-t border-gray-300 p-2">
          <table className="table-auto w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border px-2 py-1 w-1/3">अ) तारणाचा तपशील</th>
                <th className="border px-2 py-1 w-2/3"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1 ">पगाराची माहिती</td>
                <td className="border px-2 py-1"></td>
              </tr>
              <tr>
                <td className="border px-2 py-1 ">जंगम मालमत्तेचे वर्णन</td>
                <td className="border px-2 py-1"></td>
              </tr>
              <tr>
                <td className="border px-2 py-1 ">स्थावर मालमत्तेचे वर्णन</td>
                <td className="border px-2 py-1"></td>
              </tr>
              <tr>
                <td className="border px-2 py-1 ">इतर</td>
                <td className="border px-2 py-1 font-semibold">
                  वैयक्तिक जामीनदार
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* table-2 */}
        <div className=" border border-gray-300 p-2 bg-gray-100">
          <p className="font-bold">ब) वैयक्तीक जामीन</p>
        </div>
        <table className="w-full border-collapse border border-gray-300 text-center print:text-xs">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 print:p-1">सं.</th>
              <th className="border border-gray-300 p-2 print:p-1">नांव:-</th>
              <th className="border border-gray-300 p-2 print:p-1">पत्ता:-</th>
              <th className="border border-gray-300 p-2 print:p-1">वय:-</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 print:p-1">1</td>
              <td className="border border-gray-300 p-2 print:p-1">
                जामिनदार:- जाधव विष्णू विठ्ठल
              </td>
              <td className="border border-gray-300 p-2 print:p-1">
                सोरटी नगर अंबड रोड जुना जालना ,ता.जालना,जि.जालना
              </td>
              <td className="border border-gray-300 p-2 print:p-1">42</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 print:p-1">2</td>
              <td className="border border-gray-300 p-2 print:p-1">
                जामिनदार:- सावळे सुनील काशीनाथ
              </td>
              <td className="border border-gray-300 p-2 print:p-1">
                सरस्वती भुवन शाळा जवळ घायल नगर जुना जालना,ता.जालना,जि.जालना
              </td>
              <td className="border border-gray-300 p-2 print:p-1">42</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* table-Notice Section */}
      <div className="mt-1 print:mt-2 print:text-xs">
        <table>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 print:p-1">6</td>
              <td className="border border-gray-300 p-2 print:p-1">
                सर्व जाब देणार यांनी बँकेत / पतसंस्थेत दिनांक <b>07/05/2019</b>
                रोजी / वेळोवेळी डिमांड प्रॉमिसरी नोट आणि इतर योग्य ते दस्त ऐवज
                करारनामे लिहून दिले आहेत. सदर करारनाम्यातील तपशीलाप्रमाणे सर्व
                जाब देणार यांनी व्यक्तीशः आणि इतर संयुक्तरीत्या / एकत्रितपणे
                कर्ज परतफेड करण्याची हमी दिली आहे. सर्व जाब देणार कर्ज परतफेड
                करण्यात व्यक्तीशः आणि संयुक्तरीत्या जबाबदार आहेत.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 print:p-1">7</td>
              <td className="border border-gray-300 p-2 print:p-1">
                जाब देणार क्रमांक <b>1 ते 3</b> यांनी करारनाम्यातील
                तपशीलाप्रमाणे अर्जदार बँकेच्या / पतसंस्थेच्या कर्ज रकमेची परतफेड
                व्याजासह वेळेवर केलेली नाही. सदर रकमेची त्यांनी थकबाकी केलेली
                आहे. सदर रक्कम परतफेड करण्यास त्यांनी कसूर केलेला आहे.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 print:p-1">8</td>
              <td className="border border-gray-300 p-2 print:p-1">
                याबाबत अर्जदार संस्थेने सर्व जाब देणार यांना कर्जाची थकबाकीची
                रक्कम भरण्याबाबत वेळोवेळी लेखी नोटीसा तसेच तोंडी सूचना दिल्या
                मात्र जाब देणार यांनी कर्जाची थकबाकी रकमेचा भरणा अर्जदार
                बँकेत/पतसंस्थेत भरलेला नाही. जाब देणार थकबाकीदार झालेले आहेत.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 print:p-1">9</td>
              <td className="border border-gray-300 p-2 print:p-1">
                वरील जाब देणार यांनी लिहून दिलेल्या करारपत्रांच्या अटींप्रमाणे
                कर्ज रकमेची परतफेड न केल्याने अर्जदार संस्थेच्या संचालक मंडळ /
                वसुली समिती / प्रशासन मंडळ यांचे मंजुरीनुसार दिनांक
                <b>11/09/2021</b>
                रोजी झालेल्या सभेमध्ये ठराव क्रमांक <b>5 (1)</b> नुसार जाब देणार
                यांच्या कर्ज व्यवहाराबाबत विचार विनिमय झाला. महाराष्ट्र सहकारी
                संस्था अधिनियम, १९६० च्या कलम १०१ अन्वये सर्व जाब देणार यांचे
                विरुद्ध अर्ज दाखल करण्याबाबत ठराव मंजूर केला आहे. त्याच प्रमाणे
                महाराष्ट्र सहकारी संस्था अधिनियम, १९६० च्या कलम १५६ आणि
                महाराष्ट्र सहकारी संस्था नियम, १९६१ नियम क्रमांक १०७ अन्वये
                अर्जदार यांना मिळणाऱ्या वसुली दाखल्याची अंमलबजावणी करून
                मिळण्याबाबत ठराव मंजूर केला आहे.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 print:p-1">10</td>
              <td className="border border-gray-300 p-2 print:p-1">
                वर नमूद केल्याप्रमाणे अर्जदार बँकेने/संस्थेने सर्व जाब देणार
                यांना रितसर रजि.ए.डी. पोस्टाने दिनांक <b>10/07/2021</b> रोजी
                नोटीसा पाठवून रक्कम रुपये <b>52372.00 +</b> पुढील होणारे व्याज व
                खर्च ची मागणी केली. त्याप्रमाणे जाब देणार यांनी अर्जदार
                संस्थेकडे रकमेचा भरणा न केल्यास सर्व जाब देणार यांचेवर
                महाराष्ट्र सहकारी संस्था अधिनियम, १९६० च्या कलम १०१ मधील
                तरतुदींप्रमाणे अर्ज दाखल करून रक्कम वसुलीबाबत कायदेशीर उपाययोजना
                करण्यात येईल असे कळविले आहे.
                {/* fotter */}
                <div>
                  <p className="mt-20 text-end print:mt-10">
                    सबब, अर्जदार यांना जाब देणार यांचेविरुद्ध विभागीय
                    <b>
                      मे.मा. सहा.निबंधक सह.संस्था (परसेवा), म.राज्य सह. पतसंस्था
                      फेडरेशन मर्या., ता. पुणे शहर, जि. पुणे
                    </b>
                    यांचेकडे महाराष्ट्र सहकारी संस्था अधिनियम, १९६० च्या कलम १०१
                    अन्वये अर्ज करणे भाग पडले.
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-right  text-sm  mt-4 print:mt-80 ">
        <p>पान क्र. 2</p>
      </div>
      <hr className="border border-b-gray-950" />

      {/* page-3  section -A table 1*/}
      <div className=" mt-10 break-before border border-gray-300 text-xs  print:text-xs">
        <div className="bg-gray-200 p-2 font-bold">
          11. कर्ज व्यवहाराबाबत तपशील (31/08/2021 अखेर)
        </div>
        <div className="border-t border-gray-300">
          <div className="flex justify-between bg-gray-100 p-2 font-bold">
            <span> कर्ज मंजुरीचा तपशील –</span>
            <span></span>
          </div>
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr>
                <td className="border px-2 py-1 w-1/12 font-bold">अ. नं.</td>
                <td className="border px-2 py-1 w-4/12 font-bold">तपशील</td>
                <td className="border px-2 py-1 w-4/12"></td>
                <td className="border px-2 py-1 w-3/12 font-bold">
                  रक्कम रुपये
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">1</td>
                <td className="border px-2 py-1">कर्ज मंजूर रक्कम</td>
                <td className="border px-2 py-1"></td>
                <td className="border px-2 py-1 text-right">100000.00</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">2</td>
                <td className="border px-2 py-1">कर्ज दिल्याची तारीख</td>
                <td className="border px-2 py-1"></td>
                <td className="border px-2 py-1 text-right">07/05/2019</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">3</td>
                <td className="border px-2 py-1">कर्ज परतफेडीचा देय दिनांक</td>
                <td className="border px-2 py-1"></td>
                <td className="border px-2 py-1 text-right">07/05/2021</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">4</td>
                <td className="border px-2 py-1">
                  कर्ज परत फेडीचा मासिक हप्ता (लागू असल्यास)
                </td>
                <td className="border px-2 py-1"></td>
                <td className="border px-2 py-1 text-right">5100.00</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">5</td>
                <td className="border px-2 py-1">
                  कर्जाचा व्याजदर (द.सा.द.शे.)
                </td>
                <td className="border px-2 py-1"></td>
                <td className="border px-2 py-1 text-right">19.00%</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">6</td>
                <td className="border px-2 py-1">
                  करारपत्र/कर्ज मंजुरी नियम / ठराव क्र.3 प्रमाणे दंड व्याज दर
                  (टक्के)
                </td>
                <td className="border px-2 py-1"></td>
                <td className="border px-2 py-1 text-right">2.00%</td>
              </tr>
              {/* Add additional rows here */}
            </tbody>
          </table>
        </div>

        {/* Section B: अ. कर्ज वसुलीबाबतचा तपशील :– table 2 */}
        <div className="border-t border-gray-300">
          <div className="flex justify-between bg-gray-100 p-2 font-bold">
            <span>अ. कर्ज वसुलीबाबतचा तपशील :–</span>
            <span></span>
          </div>
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr>
                <td className="border px-2 py-1 w-1/12 font-bold">अ. नं.</td>
                <td className="border px-2 py-1 w-4/12 font-bold">तपशील</td>
                <td className="border px-2 py-1 w-4/12 font-bold">
                  रक्कम रुपये
                </td>
                <td className="border px-2 py-1 w-4/12 font-bold">तपशील</td>
                <td className="border px-2 py-1 w-3/12 font-bold">
                  रक्कम रुपये
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">1</td>
                <td className="border px-2 py-1">मंजूर कर्ज रक्कम रु.</td>
                <td className="border px-2 py-1 font-bold">100000.00</td>
                <td className="border px-2 py-1"> मुद्दल रक्कम रु.</td>
                <td className="border px-2 py-1 text-right font-bold">
                  100000.00
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">2</td>
                <td className="border px-2 py-1">दिनांक</td>
                <td className="border px-2 py-1 font-bold"> 31/08/2021</td>
                <td className="border px-2 py-1"> अखेर मुद्दल वसूल</td>
                <td className="border px-2 py-1 text-right font-bold">
                  54601.00
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">3</td>
                <td className="border px-2 py-1">दिनांक</td>
                <td className="border px-2 py-1 font-bold"> 31/08/2021</td>
                <td className="border px-2 py-1">अखेर येणे मुद्दल बाकी</td>
                <td className="border px-2 py-1 text-right font-bold">
                  45399.00
                </td>
              </tr>

              {/* Add additional rows here */}
            </tbody>
          </table>
        </div>

        {/* table-3 */}
        {/* Section C: ब. व्याज आकारणीबाबतचा तपशील :–table 3 */}
        <div className="border-t border-gray-300">
          <div className="flex justify-between bg-gray-100 p-2 font-bold">
            <span>ब. व्याज आकारणीबाबतचा तपशील :–</span>
            <span></span>
          </div>
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr>
                <td className="border px-2 py-1 w-1/12 font-bold">अ. नं.</td>
                <td className="border px-2 py-1 w-4/12 font-bold">दिनांक</td>
                <td className="border px-2 py-1 w-4/12 font-bold">तपशील</td>
                <td className="border px-2 py-1 w-4/12 font-bold text-end justify-items-end">
                  रक्कम रुपये
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">4</td>
                <td className="border px-2 py-1">31/08/2021</td>
                <td className="border px-2 py-1 font-bold">
                  अखेर आकारलेले एकूण व्याज
                </td>
                <td className="border px-2 py-1 font-bold text-end">
                  32893.00
                </td>
              </tr>
              <tr>
                <td colSpan={4} className=" text-center bg-red-50 ">
                  मुद्दल रक्कम रुपये 100000.00 -(द.सा.द.शे. 19.00% दराने)
                  सोबतच्या तक्त्याप्रमाणे
                </td>
              </tr>

              <tr>
                <td className="border px-2 py-1">5</td>
                <td className="border px-2 py-1">31/08/2021</td>
                <td className="border px-2 py-1 font-bold">
                  अखेर वसूल व्याजाची एकूण रक्कम
                </td>
                <td className="border px-2 py-1 font-bold text-end">
                  27414.00
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">6</td>
                <td className="border px-2 py-1">31/08/2021</td>
                <td className="border px-2 py-1 font-bold">
                  अखेर येणे व्याज बाकी
                </td>
                <td className="border px-2 py-1 font-bold text-end">5479.00</td>
              </tr>

              {/* Add additional rows here */}
            </tbody>
          </table>
        </div>

        {/* table-4 */}
        {/* Section D: क. जादा व्याज आकारणीबाबतचा तपशील :–table 3 */}
        <div className="border-t border-gray-300">
          <div className="flex justify-between bg-gray-100 p-2 font-bold">
            <span>क. जादा व्याज आकारणीबाबतचा तपशील :–</span>
            <span></span>
          </div>
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr>
                <td className="border px-2 py-1 w-1/12 font-bold">अ. नं.</td>
                <td className="border px-2 py-1 w-4/12 font-bold">दिनांक</td>
                <td className="border px-2 py-1 w-4/12 font-bold">तपशील</td>
                <td className="border px-2 py-1 w-4/12 font-bold text-end justify-items-end">
                  रक्कम रुपये
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">7</td>
                <td className="border px-2 py-1">31/08/2021</td>
                <td className="border px-2 py-1 font-bold">
                  अखेर आकारलेले एकूण जादा व्याज
                </td>
                <td className="border px-2 py-1 font-bold text-end"> 735.00</td>
              </tr>
              <tr>
                <td colSpan={4} className=" text-center bg-red-50 ">
                  (द.सा.द.शे. 2.00% दराने) सोबतच्या तक्त्याप्रमाणे
                </td>
              </tr>

              <tr>
                <td className="border px-2 py-1">8</td>
                <td className="border px-2 py-1">31/08/2021</td>
                <td className="border px-2 py-1 font-bold">
                  अखेर वसूल झालेले जादा व्याज
                </td>
                <td className="border px-2 py-1 font-bold text-end"> 434.00</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">9</td>
                <td className="border px-2 py-1">31/08/2021</td>
                <td className="border px-2 py-1 font-bold">
                  अखेर येणे असलेले जादा व्याज
                </td>
                <td className="border px-2 py-1 font-bold text-end">301.00</td>
              </tr>

              {/* Add additional rows here */}
            </tbody>
          </table>
        </div>

        {/* table-5 */}
        <div className="border-t border-gray-300">
          <div className="flex justify-between bg-gray-100 p-2 font-bold">
            <span>ड. इतर खर्चाचा तपशील :–</span>
            <span></span>
          </div>
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr>
                <td className="border px-2 py-1 w-1/12 font-bold">अ. नं.</td>
                <td className="border px-2 py-1 w-4/12 font-bold">दिनांक</td>
                <td className="border px-2 py-1 w-4/12 font-bold">तपशील</td>
                <td className="border px-2 py-1 w-4/12 font-bold text-end justify-items-end">
                  रक्कम रुपये
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">10</td>
                <td className="border px-2 py-1">31/08/2021</td>
                <td className="border px-2 py-1 font-bold">
                  अखेर आकारलेला विमा हप्ता
                </td>
                <td className="border px-2 py-1 font-bold text-end">1062.00</td>
              </tr>

              <tr>
                <td className="border px-2 py-1">11</td>
                <td className="border px-2 py-1">31/08/2021</td>
                <td className="border px-2 py-1 font-bold">
                  अखेर आकारलेली एकूण नोटीस फी व पोस्टेज
                </td>
                <td className="border px-2 py-1 font-bold text-end">1600.00</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td className=" px-2 bg-red-50 ">एकूण इतर खर्च</td>
                <td className="border px-2 py-1 font-bold text-end">2662.00</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">12</td>
                <td className="border px-2 py-1">31/08/2021</td>
                <td className="border px-2 py-1 font-bold">अखेर वसूल खर्च</td>
                <td className="border px-2 py-1 font-bold text-end">1469.00</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">13</td>
                <td className="border px-2 py-1">31/08/2021</td>
                <td className="border px-2 py-1 font-bold">
                  अखेर/शिल्लक एकूण खर्च/येणे बाकी
                </td>
                <td className="border px-2 py-1 font-bold text-end">1193.00</td>
              </tr>

              {/* Add additional rows here */}
            </tbody>
          </table>
        </div>
        {/* table-6 */}

        <div className="border-t border-gray-300">
          <div className="flex justify-between bg-gray-100 p-2 font-bold">
            <span> इ. एकूण वसूलपात्र रक्कम रुपये :–</span>
            <span></span>
          </div>
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr>
                <td className="border px-2 py-1 w-1/12 font-bold">अ. नं.</td>
                <td className="border px-2 py-1 w-4/12 font-bold">तपशील</td>

                <td className="border px-2 py-1 w-3/12 font-bold text-end">
                  रक्कम रुपये
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">अ</td>

                <td className="border px-2 py-1"> मुद्दल रक्कम रुपये</td>

                <td className="border px-2 py-1  font-bold text-end">
                  45399.00
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">ब</td>
                <td className="border px-2 py-1"> व्याज रक्कम रुपये</td>

                <td className="border px-2 py-1 font-bold text-end">5479.00</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">क</td>
                <td className="border px-2 py-1">जादा व्याज रक्कम रुपये</td>

                <td className="border px-2 py-1 font-bold text-end">301.00</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">ड</td>
                <td className="border px-2 py-1">इतर खर्च रक्कम रुपये</td>

                <td className="border px-2 py-1 font-bold text-end">1193.00</td>
              </tr>

              {/* Add additional rows here */}
            </tbody>
          </table>
        </div>

        {/* Continue with other sections (like sections C, D, etc.) */}

        <div className="flex justify-end p-2 mt-5">
          <span className="font-bold">एकूण</span>
          <span className=" border px-2 py-1 text-right w-3/12 font-bold ">
            52372.00
          </span>
        </div>
      </div>
      <div className="text-right  text-sm  mt-4 ">
        <p>पान क्र. 3</p>
      </div>
      <hr className="border border-b-gray-950" />
      {/* page-4 */}
      {/* table-Notice Section */}
      <div className="break-before mt-10 print:mt-2 print:text-xs">
        <table>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 print:p-1">12</td>
              <td className="border border-gray-300 p-2 print:p-1">
                अर्जासोबत जाब देणार यांचे खातेउतारे, वचनचिठ्ठी, जामिनरोखा /
                मालतारण / हायरपरचेस / हायपोथिकेशन / गहाणखत इ. करार इत्यादी दस्त
                ऐवजांच्या नकला दाखल केलेल्या आहेत. याबाबत मूळ दस्तऐवज मागणी
                केल्यास अर्जाच्या सुनावणीच्या तारखेस सादर करण्यात येतील .
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 print:p-1">13</td>
              <td className="border border-gray-300 p-2 print:p-1">
                वचनचिठ्ठी / करारनामे या दस्तऐवजांचेवरून व्याज व कर्जाचे
                वसुलीसाठी हा अर्ज करीत आहे. अर्जदारांचा अर्ज हा नमूद रक्कम अधिक
                व्याजाच्या वसुलीसाठी आहे.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 print:p-1">14</td>
              <td className="border border-gray-300 p-2 print:p-1">
                अर्जदाराचा क्लेम हा सद्हेतूने कायदेशीर असल्याचे अर्जदाराचे
                म्हणणे आहे व जाब देणार यांस आपले बचावासाठी कोणतेही संयुक्तिक व
                वैध कारण नाही याची अर्जदारास खात्री आहे. सबब, महाराष्ट्र सहकारी
                संस्था नियम १९६१ क्रमांक ७७ फ मधील तरतुदींच्या तत्त्वास अनुसरून
                अर्जाचा समरी पद्धतीने निर्णय करण्यात यावा, ही विनंती
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 print:p-1">15</td>
              <td className="border border-gray-300 p-2 print:p-1">
                अर्जास कारण मे.
                <b>
                  मा.सहा.निबंधक सह.संस्था (परसेवा), म.राज्य सह. पतसंस्था फेडरेशन
                  मर्या., ता. पुणे शहर, जि. पुणे
                </b>
                . यांचे स्थलसीमेत जाब देणार <b>1</b> यांनी दिनांक
                <b>07/05/2019</b> रोजी कर्ज घेवून, जाब देणार क्रमांक
                <b>1 ते 3</b>
                यांनी वचनचिठ्ठी / करारनामा दस्तऐवज लिहून दिले. जाब देणार क्रमांक
                <b>1 ते 3</b> यांनी शर्तीप्रमाणे कर्जाची परतफेड केली नाही.
                दिनांक <b>10/07/2021</b> रोजी नोटीस देवून दिनांक
                <b>31/08/2021</b> अखेर जाब देणार क्रमांक <b>1</b> यांचेकडून बाकी
                येणे झाली. त्याची मागणी अर्जदार बँकेने / पतसंस्थेने दिनांक
                ___/___/___ रोजीच्या नोटिशीने करूनही परतफेड केली नाही. त्या
                प्रत्येक दिवशी संस्थेच्या स्थलसीमेत घडले आहे.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 print:p-1">16</td>
              <td className="border border-gray-300 p-2 print:p-1">
                अर्जाचे मुल्यांकन (व्हॅल्युएशन) रुपये <b>52372.00</b> केले असून
                दिनांक <b>31/08/2021</b> पर्यंतची येणे बाकी रुपये
                <b>52372.00</b> आहे व अर्जास प्रोसेस व स्टँप फी रक्कम रुपये
                <b>1973.00 </b>(अर्जास लावलेला स्टँप रुपये <b>1047.00 +</b>
                कोर्ट फी स्टँप रुपये <b>100.00+</b> चौकशी फी रुपये
                <b>826.00 </b>) चा भरणा केला आहे.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* last table */}
      <div className="flex justify-between border-b border-gray-300 p-2 bg-gray-100 mt-5">
        <p>16. अर्जदाराची विनंती की,</p>
      </div>
      <div className=" print:mt-2 print:text-xs">
        <table>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 print:p-1">1</td>
              <td className="border border-gray-300 p-2 print:p-1">
                अर्जदार यांना जाब देणार यांचेकडून रक्कम रुपये 52372.00 व सदर
                रकमेवर होणारे द.सा.द.शे. 21.00% प्रमाणे दिनांक 01/09/2021 पासून
                होणारी व्याजाची रक्कम अधिक अर्जाचा व इतर संपूर्ण फी चा खर्च जाब
                देणार यांनी देणे बाबत योग्य ते हुकूम व्हावेत व त्या रकमेचा वसुली
                दाखला मिळावा ही विनंती.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 print:p-1">2</td>
              <td className="border border-gray-300 p-2 print:p-1">
                वर नमूद केलेल्या वसुली दाखल्याची रक्कम ही जमीन महसुलाची बाकी
                आहे, असे समजून रक्कम वसूल करण्याबाबत योग्य ते हुकूम मिळावेत.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 print:p-1">3</td>
              <td className="border border-gray-300 p-2 print:p-1">
                त्याप्रमाणे महाराष्ट्र सहकारी संस्था अधिनियम, १९६० कलम १५६ आणि
                महाराष्ट्र सहकारी संस्था नियम १९६१ नियम १०७(१)(इ) प्रमाणे
                वसुलीचा दाखला बजावणीसाठी संस्थेकडील योग्य त्या अधिकारी व विक्री
                अधिकारी यांचेकडे पुढील कार्यवाहीसाठी पाठविणेबाबत योग्य ते हुकूम
                व्हावेत.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 print:p-1">4</td>
              <td className="border border-gray-300 p-2 print:p-1">
                <p> इतर योग्य ते न्यायचे हुकूम व्हावेत ही विनंती.</p>
                <p>
                  हा अर्ज दिनांक <input type="date" />
                  रोजी दाखल केला आहे.
                </p>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 print:p-1"></td>
              <td className="border border-gray-300 p-2 print:p-1">
                {/* fotter */}
                <div>
                  <p className="mt-5 text-end print:mt-10">अधिकृत प्रतिनिधी</p>
                  <p className="font-bold text-end">
                    स्वामी विवेकानंद नागरी सहकारी पतसंस्था मर्यादित
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 print:p-1"></td>
              <td className="border border-gray-300 p-2 print:p-1">
                <p> मी,</p>
                <p>संगमुळे कौस्तुभ संजय ,</p>
                <p>बी.2/3, उढाण कॉम्प्लेक्स, मस्तगड ता. जालना,जि. जालना</p>
                <p>स्वामी विवेकानंद नागरी सहकारी पतसंस्था मर्यादित (मुख्य )</p>
                <p>
                  सही करणार सत्य प्रतिज्ञेवर जाहीर करतो की, वर लिहून दिलेला
                  मजकूर माझे माहिती व समजुतीप्रमाणे खरा आहे.
                </p>
                <p>
                  तर्फे अर्जासोबत अर्जदार यांनी खालील कागदपत्रे सादर केलेली
                  आहेत.
                </p>
                <p>1. या अर्जासोबत एकूण ४ नकला. </p>
                <p>
                  2. संचालक मंडळ/वसुली मंडळ/प्रशासक मंडळ यांचे ठरावाची प्रत.
                </p>
                <p>
                  3. जाब देणार यांना कर्ज खाते क्रमांक 185/110 बाबत दिनांक
                  10/07/2021 रोजी पाठविलेल्या रजिस्टर्ड नोटिशीची व पोहोच पावतीची
                  प्रत.
                </p>
                <p>
                  4. जाब देणार यांनी अर्जदार संस्थेकडे दिनांक 07/05/2019 रोजी
                  लिहून दिलेल्या डिमांड प्रॉमिसरी नोट / करारनाम्याची /
                  दस्तऐवजाची खरी नक्कल.
                </p>
                <p>
                  5. जाब देणार यांचे कर्ज खाते क्रमांक 185/110 चे खाते उताऱ्याची
                  खरी नक्कल.
                </p>
                <p>6. इतर.</p>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 print:p-1"></td>
              <td className="border border-gray-300 p-2 print:p-1">
                {/* fotter */}
                <div>
                  <p className="mt-5 text-end print:mt-10">अधिकृत प्रतिनिधी</p>
                  <p className="font-bold text-end">
                    स्वामी विवेकानंद नागरी सहकारी पतसंस्था मर्यादित
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-right  text-sm  mt-4 print:mt-20">
        <p>पान क्र. 4</p>
      </div>
      <hr className="border border-b-gray-950" />
    </div>
  );
}

export default NamunaU;
