import React from 'react'

const Tharav = () => {
    const handlePrint = () => {
        window.print();
      };
  return (
    
    <div className="p-8 bg-white text-gray-900 max-w-5xl mx-auto print:mt-0 print:p-4 print:text-sm" >
        <div className="flex justify-end p-4 print:p-0">
        <button 
          onClick={handlePrint} 
          className="print:hidden w-32 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          Print
        </button>
      </div>
    <div className="border p-4">
      <div className="mb-4 text-center border p-4">
        <p className="font-bold text-xl">ठराव</p>
        <p>मा. संचालक मंडळाच्या दिनांक:- 31/08/2021 रोजी झालेल्या सभेमध्ये मंजूर झालेल्या ठराव क्रमांक 5 (1) ची खरी नक्कल</p>
      </div> 
    <hr />
    <br />
      <p className="text-center mb-4 ">
        ठराव करण्यात येतो की, खालील कर्जदारांच्या प्रकरणांमध्ये कर्ज वसुलीसाठी महाराष्ट्र सहकारी संस्था अधिनियम १९६० कलम १०१ <br />
        अन्वये मे. <span className='font-bold'>मा. सहा.निबंधक सह.संस्था (परसेवा), म.राज्य सह. पतसंस्था फेडरेशन मर्या., पुणे शहर, ता. पुणे शहर, जि. पुणे. </span>
      </p>
      
      <p className="text-center mb-4">
        सदरहू अर्जाचे चौकशीचे कामी संस्थेच्या वतीने हजर राहण्याचा, कामकाजात भाग घेण्याचा, कागदपत्र दाखल करण्याचा, संस्थेच्या वतीने <br />
        तडजोड करण्याचा इ. सर्व अधिकार खालील अधिकाऱ्यांना देण्यात येत आहेत.
      </p>

      <ul className="list-disc ml-8 mb-4">
        <li>संगमुळे कौस्तुभ संजय</li>
        <li>विवेक विजयराव देशपांडे</li>
        <li>देव महेश मुरलीधर</li>
        <li>सातपुते सचिन रमेशराव</li>
        <li>कऱ्हाळे ऋषिकेश संतोष</li>
        <li>अडीयाल राहुल देविदासराव</li>
        <li>श्रीरामवार अक्षय कैलास</li>
        <li>जाधव अनिल कचरुजी</li>
      </ul>

      <p className="text-justify mb-4">
        <span className='ml-8'>त्याच </span>प्रमाणे ठराव करण्यात येतो की, मे. <b>मा. सहा.निबंधक सह.संस्था (परसेवा), म.राज्य सह. पतसंस्था फेडरेशन मर्या., पुणे 
        शहर, ता. पुणे शहर, जि. पुणे.</b> यांनी खाली नमूद केलेल्या कर्जदाराच्या बाबतीत <b>"वसुलीचा दाखला"</b> दिल्यानंतर सदर दाखला महाराष्ट्र 
        सहकारी जमीन महसूल कायदा १९६६ मधील तरतुदीस अनुसरून जमीन महसुलाची बाकी वसूल करून मिळणे बाबत सदर वसुलीचा दाखला 
        रिकव्हरी ऑफिसर यांचेकडे महाराष्ट्र सहकारी संस्था अधिनियम १९६० चे कलम १५६ आणि महाराष्ट्र सहकारी संस्था अधिनियम १९६१ नियम 
        क्रमांक १०७ अन्वये बजावणीसाठी पाठविण्यात यावा.
      </p>

      <table className="w-full border-collapse border border-gray-500 mb-4">
  <tbody>
    <tr>
      <td className="border border-gray-500 p-2 w-12">1</td>
      <td className="border border-gray-500 p-2">
        <span>नांवः-</span>
      </td>
      <td className="border border-gray-500 p-2">
        <span className="font-bold"> ठकबाकीदार : जाधव संजय विठ्ठल</span>
      </td>
    </tr>
    <tr>
      <td className="border border-gray-500 p-2 w-12">2</td>
      <td className="border border-gray-500 p-2">
        <span>नांवः-</span> 
      </td >
      <td className="border border-gray-500 p-2">
        <span className="font-bold">
        जामिनदार : जाधव विजय विठ्ठल
        </span>
      </td>
    </tr>
    <tr>
      <td className="border border-gray-500 p-2 w-12">3</td>
      <td className="border border-gray-500 p-2">
        <span>नांवः-</span>
      </td>
      <td className="border border-gray-500 p-2">
        <span className="font-bold"> जामिनदार : साबळे सुनील काशीनाथ</span>
      </td>
    </tr>
  </tbody>
</table>

    <div className='flex ml-1'>
    <p className="mb-4 mr-72">सूचक :</p>
    <p className="mb-4">अनुमोदक :</p>
    </div>
 <p className="mb-4">ठराव सर्वानुमते मंजूर</p>

      <div className=" mb-4 border-t-2 border-black text-right">
        <p className="font-bold mr-60 mt-5 mb-20">खरी नक्कल</p>
        <p className='mr-10'>कार्य. संचालक / मानद सचिव / मुख्य कार्य. अधि. /सचिव / व्यवस्थापक / चेअरमन</p>
        <p className='mr-32 font-bold'>स्वामी विवेकानंद नागरी सहकारी पतसंस्था मर्यादित</p>
      </div>


      <div className=" mt-20 pt-4">
        <p className="font-bold text-lg text-center mb-4">आदेश व निकालपत्र</p>
        <b>
          सहा.निबंधक सह.संस्था (परसेवा), म.राज्य सह. पतसंस्था फेडरेशन मर्या., पुणे शहर, <br />
          ता. पुणे शहर, जि. पुणे.
        </b>
      </div>
        <div className='flex'>
        <p className='mt-4 mr-96'>अर्ज क्रमांक:-</p>
        <div className=' mt-4 text-left ml-20'>
        <p>जावक क्रमांक:-</p>
        <p>दिनांक:-</p>
        </div>
        </div>

      <div className="border border-gray-300 mt-4">
        <div className="flex justify-center p-4 ">
          <table className=" w-full border-collapse border border-gray-300 text-center font-bold">
            <thead>
              <tr>
                <th>संस्था</th>
                <th className="border border-gray-300 p-2"></th>
                <th className="border border-gray-300 p-2" >नांव:-</th>
                <th className="border border-gray-300 p-2">पत्ता:-</th>
                <th className="border border-gray-300 p-2"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2"></td>
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
        <div className="mt-5 text-center font-bold text-lg mb-2">
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
      <p className='text-justify mt-5'>
        ज्या अर्थी अर्जदार संस्थेने सामनेवाले यांचे विरुद्ध महाराष्ट्र सहकारी संस्था अधिनियम, १९६० चे कलम १०१(१)(२) अन्वये सामनेवाले
यांच्याकडील कर्जाची रक्कम संपूर्ण वसुली करणेसाठी अर्ज दिनांक ____/____/२०____ रोजी दाखल करून वसुली दाखला मिळण्यास
विनंती केली आहे. <br />
  सदर अर्जाच्या अनुषंगाने अर्जदार संस्थेस व सामनेवाले 1 ते    यांना डाक नोंदनों पोहोच देय पद्धतीने नोटीस देवून म्हणणे मांडणेसाठी
दि. ____/____/२०____, दि. ____/____/२०____ व दि. ____/____/२०____ रोजी संधी दिली असता सदर दिवशी अर्जदार संस्थेचे
वतीने मॅनेजर/अधिकारी/वकील – श्री. ................................................................ हे उपस्थित होते. सामनेवाले नं. 1,2,3,4,5,6 दि.
____/____/२०____, दि. ____/____/२०____ व दि. ____/____/२०____ रोजी हे गैरहजर आहेत. सा. वाले नं. 1 ते    यांना रीतसर
नोटीस डाक नोंदनों पाठविल्याची पोहोच प्राप्त झालेल्या आहेत. सदर दिवशी सुनावणीचे कामकाज पूर्ण करण्यात येऊन या बाबतचा सविस्तर
रोजनामा लिहीणेत आला आहे. <br />
  सामनेवाले नं. 1 ते    यांनी उपरोक्त सुनावणी कामी उपस्थित राहिलेले नाहीत अथवा त्यांनी त्यांना दि. ____/____/२०____
रोजीच्या सुनावणी नोटीस सोबत संस्थेने सादर केलेल्या कर्जखात्याबाबत कुठल्याही प्रकारचे लेखी म्हणणे सुनावणीचे कामकाज पूर्ण होईपर्यंत
दाखल केलेले नाही. तसेच अर्जदार संस्थेच्या वतीने मॅनेजर/अधिकारी/वकील – श्री. ................................................................ यांनी <br />
संस्थेचे मागणी कलम १०१ चे वसुली प्रमाणपत्र मिळावे ही विनंती केली व तसे पत्र कार्यालयास सदर केले आहे. <br />
  अर्जदार संस्थेने सादर केलेल्या कागदपत्रांचे अवलोकन करता सामनेवाले नं. 1 यांना संस्थेने दिनांक 07/05/2019 रोजी रुपये
100000.00 कर्ज अदा केले आहे. सामनेवाले नं. 1 ते    उपरोक्त सुनावणी कामी उपस्थित राहिलेले नाहीत. अथवा त्यांनी कुठल्याही
प्रकारचे लेखी म्हणणे दाखल केलेले नाही.याचाच अर्थ सामनेवाले यांनी घेतलेले कर्ज व कर्जबाकी त्यांना मान्य आहे. <br />
  वरील निष्कर्ष विचारात घेता अर्जदार संस्थेच्या मागणीप्रमाणे थकीत कर्ज वसुलीसाठी महाराष्ट्र सहकारी संस्था अधिनियम १९६० चे कलम
१०१ (१)(२) अन्वये वसुली दाखला देणे योग्य राहील याची खात्री झाल्याने मी खालील प्रमाणे आदेश पारित करीत आहे.
      </p>
      <p className='font-bold ml-16'> आदेश</p>
      <div>
        <p>मी,</p>
        <b>सहा.निबंधक सह.संस्था (परसेवा), म.राज्य सह. पतसंस्था फेडरेशन मर्या., पुणे शहर, <br />
            ता. पुणे शहर, जि. पुणे.</b>
      </div>
      <br />
      <p className='mb-10'>महाराष्ट्र संस्था नियम १९६१ मधील नियम ८६ एफ अन्वये प्राप्त झालेल्या अधिकाराचा वापर करून अर्जदार संस्थेने दाखल केलेला अर्ज क्रमांक
............. मान्य करून व सोबत विहित नमुन्यातील वसुली प्रमाणपत्र माझ्या सही शिक्क्यानिशी जारी करीत आहे.
</p>
    <p className='mt-20 text-center ml-96 font-bold'>सहा.निबंधक सह.संस्था (परसेवा), म.राज्य सह. <br />
पतसंस्था फेडरेशन मर्या., पुणे शहर <br />
ता. पुणे शहर, जि. पुणे.</p>


{/* ------------------------------------------------------------------------------------------------- */}

<div className=" mt-20 pt-4">
        <p className="font-bold text-lg text-center mb-4">आदेश व निकालपत्र</p>
        <b>
          सहा.निबंधक सह.संस्था (परसेवा), म.राज्य सह. पतसंस्था फेडरेशन मर्या., पुणे शहर, <br />
          ता. पुणे शहर, जि. पुणे.
        </b>
      </div>
        <div className='flex'>
        <p className='mt-4 mr-96'>अर्ज क्रमांक:-</p>
        <div className=' mt-4 text-left ml-20'>
        <p>जावक क्रमांक:-</p>
        <p>दिनांक:-</p>
        </div>
        </div>

      <div className="border border-gray-300 mt-4">
        <div className="flex justify-center p-4 ">
          <table className=" w-full border-collapse border border-gray-300 text-center font-bold">
            <thead>
              <tr>
                <th>संस्था</th>
                <th className="border border-gray-300 p-2"></th>
                <th className="border border-gray-300 p-2" >नांव:-</th>
                <th className="border border-gray-300 p-2">पत्ता:-</th>
                <th className="border border-gray-300 p-2"></th>
              </tr>
            </thead>
            <tbody>x
              <tr>
                <td className="border border-gray-300 p-2"></td>
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
        <div className="mt-5 text-center font-bold text-lg mb-2">
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
      <p className='text-justify mt-5'>
        ज्या अर्थी अर्जदार संस्थेने सामनेवाले यांचे विरुद्ध महाराष्ट्र सहकारी संस्था अधिनियम, १९६० चे कलम १०१(१)(२) अन्वये सामनेवाले
यांच्याकडील कर्जाची रक्कम संपूर्ण वसुली करणेसाठी अर्ज दिनांक ____/____/२०____ रोजी दाखल करून वसुली दाखला मिळण्यास
विनंती केली आहे. <br />
  सदर अर्जाच्या अनुषंगाने अर्जदार संस्थेस व सामनेवाले 1 ते    यांना डाक नोंदनों पोहोच देय पद्धतीने नोटीस देवून म्हणणे मांडणेसाठी
दि. ____/____/२०____, दि. ____/____/२०____ व दि. ____/____/२०____ रोजी संधी दिली असता सदर दिवशी अर्जदार संस्थेचे
वतीने मॅनेजर/अधिकारी/वकील – श्री. ................................................................ हे उपस्थित होते. सामनेवाले नं. 1,2,3,4,5,6 दि.
____/____/२०____, दि. ____/____/२०____ व दि. ____/____/२०____ रोजी हे गैरहजर आहेत. सा. वाले नं. 1 ते    यांना रीतसर
नोटीस डाक नोंदनों पाठविल्याची पोहोच प्राप्त झालेल्या आहेत. सदर दिवशी सुनावणीचे कामकाज पूर्ण करण्यात येऊन या बाबतचा सविस्तर
रोजनामा लिहीणेत आला आहे. <br />
  सामनेवाले नं. 1 ते    यांनी उपरोक्त सुनावणी कामी उपस्थित राहिलेले नाहीत अथवा त्यांनी त्यांना दि. ____/____/२०____
रोजीच्या सुनावणी नोटीस सोबत संस्थेने सादर केलेल्या कर्जखात्याबाबत कुठल्याही प्रकारचे लेखी म्हणणे सुनावणीचे कामकाज पूर्ण होईपर्यंत
दाखल केलेले नाही. तसेच अर्जदार संस्थेच्या वतीने मॅनेजर/अधिकारी/वकील – श्री. ................................................................ यांनी <br />
संस्थेचे मागणी कलम १०१ चे वसुली प्रमाणपत्र मिळावे ही विनंती केली व तसे पत्र कार्यालयास सदर केले आहे. <br />
  अर्जदार संस्थेने सादर केलेल्या कागदपत्रांचे अवलोकन करता सामनेवाले नं. 1 यांना संस्थेने दिनांक 07/05/2019 रोजी रुपये
100000.00 कर्ज अदा केले आहे. सामनेवाले नं. 1 ते    उपरोक्त सुनावणी कामी उपस्थित राहिलेले नाहीत. अथवा त्यांनी कुठल्याही
प्रकारचे लेखी म्हणणे दाखल केलेले नाही.याचाच अर्थ सामनेवाले यांनी घेतलेले कर्ज व कर्जबाकी त्यांना मान्य आहे. <br />
  वरील निष्कर्ष विचारात घेता अर्जदार संस्थेच्या मागणीप्रमाणे थकीत कर्ज वसुलीसाठी महाराष्ट्र सहकारी संस्था अधिनियम १९६० चे कलम
१०१ (१)(२) अन्वये वसुली दाखला देणे योग्य राहील याची खात्री झाल्याने मी खालील प्रमाणे आदेश पारित करीत आहे.
      </p>
      <p className='font-bold ml-16'> आदेश</p>
      <div>
        <p>मी,</p>
        <b>सहा.निबंधक सह.संस्था (परसेवा), म.राज्य सह. पतसंस्था फेडरेशन मर्या., पुणे शहर, <br />
            ता. पुणे शहर, जि. पुणे.</b>
      </div>
      <br />
      <p className='mb-10'>महाराष्ट्र संस्था नियम १९६१ मधील नियम ८६ एफ अन्वये प्राप्त झालेल्या अधिकाराचा वापर करून अर्जदार संस्थेने दाखल केलेला अर्ज क्रमांक
............. मान्य करून व सोबत विहित नमुन्यातील वसुली प्रमाणपत्र माझ्या सही शिक्क्यानिशी जारी करीत आहे.
</p>
    <p className='mt-20 text-center ml-96 font-bold'>सहा.निबंधक सह.संस्था (परसेवा), म.राज्य सह. <br />
पतसंस्था फेडरेशन मर्या., पुणे शहर <br />
ता. पुणे शहर, जि. पुणे.</p>

{/* ------------------------------------------------------------------------------ */}

<div className="p-8 font-sans">
      <h1 className="mb-4">सविनय सादर</h1>
      <p className="mb-4 text-center border border-gray-400 p-2 rounded">
  <span className="font-semibold">विषय – </span> 
  कलम १०१ अंतर्गत दावे दाखल करणेबाबत ....... कागदपत्रांची सूचि
</p>

        <span className="font-semibold">स्वामी विवेकानंद नागरी सहकारी पतसंस्था मर्यादित (मुख्य)</span>
        <br />
        <table className="w-full mb-4 border border-gray-400">
  <tbody>
    <tr>
      <td className="border border-gray-400 p-2">क्षेत्रीय अधिकारी :-</td>
      <td className="border border-gray-400 p-2">भाग :-</td>
    </tr>
  </tbody>
</table>

      <p className="mt-8">
        वरील विषयाने सविनय सादर की, <br />
        <p className='mt-3'>    
        वरील विषयांकित संस्थेने कलम १०१ अंतर्गत दावे दाखल करणे बाबतचे प्रस्ताव या
        कार्यालयास दिनांक ____/____/२०____ रोजी दाखल केला आहे. अर्जदार
        संस्थेतर्फे दाव्यासोबत खालील कागदपत्रे आपले अवलोकनार्थ सादर करण्यात आली
        आहेत.
        </p>
        <p>दाखल दिनांक :-</p>
      </p>

      <div className="mt-4">
       
        <p>थकबाकीदाराचे नाव :– जाधव संजय विठ्ठल</p>
      </div>

      <ol className="list-decimal ml-8 mt-4">
        <li>दाव्याची प्रत (एक)</li>
        <li>
          संस्थेच्या संचालक मंडळाने दिनांक 31/08/2021 रोजी मंजूर कलेल्या ठराव
          क्रमांक 5 (1) ची सत्य प्रत.
        </li>
        <li>कर्ज मागणी अर्ज</li>
        <li>कर्ज मंजुरी पत्र</li>
        <li>
          जाब देणार यांचे कर्ज खाते क्रमांक 185/110 चा उतारा (मुद्दल, व्याज, दंड
          व्याज इ. व इतर खर्च)
        </li>
        <li>वचन चिठ्ठी (Promissory Note)</li>
        <li>करारनामा</li>
        <li>Letter of Lien and Set Off.</li>
        <li>Letter of Continuity.</li>
        <li>गहाण खत</li>
        <li>
          जाब देणार यांना रक्कम भरणा करण्याबाबत दिनांक 10/07/2021 रोजी डाक
          नोंदनों देय पोच पावतीने पाठविलेल्या अंतिम सूचनांची व पोच पावतीच्या
          प्रती.
        </li>
        <li>इतर अनुषंगिक दस्तऐवजांच्या प्रती.</li>
      </ol>

      <div className="mt-4">
        <h2 className="font-semibold text-center w-full mb-4 border border-gray-400">दावा दाखल करतेवेळी केलेला भरणा</h2>
        <table className="min-w-full bg-white border border-gray-300 mt-2">
          <thead>
            <tr>
              <th className="px-4 py-2 border">क्रमांक</th>
              <th className="px-4 py-2 border">कागदपत्राचे नाव</th>
              <th className="px-4 py-2 border">दिनांक</th>
              <th className="px-4 py-2 border">होय / नाही</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">1</td>
              <td className="px-4 py-2 border">
                चौकशी फी रुपये 826.00 चलनाने भरणा केल्याचा
              </td>
              <td className="px-4 py-2 border"></td>
              <td className="px-4 py-2 border">होय / नाही</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">2</td>
              <td className="px-4 py-2 border">
                कोर्ट फी प्रस्तावासोबत जोडला आहे काय ?
              </td>
              <td className="px-4 py-2 border"></td>
              <td className="px-4 py-2 border">होय / नाही</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">3</td>
              <td className="px-4 py-2 border">
                दावा अर्जासोबत रक्कम रुपये 100.00 ची कोर्ट तिकिटे लावली आहेत
                काय ?
              </td>
              <td className="px-4 py-2 border"></td>
              <td className="px-4 py-2 border">होय / नाही</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-4 font-bold">
        वरील प्रमाणे प्रकरणासोबत कागदपत्रांची पूर्तता पाहता सोबत मसुदा मान्यतेसाठी
        सादर केला आहे. त्यावर स्वाक्षरी व्हावी. सोबत नोंदवनों ही सादर केली असून
        नोंदनों केली आहे.
      </p>

      <p className="mt-8 font-bold">संबंधित लिपिक</p>
      <p className="font-bold">
        सहा.निबंधक सह.संस्था (परसेवा), म.राज्य सह. पतसंस्था फेडरेशन मर्या., ता.
        पुणे शहर, जि. पुणे
      </p>
    </div>

    </div>
  </div>

  )
}

export default Tharav