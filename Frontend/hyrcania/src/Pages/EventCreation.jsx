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
      data-oid="ky.d2jv"
    >
      {/* Left Sidebar */}
      <div
        className="basis-1/6 h-screen bg-gray-100 flex flex-col items-center  gap-4"
        data-oid="o9ro1hi"
      >
        {/* Header */}
        <div className="flex items-center m-5 space-x-4" data-oid="9zbv81q">
          <EventCreationIcon data-oid="m977g3a" />
          <h1
            style={{
              color: "#212121",
              fontStyle: "normal",
              fontWeight: "600",
              fontFamily: "'Noto Sans', sans-serif",
            }}
            className="text-2xl text-wrap leading-6"
            data-oid="qsppg.8"
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
          data-oid="1u5t70h"
        >
          Fill out the form below with all the details to bring your event to
          life.
        </span>

        {/* Sidebar Buttons */}
        <div className="flex flex-col w-full items-center " data-oid="qhlt:4b">
          <Button
            variant="outline"
            className="rounded-full px-6 py-2"
            data-oid="y-4bo_f"
          >
            Event Detail
          </Button>
          <div
            className="bg-gray-400 h-[50px] w-[2px] rounded-full"
            data-oid="_2:4yw0"
          />

          <Button
            variant="outline"
            className="rounded-full px-6 py-2"
            data-oid="g3vc::1"
          >
            Route detail
          </Button>
          <div
            className="bg-gray-400 h-[50px] w-[2px] rounded-full"
            data-oid="c7my6lu"
          />

          <Button
            variant="outline"
            className="rounded-full px-6 py-2"
            data-oid="0_k9v4t"
          >
            Marathon Category
          </Button>
          <div
            className="bg-gray-400 h-[50px] w-[2px] rounded-full"
            data-oid="gjc.4nm"
          />

          <Button
            variant="outline"
            className="rounded-full px-6 py-2"
            data-oid="m3o2410"
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
        data-oid="3r:ee:2"
      ></div>

      {/* Right Main Content */}
      <div
        className="basis-full bg-gray-100 flex h-screen text-gray-800"
        data-oid="u11mjhq"
      >
        <TicketForm data-oid="6_0ks90" />
      </div>
    </div>
  );
};

export default EventCreation;
