import React from "react";

function Labelprint() {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="p-6 bg-white max-w-4xl mx-auto border border-black rounded-md mt-5">
      <div className="flex justify-end p-4 print:p-0">
        <button
          onClick={handlePrint}
          className="print:hidden w-32 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          Print
        </button>
      </div>
      <h2 className="text-xl font-bold mb-4 text-center">
        कर्जदार आणि जामिनदारांची माहिती
      </h2>

      <div className="mb-4 border border-black p-2">
        <p className="font-bold">
          <u>कर्जदार:</u>
        </p>
        <p>जाधव संजय विठ्ठल524</p>
        <p>शंकर नगर तहसील ऑफिस, जानवी किराणा दुकान, जुना जालना</p>
        <p>जालना ता. जालना जि. जालना, पिन - 431203</p>
        <p>मोबाईल नं. - 7774037519</p>
      </div>

      <div className="mb-4 border border-black p-2">
        <p className="font-bold">
          <u>जामिनदार 1:</u>
        </p>
        <p>जाधव विजय विठ्ठल524</p>
        <p>सोरटी नगर, अंबड रोड, जुना जालना</p>
        <p>ता. जालना जि. जालना, पिन - 431203</p>
        <p>मोबाईल नं. - 7385155123</p>
      </div>

      <div className="border border-black p-2">
        <p className="font-bold ">
          <u>जामिनदार 2:</u>
        </p>
        <p>साबळे सुनील काशीनाथ524</p>
        <p>सरस्वती भुवन शाळा जवळ, घायल नगर, जुना जालना</p>
        <p>ता. जालना जि. जालना, पिन - 431203</p>
        <p>मोबाईल नं. - 8975262424</p>
      </div>
    </div>
  );
}

export default Labelprint;
