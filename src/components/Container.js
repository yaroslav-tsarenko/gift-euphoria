import PropTypes from "prop-types";
import "./Container.css";

const Container = ({
  className = "",
  e2e2858f8e4acd9e213c6bd76,
  alshayaGroupGift,
  card,
}) => {
  return (
    <div className={`container5 ${className}`}>
      <div className="alshaya-image-parent">
        <img
          className="e2e285-8f8e-4acd-9e21-3c6bd765-icon"
          alt=""
          src={e2e2858f8e4acd9e213c6bd76}
        />
      </div>
      <div className="alshaya-group-gift-card-parent">
        <div className="alshaya-group-gift-container">
          <p className="alshaya-group-gift">{alshayaGroupGift}</p>
          <p className="card">{card}</p>
        </div>
        <div className="background3">
          <div className="container6">
            <div className="in-store-only">IN-STORE only</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  e2e2858f8e4acd9e213c6bd76: PropTypes.string,
  alshayaGroupGift: PropTypes.string,
  card: PropTypes.string,
};

export default Container;
