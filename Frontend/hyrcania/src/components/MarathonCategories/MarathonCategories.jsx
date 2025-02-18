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
    <div className="flex flex-col w-full space-y-6 p-6" data-oid="qutpysu">
      {/* Header Section */}
      <div
        className="flex justify-between items-center w-full"
        data-oid="hvfqf2e"
      >
        <h1 className="text-4xl font-bold text-gray-900" data-oid="4:-b5o5">
          Marathon Category
        </h1>
        <Button
          className="flex items-center rounded-full gap-2"
          data-oid="40mjtos"
        >
          Next
          <ChevronRight data-oid="4:0:c:9" />
        </Button>
      </div>

      {/* Event Form Section */}
      <div
        className="bg-transparent border-2 rounded-lg border-gray-300"
        data-oid="3u8c_4w"
      >
        {/* Scrollable Content */}

        <div
          className="mx-10 my-8 grid grid-cols-2 gap-x-10 gap-y-6 items-start"
          data-oid="ftuo.8i"
        >
          {/* Event Name */}
          <div className="flex flex-col" data-oid="9-i7na:">
            <Label
              className="form-label text-gray-800 font-bold"
              data-oid="5yr9bu2"
            >
              Race category
            </Label>
            <Label
              className="description text-xs text-gray-500"
              data-oid="uh_x6xy"
            >
              Select the race category to your event
            </Label>
          </div>
          <Select data-oid="omaolva">
            <SelectTrigger className="w-[180px]" data-oid=".llz86.">
              <SelectValue placeholder="Marathon" data-oid="0qnx2xz" />
            </SelectTrigger>
            <SelectContent data-oid="ensy_4v">
              <SelectItem value="TrailRunning" data-oid="fnczuu:">
                Trail running
              </SelectItem>
              <SelectItem value="RoadRace" data-oid="6wvm8:1">
                Road race
              </SelectItem>
              <SelectItem value="SkyRunning" data-oid="rrehn5m">
                Sky running
              </SelectItem>
            </SelectContent>
          </Select>

          {/* Description */}
          <div className="flex flex-col" data-oid="g8g-:ec">
            <Label
              className="form-label text-gray-800 font-bold"
              data-oid="k:1sij3"
            >
              Sub Category
            </Label>
            <Label
              className="description text-xs text-gray-500"
              data-oid="oojs_fx"
            >
              Select the sub category
            </Label>
          </div>

          <ToggleGroup
            type="multiple"
            variant="outline"
            className="justify-self-start grid grid-cols-3 gap-2"
            data-oid="1ymf2f3"
          >
            <ToggleGroupItem
              value="a"
              className="rounded-full toggle-option"
              data-oid="68qwotz"
            >
              5k
            </ToggleGroupItem>
            <ToggleGroupItem
              value="b"
              className="rounded-full toggle-option"
              data-oid="ve7i1i2"
            >
              10k
            </ToggleGroupItem>
            <ToggleGroupItem
              value="c"
              className="rounded-full toggle-option"
              data-oid="4z2k_aa"
            >
              Ultra distance
            </ToggleGroupItem>
            <ToggleGroupItem
              value="a"
              className="rounded-full toggle-option px-6"
              data-oid="1.9bqj3"
            >
              Full Marathon
            </ToggleGroupItem>
            <ToggleGroupItem
              value="a"
              className="rounded-full toggle-option px-6"
              data-oid="on20zi6"
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
