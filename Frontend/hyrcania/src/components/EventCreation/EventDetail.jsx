import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Textarea } from "../ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area"; // Ensure correct import

const EventDetail = () => {
    return (
        <div className="flex flex-col w-full space-y-6 p-6">
            {/* Header Section */}
            <div className="flex justify-between items-center w-full">
                <h1 className="text-4xl font-bold text-gray-900">Event Detail</h1>
                <Button className="flex items-center rounded-full gap-2">
                    Next
                    <ChevronRight />
                </Button>
            </div>

            {/* Event Form Section */}
            <div className="h-[600px] w-full bg-transparent border-2 rounded-lg border-gray-300">
                {/* Banner Image Placeholder */}
                <div className="bg-gray-300 w-full h-[200px] rounded-t-lg"></div>

                {/* Scrollable Content */}
                <ScrollArea className="h-[400px] ">
                    <div className="mx-10 my-4 grid grid-cols-2 gap-x-10 gap-y-6 items-start">
                        {/* Event Name */}
                        <div className="flex flex-col">
                            <Label className="text-gray-800 font-bold">Event Name</Label>
                            <Label className="text-xs text-gray-500">Enter your event name</Label>
                        </div>
                        <Input className="w-[300px] bg-gray-100 border border-gray-300 rounded-md p-2" placeholder="Event Name" />

                        {/* Separator */}
                        <div className="col-span-2">
                            <Separator />
                        </div>

                        {/* Description */}
                        <div className="flex flex-col">
                            <Label className="text-gray-800 font-bold">Description</Label>
                            <Label className="text-xs text-gray-500">Provide a brief description of your event.</Label>
                        </div>
                        <Textarea className="w-[300px] h-[100px] bg-gray-100 border border-gray-300 rounded-md p-2" placeholder="Event Information." />

                        {/* Separator */}
                        <div className="col-span-2">
                            <Separator />
                        </div>
                    </div>

                    {/* Schedule Section */}
                    <h2 className="mx-10 my-4 text-xl font-bold text-gray-900">Schedule</h2>
                    <div className="mx-10 my-4 grid grid-cols-2 gap-x-10 gap-y-6 items-start">
                        {/* Location */}
                        <div className="flex flex-col">
                            <Label className="text-gray-800 font-bold">Location</Label>
                            <Label className="text-xs text-gray-500">Enter the location of your event.</Label>
                        </div>
                        <Input className="w-[300px] bg-gray-100 border border-gray-300 rounded-md p-2" placeholder="Location" />

                        {/* Starting Day */}
                        <div className="flex flex-col">
                            <Label className="text-gray-800 font-bold">Starting Day</Label>
                        </div>
                        <Input type="date" className="w-[300px] bg-gray-100 border border-gray-300 rounded-md p-2" />

                        {/* Ending Day */}
                        <div className="flex flex-col">
                            <Label className="text-gray-800 font-bold">Ending Day</Label>
                        </div>
                        <Input type="date" className="w-[300px] bg-gray-100 border border-gray-300 rounded-md p-2" />
                    </div>
                </ScrollArea>
            </div>
        </div>
    );
};

export default EventDetail;
