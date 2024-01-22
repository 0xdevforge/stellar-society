import logo from "@/public/contra.svg";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex items-center w-full bg-[#131313] px-8 py-6 text-white font-semibold">
      <div className="flex justify-between w-full items-center">
        <div className="flex gap-8  items-center ">
          <Image src={logo} alt="logo" />
          <div className="flex gap-6">
            <Link
              href="/"
              className="hover:text-[#f2c94b] transition-opacity duration-300"
            >
              <span>How it works</span>
            </Link>
            <Link
              href="/"
              className="hover:text-[#f2c94b] transition-opacity duration-300"
            >
              <span>Mission</span>
            </Link>{" "}
            <Link
              href="/"
              className="hover:text-[#f2c94b] transition-opacity duration-300"
            >
              <span>FAQ</span>
            </Link>
          </div>
        </div>

        <div className=" flex gap-6 items-center">
            <Link href="/">
            <span className="hover:text-[#f2c94b] transition-opacity duration-300">
                Log In
            </span></Link>
            <button className="border-2 border-white hover:text-[#f2c94b] hover:border-[#f2c94b] transition-opacity duration-300 rounded-3xl py-2 px-4">
                Get Started
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
