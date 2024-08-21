import React from 'react';

const Prakar1 = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white print:mt-0 print:p-4 print:text-sm">

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
        <p>
          आपणास या नोटीसी द्वारे कळविण्यात येते की, आपण सर्वजण 1 ते 3 या
          संस्थेचे सभासद असून आपणांपैकी अ. नं. 1 यांनी दिनांक 07/05/2019 रोजी
          बँकेकडून / पतसंस्थेकडून रक्कम रुपये - 100000.00 अक्षरी रुपये एक लाख
          रुपये फक्त कर्ज घेतले आहे. व नं 2 ते 3 हे सदर कर्जास जामिनदार आहेत.
          सदर कर्जाची परतफेड दरमहा मुद्दल रुपये 5100.00 व त्यावर होणारे व्याज
          देण्याचे मान्य केले आहे. परंतु त्या प्रमाणे आपण सदर कर्जाची परतफेड
          केलेली नाही. आपणाकडून सदर कर्जखाती खालीलप्रमाणे येणे दिसत आहे.
        </p>
        <ul className="mt-4 ml-8 list-disc">
          <li>मुद्दल रुपये :- 45399.00</li>
          <li>व्याज रुपये :- 5479.00</li>
          <li>दंडव्याज रुपये :- 301.00</li>
          <li>इतर खर्च रुपये :- 1193.00</li>
          <li>एकूण येणे बाकी रुपये :- 52372.00</li>
        </ul>
        <div className="mt-4">
          <p>थकित हप्ते ________________________</p>
          <p>एकूण थकबाकी ________________________</p>
        </div>
      </div>

      <div className="mt-6">
        <p>
          आपणास नोटीस देण्यात येते की, वरीलप्रमाणे थकबाकीची रक्कम हे पत्र
          मिळाल्यापासून आठ दिवसाचे आत संस्थेत भरावी. सदर मुदतीत आपण रक्कम न
          भरल्यास आपणाविरुद्ध व्यक्तिश: व संयुक्तरित्या कायदेशीर कारवाई करून
          सदरचे प्रकरण कोर्टात पाठविणे भाग पडेल याची नोंद घ्यावी.
        </p>
      </div>

      <div className="mt-8 text-right">
        <p className="font-semibold">अधिकृत प्रतिनिधी</p>
        <p>स्वामी विवेकानंद नागरी सहकारी पतसंस्था मर्यादित</p>
      </div>
    </div>
  );
}

export default Prakar1;
