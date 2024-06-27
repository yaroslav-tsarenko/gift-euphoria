import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Container2.css";

const Container2 = ({
  className = "",
  b1322e9dBc1548e79ba01b2da,
  linkHeading5STARBUCKS,
  propHeight,
  propGap,
}) => {
  const container1Style = useMemo(() => {
    return {
      height: propHeight,
      gap: propGap,
    };
  }, [propHeight, propGap]);

  return (
    <div className={`container40 ${className}`} style={container1Style}>
      <img
        className="b1322e9d-bc15-48e7-9ba0-1b2da7-icon1"
        alt=""
        src={b1322e9dBc1548e79ba01b2da}
      />
      <div className="link-heading-5-starbucks-group">
        <div className="link-heading25">{linkHeading5STARBUCKS}</div>
        <div className="background14">
          <div className="in-store-only3">IN-STORE only</div>
        </div>
      </div>
    </div>
  );
};

Container2.propTypes = {
  className: PropTypes.string,
  b1322e9dBc1548e79ba01b2da: PropTypes.string,
  linkHeading5STARBUCKS: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propGap: PropTypes.any,
};

export default Container2;
