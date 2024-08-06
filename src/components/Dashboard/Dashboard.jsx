import React from "react";
import Hero from "../Hero/Hero";
import NavBar from "../NavBar/NavBar";
import AboutUs from "../About/AboutUs";
import HowToSignUp from "../How/HowToSignUp";
import HospitalSearch from "../Search/HospitalSearch";
import Testimonial from "../Testimonial/Testimonial";
import Footer from "../Footer/Footer";

const Dashboard = () => {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <Hero />
      <AboutUs />

      <HospitalSearch />
      <HowToSignUp />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Dashboard;
