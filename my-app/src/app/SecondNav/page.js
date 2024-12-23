'use client'
import React, { useState } from 'react';
import { IoIosMenu, IoIosClose } from 'react-icons/io';

export default function SecondNavbar(toggleMenu) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

 toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveSubMenu(null); 
  };

  const openSubMenu = (index) => {
    setActiveSubMenu(index);
  };

  const closeSubMenu = () => {
    setActiveSubMenu(null);
  };

  const subMenuItems = {
    1: [
      { heading: 'Boats and accessories', items: ['Boats', 'Trolling motor'] },
      { heading: 'Safety and survival', items: ['Life jacket & PFD', 'Boat rescue system'] },
      { heading: 'Electronics', items: ['GPS', 'Subwoofers'] },
    ],
    2: [
      { heading: 'Sub Item 1', items: ['Detail 1', 'Detail 2'] },
      { heading: 'Sub Item 2', items: ['Detail 1', 'Detail 2'] },
      { heading: 'Sub Item 3', items: ['Detail 1', 'Detail 2'] },
    ],
    // Add more submenu items as needed
  };

  return (
    <header className="w-full relative">
      <nav className="bg-blue-400 h-16 flex items-center justify-between text-sm px-4">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isMenuOpen ? <IoIosClose /> : <IoIosMenu />}
          </button>
        </div>

        {/* Menu Section */}
        <div className="hidden md:flex flex-1">
          <ul className="flex gap-4">
            <li className="relative group">
              <a href="#" className="p-2">Marine</a>
              <ul className="absolute left-0 hidden group-hover:flex flex-col lg:flex-row bg-white text-black p-2 shadow-lg rounded-md">
                <li className="p-2">
                  <h3 className="font-bold">Boats and accessories</h3>
                  <ul>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Boats</a></li>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Trolling motor</a></li>
                  </ul>
                </li>
                <li className="p-2">
                  <h3 className="font-bold">Safety and survival</h3>
                  <ul>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Life jacket & PFD</a></li>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Boat rescue system</a></li>
                  </ul>
                </li>
                <li className="p-2">
                  <h3 className="font-bold">Electronics</h3>
                  <ul>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">GPS</a></li>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Subwoofers</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <a href="#" className="p-2">Item 2</a>
              <ul className="absolute left-0 hidden group-hover:flex flex-col lg:flex-row bg-white text-black p-2 shadow-lg rounded-md">
                <li className="p-2">
                  <h3 className="font-bold">Sub Item 1</h3>
                  <ul>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Detail 1</a></li>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Detail 2</a></li>
                  </ul>
                </li>
                <li className="p-2">
                  <h3 className="font-bold">Sub Item 2</h3>
                  <ul>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Detail 1</a></li>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Detail 2</a></li>
                  </ul>
                </li>
                <li className="p-2">
                  <h3 className="font-bold">Sub Item 3</h3>
                  <ul>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Detail 1</a></li>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Detail 2</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <a href="#" className="p-2">Item 3</a>
              <ul className="absolute left-0 hidden group-hover:flex flex-col lg:flex-row bg-white text-black p-2 shadow-lg rounded-md">
                <li className="p-2">
                  <h3 className="font-bold">Sub Item 1</h3>
                  <ul>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Detail 1</a></li>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Detail 2</a></li>
                  </ul>
                </li>
                <li className="p-2">
                  <h3 className="font-bold">Sub Item 2</h3>
                  <ul>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Detail 1</a></li>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Detail 2</a></li>
                  </ul>
                </li>
                <li className="p-2">
                  <h3 className="font-bold">Sub Item 3</h3>
                  <ul>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Detail 1</a></li>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Detail 2</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <a href="#" className="p-2">Item 4</a>
              <ul className="absolute left-0 hidden group-hover:flex flex-col lg:flex-row bg-white text-black p-2 shadow-lg rounded-md">
                <li className="p-2">
                  <h3 className="font-bold">Sub Item 1</h3>
                  <ul>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Detail 1</a></li>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Detail 2</a></li>
                  </ul>
                </li>
                <li className="p-2">
                  <h3 className="font-bold">Sub Item 2</h3>
                  <ul>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Detail 1</a></li>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Detail 2</a></li>
                  </ul>
                </li>
                <li className="p-2">
                  <h3 className="font-bold">Sub Item 3</h3>
                  <ul>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Detail 1</a></li>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Detail 2</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <a href="#" className="p-2">Item 5</a>
              <ul className="absolute left-0 hidden group-hover:flex flex-col lg:flex-row bg-white text-black p-2 shadow-lg rounded-md">
                <li className="p-2">
                  <h3 className="font-bold">Sub Item 1</h3>
                  <ul>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Detail 1</a></li>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Detail 2</a></li>
                  </ul>
                </li>
                <li className="p-2">
                  <h3 className="font-bold">Sub Item 2</h3>
                  <ul>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Detail 1</a></li>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Detail 2</a></li>
                  </ul>
                </li>
                <li className="p-2">
                  <h3 className="font-bold">Sub Item 3</h3>
                  <ul>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Detail 1</a></li>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Detail 2</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <a href="#" className="p-2">Item 6</a>
              <ul className="absolute left-0 hidden group-hover:flex flex-col lg:flex-row bg-white text-black p-2 shadow-lg rounded-md">
                <li className="p-2">
                  <h3 className="font-bold">Sub Item 1</h3>
                  <ul>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Detail 1</a></li>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Detail 2</a></li>
                  </ul>
                </li>
                <li className="p-2">
                  <h3 className="font-bold">Sub Item 2</h3>
                  <ul>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Detail 1</a></li>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Detail 2</a></li>
                  </ul>
                </li>
                <li className="p-2">
                  <h3 className="font-bold">Sub Item 3</h3>
                  <ul>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Detail 1</a></li>
                    <li><a href="#" className="block p-2 hover:bg-gray-200">Detail 2</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Clearance Section */}
        <div className="text-white h-16 flex justify-center items-center bg-blue-800 font-bold px-4 flex-shrink-0">
          <p className="uppercase">Clearance</p>
          <p className="text-xs ml-2">Save up to 50%</p>
        </div>
      </nav>

      {/* Mobile Menu Slider */}
      <div className={`fixed top-0 left-0 h-full bg-blue-400 z-20 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <button onClick={toggleMenu} className="text-white text-2xl p-4">
          <IoIosClose />
        </button>
        <ul className="flex flex-col gap-4 p-4">
          <li className="relative group">
            <button onClick={() => openSubMenu(1)} className="p-2 text-left w-full">Item 1</button>
          </li>
          <li className="relative group">
            <button onClick={() => openSubMenu(2)} className="p-2 text-left w-full">Item 2</button>
          </li>
          <li className="relative group">
            <button onClick={() => openSubMenu(3)} className="p-2 text-left w-full">Item 3</button>
          </li>
          <li className="relative group">
            <button onClick={() => openSubMenu(4)} className="p-2 text-left w-full">Item 4</button>
          </li>
          <li className="relative group">
            <button onClick={() => openSubMenu(5)} className="p-2 text-left w-full">Item 5</button>
          </li>
          <li className="relative group">
            <button onClick={() => openSubMenu(6)} className="p-2 text-left w-full">Item 6</button>
          </li>
        </ul>
      </div>

      {/* Submenu Slider */}
      {activeSubMenu && (
        <div className="fixed top-0 left-0 h-full bg-blue-500 z-30 transform translate-x-0 transition-transform duration-300 ease-in-out">
          <button onClick={closeSubMenu} className="text-white text-2xl p-4">
            <IoIosClose />
          </button>
          <ul className="flex flex-col gap-4 p-4">
            {subMenuItems[activeSubMenu].map((subMenu, index) => (
              <li key={index}>
                <h3 className="text-lg font-bold text-white">{subMenu.heading}</h3>
                <ul className="pl-4">
                  {subMenu.items.map((item, idx) => (
                    <li key={idx} className="text-white hover:bg-gray-200 p-2 rounded-md">{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}