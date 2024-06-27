import PropTypes from "prop-types";
import "./Container3.css";

const Container3 = ({
  className = "",
  e2e2858f8e4acd9e213c6bd76,
  alshayaGroupGift,
  card,
}) => {
  return (
    <div className={`container42 ${className}`}>
      <img
        className="e2e285-8f8e-4acd-9e21-3c6bd765-icon1"
        alt=""
        src={e2e2858f8e4acd9e213c6bd76}
      />
      <div className="alshaya-group-gift-card-group">
        <div className="alshaya-group-gift-container1">
          <p className="alshaya-group-gift1">{alshayaGroupGift}</p>
          <p className="card1">{card}</p>
        </div>
        <div className="background16">
          <div className="in-store-only5">IN-STORE only</div>
        </div>
      </div>
    </div>
  );
};

Container3.propTypes = {
  className: PropTypes.string,
  e2e2858f8e4acd9e213c6bd76: PropTypes.string,
  alshayaGroupGift: PropTypes.string,
  card: PropTypes.string,
};

export default Container3;
