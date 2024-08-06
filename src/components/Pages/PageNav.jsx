import React from "react";
import { RxAvatar } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Menu = [
  {
    id: 1,
    name: "Resouces",
    link: "/#",
  },
  {
    id: 2,
    name: "Contact Us",
    link: "/#contact",
  },
  {
    id: 3,
    name: "About Us",
    link: "/#about",
  },
];

const PageNav = () => {
  return (
    <nav className="flex justify-between items-center bg-primary py-5 px-10 font-Lato">
      <Link to="/">
        <h1 className="font-Rochester text-3xl sm:text-3xl flex gap-3 font-9">
          CF
        </h1>
      </Link>

      <div className="list">
        <ul className="sm:flex hidden items-center text-navigation gap-6">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="hover:text-black inline-block duration-200 font-Lato"
              >
                {data.name}
              </a>
            </li>
          ))}

          <div className="group">
            <button className="flex bg-black border-2 rounded-full px-3 py-2 gap-2 group-hover:text-black">
              <RxHamburgerMenu className="text-white font-bold" />
              <RxAvatar className="text-white font-bold" />
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default PageNav;
