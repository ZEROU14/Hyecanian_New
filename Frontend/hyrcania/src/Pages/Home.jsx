import EventCard from "@/components/EventCard/EventCard";
import DiscoveryIcon from "@/assets/DiscoveryIcon";
import Header from "@/components/Header";

const Home = () => {
    return (<div style={{
        background: '#F6F5F2'
    }}>
        <Header />

        <div className="flex flex-col items-center   ">
            <div className="flex flex-row self-start space-x-4 ml-20 pl-6 mt-6 ">
                <DiscoveryIcon />
                <h1 className=" text-left text-3xl text-black-800 " style={{ color: "#212121", fontStyle: "normal", fontWeight: "700", fontFamily: "'Noto Sans', sans-serif" }} >Discover Events</h1>

            </div>

            <div className="grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-3 ">
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
        </div>


    </div>)
}
export default Home;