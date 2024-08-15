import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { auth, db } from "../Auth/firebase";
import { doc, getDoc } from "firebase/firestore";
import Modal from "../Modal/Modal";

const Menu = [
  { id: 1, name: "Resources", link: "/#" },
  { id: 2, name: "Contact Us", link: "/#contact" },
  { id: 3, name: "About Us", link: "/#about" },
];

const NavBar = () => {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        }
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <nav className="flex justify-between items-center bg-primary py-5 px-10 font-Lato relative w-[100%]">
      <Link to="/">
        <h1 className="font-Rochester text-3xl sm:text-3xl flex gap-3 font-9">
          CF
        </h1>
      </Link>
      {/* Menu Items */}
      <div className="flex gap-6">
        <ul className="hidden sm:flex items-center text-navigation gap-6">
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
        </ul>
        <div className="relative group">
          {userDetails ? (
            <Modal />
          ) : (
            <NavLink to="/signup">
              <button className="font-7 font-Lato text-16px leading-24px bg-black text-secondary px-8 py-3 rounded-full">
                Login/Sign Up
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
