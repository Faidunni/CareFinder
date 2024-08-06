import React from "react";
import image from "../../assets/images/img-1.png";

const Hero = () => {
  return (
    <main>
      <div className="bg-primary grid grid-cols-1 sm:grid-cols-2 gap-[10%]">
        {/* className="bg-primary flex justify-between gap-[10%]" */}
        <div className="px-10 my-auto">
          <h1 className="font-9 text-[30px] leading-30px font-Lato ">
            We Care About You
          </h1>
          <p className="font-4 text-18px leading-28px mb-[30px] pr-10 mt-1 font-Lato text-navigation">
            Lorem ipsum dolor sit amet consectetur. Lorem tempus in luctus
            aliquet tincidunt ornare odio fames dignissim. Iaculis luctus massa
            at purus at blandit.
          </p>
          <div>
            <button className="font-7 font-Lato text-16px leading-24px bg-black text-secondary px-8 py-3 rounded-full">
              Get Started Now
            </button>
          </div>
        </div>
        {/* Image section */}
        <img
          src={image}
          alt=""
          className="lg:w-[732.15px] lg:h-[437.67px] sm:w-[370px] sm:h-[487.67px] md:w-[400px] md:h-[487.67px] px-[30px] md:my-[20px] lg:my-0 lg:px-0 object-cover mb-[80px]"
        />
      </div>
    </main>
  );
};

export default Hero;
