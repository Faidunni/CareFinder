import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import image from "../../assets/images/Frame 3.png";

const Footer = () => {
  return (
    <section className="bg-black mt-[60px] py-5 text-white">
      <h1 className="font-Rochester font-medium text-3xl text-white sm:px-10 mb-[20px] px-5">
        CF
      </h1>
      <hr />
      <div className="sm:px-10 py-5 grid lg:grid-cols-4 font-Lato grid-cols-2 md:grid-cols-3 px-5">
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
      <div className="flex justify-between sm:px-10 lg:px-[40px] py-5 flex-col lg:flex-row md:flex-row px-5">
        <p className="text-icon mb-2">
          &#169; Faizat Hazeez. All rights reserved.
        </p>
        <div className="">
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
