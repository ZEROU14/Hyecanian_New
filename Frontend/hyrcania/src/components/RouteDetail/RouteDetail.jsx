import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { ChevronRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const RouteDetail = () => {
  return (
    <div className="flex flex-col w-full space-y-6 p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center w-full">
        <h1 className="text-4xl font-bold text-gray-900"></h1>
        <Button className="flex items-center rounded-full gap-2">
          Next
          <ChevronRight />
        </Button>
      </div>

      {/* Route Form Section */}
      <div className="w-full bg-transparent border-2 rounded-lg border-gray-300">
        {/* Banner Image Placeholder */}
        <div className="bg-gray-300 w-full h-[200px] rounded-t-lg"></div>
        <div className="flex flex-col mx-10 my-10">
          <h1 className="header text-2xl">Routes</h1>
          <h3 className="description ">Select the race category for your event.</h3>
        </div>
        <div className="mx-10 my-4 grid grid-cols-2 gap-x-10 gap-y-6 items-start">          
          {/* Starting Day */}
          <div className="flex flex-col">
            <Label className=" form-label text-gray-800 font-bold">Starting Day</Label>
          </div>
          <Input
            type="date"
            className="w-[300px] bg-gray-100 border border-gray-300 rounded-md p-2"
          />

          {/* Ending Day */}
          <div className="flex flex-col">
            <Label className="form-label text-gray-800 font-bold">Ending Day</Label>
          </div>
          <Input
            type="date"
            className="w-[300px] bg-gray-100 border border-gray-300 rounded-md p-2"
          />

        </div>
        <div className="mx-10 my-6 space-x-2" content-center>
          <Checkbox id="terms2" disabled />
          <label className="description" >Start and end at the same location (looped course)</label>
        </div>

      </div>

    </div>
  );
};
export default RouteDetail;
