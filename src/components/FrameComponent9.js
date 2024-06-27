import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import "./FrameComponent9.css";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <div className={`homepage-child ${className}`}>
      <div className="heading-4-weve-got-your-bac-parent">
        <div className="heading-4">We’ve got your back from day one</div>
        <div className="frame-parent1">
          <FrameComponent
            c06dddb586224cea8ee8B1753="/c06dddb586224cea8ee8b175312e9e90png@2x.png"
            iOSRating="iOS Rating"
            heading548="4.8"
            halfStarsvgFill="/halfstarsvg-fill@2x.png"
            kReviews="1.1k reviews"
          />
          <FrameComponent
            c06dddb586224cea8ee8B1753="/ac785f765b524808bd1d83086dea6326png@2x.png"
            iOSRating="Google Rating"
            heading548="4.6"
            halfStarsvgFill="/halfstarsvg-fill@2x.png"
            kReviews="1.05k reviews"
          />
          <FrameComponent
            c06dddb586224cea8ee8B1753="/933c75de0e4341e3ab9bbbf98703621cpng@2x.png"
            iOSRating="Android Rating"
            heading548="4.7"
            halfStarsvgFill="/halfstarsvg-fill@2x.png"
            kReviews="3.3k reviews"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
