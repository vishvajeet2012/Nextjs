import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import log from "../logo-main.png";
import { CiLocationOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import dubai from "../dubai.png";

export default function Navbar() {
  return (
    <header>
      <nav className="bg-blue-400 justify-evenly h-16 flex items-center text-sm px-4 md:px-8 lg:px-16">
       <div>
        <a
          className="border border-transparent p-1"
          href="/"
          aria-label="Homepage"
        >
          <Image src={log} alt="Company Logo" width={100} height={100} />
        </a></div>
        <div className="cursor-pointer text-xs sm:text-sm">
          <p>Location</p>
          <div className="flex font-bold items-center gap-1">
            <CiLocationOn /> <p>India</p>
          </div>
        </div>

        <div className="flex h-10 w-full max-w-lg mx-4">
          <select className="bg-[#E6E6E6] px-1 lg:px-2 rounded-r-none">
            <option>All</option>
          </select>
          <input
            type="text"
            className="w-full"
            placeholder="Search Amazon"
          />
          <div className="bg-orange-300 p-2 flex justify-center items-center">
            <IoIosSearch />
          </div>
        </div>

        <div className="bg-transparent p-1 font-bold flex items-center">
          <Image
            src={dubai}
            width={20}
            className="bg-transparent"
            height={10}
            alt="Dubai"
          />
          <select className="bg-transparent">
            <option>En</option>
            <option>Hindi</option>
          </select>
        </div>
        <div className="font-bold">
          <p>Hello, sign in</p>
          <select className="bg-transparent">
            <option>Accounts & Lists</option>
          </select>
        </div>
        <div className="text-xs  ">
          <p>Return</p>
          <p>& Orders</p>
        </div>

        <div className="flex items-center">
          <CiShoppingCart className="text-2xl" />
          <p className="text-sm">Cart</p>
        </div>
      </nav>
    </header>
  );
}