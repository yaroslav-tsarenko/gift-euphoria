import PropTypes from "prop-types";
import "./DebenhamsJoyalukkas.css";

const DebenhamsJoyalukkas = ({
  className = "",
  c2b1a880Ff884c7dBef52eace,
  linkHeading5Debenhams,
}) => {
  return (
    <div className={`debenhams-joyalukkas ${className}`}>
      <div className="container41">
        <img
          className="c2b1a880-ff88-4c7d-bef5-2eace6-icon"
          alt=""
          src={c2b1a880Ff884c7dBef52eace}
        />
        <div className="debenhams-joyalukkas-links">
          <div className="link-heading26">{linkHeading5Debenhams}</div>
          <div className="background15">
            <div className="in-store-only4">IN-STORE only</div>
          </div>
        </div>
      </div>
    </div>
  );
};

DebenhamsJoyalukkas.propTypes = {
  className: PropTypes.string,
  c2b1a880Ff884c7dBef52eace: PropTypes.string,
  linkHeading5Debenhams: PropTypes.string,
};

export default DebenhamsJoyalukkas;
