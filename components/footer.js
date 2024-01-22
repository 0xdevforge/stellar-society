import logo from "@/public/contra.svg";
import Image from "next/image";

import x from "@/public/x.svg";
import insta from "@/public/insta.svg";

const Footer = () => {
  return (
    <div className="flex items-center w-full justify-center z-10 text-[hsl(0,4%,77%)] ">
      <footer className="bg-[rgb(30,30,30)] flex flex-col text-center items-center justify-center space-y-6 py-12 w-full ">
        <Image src={logo} alt="logo" />
        <div className="flex gap-6  items-center">
          <div className="bg-[#3f3f3f] hover:bg-[#0c0c0c] transition-opacity duration-300 p-3 rounded-full">
            <Image src={insta} alt="insta" />
          </div>
          <div className="bg-[#3f3f3f] hover:bg-[#0c0c0c] transition-opacity duration-300 p-3 rounded-full">
            <Image src={x} alt="x" />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <span>© 2021 Contra.Work Inc All rights reserved.</span>
          <span className="">
            <span className="hover:text-white duration-300 transition-opacity">
              Terms & Conditions{" "}
            </span>{" "}
            |
            <span className="hover:text-white duration-300 transition-opacity">
              {" "}
              Privacy Policy
            </span>{" "}
            |{" "}
            <span className="hover:text-white duration-300 transition-opacity">
              Cookie Policy
            </span>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
