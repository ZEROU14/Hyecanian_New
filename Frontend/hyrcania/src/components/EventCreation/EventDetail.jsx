import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Textarea } from "../ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area"; // Ensure correct import

const EventDetail = () => {
  return (
    <div className="flex flex-col w-full space-y-6 p-6" data-oid="fj7ic_k">
      {/* Header Section */}
      <div
        className="flex justify-between items-center w-full"
        data-oid="zulapkm"
      >
        <h1 className="text-4xl font-bold text-gray-900" data-oid="oilmsbw">
          Event Detail
        </h1>
        <Button
          className="flex items-center rounded-full gap-2"
          data-oid="6yvcsjx"
        >
          Next
          <ChevronRight data-oid="g2po0yg" />
        </Button>
      </div>

      {/* Event Form Section */}
      <div
        className="h-[600px] w-full bg-transparent border-2 rounded-lg border-gray-300"
        data-oid="lh_36di"
      >
        {/* Banner Image Placeholder */}
        <div
          className="bg-gray-300 w-full h-[200px] rounded-t-lg"
          data-oid="6yvg9cm"
        ></div>

        {/* Scrollable Content */}
        <ScrollArea className="h-[400px] " data-oid="_-4384u">
          <div
            className="mx-10 my-4 grid grid-cols-2 gap-x-10 gap-y-6 items-start"
            data-oid="4poqz8l"
          >
            {/* Event Name */}
            <div className="flex flex-col" data-oid="d4mgpf4">
              <Label className="text-gray-800 font-bold" data-oid="77cikpd">
                Event Name
              </Label>
              <Label className="text-xs text-gray-500" data-oid="xggk4n1">
                Enter your event name
              </Label>
            </div>
            <Input
              className="w-[300px] bg-gray-100 border border-gray-300 rounded-md p-2"
              placeholder="Event Name"
              data-oid="pe3d8sd"
            />

            {/* Separator */}
            <div className="col-span-2" data-oid="ahnuxgt">
              <Separator data-oid="fyuizex" />
            </div>

            {/* Description */}
            <div className="flex flex-col" data-oid="wyexr7d">
              <Label className="text-gray-800 font-bold" data-oid="_8wyh1k">
                Description
              </Label>
              <Label className="text-xs text-gray-500" data-oid="br9entp">
                Provide a brief description of your event.
              </Label>
            </div>
            <Textarea
              className="w-[300px] h-[100px] bg-gray-100 border border-gray-300 rounded-md p-2"
              placeholder="Event Information."
              data-oid="8sukytl"
            />

            {/* Separator */}
            <div className="col-span-2" data-oid="8epzl2p">
              <Separator data-oid="tol.14:" />
            </div>
          </div>

          {/* Schedule Section */}
          <h2
            className="mx-10 my-4 text-xl font-bold text-gray-900"
            data-oid="s5ur50d"
          >
            Schedule
          </h2>
          <div
            className="mx-10 my-4 grid grid-cols-2 gap-x-10 gap-y-6 items-start"
            data-oid="lhbprp."
          >
            {/* Location */}
            <div className="flex flex-col" data-oid="9xz.lmp">
              <Label className="text-gray-800 font-bold" data-oid="73swxl6">
                Location
              </Label>
              <Label className="text-xs text-gray-500" data-oid="5dh.g5.">
                Enter the location of your event.
              </Label>
            </div>
            <Input
              className="w-[300px] bg-gray-100 border border-gray-300 rounded-md p-2"
              placeholder="Location"
              data-oid="z3knhd_"
            />

            {/* Starting Day */}
            <div className="flex flex-col" data-oid="-oj1-ju">
              <Label className="text-gray-800 font-bold" data-oid="03fnuxs">
                Starting Day
              </Label>
            </div>
            <Input
              type="date"
              className="w-[300px] bg-gray-100 border border-gray-300 rounded-md p-2"
              data-oid="lzoc7ao"
            />

            {/* Ending Day */}
            <div className="flex flex-col" data-oid="7m-t7el">
              <Label className="text-gray-800 font-bold" data-oid="far41a8">
                Ending Day
              </Label>
            </div>
            <Input
              type="date"
              className="w-[300px] bg-gray-100 border border-gray-300 rounded-md p-2"
              data-oid="947_.e3"
            />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default EventDetail;
