import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaInstagramSquare, FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";

import Footer from "../Footer/Footer";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Auth/firebase";
import { toast } from "react-toastify";
import PageNav from "./PageNav";

// const btn = document.getElementById('btn');

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error.message);
      toast.error("Invalid Credentials");
    }
  };
  return (
    <main className="bg-primary">
      <div className="border-b-2 border-white">
        <PageNav />{" "}
      </div>{" "}
      <form
        onSubmit={handleSubmit}
        className="relative px-10 py-10 lg:w-[700px] h-[650px]  bg-white rounded-xl w-[100%] mt-[50px] lg:mx-[23%]"
      >
        <Link to="/">
          <IoClose className="text-5xl absolute right-4 top-4" />
        </Link>
        <h1 className="font-Rochester text-5xl font-bold text-center mt-10 mb-5">
          CF{" "}
        </h1>{" "}
        <h2 className="font-Montserrat text-[24px] font-bold text-center">
          Enter Your Details{" "}
        </h2>{" "}
        <div className="mb-10">
          <label className="text-[12px] font-Montserrat font-bold">
            YOUR PHONE/EMAIL
          </label>
          <input
            type="email"
            placeholder="name@email.com"
            className="w-[100%] px-3 py-2 outline-none shadow-xl mt-[5px] border-b-2 border-black rounded-b-xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="">
          <label className="font-Montserrat text-[12px] font-bold">
            PASSWORD
          </label>
          <input
            type="password"
            placeholder="*****************"
            className="w-[100%] px-3 py-2 outline-none shadow-xl mt-[5px] border-b-2 border-black rounded-b-xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <small className="my-[10px]">
          Forgot Password?{" "}
          <Link to="/forgot" className="font-extrabold">
            Here
          </Link>{" "}
        </small>
        <div className="w-[150px] h-[59px] mx-auto mb-5 mt-5">
          <button
            type="submit"
            className="bg-black text-white rounded-lg w-[150px] h-[59px] mx-auto"
          >
            Login
          </button>
        </div>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <button className="text-navigation font-bold" id="btn">
            <Link to="/signup"> Sign Up</Link>
          </button>
        </p>
        <p className="text-center mt-2">OR</p>
        <div className="flex gap-3 justify-center mt-[20px]">
          <FaInstagramSquare className="text-4xl text-slate-800" />
          <FaFacebook className="text-4xl text-slate-800" />
          <FaTwitterSquare className="text-4xl text-slate-800" />
        </div>
      </form>
      <Footer />
    </main>
  );
};

export default Login;
