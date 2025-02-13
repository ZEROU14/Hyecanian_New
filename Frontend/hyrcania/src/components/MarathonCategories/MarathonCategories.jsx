import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Ensure correct import
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const MarathonCategory = () => {
  return (
    <div className="flex flex-col w-full space-y-6 p-6" data-oid="xrpr4do">
      {/* Header Section */}
      <div
        className="flex justify-between items-center w-full"
        data-oid="ls-6ys:"
      >
        <h1 className="text-4xl font-bold text-gray-900" data-oid="qdc87wf">
          Marathon Category
        </h1>
        <Button
          className="flex items-center rounded-full gap-2"
          data-oid="k4a8y5e"
        >
          Next
          <ChevronRight data-oid="r:brk-c" />
        </Button>
      </div>

      {/* Event Form Section */}
      <div
        className="bg-transparent border-2 rounded-lg border-gray-300"
        data-oid="1tw4_qi"
      >
        {/* Scrollable Content */}

        <div
          className="mx-10 my-8 grid grid-cols-2 gap-x-10 gap-y-6 items-start"
          data-oid="pu8r_46"
        >
          {/* Event Name */}
          <div className="flex flex-col" data-oid="771h527">
            <Label
              className="form-label text-gray-800 font-bold"
              data-oid="akepqm5"
            >
              Race category
            </Label>
            <Label
              className="description text-xs text-gray-500"
              data-oid="o_.mv58"
            >
              Select the race category to your event
            </Label>
          </div>
          <Select data-oid="bc92ped">
            <SelectTrigger className="w-[180px]" data-oid="olpa3gv">
              <SelectValue placeholder="Marathon" data-oid="02poo7i" />
            </SelectTrigger>
            <SelectContent data-oid=":2zjlhw">
              <SelectItem value="TrailRunning" data-oid="m4r14ae">
                Trail running
              </SelectItem>
              <SelectItem value="RoadRace" data-oid="q:dsow7">
                Road race
              </SelectItem>
              <SelectItem value="SkyRunning" data-oid="899ebiw">
                Sky running
              </SelectItem>
            </SelectContent>
          </Select>

          {/* Description */}
          <div className="flex flex-col" data-oid="mtrw-bd">
            <Label
              className="form-label text-gray-800 font-bold"
              data-oid="nm5rcv:"
            >
              Sub Category
            </Label>
            <Label
              className="description text-xs text-gray-500"
              data-oid="piq5ix0"
            >
              Select the sub category
            </Label>
          </div>

          <ToggleGroup
            type="multiple"
            variant="outline"
            className="justify-self-start grid grid-cols-3 gap-2"
            data-oid="t9r4xg1"
          >
            <ToggleGroupItem
              value="a"
              className="rounded-full toggle-option"
              data-oid="2bkmlv4"
            >
              5k
            </ToggleGroupItem>
            <ToggleGroupItem
              value="b"
              className="rounded-full toggle-option"
              data-oid="ny.m8tg"
            >
              10k
            </ToggleGroupItem>
            <ToggleGroupItem
              value="c"
              className="rounded-full toggle-option"
              data-oid="1mg95kp"
            >
              Ultra distance
            </ToggleGroupItem>
            <ToggleGroupItem
              value="a"
              className="rounded-full toggle-option px-6"
              data-oid="g95wgva"
            >
              Full Marathon
            </ToggleGroupItem>
            <ToggleGroupItem
              value="a"
              className="rounded-full toggle-option px-6"
              data-oid="8diaf0q"
            >
              Half Marathon
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  );
};

export default MarathonCategory;
