"use client";
import Link from "next/link";
import { useState } from "react";
import "./Aside.css"

export default function Aside() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Clientes", value: "/clientes", src: "Chart_fill" },
    { title: "Prestamos", value: "/prestamos", src: "Chat" },
    { title: "Pagos", value: "/pagos", src: "Chat" },
  ];
  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 h-screen contenido p-5  pt-8 relative duration-300`}
    >
      <div
        className={`absolute cursor-pointer flex justify-center font-semibold p-2 text-green -right-3 top-5 w-7 border-blue-700 bg-blue-200
           border-1 rounded-md text-blue-950  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      >
        <i className=" fa-solid fa-chevron-left"></i>
      </div>
      <div className="flex gap-x-4 items-center">
        {/* <img
          src="./src/assets/logo.png"
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
        /> */}
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Prestamos APP
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
              index === 0 && "bg-light-white"
            } `}
          >
            <Link
              href={Menu.value}
              className={`${!open && "hidden"} origin-left duration-200`}
            >
              {Menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
