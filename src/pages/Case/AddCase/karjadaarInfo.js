import React from "react";

const KarjadaarInfo = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="max-w-8xl w-full p-5 bg-white rounded-lg shadow-md">
        <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
        {/* Main Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col mb-4">
            <label className=" mb-2">कर्ज प्रकार</label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className=" mb-2">
              दाव्याकरिता अखेर येणे बाकी रकमेचा दिनांक
            </label>
            <input
              type="date"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className=" mb-2">कर्ज अर्ज दाखल केल्याचा दिनांक</label>
            <input
              type="date"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className=" mb-2">
              कर्ज अर्ज मंजूरी संचालक मंडळाच्या सभेचा दिनांक
            </label>
            <input
              type="date"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className=" mb-2">कर्ज अर्ज मंजूरी दिनांक</label>
            <input
              type="date"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className=" mb-2">कर्ज अर्ज मंजुरीचा ठराव क्रमांक</label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className=" mb-2">कर्ज वितरीत केल्याचा दिनांक</label>
            <input
              type="date"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className=" mb-2">कर्ज मुदत</label>
            <input
              type="number"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className=" mb-2">कर्जाची अंतिम मुदत</label>
            <input
              type="date"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
        <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

        {/* Loan Calculation Section */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="flex flex-col mb-4">
              <label className=" mb-2">कर्जाचा व्याजदर</label>
              <input
                type="number"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className=" mb-2">कर्जाचे दंडव्याज</label>
              <input
                type="number"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className=" mb-2">एकूण व्याजदर</label>
              <input
                type="number"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className=" mb-2">कर्जाचा खाते क्रमांक</label>
              <input
                type="text"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className=" mb-2">कर्जाचा हप्ता</label>
              <input
                type="number"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className=" mb-2">
                कर्जाच्या अंतिम मुदतपूर्व दावा दाखल करण्याकरिता अखेर येणे बाकी
                दिनांकापर्यंतची एकूण रक्कम
              </label>
              <input
                type="number"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>

        <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
        {/* Board Meeting Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="flex flex-col mb-4 mt-4">
            <label className=" mb-2">
              संचालक मंडळाच्या सभेत १०१ कारवाई मंजुरीचा दिनांक
            </label>
            <input
              type="date"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col mb-4 mt-4">
            <label className=" mb-2">
              संचालक मंडळाच्या सभेत १०१ कारवाई मंजुरीचा ठराव क्रमांक
            </label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col mb-4 mt-4">
            <label className=" mb-2">
              कर्ज वसुलीकरिता दिलेल्या रजिस्टर्ड नोटिसीचा दिनांक
            </label>
            <input
              type="date"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
        <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

        {/* Loan Approval Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            <u>आकारणी</u>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col mb-4">
              <label className=" mb-2">कर्ज मंजूर रक्कम</label>
              <input
                type="number"
                placeholder="₹"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className=" mb-2">
                दिनांक 31/03/2024 पर्यंत आकारलेले एकूण व्याज
              </label>
              <input
                type="number"
                placeholder="₹"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className=" mb-2">आकारलेले ज्यादा व्याज (दंडव्याज)</label>
              <input
                type="number"
                placeholder="₹"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className=" mb-2">कर्ज मंजूर रक्कम अक्षरी</label>
              <input
                type="text"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>
        <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

        {/* Collections Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">
            <u>वसूली</u>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col mb-4">
              <label className=" mb-2">
                दिनांक 31/03/2024 पर्यंत मुद्दलात झालेली वसुली
              </label>
              <input
                type="number"
                placeholder="₹"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className=" mb-2">
                दिनांक 31/03/2024 पर्यंत व्याजात झालेली वसुली
              </label>
              <input
                type="number"
                placeholder="₹"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className=" mb-2">
                दिनांक 31/03/2024 पर्यंत दंड व्याजात झालेली वसुली
              </label>
              <input
                type="number"
                placeholder="₹"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>
        <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

        {/* Outstanding Amount Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">
            <u>वसुलीस पात्र रक्कम</u>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col mb-4">
              <label className=" mb-2">
                (अ) दिनांक 31/03/2024 पर्यंत मुद्दलाची येणे बाकी
              </label>
              <input
                type="number"
                placeholder="₹"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className=" mb-2">
                (ब) दिनांक 31/03/2024 पर्यंत व्याजाची येणे बाकी
              </label>
              <input
                type="number"
                placeholder="₹"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className=" mb-2">
                (क) दिनांक 31/03/2024 पर्यंत दंड व्याजाची येणे बाकी
              </label>
              <input
                type="number"
                placeholder="₹"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>
        <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

        {/* Insurance and Expenses Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">
            <u>एकूण इ. खर्च</u>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col mb-4">
              <label className=" mb-2">विमा रक्कम (असल्यास)</label>
              <input
                type="number"
                placeholder="₹"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className=" mb-2">
                दिनांक 31/03/2024 पर्यंत एकूण नोटीस, पोस्टेज इ. खर्च
              </label>
              <input
                type="number"
                placeholder="₹"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className=" mb-2">
                दिनांक 31/03/2024 पर्यंत वसूल झालेला खर्च
              </label>
              <input
                type="number"
                placeholder="₹"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className=" mb-2">
                दिनांक 31/03/2024 पर्यंत एकूण केलेला खर्च
              </label>
              <input
                type="number"
                placeholder="₹"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className=" mb-2">
                दिनांक 31/03/2024 पर्यंत शिल्लक खर्च
              </label>
              <input
                type="number"
                placeholder="₹"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className=" mb-2">
                (अ + ब + क + ड = ई) एकूण वसूल पात्र रक्कम
              </label>
              <input
                type="number"
                placeholder="₹"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>
        <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

        {/* Applicant's Expense Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">
            <u>अर्जदाराचा झालेला खर्च</u>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col mb-4">
              <label className=" mb-2">अर्जाला लावायचा स्टॅम्प</label>
              <input
                type="number"
                placeholder="₹"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className=" mb-2">कोर्ट फी स्टॅम्प रक्कम</label>
              <input
                type="number"
                placeholder="₹"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className=" mb-2">एकूण झालेली स्टॅम्पची रक्कम</label>
              <input
                type="number"
                placeholder="₹"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className=" mb-2">चौकशी फी व खर्च</label>
              <input
                type="number"
                placeholder="₹"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className=" mb-2">इतर खर्च पोस्टेज इत्यादी</label>
              <input
                type="number"
                placeholder="₹"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className=" mb-2">जाहीर समन्स</label>
              <input
                type="number"
                placeholder="₹"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className=" mb-2">एकूण खर्च</label>
              <input
                type="number"
                placeholder="₹"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>
        <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

        {/* Guarantor's Expenses Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">
            <u>जाब देणार यांनी द्यावयाचा खर्च</u>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col mb-4">
              <label className=" mb-2">कारवाईची फी</label>
              <input
                type="number"
                placeholder="₹"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className=" mb-2">अन्य खर्च</label>
              <input
                type="number"
                placeholder="₹"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className=" mb-2">एकूण खर्च</label>
              <input
                type="number"
                placeholder="₹"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className=" mb-2">अर्जाची रक्कम</label>
              <input
                type="number"
                placeholder="₹"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>
        <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

        {/* Mortgage Information Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">
            <u>तारणाची माहिती</u>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col mb-4">
              <label className=" mb-2">पगाराची माहिती</label>
              <input
                type="text"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className=" mb-2">जंगम मालमत्तेचे वर्णन</label>
              <input
                type="text"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className=" mb-2">स्थावर मालमत्तेचे वर्णन</label>
              <input
                type="text"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className=" mb-2">इतर मालमत्तेचे वर्णन</label>
              <input
                type="text"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>
        <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      </form>
    </div>
  );
};

export default KarjadaarInfo;
