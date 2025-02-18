import { Card } from "@/components/ui/card";
import { LocateFixed } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import Arrow from "@/assets/Arrow";
const EventCard = () => {
  return (
    <Card
      className="  bg-clip-border p-6  rounded-2xl w-[402px] h-[250px] relative bg-violet-500 overflow-hidden mx-8 my-6"
      data-oid="413tdt_"
    >
      <svg
        className="absolute top-0 left-0 z-5 "
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        data-oid="oo.b.kd"
      >
        <filter id="noiseFilter" data-oid="5z9uf4w">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="2"
            numOctaves="2"
            stitchTiles="stitch"
            data-oid="sovhp:b"
          />
        </filter>

        <rect
          width="100%"
          height="100%"
          filter="url(#noiseFilter)"
          data-oid="3xm0hfv"
        />
      </svg>
      <div
        className="absolute top-0 left-0 w-[402px] h-[250px] z-10 bg-gray-950 opacity-50 "
        data-oid="fxx3pcy"
      ></div>
      <img
        src="/gradients/Gradient1.png"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80 hover:opacity-20 z-10 transition-all duration-300 ease-in-out"
        data-oid="i0__a-d"
      ></img>
      <img
        src="/images/event.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover"
        data-oid="-4e1ll3"
      ></img>
      <div className="absolute bottom-0 left-0 z-30" data-oid="azfs7i1">
        <div className="flex flex-col m-5 space-y-1" data-oid="www91uo">
          <h1
            className="text-3xl text-white"
            style={{
              fontStyle: "normal",
              fontWeight: "700",
              fontFamily: "'Noto Sans', sans-serif",
            }}
            data-oid="k1v-pmn"
          >
            Mt. Bachelor
          </h1>
          <div
            className="flex flex-row items-center space-x-2 "
            data-oid="a2:h.i_"
          >
            <LocateFixed
              className="h-6 w-6 text-white"
              data-oid="olz.q_a"
            ></LocateFixed>
            <h6
              style={{
                fontStyle: "normal",
                fontWeight: "400",
                fontFamily: "'Noto Sans', sans-serif",
              }}
              className=" text-sm text-white"
              data-oid="8hzr6e4"
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
            data-oid="9cqi:cn"
          >
            March 15-18 , 2024
          </h6>
        </div>
      </div>

      <div className="absolute top-4 right-4 z-30" data-oid="yis744_">
        <Arrow className="h-5 w-5" data-oid="j5e8ire"></Arrow>
      </div>
    </Card>
  );
};
export default EventCard;
