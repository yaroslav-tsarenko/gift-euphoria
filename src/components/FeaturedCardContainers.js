import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FeaturedCardContainers.css";

const FeaturedCardContainers = ({
  className = "",
  ea965a101ec4efa82542ce656,
  linkHeading5HappyYOUCard,
  propHeight,
  propWidth,
  propPadding,
}) => {
  const featuredCardContainersStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      padding: propPadding,
    };
  }, [propHeight, propWidth, propPadding]);

  return (
    <div
      className={`featured-card-containers ${className}`}
      style={featuredCardContainersStyle}
    >
      <div className="container4">
        <img
          className="ea965a1-01ec-4efa-8254-2ce656c-icon"
          alt=""
          src={ea965a101ec4efa82542ce656}
        />
        <div className="link-heading4">{linkHeading5HappyYOUCard}</div>
      </div>
    </div>
  );
};

FeaturedCardContainers.propTypes = {
  className: PropTypes.string,
  ea965a101ec4efa82542ce656: PropTypes.string,
  linkHeading5HappyYOUCard: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
};

export default FeaturedCardContainers;
