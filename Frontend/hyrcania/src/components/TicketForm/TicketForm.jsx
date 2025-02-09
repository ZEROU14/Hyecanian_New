import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"

import { Separator } from "../ui/separator";
import { Textarea } from "../ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area"; // Ensure correct import

const TicketForm = () => {
    return (
        <div className="flex flex-col w-full space-y-6 p-6">
            {/* Header Section */}
            <div className="flex justify-between items-center w-full">
                <h1 className="text-4xl font-bold text-gray-900">Ticket for Event</h1>
                <Button className="flex items-center rounded-full gap-2">
                    Next
                    <ChevronRight />
                </Button>
            </div>

            <div className="flex flex-row bg-transparent border-2 rounded-lg border-gray-300">
                <div class="basis-1/2">
                    <div className="flex flex-col mx-10 my-10 gap-y-5">
                        <div className="flex flex-col">
                            <Label className="text-gray-800 font-bold">Race Name</Label>
                            <Label className="text-xs text-gray-500">Give your race name Ex. Half marathon competitive</Label>
                        </div>
                        <Input className="w-[300px] bg-gray-100 border border-gray-300 rounded-md p-2" placeholder="race name" />
                        <div className="flex flex-col">
                            <Label className="text-gray-800 font-bold">Distance (in Km)</Label>
                            <Label className="text-xs text-gray-500">Enter the total distance of the race</Label>
                        </div>
                        <Input className="w-[300px] bg-gray-100 border border-gray-300 rounded-md p-2" placeholder="race name" />
                        <div className="flex flex-col">
                            <Label className="text-gray-800 font-bold">Distance (in Km)</Label>
                            <Label className="text-xs text-gray-500">Enter the total distance of the race</Label>
                        </div>
                        <div className="flex flex-row items-center gap-x-2">
                            <InputOTP maxLength={3}>
                                <InputOTPGroup>
                                    <InputOTPSlot index={0} />
                                    <InputOTPSlot index={1} />
                                    <InputOTPSlot index={2} />
                                </InputOTPGroup>
                            </InputOTP>
                            <label className="description">km</label>
                        </div>
                        <div className="flex flex-col">
                            <Label className="text-gray-800 font-bold ">Local Starting Time</Label>
                            <Label className="text-xs text-gray-500">Specify the local start time for your race</Label>
                        </div>
                        <Input type="date" className="w-[300px] bg-gray-100 border border-gray-300 rounded-md p-2" placeholder="pick date" />
                        <div className="flex flex-col">
                            <Label className="text-gray-800 font-bold ">Price</Label>
                            <Label className="text-xs text-pretty
 text-gray-500">Specify the entry fee for the event, including the currency, so participants know the cost of registration.</Label>
                        </div>
                        <Input className="w-[300px] bg-gray-100 border border-gray-300 rounded-md p-2" placeholder="ticket price" />
                    </div>
                </div>
                <div
                    style={{
                        backgroundColor: "#d6d6d6",
                    }}
                    className="w-[1px] h-full rounded-full"
                ></div>
                <div class="basis-1/2 flex flex-col ">
                    <div style={{
                        backgroundColor: "#434343"
                    }} className="flex bg-gray-300 rounded-tr-sm w-full h-[40px] place-content-center"><label style={{
                        color: "#F9F9F9"
                    }} className="my-2 description">Your Tickets</label></div>
                </div>


            </div>
        </div>
    );
};

export default TicketForm;
