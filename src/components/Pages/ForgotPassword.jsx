import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

import Footer from "../Footer/Footer";
import PageNav from "./PageNav";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Auth/firebase";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Check Email!");
      navigate("/");
    } catch (error) {
      toast.error("couldn't send mail");
    }
  };

  return (
    <main className="bg-primary">
      <div className="border-b-2 border-white">
        <PageNav />
      </div>

      <div className="relative px-10 py-10 lg:w-[700px] h-[420px]  bg-white rounded-xl w-[100%] mt-[50px] lg:mx-[23%]">
        <Link to="/">
          <IoClose className="text-5xl absolute right-4 top-4" />
        </Link>
        <h1 className="font-Montserrat text-5xl font-bold text-center mt-10 mb-5">
          CF
        </h1>
        <h2 className="font-Montserrat text-[24px] font-bold text-center">
          Enter your details
        </h2>
        <form
          action="#"
          className="mt-[30px]"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="mb-10">
            <label className="text-[12px] font-Montserrat font-bold">
              YOUR PHONE/EMAIL
            </label>
            <input
              type="email"
              placeholder="name@email.com"
              className="w-[100%] px-3 py-2 outline-none shadow-sm mt-[5px] border-b-2 border-black rounded-b-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="w-[150px] h-[59px] mx-auto mb-5 mt-5">
            <button
              type="submit"
              className="bg-black text-white rounded-lg w-[150px] h-[59px] mx-auto cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </main>
  );
};

export default ForgotPassword;
