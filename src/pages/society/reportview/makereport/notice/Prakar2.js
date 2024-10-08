import React from 'react';

const Prakar2 = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white print:mt-0 print:p-4 print:text-sm ">

      <div className="flex justify-end p-4 print:p-0">
        <button 
          onClick={handlePrint} 
          className="print:hidden w-32 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          Print
        </button>
      </div>

      <h1 className="text-xl font-bold text-center">
        स्वामी विवेकानंद नागरी सहकारी पतसंस्था मर्यादित
      </h1>
      <p className="text-center">
        मुख्य, बी.2/3, उढाण कॉम्प्लेक्स, मस्तगड
      </p>
      <hr />
      <div className='flex justify-between'>
        <p className="text-right">जावक क्रमांक :- </p>
        <p className="text-right">दिनांक :- <input type="date" /></p>
      </div>

      <div className="mt-6">
        <div className='flex justify-between'>
          <p>प्रति,</p>
          <p className="mt-4">संदर्भ - 185/110</p>
        </div>
        <br />
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
                शंकर नगर तहसिलीत ऑफिस जवळच किराणा दुकान जुन जालना, ता. जालना, जि. जालना
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
              <td className="border px-4 py-2">3</td>
              <td className="border px-4 py-2">साठे सुनीता कारभारी</td>
              <td className="border px-4 py-2">
                सरस्वती भवन शाखा जवळ नवर नगर जुन जालना, ता. जालना, जि. जालना पिन 431203
              </td>
              <td className="border px-4 py-2">जामीनदार</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <p>महाशय / श्रीमती</p>
        <p className='text-justify' >
        
१. तुमचे पैकी नं 1 यांना रक्कम रुपये 100000.00 चे कर्जाची जरुरी होती त्यासाठी त्यांनी आमचे बँकेकडे / पतसंस्थेकडे कर्जाची मागणी केली. सदर
मागणीचा सहानभूतीपूर्वक विचार करून त्यांना रक्कम रुपये 100000.00 चे कर्ज मंजूर केले. मंजुरीप्रमाणे त्यांनी दिनांक 07/05/2019 रोजी प्रथम व
त्यानंतर वेळोवेळी कर्जाची मंजूर रक्कम उचललेली आहे. <br />
२. सदर कर्ज घेतेवेळी तुमच्या पैकी नं 1 यांनी बँकेच्या / पतसंस्थेच्या अटी व शर्ती मान्य करून त्याप्रमाणे वचन चिट्ठी, कर्जरोखा, करारनामा वगैरे
दस्तऐवज दिलेले आहेत. त्या कर्जास त्यांनी बँकेच्या / पतसंस्थेच्या शर्ती व अटी प्रमाणे व्याज देण्याचे कबूल केलेले आहे.तसेच बँकेच्या / पतसंस्थेच्या
नियमाप्रमाणे व शर्तीप्रमाणे जामीनदार देऊन कर्जाची फेड वैयक्तिक व संयुक्त जबाबदारीने करण्याचे कबूल केले आहे. <br />
३. तुमच्यापैकी नं 2 ते 3 हे मूळ कर्जदार नं 1 यांना वरील कर्जासाठी जामीनदार आहेत. तुम्हापैकी नं 2 ते 3 यांनी बँकेच्या / पतसंस्थेच्या रकमेच्या फेडीची
जबाबदारी जामीनदार या नात्याने स्वीकारलेली आहे तुम्ही सर्वांनी बँकेच्या / पतसंस्थेच्या अटी व शर्ती मान्य केल्या आहेत. त्याप्रमाणे तुमच्या पैकी 2 ते 3
यांनी जामीनपैकी दस्तऐवज लिहून दिला आहे. <br />
४. तुमच्यापैकी नं 1 मूळ कर्जदार यांनी आणि 2 ते 3 यांनी जामीनदार या नात्याने वरील संपूर्ण कर्जाची फेड मुदतीत केलेली नाही.मूळ कर्जदार यांचेकडून
त्यांनी वेळोवेळी दिलेला वसूल जमा जाता दिनांक   /  /20   अखेर रुपये            कर्जाची बाकी आणि त्यावर होणारे व्याज
येणे आहे.तुमचेकडे बँकेने / पतसंस्थेने वेळोवेळी बाकी रकमेची मागणी केली असता तुम्ही सदरच्या न्याय मागणीकडे विनाकारण हेतुपरस्पर, रक्कम
बुडवण्याच्या एकमेव हेतूने दुर्लक्ष केले, सबब तुम्ही डिफॉल्टर झालेले आहात. <br />
५. तुम्ही बँकेच्या / पतसंस्थेच्या नियमांचा व शर्तीचा भंग केलेला असल्याने तुम्हाला दिलेल्या सर्व सवलती या नोटीसा ने रद्द केलेल्या आहेत. त्यामुळे संपूर्ण
रक्कम एकदम वसूल घेण्याचा बँकेस / पतसंस्थेस हक्क प्राप्त झालेला आहे. <br />
६. तुम्हापैकी नं 2 ते 3 आणि नं 1 यामध्ये जरी जामीनदार व मूळ कर्जदार असे संबंध असले तरी तुम्हापैकी 2 ते 3 आणि तुम्हापैकी नं 1 यांचे बरोबर मूळ
कर्जदार म्हणून बँकेची / पतसंस्थेची सर्व रक्कम देणेची वैयक्तिक व सामुहिक जबाबदारी पत्करली आहे. त्यामुळे या नोटिशीतील मागण्यांची पूर्तता
करण्याचे कर्तव्य आणि जबाबदारी तुम्हापैकी प्रत्येकाची वैयक्तिक व सर्वाची सामुहिक आहे.
तरी तुम्हास या नोटीसीद्वारे कळविण्यात येते कि, ही नोटीस मिळाल्यापासून दहा दिवसांच्या आत बँकेस / पतसंस्थेस दिनांक ____/____/20____ अखेर
येणे रक्कम रुपये ______________ अक्षरी रुपये _______________________________________________________________ व
नियमाप्रमाणे होणारे व्याज अशी रक्कम भरावी. त्याप्रमाणे तुम्ही न केल्यास बँकेस / पतसंस्थेस तुम्हा सर्वांच्या विरुद्ध रक्कम वसुलीसाठी कायदेशीर इलाज
करावा लागेल. मग त्यामुळे होणाऱ्या खर्चास व परिणामास तुम्हा सर्वाना जबाबदार धरले जाईल. नोटीस प्रत दप्तरी ठेऊन अस्सल रवाना.
वरील नोटिशीप्रमाणे थकबाकीची रक्कम न भरल्यास, बँकेचे / पतसंस्थेचे व तारण दिलेल्या स्थावर जंगम मालमत्तेचे हित जपण्यासाठी आवश्यकता
भासल्यास जाहीर नोटीसीद्वारे थकबाकीदार, त्याचे जामिनदार व तारण मालमत्तेचा तपशील वर्तमानपत्राद्वारे प्रसिद्ध करण्यात येईल.
आपण घेतलेल्या कर्जाचे हप्ते न भरल्यामुळे बँकेचे / पतसंस्थेचे थकबाकीदार झाले असल्याने आपले कोणतेही कृत्य बँकेच्या / पतसंस्थेच्या हितास धक्का
लावणारे आहे असे आढळल्यास त्या अनुषंगाने जाहीर नोटीस प्रसिद्ध करणे भाग पडेल व अशा वर्तमानपत्रातील प्रसिद्धीमुळे बँकेकडून / पतसंस्थेकडून
बदनामी होण्याचा प्रश्न उद्भवणार नाही त्यानंतरही आपण थकबाकी भरली नाही तर योग्य ती कायदेशीर कारवाई सुद्धा केली जाईल या सर्व खर्चाची
जबाबदारी आपण सर्वावर असणार आहे.
        </p>
       
      </div>
     <div className='flex justify-between'>
     <div className="mt-4">
          <p>दिनांक :-</p>
          <p>पत्र व्यवहाराचा पत्ता :-</p>
          <p>मुख्य , बी.2/3, उढाण कॉम्प्लेक्स, मस्तगड</p>
        </div>
        
      <div className="mt-8 text-right">
        <p className="font-semibold">अधिकृत प्रतिनिधी</p>
        <p>स्वामी विवेकानंद नागरी सहकारी पतसंस्था मर्यादित</p>
      </div>
     </div>
    </div>
  );
}

export default Prakar2;
