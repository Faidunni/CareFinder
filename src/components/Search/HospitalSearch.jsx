// import PropTypes from "prop-types";
// import { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import { hospitalDetails } from "../Data/HospitalDetails";

// const HospitalSearch = ({ searchResult, setSearchResult }) => {
//   console.log("searchResult:", searchResult);
//   console.log("setSearchResult:", setSearchResult);

//   const [inputValue, setInputValue] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleSearch = async () => {
//     try {
//       setLoading(true);
//       const dataFetched = await hospitalDetails(inputValue);
//       setSearchResult(dataFetched);
//       setLoading(false);
//       // console.log(searchResult);
//     } catch (error) {
//       console.error("data not searching:", error);
//     }
//   };

//   return (
//     <section className="lg:px-[80px] py-[30px] px-10">
//       <h2 className="font-Lato font-7 lg:text-[25px] mb-2 text-[23px]">
//         Find hospitals close to your residence
//       </h2>
//       <p className="font-Lato font-4 leading-[21.6px] text-navigation mb-6">
//         Lorem ipsum dolor sit amet consectetur. Nulla suspendisse nulla tempus
//         consectetur. Vulputate turpis non massa non ac viverra sed ullamcorper.
//         In scelerisque feugiat facilisis ornare maecenas vitae lorem. Mattis
//         volutpat venenatis facilisis orci facilisis eleifend elit amet.
//       </p>
//       <div className="relative group w-[400px] mx-auto mb-5">
//         <input
//           type="text"
//           placeholder="Enter location, a zip code. city or State"
//           className="w-[400px] sm:w-[400px]  rounded-full border border-gray-300 py-2 px-4 focus:outline-none focus:border-1 font-Lato font-4 shadow-lg"
//           onChange={handleInputChange}
//           value={inputValue}
//         />
//         <NavLink to={!loading && inputValue ? "login" : "/"}>
//           <button type="submit" className="btn form-btn" onClick={handleSearch}>
//             <FaSearch className="text-secondary absolute bg-black pt-2 pb-2 pl-1 pr-1 text-3xl rounded-full border top-[5px] right-[10px]" />
//           </button>
//         </NavLink>
//       </div>
//     </section>
//   );

//   HospitalSearch.propTypes = {
//     searchResult: PropTypes.array.isRequired,
//     setSearchResult: PropTypes.func.isRequired,
// };

// export default HospitalSearch;
