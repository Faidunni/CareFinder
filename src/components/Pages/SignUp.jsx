import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Auth/firebase";
import { IoClose, IoEyeOff, IoEye } from "react-icons/io5";
import { FaInstagramSquare, FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import PageNav from "./PageNav";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          firstname: fname,
          lastname: lname,
          email: user.email,
          password: password,
        });
      }
      navigate("/");
      toast.success("User Registered Successfully!!");
    } catch (error) {
      console.log(error.message);
      toast.error("User Already Exists");
    }
  };

  return (
    <main className="bg-primary">
      <div className="border-b-2 border-white">
        <PageNav />
      </div>
      <form
        onSubmit={handleRegister}
        className="relative sm:px-10 sm:py-10 lg:w-[700px] h-[750px] lg:bg-white md:bg-white rounded-xl w-[100%] sm:mt-[50px] lg:mx-[23%] mt-[10px] py-0 px-5"
      >
        <Link to="/">
          <IoClose className="text-5xl absolute right-4 top-0" />
        </Link>
        <h1 className="font-Rochester text-5xl font-bold text-center mt-10 mb-5">
          CF
        </h1>
        <h2 className="font-Montserrat text-[24px] font-bold text-center">
          Create Account
        </h2>
        <div className="mt-10">
          <label className="text-[12px] font-Montserrat font-bold">
            FIRST NAME
          </label>
          <input
            type="text"
            className="w-[100%] px-3 py-2 outline-none shadow-sm mt-[5px] border-b-2 border-black rounded-b-xl"
            placeholder="Enter First Name"
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </div>
        <div className="mb-[5px] mt-10">
          <label className="text-[12px] font-Montserrat font-bold">
            LAST NAME
          </label>
          <input
            type="text"
            className="w-[100%] px-3 py-2 outline-none shadow-sm mt-[5px] border-b-2 border-black rounded-b-xl"
            placeholder="Enter Last Name"
            onChange={(e) => setLname(e.target.value)}
            required
          />
        </div>
        <div className="mb-[5px] mt-10">
          <label className="font-Montserrat text-[12px] font-bold">
            EMAIL ADDRESS
          </label>
          <input
            type="email"
            className="w-[100%] px-3 py-2 outline-none shadow-sm mt-[5px] border-b-2 border-black rounded-b-xl"
            placeholder="name@email.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="relative mb-[5px] mt-10">
          <label className="font-Montserrat text-[12px] font-bold">
            PASSWORD
          </label>
          <input
            type={showPassword ? "text" : "password"}
            className="w-[100%] px-3 py-2 outline-none shadow-sm mt-[5px] border-b-2 border-black rounded-b-xl"
            placeholder="**************"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div
            className="absolute right-3 top-10 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <IoEyeOff size={24} /> : <IoEye size={24} />}
          </div>
        </div>
        <button
          type="submit"
          className="bg-black text-white rounded-lg flex mx-auto px-10 py-3 mt-5 font-bold hover:bg-transparent hover:border-2 hover:text-black"
        >
          Sign Up
        </button>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <button className="hover:text-navigation font-bold">
            <Link to="/login"> Login </Link>
          </button>
        </p>
        <p className="text-center mt-3">--- OR ---</p>
        <div className="flex gap-3 justify-center mt-[20px] text-4xl text-black ">
          <FaInstagramSquare />
          <FaFacebook />
          <FaTwitterSquare />
        </div>
      </form>
      <Footer />
    </main>
  );
}
export default SignUp;
