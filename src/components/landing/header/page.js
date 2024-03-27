import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "Services" },
    { id: 3, text: "Blog" },
    { id: 4, text: "Contact" },
    { id: 5, text: "About" },
  ];

  return (
    <div className=" flex justify-between items-center h-16 px-8  mx-auto md:px-8">
      <h1 className="w-full text-2xl font-bold">THE FINSERVE</h1>

      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:text-blue-700 rounded-xl m-2 cursor-pointer duration-300"
          >
            {item.text}
          </li>
        ))}
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#939693] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        <h1 className="w-full text-2xl font-bold m-4">THE FINSERVE</h1>

        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
