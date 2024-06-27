import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({
  className = "",
  c06dddb586224cea8ee8B1753,
  iOSRating,
  heading548,
  halfStarsvgFill,
  kReviews,
}) => {
  return (
    <div className={`c06dddb5-8622-4cea-8ee8-b17531-parent ${className}`}>
      <img
        className="c06dddb5-8622-4cea-8ee8-b17531-icon"
        alt=""
        src={c06dddb586224cea8ee8B1753}
      />
      <div className="ios-rating-parent">
        <b className="ios-rating">{iOSRating}</b>
        <div className="heading-5-48-parent">
          <div className="heading-51">{heading548}</div>
          <div className="starsvg-parent">
            <img className="starsvg-icon5" alt="" src="/starsvg.svg" />
            <img className="starsvg-icon6" alt="" src="/starsvg.svg" />
            <img className="starsvg-icon7" alt="" src="/starsvg.svg" />
            <img className="starsvg-icon8" alt="" src="/starsvg.svg" />
            <img
              className="half-starsvg-fill-icon"
              alt=""
              src={halfStarsvgFill}
            />
          </div>
        </div>
        <div className="k-reviews">{kReviews}</div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  c06dddb586224cea8ee8B1753: PropTypes.string,
  iOSRating: PropTypes.string,
  heading548: PropTypes.string,
  halfStarsvgFill: PropTypes.string,
  kReviews: PropTypes.string,
};

export default FrameComponent;
