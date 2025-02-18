import React from "react";

const Ticket = () => {
  return (
    <div className="flex justify-center items-center p-4" data-oid="9ai09rs">
      <div
        className="bg-white shadow-md rounded-lg overflow-hidden w-11/12 md:w-1/2 lg:w-2/3 xl:w-1/3"
        data-oid="vjkaney"
      >
        <div className="flex flex-col md:flex-row" data-oid="jp6a8br">
          <div className="w-full md:w-1/2" data-oid="um2:z9q">
            <img
              src="your-image-url.jpg"
              alt="Marathon"
              className="w-full h-48 object-cover"
              data-oid="uwwdz5d"
            />
          </div>
          <div className="w-full md:w-1/2 p-4" data-oid=":lxdax:">
            <h3 className="text-lg font-semibold" data-oid="gierdrw">
              For 17 years old
            </h3>
            <h2 className="text-xl font-bold" data-oid="x_33sw2">
              Saturday Half Marathon
            </h2>
            <p className="text-gray-600" data-oid="s.tf:wa">
              Distance: 21.10 Km
            </p>
            <h4
              className="text-2xl font-bold text-green-600"
              data-oid="06slcbg"
            >
              12 EUR
            </h4>
            <p className="text-gray-600" data-oid="gamd7ox">
              SEP. 12, 2025 10:00AM
            </p>
          </div>
        </div>
        <div className="p-4 bg-gray-100 text-center" data-oid="9e1dp2v">
          <img
            src="qr-code-url.png"
            alt="QR Code"
            className="w-32 h-32 mx-auto"
            data-oid="n64:j.r"
          />

          <p className="text-gray-600 mt-2" data-oid="pb3e-hq">
            Hyrcania
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
