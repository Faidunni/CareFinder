import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import LogOut from "../Pages/LogOut";
import { auth } from "../Auth/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AiOutlineFrown } from "react-icons/ai";

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
          className="flex bg-black border-2 rounded-full px-3 py-2 gap-2 group-hover:text-black"
          onClick={openModal}
        >
          <RxHamburgerMenu className="text-white font-bold" />
          <RxAvatar className="text-white font-bold" />
        </button>
      </div>

      <LogOut isOpen={isModalOpen} onClose={closeModal} className="text-center">
        <h2 className="text-lg font-bold mb-4">Modal Title</h2>

        <span>
          <p className="mb-4">
            Don't leave please <AiOutlineFrown className="text-5xl" />
          </p>
        </span>
        <button
          className="bg-black text-white rounded-lg w-[150px] h-[59px] mx-auto"
          onClick={handleLogout}
        >
          Logout
        </button>
      </LogOut>
    </div>
  );
}

export default Modal;
