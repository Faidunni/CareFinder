import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import card1 from "../../assets/images/card-1.jpg";
import card2 from "../../assets/images/card-2.jpg";
import card3 from "../../assets/images/card-3.jpg";
import card4 from "../../assets/images/card-4.jpg";
import card5 from "../../assets/images/card-5.jpg";
import card6 from "../../assets/images/card-6.jpg";

const SliderCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    autoplay: true,
  };
  return (
    <section className="bg-gray-300 mx-auto lg:w-3/4 mt-[50px]">
      <Slider {...settings}>
        <div className="lg:px-[150px] lg:py-[60px] px-[40px] py-[40px]">
          <div className="flex gap-4 mb-[10px]">
            <div>
              <img
                src={card1}
                alt=""
                className="w-[100px] h-[100px] rounded-full object-contain"
              />
            </div>
            <div className="mt-[15px]">
              <h1 className="font-Lato text-[24.65px] font-7 text-heading">
                Bay Maam
              </h1>
              <p className="text-text">Senior Doctor, ART Inc</p>
            </div>
          </div>
          <h2 className="font-Lato font-7 text-[27px] mb-[5px]">
            Great Product
          </h2>
          <p className="font-Lato leading-[30px]">
            Lorem ipsum dolor sit amet consectetur. Arcu nisi magna lectus
            vestibulum. Mattis consectetur elit a nulla lorem. Eu tristique at
            sed orci elit massa nulla tellus. Elit ac in ipsum consequat aliquet
            faucibus ut proin nullam. Pellentesque lectus cras volutpat egestas
            elit.
          </p>
        </div>
        <div className="lg:px-[150px] lg:py-[60px] px-[40px] py-[40px]">
          <div className="flex gap-4 mb-[10px]">
            <div>
              <img
                src={card2}
                alt=""
                className="w-[100px] h-[100px] rounded-full object-contain"
              />
            </div>
            <div className="mt-[15px]">
              <h1 className="font-Lato text-[24.65px] font-7 text-heading">
                John Doe
              </h1>
              <p className="text-text">Junior Dotor, ART Inc</p>
            </div>
          </div>
          <h2 className="font-Lato font-7 text-[27px] mb-[5px]">
            Nice Product
          </h2>
          <p className="font-Lato leading-[30px]">
            Lorem ipsum dolor sit amet consectetur. Arcu nisi magna lectus
            vestibulum. Mattis consectetur elit a nulla lorem. Eu tristique at
            sed orci elit massa nulla tellus. Elit ac in ipsum consequat aliquet
            faucibus ut proin nullam. Pellentesque lectus cras volutpat egestas
            elit.
          </p>
        </div>
        <div className="lg:px-[150px] lg:py-[60px] px-[40px] py-[40px]">
          <div className="flex gap-4 mb-[10px]">
            <div>
              <img
                src={card3}
                alt=""
                className="w-[100px] h-[100px] rounded-full object-contain"
              />
            </div>
            <div className="mt-[15px]">
              <h1 className="font-Lato text-[24.65px] font-7 text-heading">
                Jane Doe
              </h1>
              <p className="text-text">Surgeon, RUN Inc</p>
            </div>
          </div>
          <h2 className="font-Lato font-7 text-[27px] mb-[5px]">
            Great Service
          </h2>
          <p className="font-Lato leading-[30px]">
            Lorem ipsum dolor sit amet consectetur. Arcu nisi magna lectus
            vestibulum. Mattis consectetur elit a nulla lorem. Eu tristique at
            sed orci elit massa nulla tellus. Elit ac in ipsum consequat aliquet
            faucibus ut proin nullam. Pellentesque lectus cras volutpat egestas
            elit.
          </p>
        </div>
        <div className="lg:px-[150px] lg:py-[60px] px-[40px] py-[40px]">
          <div className="flex gap-4 mb-[10px]">
            <div>
              <img
                src={card4}
                alt=""
                className="w-[100px] h-[100px] rounded-full object-contain"
              />
            </div>
            <div className="mt-[15px]">
              <h1 className="font-Lato text-[24.65px] font-7 text-heading">
                Martha Ray
              </h1>
              <p className="text-text">Assistant Nurse, CAT Inc</p>
            </div>
          </div>
          <h2 className="font-Lato font-7 text-[27px] mb-[5px]">
            Great Product
          </h2>
          <p className="font-Lato leading-[30px]">
            Lorem ipsum dolor sit amet consectetur. Arcu nisi magna lectus
            vestibulum. Mattis consectetur elit a nulla lorem. Eu tristique at
            sed orci elit massa nulla tellus. Elit ac in ipsum consequat aliquet
            faucibus ut proin nullam. Pellentesque lectus cras volutpat egestas
            elit.
          </p>
        </div>
        <div className="lg:px-[150px] lg:py-[60px] px-[40px] py-[40px]">
          <div className="flex gap-4 mb-[10px]">
            <div>
              <img
                src={card5}
                alt=""
                className="w-[100px] h-[100px] rounded-full object-contain"
              />
            </div>
            <div className="mt-[15px]">
              <h1 className="font-Lato text-[24.65px] font-7 text-heading">
                Chris Evans
              </h1>
              <p className="text-text">Data Analyst</p>
            </div>
          </div>
          <h2 className="font-Lato font-7 text-[27px] mb-[5px]">
            Great Product
          </h2>
          <p className="font-Lato leading-[30px]">
            Lorem ipsum dolor sit amet consectetur. Arcu nisi magna lectus
            vestibulum. Mattis consectetur elit a nulla lorem. Eu tristique at
            sed orci elit massa nulla tellus. Elit ac in ipsum consequat aliquet
            faucibus ut proin nullam. Pellentesque lectus cras volutpat egestas
            elit.
          </p>
        </div>
        <div className="lg:px-[150px] lg:py-[60px] px-[40px] py-[40px]">
          <div className="flex gap-4 mb-[10px]">
            <div>
              <img
                src={card6}
                alt=""
                className="w-[100px] h-[100px] rounded-full object-contain "
              />
            </div>
            <div className="mt-[15px]">
              <h1 className="font-Lato text-[24.65px] font-7 text-heading">
                Mary Joe
              </h1>
              <p className="text-text">Therapist</p>
            </div>
          </div>
          <h2 className="font-Lato font-7 text-[27px] mb-[5px]">
            Great Product
          </h2>
          <p className="font-Lato leading-[30px]">
            Lorem ipsum dolor sit amet consectetur. Arcu nisi magna lectus
            vestibulum. Mattis consectetur elit a nulla lorem. Eu tristique at
            sed orci elit massa nulla tellus. Elit ac in ipsum consequat aliquet
            faucibus ut proin nullam. Pellentesque lectus cras volutpat egestas
            elit.
          </p>
        </div>
      </Slider>
    </section>
  );
};

export default SliderCard;
