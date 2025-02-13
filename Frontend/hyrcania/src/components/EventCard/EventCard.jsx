import { Card } from "@/components/ui/card";
import { LocateFixed } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import Arrow from "@/assets/Arrow";
const EventCard = () => {
  return (
    <Card
      className="  bg-clip-border p-6  rounded-2xl w-[402px] h-[250px] relative bg-violet-500 overflow-hidden mx-8 my-6"
      data-oid="3nuzcmj"
    >
      <svg
        className="absolute top-0 left-0 z-5 "
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        data-oid="ebg6kqr"
      >
        <filter id="noiseFilter" data-oid="q.oyvtg">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="2"
            numOctaves="2"
            stitchTiles="stitch"
            data-oid="6::vw4e"
          />
        </filter>

        <rect
          width="100%"
          height="100%"
          filter="url(#noiseFilter)"
          data-oid="qv-8pzc"
        />
      </svg>
      <div
        className="absolute top-0 left-0 w-[402px] h-[250px] z-10 bg-gray-950 opacity-50 "
        data-oid="dy:.8ks"
      ></div>
      <img
        src="/gradients/Gradient1.png"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80 hover:opacity-20 z-10 transition-all duration-300 ease-in-out"
        data-oid="4k:uio:"
      ></img>
      <img
        src="/images/event.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover"
        data-oid="7kmg02s"
      ></img>
      <div className="absolute bottom-0 left-0 z-30" data-oid="in7.6_v">
        <div className="flex flex-col m-5 space-y-1" data-oid="9ydq4bd">
          <h1
            className="text-3xl text-white"
            style={{
              fontStyle: "normal",
              fontWeight: "700",
              fontFamily: "'Noto Sans', sans-serif",
            }}
            data-oid="2-2bazu"
          >
            Mt. Bachelor
          </h1>
          <div
            className="flex flex-row items-center space-x-2 "
            data-oid="y-tg-ds"
          >
            <LocateFixed
              className="h-6 w-6 text-white"
              data-oid="2l6tcdv"
            ></LocateFixed>
            <h6
              style={{
                fontStyle: "normal",
                fontWeight: "400",
                fontFamily: "'Noto Sans', sans-serif",
              }}
              className=" text-sm text-white"
              data-oid="z2y9u9v"
            >
              Central Park, New York City
            </h6>
          </div>
          <h6
            style={{
              fontStyle: "normal",
              fontWeight: "400",
              fontFamily: "'Noto Sans', sans-serif",
            }}
            className=" text-sm text-white"
            data-oid="fflkjot"
          >
            March 15-18 , 2024
          </h6>
        </div>
      </div>

      <div className="absolute top-4 right-4 z-30" data-oid="vi8a-7-">
        <Arrow className="h-5 w-5" data-oid="vk_2r_:"></Arrow>
      </div>
    </Card>
  );
};
export default EventCard;
