import marathonImage from "@/components/images/marathon.jpeg";
import marathonImage1 from "@/components/images/headerBg.jpg";
import routemap from "@/components/images/routemap.png";
import player from "@/components/images/player.png";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Location from "@/assets/Location";
import Timing from "@/assets/Timing";
import Runner from "@/assets/Runner";
import { Separator } from "@radix-ui/react-select";
import { LocateFixed, CalendarClock, PersonStanding } from "lucide-react";

const MarathonDetail = () => {
  return (
    <div data-oid="vj90wec" className="relative bg-white  min-h-screen">
      <AspectRatio
        className="absolute top-0 left-0 w-full h-[250px]  overflow-hidden opacity-30"
        ratio={50 / 9}
      >
        <img
          className="w-full h-full object-cover "
          src={marathonImage}
          alt="image"
        />
      </AspectRatio>
      <div className="absolute top-1/2 left-1/2 w-full left-1/2 transform -translate-x-[calc((50%+300px)/2)] -translate-y-1/2 ">
        <div
          style={{ width: "calc(50% + 500px)" }}
          className="flex flex-col gap-4 pr-20 "
        >
          <img
            className="h-[350px] rounded-sm  object-cover"
            style={{ width: "calc(50% + 450px)", objectPosition: "60% 35%" }}
            src={marathonImage}
            alt="image"
          />

          <h1 className="event-title">European Running Championships</h1>
          <p className="event-description text-balance">
            On Saturday 12 and Sunday 13 April 2025, Brussels and Leuven will be
            the stage for the brand-new European Running Championships. For the
            first time, official European Championships open to all. You can run
            the race where elite runners will compete for a medal. A unique way
            to experience a top sporting event as an insider. In addition to the
            mythical 42.195 km, the half marathon and 10 km get their own
            European Championships.
          </p>
          <div className="flex flex-row w-[450px] h-[120px] rounded-xl  overflow-hidden ">
            <div
              style={{
                backgroundColor: "#D6D6D6",
              }}
              className="basis-1/3 grid grid-cols-2 h-full bg-white  place-content-center gap-y-3 pl-2 pr-20"
            >
              <LocateFixed className="text-black" />
              <h1 className="marathon-detail-card">VENUE</h1>

              <CalendarClock className="text-black" />
              <h1 className="marathon-detail-card">TIME</h1>

              <PersonStanding className="text-black" />
              <h1 className="marathon-detail-card">MARATHON</h1>
            </div>

            <div
              style={{ backgroundColor: "#434343" }}
              className="basis-2/2 flex flex-col  place-content-center gap-y-4 rounded-r-lg h-full bg-black-100 pl-2 pr-10 "
            >
              <h1
                style={{
                  color: "#ffffff",
                }}
                className="marathon-detail-card "
              >
                Lueven , Belgium
              </h1>
              <h1
                style={{
                  color: "#ffffff",
                }}
                className="marathon-detail-card "
              >
                APR.12-15.2025 10:10.AM
              </h1>
              <h1
                style={{
                  color: "#ffffff",
                }}
                className="marathon-detail-card "
              >
                Trail running - 5k , 10k
              </h1>
            </div>
          </div>
          <div style ={{
            backgroundColor:"#D9D9D9"
          }} className="h-[0.5px]  my-2 w-full"></div>
          <h1 className="event-title">Route Details</h1>
          
        </div>
      </div>
    </div>
  );
};

export default MarathonDetail;
