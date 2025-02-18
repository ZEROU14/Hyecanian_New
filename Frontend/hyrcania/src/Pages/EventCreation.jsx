import EventCreationIcon from "@/assets/EventCreationIcon";
import { Button } from "@/components/ui/button";
import MarathonCategory from "@/components/MarathonCategories/MarathonCategories";
import EventDetail from "@/components/EventCreation/EventDetail";
import RouteDetail from "@/components/RouteDetail/RouteDetail";
import TicketForm from "@/components/TicketForm/TicketForm";

const EventCreation = () => {
  return (
    <div
      className="flex flex-row max-w-full h-full rounded-lg border"
      data-oid=".ieur2d"
    >
      {/* Left Sidebar */}
      <div
        className="basis-1/6 h-screen bg-gray-100 flex flex-col items-center  gap-4"
        data-oid="n02x-9d"
      >
        {/* Header */}
        <div className="flex items-center m-5 space-x-4" data-oid="ep.6jl4">
          <EventCreationIcon data-oid="rd1v8u1" />
          <h1
            style={{
              color: "#212121",
              fontStyle: "normal",
              fontWeight: "600",
              fontFamily: "'Noto Sans', sans-serif",
            }}
            className="text-2xl text-wrap leading-6"
            data-oid="rqd-n96"
          >
            Event Creation
          </h1>
        </div>
        <span
          style={{
            color: "#9F9F9F",
            fontStyle: "normal",
            fontWeight: "400",
            fontFamily: "'Noto Sans', sans-serif",
          }}
          className="text-xs text-gray-500 text-center p-2"
          data-oid=":26:f.p"
        >
          Fill out the form below with all the details to bring your event to
          life.
        </span>

        {/* Sidebar Buttons */}
        <div className="flex flex-col w-full items-center " data-oid="i:e22m5">
          <Button
            variant="outline"
            className="rounded-full px-6 py-2"
            data-oid="azlqcz0"
          >
            Event Detail
          </Button>
          <div
            className="bg-gray-400 h-[50px] w-[2px] rounded-full"
            data-oid="a93odxb"
          />

          <Button
            variant="outline"
            className="rounded-full px-6 py-2"
            data-oid="fdo4ze1"
          >
            Route detail
          </Button>
          <div
            className="bg-gray-400 h-[50px] w-[2px] rounded-full"
            data-oid="iwbrso1"
          />

          <Button
            variant="outline"
            className="rounded-full px-6 py-2"
            data-oid="lu2axn2"
          >
            Marathon Category
          </Button>
          <div
            className="bg-gray-400 h-[50px] w-[2px] rounded-full"
            data-oid="i8etj4h"
          />

          <Button
            variant="outline"
            className="rounded-full px-6 py-2"
            data-oid="p2x._f6"
          >
            Tickets
          </Button>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#d6d6d6",
        }}
        className="w-[1px] h-full rounded-full"
        data-oid="fxmofck"
      ></div>

      {/* Right Main Content */}
      <div
        className="basis-full bg-gray-100 flex h-screen text-gray-800"
        data-oid="zjn0tjv"
      >
        <TicketForm data-oid="f-_0j-7" />
      </div>
    </div>
  );
};

export default EventCreation;
