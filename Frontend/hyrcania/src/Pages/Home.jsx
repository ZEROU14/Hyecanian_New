import EventCard from "@/components/EventCard/EventCard";
import DiscoveryIcon from "@/assets/DiscoveryIcon";
import Header from "@/components/Header";

const Home = () => {
  return (
    <div
      style={{
        background: "#F6F5F2",
      }}
      data-oid=".q5roy:"
    >
      <Header data-oid="db3nd9." />

      <div className="flex flex-col items-center   " data-oid="_r9t7q5">
        <div
          className="flex flex-row self-start space-x-4 ml-20 pl-6 mt-6 "
          data-oid="tw1r:xy"
        >
          <DiscoveryIcon data-oid="vj35eca" />
          <h1
            className=" text-left text-3xl text-black-800 "
            style={{
              color: "#212121",
              fontStyle: "normal",
              fontWeight: "700",
              fontFamily: "'Noto Sans', sans-serif",
            }}
            data-oid=":kx81ea"
          >
            Discover Events
          </h1>
        </div>

        <div
          className="grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-3 "
          data-oid=":c37t_8"
        >
          <EventCard data-oid="tft.1qg" />
          <EventCard data-oid="3w9dr4x" />
          <EventCard data-oid="mwm77th" />
          <EventCard data-oid="td.x5qx" />
          <EventCard data-oid=":j-gayu" />
          <EventCard data-oid="d4d986t" />
        </div>
      </div>
    </div>
  );
};
export default Home;
