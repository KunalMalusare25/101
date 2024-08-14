import React from 'react'

const NamunaV = () => {
    const handlePrint = () => {
        window.print();
      };
  return (
    <div className=" p-4 max-w-5xl mx-auto mt-10">
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
      <div className="border border-gray-300 mt-4">
        <div className='text-center p-2'>
            <p className='font-bold text-2xl'>नमुना "व्ही"</p>
            <p>कलम १०१ खाली वसुलीसाठी प्रमाणपत्राचा नमुना (नियम ८६ फ पहावा)</p>
        </div>
        <div className='p-2'>
            <p className='font-bold'>सहा .नि बंधक सह.संस्था (परसेवा ), म.रा ज्य सह. पतसंस्था फेडरेशन मर्या .,</p>
            <p>प्रमि ला अपा र्टमेंट, ३ रा मजला , लका की रो ड, मॉं डेल कॉ लनी , पुणे., ता .पुणे शहर, जि .पुणे</p>
            <p>यांचे समोर <br />अर्ज क्रमां क ____________________________ / कलम १०१ /२०____ - २०____
            </p>
        </div>
        <p className='p-2'>प्रति , मॅनेजर / वसुली वि भा ग प्रमुख</p>
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
        <p className='p-2 text-center font-bold'>महाराष्ट्र सहकारी संस्था अधिनियम, १९६० चे कलम १०१ अन्वये वसुली प्रकरण</p>
        <table className="w-full border-collapse border border-gray-300 ">
            <tbody>
                <tr>
                    <td className="border border-gray-300 p-2">1</td>
                    <td className="border border-gray-300 p-2 " colspan="2">वसुली स पा त्र रक्कम रुपये - 52372.00
अर्जदार संस्थेने प्रकरण दाखल केल्या चा दि नां क: - ____/____/______
</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2">2 </td>
                    <td className="border border-gray-300 p-2" colspan="2">प्रकरणा सोबत अर्जदार संस्थेने सादर केलेल्या का गदपत्रां चा तपशील.</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2 ">
                        <p>अ</p>
                        <p>ब</p>
                        <p>क</p>
                        <p>ड</p>
                        <p>इ</p>
                        <p>ई</p>
                        <p>फ</p>
                    </td>
                    <td className="border border-gray-300 p-2">
                        <p>अर्जदार संस्थेने जा ब देणा र यां चेकडून रक्कम वसुली साठी दाखला मि ळणेचा अर्ज.</p>
                        <p>अर्जदार संस्थेच्या/बँकेच्या व्यवस्था पक मंडळा च्या सभेचा दि नां क 11/09/2021 ठरा व क्रमां क 5 (1) ची सत्यप्रत.  </p>
                        <p>जा ब देणा र यां ना अर्जदार संस्थेने प्रकरण सादर करण्या पूर्वी दि लेल्या नो टी शी ची प्रत</p>
                        <p>जा ब देणा र यां ना रुपये - 100000.00 रक्कम अदा केल्या पा सुनचा अद्यया वत हि शो बी तक्ता .</p>
                        <p>वचन चि ठ्ठी सत्यप्रत.</p>
                        <p>करा रना म्या ची सत्यप्रत.</p>
                        <p>अर्जदार संस्थेस जा ब देणा र यां चेकडून येणे रक्कम सि द्ध करण्या स जरूर असणारी का गदपत्र</p>
                    </td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2">3</td>
                    <td className="border border-gray-300 p-2" colspan="2">जा ब देणा र यां ना म्हणणे मां डण्या साठी सुना वणी नो टि स पा ठवि ण्या ची ता री ख ____/____/२०____
                    </td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2">4</td>
                    <td className="border border-gray-300 p-2" colspan="2">जा ब देणा र हजर रा हि ल्या ची ता री ख ____/____/२०____
                    </td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2">5</td>
                    <td className="border border-gray-300 p-2" colspan="2">सुना वणी ची ता री ख____/____/२०____
                    </td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2">6</td>
                    <td className="border border-gray-300 p-2" colspan="2">अर्जदार संस्थेतर्फे प्रति नि धी / अ‍ॅडव्हो केट
                    </td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2">7</td>
                    <td className="border border-gray-300 p-2" colspan="2">जा ब देणा र तर्फे प्रति नि धी / अ‍ॅडव्हो केट</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2">8</td>
                    <td className="border border-gray-300 p-2" colspan="2">जा ब देणा ऱ्यां नी अर्जदार संस्थेचे येणे बा की बा बत सादर केलेले म्हणणे <br />
........................................................................ <br /> ........................................................................
........................................................................ <br /> ........................................................................ <br />
जा ब देणा र 1 ते यां ना समन्सची बजा वणी झा ली . सुना वणी का मी जा ब देणा र 1 ते गैरहजर रा हि ले व अर्जा बा बत आपले म्हणणे दाखल केले
ना ही .
</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2">9</td>
                    <td className="border border-gray-300 p-2" colSpan="2">वरील निवेदना वर नि बंधका चा अभि प्रा य ............................................................................................ <br />
........................................................................ ........................................................................     <br />
........................................................................ ........................................................................    <br />
........................................................................ ........................................................................   <br />
........................................................................ ........................................................................  <br />
........................................................................ ........................................................................ <br />
अर्जा सोबत दाखल खा ते उता ऱ्या चे अवलो कन केले असता , असे नि दर्शना स येते की , जा ब देणा र यां नी कर्ज परतफेड मुदती मध्ये केली ना ही .
थकबा की दार झा ले असल्या चे सि द्ध हो ते. सबब महा रा ष्ट्र सहका री संस्था अधि नि यम १९६० चे कलम १०१ अन्वये जा ब देणा र 1 ते यां च्या
उपस्थि ती मध्ये / गैरहजेरी मध्ये वसुली दाखला देत आहे.</td>
                </tr>
                <tr>
                <td className="border border-gray-300 p-2">10</td>
                <td className="border border-gray-300 p-2" colSpan="2">
                    <p className='text-justify mb-2'>्ज्याअर्थी , , मी वर नमूद केलेल्या सर्व जा ब देणा र यां ना रि तसर नो टी सा पा ठवून व नैसर्गि क न्या या चे दृष्टी ने सुना वणी साठी व म्हणणे मां डण्या साठी यो ग्य व
भरपूर संधी दि ली आहे. तसेच अर्जदार पतसंस्थेला / बँकेला उपरो क्त जा ब देणा ऱ्यां नी करून दि लेली वचनचि ठ्ठी करा रना मा व त्या नुसार संस्थेने / बँकेने
सादर केलेला खा ते उता रा इ. का गदपत्रां ची व व्यवहा रां ची छा ननी व चौ कशी केली असता मा झी अशी खा त्री झा ली आहे की , अर्जदार संस्थेकडून /
बँकेकडून जा ब देणा र यां नी कर्ज घेतले असून ते थकवि लेले आहे आणि ते वसूल हो ण्या साठी मी अभि प्रा या स अनुसरून खा ली लप्रमा णे हुकूम करी त
आहे.
</p>
<div className='border border-black p-2'>
    <p className='text-center font-bold'>दि. महाराष्ट्र सहकारी संस्था अधिनियम, १९६० चे कलम १०१ अन्वये वसुली दाखला.</p>
</div>
<div>
    <table className="w-full border-collapse border border-gray-300 ">
        <tbody>
            <tr>
                <td className="border border-gray-300 p-2" >उपरो क्त अर्जदार संस्थेस जा ब देणा र यां नी</td>
                <td className="border border-gray-300 p-2" >
                    <p>अर्जा ची रक्कम <br />
चौ कशी फी व अन्य खर्च <br />
असे एकूण
</p>
                </td>
                <td className="border border-gray-300 p-2" >
                    <p>
                    रुपये <br />
रुपये <br />
रुपये
                    </p>
                </td>
                <td className="border border-gray-300 p-2" >
                    <p>52372.00 <br />
1973.00 <br />
54345.00</p>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<p>तसेच मुद्दल रक्कम रुपये 45399.00 या वर दि नां क 31/08/2021 पा सून पुढे ही सर्व रक्कम परतफेड हो ईपर्यंत द.सा.द.शे. रुपये 21.00% दरा ने
हो णा ऱ्या व्या जा ची रक्कम अशी सर्व रक्कम जा ब देणा र यां चेकडून वसूल करा वी .</p>
<br />
<table className="w-full border-collapse border border-gray-300 "> 
        <thead>
            <tr>
                <th >अर्जदार यां चा झा लेला खर्च </th>
                <th>अर्जा स ला वलेला स्टँप रुपये 1047.00 + को र्ट फी स्टँप रु. रुपये 100.00</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="border border-gray-300 p-2" >
                    <p>अर्जा ची रक्कम <br />
चौ कशी फी व अन्य खर्च <br />
असे एकूण
</p>
                </td>
                <td className="border border-gray-300 p-2" >
                    <p>
                    रुपये <br />
रुपये <br />
रुपये
                    </p>
                </td>
                <td className="border border-gray-300 p-2" >
                    <p>52372.00 <br />
1973.00 <br />
54345.00</p>
                </td>
            </tr>
        </tbody>
</table>
                </td>
                </tr>
                <tr>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 text-justify p-4" colSpan="2" >
                    <p>मी आणखी असा हुकूम करतो की , जा ब देणा र यां चेकडून वर नमूद केलेली रक्कम महा रा ष्ट्र महसूल अधि नि यम १९६६ मधी ल तरतुदीस
अनुसरून जमी न महसुला ची बा की वसूल करण्या च्या री ती प्रमा णे ती जा ब देणा ऱ्यां कडून वसूल करा वी अथवा ,
अर्जदार यां नी या वसुली दाखल्या ची बजा वणी त्यां चेकडी ल ज्या अधि का ऱ्यां ना महा रा ष्ट्र सहका री संस्था अधि नि यम १९६० चे कलम १५६ आणि
महा रा ष्ट्र सहका री संस्था अधि नि यम १९६० चे या ती ल नि यम १०७ अन्वये ज्या ला अधि का र प्रा प्त झा ले आहेत त्यां चे मा र्फत या वसुली दाखल्या ची बजा वणी
करून वसूल करण्या त या वी . या साठी स्वतंत्र अर्ज या का र्या लया कडे करण्या ची जरुरी ना ही .</p> 
<br />
<p>ा वसुली दाखला आज दि नां क ____/____/२०____ रो जी मा झी सही व का र्या लया चे मुद्रेसह दि ला आहे.</p>
                <div className='text-right'>
                    सहा .नि बंधक सह.संस्था (परसेवा ), म.रा ज्य सह. पतसंस्था फेडरेशन मर्या ., पुणे शहर
ता .पुणे शहर, जि . पुणे .

                </div>
                </td>
                </tr>
            </tbody>
        </table>
        <span className='p-4 '>
        टीप:- १) सदरचा वसुली दाखला हा जा ब देणा र यां चेकडून रक्कम वसुली चा अंति म दाखला असून त्या वर त्यां ना अपि ल करता येणा र ना ही . मा त्र सदरचा नि र्णय
अमा न्य असल्या स त्या वि रुद्ध मा . वि भा गी य सह. नि बंधक संस्था ना शि क/को ल्हा पूर/मुंबई/अमरा वती /ना गपूर/औरंगा बा द/पुणे वि भा ग यां चेकडे कलम १५४ अन्वये
पुनर्री क्षण अर्ज करता येईल / सह नि बंधका च्या नि र्णया वि रुद्ध शा सना कडे कलम १५४ अन्वये पुनर्री क्षण अर्ज करता येईल.
२) कलम ९१ खा ली ल नमूद केलेल्या परंतुका प्रमा णे हा वा दाचा वि षय हो त नसल्या ने या वि रुद्ध मा . सहका र न्या या लया त अपि ल करता येणा र ना ही . तसेच कलम
९५ प्रमा णे स्थगन आदेश घेता येणा र ना ही . ..... महा रा ष्ट्रा चे रा ज्यपा ल यां च्या आदेशा नुसार व ना वा ने.

        </span>
      </div>
    </div>
  )
}

export default NamunaV