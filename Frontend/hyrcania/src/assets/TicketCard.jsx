import React from "react";


import ticketImage from "@/components/images/ticket.jpeg";
import star from "@/components/images/star.png";
import QR from "@/components/images//QR.png";

const Ticket = () => {
  return (
    <div className="flex flex-row w-[35em] h-[10em] rounded-xl my-4 overflow-hidden bg-white items-center justify-start shadow-lg">
      <img src={ticketImage} alt="Ticket" className="h-[10em] rounded-l-lg" />

      <div className=" flex flex-col gap-y-1 w-[18em] h-[10em] ml-4 rounded-lg">
        <div
          style={{
            color: "#1b1b1b",
          }}
          className="font-mono text-xs mt-2"
        >
          For 17 yr old
        </div>
        <h1
          style={{
            color: "#1b1b1b",
          }}
          className="font-bold text-lg leading-6 font-mono"
        >
          Saturday Half Marathon
        </h1>
        <div
          style={{
            color: "#1b1b1b",
          }}
          className="font-mono text-xs font-semibold"
        >
          Distance: 21.10 km
        </div>
        <div
          style={{
            color: "#1b1b1b",
          }}
          className="text-xl font-bold "
        >
          12 EUR
        </div>
        <div
          style={{
            color: "#1b1b1b",
          }}
          className="font-light"
        >
          SEP.12.2025 10:00AM
        </div>
      </div>
      <div className="border-2 h-full border-black border-dashed w-[1px]"></div>

      <div
        style={{
          color: "#1b1b1b",
        }}
        className="flex flex-col py-2 w-[10.5em] h-[10em] place-items-center  "
      >
        <img src={QR} alt="QR Code" className=" h-[80px] w-[80px] ml-2 mt-2" />
        <img src={star} alt="QR Code" className="h-[20px] mt-4 w-[20px]" />

        <div className="font-reenie ml-2">Hyrcania</div>
      </div>
    </div>
  );
};

export default Ticket;
