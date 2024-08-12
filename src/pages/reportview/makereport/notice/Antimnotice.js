import React from "react";

function Antimnotice() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="mt-5 p-8 max-w-7xl mx-auto bg-white print:text-xs print:mt-0 print:p-4">
      {/* Header Section */}
      <div className="flex justify-end p-4 print:p-0">
        <button
          onClick={handlePrint}
          className="print:hidden w-32 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          Print
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p>जावक क्रमांक :</p>
          <p>
            <b>रजिस्टर परत पावतीने रवाना</b>
          </p>
        </div>
        <div>
          <p>
            दिनांक :
            <input
              type="date"
              className="border-b-2 font-bold w-28 print:w-20"
            ></input>
          </p>
        </div>
      </div>

      {/* Title Section */}
      <div className="text-center mt-2">
        <p className="text-3xl font-bold print:text-2xl"> - नोटीस -</p>
        <p className="mt-2 text-lg font-bold print:text-base">
          थकबाकी भरणा करण्याविषयी नोटीस
        </p>
        <p className="text-sm print:text-xs">
          (सहकार कायदा कलम १०१ खाली दावा करण्यापूर्वी द्यावयाची अंतिम नोटीस)
        </p>
      </div>

      {/* Body Section */}
      <div className="mt-8 print:mt-8">
        <p className="font-bold">
          थकबाकीदार नाव :-
          <input
            type="text"
            className="border-b-2 ml-5 font-bold print:w-1/2"
          ></input>
        </p>
        <p className="font-bold mt-2">
          राहणार :-
          <input
            type="text"
            className="border-b-2 ml-20 font-bold print:w-1/2"
          ></input>
        </p>

        <p className="mt-4 print:mt-2">
          तुम्हाला व खाली नमूद केलेल्या तुमच्या जामीनदारांस या नोटीसीद्वारे
          कळविण्यात येते की, तुम्ही
          <br />
          <div className="mt-3 font-bold print:mt-1">
            स्वामी विवेकानंद नागरी सहकारी पतसंस्था मर्यादित (मुख्य)
            <br />
            बी.2/3, उढाण कॉम्प्लेक्स, ममसद, ता. जालना, जि. जालना
          </div>
          <br />
          या बँकेकडून / पतसंस्थेकडून दिनांक <u>07/05/2019</u> रोजी व्यवसाय
          वाढीकारिता कर्जासंबंधीचे करारपत्र व कर्जरोखे लिहून देवून व खाली नमूद
          केलेल्या सभासदांना जामीन देवून कर्ज रक्कम <u>रुपये: 100000.00</u>
          घेतलेले आहे. सदरचे कर्ज तसेच व्याज सुद्धा परत करणेची तारीख
          <u>07/05/2021</u> ही होऊन गेली असून आज अखेर आपणाकडे या कर्जाची रक्कम
          रुपये: <u>45399.00</u> अधिक त्यावर होणारे व्याज रुपये: <u>5479.00</u>{" "}
          अधिक दंडव्याज रुपये: <u>301.00</u> अधिक इतर खर्च रुपये: <u>1193.00</u>{" "}
          अशी एकूण रुपये: <u>52372.00</u> अशी रक्कम दिसत आहे. आपल्या कर्जाचे
          थकीत हप्ते
          <input
            type="text"
            className="border-b-2 font-bold w-28 print:w-16"
          ></input>
          व रक्कम रुपये:
          <input
            type="text"
            className="border-b-2 font-bold w-28 print:w-16"
          ></input>
          थकीत होत आहे. सदर बाकी भरणेबाबत आपणांस वारंवार कळवून व सूचना करूनही
          आपण अद्याप आपले खाते चुकते केलेले नाही. यासाठी आपणाकडील येणे बाकी वसूल
          होवून मिळण्याकरिता आपणाविरुद्ध लवाद १०१ प्रकरण मे.
          <div className="mt-3 font-bold print:mt-1">
            मा.सहा.निबंधक सह.संस्था (परसेवा), म.राज्य सह. पतसंस्था फेडरेशन
            मर्या.
            <br />
            ता. पुणे शहर, जि. पुणे
          </div>
          यांचेकडे दाखल करावे लागेल.
          <br />
          <p className="mt-5 print:mt-2 text-sm print:text-xs">
            बँकेशी / पतसंस्थेशी असणारे आपले हितसंबंध लक्षात घेता व संबंध पुढेही
            चांगले रहावेत या दृष्टीकोनातून आपण या नोटीस तारखेपासून ८/१५ दिवसांचे
            आंत आपले कर्ज खात्याची व्याज व खर्चासह येणे बाकी भरण्याची तजवीज
            करावी. आपण तसे न केल्यास आपणाविरुद्ध तसेच आपण दिलेल्या
            जामीनदारांविरुद्ध रक्कम वसुलीसाठी दावा दाखल करणे नाईलाजाने भाग पडेल
            आणि तसे झाल्यास त्याचे खर्चास व परिणामास तुमच्या जामिनदारांसह तुम्ही
            जबाबदार रहाल. तसेच या नोटिसीचा रितसर खर्च आज तुमच्या खाती नावे टाकला
            आहे. कळावे,
          </p>
        </p>
        <div>
          <p>
            दिनांक : 
            <input
              type="date"
              className="border-b-2 font-bold w-28 mt-5 print:w-20"
            ></input>
            <br />
            प्रत जामीनदार जरूर त्या कारवाईसाठी.
          </p>
        </div>

        {/* Placeholder for additional content */}
      </div>

      {/* Footer Section */}
      <div className="mt-8">
        <div className="grid grid-cols-2 gap-4 font-bold text-xs print:text-xs">
          <div>
            <p> 1- जामीनदार : जाधव विजय विठ्ठल</p>
            <p>
              सोरटी नगर अंबड रोड जुना जालना, ता.जालना, जि.जालना, पिन - 431203
            </p>
            <div className="mt-5 print:mt-2">
              <p>2- जामीनदार : साबळे सुनील काशीनाथ</p>
              <p>
                सरस्वती भुवन शाळा जवळ घायल नगर जुना जालना, ता.जालना, जि.जालना,
                पिन - 431203
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 text-right font-bold text-sm print:text-xs print:mt-10">
        <p>अधिकृत प्रतिनिधी</p>
        <p>स्वामी विवेकानंद नागरी सहकारी पतसंस्था मर्यादित</p>
      </div>
    </div>
  );
}

export default Antimnotice;
