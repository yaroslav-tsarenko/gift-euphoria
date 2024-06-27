import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Container1.css";

const Container1 = ({
  className = "",
  e57fa64445b74a8491814262a,
  linkHeading5Carrefour,
  iNSTOREOnly,
  propWidth,
  propHeight,
}) => {
  const containerStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div className={`container11 ${className}`} style={containerStyle}>
      <img
        className="e57fa644-45b7-4a84-9181-4262a2-icon"
        alt=""
        src={e57fa64445b74a8491814262a}
      />
      <div className="link-heading-5-carrefour-parent">
        <div className="link-heading6">{linkHeading5Carrefour}</div>
        <div className="background7">
          <div className="container12">
            <div className="in-store-only2">{iNSTOREOnly}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Container1.propTypes = {
  className: PropTypes.string,
  e57fa64445b74a8491814262a: PropTypes.string,
  linkHeading5Carrefour: PropTypes.string,
  iNSTOREOnly: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
};

export default Container1;
