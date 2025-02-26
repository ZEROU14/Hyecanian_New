import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar";
  import { Separator } from "./ui/separator";
  
  const Navbar = () => {
    return (
      <div className="nav-bar flex flex-row h-[50px] w-screen opacity-86 items-center px-7">
        <h1 className="nav-header">Hyrcania</h1>
  
        <Separator
          style={{ color: "#8D8D8D" }}
          orientation="vertical"
          className="mx-7 opacity-20"
        />
  
        <div className="flex flex-row gap-x-14">
          <h1 className="nav-bar-text">HOME</h1>
          <h1 className="nav-bar-text">CATEGORIES</h1>
          <a href="./dashboard"><h1 className="nav-bar-text">DASHBOARD</h1></a>
          <h1 className="nav-bar-text">ABOUT US</h1>
          <h1 className="nav-bar-text">CONTACT US</h1>
        </div>
  
        <Separator
          style={{ color: "#8D8D8D" }}
          orientation="vertical"
          className="mx-7 opacity-20"
        />
  
        {/* Avatar positioned at the right end */}
        <div className="ml-auto bg-neutral-700  p-1 rounded-full flex items-center">
          <Avatar className="w-[30px] h-[30px]">
            <AvatarImage src="https://github.com/sarvarsheikh.png" />
            <AvatarFallback>SS</AvatarFallback>
          </Avatar>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  