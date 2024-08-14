import React from 'react'

const RoznamaNot = () => {
    const handlePrint = () => {
        window.print();
      };
      return (
        <div className="p-8 bg-white text-gray-900 max-w-5xl mx-auto print:mt-0 print:p-4 print:text-sm" >
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
        <div className="border p-4">
          
            <p className="font-bold text-xl text-center">रोजनामा</p>
    
        <hr />
        <br />
    
        <div className='flex text-md font-bold'>
          <p className='w-2/3 border-black border p-4'>सहा .नि बंधक सह.संस्था (परसेवा ), म.रा ज्य सह. पतसंस्था फेडरेशन मर्या . <br />
    प्रमि ला अपा र्टमेंट, ३ रा मजला , लका की रो ड, मॉं डेल कॉ लनी , पुणे., ता .पुणे शहर, जि .
    पुणे.
    </p>
          <span className='border-black border w-96'>
            <p className='mt-8 ml-2'>दावा क्रमांक</p></span>
        </div>
        <div className='border-black border p-4'>
          <p>अर्जदार संस्थेचे नां व- स्वा मी वि वेका नंद ना गरी सहका री पतसंस्था मर्या दि त (मुख्य )</p>
          <p>अर्जदार संस्थेचा पत्ता - बी .2/3, उढा ण कॉ म्प्लेक्स, मस्तगड , ता .जा लना , जि . जालना</p>
        </div>
          
        <div className="text-center font-bold text-lg border-black border">
              <p className='p-2'>विरुद्ध</p>
            </div>
    
            <table className="w-full border-collapse border-black border ">
        
              <tbody>
                <tr>
                  <td className="border border-black p-2">1</td>
                  <td className="border border-black p-2 ">
                    थकबाकीदार:- जाधव संजय विठ्ठल
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2">2</td>
                  <td className="border border-black p-2">
                    जामिनदार:- जाधव विष्णू विठ्ठल
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2">3</td>
                  <td className="border border-black p-2">
                    जामिनदार:- सावळे सुनील काशीनाथ
                  </td>
                </tr>
              </tbody>
            </table>
    
            <div>
              <table className="w-full border-collapse border-black border">
                <thead>
                  <tr>
                    <th className="border border-black p-2">दिनांक </th>
                    <th className="border border-black p-2">तपशील </th>
                    <th className="border border-black p-2">पुढील दिनांक</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-black p-2">___/___/२०___
    </td>
                    <td className="border border-black p-2">सदरचा दावा दि .___/___/२०___ रो जी या का र्या लया त दाखल झा लेला आहे व सदर दाव्या ती ल
                    जा बदार यां ना नो टी स देवून दि . ___/___/२०___ रो जी सुना वणी ठेवण्या त आली आहे. <br />
                    <p className="font-bold">अर्जदार सहा .नि बंधक सह.संस्था (परसेवा ), म.रा ज्य सह. पतसंस्था फेडरेशन मर्या ., पुणे शहर
                    </p>
                    </td>
                    <td className="border border-black p-2"></td>
                  </tr>
                  <tr className='h-20'>
                    <td className='border border-black p-2 '></td>
                    <td className='border border-black p-2'></td>
                    <td className='border border-black p-2'></td>
                  </tr>
                  <tr className='h-20'>
                    <td className='border border-black p-2 '></td>
                    <td className='border border-black p-2'></td>
                    <td className='border border-black p-2'></td>
                  </tr>
                  <tr className='h-20'>
                    <td className='border border-black p-2 '></td>
                    <td className='border border-black p-2'></td>
                    <td className='border border-black p-2'></td>
                  </tr>
                  <tr className='h-20'>
                    <td className='border border-black p-2 '></td>
                    <td className='border border-black p-2'></td>
                    <td className='border border-black p-2'></td>
                  </tr>
                  <tr className='h-20'>
                    <td className='border border-black p-2 '></td>
                    <td className='border border-black p-2'></td>
                    <td className='border border-black p-2'></td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
    
        </div>
      </div>
    
      )
}

export default RoznamaNot 