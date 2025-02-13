import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Textarea } from "../ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area"; // Ensure correct import

const EventDetail = () => {
  return (
    <div className="flex flex-col w-full space-y-6 p-6" data-oid="mivgrvs">
      {/* Header Section */}
      <div
        className="flex justify-between items-center w-full"
        data-oid="fxctuee"
      >
        <h1 className="text-4xl font-bold text-gray-900" data-oid="pd_8run">
          Event Detail
        </h1>
        <Button
          className="flex items-center rounded-full gap-2"
          data-oid="76u5h5z"
        >
          Next
          <ChevronRight data-oid="u3e8ws4" />
        </Button>
      </div>

      {/* Event Form Section */}
      <div
        className="h-[600px] w-full bg-transparent border-2 rounded-lg border-gray-300"
        data-oid="u21v:ri"
      >
        {/* Banner Image Placeholder */}
        <div
          className="bg-gray-300 w-full h-[200px] rounded-t-lg"
          data-oid="zek57jd"
        ></div>

        {/* Scrollable Content */}
        <ScrollArea className="h-[400px] " data-oid="1rlrsbt">
          <div
            className="mx-10 my-4 grid grid-cols-2 gap-x-10 gap-y-6 items-start"
            data-oid="x99p7.:"
          >
            {/* Event Name */}
            <div className="flex flex-col" data-oid="vq4xtta">
              <Label className="text-gray-800 font-bold" data-oid="i2k0kcg">
                Event Name
              </Label>
              <Label className="text-xs text-gray-500" data-oid="lwmypkk">
                Enter your event name
              </Label>
            </div>
            <Input
              className="w-[300px] bg-gray-100 border border-gray-300 rounded-md p-2"
              placeholder="Event Name"
              data-oid="c5nzs4d"
            />

            {/* Separator */}
            <div className="col-span-2" data-oid="st2k8ra">
              <Separator data-oid="mcbtq4m" />
            </div>

            {/* Description */}
            <div className="flex flex-col" data-oid="m1i3728">
              <Label className="text-gray-800 font-bold" data-oid="y7_5vae">
                Description
              </Label>
              <Label className="text-xs text-gray-500" data-oid="wki0:4s">
                Provide a brief description of your event.
              </Label>
            </div>
            <Textarea
              className="w-[300px] h-[100px] bg-gray-100 border border-gray-300 rounded-md p-2"
              placeholder="Event Information."
              data-oid="ps-_iro"
            />

            {/* Separator */}
            <div className="col-span-2" data-oid="pzf6bvg">
              <Separator data-oid="fzpa1gb" />
            </div>
          </div>

          {/* Schedule Section */}
          <h2
            className="mx-10 my-4 text-xl font-bold text-gray-900"
            data-oid="fyu-i06"
          >
            Schedule
          </h2>
          <div
            className="mx-10 my-4 grid grid-cols-2 gap-x-10 gap-y-6 items-start"
            data-oid="nn4kfvm"
          >
            {/* Location */}
            <div className="flex flex-col" data-oid="v1jtebo">
              <Label className="text-gray-800 font-bold" data-oid="lhnp3g7">
                Location
              </Label>
              <Label className="text-xs text-gray-500" data-oid="5:l042g">
                Enter the location of your event.
              </Label>
            </div>
            <Input
              className="w-[300px] bg-gray-100 border border-gray-300 rounded-md p-2"
              placeholder="Location"
              data-oid=".jxexn0"
            />

            {/* Starting Day */}
            <div className="flex flex-col" data-oid="b92x9e:">
              <Label className="text-gray-800 font-bold" data-oid="vqeyk_x">
                Starting Day
              </Label>
            </div>
            <Input
              type="date"
              className="w-[300px] bg-gray-100 border border-gray-300 rounded-md p-2"
              data-oid="0a.iuo:"
            />

            {/* Ending Day */}
            <div className="flex flex-col" data-oid="j-k_vx0">
              <Label className="text-gray-800 font-bold" data-oid="gbb578n">
                Ending Day
              </Label>
            </div>
            <Input
              type="date"
              className="w-[300px] bg-gray-100 border border-gray-300 rounded-md p-2"
              data-oid="jxr1x3l"
            />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default EventDetail;
