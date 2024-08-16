import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import image from "../../assets/images/Frame 3.png";

const AddHospital = () => {
  return (
    <section className="mt-[60px]">
      <div>
        <div className="bg-content flex align-center flex-col">
          <div className="px-10 py-[60px] mx-auto">
            <h2 className="mb-8 font-Roboto text-[#344054] lg:text-[40px] text-[20px]">
              Want to list an hospital instead?
            </h2>{" "}
            <div className="lg:ml-[30%] ml-[18%]">
              {" "}
              <button className="font-7 font-Lato text-16px leading-24px bg-black text-secondary px-8 py-3 rounded-full">
                Get Started Now{" "}
              </button>{" "}
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="bg-black  py-5 text-white">
        <h1 className="font-Rochester font-medium text-3xl text-white px-10 mb-[20px] ">
          CF
        </h1>
        <hr />
        <div className="px-10 py-5 grid lg:grid-cols-4 font-Lato grid-cols-2 md:grid-cols-3 ">
          <div>
            <ul className="mb-10 lg:mb-0">
              <li className="font-bold pb-[10px]">About</li>
              <li className="pb-[5px] text-icon">Services</li>
              <li className="pb-[5px] text-icon">Portfolio</li>
              <li className="pb-[5px] text-icon">Pricing</li>
              <li className="pb-[5px] text-icon">Customers</li>
              <li className="pb-[5px] text-icon">Careers</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-bold pb-[10px]">Resources</li>
              <li className="pb-[5px] text-icon">Docs</li>
              <li className="pb-[5px] text-icon">Blog</li>
              <li className="pb-[5px] text-icon">eBooks</li>
              <li className="pb-[5px] text-icon">Webinars</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-bold pb-[10px]">Use Cases</li>
              <li className="pb-[5px] text-icon">Help</li>
              <li className="pb-[5px] text-icon">Sales</li>
              <li className="pb-[5px] text-icon">Advertise</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-bold pb-[10px]">Tools</li>
              <li className="pb-[5px] text-icon">Help</li>
              <li className="pb-[5px] text-icon">Sales</li>
              <div className="flex gap-4 mt-[10px] text-icon">
                <FaTwitter className="hover:text-white" />
                <FaInstagram className="hover:text-white" />
                <FaLinkedin className="hover:text-white" />
                <FaYoutube className="hover:text-white" />
                <FaFacebook className="hover:text-white" />
              </div>
            </ul>
          </div>
        </div>
        <hr />
        <div className="flex justify-between px-10 lg:px-[40px] py-5">
          <p className="text-icon">
            &#169; Faizat Hazeez. All rights reserved.
          </p>
          <div className="">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddHospital;

// import React from "react";
// import Footer from "../Footer/Footer";

// const AddHospital = () => {
//   return (
//     <>
//       <div className="bg-navigation flex align-center flex-col px-10 py-10">
//         <h2>Want to list an hospital instead?</h2>
//         <div>
//           <button className="font-7 font-Lato text-16px leading-24px bg-black text-secondary px-8 py-3 rounded-full">
//             Get Started Now
//           </button>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default AddHospital;
