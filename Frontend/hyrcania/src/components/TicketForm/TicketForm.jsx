import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Textarea } from "../ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area"; // Ensure correct import

const EventDetail = () => {
  return (
    <div className="flex flex-col w-full space-y-6 p-6" data-oid="2ylmg:7">
      {/* Header Section */}
      <div
        className="flex justify-between items-center w-full"
        data-oid="sor70ij"
      >
        <h1 className="text-4xl font-bold text-gray-900" data-oid="ndysfdv">
          Ticket for event
        </h1>
        <Button
          className="flex items-center rounded-full gap-2"
          data-oid="2mxzu-z"
        >
          Next
          <ChevronRight data-oid="j790-w8" />
        </Button>
      </div>

      {/* Event Form Section */}
      <div
        className="h-[600px] w-full bg-transparent border-2 rounded-lg border-gray-300"
        data-oid="wh:tt--"
      >
        {/* Banner Image Placeholder */}
        <div
          className="bg-gray-300 w-full h-[200px] rounded-t-lg"
          data-oid="s7ehj3k"
        ></div>

        {/* Scrollable Content */}
        <ScrollArea className="h-[400px] " data-oid="00kuvuc">
          <div
            className="mx-10 my-4 grid grid-cols-2 gap-x-10 gap-y-6 items-start"
            data-oid="lpiwx8s"
          >
            {/* Event Name */}
            <div className="flex flex-col" data-oid="bfh-s08">
              <Label className="text-gray-800 font-bold" data-oid="oke2edx">
                Event Name
              </Label>
              <Label className="text-xs text-gray-500" data-oid="5ash.02">
                Enter your event name
              </Label>
            </div>
            <Input
              className="w-[300px] bg-gray-100 border border-gray-300 rounded-md p-2"
              placeholder="Event Name"
              data-oid="xs1-qph"
            />

            {/* Separator */}
            <div className="col-span-2" data-oid="zslchoj">
              <Separator data-oid="le4kffj" />
            </div>

            {/* Description */}
            <div className="flex flex-col" data-oid="hi6n5t2">
              <Label className="text-gray-800 font-bold" data-oid="rle-829">
                Description
              </Label>
              <Label className="text-xs text-gray-500" data-oid="5xruxn6">
                Provide a brief description of your event.
              </Label>
            </div>
            <Textarea
              className="w-[300px] h-[100px] bg-gray-100 border border-gray-300 rounded-md p-2"
              placeholder="Event Information."
              data-oid="tavgwyl"
            />

            {/* Separator */}
            <div className="col-span-2" data-oid="g8fidqa">
              <Separator data-oid=".t924go" />
            </div>
          </div>

          {/* Schedule Section */}
          <h2
            className="mx-10 my-4 text-xl font-bold text-gray-900"
            data-oid="t5wxcxg"
          >
            Schedule
          </h2>
          <div
            className="mx-10 my-4 grid grid-cols-2 gap-x-10 gap-y-6 items-start"
            data-oid="zeuje.f"
          >
            {/* Location */}
            <div className="flex flex-col" data-oid="73805oq">
              <Label className="text-gray-800 font-bold" data-oid="r:79fyu">
                Location
              </Label>
              <Label className="text-xs text-gray-500" data-oid="2ubq3.3">
                Enter the location of your event.
              </Label>
            </div>
            <Input
              className="w-[300px] bg-gray-100 border border-gray-300 rounded-md p-2"
              placeholder="Location"
              data-oid="-0yyq4y"
            />

            {/* Starting Day */}
            <div className="flex flex-col" data-oid="y192n84">
              <Label className="text-gray-800 font-bold" data-oid="4z7vchv">
                Starting Day
              </Label>
            </div>
            <Input
              type="date"
              className="w-[300px] bg-gray-100 border border-gray-300 rounded-md p-2"
              data-oid="pxc5req"
            />

            {/* Ending Day */}
            <div className="flex flex-col" data-oid="v.p.kpg">
              <Label className="text-gray-800 font-bold" data-oid="dm:qw70">
                Ending Day
              </Label>
            </div>
            <Input
              type="date"
              className="w-[300px] bg-gray-100 border border-gray-300 rounded-md p-2"
              data-oid="ahn:10g"
            />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default EventDetail;
