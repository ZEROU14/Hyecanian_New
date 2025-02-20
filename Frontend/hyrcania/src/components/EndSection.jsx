import Discord from "@/assets/Discord";
import Instagram from "@/assets/Instagram";
import Linkdin from "@/assets/Linkdin";
import Telegram from "@/assets/Telegram";

const EndSection = () => {
  return (
    <div className="footer flex flex-row space-x-20 p-5">
      <div className="flex flex-col">
        <div className="space-y-3">
          <h1 className="nav-header">Hyrcania</h1>
          <div className="flex flex-row items-center gap-x-3">
            <Telegram className="" />
            <Discord className="" />
            <Instagram className="" />
            <Linkdin className="" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-x-6">
          <h1 className="footer-text">About us</h1>
          <h1 className="footer-text">Term of use</h1>
          <h1 className="footer-text">Contact Us</h1>
          <h1 className="footer-text">Become a Sponsor</h1>
          <h1 className="footer-text">Charity & Donations</h1>
          <h1 className="footer-text">Help Center / FAQs</h1>
        </div>
    </div>
  );
};
export default EndSection;
