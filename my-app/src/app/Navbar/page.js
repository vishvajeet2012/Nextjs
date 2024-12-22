import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import log from "../logo-main.png";
import { CiLocationOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import dubai from "../dubai.png";

export default function Navbar() {
  return (
    <header>
      {/* Navbar for larger screens */}
      <nav className="bg-blue-400 justify-evenly h-16 flex items-center text-sm hidden md:flex">
        <a
          className="border border-transparent p-1"
          href="/"
          aria-label="Homepage"
        >
          <Image src={log} alt="Company Logo" width={100} height={100} />
        </a>
        <div className="cursor-pointer">
          <p>Location</p>
          <div className="flex font-bold items-center gap-1">
            <CiLocationOn /> <p>India</p>
          </div>
        </div>

        <div className="flex h-10">
          <select className="bg-[#E6E6E6] px-2 rounded-r-none">
            <option>All</option>
          </select>
          <input
            type="text"
            className="w-[150px] sm:w-[150px] md:w-[200px] lg:w-[480px]"
            placeholder="Search Amazon"
          />
          <div className="bg-orange-300 p-2 flex justify-center items-center">
            <IoIosSearch />
          </div>
        </div>

        <div className="bg-transparent p-1 font-bold flex">
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
        <div>
          <p>Return</p>
          <p>& Orders</p>
        </div>

        <div>
          <CiShoppingCart className="text-2xl" />
          <p>Cart</p>
        </div>
      </nav>

      {/* Navbar for mobile screens */}
      <nav className="bg-blue-400 flex flex-col items-center text-sm md:hidden px-4 py-2">
        <div className="flex justify-between w-full items-center mb-2">
          <a
            className="border border-transparent p-1"
            href="/"
            aria-label="Homepage"
          >
            <Image src={log} alt="Company Logo" width={60} height={60} />
          </a>
          <div className="flex items-center">
            <CiShoppingCart className="text-2xl" />
            <p className="text-xs ml-1">Cart</p>
          </div>
        </div>

        <div className="flex w-full mb-2">
          <select className="bg-[#E6E6E6] px-2 rounded-l-md">
            <option>All</option>
          </select>
          <input
            type="text"
            className="w-full px-2"
            placeholder="Search Amazon"
          />
          <div className="bg-orange-300 p-2 flex justify-center items-center rounded-r-md">
            <IoIosSearch />
          </div>
        </div>

        <div className="flex justify-between w-full">
          <div className="flex items-center">
            <CiLocationOn className="text-lg" />
            <p className="text-xs ml-1">India</p>
          </div>
          <div className="flex items-center">
            <Image
              src={dubai}
              width={20}
              className="bg-transparent"
              height={10}
              alt="Dubai"
            />
            <select className="bg-transparent text-xs ml-1">
              <option>En</option>
              <option>Hindi</option>
            </select>
          </div>
          <div className="flex items-center text-xs">
            <p>Hello, sign in</p>
            <select className="bg-transparent ml-1">
              <option>Accounts & Lists</option>
            </select>
          </div>
          <div className="flex items-center text-xs">
            <p>Return</p>
            <p className="ml-1">& Orders</p>
          </div>
        </div>
      </nav>
    </header>
  );
}