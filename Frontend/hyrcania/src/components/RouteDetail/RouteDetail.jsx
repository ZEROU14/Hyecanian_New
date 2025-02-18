import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { ChevronRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const RouteDetail = () => {
  return (
    <div className="flex flex-col w-full space-y-6 p-6" data-oid="ef2erw5">
      {/* Header Section */}
      <div
        className="flex justify-between items-center w-full"
        data-oid="c.66ikv"
      >
        <h1
          className="text-4xl font-bold text-gray-900"
          data-oid="q3o1fqq"
        ></h1>
        <Button
          className="flex items-center rounded-full gap-2"
          data-oid="x:1vchs"
        >
          Next
          <ChevronRight data-oid="t96wxdh" />
        </Button>
      </div>

      {/* Route Form Section */}
      <div
        className="w-full bg-transparent border-2 rounded-lg border-gray-300"
        data-oid="t4n30bw"
      >
        {/* Banner Image Placeholder */}
        <div
          className="bg-gray-300 w-full h-[200px] rounded-t-lg"
          data-oid="dw-sqfz"
        ></div>
        <div className="flex flex-col mx-10 my-10" data-oid="r74g3jv">
          <h1 className="header text-2xl" data-oid="lny-2s4">
            Routes
          </h1>
          <h3 className="description " data-oid="8ikl8sj">
            Select the race category for your event.
          </h3>
        </div>
        <div
          className="mx-10 my-4 grid grid-cols-2 gap-x-10 gap-y-6 items-start"
          data-oid="1jymn88"
        >
          {/* Starting Day */}
          <div className="flex flex-col" data-oid=":xapy2f">
            <Label
              className=" form-label text-gray-800 font-bold"
              data-oid="rmjy91h"
            >
              Starting Day
            </Label>
          </div>
          <Input
            type="date"
            className="w-[300px] bg-gray-100 border border-gray-300 rounded-md p-2"
            data-oid="h9mif35"
          />

          {/* Ending Day */}
          <div className="flex flex-col" data-oid="sx88o02">
            <Label
              className="form-label text-gray-800 font-bold"
              data-oid="k6wxq3p"
            >
              Ending Day
            </Label>
          </div>
          <Input
            type="date"
            className="w-[300px] bg-gray-100 border border-gray-300 rounded-md p-2"
            data-oid="6f_2_bw"
          />
        </div>
        <div className="mx-10 my-6 space-x-2" content-center data-oid="6urm3x4">
          <Checkbox id="terms2" disabled data-oid="wz8ekx8" />
          <label className="description" data-oid="_33crrg">
            Start and end at the same location (looped course)
          </label>
        </div>
      </div>
    </div>
  );
};
export default RouteDetail;
