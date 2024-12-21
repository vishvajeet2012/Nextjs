
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";

import log from "../logo-main.png";
import { CiLocationOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { IconContext } from "react-icons";
import dubai from "../dubai.png";
export default function Navbar() {
  return (
    <header>
      <nav className="bg-blue-400 justify-evenly h-16 flex items-center text-sm    ">
        <a
          className="border border-transparent p-1 "
          href="/"
          aria-label="Homepage"
        >
          <Image src={log} alt="Company Logo" width={100} height={100} />
        </a>
        <div className="cursor-pointer">
          <p> Location</p>
          <div className="flex font-bold items-center gap-1">
            <CiLocationOn /> <p>india</p>
          </div>
        </div>

        <div className="flex h-10">
          <select className="bg-[#E6E6E6] px-2 rounded-r-none">
            <option>All</option>
          </select>
          <input
            type="text"
            className="w-[150px] sm:w-[150px] md:-[200px] lg:w-[480px]"
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
            alt="dubai"
          />
          <select className="bg-transparent">
            <option>En</option>
            <option>hindi</option>
          </select>
        </div>
        <div className="font-bold">
          <p>Hello, sign in</p>
          <select className="bg-transparent">
            <option>Acounts & Lists</option>
          </select>
        </div>
        <div>
          <p>Retrun</p>
          <p>& order</p>
        </div>

        <div>
          <CiShoppingCart className="text-2xl" />
          <p>Cart</p> 
        </div>
      </nav>
    </header> ///check
  );
}
