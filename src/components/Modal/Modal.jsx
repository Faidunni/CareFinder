import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import LogOut from "../Pages/LogOut";
import { auth } from "../Auth/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import cat from "../../assets/images/cat.png";

function Modal() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await auth.signOut();
      navigate("/login");
    } catch (error) {
      toast.error("Guess you are stuck😂");
    }
  }

  return (
    <div className="App">
      <div className="group">
        <button
          className="flex bg-transparent border-2 rounded-full px-3 py-2 gap-2 group-hover:text-black border-navigate"
          onClick={openModal}
        >
          <RxHamburgerMenu className="text-black font-bold" />
          <RxAvatar className="text-black font-bold" />
        </button>
      </div>

      <LogOut isOpen={isModalOpen} onClose={closeModal} className="text-center">
        <div className="flex justify-center flex-col items-center">
          <img src={cat} alt="sad cat" className="w-[300px] mb-2" />

          <p className="mb-4 text-3xl">Don't leave please 😪</p>

          <button
            className="bg-gray-300 hover:bg-gray-400  text-BLACK rounded-lg w-[150px] h-[59px] mx-auto text-xl font-9"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      </LogOut>
    </div>
  );
}

export default Modal;
