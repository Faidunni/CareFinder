import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/About/AboutUs";
// import HospitalSearch from "./components/Search/HospitalSearch";
import HowToSignUp from "./components/How/HowToSignUp";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/Pages/SignUp";
import Login from "./components/Pages/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import ForgotPassword from "./components/Pages/ForgotPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./components/Auth/firebase";
import NavBar from "./components/NavBar/NavBar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import HospitalList from "./components/HospitalResult/HospitalList";
import AdminLogin from "./components/Admin-Page/Login";
import AdminSignup from "./components/Admin-Page/Signup";
import ListHospital from "./components/Admin-Page/ListHospital";

const App = () => {
  const [user, setUser] = useState();
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              searchResult={searchResult}
              setSearchResult={setSearchResult}
            />
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-signup" element={<AdminSignup />} />
        <Route path="/listhospital" element={<ListHospital />} />

        <Route
          path="/navbar"
          element={user ? <Navigate to="/" /> : <NavBar />}
        />
        <Route path="/hospital-list" element={<PrivateRoute />}>
          <Route
            path="/hospital-list"
            element={
              <HospitalList
                searchResult={searchResult}
                setSearchResult={setSearchResult}
              />
            }
          />
        </Route>
        <Route path="/hero" element={<Hero />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/how-to" element={<HowToSignUp />} />

        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </BrowserRouter>
  );
};

export default App;
