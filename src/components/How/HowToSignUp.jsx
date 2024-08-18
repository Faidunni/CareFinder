import image1 from "../../assets/images/plus.png";
import image2 from "../../assets/images/truck.png";
import image3 from "../../assets/images/firstaid.png";
import { NavLink } from "react-router-dom";

const HowToSignUp = () => {
  return (
    <section className="bg-primary lg:px-[180px] py-[40px] relative px-5">
      <div className="flex justify-between mb-[50px]">
        <h1 className="font-7 text-[33px] leading-[36.2px] text-gray-600 lg:text-[35px]">
          {" "}
          Got a Hospital to list?
        </h1>
        <div className="absolute bottom-[1%] lg:top-[9%] lg:right-[15%] mb-[10px] md:top-[9%] md:right-[5%]">
          <NavLink to="/admin-login">
            <button className="font-7 font-Lato text-16px leading-24px bg-black text-secondary px-8 py-3 rounded-full">
              Get Started Now
            </button>
          </NavLink>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-[50px] lg:mb-0">
        <div className="bg-card px-[40px] py-[40px] lg:mt-[60px] rounded-2xl">
          <img src={image1} alt="" className="mb-[20px]" />
          <h3 className="mb-[10px] font-9 font-lato">Sign up with us</h3>
          <p className="leading-[28px] font-lato">
            We could assist you in placing your hospital to get shown when
            searched for in three simple steps
          </p>
        </div>
        <div className="bg-black px-[40px] py-[40px] text-white rounded-2xl">
          <img src={image2} alt="" className="mb-[20px]" />
          <h3 className="mb-[10px] font-9 font-lato">Create an Account</h3>
          <p className="leading-[28px] font-lato ">
            Find all relevant sections, to populate the fields and get your
            hospital listed on our platform
          </p>
        </div>
        <div className="bg-card px-[30px] py-[30px] lg:mt-[60px] rounded-2xl">
          <img src={image3} alt="" className="mb-[20px]" />
          <h3 className="font-9 mb-[10px]">List Your Hospital</h3>
          <p className="leading-[28px] font-Lato">
            Follow the prompts and fill all relevant sections, and get your
            hospital listed as soon as we approve
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToSignUp;
