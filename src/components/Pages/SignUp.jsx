import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Auth/firebase";
import { IoClose } from "react-icons/io5";
import { FaInstagramSquare, FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import PageNav from "./PageNav";

// import { setDoc, doc } from "firebase/firestore";
// import { toast } from "react-toastify";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const navigate = useNavigate();

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
      navigate("/login");
      toast.success("User Registered Successfully!!");
    } catch (error) {
      console.log(error.message);
      toast.error("User Already Exist");
    }
  };

  return (
    <main className="bg-primary">
      <div className="border-b-2 border-white">
        <PageNav />
      </div>{" "}
      <form
        onSubmit={handleRegister}
        className="relative px-10 py-10 lg:w-[700px] h-[900px]  bg-white rounded-xl w-[100%] mt-[50px] lg:mx-[23%]"
      >
        <Link to="/">
          <IoClose className="text-5xl absolute right-4 top-4" />
        </Link>
        <h1 className="font-Rochester text-5xl font-bold text-center mt-10 mb-5">
          CF{" "}
        </h1>{" "}
        <h2 className="font-Montserrat text-[24px] font-bold text-center">
          Create Account{" "}
        </h2>{" "}
        <div className="mt-10">
          <label className="text-[12px] font-Montserrat font-bold">
            FIRST NAME
          </label>
          <input
            type="text"
            className="w-[100%] px-3 py-2 outline-none shadow-xl mt-[5px] border-b-2 border-black rounded-b-xl"
            placeholder="Enter First Name"
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </div>
        <div className="mb-[5px] mt-10">
          <label className="text-[12px] font-Montserrat font-bold">
            {" "}
            LAST NAME
          </label>
          <input
            type="text"
            className="w-[100%] px-3 py-2 outline-none shadow-xl mt-[5px] border-b-2 border-black rounded-b-xl"
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
            className="w-[100%] px-3 py-2 outline-none shadow-xl mt-[5px] border-b-2 border-black rounded-b-xl"
            placeholder="name@email.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-[5px] mt-10">
          <label className="font-Montserrat text-[12px] font-bold">
            PASSWORD
          </label>
          <input
            type="password"
            className="w-[100%] px-3 py-2 outline-none shadow-xl mt-[5px] border-b-2 border-black rounded-b-xl"
            placeholder="**************"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="w-[150px] h-[59px] mx-auto mb-5 mt-7">
          <button
            type="submit"
            className="bg-black text-white rounded-lg w-[150px] h-[59px] mx-auto"
          >
            Sign Up
          </button>
        </div>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <button className="text-navigation font-bold">
            <Link to="/login"> Login </Link>
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
}
export default SignUp;
