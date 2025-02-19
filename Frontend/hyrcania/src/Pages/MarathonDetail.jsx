import marathonImage1 from "@/components/images/marathon.jpeg";
import marathonImage from "@/components/images/headerBg.jpg";
import routemap from "@/components/images/routemap.png";
import star from "@/components/images/star.png";
import player from "@/components/images/player.png";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Location from "@/assets/Location";
import Timing from "@/assets/Timing";
import TicketCard from "@/assets/TicketCard";
import Runner from "@/assets/Runner";
import ticketImage from "@/components/images/ticket.jpeg";
import QR from "@/components/images//QR.png";
import { Separator } from "@radix-ui/react-select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  LocateFixed,
  CalendarClock,
  PersonStanding,
  Ticket,
} from "lucide-react";

const MarathonDetail = () => {
  return (
    <div
      data-oid="vj90wec"
      className="relative bg-white min-h-screen overflow-auto"
    >
      {/* Background Image */}
      <AspectRatio
        className="absolute top-0 left-0 w-full h-[400px] overflow-hidden opacity-30"
        ratio={50 / 9}
      >
        <img
          className="w-full h-full object-cover"
          src={marathonImage}
          alt="image"
        />
      </AspectRatio>

      {/* Main Content */}
      <div className="relative w-full flex flex-col items-center  px-4">
        <div className="w-full max-w-5xl flex flex-col gap-4">
          {/* Main Image */}
          <img
            className="h-[350px] rounded-sm object-cover w-full"
            style={{ objectPosition: "60% 35%" }}
            src={marathonImage}
            alt="image"
          />

          {/* Event Title & Description */}
          <h1 className="event-title">European Running Championships</h1>
          <p className="event-description text-wrap">
            On Saturday 12 and Sunday 13 April 2025, Brussels and Leuven will be
            the stage for the brand-new European Running Championships. For the
            first time, official European Championships open to all. You can run
            the race where elite runners will compete for a medal. A unique way
            to experience a top sporting event as an insider. In addition to the
            mythical 42.195 km, the half marathon and 10 km get their own
            European Championships.
          </p>

          {/* Marathon Details */}
          <div className="flex flex-row w-[450px] h-[120px] rounded-xl overflow-hidden shadow-lg">
            <div className="basis-1/3 grid grid-cols-2 h-full bg-white  place-content-center gap-y-3 pl-2 pr-20">
              <LocateFixed className="text-black" />
              <h1 className="marathon-detail-card">VENUE</h1>

              <CalendarClock className="text-black" />
              <h1 className="marathon-detail-card">TIME</h1>

              <PersonStanding className="text-black" />
              <h1 className="marathon-detail-card">MARATHON</h1>
            </div>

            <div className="basis-2/3 flex text-neutral-700 flex-col place-content-center gap-y-4 rounded-r-lg h-full bg-gray-100 pl-2 pr-10">
              <h1 className="marathon-detail-card ">Lueven , Belgium</h1>
              <h1 className="marathon-detail-card ">
                APR.12-15.2025 10:10.AM
              </h1>
              <h1 className="marathon-detail-card ">
                Trail running - 5k , 10k
              </h1>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[0.5px] bg-gray-400 my-2 w-full"></div>

          {/* Route Details */}
          <h1 className="event-title">Route Details</h1>
          <img
            className="h-[350px] rounded-sm object-cover w-full"
            style={{ objectPosition: "60% 35%" }}
            src={routemap}
            alt="route"
          />
          <div className="flex flex-col">
            <div>
              <span className="form-label"> START ADDRESS: </span>
              <span className="toggle-option"> Royal Palace of Brussels</span> 
            </div>
            <div>
              <span className="form-label"> FINISH ADDRESS: </span>
              <span className="toggle-option"> Leuven, Belgium</span> 
            </div>
          </div>
          <div className="h-[0.5px] bg-gray-400 my-2 w-full"></div>
          <h1 className="event-title">Tickets</h1>
          <div>
            <TicketCard />
            <TicketCard />
            <TicketCard />
            <div className="h-[0.5px] bg-gray-400 my-2 w-full"></div>
          </div>
          <h1 className="event-title">Frequently Asked Questions</h1>
          <div className="marathon-detail-fac text-black">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                {" "}
                When does registration close?
              </AccordionTrigger>
              <AccordionContent>
                Registration closes on [insert date]. Early registration is
                recommended as spots are limited.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarathonDetail;
