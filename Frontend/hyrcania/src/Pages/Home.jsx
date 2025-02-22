import EventCard from "@/components/EventCard/EventCard";
import DiscoveryIcon from "@/assets/DiscoveryIcon";
import Runner from "@/components/images/headerBg.jpg";
const Home = () => {
  return (
    <div
      style={{
        background: "#F6F5F2",
      }}
      data-oid="_444160"
      className = "relative overflow-auto min-h-screen"
    >
     
     <div>
     <img src={Runner} alt="a man running" className="w-full h-full object-cover" />
     <div className="absolute inset-0 bg-gradient-to-l from-[#E6E2C3] via-[#88A47C] via-50% to-[#1C315E] opacity-50"></div>
     <div className="absolute top-96 left-1/3 text-white text-6xl font-bold z-10">Run Fast Run Free</div>
     </div>

      <div className="flex flex-col items-center   " data-oid="-hf6mfu">
        <div
          className="flex flex-row self-start space-x-4 ml-20 pl-6 mt-10 "
          data-oid="64oggzd"
        >
          <DiscoveryIcon data-oid="0ordo.3" />
          <h1
            className=" text-left text-3xl text-black-800 "
            style={{
              color: "#212121",
              fontStyle: "normal",
              fontWeight: "700",
              fontFamily: "'Noto Sans', sans-serif",
            }}
            data-oid="ws:.2-z"
          >
            Discover Events
          </h1>
        </div>

        <div
          className="grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-3 "
          data-oid="-_k11_."
        >
          <EventCard data-oid=".:_8mc:" />
          <EventCard data-oid="u.y2m0:" />
          <EventCard data-oid="hwl9:0b" />
          <EventCard data-oid="y.vdz87" />
          <EventCard data-oid="o4exsff" />
          <EventCard data-oid=":s4:v0u" />
        </div>
      </div>
    </div>
  );
};
export default Home;
