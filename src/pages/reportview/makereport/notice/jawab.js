import React from 'react'

const Jawab = () => {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div className=" p-4 max-w-5xl mx-auto mt-10 print:mt-0 print:p-4 print:text-sm">
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
    .break-before {
          page-break-before: always;
        }

}`}</style>

      <div className="flex justify-end p-4 print:p-0">
        <button 
          onClick={handlePrint} 
          className="print:hidden w-32 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          Print
        </button>
      </div>
      <div className="text-center font-semibold mb-6">
        <p className='text-xl p-4 border-b border-black'>जबाब</p>
      </div>
      <table className="w-full border-collapse border border-gray-300 print:text-xs">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 w-20"></th>
            <th className="border border-gray-300 p-2">
              <p className='text-left font-bold'>
                मा . सहा .नि बंधक सह.संस्था (परसेवा ), म.रा ज्य सह. पतसंस्था फेडरेशन मर्या . <br />
                प्रमि ला अपा र्टमेंट, ३ रा मजला , लका की रो ड, मॉं डेल कॉ लनी , पुणे., ता . पुणे शहर, जि . पुणे. <br />
              </p>
              <br />
              <p className='text-left'> 
                मी खा ली सही करणा र अर्जदार तर्फे <br />
                <div className='flex'>
                  <span className='mr-10'>संगमुळे कौ स्तुभ संजय</span>
                  <span className='mr-10'>वय:- 49</span>
                  <span>धंदा:- नो करी</span>
                </div>
                बी .2/3, उढा ण कॉ म्प्लेक्स, मस्तगड , ता .जा लना , जि . जालना
                <br />
                जबाब देतो की , मी <br />
                स्वामी विवेका नंद नागरी सहकारी पतसंस्था मर्यादित (मुख्य ) <br />
                या अर्जदार संस्थेचा कर्मचा री आहे.
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">1</td>
            <td className="border border-gray-300 p-2">अर्जदार संस्था ही महा रा ष्ट्र सहका री का यद्या प्रमा णे रजि स्टर झा लेली संस्था असून ति चे का मका ज सहका री का यद्या नुसार व अर्जदार संस्थेचे प्रचलि त पो टनि यमा नुसार चा लते.</td>
           
          
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">2</td>
            <td className="border border-gray-300 p-2">जा ब देणा र 1 ते हे सर्व अर्जदार संस्थेचे सभासद / नॉ मि नल सभासद आहेत.</td>
           
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">3</td>
            <td className="border border-gray-300 p-2">जा ब देणा र नं. 1 यां नी अर्जदार संस्थेकडून दि नां क:- 07/05/2019 रो जी कर्ज रुपये - 100000.00 का ढले त्या पैकी वि तरी त कर्ज रक्कम रुपये
....................................................... असून त्या कर्जा स त्यां नी द.सा.द.शे. 19.00% दरा ने व्या ज व रुपये - 2.00% दरा ने जा दा व्या ज देणेचे कबुल
करून सदर कर्जा बा बत जा ब देणा र नं. 1 ते यां नी कर्जा बा बत रो खा , वचन चि ठ्ठी , मा न्यता पत्र, नूतनी करण करा रना मा , मा गी ल अटी व शर्थी प्रमा णे, इ.
का गदपत्र संस्थेच्या प्रचलि त नि यमा प्रमा णे सह्या करून पूर्ण करून दि ले आहेत त्या त्यां च्याच आहेत. त्या मी ओळखतो .</td>
       
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">4</td>
            <td className="border border-gray-300 p-2">जा ब देणा र नं. 1 या स जा ब देणा र नं. 2 ते हे जा मि नदार आहेत. त्यां च्या सह्या व अंगठे कर्ज रो ख्या वर, नूतनी करण करा रना मा व इतर करा रना मे तसेच
प्रॉ मि सरी नो टवर आहेत त्या मी ओळखतो .
</td>
          </tr>
          <tr>
            <td  className="border border-gray-300 p-2">5</td>
            <td  className="border border-gray-300 p-2">जा ब देणा र नं. 1 ते यां नी सदर कर्जा स मा न्यता असलेबद्दल मा न्यता पत्र लि हून दि ले असून त्या वर त्यां नी सही / अंगठा केलेला आहे. सही / अंगठा त्यां चेच
            आहेत व ते मी ओळखतो .</td>
          </tr>
          <tr>
            <td  className="border border-gray-300 p-2">6</td>
            <td  className="border border-gray-300 p-2">अर्जदार संस्थेचे हप्ते पद्धती ने नि यमा प्रमा णे व करा रा प्रमा णे कर्जा ची फेड जा बदार यां नी केली ना ही . वेळो वेळी नो टी स पा ठवूनही रक्कम भरली ना ही
म्हणून शेवटी लवा द नो टी स पा ठवून सर्व रकमेची मा गणी केली तरी ही त्यां नी रक्कम भरली ना ही म्हणून दावेप्रमा णे येणे असलेली सर्व रक्कम रुपये -
52372.00 व पुढी ल व्या ज व दाव्या चा / अर्जा चा हो णा रा खर्च व इतर खर्च वसूल करून मि ळणेबा बत मा गणी केली आहे. ती येणे रक्कम बरो बर आहे</td>
          </tr>
          <tr>
            <td  className="border border-gray-300 p-2">7</td>
            <td  className="border border-gray-300 p-2">दाव्या त येणे असलेली सर्व रक्कम दाव्या च्या को र्ट खर्च व पुढी ल व्या ज द.सा.द.शे.21.00% प्रमा णे व दरा ने दि नां क - 31/08/2021 इ. पा सून अशी
            मि ळून हो णा री रक्कम वसूल करून हुकूमना मा व्हा वा व ती रक्कम वसूल करणेबद्दल वसुली दाखला मि ळा वा म्हणून लि हून दि ला जबा ब.</td>
          </tr>
          <tr>
            <td  className="border border-gray-300 p-2"></td>
            <td  className="border border-gray-300 p-2">
                <div className='mt-10'>
                    <p className='mb-5'>सही :-</p>
                    <p className='mb-5'>तारीख :-</p>
                    <p className='mb-5'>समोर :-</p>
                </div>
                <p className='text-right'>व्यवस्थापक / प्राधिकृत कर्मचारी / अधिकार</p>
                <p className='text-right'> स्वामी विवेकानंद नागरी सहकारी पतसंस्था मर्यादित
                </p>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <div className="break-before p-4 border border-gray-400">
      <div className="mb-4 font-bold">
        <p>सह.निबंधक सह.संस्था (एसेवा), म.राज्य सह. पतसंस्था फेडरेशन मर्या.,</p>
        <p>प्रमिता अपार्टमेंट, ३ रा माळा, टकाळी रोड, मॅडकॉन कॉलनी, पुणे, ता. पुणे शहर, जि. पुणे.</p>
      </div>

      <div className="mb-4 flex w-full">
        <p className='border-black border p-2 w-auto'>मा.सहा.नि बंधक सह.संस्था (परसेवा ), म.रा ज्य सह. पतसंस्था फेडरेशन मर्या . <br />
        प्रमि ला अपा र्टमेंट, ३ रा मजला , लका की रो ड, मॉं डेल कॉ लनी , पुणे., ता . पुणे शहर, जि . पुणे, यां चे समो र</p>
        <p className='border-black border text-center pt-5 w-72'>दिनांक: ___/__/____</p>
      </div>
      <div>
        <p className='font-bold p-2 border-black border'> जाब देणार </p>
      </div>

      <div className="mb-4">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-500 px-2 py-1">नं.</th>
              <th className="border border-gray-500 px-2 py-1">नांव-पत्ता:</th>
              <th className="border border-gray-500 px-2 py-1">वय:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-500 px-2 py-1">1</td>
              <td className="border border-gray-500 px-2 py-1">थककायमदार:- जाधव संपत विठ्ठल<br />शंकर नगर तहसील ऑफिस जवळील किराणा दुकान जुना जालना,ता.जालना,पि.जालना</td>
              <td className="border border-gray-500 px-2 py-1">42</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-2 py-1">2</td>
              <td className="border border-gray-500 px-2 py-1">जामीनदार: जाधव विठ्ठल<br />स्टेशन नगर अंकूर रोड जुना जालना ,ता.जालना,जि.जालना पिन 431203</td>
              <td className="border border-gray-500 px-2 py-1">45</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-2 py-1">3</td>
              <td className="border border-gray-500 px-2 py-1">जामीनदार: साळवे सुनिल काशीनाथ<br />सरस्वती बँक शाखा जवळ जुना नगर जुना जालना,ता.जालना,जि.जालना पिन 431203</td>
              <td className="border border-gray-500 px-2 py-1">34</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='mb-4'>महोदय,</p>
      <p className='text-justify mb-7'> आम्ही <b>स्वामी विवेकानंद नागरी सहकारी पतसंस्था मर्यादित</b> या संस्थेचे सभासद असून सदर संस्थेतून श्री ./सौ. जा धव संजय वि ठ्ठल यां नी दि नां क:
07/05/2019 रो जी रक्कम रुपये 100000.00 इतके कर्ज घेतले असून त्या पैकी वि तरी त कर्ज रक्कम रुपये ....................................................... आहे. त्या
कर्जा बा बत संस्थेच्या प्रचलि त नि यमा प्रमा णे प्रॉ मि सरी नो ट, करा र पत्र वगैरे सर्व का गदपत्र पूर्ण करून देवून त्या वर मा न्य असलेबद्दल आम्ही सह्या केल्या आहेत.
संस्थेच्या नि यमा प्रमा णे सदर कर्जा ची फेड करा रा प्रमा णे आमचेकडून झा ली ना ही . त्या मुळे ते थकले असून संस्थेने मा गणी केल्या प्रमा णे दावा रक्कम आम्हा ला
मा न्य आहे. सदरची थक रक्कम व्या ज, दंड व्या ज व को र्ट खर्च इत्या दींसहदीं महा रा ष्ट्र सहका री संस्था अधि नि यम व नि यम १९६०/६१ मधी ल कलम १०१ अन्वये
देणेचे आम्हा ला मा न्य आहे. त्या बा बत आम्ही तक्रा र करणा र ना ही म्हणून दि ला जबा ब असे.</p>
    <p>दिनांक ____/____/२०____</p>
    <div className='text-end'>
      <p className='w-auto mb-4' >
      सही :- .....................................................................................................................
       </p>
<p className='mr-96 mb-4'>जाब देणार</p>
<p className='mb-4'>1.
............................................................................................................................</p>
<p className='mb-4'>2.
............................................................................................................................</p>
<p className='mb-4'>3.
............................................................................................................................</p>
<p className='mb-4'>4.
............................................................................................................................</p>
<p className='mb-4'>5.
............................................................................................................................</p>

    </div>
    </div>

    </div>
  )
}

export default Jawab
