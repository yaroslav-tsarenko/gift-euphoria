import { useMemo } from "react";
import PropTypes from "prop-types";
import "./StarbucksCard.css";

const StarbucksCard = ({
  className = "",
  b1322e9dBc1548e79ba01b2da,
  linkHeading5STARBUCKS,
  propPadding,
}) => {
  const starbucksCardStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={`starbucks-card ${className}`} style={starbucksCardStyle}>
      <div className="container7">
        <img
          className="b1322e9d-bc15-48e7-9ba0-1b2da7-icon"
          alt=""
          src={b1322e9dBc1548e79ba01b2da}
        />
        <div className="link-heading-5-starbucks-parent">
          <div className="link-heading5">{linkHeading5STARBUCKS}</div>
          <div className="background4">
            <div className="container8">
              <div className="in-store-only1">IN-STORE only</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

StarbucksCard.propTypes = {
  className: PropTypes.string,
  b1322e9dBc1548e79ba01b2da: PropTypes.string,
  linkHeading5STARBUCKS: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default StarbucksCard;
