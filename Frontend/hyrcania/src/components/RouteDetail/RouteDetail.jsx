import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { ChevronRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const RouteDetail = () => {
  return (
    <div className="flex flex-col w-full space-y-6 p-6" data-oid="my7aexr">
      {/* Header Section */}
      <div
        className="flex justify-between items-center w-full"
        data-oid="5pin3ge"
      >
        <h1
          className="text-4xl font-bold text-gray-900"
          data-oid="c9zsp3x"
        ></h1>
        <Button
          className="flex items-center rounded-full gap-2"
          data-oid="6rcci4c"
        >
          Next
          <ChevronRight data-oid="82h1ak9" />
        </Button>
      </div>

      {/* Route Form Section */}
      <div
        className="w-full bg-transparent border-2 rounded-lg border-gray-300"
        data-oid="j04e6x2"
      >
        {/* Banner Image Placeholder */}
        <div
          className="bg-gray-300 w-full h-[200px] rounded-t-lg"
          data-oid="pkehm:6"
        ></div>
        <div className="flex flex-col mx-10 my-10" data-oid="xpwi-p5">
          <h1 className="header text-2xl" data-oid="olosuer">
            Routes
          </h1>
          <h3 className="description " data-oid="ityud.5">
            Select the race category for your event.
          </h3>
        </div>
        <div
          className="mx-10 my-4 grid grid-cols-2 gap-x-10 gap-y-6 items-start"
          data-oid="fb6k3lp"
        >
          {/* Starting Day */}
          <div className="flex flex-col" data-oid="5puhann">
            <Label
              className=" form-label text-gray-800 font-bold"
              data-oid="1o8sbm2"
            >
              Starting Day
            </Label>
          </div>
          <Input
            type="date"
            className="w-[300px] bg-gray-100 border border-gray-300 rounded-md p-2"
            data-oid="pe6k_4m"
          />

          {/* Ending Day */}
          <div className="flex flex-col" data-oid="kju-v2y">
            <Label
              className="form-label text-gray-800 font-bold"
              data-oid="3suyged"
            >
              Ending Day
            </Label>
          </div>
          <Input
            type="date"
            className="w-[300px] bg-gray-100 border border-gray-300 rounded-md p-2"
            data-oid="oeczdo8"
          />
        </div>
        <div className="mx-10 my-6 space-x-2" content-center data-oid=".m_ba7_">
          <Checkbox id="terms2" disabled data-oid="661a2r8" />
          <label className="description" data-oid="wna7cf3">
            Start and end at the same location (looped course)
          </label>
        </div>
      </div>
    </div>
  );
};
export default RouteDetail;
