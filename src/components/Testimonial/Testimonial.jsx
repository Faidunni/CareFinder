import React from "react";
import SliderCard from "../Slider/SliderCard";

// const settings = {
//   dots: true,
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   pauseOnHover: true,
// };

// const data = [
//   {
//     name: "Bay Maam",
//     image: [card1],
//     role: "Senior Dotor, ART Inc",
//     heading: "Great Product",
//     review:
//       "Lorem ipsum dolor sit amet consectetur. Arcu nisi magna lectus vestibulum. Mattis consectetur elit a nulla lorem. Eu tristique at sed orci elit massa nulla tellus. Elit ac in ipsum consequat aliquet faucibus ut proin nullam. Pellentesque lectus cras volutpat egestas elit. Et enim morbi gravida et. In morbi in sed ut lobortis amet. Et molestie id sed quis. ",
//   },
//   {
//     name: "John Doe",
//     image: [card2],
//     role: "Junior Dotor, ART Inc",
//     heading: "Nice Product",
//     review:
//       "Lorem ipsum dolor sit amet consectetur. Arcu nisi magna lectus vestibulum. Mattis consectetur elit a nulla lorem. Eu tristique at sed orci elit massa nulla tellus. Elit ac in ipsum consequat aliquet faucibus ut proin nullam. Pellentesque lectus cras volutpat egestas elit. Et enim morbi gravida et. In morbi in sed ut lobortis amet. Et molestie id sed quis. ",
//   },
//   {
//     name: "Jane Doe",
//     image: [card3],
//     role: "Senior Dotor, RUN Inc",
//     heading: "Great Service",
//     review:
//       "Lorem ipsum dolor sit amet consectetur. Arcu nisi magna lectus vestibulum. Mattis consectetur elit a nulla lorem. Eu tristique at sed orci elit massa nulla tellus. Elit ac in ipsum consequat aliquet faucibus ut proin nullam. Pellentesque lectus cras volutpat egestas elit. Et enim morbi gravida et. In morbi in sed ut lobortis amet. Et molestie id sed quis. ",
//   },
//   {
//     name: "Martha Ray",
//     image: [card4],
//     role: "Assistant Nurse, CAT Inc",
//     heading: "Great Produt",
//     review:
//       "Lorem ipsum dolor sit amet consectetur. Arcu nisi magna lectus vestibulum. Mattis consectetur elit a nulla lorem. Eu tristique at sed orci elit massa nulla tellus. Elit ac in ipsum consequat aliquet faucibus ut proin nullam. Pellentesque lectus cras volutpat egestas elit. Et enim morbi gravida et. In morbi in sed ut lobortis amet. Et molestie id sed quis. ",
//   },
//   {
//     name: "Chris Evans",
//     image: [card5],
//     role: "Data Analyat",
//     heading: "Great Product",
//     review:
//       "Lorem ipsum dolor sit amet consectetur. Arcu nisi magna lectus vestibulum. Mattis consectetur elit a nulla lorem. Eu tristique at sed orci elit massa nulla tellus. Elit ac in ipsum consequat aliquet faucibus ut proin nullam. Pellentesque lectus cras volutpat egestas elit. Et enim morbi gravida et. In morbi in sed ut lobortis amet. Et molestie id sed quis. ",
//   },
//   {
//     name: "Mary Joe",
//     image: [card6],
//     role: "Therapist",
//     heading: "Great Product",
//     review:
//       "Lorem ipsum dolor sit amet consectetur. Arcu nisi magna lectus vestibulum. Mattis consectetur elit a nulla lorem. Eu tristique at sed orci elit massa nulla tellus. Elit ac in ipsum consequat aliquet faucibus ut proin nullam. Pellentesque lectus cras volutpat egestas elit. Et enim morbi gravida et. In morbi in sed ut lobortis amet. Et molestie id sed quis. ",
//   },
// ];

const Testimonial = () => {
  return (
    <section className="py-10 px-[80px]">
      <h1 className="font-Lato font-9 text-[40px] mb-[10px]">
        Hear from Our Valued Clients
      </h1>
      <p className="font-4 font-Lato">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione id sit
        odit earum et sunt eius fuga reiciendis, rerum obcaecati iste amet,
        maxime deserunt, quasi a.
      </p>

      {/* <div className="bg-slate-200">
        <Slider {...settings}>
          <div className="w-3/4 m-auto">
            {data.map((item, index) => {
              return (
                <div key={index}>
                  <div className="flex gap-4">
                    <div>
                      <img
                        src={item.image}
                        className="w-[80px] h-[80px] rounded-full object-contain border-black border"
                      />
                    </div>
                    <div>
                      <h2>{item.name}</h2>
                      <p>{item.role}</p>
                    </div>
                  </div>
                  <h2>{item.heading}</h2>
                  <p>{item.review}</p>
                </div>
              );
            })}
          </div>
        </Slider>
      </div> */}
      <SliderCard />
    </section>
  );
};

export default Testimonial;
