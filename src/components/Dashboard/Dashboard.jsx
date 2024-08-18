import PropTypes from "prop-types";
import Hero from "../Hero/Hero";
import NavBar from "../NavBar/NavBar";
import AboutUs from "../About/AboutUs";
import HowToSignUp from "../How/HowToSignUp";
import Testimonial from "../Testimonial/Testimonial";
import Footer from "../Footer/Footer";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { hospitalDetails } from "../Data/HospitalDetails";
import { useState } from "react";
import Map from "../../assets/images/Map.png";

const Dashboard = ({ searchResult, setSearchResult }) => {
  console.log("searchResult:", searchResult);
  console.log("setSearchResult:", setSearchResult);

  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const dataFetched = await hospitalDetails(inputValue);
      setSearchResult(dataFetched);
      setLoading(false);
      // console.log(searchResult);
    } catch (error) {
      console.error("data not searching:", error);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="overflow-x-hidden w-[100vw] h-[100vh]">
      <NavBar />
      <Hero />
      <AboutUs />
      <section className="lg:px-[80px] py-[30px] px-5">
        <h2 className="font-Lato font-7 lg:text-[25px] mb-2 text-[23px]">
          Find hospitals close to your residence
        </h2>
        <p className="font-Lato font-4 leading-[21.6px] text-navigation mb-6">
          Lorem ipsum dolor sit amet consectetur. Nulla suspendisse nulla tempus
          consectetur. Vulputate turpis non massa non ac viverra sed
          ullamcorper. In scelerisque feugiat facilisis ornare maecenas vitae
          lorem. Mattis volutpat venenatis facilisis orci facilisis eleifend
          elit amet.
        </p>
        <div className="relative group w-full mx-auto mb-7 sm:w-[400px] sm:mx-auto lg:mx-auto md:mx-auto -ml-2">
          <input
            type="text"
            placeholder="Enter Location, City or State"
            className="w-full sm:w-[400px]  rounded-full border border-gray-300 py-2 px-4 focus:outline-none focus:border-1 font-Lato font-4 shadow-lg "
            onChange={handleInputChange}
            value={inputValue}
          />
          <NavLink to={!loading && inputValue ? "Hospital-list" : "/"}>
            <button
              type="submit"
              className="btn form-btn"
              onClick={handleSearch}
            >
              <FaSearch className="text-secondary absolute bg-black pt-2 pb-2 pl-1 pr-1 text-3xl rounded-full border top-[5px] sm:right-[10px] left-[87%]" />
            </button>
          </NavLink>
        </div>
        <img src={Map} alt="Map" className="h-" />
      </section>

      <HowToSignUp />
      <Testimonial />
      <Footer />
    </div>
  );
};

Dashboard.propTypes = {
  searchResult: PropTypes.array.isRequired,
  setSearchResult: PropTypes.func.isRequired,
};

export default Dashboard;
