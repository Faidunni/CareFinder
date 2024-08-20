import PropTypes from "prop-types";

const HospitalSearchResult = ({ hospitalsData }) => {
  return (
    <>
      <section className="bg-card mb-5  text-[18px] sm:mx-10 px-10 py-10 font-Lato rounded-xl shadow-lg mt-5 mx-5">
        <div className="hospital-details">
          <h3 className=" font-9 mb-2">{hospitalsData.name}</h3>
          <p className="mb-2 font-7">
            {hospitalsData.location.formatted_address}
          </p>

          <p className="mb-1">{hospitalsData.location.country}</p>
          <p>
            <span>🚶‍♂️</span>
            {hospitalsData.distance}km
          </p>
        </div>
      </section>
    </>
  );
};

// Add prop types validation
HospitalSearchResult.propTypes = {
  hospitalsData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      formatted_address: PropTypes.string,
      region: PropTypes.string,
      country: PropTypes.string,
    }).isRequired,
    distance: PropTypes.number.isRequired,
  }).isRequired,
};

export default HospitalSearchResult;
