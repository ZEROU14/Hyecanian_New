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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const MarathonCategory = () => {
    return (
        <div className="flex flex-col w-full space-y-6 p-6">
            {/* Header Section */}
            <div className="flex justify-between items-center w-full">
                <h1 className="text-4xl font-bold text-gray-900">Marathon Category</h1>
                <Button className="flex items-center rounded-full gap-2">
                    Next
                    <ChevronRight />
                </Button>
            </div>

            {/* Event Form Section */}
            <div className="bg-transparent border-2 rounded-lg border-gray-300">


                {/* Scrollable Content */}

                <div className="mx-10 my-8 grid grid-cols-2 gap-x-10 gap-y-6 items-start">
                    {/* Event Name */}
                    <div className="flex flex-col">
                        <Label className="form-label text-gray-800 font-bold">Race category</Label>
                        <Label className="description text-xs text-gray-500">Select the race category to your event</Label>
                    </div>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Marathon" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="TrailRunning">Trail running</SelectItem>
                            <SelectItem value="RoadRace">Road race</SelectItem>
                            <SelectItem value="SkyRunning">Sky running</SelectItem>
                        </SelectContent>
                    </Select>


                    {/* Description */}
                    <div className="flex flex-col">
                        <Label className="form-label text-gray-800 font-bold">Sub Category</Label>
                        <Label className="description text-xs text-gray-500">Select the sub category</Label>
                    </div>

                    <ToggleGroup type="multiple" variant="outline" className="justify-self-start grid grid-cols-3 gap-2">
                        <ToggleGroupItem value="a" className="rounded-full toggle-option">5k</ToggleGroupItem>
                        <ToggleGroupItem value="b" className="rounded-full toggle-option">10k</ToggleGroupItem>
                        <ToggleGroupItem value="c" className="rounded-full toggle-option">Ultra distance</ToggleGroupItem>
                        <ToggleGroupItem value="a" className="rounded-full toggle-option px-6">Full Marathon</ToggleGroupItem>
                        <ToggleGroupItem value="a" className="rounded-full toggle-option px-6">Half Marathon</ToggleGroupItem>
                    </ToggleGroup>

                </div>
            </div>
        </div>
    );
};

export default MarathonCategory;
