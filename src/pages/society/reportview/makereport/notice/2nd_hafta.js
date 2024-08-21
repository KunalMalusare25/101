import React from 'react'

const SndHafta = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="mt-32 p-8 bg-white max-w-5xl mx-auto border border-gray-300 rounded-lg print:mt-0">
            <div className="flex justify-end p-4">
                <button 
                    onClick={handlePrint} 
                    className="print:hidden w-32 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                    Print
                </button>
            </div>
            <div className="print:text-sm">
                <h1 className="text-center text-xl font-bold print:text-base">स्वामी विवेकानंद नागरी सहकारी पतसंस्था मर्यादित</h1>
                <p className="text-center text-lg mb-4 print:text-sm">मुख्य ,बी.2/3, उढाण कॉम्प्लेक्स, मस्तगड</p>
                <hr className="border-t-2 border-black my-4" />
                <div className="flex justify-between print:text-sm">
                    <p>नंबर - </p>
                    <p className="font-bold">दोन हप्ते थकीत सूचना पत्र </p> 
                    <p>शाखा – मुख्य शाखा</p> 
                </div>

                <div className="flex justify-between mt-5 print:text-sm">
                    <p>संदर्भ – कर्ज खाते क्रमांक – 185/110</p>
                    <p>दिनांक :</p>
                </div>

                <div className="mb-5 print:text-sm">    
                    <span>प्रति,</span><br />
                    <span>नांव :- थकबाकीदार: जाधव संजय विठ्ठल</span><br />
                    <span>पत्ता :- शंकर नगर तहसील ऑफिस जानवी किराणा दुकान जुना जालना,ता.जालना,जि.जालना</span>
                </div>

                <p className="mb-4 print:text-sm">महाशय,</p>
                <p className="mb-4 print:text-sm">
                आपण संस्थेकडून व्यवसाय वाढीकारिता कर्ज घेतलेले आहे. त्याच्या २ हप्त्याएव्हढी रक्कम रुपये - 10200 थकली आहे. तरी पत्र मिळताच थकीत हप्त्याची रक्कम
                त्वरित भरण्याची विनंती.
                </p>

                <p className="text-right mb-4 print:text-sm">
                    अधिकृत प्रतिनिधी<br />
                    स्वामी विवेकानंद नागरी सहकारी पतसंस्था मर्यादित
                </p>
                <hr className="border-t-2 border-black my-4" />
                <p className="text-left print:text-sm">सूचना</p>
                <hr className="border-t-2 border-black my-4" />
            </div>
        </div>
  )
}

export default SndHafta