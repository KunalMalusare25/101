import React from "react";

function Affidavit() {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="container mx-auto p-4 text-sm  max-w-7xl">
      <style>
        {`@media print {
  @page {
    size: A4;
    margin: 10mm; /* Adjust margins as needed */
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 12pt; /* Adjust font size for printing */
  }

  .container {
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
    border-style: solid;
    page-break-inside: avoid;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    padding: 4px; /* Adjust padding for printing */
    font-size: 10pt; /* Ensure the text is readable */
  }

  .text-right {
    text-align: right;
  }

  .text-center {
    text-align: center;
  }

  .mt-4, .mt-8 {
    margin-top: 4mm; /* Adjust spacing for printing */
  }

  /* Hide any elements that shouldn't be printed */
  .no-print {
    display: none;
  }

  /* Ensure the page content fits within the A4 page */
  .page {
    page-break-after: always;
  }
}
        `}
      </style>
      <div className="flex justify-end p-4 print:p-0">
        <button
          onClick={handlePrint}
          className="print:hidden w-32 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          Print
        </button>
      </div>
      <div className="text-right">
        <p>अर्ज क्रमांक: ___________ /_______/20_______</p>
      </div>

      <div className="text-center mt-4 font-bold">
        <p>
          मा.सहा.निबंधक सह.संस्था (परसेवा), म.राज्य सह. पतसंस्था फेडरेशन मर्या.,
          पुणे शहर
        </p>
        <p>
          प्रमिला अपार्टमेंट, ३ रा मजला, लकाकी रोड, मॉंडेल कॉलनी, पुणे. ता. पुणे
          शहर, जि. पुणे.
        </p>
      </div>

      <div className="mt-8">
        <p className="text-right">....... याचे समोर</p>
      </div>

      <div className="border border-gray-300 mt-4">
        <div className="flex justify-center p-4 ">
          <table className=" w-full border-collapse border border-gray-300 text-center font-bold">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2"></th>
                <th className="border border-gray-300 p-2">नांव:-</th>
                <th className="border border-gray-300 p-2">पत्ता:-</th>
                <th className="border border-gray-300 p-2"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">संस्था</td>
                <td className="border border-gray-300 p-2">
                  स्वामी विवेकानंद नागरी सहकारी पतसंस्था मर्यादित (मुख्य )
                </td>
                <td className="border border-gray-300 p-2">
                  बी 2/3, उढाण कॉम्प्लेक्स, मस्तगड
                </td>
                <td className="border border-gray-300 p-2">अर्जदार</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-2 text-center font-bold text-lg mb-2">
          <u>विरुद्ध</u>
        </div>

        <table className="w-full border-collapse border border-gray-300 text-center">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">सं.</th>
              <th className="border border-gray-300 p-2">नांव:-</th>
              <th className="border border-gray-300 p-2">पत्ता:-</th>
              <th className="border border-gray-300 p-2">जबाब देणार</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">1</td>
              <td className="border border-gray-300 p-2">
                थकबाकीदार:- जाधव संजय विठ्ठल
              </td>
              <td className="border border-gray-300 p-2">
                शंकर नगर तहसील ऑफिस जानवी किराणा दुकान जुना
                जालना,ता.जालना,जि.जालना, वय:- 42
              </td>
              <td className="border border-gray-300 p-2"> जबाब देणार</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">2</td>
              <td className="border border-gray-300 p-2">
                जामिनदार:- जाधव विष्णू विठ्ठल
              </td>
              <td className="border border-gray-300 p-2">
                सोरटी नगर अंबड रोड जुना जालना ,ता.जालना,जि.जालना, वय:-45
              </td>

              <td className="border border-gray-300 p-2"> जबाब देणार</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">3</td>
              <td className="border border-gray-300 p-2">
                जामिनदार:- सावळे सुनील काशीनाथ
              </td>
              <td className="border border-gray-300 p-2">
                सरस्वती भुवन शाळा जवळ घायल नगर जुना जालना,ता.जालना,जि.जालना,
                वय:-34
              </td>
              <td className="border border-gray-300 p-2">जबाब देणार</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-6 text-center font-bold text-lg">
        प्रतिज्ञापत्र [क्लेम ऍफिडेव्हिट]
      </div>

      <div className="mt-8">
        <p>
          मी खाली सही करणार अर्जदार तर्फे
          <b>संगमुळे कौस्तुभ संजय , वय:- 49  धंदा:- नोकरी </b>
        </p>
        <p className="font-bold">
          स्वामी विवेकानंद नागरी सहकारी पतसंस्था मर्यादित (मुख्य )
        </p>
        <p className="font-bold">बी 2/3, उढाण कॉम्प्लेक्स, मस्तगड</p>
      </div>

      <div className="mt-4">
        <p className="font-semibold">
           प्रतिज्ञापत्र [क्लेम ऍफिडेव्हिट] लिहून देतो की,
        </p>
        <p className="mt-5">
          1. मी अर्जदार संस्थेचा अधिकृत इसम म्हणून कामकाज पहात आहे. अर्जदार
          संस्थेने मला अर्जदार व जाबदार यांचे कर्जव्यवहाराची व कागदपत्रांची
          पूर्ण माहिती असलेने यातील अर्जदार संस्थेने मला दिनांक
          <b>31/08/2021</b> रोजी प्रस्तुत अर्ज दाखल करणेस ठराव क्रमांक
          <b>5(1)</b> या ठरावाने अधिकार दिलेले आहेत. तो ठराव मी या कामी हजर केला
          आहे. यातील मजकूर खरा व बरोबर आहे.
        </p>
        <p className="mt-5">
          2. यातील अर्जदार संस्था ही महाराष्ट्र सहकारी संस्था अधिनियम १९६० मधील
          तरतुदीस अनुसरून रजिस्टर असलेली सहकारी संस्था असून सदर संस्थेचे जाबदार,
          अर्जदार संस्थेचे सभासद आहेत. सभासद या नात्याने रितसर कर्जमागणी अर्ज
          दाखल करून <b>व्यवसाय वाढीकारिता</b> कर्ज रक्कम रुपये
          <b>100000.00 (अक्षरी रु. एक लाख रुपये फक्त )</b> मंजूर केले.
        </p>
        <p className="mt-5">
          3. त्यानुसार यातील जाबदार यांनी अर्जदार संस्थेचे नांवे आवश्यक ती
          कागदपत्रे म्हणजे प्रॉमिसरी नोट, करार पत्रे, अधिकार पत्रे, हायपोथिकेशन
          अॅग्रीमेंट, तारण गहाण खत वगैरे दिनांक <b>02/04/2019</b> रोजी पूर्ण
          करून रक्कम रुपये <b>100000.00 (अक्षरी रु. एक लाख रुपये फक्त )</b>
          द.सा.द.शे. <b>19.00</b> व्याजदराने <b>24 M</b> मुदतीने कर्ज उचल केली
          असून अर्जदार संस्थेने तसा खाते उतारा व जाबदाराने लिहून दिलेली
          कागदपत्रे या कामी मी अर्जासोबत दाखल केली असून त्यातील नोंदी खऱ्या व
          बरोबर आहेत.
        </p>
      </div>

      <div>
        <p className="mt-5">
          4. यातील जाबदार यांनी ठरविलेप्रमाणे कर्जाची परतफेड केली नसल्याने
          जाबदार यांचे कर्जखाते थकीत गेले. म्हणून अर्जदार संस्थेने यातील जाबदार
          यांना दिनांक <b>10/07/2021</b> रोजी म.स.का.क. १०१ अन्वये कारवाई
          करणेकरिता रजिस्टर पोस्टाने नोटीस काढून दिनांक <b>31/08/2021</b> रोजी
          अखेर येणे असलेली एकूण वसूलपात्र रक्कम रुपये <b>52372.00</b> अधिक
          मुद्दल रक्कम रुपये <b>45399.00</b> वर दिनांक <b>01/09/2021</b> पासूनचे
          व्याजाची मागणी केली. यातील जाबदार यांनी कर्जाची रक्कम भरणा केली नाही
          म्हणून अर्जदार संस्थेने जाबदार यांचे विरुद्ध महाराष्ट्र सहकारी संस्था
          अधिनियम १९६० कलम १०१ अन्वये वसुली दाखला मिळणेसाठी प्रस्तुतचा अर्ज दाखल
          केला आहे. त्या अर्जातील कलम १ ते १८ मधील सर्व लिहिलेला मजकूर माझे
          स्वतःचे माहितीप्रमाणे खरा व बरोबर असून त्यावर संस्थेचे अधिकृत अधिकारी
          यांची सही आहे. ती सही मी ओळखतो. तरी अर्जदार संस्थेस वसुली दाखला देणेत
          यावा.
        </p>
        <p className="mt-5">
          5. सदर अर्जासोबत जाबदार यांनी अर्जदार संस्थेस लिहून दिलेली कागदपत्रे
          हजर केलेली आहेत. यातील लिहिलेला सर्व मजकूर खरा व बरोबर असून त्यावर
          जाबदार यांच्या सह्या आहेत. त्या खऱ्या व बरोबर आहेत. तरी सदर अर्जातील
          मागणीप्रमाणे अर्जदार संस्थेचा अर्ज मंजूर व्हावा. अर्जदार व जाबदार
          यांचे विरुद्ध कलम १०१ अन्वये वसुली दाखला मागणीप्रमाणे मंजूर व्हावा,
          म्हणून सत्य प्रतिज्ञेवरील ऍफिडेव्हिट दाखल करीत आहे.
        </p>
      </div>
      <div className="mt-24 flex justify-between ">
        <p>ठिकाण:- _________ </p>
        <p>ऍफिडेव्हिट करणार _________________________</p>
      </div>
      <p className="mt-2">
        दिनांक:- <input type="date"></input>
      </p>
      <br />

      <p className="text-center text-lg mt-2 border-t-2 border-gray-500">
        प्रतिज्ञापत्र
      </p>
      <div className="mt-8">
        <p>
          मी अर्जदार संस्थेतर्फे -
          <b>संगमुळे कौस्तुभ संजय , वय:- 49  धंदा:- नोकरी </b>
        </p>
        <p className="font-bold">
          स्वामी विवेकानंद नागरी सहकारी पतसंस्था मर्यादित (मुख्य )
        </p>
        <p className="font-bold">बी 2/3, उढाण कॉम्प्लेक्स, मस्तगड</p>
        <p className="mt-4">
          सत्य प्रतिज्ञेवर कथन करतो की, वरील क्लेम ऍफिडेव्हिट मधील सर्व मजकूर
          माझे माहिती व समजुतीप्रमाणे तसेच संस्थेकडील उपलब्ध कागदपत्रांवरून खरा
          व बरोबर आहे. त्याचे खरेपणासाठी मी आज रोजी या खाली माझी सही केली आहे.
        </p>
        <div className="mt-24 flex justify-between ">
          <p>ठिकाण:- _________ </p>
          <p>ऍफिडेव्हिट करणार _________________________</p>
        </div>
        <p className="mt-2">
          दिनांक:- <input type="date"></input>
        </p>
        <p className="mt-8 text-end">मी ऍफिडेव्हिट करणारास ओळखतो अ‍ॅडव्होकेट</p>
      </div>
    </div>
  );
}

export default Affidavit;
