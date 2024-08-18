import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoEyeOff, IoEye } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Auth/firebase";
import { toast } from "react-toastify";
import PageNav from "../Pages/PageNav";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const adminSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/listhospital");
      toast.success("Add your hospital");
    } catch (error) {
      console.log(error.message);
      toast.error("Invalid Credentials");
    }
  };

  return (
    <main className="bg-primary">
      <div className="border-b-2 border-white">
        <PageNav />
      </div>
      {/* Admin Login Form */}
      <form
        onSubmit={adminSubmit}
        className="relative px-10 py-10 lg:w-[700px] h-[550px]  rounded-xl w-[100%] mt-[50px] lg:mx-[23%] lg:bg-white md:bg-white"
      >
        <Link to="/">
          <IoClose className="text-5xl absolute right-4 top-4" />
        </Link>
        <h1 className="font-Rochester text-5xl font-bold text-center mt-10 mb-5">
          CF
        </h1>
        <h2 className="font-Montserrat text-[24px] font-bold text-center mb-5">
          Welcome Admin
        </h2>
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
        <div className="relative">
          <label className="font-Montserrat text-[12px] font-bold">
            PASSWORD
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="*****************"
            className="w-[100%] px-3 py-2 outline-none shadow-sm mt-[5px] border-b-2 border-black rounded-b-xl mb-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            className="absolute right-3 top-10 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <IoEyeOff size={24} /> : <IoEye size={24} />}
          </div>
        </div>
        <small>
          Forgot Password?{" "}
          <Link to="/forgot" className="font-extrabold">
            Here
          </Link>
        </small>
        <button
          type="submit"
          className="bg-black text-white rounded-lg flex mx-auto px-10 py-3 mt-4 font-bold hover:bg-transparent hover:border-2 hover:text-black"
        >
          Login
        </button>
        <p className="mt-4 text-center">
          Want to list your hospital?{" "}
          <button className="hover:text-navigation font-bold" id="btn">
            <Link to="/admin-signup"> Sign Up</Link>
          </button>
        </p>
      </form>
      <Footer />
    </main>
  );
};

export default AdminLogin;
