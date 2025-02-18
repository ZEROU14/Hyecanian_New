import React from "react";
import ReactApexChart from "react-apexcharts";
import { Separator } from "@/components/ui/separator";

const Overview = () => {
  const barChartData = {
    series: [{ data: [400, 430, 448] }],
    options: {
      chart: { type: "bar", height: 100 }, // Adjust chart height if needed
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: "end",
          horizontal: true,
          distributed: true,
          barHeight: "50%", // Adjust bar height (Try values like '30%', '40px', etc.)
        },
      },
      colors: ["#F44336", "#E91E63", "#9C27B0"],
      dataLabels: { enabled: false },
      xaxis: { categories: ["5k", "10k", "Ultra"] },
    },
  };
  

  const lineChartData = {
    series: [{ name: "Desktops", data: [10, 41, 35, 51] }],
    options: {
      chart: { height: 200, type: "line", zoom: { enabled: false } },
      dataLabels: { enabled: false },
      stroke: { curve: "straight" },
      title: { text: "Product Trends by Month", align: "left" },
      grid: { row: { colors: ["#f3f3f3", "transparent"], opacity: 0.5 } },
      xaxis: { categories: ["1 week", "2 week", "3 week", "4 week"] },
    },
  };

  return (
    <div className="bg-gray-200 p-6">
      {/* Top Section: Metrics & Bar Chart */}
      <div className="flex flex-row gap-6">
        {/* Metric Cards */}
        <div className="flex flex-col gap-4">
          <div className="w-full h-full basis-1/2  bg-white flex items-center justify-center rounded-xl shadow-lg">
            <div className="flex flex-col text-center text-black">
              <h1 className="text-4xl font-bold ">123</h1>
              <h1 className="text-l">Total Participants</h1>
            </div>
          </div>

          <div className="w-full h-full basic-1/2 bg-white flex items-center justify-center rounded-xl shadow-lg p-5">
            <div className="flex flex-col text-center text-black">
              <h1 className="text-3xl font-bold text">1,20,000 INR</h1>
              <h1 className="text-l">Total Revenue</h1>
            </div>
          </div>
        </div>

        {/* Bar Chart */}
       <div className="bg-white rounded-xl p-2">
       <ReactApexChart
          options={barChartData.options}
          series={barChartData.series}
          type="bar"
          width={350}
          height={250}
        />
       </div>
      </div>

      <div className="w-full h-[1px] bg-gray-300 my-10">
      </div>

      {/* Line Charts Section */}
      <div className="grid grid-cols-3 gap-6">
        {[...Array(3)].map((_, index) => (
          <div className="bg-white rounded-xl p-2">
            <ReactApexChart
            key={index}
            options={lineChartData.options}
            series={lineChartData.series}
            type="line"
            width={400}
            height={300}
          />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
