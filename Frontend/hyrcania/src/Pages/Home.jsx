import EventCard from "@/components/EventCard/EventCard";
import DiscoveryIcon from "@/assets/DiscoveryIcon";
import Header from "@/components/Header";

const Home = () => {
  return (
    <div
      style={{
        background: "#F6F5F2",
      }}
      data-oid="_444160"
    >
      <Header data-oid="kp0q3jr" />

      <div className="flex flex-col items-center   " data-oid="-hf6mfu">
        <div
          className="flex flex-row self-start space-x-4 ml-20 pl-6 mt-6 "
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
