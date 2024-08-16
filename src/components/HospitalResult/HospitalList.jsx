import PropTypes from "prop-types";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { BiDownload, BiShareAlt } from "react-icons/bi";

import { useState } from "react";
import { CSVLink } from "react-csv";
import HospitalSearchResult from "./HospitalSearchResult";
import { FaSearch } from "react-icons/fa";
import { hospitalDetails } from "../Data/HospitalDetails";
import AddHospital from "./AddHospital";

const HospitalList = ({ searchResult, setSearchResult }) => {
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSearch = async () => {
    try {
      setLoading(true);
      setSearchResult([]);
      const dataFetched = await hospitalDetails(inputValue);
      setSearchResult(dataFetched);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const headers = [
    { label: "Hospital Name", key: "name" },
    { label: "Hospital Intro", key: "hospitalIntro" },
    { label: "Hospital Address", key: "results.address" },
  ];

  const csvReport = {
    data: searchResult,
    headers: headers,
    filename: "Hospitals_Search_Report.csv",
  };

  const handleDownloadHospitalsData = () => {
    const csvData = searchResult.map((hospital) => ({
      hospitalName: hospital.name,
      hospitalIntro: hospital.hospitalIntro,
      coordinates: hospital.geocodes.main,
    }));

    const csvContent = [
      headers.map((header) => header.label).join(","),
      ...csvData.map((row) => Object.values(row).join(",")),
    ].join("\n");

    const encodedUri = encodeURI("data:text/csv;charset=utf-8," + csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", csvReport.filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        const shareText = searchResult
          .map(
            (hospital, index) =>
              `Hospital ${index + 1}:\n` +
              `Name: ${hospital.name}\n` +
              `Intro: ${hospital.hospitalIntro}\n` +
              `Coordinates: Latitude ${hospital.geocodes.main.latitude}, Longitude ${hospital.geocodes.main.longitude}\n`
          )
          .join("\n-------------------\n");

        await navigator.share({
          title: "Hospital Search Results",
          text: shareText,
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      console.log("Share API not supported in this browser.");
    }
  };

  return (
    <>
      <NavBar />
      <div className="relative group lg:w-[1200px] w-[400px]  sm:mx-auto lg:mx-auto md:mx-auto mx-5 my-5">
        <input
          type="text"
          placeholder="Enter location, a zip code, city or State"
          className="lg:w-[1200px] w-[400px] rounded-full border border-gray-300 py-3 px-5 focus:outline-none focus:border-1 font-Lato font-4 shadow-lg"
          onChange={handleInputChange}
          value={inputValue}
        />
        <button type="submit" className="btn form-btn " onClick={handleSearch}>
          <FaSearch className="text-secondary absolute bg-black pt-2 pb-2 pl-1 pr-1 text-3xl rounded-full border top-[9px] sm:right-[14px] left-[87%]" />
        </button>
      </div>

      <div className="flex justify-between px-10 py-4 flex-col lg:flex-row">
        <div className="font-Lato text-2xl font-7 lg:mx-0 mx-auto lg:mb-0 mb-5">
          <p>
            <span>{searchResult.length}</span> Hospitals in <br /> Your Location
          </p>
        </div>
        <div className="flex bg-primary lg:px-6 py-3 px-4 rounded-[10px] font-Lato lg:flex-row flex-col ">
          <div className="mx-auto">
            <p>Want to download the report or share with</p>
            <p>someone? We got you covered!</p>
          </div>
          <div className="flex lg:pl-10 mx-auto gap-2 mt-5 lg:mt-0 lg:mb-0 mb-2">
            <CSVLink {...csvReport}>
              <div className="bg-black text-white  rounded-full ">
                <BiDownload
                  className="text-5xl px-[12px] py-[12px]"
                  onClick={handleDownloadHospitalsData}
                />
              </div>
            </CSVLink>
            <div className="rounded-full bg-black text-white ">
              <BiShareAlt
                className="text-5xl px-[14px] py-[14px]"
                onClick={handleShare}
              />
            </div>
          </div>
        </div>
      </div>
      <p className="px-10 font-lato text-[18px] mb-5 text-[#667085] hidden sm:block">
        Lorem ipsum dolor sit amet consectetur. Nulla suspendisse nulla tempus
        consectetur. Vulputate turpis non massa non ac viverra sed ullamcorper.
        In scelerisque feugiat facilisis ornare maecenas vitae lorem. Mattis
        volutpat venenatis facilisis orci facilisis eleifend elit amet.
      </p>
      {loading ? (
        "loading..."
      ) : (
        <div>
          <ul className="hospital-list-detail">
            {searchResult.map((hospital) => (
              <HospitalSearchResult
                hospitalsData={hospital}
                key={hospital.fsq_id}
              />
            ))}
          </ul>
        </div>
      )}
      <AddHospital />
    </>
  );
};

// Add prop validation
HospitalList.propTypes = {
  searchResult: PropTypes.arrayOf(
    PropTypes.shape({
      fsq_id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      hospitalIntro: PropTypes.string,
      geocodes: PropTypes.shape({
        main: PropTypes.shape({
          latitude: PropTypes.number,
          longitude: PropTypes.number,
        }).isRequired,
      }).isRequired,
      location: PropTypes.shape({
        address: PropTypes.string,
        formatted_address: PropTypes.string,
      }),
    })
  ).isRequired,
  setSearchResult: PropTypes.func.isRequired,
};

export default HospitalList;
