import React from "react";
import "./notice1.css"

function Notice1() {

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="print:print-container">
      <div className="font-sans p-6 max-w-4xl mx-auto print:print-content">
        {/* Heading */}
        <div className="flex justify-end p-4">
        <button 
          onClick={handlePrint} 
          className="print:hidden print:absolute print:right-4 print:top-4 print:mt-0 print:mr-4 print:bg-green-500 print:text-white print:px-4 print:py-2 print:rounded
          w-32 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          Print
        </button>
        </div>
        <div className="text-center font-bold text-lg mb-4">
          <p>समक्ष बजावणीने / डकवणी कार्यवाहीने/ यु.पी.सी /</p>
        </div>
        <div className="flex justify-between">
          <div className=" items-center space-x-4">
            <p>(कर्जदारास द्यावयाचे नोटीसीचा नमुना)</p>
            <p >नमुना नं.अ</p>
          </div>
          <div className="text-right max-w-xs">
            <p className="print:w-58 ml-24 text-left">
              महाराष्ट्र सहकारी सं. अधिनियम १९६० अन्वये सक्तीच्या मार्गाने कलम १०१
              ची प्रक्रिया सुरु होण्यापुर्वीची नोटीस
            </p>
            <div className="flex mt-1 space-x-2 print:ml-24">
            <p >
              जा.क्र. <input type="text" className="w-20 mr-1" />
            </p>
            <p>
              दि. <input type="date" className="w-32 print:w-20" />
            </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 mt-1">
          <div className="justify-between">
            <p>
              थकबाकीदार श्री./सौ. <input type="text" className="w-96 border-b mb-1" />
            </p>
            <p className="ml-24 print:ml-16">
              मु.पो. <input type="text" className="w-96 border-b" />
            </p>
          </div>
          <div className="justify-between">
            <p >
              जामीनदार १) श्री./सौ. <input type="text" className=" border-b w-96  mb-1" />
            </p>
            <p className="ml-24 print:ml-16">
              मु.पो. <input type="text" className="w-96 border-b " />
            </p>
          </div>
          <div className="justify-between">
            <p >
            जामीनदार २) श्री./सौ. <input type="text" className=" border-b w-96 mb-1" />
            </p>
            <p className="ml-24 print:ml-16">
              मु.पो. <input type="text" className="w-96 border-b" />
            </p>
          </div>

          <div className=" text-lg mb-4">
            विषय:- कायद्याच्या मार्गाने थकबाकी कर्ज वसुलीबाबत...
          </div>

          <p className="text-justify">
            <span className="ml-10">कळविण्यात येते की</span>
            <input type="text" className="ml-1 w-96 border-b" /> संस्थेकडून कर्ज घेतले असून
            त्याची मुदत संपलेली आहे. तसेच तुम्हाला या अगोदर देखील नोटीस देऊन तगादे करून
            प्रत्यक्ष भेटी घेऊन देखील तुम्ही थकबाकी रक्कम भरलेली नाही. आपण जाणून बुजून
            संस्थेस नाईलाजास्तव पुढील कारवाई करण्यास भाग पाडत आहात. तरी तुम्हाला
            नैसर्गिक न्यायाच्या दृष्टीने एक अखेरची संधी म्हणून अजून एक वेळा कळविण्यात
            येते की, आपल्याकडील दि.
            <input type="date" className="w-42 border-b" /> अखेर पर्यंत थकबाकी रक्कम
            रुपये <input type="number" className="w-42 border-b" /> बाकी असून ती थकबाकी
            रक्कम तुम्ही दिनांक <input type="date" className="w-42 border-b" /> अखेर पर्यंत
            व्याजासह व खर्चासह भरून आपले थकबाकी खाते नील (देयाक) करावे. अन्यथा
            संस्थेस महाराष्ट्र शासन नियुक्त मा. विशेष वसुली व विक्री अधिकारी यांची
            संस्थेचने नेमणूक केली तेसच मा. विशेष वसुली व विक्री अधिकारी यांना
            महाराष्ट्र सहकारी संस्था अधिनियम १९६० चे कलम १५६ प्रमाणे व महाराष्ट्र सहकारी
            संस्था अधिनियम १९६१ चे कलम १०७ प्रमाणे व दिवाणी आचारसंहिता१६८० कलम ६० प्रमाणे
            अधिकार प्राप्त झालेले आहे. म्हणून परत तुम्हाला नैसर्गिक न्यायाच्या दृष्टीने
            तुमचे म्हणणे मांडण्यासाठी एक संधी उपलब्ध करून दिलेली आहे. तरी तुम्ही तुमचे
            जामीनदार यांनी वरील तारखेप्रमाणे संस्थेत येवून मा. अध्यक्ष सह व्यवस्थापक
            यांच्या संपर्क साधुन आपणास सोईस्कर व लाभदायक ठरु शकतो. कारण कलम १०१/९१ च्या
            कारवाईत मा. विशेष वसुली व विक्री अधिकारी यांच्याकडे वसुली सुपूर्त
            केल्यानंतरच खर्चिक व मानसिकरित्या आपणांस ही बाब त्रासदायक होऊ शकते.
            <br />
            <span className="ml-10">जामीनदार</span> यांना कळविण्यात येते की, कारवाई झाल्यावर जामीनदार हे कर्जदार
            एवढेच जबाबदार असल्याने Indian Contract Act. 1872 प्रमाणे व कमल १२८ प्रमाणे
            कर्जदाराएवढेच जबाबदार समजले जातात. तसेच या प्रक्रियेत संस्थेचा खर्च १.७५% /
            ५% शासकिय सरचार्ज नियमाप्रमाणे वसुल केला जातो व पोलीस यंत्रणेचा खर्च मा.
            वसुली अधिकारी, मा. विशेष वसुली व विक्री अधिकारी यांना प्राप्त आहेत. त्याला
            अपील नाही, सरदचे कृत्य आपल्या बाबतीत घडावी अशी संस्थेची व आमची इच्छा नाही व
            ते आपल्या बाजारपेठेत असलेल्या प्रतिष्ठेस व नाव लौकीकास अशोभनीय असून
            हितावह नाही, याची गंभीर नोंद घ्यावी.तरी कायदा कलम १०१/९१ च्या कारवाई
            प्रक्रियेपासून आपण दूर रहावे अशी आमची प्रामाणिक इच्छा आहे. या प्रक्रियेपासून
            आपणास ही शेवटची संधी व सवलत आपली संस्था व आपले हितचिंतक या नात्याने देत
            आहे. तरी ही संधी आपण न दवडता संस्थेची थकबाकी रक्कम व्याजासह / खर्चासह
            संस्थेत आणून भरुन खाते नील (बेबाक) करुन संस्थेस सहकार्य करावे ही विनंती.
            अन्यथा कायदेशीर जाती कारवाई करुन तसेच दैनिक वर्तमानपत्रात प्रसिध्दी देवून
            जाहीर लिलावाद्वारे थकबाकी वसुल केली जाईल व खर्च आपले नावावर टाकला जाईल.
            </p>
          <span className="block text-justify">
            <u>विशेष टीप</u>- मा. विशेष वसुली व विक्री अधिकारी यांचे समन्स नोटीस घेण्यास
              टाळाटाळ करणे त्यांस प्रतिबंध करणे, आवेश नाकारणे, वसुलीकामी अडथळे निर्माण
              करणे इ. बेकायदेशीर कृत्य आपणांकडून घडल्यास कायद्यानुसार आपणावर दंडात्मक
              कारवाई होऊन कैदेच्या शिक्षेची तरतूद आहे. याची थकबाकीदारांनी व त्यांच्या
              जामीनदारांनी विशेष नोंद घ्यावी.
            </span>
            <br />

          <div className="flex justify-end w-full">
            <div className="text-right">
              <p>व्यवस्थापक / विशेष वसुली अधिकारी</p>
              <br />
              <input type="text" className="w-60 border-b" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notice1;
