import marathonImage from "@/components/images/marathon.jpeg";
import runnerImage from "@/components/images/runner.png"
import { MousePointer2 } from 'lucide-react';
import { Calendar1 } from 'lucide-react';
import { Award } from 'lucide-react';
const MarathonDetail = () => {
  return (
    <div className="relative bg-white min-h-screen px-6">
      
      
      <div className="absolute left-10 top-0 h-full w-[2px] bg-gray-400 z-50"></div>

      
      <header className="relative w-full flex  ">
        <img 
          src={marathonImage} 
          alt="Marathon" 
          className="w-full h-[20em] bg-cover opacity-20 "
        />
        <img 
          src={marathonImage} 
          alt="Marathon Focus" 
          className="absolute  h-[30em] w-[65em] rounded-lg shadow-lg border-2 ml-10 mt-12"
        />
      </header>

      
      <div className="relative flex ">
        
      </div>

      
      <div className="mt-[15em] ml-10">
        <h1 className="text-4xl font-bold uppercase tracking-wide text-gray-900">
          European Running Championships
        </h1>

        <p className="mt-4 text-base text-gray-600 w-2/3">
          On Saturday 12 and Sunday 13 April, Brussels and Leuven will be the stage for 
          the brand-new European Running Championships. For the first time, official 
          European Championships are open to all. You can run the race where elite runners 
          will compete for a medal. A unique way to experience a top sporting event as an insider. 
          In addition to the mythical 42.195 km, the half marathon and 10 km get their own 
          European Championships.
        </p>

        {/* Split Card with White & Black Backgrounds */}
        <div className="w-[30rem] h-[10rem] flex shadow-lg rounded-overflow-hidden border mt-6">
          
          
          <div className="w-1/3 bg-white flex flex-col justify-center items-start p-6 text-black">
          <div className="flex flex-row "><MousePointer2 />  Venue </div>
          <div className="flex flex-row mt-4"><Calendar1 />  Time </div>
          <div className="flex flex-row mt-4"><Award/>  Marathon</div>
          </div>

          <div className="w-2/3  flex flex-col justify-center items-start p-6 bg-[linear-gradient(101.61deg,#FFFFFF_-11.29%,#1D1D1D_97.15%)] text-gray-50">
           <div>Lueven , Belgium</div>
           <div className="mt-4">APR.12-15.2025  10:10.AM</div>
           <div className="mt-4">Trail running - 5k , 10k</div>
          </div>

        </div>

        <div class="h-1 bg-gray-400 my-6 w-full"></div>
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-4xl text-gray-900">Route Detail</h1>
          
        </div>

      </div>
    </div>
  );
};

export default MarathonDetail;
