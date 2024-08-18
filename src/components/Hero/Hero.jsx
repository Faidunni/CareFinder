import React from "react";
import image from "../../assets/images/img-1.png";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <main className="pt-[80px]">
      <div className="bg-primary grid grid-cols-1 sm:grid-cols-2 gap-[10%]">
        <div className="sm:px-10 my-auto px-5">
          <h1 className="font-9 text-[30px] leading-30px font-Lato sm:mt-0 mt-5">
            We Care About You
          </h1>
          <p className="font-4 text-18px leading-28px mb-[30px] pr-10 mt-1 font-Lato text-navigation">
            Lorem ipsum dolor sit amet consectetur. Lorem tempus in luctus
            aliquet tincidunt ornare odio fames dignissim. Iaculis luctus massa
            at purus at blandit.
          </p>
          <NavLink to="/login">
            <div>
              <button className="font-7 font-Lato text-16px leading-24px bg-black text-secondary sm:px-8 py-3 rounded-full px-5">
                Get Started Now
              </button>
            </div>
          </NavLink>
        </div>

        {/* Image section */}
        <img
          src={image}
          alt="image"
          className="lg:w-[732.15px] lg:h-[437.67px] sm:w-[370px] sm:h-[487.67px] md:w-[400px] md:h-[487.67px] px-[20px] md:my-[20px] lg:my-0 lg:px-0 object-cover mb-[80px]"
        />
      </div>
    </main>
  );
};

export default Hero;
